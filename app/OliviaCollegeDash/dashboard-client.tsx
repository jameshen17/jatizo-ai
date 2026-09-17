"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./dashboard.module.css";
import { timeline } from "./data";
import type { Status, Task } from "./data";

const STORAGE_KEY = "olivia-college-dashboard-v1";
const LA_TIME_ZONE = "America/Los_Angeles";
const CHINA_TIME_ZONE = "Asia/Shanghai";
const statusOptions: { value: Status; label: string }[] = [
  { value: "DONE", label: "已完成" },
  { value: "IN_PROGRESS", label: "进行中" },
  { value: "WAITING", label: "等待外部回复" },
  { value: "NOT_STARTED", label: "未开始" },
];

function dateOrdinal(value?: string) {
  if (!value) return null;
  const [year, month, day] = value.split("-").map(Number);
  return Date.UTC(year, month - 1, day) / 86400000;
}

function losAngelesTodayOrdinal(now: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: LA_TIME_ZONE,
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(now);
  const value = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return Date.UTC(Number(value.year), Number(value.month) - 1, Number(value.day)) / 86400000;
}

function taskDateOrdinal(task: Task) {
  return dateOrdinal(task.internalDeadline || task.deadline);
}

function daysUntil(task: Task, now = new Date()) {
  const deadline = taskDateOrdinal(task);
  if (deadline === null) return null;
  return deadline - losAngelesTodayOrdinal(now);
}

function formatDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", { timeZone: "UTC", month: "short", day: "numeric" })
    .format(new Date(Date.UTC(year, month - 1, day)));
}

function formatCurrentTime(now: Date, timeZone: string) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(now);
}

function urgency(task: Task) {
  if (task.status === "DONE") return "done";
  const days = daysUntil(task);
  if (days === null) return "normal";
  if (days < 0) return "overdue";
  if (days <= 3) return "critical";
  if (days <= 7) return "week";
  if (days <= 14) return "soon";
  return "normal";
}

function urgencyLabel(task: Task) {
  if (task.status === "DONE") return "已完成";
  const days = daysUntil(task);
  if (days === null) return "";
  if (days < 0) return `已逾期 ${Math.abs(days)} 天`;
  if (days === 0) return "今天到期";
  if (days <= 3) return `紧急 · 剩 ${days} 天`;
  if (days <= 7) return `本周到期 · 剩 ${days} 天`;
  return `剩 ${days} 天`;
}

function Deadline({ task }: { task: Task }) {
  const kind = urgency(task);
  return (
    <div className={`${styles.deadline} ${styles[kind]}`}>
      {task.internalDeadline && (
        <><span className={styles.dateLabel}>内部</span><strong>{formatDate(task.internalDeadline)}</strong></>
      )}
      {task.deadline && <strong>{formatDate(task.deadline)}</strong>}
      {urgencyLabel(task) && <span className={styles.urgency}>{urgencyLabel(task)}</span>}
      {task.officialDeadlineLabel && (
        <span className={styles.official}>官方：{task.officialDeadlineLabel}</span>
      )}
      {task.deadlineLabel && <strong className={styles.textDeadline}>{task.deadlineLabel}</strong>}
    </div>
  );
}

export default function OliviaCollegeDashboard({ initialTasks }: { initialTasks: Task[] }) {
  const [tasks, setTasks] = useState(initialTasks);
  const [ready, setReady] = useState(false);
  const [now, setNow] = useState<Date | null>(null);
  const [search, setSearch] = useState("");
  const [priority, setPriority] = useState("ALL");
  const [status, setStatus] = useState("ALL");
  const [category, setCategory] = useState("ALL");
  const [urgentOnly, setUrgentOnly] = useState(false);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const edits = JSON.parse(saved) as Record<number, { status?: Status; notes?: string }>;
        setTasks(initialTasks.map((task) => ({ ...task, ...edits[task.id] })));
      }
    } finally { setReady(true); }
  }, []);

  useEffect(() => {
    const updateTime = () => setNow(new Date());
    updateTime();
    const timer = window.setInterval(updateTime, 60000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const edits = Object.fromEntries(tasks.map(({ id, status, notes }) => [id, { status, notes: notes || "" }]));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(edits));
  }, [tasks, ready]);

  const updateTask = (id: number, patch: Partial<Task>) => {
    setTasks((current) => current.map((task) => task.id === id ? { ...task, ...patch } : task));
  };

  const categories = useMemo(() => [...new Set(tasks.map((task) => task.category))].sort(), [tasks]);
  const filtered = useMemo(() => tasks
    .filter((task) => !search || `${task.title} ${task.action} ${task.category}`.toLowerCase().includes(search.toLowerCase()))
    .filter((task) => priority === "ALL" || task.priority === priority)
    .filter((task) => status === "ALL" || task.status === status)
    .filter((task) => category === "ALL" || task.category === category)
    .filter((task) => !urgentOnly || task.priority === "P0" || ["overdue", "critical", "week"].includes(urgency(task)))
    .sort((a, b) => {
      const aTime = taskDateOrdinal(a) ?? Number.MAX_SAFE_INTEGER;
      const bTime = taskDateOrdinal(b) ?? Number.MAX_SAFE_INTEGER;
      return sortDirection === "asc" ? aTime - bTime : bTime - aTime;
    }), [tasks, search, priority, status, category, urgentOnly, sortDirection, now]);

  const critical = useMemo(() => tasks.filter((task) => task.status !== "DONE")
    .sort((a, b) => {
      const p = { P0: 0, P1: 1, P2: 2 };
      return p[a.priority] - p[b.priority] || (taskDateOrdinal(a) ?? Infinity) - (taskDateOrdinal(b) ?? Infinity);
    }).slice(0, 5), [tasks]);

  const stats = [
    ["Total Tasks", tasks.length],
    ["P0 Critical", tasks.filter((t) => t.priority === "P0" && t.status !== "DONE").length],
    ["Due in 7 Days", tasks.filter((t) => { const d = daysUntil(t); return t.status !== "DONE" && d !== null && d >= 0 && d <= 7; }).length],
    ["In Progress", tasks.filter((t) => t.status === "IN_PROGRESS").length],
    ["Completed", tasks.filter((t) => t.status === "DONE").length],
  ];

  const progressCategories = ["Common App", "ED", "EA", "Portfolio", "UC", "RD"];

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div>
          <p className={styles.kicker}>Class of 2027 · 2026–2027 Application Season</p>
          <h1>Olivia College Application Dashboard</h1>
          <p className={styles.focus}><span /> Current Focus: ED / EA Application Sprint</p>
        </div>
        <div className={styles.today} aria-label="洛杉矶和中国当前时间">
          <div className={styles.clockRow}>
            <span>Los Angeles</span>
            <strong>{now ? formatCurrentTime(now, LA_TIME_ZONE) : "—"}</strong>
          </div>
          <div className={styles.clockRow}>
            <span>China</span>
            <strong>{now ? formatCurrentTime(now, CHINA_TIME_ZONE) : "—"}</strong>
          </div>
        </div>
      </header>

      <p className={styles.notice}>正式申请截止日期最终以大学官网和 SCOIR 为准。标注“需官网确认”的日期尚未核实。</p>

      <section className={styles.stats} aria-label="申请任务摘要">
        {stats.map(([label, value], index) => <article key={label} className={index === 1 ? styles.alertStat : ""}><span>{label}</span><strong>{value}</strong></article>)}
      </section>

      <section className={styles.priorityPanel}>
        <div className={styles.sectionHeading}><div><p>NOW</p><h2>Next Critical Deadlines</h2></div><span>最近 5 项未完成任务</span></div>
        <div className={styles.criticalList}>
          {critical.map((task, index) => (
            <article key={task.id}>
              <span className={styles.rank}>{String(index + 1).padStart(2, "0")}</span>
              <div><span className={`${styles.badge} ${styles[task.priority.toLowerCase()]}`}>{task.priority}</span><strong>{task.title}</strong></div>
              <Deadline task={task} />
              <span className={`${styles.statusText} ${styles[task.status.toLowerCase()]}`}>{statusOptions.find((item) => item.value === task.status)?.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.progressSection} aria-label="申请阶段进度">
        {progressCategories.map((name) => {
          const group = tasks.filter((task) => task.category === name);
          const percentage = group.length ? Math.round(group.filter((task) => task.status === "DONE").length / group.length * 100) : 0;
          return <div key={name}><span>{name}</span><div className={styles.progressTrack}><i style={{ width: `${percentage}%` }} /></div><strong>{percentage}%</strong></div>;
        })}
      </section>

      <section className={styles.checklist}>
        <div className={styles.sectionHeading}><div><p>MASTER LIST</p><h2>Application Checklist</h2></div><span>{filtered.length} of {tasks.length} tasks</span></div>
        <div className={styles.toolbar}>
          <label className={styles.search}><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="搜索任务、学校或材料…" aria-label="搜索任务" /></label>
          <select value={priority} onChange={(e) => setPriority(e.target.value)} aria-label="按优先级筛选"><option value="ALL">全部优先级</option><option>P0</option><option>P1</option><option>P2</option></select>
          <select value={status} onChange={(e) => setStatus(e.target.value)} aria-label="按状态筛选"><option value="ALL">全部状态</option>{statusOptions.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}</select>
          <select value={category} onChange={(e) => setCategory(e.target.value)} aria-label="按分类筛选"><option value="ALL">全部分类</option>{categories.map((item) => <option key={item}>{item}</option>)}</select>
          <button className={urgentOnly ? styles.activeButton : ""} onClick={() => setUrgentOnly((value) => !value)} aria-pressed={urgentOnly}>只看紧急</button>
          <button onClick={() => setSortDirection((value) => value === "asc" ? "desc" : "asc")}>日期{sortDirection === "asc" ? "升序" : "降序"}</button>
          <button className={styles.reset} onClick={() => { if (confirm("恢复全部初始状态和备注？")) { localStorage.removeItem(STORAGE_KEY); setTasks(initialTasks); } }}>重置</button>
        </div>

        <div className={styles.tableWrap}>
          <table>
            <thead><tr><th>事项</th><th>优先级</th><th>要做的事情</th><th>Deadline</th><th>当前状态</th></tr></thead>
            <tbody>{filtered.map((task) => (
              <tr key={task.id} className={task.status === "DONE" ? styles.completedRow : urgency(task) === "overdue" ? styles.overdueRow : ""}>
                <td data-label="事项"><span className={styles.category}>{task.category}</span><strong className={styles.taskTitle}>{task.title}</strong><details><summary>备注</summary><textarea value={task.notes || ""} onChange={(e) => updateTask(task.id, { notes: e.target.value })} placeholder="添加私人备注…" /></details></td>
                <td data-label="优先级"><span className={`${styles.badge} ${styles[task.priority.toLowerCase()]}`}>{task.priority}</span></td>
                <td data-label="要做的事情" className={styles.action}>{task.action}</td>
                <td data-label="Deadline"><Deadline task={task} /></td>
                <td data-label="当前状态"><select className={`${styles.statusSelect} ${styles[task.status.toLowerCase()]}`} value={task.status} onChange={(e) => updateTask(task.id, { status: e.target.value as Status })}>{statusOptions.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}</select></td>
              </tr>
            ))}</tbody>
          </table>
          {!filtered.length && <div className={styles.empty}>没有符合当前筛选条件的任务。</div>}
        </div>
      </section>

      <section className={styles.timeline}>
        <div className={styles.sectionHeading}><div><p>SEASON</p><h2>Key Timeline</h2></div></div>
        <div className={styles.timelineTrack}>{timeline.map(([date, label]) => <article key={date}><i /><strong>{date}</strong><span>{label}</span></article>)}</div>
      </section>

      <footer className={styles.footer}><span>Olivia · Class of 2027</span><span>Private planning dashboard · Changes save in this browser</span></footer>
    </main>
  );
}

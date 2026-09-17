export type Priority = "P0" | "P1" | "P2";
export type Status = "DONE" | "IN_PROGRESS" | "WAITING" | "NOT_STARTED";

export type Task = {
  id: number;
  title: string;
  priority: Priority;
  category: string;
  action: string;
  deadline?: string;
  internalDeadline?: string;
  officialDeadlineLabel?: string;
  deadlineLabel?: string;
  status: Status;
  notes?: string;
};

export const tasks: Task[] = [
  { id: 46, title: "确认是否取消 9 月 SAT 成绩", priority: "P0", category: "Testing", action: "评估 9 月 SAT 成绩及其对申请策略的影响，最迟在截止日前确认是否取消该次成绩。", deadline: "2026-09-18", status: "NOT_STARTED" },
  { id: 1, title: "Common App Activities List", priority: "P0", category: "Common App", action: "完成全部 10 项活动初稿；重点打磨前 5 项；核对职位、日期、hours/week、weeks/year、成果、金额、项目状态；完成后立即发给 Siri 老师和招生官修改确认。", deadline: "2026-09-20", status: "IN_PROGRESS" },
  { id: 2, title: "Activities List 外部审核与定稿", priority: "P0", category: "Common App", action: "根据 Siri 老师和招生官反馈修改活动排序、标题、150 字符描述；确保 Pioneer、未来职位、慈善影响等没有夸大。", deadline: "2026-09-25", status: "NOT_STARTED" },
  { id: 3, title: "National Merit 教育路径确认", priority: "P0", category: "National Merit", action: "确认 Olivia 的实际教育路径：Grade 9 中国 junior secondary，Grade 10 中国高中，之后国际转学 OCS 并重新 placement 到 Grade 10；等待 Lindsey 对学校口径的建议。", deadline: "2026-09-20", status: "IN_PROGRESS" },
  { id: 4, title: "回复 NMSC National Merit 邮件", priority: "P0", category: "National Merit", action: "采用 international transfer / educational pattern 的解释策略，说明 Olivia 并非典型美国五年高中学生；如合适，附 Lindsey / OCS 的学校说明。", deadline: "2026-09-20", status: "WAITING" },
  { id: 5, title: "Common App Personal Statement", priority: "P0", category: "Common App", action: "将当前约 807 词压缩至 650 词以内；保留 Orpheus 首尾结构；强化 followspot / backstage 的成长转折；之后交顾问精修。", deadline: "2026-09-25", status: "IN_PROGRESS" },
  { id: 6, title: "ED1 Pomona vs Wellesley 最终决定", priority: "P0", category: "ED", action: "由 Olivia 做最终决定；结合真实个人偏好、学术 fit、校园体验、女子学院偏好和 portfolio 策略。当前个人偏好略倾向 Pomona。", deadline: "2026-09-25", status: "IN_PROGRESS" },
  { id: 7, title: "确认 Pomona Portfolio 策略", priority: "P0", category: "Portfolio", action: "与 Lindsey / 顾问确认 Olivia 是否适合提交 visual art portfolio 给 Pomona，以及作品类型、数量、格式和平台要求。", deadline: "2026-09-25", status: "WAITING" },
  { id: 8, title: "Portfolio 最终作品清单", priority: "P0", category: "Portfolio", action: "确定最终作品；每件准备 title、year、medium、dimensions/duration、高清图或视频、process material、简短说明。", deadline: "2026-09-30", status: "IN_PROGRESS" },
  { id: 9, title: "Portfolio Artist Statement", priority: "P1", category: "Portfolio", action: "围绕 visual inquiry、perception、dream、memory、internal experience 建立统一作品集陈述；避免夸大 EEG、BCI、AI 或 neuroscience 成果。", deadline: "2026-10-15", status: "NOT_STARTED" },
  { id: 10, title: "SCOIR Applying List", priority: "P0", category: "Counselor / School", action: "把所有 ED / EA 学校加入 Applying，并确认申请轮次。", deadline: "2026-10-01", status: "NOT_STARTED" },
  { id: 11, title: "SCOIR ED / EA / RD Round 核对", priority: "P0", category: "Counselor / School", action: "核对所有学校申请轮次和 deadline，确保 SCOIR 和 College And Beyond 的申请计划一致。", deadline: "2026-10-01", status: "NOT_STARTED" },
  { id: 12, title: "Teacher Recommendations", priority: "P0", category: "Counselor / School", action: "确认推荐老师、request 状态、Teacher Recommendation Survey、brag sheet 和学校所需信息均已完成。", deadline: "2026-10-01", status: "NOT_STARTED" },
  { id: 13, title: "Counselor Materials", priority: "P0", category: "Counselor / School", action: "确认 transcript、school profile、counselor recommendation、school report 的准备和发送流程。", deadline: "2026-10-01", status: "NOT_STARTED" },
  { id: 14, title: "Advanced Spanish II Transcript 状态", priority: "P0", category: "Counselor / School", action: "确认 official transcript 最终显示 letter grade 还是 INC；如果仍是 INC，准备简短、真实的 counselor explanation。", deadline: "2026-09-30", status: "WAITING" },
  { id: 15, title: "中国成绩 / OCS GPA 呈现方式", priority: "P1", category: "Counselor / School", action: "与 Lindsey 确认中国两所学校成绩如何展示、OCS GPA 如何计算，以及重复 Grade 10 是否需要 counselor 说明。", deadline: "2026-09-30", status: "WAITING" },
  { id: 16, title: "WashU College / Major Strategy", priority: "P1", category: "EA", action: "确定申请学院和专业方向，平衡 psychology / brain science、cognitive science、creative technology、art/design 和 Olivia 的跨学科定位。", deadline: "2026-09-30", status: "NOT_STARTED" },
  { id: 17, title: "UMich College / Major Strategy", priority: "P1", category: "EA", action: "确定 LSA vs Stamps 路径。目前优先评估 LSA cognition / BCN + art supplement 的方式。", deadline: "2026-09-30", status: "NOT_STARTED" },
  { id: 18, title: "Purdue Major Strategy", priority: "P2", category: "EA", action: "确认 Brain & Behavioral Sciences、Neurobiology & Physiology、UX 或 creative technology 哪个方向真正适合 Olivia。", deadline: "2026-09-30", status: "NOT_STARTED" },
  { id: 19, title: "Supplemental Essay Master Document", priority: "P0", category: "Common App", action: "整理 Pomona、WashU、UMich、UNC、UW–Madison、Purdue、Occidental 的题目、字数、deadline、brainstorm、版本。", deadline: "2026-09-25", status: "NOT_STARTED" },
  { id: 20, title: "SAT 最后准备", priority: "P1", category: "Testing", action: "保持状态，针对弱项训练，但不能影响 ED 文书、Activities 和 portfolio 的核心时间。", deadline: "2026-10-02", status: "IN_PROGRESS" },
  { id: 21, title: "October SAT", priority: "P1", category: "Testing", action: "参加已报名的 SAT。", deadline: "2026-10-03", status: "IN_PROGRESS" },
  { id: 22, title: "SAT Score Reporting Strategy", priority: "P1", category: "Testing", action: "10 月 SAT 出分后，与现有 1510 superscore 比较，逐校决定 self-report、official score、superscore 或 test optional。", deadlineLabel: "出分后一周内", status: "NOT_STARTED" },
  { id: 23, title: "UNC EA Application", priority: "P0", category: "EA", action: "完成 Common App、主文书、Activities、UNC supplements、test reporting 和 school materials check。", internalDeadline: "2026-10-10", officialDeadlineLabel: "约 10 月 15 日，需官网确认", status: "NOT_STARTED" },
  { id: 24, title: "Pomona Supplement 第一稿", priority: "P0", category: "ED", action: "写具体的 Pomona fit，连接 Cognitive Science / Neuroscience / Art、5C、小型文理学院体验，不要只是罗列资源。", deadline: "2026-09-30", status: "NOT_STARTED" },
  { id: 25, title: "Pomona Supplement 定稿", priority: "P0", category: "ED", action: "完成多轮修改，并确保 supplement、主文书、Activities、portfolio 的整体申请画像一致。", deadline: "2026-10-15", status: "NOT_STARTED" },
  { id: 26, title: "Pomona Portfolio 提交版", priority: "P0", category: "Portfolio", action: "完成 final works、process、statement、媒体文件和提交顺序，符合官方作品集要求。", deadline: "2026-10-20", status: "IN_PROGRESS" },
  { id: 27, title: "Pomona ED1 Application", priority: "P0", category: "ED", action: "完整审核 Common App、supplements、portfolio、test strategy、推荐信、transcript 和 counselor materials。", internalDeadline: "2026-11-03", officialDeadlineLabel: "约 11 月 8 日，需官网确认", status: "NOT_STARTED" },
  { id: 28, title: "Wellesley ED1 备用材料", priority: "P1", category: "ED", action: "如果 Olivia 最终选择 Wellesley ED1，需要能够迅速切换并完成材料。", officialDeadlineLabel: "约 11 月 1 日，需官网确认", status: "NOT_STARTED" },
  { id: 29, title: "Wellesley ED2 准备", priority: "P1", category: "ED", action: "如果 Pomona ED1 未录，准备 Wellesley ED2；提前准备 Why Wellesley、学术路径和可能的 portfolio。", deadlineLabel: "12 月准备，ED2 约 1 月初，需官网确认", status: "NOT_STARTED" },
  { id: 30, title: "WashU EA", priority: "P0", category: "EA", action: "完成学院/专业选择、supplement、activities、test strategy 和学校材料。", internalDeadline: "2026-10-25", officialDeadlineLabel: "约 11 月 2 日，需官网确认", status: "NOT_STARTED" },
  { id: 31, title: "UMich EA", priority: "P0", category: "EA", action: "完成学院选择、supplement、portfolio strategy（如适用）、testing strategy 和学校材料。", internalDeadline: "2026-10-25", officialDeadlineLabel: "约 11 月 1 日，需官网确认", status: "NOT_STARTED" },
  { id: 32, title: "UW–Madison EA", priority: "P1", category: "EA", action: "完成 application、major、essay、testing choice，并确认 supporting materials。", internalDeadline: "2026-10-25", officialDeadlineLabel: "约 11 月 1 日，需官网确认", status: "NOT_STARTED" },
  { id: 33, title: "Purdue EA", priority: "P2", category: "EA", action: "在确认专业匹配后完成申请，不要占用 Pomona / WashU / UMich 的核心时间。", internalDeadline: "2026-10-25", officialDeadlineLabel: "约 11 月 1 日，需官网确认", status: "NOT_STARTED" },
  { id: 34, title: "Occidental EA", priority: "P1", category: "EA", action: "作为 lower-risk match / insurance option 完成申请；保证质量，但控制时间投入。", internalDeadline: "2026-10-25", officialDeadlineLabel: "约 11 月 1 日，需官网确认", status: "NOT_STARTED" },
  { id: 35, title: "UC Campus & Major Selection", priority: "P1", category: "UC", action: "确认申请哪些 UC campus，并逐校选择 cognition、psychology、neuroscience、art、media、creative technology 等真实匹配方向。", deadline: "2026-10-31", status: "NOT_STARTED" },
  { id: 36, title: "UC Academic History", priority: "P1", category: "UC", action: "准确录入中国两所学校和 OCS 的全部课程与成绩，特别注意 repeated Grade 10 和 Spanish II。", deadline: "2026-11-15", status: "NOT_STARTED" },
  { id: 37, title: "UC Activities & Awards", priority: "P1", category: "UC", action: "从 Common App 的事实库重新按照 UC 分类体系改写。", deadline: "2026-11-10", status: "NOT_STARTED" },
  { id: 38, title: "UC 4 篇 PIQ", priority: "P1", category: "UC", action: "完成 4 篇 PIQ。建议覆盖 creativity、academic interest、leadership/contribution、challenge/growth，避免四篇重复同一个主题。", deadline: "2026-11-15", status: "NOT_STARTED" },
  { id: 39, title: "UC Application", priority: "P1", category: "UC", action: "完整审核 Academic History、Activities、PIQ、campus、major 后提交。", internalDeadline: "2026-11-20", officialDeadlineLabel: "2026-11-30", status: "NOT_STARTED" },
  { id: 40, title: "CMU RD Academic Strategy", priority: "P2", category: "RD", action: "确定 college / major，重点评估 HCI、human-centered computing、creative technology 等方向，不强行包装成 biomedical neuroscience。", deadlineLabel: "11 月–12 月", status: "NOT_STARTED" },
  { id: 41, title: "CMU RD Application", priority: "P2", category: "RD", action: "完成 supplements、fit narrative 和 final application review。", deadlineLabel: "约 1 月初，需官网确认", status: "NOT_STARTED" },
  { id: 42, title: "USC RD Academic / Portfolio Strategy", priority: "P1", category: "RD", action: "明确申请 neuroscience、media、art、design 或 creative technology；确认所申请学院是否有提前 portfolio deadline。", deadline: "2026-11-15", status: "NOT_STARTED" },
  { id: 43, title: "USC RD Application", priority: "P1", category: "RD", action: "根据选择的学院/项目完成 supplements 和 portfolio。", deadlineLabel: "12 月–1 月，具体依项目确认", status: "NOT_STARTED" },
  { id: 44, title: "FAFSA / CSS Profile", priority: "P2", category: "Financial Aid", action: "如果家庭计划申请 need-based financial aid，则逐校完成 FAFSA / CSS Profile。", deadlineLabel: "按学校要求", status: "NOT_STARTED" },
  { id: 45, title: "最终 RD College List", priority: "P1", category: "RD", action: "根据 Early 结果重新平衡 RD 学校，覆盖 reach、match、lower-risk，同时保持整体申请叙事一致。", deadline: "2026-12-15", status: "NOT_STARTED" },
];

export const timeline = [
  ["Sep 20", "Activities + National Merit"], ["Sep 25", "Main Essay + ED Decision"],
  ["Oct 1", "SCOIR Locked"], ["Oct 3", "SAT"], ["Oct 10–15", "UNC / Pomona Writing"],
  ["Oct 25", "EA Internal Completion"], ["Nov 1–8", "ED / EA Submission Peak"],
  ["Nov 20", "UC Internal Deadline"], ["Nov 30", "UC Deadline"], ["Dec–Jan", "ED2 / RD"],
] as const;

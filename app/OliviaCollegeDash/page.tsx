import OliviaCollegeDashboard from "./dashboard-client";
import { tasks } from "./data";

export default function Page() {
  return <OliviaCollegeDashboard initialTasks={tasks} />;
}

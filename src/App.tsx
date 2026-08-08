import Terminal from "./components/Terminal";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import Activity from "./components/Activity";
import ContributionGraph from "./components/ContributionGraph";
import Contact from "./components/Contact";
import { useGitHubData } from "./hooks/useGitHubData";

export default function App() {
  const { loading, langStats, repoMap, stats, activities } = useGitHubData();

  return (
    <div className="container">
      <Terminal />

      <About />

      <TechStack loading={loading} langStats={langStats} />

      <Stats stats={stats} />

      <Projects repoMap={repoMap} />

      <Activity loading={loading} activities={activities} />

      <ContributionGraph />

      <Contact />
    </div>
  );
}

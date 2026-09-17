import VerticalPage from "@/components/vertical/VerticalPage";
import { verticals } from "@/content/verticals";
import Seo from "@/components/Seo";

const SolProjects = () => (
  <>
    <Seo
      title="S.O.L & Projects | Equity e construção de valor"
      description="Projetos em que a S.O.L ONE entra com equity, estrutura e direcionamento para transformá-los em soluções reais de mercado."
      path="/grupo/projects"
    />
    <VerticalPage data={verticals.projects} />
  </>
);
export default SolProjects;

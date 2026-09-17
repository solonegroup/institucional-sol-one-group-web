import VerticalPage from "@/components/vertical/VerticalPage";
import { verticals } from "@/content/verticals";
import Seo from "@/components/Seo";

const SolAssistance = () => (
  <>
    <Seo
      title="S.O.L & Assistance | Assessoria técnica recorrente"
      description="Consultoria recorrente em hardware, software e desenvolvimento para empresas que precisam de capacidade técnica contínua sem inchar a estrutura."
      path="/grupo/assistance"
    />
    <VerticalPage data={verticals.assistance} />
  </>
);
export default SolAssistance;

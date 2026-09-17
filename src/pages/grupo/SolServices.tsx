import VerticalPage from "@/components/vertical/VerticalPage";
import { verticals } from "@/content/verticals";
import Seo from "@/components/Seo";

const SolServices = () => (
  <>
    <Seo
      title="S.O.L & Services | Execução premium e multidisciplinar"
      description="Frente de serviços premium da S.O.L ONE para projetos multidisciplinares, robustos e de alto impacto, sob seleção criteriosa."
      path="/grupo/services"
    />
    <VerticalPage data={verticals.services} />
  </>
);
export default SolServices;

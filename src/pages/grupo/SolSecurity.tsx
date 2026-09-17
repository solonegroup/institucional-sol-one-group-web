import VerticalPage from "@/components/vertical/VerticalPage";
import { verticals } from "@/content/verticals";
import Seo from "@/components/Seo";

const SolSecurity = () => (
  <>
    <Seo
      title="S.O.L & Security | Infraestrutura e cibersegurança"
      description="Infraestrutura sólida e segurança cibernética efetiva: servidores, arquitetura, endurecimento de ambiente e proteção contra ataques."
      path="/grupo/security"
    />
    <VerticalPage data={verticals.security} />
  </>
);
export default SolSecurity;

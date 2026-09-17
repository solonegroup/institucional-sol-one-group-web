import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import SolProjects from "./pages/grupo/SolProjects.tsx";
import SolServices from "./pages/grupo/SolServices.tsx";
import SolAssistance from "./pages/grupo/SolAssistance.tsx";
import SolSecurity from "./pages/grupo/SolSecurity.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/grupo/projects" element={<SolProjects />} />
            <Route path="/grupo/services" element={<SolServices />} />
            <Route path="/grupo/assistance" element={<SolAssistance />} />
            <Route path="/grupo/security" element={<SolSecurity />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;

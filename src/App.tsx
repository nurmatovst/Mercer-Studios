import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // SEO uchun
import { lazy, Suspense } from "react";
import ScrollToTop from "@/components/ScrollToTop";
const Index = lazy(() => import("./pages/Index"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const StartProject = lazy(() => import("./pages/StartProject"));
const Consultation = lazy(() => import("./pages/Consultation"));
const NotFound = lazy(() => import("./pages/NotFound"));


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            {/* 1. Asosiy sahifaga kirganda avtomatik /en ga yo'naltirish */}
            <Route path="/" element={<Navigate to="/en" replace />} />

            {/* 2. SEO uchun :lng (en/uz/ru) parametri bilan o'ralgan yo'llar */}
            <Route path="/:lng">
              <Route index element={<Index />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/:projectId" element={<ProjectDetail />} />
              <Route path="start-project" element={<StartProject />} />
              <Route path="consultation" element={<Consultation />} />
            </Route>

            {/* 3. Noto'g'ri URL yozilsa 404 sahifasi */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Calendar, DollarSign, Phone, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { toast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type Step = 1 | 2 | 3 | 4 | 5;

const colorPalettes = [
  { id: "neutral", colors: ["#F5F0E8", "#D4C5B5", "#8B7355", "#4A3F35"] },
  { id: "monochrome", colors: ["#FFFFFF", "#B0B0B0", "#606060", "#1A1A1A"] },
  { id: "earth", colors: ["#E8DCD0", "#A67C52", "#5C4033", "#2F2418"] },
  { id: "coastal", colors: ["#F7F9FA", "#B8D4E3", "#6B9AB8", "#2C4A5E"] },
  { id: "forest", colors: ["#F0EDE5", "#8FA876", "#4A6741", "#2D3B28"] },
  { id: "blush", colors: ["#FDF6F3", "#E8C4B8", "#C9A86C", "#3D3D3D"] },
];

const StartProject = () => {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    projectType: "",
    style: "",
    colorPalette: "",
    size: "",
    budget: "",
    timeline: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation();

  const totalSteps = 5;

  const projectTypes = [
    { id: "residential", labelKey: "step1.residential", descKey: "step1.residentialDesc" },
    { id: "hospitality", labelKey: "step1.hospitality", descKey: "step1.hospitalityDesc" },
    { id: "commercial", labelKey: "step1.commercial", descKey: "step1.commercialDesc" },
    { id: "renovation", labelKey: "step1.renovation", descKey: "step1.renovationDesc" },
  ];

  const styles = [
    { id: "minimalist", labelKey: "step2.minimalist", descKey: "step2.minimalistDesc" },
    { id: "luxury", labelKey: "step2.luxury", descKey: "step2.luxuryDesc" },
    { id: "elegant", labelKey: "step2.elegant", descKey: "step2.elegantDesc" },
    { id: "contemporary", labelKey: "step2.contemporary", descKey: "step2.contemporaryDesc" },
    { id: "rustic", labelKey: "step2.rustic", descKey: "step2.rusticDesc" },
    { id: "industrial", labelKey: "step2.industrial", descKey: "step2.industrialDesc" },
  ];

  const timelines = [
    { id: "flexible", labelKey: "step4.flexible", descKey: "step4.flexibleDesc" },
    { id: "3months", labelKey: "step4.3months", descKey: "step4.3monthsDesc" },
    { id: "6months", labelKey: "step4.6months", descKey: "step4.6monthsDesc" },
    { id: "12months", labelKey: "step4.12months", descKey: "step4.12monthsDesc" },
  ];

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => (prev + 1) as Step);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as Step);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.projectType !== "";
      case 2:
        return formData.style !== "";
      case 3:
        return formData.colorPalette !== "";
      case 4:
        return formData.budget !== "" && formData.size !== "";
      case 5:
        return formData.name !== "" && (formData.email !== "" || formData.phone !== "");
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email) {
      toast({
        title: t("startProject.toast.errorTitle"),
        description: t("startProject.toast.errorDescription"),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: t("startProject.toast.successTitle"),
      description: t("startProject.toast.successDescription"),
    });

    setIsSubmitting(false);
  };

  const formatBudget = (value: string) => {
    const num = value.replace(/[^\d]/g, "");
    if (!num) return "";
    return new Intl.NumberFormat("en-US").format(parseInt(num));
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            <span className="text-sm tracking-widest uppercase">{t("startProject.backHome")}</span>
          </Link>
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
            {t("startProject.label")}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            {t("startProject.title")}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("startProject.description")}
          </p>
        </div>
      </section>

      {/* Free Consultation Banner */}
      <section className="px-6 md:px-12 lg:px-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/20 p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-gold" />
                </div>
              </div>
              <div className="flex-grow">
                <p className="text-gold text-xs tracking-[0.2em] uppercase mb-2">
                  {t("startProject.freeConsultation.label")}
                </p>
                <h3 className="font-serif text-2xl text-foreground mb-3">
                  {t("startProject.freeConsultation.title")}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {t("startProject.freeConsultation.description")}
                </p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {["1", "2", "3", "4"].map((num) => (
                    <div key={num} className="flex items-center gap-2 text-sm text-foreground">
                      <Check size={14} className="text-gold" />
                      <span>{t(`startProject.freeConsultation.benefits.${num}`)}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-shrink-0">
                <Link
                  to="/consultation"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-charcoal text-sm tracking-widest uppercase hover:bg-gold-light transition-colors"
                >
                  <Phone size={16} />
                  {t("startProject.freeConsultation.button")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      <Footer />
    </main>
  );
};

export default StartProject;

import Contact from "@/components/call-to-action";
import AboutUs from "@/components/community";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import WhyChooseUs from "@/components/learning-resources";
import CompanyValues from "@/components/testimonials";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            {/* <ReactLenis root> */}
            <main className="flex-1">
                <Hero />
                <AboutUs />
                <Features />
                <WhyChooseUs />
                <div className="bg-gradient-to-br from-slate-50/90 via-white/95 to-blue-50/90 dark:from-slate-900 dark:via-slate-1000 dark:to-slate-1000">
                    <CompanyValues />
                    <Contact />
                    <Footer />
                </div>
            </main>
            {/* </ReactLenis> */}
        </div>
    );
}

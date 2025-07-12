"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import {
    Users,
    TrendingUp,
    Settings,
    Shield,
    Award,
    Sparkle,
} from "lucide-react";
import { useTranslation } from "@/contexts/translation-context";
import BentoGrid from "./bento-grid";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, ISourceOptions } from "@tsparticles/engine";
import Brand from "./brand";

export default function WhyChooseUs() {
    const ref = useRef(null);
    const { t } = useTranslation();
    const [init, setInit] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">("light");

    // Initialize particles engine
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    // Theme detection
    useEffect(() => {
        // Check initial theme
        const isDark = document.documentElement.classList.contains("dark");
        setTheme(isDark ? "dark" : "light");

        // Create observer for theme changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === "class") {
                    const isDark =
                        document.documentElement.classList.contains("dark");
                    setTheme(isDark ? "dark" : "light");
                }
            });
        });

        // Start observing
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        // Cleanup
        return () => observer.disconnect();
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    // Particle configuration with theme-aware colors
    const options: ISourceOptions = useMemo(
        () => ({
            background: {
                color: {
                    value: "transparent",
                },
            },
            fullScreen: {
                enable: false,
                zIndex: 1,
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: theme === "dark" ? "#466F8D" : "#007B94",
                },
                links: {
                    color: theme === "dark" ? "#466F8D" : "#007B94",
                    distance: 160,
                    enable: true,
                    opacity: theme === "dark" ? 0.4 : 0.2,
                    width: 2,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                        bottom: "bounce",
                        left: "bounce",
                        right: "bounce",
                        top: "bounce",
                    },
                    random: true,
                    speed: 1.5,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: theme === "dark" ? 160 : 120,
                },
                opacity: {
                    value: theme === "dark" ? 0.6 : 0.2,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 4, max: 12 },
                },
            },
            detectRetina: true,
        }),
        [theme]
    );

    const reasons = [
        {
            icon: <Users className="h-6 w-6" />,
            title: t("Đội ngũ linh hoạt, đa lĩnh vực"),
            description: t(
                "Chúng tôi có đội ngũ chuyên gia đa dạng, có thể đáp ứng nhiều nhu cầu khác nhau của doanh nghiệp từ công nghệ đến nhân sự."
            ),
            features: [
                t("Chuyên gia IT"),
                t("Tư vấn thiết kế"),
                t("Tư vấn quản lý"),
                t("Kỹ thuật viên"),
            ],
            size: "large" as const,
            imageUrl: "/images/caro1.png",
        },
        {
            icon: <TrendingUp className="h-6 w-6" />,
            title: t("Tín nhiệm - hợp tác chiến lược lâu dài"),
            description: t(
                "Khả năng mở rộng linh hoạt theo dự án, đảm bảo đáp ứng mọi yêu cầu từ nhỏ đến lớn của khách hàng."
            ),
            features: [
                t("Mở rộng nhanh"),
                t("Tài nguyên linh hoạt"),
                t("Quản lý hiệu quả"),
                t("Theo dõi tiến độ"),
            ],
            size: "medium" as const,
            imageUrl: "/images/caro2.png",
        },
        {
            icon: <Settings className="h-6 w-6" />,
            title: t("Dịch vụ đa ngành"),
            description: t(
                "Một điểm đến cho mọi nhu cầu - từ phát triển phần mềm, thiết bị IT đến nhân sự & logistics."
            ),
            features: [
                t("Công nghệ"),
                t("Thiết bị"),
                t("Kiến trúc"),
                t("Nhân sự"),
            ],
            size: "medium" as const,
            imageUrl: "/images/caro3.png",
        },
        {
            icon: <Shield className="h-6 w-6" />,
            title: t("Phù hợp SME"),
            description: t(
                "Đặc biệt thiết kế cho các doanh nghiệp vừa & nhỏ với giải pháp tối ưu chi phí & hiệu quả cao."
            ),
            features: [
                t("Chi phí hợp lý"),
                t("Giải pháp tùy chỉnh"),
                t("Hỗ trợ 24/7"),
                t("Tư vấn miễn phí"),
            ],
            size: "large" as const,
            imageUrl: "/images/caro4.png",
        },
    ];

    return (
        <section
            id="ly-do-chon"
            ref={ref}
            className={`w-full py-12 md:py-20 relative overflow-hidden ${
                theme === "dark"
                    ? "bg-[#060D1C]"
                    : "bg-gradient-to-br from-blue-50/80 via-white to-cyan-50/80"
            }`}
        >
            {/* Particles Background */}
            {init && (
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <Particles
                        id="tsparticles-why-choose-us"
                        particlesLoaded={particlesLoaded}
                        options={options}
                        className="w-full h-full"
                        style={{
                            width: "100%",
                            height: "100%",
                            position: "relative",
                            zIndex: 1,
                        }}
                    />
                </div>
            )}

            <div className="absolute inset-0 -z-10">
                <div
                    className={`absolute inset-0 ${
                        theme === "dark"
                            ? "bg-gradient-to-b from-background via-muted/30 to-background"
                            : "bg-gradient-to-b from-blue-50/50 via-white/80 to-cyan-50/50"
                    }`}
                />
                <div
                    className={`absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full blur-3xl ${
                        theme === "dark"
                            ? "bg-gradient-to-tr from-primary/5 to-blue-400/5"
                            : "bg-gradient-to-tr from-primary/10 to-blue-400/15"
                    }`}
                />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <div className="space-y-4">
                        <div className="rounded-full bg-gradient-to-r from-primary to-blue-400 text-white px-4 py-1.5 text-sm font-medium flex items-center w-fit gap-1 mx-auto mb-4">
                            <Sparkle className="h-4 w-4 text-white" />
                            {t("Lý do chọn chúng tôi")}
                        </div>

                        <h2
                            className={`text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl ${
                                theme === "dark"
                                    ? "text-white"
                                    : "text-foreground"
                            }`}
                        >
                            {t("Tại sao chọn")}{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                                GENSOL?
                            </span>
                        </h2>
                        <p
                            className={`max-w-[840px] mx-auto md:text-xl ${
                                theme === "dark"
                                    ? "text-white/80"
                                    : "text-muted-foreground"
                            }`}
                        >
                            {t(
                                "Chúng tôi mang đến những giá trị vượt trội & cam kết đồng hành lâu dài với sự phát triển của doanh nghiệp bạn."
                            )}
                        </p>
                    </div>
                </div>

                <div className="mb-16">
                    <BentoGrid items={reasons} columns={2} />
                </div>

                <div className="text-center">
                    <div
                        className={`inline-flex items-center gap-2 px-4 py-3 rounded-[4px] border backdrop-blur-sm border-primary ${
                            theme === "dark" ? "bg-[#020B1A]" : "bg-white/80"
                        } text-primary`}
                    >
                        <Award className="h-4 w-4 text-primary" />
                        <span className="text-sm font-semibold text-primary">
                            {t("Đối tác tin cậy cho sự phát triển bền vững")}
                        </span>
                    </div>
                </div>

                <Brand />
            </div>
        </section>
    );
}

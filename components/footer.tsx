"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "@/contexts/translation-context";
import {
    FOOTER_COMPANY_INFO,
    FOOTER_COMPANY_JOBS,
    FOOTER_COMPANY_SECTION,
    FOOTER_SERVICE,
    FooterItem,
} from "@/lib/constants";

export default function Footer() {
    const { t } = useTranslation();
    const ref = useRef(null);

    return (
        <footer
            ref={ref}
            className="w-full border-t bg-[#020817] pt-12 md:pt-20 relative before:content-[''] before:absolute before:inset-0 before:bg-cover before:bg-bottom before:bg-no-repeat before:blur-xs before:-z-10"
        >
            <div className="container px-4 md:px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="-mt-[12px] col-span-1">
                        <div className="flex items-center gap-1">
                            <Image
                                src={"/images/logo.png"}
                                alt="GENSOL logo"
                                height={70}
                                width={70}
                                className="object-cover filter scale-90"
                                style={{
                                    imageRendering: "crisp-edges",
                                }}
                                quality={100}
                                priority
                                draggable={false}
                                sizes="40px"
                                unoptimized={false}
                            />
                            <motion.div
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image
                                    src={"/images/text-logo.png"}
                                    alt="GENSOL text logo"
                                    height={32}
                                    width={120}
                                    className="filter scale-90 -ml-2"
                                    style={{
                                        imageRendering: "crisp-edges",
                                    }}
                                    quality={100}
                                    priority
                                    draggable={false}
                                    sizes="110px"
                                    unoptimized={false}
                                />
                            </motion.div>
                        </div>
                        <p className="text-sm text-white/70 mb-4 leading-6 text-justify">
                            {t(
                                "Đồng hành cùng bạn trong hành trình số hóa – Phát triển giải pháp linh hoạt & bền vững. Giải pháp Công nghệ toàn diện & Nhân sự IT theo yêu cầu."
                            )}
                        </p>
                        <div className="space-y-2 mb-4">
                            {FOOTER_COMPANY_INFO.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center gap-2 text-sm text-white/70"
                                    whileHover={{
                                        x: 5,
                                        color: "hsl(var(--primary))",
                                    }}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.2, rotate: 10 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <item.icon className="h-4 w-4" />
                                    </motion.div>
                                    <span>
                                        {item.notTranslatable
                                            ? item.text
                                            : t(item.text)}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="grid grid-cols-3">
                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-white">
                                    {t("Dịch vụ")}
                                </h3>
                                <ul className="space-y-2">
                                    {FOOTER_SERVICE.map(
                                        (item: FooterItem, index) => (
                                            <motion.li key={index}>
                                                <motion.div
                                                    whileHover={{ x: 5 }}
                                                    transition={{
                                                        duration: 0.2,
                                                    }}
                                                >
                                                    <Link
                                                        href={item.href || "#"}
                                                        className="text-sm text-white/70 hover:text-white transition-colors"
                                                    >
                                                        {item.notTranslatable
                                                            ? item.text
                                                            : t(item.text)}
                                                    </Link>
                                                </motion.div>
                                            </motion.li>
                                        )
                                    )}
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-white">
                                    {t("Công ty")}
                                </h3>
                                <ul className="space-y-2">
                                    {FOOTER_COMPANY_SECTION.map(
                                        (item: FooterItem, index) => (
                                            <motion.li key={index}>
                                                <motion.div
                                                    whileHover={{ x: 5 }}
                                                    transition={{
                                                        duration: 0.2,
                                                    }}
                                                >
                                                    <Link
                                                        href={item.href || "#"}
                                                        className="text-sm text-white/70 hover:text-white transition-colors"
                                                    >
                                                        {item?.notTranslatable
                                                            ? item.text
                                                            : t(item.text)}
                                                    </Link>
                                                </motion.div>
                                            </motion.li>
                                        )
                                    )}
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-bold mb-2 text-white">
                                    {t("Nhận tư vấn")}
                                </h3>
                                <p className="text-sm text-white/70 mb-2">
                                    {t(
                                        "Đăng ký để nhận thông tin về dịch vụ mới"
                                    )}
                                </p>
                                <div className="flex gap-2">
                                    <motion.input
                                        aria-label="Email đăng ký"
                                        type="email"
                                        placeholder={t("Email của bạn")}
                                        className="text-white flex h-9 w-full rounded-[4px] px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 bg-transparent border border-[#1E293B]"
                                        whileFocus={{ scale: 1.02 }}
                                        transition={{ duration: 0.2 }}
                                    />
                                    <motion.button
                                        className="inline-flex items-center justify-center rounded-[4px] bg-primary px-3 py-1 text-sm font-medium text-primary-foreground shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 flex-shrink-0"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {t("Đăng ký")}
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4 mt-4">
                            <h3 className="text-lg font-bold text-white">
                                {t("Lĩnh vực chuyên môn")}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {/* Công nghệ - Phần mềm */}
                                {FOOTER_COMPANY_JOBS.map(
                                    (tag: FooterItem, index) => (
                                        <span
                                            key={index}
                                            className={`inline-flex items-center rounded-[4px] px-2 py-1 text-xs font-medium ring-1 ring-inset ${tag.color}`}
                                        >
                                            {tag?.notTranslatable
                                                ? tag.text
                                                : t(tag.text)}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 py-8 mb text-center border-t border-t-[#1E293B]">
                    <p className="text-sm text-white/70">
                        © 2024 GENSOL. {t("Tất cả quyền được bảo lưu")}. |
                        <motion.span
                            whileHover={{ color: "hsl(var(--foreground))" }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link
                                href="#"
                                className="text-sm text-white/70 ml-1"
                            >
                                {t("Chính sách bảo mật")}
                            </Link>
                        </motion.span>{" "}
                        |
                        <motion.span
                            whileHover={{ color: "hsl(var(--foreground))" }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link
                                href="#"
                                className="text-sm text-white/70 ml-1"
                            >
                                {t("Điều khoản sử dụng")}
                            </Link>
                        </motion.span>
                    </p>
                </div>
            </div>
        </footer>
    );
}

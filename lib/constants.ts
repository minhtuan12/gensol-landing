import { Mail, Phone, MapPin, LucideIcon } from "lucide-react";

export interface FooterItem {
    text: string;
    icon?: LucideIcon;
    href?: string;
    notTranslatable?: boolean;
    color?: string;
}

export const FOOTER_COMPANY_INFO = [
    { icon: Mail, text: "phuong.ntk@gensol.com", notTranslatable: true },
    { icon: Phone, text: "+84 (0 123 456 789", notTranslatable: true },
    { icon: MapPin, text: "Hà Nội, Việt Nam" },
];

export const FOOTER_SERVICE = [
    {
        href: "#linh-vuc",
        text: "Phát triển phần mềm",
    },
    {
        href: "#linh-vuc",
        text: "Tư vấn IT",
    },
    {
        href: "#linh-vuc",
        text: "Thiết bị & Linh kiện",
    },
    {
        href: "#linh-vuc",
        text: "Nhân sự & Logistics",
    },
];

export const FOOTER_COMPANY_SECTION = [
    {
        href: "#ve-chung-toi",
        text: "Về chúng tôi",
    },
    {
        href: "#ly-do-chon",
        text: "Lý do chọn chúng tôi",
    },
    {
        href: "#lien-he",
        text: "Liên hệ",
    },
    { href: "#", text: "Tuyển dụng" },
];

export const FOOTER_COMPANY_JOBS = [
    {
        text: "Phát triển phần mềm",
        color: "bg-blue-50 text-blue-700 ring-blue-600/10 bg-blue-900/30 text-blue-400 ring-blue-400/20",
    },
    {
        text: "Lập trình máy tính",
        color: "bg-blue-50 text-blue-700 ring-blue-600/10 bg-blue-900/30 text-blue-400 ring-blue-400/20",
    },
    {
        text: "Tư vấn IT",
        color: "bg-cyan-50 text-cyan-700 ring-cyan-600/10 bg-cyan-900/30 text-cyan-400 ring-cyan-400/20",
    },
    {
        text: "Quản trị hệ thống",
        color: "bg-cyan-50 text-cyan-700 ring-cyan-600/10 bg-cyan-900/30 text-cyan-400 ring-cyan-400/20",
    },
    {
        text: "UI/UX Design",
        color: "bg-orange-50 text-orange-700 ring-orange-600/10 bg-orange-900/30 text-orange-400 ring-orange-400/20",
    },
    {
        text: "Xuất bản phần mềm",
        color: "bg-purple-50 text-purple-700 ring-purple-600/10 bg-purple-900/30 text-purple-400 ring-purple-400/20",
    },
    {
        text: "Game online",
        color: "bg-purple-50 text-purple-700 ring-purple-600/10 bg-purple-900/30 text-purple-400 ring-purple-400/20",
    },
    {
        text: "Máy tính & Linh kiện",
        color: "bg-green-50 text-green-700 ring-green-600/10 bg-green-900/30 text-green-400 ring-green-400/20",
    },
    {
        text: "Thiết bị điện tử",
        color: "bg-green-50 text-green-700 ring-green-600/10 bg-green-900/30 text-green-400 ring-green-400/20",
    },
    {
        text: "Sửa chữa máy tính",
        color: "bg-green-50 text-green-700 ring-green-600/10 bg-green-900/30 text-green-400 ring-green-400/20",
    },
    {
        text: "Cung ứng nhân lực IT",
        color: "bg-yellow-50 text-yellow-700 ring-yellow-600/10 bg-yellow-900/30 text-yellow-400 ring-yellow-400/20",
    },
    {
        text: "Quản lý lao động",
        color: "bg-yellow-50 text-yellow-700 ring-yellow-600/10 bg-yellow-900/30 text-yellow-400 ring-yellow-400/20",
    },
    {
        text: "Cho thuê xe",
        color: "bg-red-50 text-red-700 ring-red-600/10 bg-red-900/30 text-red-400 ring-red-400/20",
    },
    {
        text: "Vận tải hành khách",
        color: "bg-red-50 text-red-700 ring-red-600/10 bg-red-900/30 text-red-400 ring-red-400/20",
    },
    {
        text: "Tư vấn quản lý",
        color: "bg-indigo-50 text-indigo-700 ring-indigo-600/10 bg-indigo-900/30 text-indigo-400 ring-indigo-400/20",
    },
    {
        text: "Tư vấn kỹ thuật",
        color: "bg-indigo-50 text-indigo-700 ring-indigo-600/10 bg-indigo-900/30 text-indigo-400 ring-indigo-400/20",
    },
    {
        text: "Thiết kế chuyên dụng",
        color: "bg-indigo-50 text-indigo-700 ring-indigo-600/10 bg-indigo-900/30 text-indigo-400 ring-indigo-400/20",
    },
];

import type { LucideIcon } from "lucide-react";

interface SummaryCardProps {
    title: string;
    value: number;
    icon: LucideIcon;
    iconBg: string;
    iconColor: string;
}

export default function SummaryCard({
    title,
    value,
    icon: Icon,
    iconBg,
    iconColor,
}: SummaryCardProps) {
    return (
        <article className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">

            <div className="flex justify-between items-start">

                <div>

                    <p className="text-sm text-slate-500">
                        {title}
                    </p>

                    <h2 className="mt-3 text-4xl font-bold text-slate-900">
                        {value}
                    </h2>

                </div>

                <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl ${iconBg}`}
                >
                    <Icon
                        size={28}
                        className={iconColor}
                    />
                </div>

            </div>

        </article>
    );
}
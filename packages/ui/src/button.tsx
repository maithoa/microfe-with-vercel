type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
    primary:
        "px-4 py-2 bg-pink border-2 shadow-[var(--shadow-flat-accent-lg)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[var(--shadow-flat-accent)] transition-all duration-150",
    secondary:
        "px-4 py-2 bg-yellow border-2 shadow-[var(--shadow-flat-accent-lg)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[var(--shadow-flat-accent)] transition-all duration-150",
    ghost:
        "px-4 py-2 underline underline-offset-2 hover:decoration-black decoration-transparent transition-colors duration-200",
};

export function Button({
    href,
    variant = "primary",
    children,
}: {
    href: string;
    variant?: ButtonVariant;
    children: React.ReactNode;
}) {
    return (
        <a href={href} className={variantClasses[variant]}>
            {children}
        </a>
    );
}

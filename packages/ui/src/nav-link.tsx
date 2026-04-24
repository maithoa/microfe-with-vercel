export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a
            href={href}
            className="relative w-fit after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-gray-600 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-200"
        >
            {children}
        </a>
    );
}

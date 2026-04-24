import { SpeculationRules } from "./speculation-rules";
import { NavLink } from "./nav-link";

export function Header() {
    return (
        <header className="w-full h-16 border-b-3 bg-white px-6">
            <SpeculationRules />
            <div className="max-w-6xl mx-auto h-full flex items-center justify-between">
                {/* Logo + Nav... */}
                <div className="flex items-center gap-8">
                    <a href="/" className="font-bold text-xl">Acme</a>
                    <nav className="hidden md:flex items-center gap-6">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/docs">Docs</NavLink>
                        <NavLink href="/pricing">Pricing</NavLink>
                    </nav>
                </div>
                {/* Button... */}
                <div className="flex items-center">
                    <a href="/app" className="px-4 py-2 
                    border-2 border-black bg-pink-500 text-black
                    rounded
                    shadow-flat
                    hover:-translate-x-0.5 hover:-translate-y-0.5
                    hover:shadow-flat-lg
                    transition-all duration-150
                    ">
                        Dashboard
                    </a>
                    
                </div>
            </div>
        </header>
    );
}
import { SpeculationRules } from "./speculation-rules";
import { NavLink } from "./nav-link";
import { Button} from "./button"

export function Header() {
    return (
        <header className="w-full h-16 border-b-2 px-6">
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
                    <Button href="/app" variant="primary">
                        Dashboard
                    </Button>
                </div>
            </div>
        </header>
    );
}
                    

import { SpeculationRules } from "./speculation-rules";

export function Header() {
    return (
        <header className="w-full h-16 border-b bg-white px-6">
            <SpeculationRules />
            <div className="max-w-6xl mx-auto h-full flex items-center justify-between">
                {/* Logo + Nav... */}
                <div className="flex items-center gap-8">
                    <a href="/" className="font-bold text-xl">Acme</a>
                    <nav className="hidden md:flex items-center gap-6">
                        <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
                        <a href="/docs" className="text-gray-600 hover:text-gray-900">Docs</a>
                        <a href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
                    </nav>
                </div>
                {/* Button... */}
                <div className="flex items-center">
                    <a href="/app" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        Dashboard
                    </a>
                </div>
            </div>
        </header>
    );
}
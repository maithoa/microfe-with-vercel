import { NavLink } from "./nav-link";
export function Footer() {
    return (
        <footer className="w-full border-t-2 px-6 py-12">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between gap-10">
                    <div className="space-y-2">
                        <p className="font-bold text-xl tracking-tight">
                            Acme Platform
                        </p>
                        <p className="text-sm max-w-[200px]">
                            The everything app for your business.
                        </p>
                    </div>

                    <div className="flex gap-16">
                        <div>
                            <p className="font-semibold mb-4">Product</p>
                            <nav className="flex flex-col gap-3 text-sm">
                                <NavLink href="/pricing">Pricing</NavLink>
                                <NavLink href="/docs">Documentation</NavLink>
                            </nav>
                        </div>
                        <div>
                            <p className="font-semibold mb-4">Company</p>
                            <nav className="flex flex-col gap-3 text-sm">
                                <NavLink href="/about">About Us</NavLink>
                                <NavLink href="/contact">Contact</NavLink>
                            </nav>
                            
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t">
                    <p className="text-center text-xs"> &copy; {new Date().getFullYear()} Acme Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}



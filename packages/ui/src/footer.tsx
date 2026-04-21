export function Footer() {
    return (
        <footer className="w-full border-t bg-gray-50 px-6 py-12">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between gap-10">
                    <div className="space-y-2">
                        <p className="font-bold text-xl tracking-tight">
                            Acme Platform
                        </p>
                        <p className="text-gray-500 text-sm max-w-[200px]">
                            The everything app for your business.
                        </p>
                    </div>

                    <div className="flex gap-16">
                        <div>
                            <p className="font-semibold text-gray-900 mb-4">Product</p>
                            <nav className="flex flex-col gap-3 text-sm text-gray-600">
                                <a href="/pricing" className="transition-colors hover:text-black">Pricing</a>
                                <a href="/docs" className="transition-colors hover:text-black">Documentation</a>
                            </nav>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-900 mb-4">Company</p>
                            <nav className="flex flex-col gap-3 text-sm text-gray-600">
                                <a href="/about" className="transition-colors hover:text-black">About Us</a>
                                <a href="/contact" className="transition-colors hover:text-black">Contact</a>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <p className="text-center text-xs text-gray-400"> &copy; {new Date().getFullYear()} Acme Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
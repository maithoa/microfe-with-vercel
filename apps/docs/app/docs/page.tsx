export default function DocsHomePage(){
    return(
        <div className = "max-w-4x1 mx-auto p-8">
            <h1 className ="text-3x1 font-bold mb-2">Acme Documentation Home Page</h1>
            <p className = "text-gray-600 mb-8">
                Welcome to the Acme Platform documentation. Here you will find all the information you need to get started and make the most out of our platform.
            </p>
            <div className = "grid gap-4">  
                <a href="/docs/getting-started" className="block p-4 border rounded-lg hover:border-blue-500">
                    <h2 className="font-semibold">Getting Started</h2>
                    <p className="text-gray-600 text-sm">Learn how to set up and start using the Acme Platform.</p>
                </a>
            </div>
        </div>
    );
}
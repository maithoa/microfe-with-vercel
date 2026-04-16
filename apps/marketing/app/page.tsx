import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-white">
        Welcome to Acme Platform
      </h1>
      <p className="mt-3 text-2xl text-gray-600 dark:text-gray-300">
        The everything platform for your business
      </p>  
      <nav className = "flex gap-4">
        <a href="/pricing" className = "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Pricing</a>
        <a href="/docs" className = "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 ">Documentation</a>
      </nav>
    </div>
  );
}

import Image from "next/image";
import { Button } from "@acme/ui";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-8">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to Acme Platform
      </h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        The everything platform for your business
      </p>  
      <nav className = "flex gap-4">
        <Button href="/pricing" variant="primary">Pricing</Button>
        <Button href="/docs" variant="secondary">Documentation</Button>
      </nav>
    </div>
  );
}

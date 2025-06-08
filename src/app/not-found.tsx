import { Home } from "lucide-react";
import Link from "next/link";

const notFound = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 h-[80svh]">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 heading */}
          <h1 className="md:text-9xl text-7xl font-bold text-blue-600 mb-4">
            404
          </h1>

          {/* Error message */}
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>

          <p className="text-gray-600 mb-8 max-w-md mx-auto md:text-base text-sm">
            We're sorry, the page you're looking for doesn't exist or has been
            moved.
          </p>

          {/* Navigation options */}
          <div className="place-items-center">
            <Link
              href="/"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors md:text-base text-sm"
            >
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default notFound;

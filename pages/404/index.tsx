// pages/404.tsx
import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFoundPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-accentCream text-primaryText px-6 text-center">
            <div className="max-w-lg mx-auto">
                {/* Decorative Tile-like border box */}
                <div className="border-2 border-accentGold rounded-2xl p-8 shadow-md bg-white/70 backdrop-blur-sm">
                    <h1 className="text-6xl md:text-7xl font-bold text-primary mb-4">
                        404
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-accentGold mb-3">
                        Page Not Found
                    </h2>
                    <p className="text-gray-700 mb-8 leading-relaxed">
                        Oops! The page you’re looking for doesn’t exist or may have been moved.
                        Don’t worry — explore our beautiful tiles instead!
                    </p>

                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-primary text-accentBeige font-medium px-6 py-3 rounded-full shadow-md hover:bg-accentGold hover:text-primary transition-colors duration-300"
                    >
                        <Home className="w-5 h-5" />
                        Back to Home
                    </Link>
                </div>
            </div>

            {/* Optional: subtle brand message below */}
            <p className="mt-10 text-sm text-primary/70">
                © {new Date().getFullYear()} Marvel Tiles — Crafting excellence in every tile.
            </p>
        </main>
    );
}

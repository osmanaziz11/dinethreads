import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-teal-50 px-6">
      <div className="max-w-2xl text-center py-16">
        <div className="text-6xl font-extrabold text-teal-600 mb-4">404</div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-teal-900/80 mb-8">
          We couldn’t find the page you’re looking for. Check the URL or return
          to the homepage. If you need help, contact our team and we’ll respond
          within 24 hours.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-teal-600 text-white font-semibold rounded-sm shadow hover:bg-teal-700 transition"
          >
            Go Home
          </Link>

          <Link
            href="/contact"
            className="inline-block px-6 py-3 border-2 border-teal-600 text-teal-600 font-semibold rounded-sm hover:bg-teal-600 hover:text-white transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}

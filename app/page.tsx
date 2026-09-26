// app/page.tsx
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-indigo-50 to-indigo-100">
      {/* Header */}
      <header className="w-full bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-indigo-700">Ordarly</h2>
        <nav className="space-x-6">
          <a href="/login" className="text-gray-700 hover:text-indigo-600">Login</a>
          <a href="/signup" className="text-gray-700 hover:text-indigo-600">Signup</a>
          <a href="/orders" className="text-gray-700 hover:text-indigo-600">Orders</a>
        </nav>
      </header>

      {/* Main Landing Section */}
      <main className="flex flex-col items-center justify-center flex-grow p-8">
        <h1 className="text-6xl font-extrabold text-indigo-700 mb-6">
          Welcome to Ordarly
        </h1>

        {/* User-facing description */}
        <div className="max-w-3xl text-center space-y-4 text-gray-700">
          <p>
            Ordarly is a small business order manager designed to help you
            streamline your workflow, reduce errors, and keep everything
            organized in one place. Our mission is to make order management
            simple, efficient, and stress‑free.
          </p>
          <p>
            With Ordarly, you can track deliveries, manage suppliers, and
            maintain accurate records without the usual chaos. Every feature is
            built to support clarity, accuracy, and privacy — so you can focus
            on growing your business.
          </p>
          <p>
            We believe in accessibility, collaboration, and precision. That
            means Ordarly is responsive across devices, easy to use, and
            designed to reduce mistakes during order entry and fulfillment.
          </p>
          <p>
            Whether you’re just starting out or scaling up, Ordarly provides a
            trustworthy platform to keep your operations running smoothly.
          </p>
        </div>

        <button className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
          Get Started
        </button>
      </main>

      {/* Footer */}
      <footer className="w-full bg-white py-4 text-center text-gray-500">
        © {new Date().getFullYear()} Ordarly. All rights reserved.
      </footer>
    </div>
  );
}

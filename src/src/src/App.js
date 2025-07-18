export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 space-y-16">
      {/* HERO SECTION */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold">Command Presence. Without Saying a Word.</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Exceptional polo shirts for the man who never chases attention—he commands it. Engineered for luxury. Tailored for heat. Made in the USA.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-2xl shadow-md hover:bg-gray-900">
          🔒 Join the Private Preview List
        </button>
      </section>

      {/* BRAND PROMISE SECTION */}
      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-3xl font-semibold">Martin M. Yorland Clothiers</h2>
        <p className="text-lg">American Luxury. Engineered for Heat.</p>
        <p>We design for a specific kind of man:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>The financier walking Brickell at 2pm in July.</li>
          <li>The power player on the club terrace in Naples.</li>
          <li>The legacy builder who knows taste doesn't need to shout.</li>
        </ul>
        <p>
          Our flagship polo redefines quiet luxury.
          Crafted in the United States. Constructed for heat-heavy climates. 
          Finished with discreet back-panel ventilation so you look composed—even when the air is dripping.
        </p>
        <p>No logos. No trends. Just enduring craftsmanship and unmistakable presence.</p>
      </section>

      {/* PRODUCT SECTION */}
      <section className="bg-gray-100 p-8 rounded-2xl max-w-4xl mx-auto space-y-6 shadow">
        <h2 className="text-3xl font-semibold">The Yorland Polo</h2>
        <p className="text-xl font-medium">$550 | $1275 for 3</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>🇺🇸 <strong>Made in the USA</strong> from rare performance-milled fabrics</li>
          <li>🔬 <strong>Ventilated Lower-Back Engineering</strong> for discreet airflow</li>
          <li>🧵 <strong>Hand-finished collars, structured silhouette, zero logo</strong></li>
          <li>☀️ <strong>Designed for Miami, Palm Beach, Austin, Scottsdale</strong></li>
        </ul>
        <p className="italic">Luxury has moved south. Your wardrobe should follow.</p>
        <button className="bg-black text-white px-6 py-3 rounded-2xl shadow-md hover:bg-gray-900">
          🔒 Reserve Your Invitation
        </button>
      </section>

      {/* CUSTOMER SECTION */}
      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">You already know who you are.</h2>
        <p>
          You're not on TikTok. You don’t chase logos.
          You’ve built wealth, power, and legacy—and you expect your wardrobe to reflect that.
        </p>
        <p>
          Martin M. Yorland is for men who walk into a room and immediately change its temperature.
          Not because they speak loudly. Because they <em>never</em> have to.
        </p>
      </section>

      {/* SIGNUP FORM */}
      <section className="bg-black text-white p-8 rounded-2xl max-w-3xl mx-auto space-y-6 text-center">
        <h2 className="text-2xl font-semibold">This is not for everyone.</h2>
        <p>Our early access list is limited.</p>
        <p>Members receive:</p>
        <ul className="list-disc list-inside space-y-2 text-left max-w-md mx-auto">
          <li>First access to the debut drop</li>
          <li>Personal concierge support</li>
          <li>Exclusive pricing for Founding Clients</li>
        </ul>
        <input type="email" placeholder="Enter your email" className="w-full p-3 rounded-xl text-black" />
        <button className="bg-white text-black px-6 py-3 rounded-2xl shadow-md hover:bg-gray-200">
          🔒 Request Access
        </button>
      </section>
    </div>
  );
}

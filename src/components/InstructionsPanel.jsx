export default function InstructionsPanel({ visible }) {
    return (
      <div
        className={`fixed top-6 right-6 z-50 bg-white/90 p-4 rounded-xl shadow-md text-sm transition-opacity duration-700 ease-in-out ${
          visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <h3 className="font-semibold text-gray-800 mb-2">How to Explore</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Use ← → to move the car</li>
          <li>Drive near buildings to reveal projects</li>
          <li>Enjoy the experience!</li>
        </ul>
      </div>
    );
  }
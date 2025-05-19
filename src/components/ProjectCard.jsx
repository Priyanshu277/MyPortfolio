export default function ProjectCard({ title, visible, left,link, buttn, desc}) {
  const isResume = title.toLowerCase().includes('resume');
  return (
    <div
      className={`absolute transition-all duration-500 ease-in-out transform ${
        visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-5'
      }`}
      style={{
        top: '400px',
        left,
        width: '220px',
        height: '140px',
        backgroundColor: 'white',
        borderRadius: '16px',
        boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
        zIndex: 10,
        padding: '12px',
      }}
    >
      <h3 className="text-base font-bold text-indigo-700">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{desc}</p>
      {link && (
      <a
        href={link}
        target={isResume ? '_self' : '_blank'}
        rel={isResume ? undefined : 'noopener noreferrer'}
        download={isResume ? true : undefined}
        className="text-blue-700 text-sm mt-2 inline-block hover:underline font-semibold"
      >
        {buttn}

      </a>
      )}
    </div>
  );
}



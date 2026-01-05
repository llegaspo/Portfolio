export default function ExperienceItem({
  role,
  date,
  items,
  company,
}: {
  role: string;
  date: string;
  items: string[];
  company?: string;
}) {
  return (
    <div className="mb-12 relative">
      <div className="absolute -left-[39px] md:-left-[41px] top-2 w-4 h-4 bg-gray-900 border-2 border-violet-500 rounded-full" />
      <h3 className="text-gray-50 text-2xl font-bold mb-1">{role}</h3>
      {company && (
        <div className="text-violet-400 font-mono text-sm mb-1">{company}</div>
      )}
      <p className="text-gray-500 text-sm mb-4 font-mono">{date}</p>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="text-gray-400 text-lg leading-relaxed flex items-start"
          >
            <span className="text-violet-500 mr-2 mt-1.5 text-xs">▹</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

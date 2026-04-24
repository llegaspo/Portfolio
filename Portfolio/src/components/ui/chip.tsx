export default function Chip({
  text,
  size = 12,
}: {
  text: string;
  size?: number;
}) {
  return (
    <div className="flex shrink-0 flex-wrap bg-cyan-300/10 rounded-2xl px-2 justify-center">
      <p className={`opacity-100 text-cyan-200 `} style={{ fontSize: size }}>
        {text}
      </p>
    </div>
  );
}

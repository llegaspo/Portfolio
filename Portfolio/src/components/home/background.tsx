export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-gray-950">
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-cyan-900/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-sky-900/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      <div className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] bg-cyan-800/10 rounded-full blur-[100px] animate-pulse delay-700" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
}

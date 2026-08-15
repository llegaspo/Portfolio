import { PROFILE } from "../data/portfolio";

export default function ProfileCard() {
  return (
    <img
      src="/legaspo2-1.webp"
      alt={`${PROFILE.name}, software engineer`}
      className="aspect-4/5 w-32 shrink-0 rounded-lg border border-white/10 object-cover object-[center_22%]"
    />
  );
}

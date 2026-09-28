export default function SectionHeading({
  num,
  title,
  desc,
}: {
  num: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mb-10 md:mb-14">
      <div className="flex items-baseline gap-3">
        <span className="section-num text-sm font-bold">{num}</span>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          {title}
        </h2>
      </div>
      {desc && (
        <p className="mt-3 text-muted text-sm md:text-base max-w-2xl">
          {desc}
        </p>
      )}
    </div>
  );
}

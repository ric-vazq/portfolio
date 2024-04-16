export default function AboutPage() {
  return (
    <div className="h-full w-11/12 mx-auto py-8 flex flex-col lg:flex-row items-center justify-center lg:gap-4">
      <div className="bg-primary w-2/3 h-10">
        <h1 className="text-primary-content">About Me</h1>
      </div>
      <div className="bg-accent w-1/3 h-10"></div>
    </div>
  );
}

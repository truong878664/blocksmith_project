type Circle = {
  className?: string;
};

function Circle({ className }: Circle) {
  return (
    <div
      className={`w-full relative overflow-y-visible overflow-x-clip ${className}`}
    >
      <div className="absolute bottom-0 w-full  h-[180%] overflow-hidden">
        <div className="absolute -left-32 top-0 h-[180%] blur aspect-square rounded-full bg-gradient-circle"></div>
      </div>
      <div className="w-full relative h-64 overflow-hidden">
        <div className="absolute top-3 left-1/2 blur-sm -translate-x-1/2 w-[30rem] aspect-square rounded-full bg-gradient-to-tr from-transparent via-transparent to-c-pink shadow-[inset_-20px_0_11px_4px_rgba(243,39,94,0.91)]"></div>
      </div>
    </div>
  );
}

export default Circle;

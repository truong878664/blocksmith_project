type Circle = {
  className?: string;
};

function Circle({ className }: Circle) {
  return (
    <div className={`w-full aspect-square relative  ${className}`}>
      <div className="absolute min-w-[50rem] top-0 w-full left-1/3 aspect-square rounded-full bg-gradient-circle-pink lg:left-[10%]"></div>
      <div className="absolute min-w-[40rem] top-[30%] -translate-x-1/3 w-full blur aspect-square rounded-full bg-gradient-circle-purple z-10 md:top-0"></div>
      <div className="w-[30rem] aspect-square absolute top-[13rem] left-[50%] -translate-x-1/2  rounded-full bg-c-pink/10 blur-sm bg-gradient-to-tr from-transparent via-transparent to-c-pink shadow-[inset_-20px_0_11px_4px_rgba(243,39,94,0.91)]"></div>
    </div>
  );
}

export default Circle;

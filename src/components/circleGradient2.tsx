type Circle = {
  className?: string;
};

function Circle({ className }: Circle) {
  return (
    <div className={`w-full aspect-square relative ${className}`}>
      <div className="h-[60rem] blur aspect-square rounded-full bg-gradient-circle"></div>
      <div className="w-[30rem] aspect-square absolute top-1/2 left-[30%] rounded-full blur-sm bg-gradient-to-tr from-transparent via-transparent to-c-pink shadow-[inset_-20px_0_11px_4px_rgba(243,39,94,0.91)]"></div>
      {/* <div className="w-[30rem] aspect-square relative p-4 bg-blue">
        <div className="absolute left-0 w-full h-full top-0 blur-sm aspect-square rounded-full bg-gradient-to-tr from-transparent via-transparent to-c-pink shadow-[inset_-20px_0_11px_4px_rgba(243,39,94,0.91)]"></div>
      </div> */}
    </div>
  );
}

export default Circle;

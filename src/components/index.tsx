type TypeButton = {
  children: string;
};

function Button({ children }: TypeButton) {
  return (
    <>
      <h1>{children}</h1>;
    </>
  );
}

export default Button;

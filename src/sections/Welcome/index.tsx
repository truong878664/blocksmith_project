type Props = {
  children: React.ReactNode;
};
function Welcome({ children }: Props) {
  return <section>{children}</section>;
}

export default Welcome;

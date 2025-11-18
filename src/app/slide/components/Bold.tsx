interface BoldProps {
  children: React.ReactNode;
}

export const Bold = ({ children }: BoldProps) => {
  return <span data-bold="true">{children}</span>;
};

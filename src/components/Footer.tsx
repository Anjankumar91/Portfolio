export const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Your Name. Built with React & Tailwind CSS.
        </p>
        <p className="text-muted-foreground text-xs mt-2">
          Designed & Developed with passion for data
        </p>
      </div>
    </footer>
  );
};

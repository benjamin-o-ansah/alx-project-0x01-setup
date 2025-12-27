const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t mt-10">
      <div className="container mx-auto p-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} ALX Project. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

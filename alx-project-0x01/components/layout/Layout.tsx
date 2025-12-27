import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main className="container mx-auto p-6">{children}</main>
  </>
);

export default Layout;

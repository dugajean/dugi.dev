import { Sidebar } from "./sections/Sidebar";
import { Main } from "./sections/Main";
import { Footer } from "./sections/Footer";

export const App = () => (
  <div className="w-full flex flex-col items-center my-0 md:my-12 print:my-0 gap-4">
    <div className="flex flex-col md:flex-row min-w-96 max-w-screen-lg gap-12 print:gap-4 content bg-white bg-opacity-70 md:rounded-lg print:rounded-none shadow-xl print:shadow-none">
      <Sidebar />
      <Main />
    </div>
    <Footer />
  </div>
);

import Navbars from '../../Components/NavBars/NavBars';
import SideNavbar from '../../Components/SideNavbar/SideNavbar';
import MainPage from '../ManiPage/MainPage';

const Home = () => {
  return (
    <div className="h-screen bg-gray-100 flex flex-col sm:flex-row gap-10 ">
      {/* Sidebar */}
      <div className=" text-white px-5 ">
        <SideNavbar />
      </div>

      {/* Main Section */}
      <div className="flex-1 flex flex-col sm:ml-5">
        {/* Navbar */}
        <header className="bg-transparent sticky top-0 z-10 ">
          <Navbars />
        </header>

        {/* Content Area */}
        <main className="flex-grow p-4  overflow-auto">
          <MainPage />
        </main>
      </div>
    </div>
  );
};

export default Home;
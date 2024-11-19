import Navbars from '../../Components/NavBars/NavBars';
import SideNavbar from '../../Components/SideNavbar/SideNavbar';
import MainPage from '../ManiPage/MainPage';

const Home = () => {
  return (
    <div className="h-screen flex flex-col sm:flex-row">
      {/* Sidebar */}
      <aside className=" text-white w-16 sm:h-full h-auto fixed sm:relative">
        <SideNavbar />
      </aside>

      {/* Main Section */}
      <div className="flex-1 flex flex-col sm:ml-5">
        {/* Navbar */}
        <header className="bg-gray-50 sticky top-0 z-10 shadow">
          <Navbars />
        </header>

        {/* Content Area */}
        <main className="flex-grow p-4 bg-gray-100 overflow-auto">
          <MainPage />
        </main>
      </div>
    </div>
  );
};

export default Home;
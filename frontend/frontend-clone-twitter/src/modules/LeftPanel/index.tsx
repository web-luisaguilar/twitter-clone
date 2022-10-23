/*
  TODO: NavBar
*/

import logo from '/icons/twitter-logo-white.svg';
import homeIcon from '/icons/home-icon.svg';
import searchIcon from '/icons/search-icon.svg';
import { icons, specificIcons } from '../../assets/navIcons';

const LeftPanel = () => {
  return (
    <>
      <div className="min-w-[68px] h-auto relative top-0 md:w-1/3 flex flex-col border-r border-slate-700 overflow-auto">
        <div className="fixed ">
          <div className="w-[68px]">
            <div className="flex flex-col items-center pt-1">
              <a className=" hover:bg-gray-900  bg-opacity-10  flex items-center justify-center rounded-full w-14 h-14">
                <img src={logo} alt="Twitter" className="w-7 h-7" />
              </a>
            </div>
            <nav className="flex flex-col items-center">
              {icons.map((icon) => {
                return (
                  <a
                    className=" hover:bg-gray-900 relative bg-opacity-10  flex items-center justify-center rounded-full w-12 h-12 my-2"
                    data-title={icon.name}
                  >
                    <img className="w-7" src={icon.src} alt={icon.name} />
                  </a>
                );
              })}

              <div>
                <a
                  className="bg-indigo-400 hover:bg-opacity-90 relative flex items-center justify-center rounded-full w-[50px] h-[50px] my-2"
                  data-title={specificIcons.twittIcon.name}
                >
                  <img
                    className="w-7"
                    src={specificIcons.twittIcon.src}
                    alt={specificIcons.twittIcon.name}
                  />
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftPanel;

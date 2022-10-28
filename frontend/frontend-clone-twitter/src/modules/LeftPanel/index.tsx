import logo from '/icons/twitter-logo-white.svg';
import { navIcons, icons } from '../../assets/Icons';

const LeftPanel = () => {
  return (
    <>
      <div className="min-w-[68px] xl:w-1/4 h-auto relative top-0 flex flex-col border-r border-slate-700 overflow-auto">
        <div className="fixed ">
          <div className="w-[68px] lg:w-max">
            <div className="flex flex-col items-center pt-1 lg:items-start">
              <a className=" hover:bg-gray-900  bg-opacity-10  flex items-center justify-center rounded-full w-14 h-14">
                <img src={logo} alt="Twitter" className="w-7 h-7" />
              </a>
            </div>
            <nav className="flex flex-col items-center lg:w-max lg:items-start">
              {navIcons.map((icon) => {
                return (
                  <a
                    className=" hover:bg-gray-900 relative bg-opacity-10  flex items-center justify-center rounded-full w-12 h-12 my-2 lg:w-max lg:px-4"
                    data-title={icon.name}
                  >
                    <img className="w-7" src={icon.src} alt={icon.name} />
                    <div className="hidden xl:flex">
                      <p>{icon.name}</p>
                    </div>
                  </a>
                );
              })}

              <div>
                <a
                  className="bg-indigo-400 hover:bg-opacity-90 relative flex items-center justify-center rounded-full w-[50px] h-[50px] my-2"
                  data-title={icons.twittIcon.name}
                >
                  <img
                    className="w-7"
                    src={icons.twittIcon.src}
                    alt={icons.twittIcon.name}
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

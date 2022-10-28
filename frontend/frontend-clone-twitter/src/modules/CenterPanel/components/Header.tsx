import { icons } from '../../../assets/Icons';

const Header = () => {
  const { starsIcon } = icons;

  return (
    <div className="sticky top-0 backdrop-blur-md bg-black/60 h-[53px] z-50 ">
      <a>
        <header className=" flex justify-between items-center h-[53px] px-4 z-50 ">
          <h1 className="font-bold text-xl">Inicio</h1>
          <a
            className="relative title-r  hover:bg-gray-900  bg-opacity-10  flex items-center justify-center rounded-full w-10 h-10 "
            data-title={starsIcon.name}
          >
            <img src={starsIcon.src} alt={starsIcon.name} />
          </a>
        </header>
      </a>
    </div>
  );
};

export default Header;

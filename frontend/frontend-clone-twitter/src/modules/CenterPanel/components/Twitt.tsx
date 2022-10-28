import { TwittType } from '..';
import { icons } from '../../../assets/Icons';

interface TwittProps {
  twitt: TwittType;
}
const Twitt = ({ twitt }: TwittProps) => {
  const { responseIcon, retwittIcon, heartIcon, shareIcon, dotsIcon } = icons;

  return (
    <div>
      <div className="w-full flex border-b  border-slate-700 pr-2">
        <div className="min-w-[48px] max-w-[48px] mx-2 py-2">
          <a>
            <img
              className="rounded-full "
              src={twitt.img}
              alt={twitt.userAccount}
            />
          </a>
        </div>

        <div className="hover:bg-white/[2%]">
          {/* Seccion del Header */}
          <div className="flex justify-between items-center pt-1">
            <div className="flex items-center">
              <div className="font-bold">
                <p>{twitt.userName}</p>
              </div>
              <div className=" pl-2 text-white/50 text-base font-light">
                <p>{twitt.userAccount}</p>
              </div>
              <div className="pl-2 text-white/50 text-base font-light">
                <p>{twitt.twittTime}</p>
              </div>
            </div>
            {/* Boton de Mas opciones */}
            <div className="w-[36px] mr-1">
              <button className="w-[36px] opacity-50 relative  hover:bg-slate-700/60 rounded-full p-2">
                <img
                  src={dotsIcon.src}
                  alt={dotsIcon.name}
                  width={55}
                  height={5}
                />
              </button>
            </div>
          </div>
          {/* Seccion del Twitt */}
          <div>{twitt.twitt}</div>

          {/* Seccion de Acciones */}
          <div className="flex justify-between py-1 font-light text-sm">
            <button className="flex w-fit opacity-40 items-center">
              <img
                src={responseIcon.src}
                alt={responseIcon.name}
                width={35}
                height={35}
                className="hover:bg-slate-700 rounded-full p-2 hover:bg-opacity-60"
              />
              <span>{twitt.reactions.respons}</span>
            </button>
            <button className="flex w-fit opacity-40 items-center">
              <img
                src={retwittIcon.src}
                alt={retwittIcon.name}
                width={35}
                height={35}
                className="hover:bg-slate-700 rounded-full p-2 hover:bg-opacity-60"
              />
              <span>{twitt.reactions.retwits}</span>
            </button>
            <button className="flex w-fit opacity-40 items-center">
              <img
                src={heartIcon.src}
                alt={heartIcon.name}
                width={35}
                height={35}
                className="hover:bg-slate-700 rounded-full p-2 hover:bg-opacity-60"
              />
              <span>{twitt.reactions.likes}</span>
            </button>
            <button className="flex w-fit opacity-40 items-center">
              <img
                src={shareIcon.src}
                alt={shareIcon.name}
                width={35}
                height={35}
                className="hover:bg-slate-700 rounded-full p-2 hover:bg-opacity-60"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Twitt;

import { specificIcons } from '../../assets/navIcons';

const CenterPanel = () => {
  const {
    starsIcon,
    arrowIcon,
    worldIcon,
    photoIcon,
    gifIcon,
    smileIcon,
    pinMapIcon,
    responseIcon,
    retwittIcon,
    heartIcon,
    shareIcon,
    dotsIcon,
  } = specificIcons;
  const actionBar = [photoIcon, gifIcon, smileIcon, pinMapIcon];
  const actionTwitt = [responseIcon, retwittIcon, heartIcon, shareIcon];

  const firstTwitt = {
    img: '/profileImg/la-2.0.jpg',
    userName: 'Naicord',
    userAccount: '@naicord',
    twittTime: '10min',
    twitt:
      'Hola Como estan Este es un twitt de pruebas :) espero que todo bien por ahi en el stream xD',
    reactions: { respons: 10500, retwits: 234, likes: 4535 },
  };

  return (
    <>
      <div className=" w-full flex flex-col h-[5000px] border-r border-slate-700">
        <a className="sticky top-0">
          <header className=" flex justify-between items-center backdrop-blur-md bg-black bg-opacity-75 h-[53px] px-4 ">
            <h1 className="font-bold text-xl">Inicio</h1>
            <a
              className="relative title-r  hover:bg-gray-900  bg-opacity-10  flex items-center justify-center rounded-full w-10 h-10 "
              data-title={starsIcon.name}
            >
              <img src={starsIcon.src} alt={starsIcon.name} />
            </a>
          </header>
        </a>

        <main>
          <div className="flex border-b px-4 py-1 border-b-slate-800">
            <div className="min-w-[48px] mr-3 pt-1">
              <a className=" ">
                <img
                  className="rounded-full w-[48px] max-h-[48px]"
                  src="/profileImg/la-2.0.jpg"
                  alt="profile"
                />
              </a>
            </div>
            <div className="pl-2 w-full py-1">
              <div className="">
                <div className="inline-flex text-sm text-[14px] cursor-pointer text-blue-400 font-bold border border-slate-500 rounded-full px-3 py-[0.5px] ">
                  Todos{' '}
                  <img
                    className="ml-1"
                    src={arrowIcon.src}
                    width={18}
                    height={18}
                  />
                </div>
              </div>
              <div className="flex flex-col pt-4 divide-y divide-gray-700">
                <div>
                  <input
                    className="w-full bg-transparent text-xl outline-none py-3 placeholder:text-gray-500"
                    placeholder="¿Qué está pasando?"
                    type="text"
                  />
                  <div className="h-[22px] mb-2">
                    <p className="text-blue-400 text-[0.9rem] font-bold flex h-[16px] items-center ">
                      <img
                        src={worldIcon.src}
                        alt={worldIcon.name}
                        width={14}
                        height={14}
                        className="mr-1"
                      />
                      <span className="h-[19px]">
                        Cualquier persona puede responder
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex justify-between py-3">
                  <div className="flex font-normal">
                    {actionBar.map((el) => {
                      return el.name == 'Ubicacion' ? (
                        <button
                          className="w-fit h-fit hover:cursor-pointer pr-4 disabled:cursor-default disabled:opacity-50"
                          disabled={true}
                        >
                          <img
                            src={el.src}
                            alt={el.name}
                            data-title={el.name}
                            width={20}
                            height={20}
                          />
                        </button>
                      ) : (
                        <button className="w-fit h-fit hover:cursor-pointer pr-4 disabled:cursor-default disabled:opacity-50">
                          <img
                            src={el.src}
                            alt={el.name}
                            data-title={el.name}
                            width={20}
                            height={20}
                          />
                        </button>
                      );
                    })}
                  </div>
                  <button
                    className="rounded-full px-4 cursor-pointer  font-bold w-fit p-1.5 bg-blue-400 disabled:opacity-50"
                    disabled={true}
                  >
                    Twittear
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-full border-b border-b-slate-700 p-4">
            <button className="w-full text-blue-400 font-light">
              Mostrar 125 Tweets
            </button>
          </div>

          <div>
            <div className="w-full flex border-b  border-slate-700">
              <div className="min-w-[48px] max-w-[48px] mx-2">
                <a className="px-2 py-0">
                  <img
                    className="rounded-full "
                    src={firstTwitt.img}
                    alt={firstTwitt.userAccount}
                  />
                </a>
              </div>
              <div>
                {/* Seccion del Header */}
                <div className="flex">
                  <p>{firstTwitt.userName}</p>
                  <p>{firstTwitt.userAccount}</p>
                  <p>{firstTwitt.twittTime}</p>
                </div>
                {/* Seccion del Twitt */}
                <div>{firstTwitt.twitt}</div>

                {/* Seccion de Acciones */}
                <div className="flex justify-between p-2">
                  {actionTwitt.map((el) => {
                    return (
                      <button className="flex w-fit opacity-50 items-center">
                        <img
                          src={el.src}
                          alt={el.name}
                          width={20}
                          height={20}
                        />
                        <span className="pl-2">
                          {firstTwitt.reactions.likes}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="w-[36px] ml-4">
                <button className="w-[36px] opacity-50 relative top-2 right-4 hover:bg-slate-700 rounded-full p-2 hover:bg-opacity-60">
                  <img
                    src={dotsIcon.src}
                    alt={dotsIcon.name}
                    width={60}
                    height={60}
                  />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default CenterPanel;

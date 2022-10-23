import { specificIcons } from '../../assets/navIcons';
const CenterPanel = () => {
  const { starsIcon, arrowIcon, worldIcon } = specificIcons;
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
          <div className="flex border-b px-4 py-1 border-b-slate-600">
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
                  <div>img,gif,reaction,ubi</div>
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
          <div>NOTIFICACION MAS TWITTS CARGADOS</div>
          <div>CONTENIDO TODOS LOS TWITTS</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            veritatis. Necessitatibus velit nam veniam veritatis, enim qui
            placeat minus ipsum. Debitis reprehenderit beatae ducimus. Corporis
            itaque repudiandae quam totam voluptas!Lorem
          </p>
        </main>
      </div>
    </>
  );
};
export default CenterPanel;

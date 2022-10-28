import { icons } from '../../../assets/Icons';

const MakeTwitt = () => {
  const { arrowIcon, worldIcon, photoIcon, gifIcon, smileIcon, pinMapIcon } =
    icons;
  const actionBar = [photoIcon, gifIcon, smileIcon, pinMapIcon];
  return (
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
            <img className="ml-1" src={arrowIcon.src} width={18} height={18} />
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
  );
};

export default MakeTwitt;

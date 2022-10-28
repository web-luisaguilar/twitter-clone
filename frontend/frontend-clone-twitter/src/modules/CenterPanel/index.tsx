import Header from './components/Header';
import MakeTwitt from './components/MakeTwitt';
import Twitt from './components/Twitt';
import { TwittType } from './types';

const CenterPanel = () => {
  const allTwitts: TwittType[] = [
    {
      img: '/profileImg/la-2.0.jpg',
      userName: 'Naicord',
      userAccount: '@naicord',
      twittTime: '10min',
      twitt:
        'Hola Como estan Este es un twitt de pruebas :) espero que todo bien por ahi en el stream xD',
      reactions: { respons: 10500, retwits: 234, likes: 4535 },
    },
    {
      img: '/profileImg/la-2.0.jpg',
      userName: 'Naicord',
      userAccount: '@naicord',
      twittTime: '2min',
      twitt:
        'Bienvendios al nuevo Twitter un lugar hermoso con posiblemente mucho hate pero es mio, y lo que es mio es bueno heheh ❤ 🤙',
      reactions: { respons: 10500, retwits: 234, likes: 5.2 },
    },
  ];

  return (
    <>
      <div className=" w-full md:w-2/3 xl:w-2/4 flex flex-col h-[5000px] border-r border-slate-700">
        <Header />

        <main>
          <MakeTwitt />

          <div className=" w-full border-b border-b-slate-700 p-4 hover:bg-white/[2%]">
            <button className="w-full text-blue-400 font-light ">
              Mostrar 125 Tweets
            </button>
          </div>

          {/* Seccion del box full Twitt */}
          {allTwitts.map((twitt) => (
            <Twitt twitt={twitt} />
          ))}
        </main>
      </div>
    </>
  );
};
export default CenterPanel;

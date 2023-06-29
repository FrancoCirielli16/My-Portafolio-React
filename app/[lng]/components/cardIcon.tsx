import { FaPython, FaJava, FaJs,FaDatabase } from "react-icons/fa";
import { SiFastapi, SiMongodb } from "react-icons/si";
import { BiTerminal } from "react-icons/bi";

const CardIcon = ({t}:{t:any}) => {
    return (
      <div className="relative w-full h-full p-4 md:p-8">
        <h3 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">{t.programin}</h3>
        <div className="flex items-center">
          <div className="flex flex-col items-center justify-center w-20">
            <div className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
              <FaPython size={48} />
            </div>
            <span className="text-white">Python</span>
          </div>
          <div className="flex flex-col items-center justify-center w-20">
            <div className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
              <FaJava size={48} />
            </div>
            <span className="text-white">Java</span>
          </div>
          <div className="flex flex-col items-center justify-center w-20">
            <div className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
              <FaJs size={48} />
            </div>
            <span className="text-white">JavaScript</span>
          </div>
          <div className="flex flex-col items-center justify-center w-20">
            <div className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
              <BiTerminal size={48} />
            </div>
            <span className="text-white">Bash</span>
          </div>
        </div>
        <h3 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">Backend</h3>
        <div className="flex items-center">
          <div className="flex flex-col items-center justify-center w-20">
            <div className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
              <SiFastapi size={48} />
            </div>
            <span className="text-white">FastAPI</span>
          </div>
        </div>
        <h3 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">DataBase</h3>
        <div className="flex items-center">
          <div className="flex flex-col items-center justify-center w-20">
            <div className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
              <SiMongodb size={48} />
            </div>
            <span className="text-white">MangoDB</span>
          </div>
          <div className="flex flex-col items-center justify-center w-20">
            <div className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
              <FaDatabase size={48} />
            </div>
            <span className="text-white">MySQL</span>
          </div>
        </div>
      </div>
    );
  };
  
  
  

export default CardIcon
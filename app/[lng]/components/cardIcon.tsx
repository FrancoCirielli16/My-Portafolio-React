import { FaPython, FaJava, FaJs, FaDatabase, FaTty } from "react-icons/fa";
import { SiFastapi, SiMongodb, SiReact, SiRevue, SiVuedotjs } from "react-icons/si";
import { BiTerminal } from "react-icons/bi";

const CardIcon = ({ t }: { t: any }) => {
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
          <div className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 text-zinc-200 group-hover:text-white  group-hover:border-zinc-200 drop-shadow-orange">
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
        <div className="flex flex-col items-center justify-center w-20 ml-4">
          <div className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">


            <svg viewBox="0 0 128 128">
              <path fill="#fff" d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1A23 23 0 0180 109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49.19 49.19 0 01.14-5.16c.06-.08 10-.12 22-.1h21.81z"></path>
            </svg>

          </div>
          <span className="text-white">TypeScript</span>
        </div>

        <div className="flex flex-col items-center justify-center w-20">
          <div className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 text-zinc-200 group-hover:text-white  group-hover:border-zinc-200 drop-shadow-orange">
            <BiTerminal size={48} />
          </div>
          <span className="text-white">Bash</span>
        </div>
      </div>
      <h3 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">Backend</h3>
      <div className="flex items-center">
        <div className="flex flex-col items-center justify-center w-20">
          <div className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
            <SiFastapi size={48} />
          </div>
          <span className="text-white">FastAPI</span>
        </div>
        <div className="flex flex-col items-center justify-center w-20">
          <div className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">

            <svg viewBox="0 0 128 128">
              <path fill="#fff" d="M59.448 0h20.93v96.88c-10.737 2.04-18.62 2.855-27.181 2.855-25.551-.001-38.87-11.551-38.87-33.705 0-21.338 14.135-35.2 36.015-35.2 3.398 0 5.98.272 9.106 1.087zm0 48.765c-2.446-.815-4.485-1.086-7.067-1.086-10.6 0-16.717 6.523-16.717 17.939 0 11.145 5.845 17.26 16.582 17.26 2.309 0 4.212-.136 7.202-.542z"></path><path fill="#fff" d="M113.672 32.321V80.84c0 16.717-1.224 24.735-4.893 31.666-3.398 6.661-7.883 10.873-17.124 15.494l-19.435-9.241c9.242-4.35 13.726-8.153 16.58-14 2.99-5.979 3.943-12.91 3.943-31.122V32.321zM92.742.111h20.93v21.474h-20.93z"></path>
            </svg>

          </div>
          <span className="text-white">Django</span>
        </div>
        <div className="flex flex-col items-center justify-center w-20">
          <div className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">


            <svg viewBox="0 0 128 128">
              <path fill="#fff" d="M75.323.4c-.898 0-1.796.199-2.594.498 1.696 1.098 2.594 2.594 3.093 4.29 0 .2.1.4.1.599 0 .2.1.399.1.598.1 2.894-.799 3.293-1.397 4.989-.998 2.194-.698 4.589.499 6.484.1.2.2.5.399.699-1.297-8.38 5.686-9.578 6.983-12.172.1-2.294-1.795-3.79-3.292-4.888C77.718.599 76.52.399 75.324.399ZM85.8 2.194c-.1.798 0 .599-.1.998 0 .299 0 .598-.1.898-.1.299-.1.499-.2.798-.1.3-.199.499-.299.798-.1.2-.2.399-.3.698-.099.1-.199.3-.298.4-.1.1-.1.199-.2.299-.2.2-.3.498-.499.698l-.598.599c-.2.2-.4.399-.599.498-.698.5-1.496.898-2.195 1.397-.2.2-.499.3-.698.499-.2.2-.4.3-.599.499l-.598.598c-.2.2-.4.4-.5.699-.199.2-.299.499-.498.698-.1.3-.2.499-.399.798-.1.3-.2.5-.3.798-.1.3-.199.599-.199.798 0 .1 0 .3-.1.4 0 .1 0 .299-.1.399v1.396c0 .3 0 .5.1.798 0 .3.1.5.2.799s.2.498.3.798c.099.2.199.299.199.499l-7.583-2.894a53.157 53.157 0 0 0-3.79-.997c-.699-.2-1.397-.3-2.096-.5a61.927 61.927 0 0 0-5.986-.897h-.2c-1.995-.2-3.89-.3-5.885-.3-1.497 0-2.894.1-4.29.2-1.996.1-3.99.4-5.986.699l-1.497.299c-.997.2-1.995.399-2.993.698-.499.1-.997.3-1.496.4-.499.199-.998.398-1.397.598-.399.2-.698.3-1.097.499-.1 0-.1 0-.2.1-.3.199-.598.299-.898.498-.1 0-.2.1-.2.1-.398.2-.698.4-.997.499-.2.1-.499.2-.698.3-.1.099-.2.099-.3.199-.299.2-.598.299-.898.498-.299.2-.598.3-.798.5-.2.199-.499.299-.698.498 0 0-.1 0-.1.1-.2.1-.399.3-.598.499l-.1.1c-.2.1-.3.299-.499.399-.1 0-.1.1-.2.1-.199.1-.299.299-.498.398 0 .1-.1.1-.1.1l-.599.599-.1.1-.598.598s0 .1-.1.1l-.499.499c-.1.1-.2.1-.2.2l-.598.598c0 .1-.1.1-.1.2l-.798.797-.1.1c-.498.599-1.097 1.098-1.695 1.597-.599.498-1.198.997-1.896 1.496s-1.297.898-1.995 1.297c-.699.399-1.397.698-2.095.998-.699.299-1.397.598-2.095.798-1.397.3-2.794.898-3.991.997 0-.498-.3-.399-.599-.399-.299.1-.598.1-.798.2-.3.1-.499.2-.798.3a2.96 2.96 0 0 0-.798.398c-.2.2-.499.3-.698.5-.2.199-.5.398-.699.598-.2.2-.499.399-.698.598-.2.2-.4.4-.599.699-.2.299-.399.498-.499.798-.199.2-.299.499-.498.798-.1.3-.3.598-.4.898l-.299.898c-.1.299-.1.498-.2.798v.1c-.1.3-.1.698-.1.898.1-.1.1.1.1.299v.399c0 .2.1.399.1.598.1.2.1.4.2.599.099.2.199.399.398.599.1.2.3.399.4.598.199.2.398.4.598.499.2.2.399.4.598.499.798.698.998.898 1.996 1.496.2.1.299.2.499.3h.1v.2c0 .298.1.498.199.797.1.3.2.599.3.798l.298.599c0 .1.1.1.1.2.1.299.3.498.4.698.199.2.299.499.498.698l.599.599.598.598h.1c.2.2.399.3.599.5s.499.299.698.398c.2.1.499.3.798.4.2.1.4.199.698.199 0 0 .1 0 .1.1.1 0 .3.1.4.1-.1 1.795-.1 3.491.1 4.09.298.698 1.795-1.397 3.192-3.691-.2 2.294-.3 4.988 0 5.786.399.798 2.294-1.796 4.09-4.59 23.345-5.387 44.695 10.775 46.99 33.622-.4-3.592-4.79-5.587-6.884-5.088-.998 2.394-2.694 5.587-5.387 7.482.199-2.195.1-4.39-.3-6.584-.698 2.993-2.095 5.886-4.09 8.28-3.093.2-6.285-1.297-7.882-3.591-.1-.1-.2-.3-.299-.4-.1-.199-.2-.498-.3-.698-.1-.2-.199-.499-.199-.698v-1.197c0-.2.1-.5.2-.699s.1-.499.2-.698c.099-.2.199-.499.398-.698.599-1.597.599-2.894-.499-3.592l-.598-.3c-.1 0-.3-.099-.4-.099s-.199-.1-.299-.1c-.199-.1-.498-.1-.698-.2-.2-.1-.499-.1-.698-.1-.2 0-.5-.099-.699-.099h-.498c-.3 0-.5 0-.699.1-.2 0-.499.1-.698.1-.2.1-.499.1-.699.2-.199.099-.399.199-.698.298l-.599.3c-7.682 4.988-3.092 16.76 2.096 20.152-1.996.4-3.991.798-4.59 1.198l-.1.1c1.397.897 2.894 1.596 4.49 2.194 2.095.699 4.39 1.297 5.387 1.597 2.694.598 5.488.798 8.281.598 14.566-.998 26.538-12.171 28.732-26.737.1.3.1.598.2.898.1.598.2 1.197.3 1.895.1.3.1.599.1.898v.1c0 .3.099.599.099.898 0 .399.1.698.1 1.097v4.19c0 .3-.1.5-.1.799v.299c0 .3-.1.599-.1.998-.1.299-.1.598-.2.898v.1c-.1.299-.1.598-.199.897v.1c-.1.3-.1.599-.2.898v.1l-.299.898v.1c-.1.299-.2.698-.299.997-.1.3-.2.599-.4.998-.099.299-.199.698-.398.997-.1.3-.3.599-.4.998-.099.3-.299.599-.398.898 0 .1-.1.2-.1.2s0 .1-.1.1c-2.095 4.289-5.287 8.08-9.278 11.073-.3.2-.499.4-.798.599-.1.1-.2.1-.2.2-.2.199-.499.299-.698.498l.1.2c.498-.1.898-.1 1.396-.2.898-.1 1.696-.3 2.594-.499.2 0 .5-.1.699-.2.2 0 .299-.1.498-.1s.5-.099.699-.099c.2-.1.399-.1.598-.2 3.293-.797 6.485-1.895 9.578-3.192-5.288 7.183-12.271 12.97-20.452 16.76 3.791-.299 7.582-.897 11.273-1.995a52.469 52.469 0 0 0 31.127-24.941c-1.396 7.582-4.39 14.865-8.879 21.25 3.193-2.095 6.086-4.59 8.78-7.283 7.382-7.682 12.27-17.559 13.867-28.034 1.098 5.188 1.497 10.575.998 15.863 23.844-33.222 1.995-67.641-7.183-76.72 0-.1-.1-.1-.1-.2 0 .4 0 .798-.1 1.198-.1.798-.2 1.496-.3 2.194-.199.699-.398 1.497-.598 2.195-.2.699-.499 1.397-.798 2.095-.3.699-.599 1.397-.998 1.996s-.798 1.297-1.197 1.895c-.399.599-.898 1.197-1.397 1.796-.498.599-.997 1.097-1.596 1.696-.3.3-.598.599-.997.798-.3.2-.5.4-.799.698-.598.5-1.197.898-1.895 1.297-.599.4-1.297.799-1.995 1.098l-2.096.898c-.698.299-1.396.499-2.095.698-.698.2-1.496.4-2.195.499-.798.1-1.496.2-2.194.3-.5 0-1.098.099-1.597.099-.798 0-1.496-.1-2.194-.1-.799-.1-1.497-.2-2.195-.3a7.874 7.874 0 0 1-2.195-.598c.698-.1 1.496-.1 2.195-.299.798-.1 1.496-.3 2.195-.499.698-.2 1.496-.399 2.095-.698l2.095-.898c.698-.3 1.297-.698 1.995-1.097.599-.4 1.297-.898 1.896-1.297.598-.5 1.197-.998 1.696-1.497.598-.499 1.097-1.097 1.596-1.596.499-.599.998-1.197 1.397-1.796.1-.1.1-.2.2-.3.298-.498.697-1.097.997-1.595a18.56 18.56 0 0 0 .997-1.996c.3-.698.6-1.397.799-2.095l.598-2.095c.1-.798.3-1.496.3-2.195.1-.798.1-1.496.1-2.195 0-.498 0-1.097-.1-1.596-.1-.798-.2-1.496-.3-2.195-.1-.798-.3-1.496-.499-2.195-.2-.698-.499-1.396-.698-2.095-.3-.698-.599-1.396-.898-1.995-.399-.698-.698-1.297-1.097-1.995-.4-.599-.898-1.198-1.297-1.796-.499-.599-.998-1.098-1.497-1.696-.299-.3-.598-.599-.898-.798-1.496-1.197-2.993-2.195-4.589-3.193-.2-.1-.399-.2-.698-.3-1.297-1.096-2.295-1.396-3.292-1.795Z"></path>
            </svg>


          </div>
          <span className="text-white">NestJS</span>
        </div>
      </div>

      <h3 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">DataBase</h3>
      <div className="flex items-center mt-3">
        <div className="flex flex-col items-center justify-center w-20">
          <div className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
            <SiMongodb size={48} />
          </div>
          <span className="text-white">MongoDB</span>
        </div>
        <div className="flex flex-col items-center justify-center w-20">
          <div className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
            <FaDatabase size={48} />
          </div>
          <span className="text-white">MySQL</span>
        </div>
      </div>
      <h3 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">Frontend</h3>
      <div className="flex items-center mt-3">
        <div className="flex flex-col items-center justify-center w-20">
          <div className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
            <SiReact size={48} />
          </div>
          <span className="text-white">React</span>
        </div>
        {/* <div className="flex flex-col items-center justify-center w-20">
          <div className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
            <SiVuedotjs size={48} />
          </div>
          <span className="text-white">Vuejs</span>
        </div> */}
      </div>
    </div>
  );
};




export default CardIcon
import ReactCountryFlag from "react-country-flag";

const CardLeng = ({t}:{t:any}) => {
    return (
      <div className="relative w-full h-full p-4 md:p-8">
        <h3 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">{t.idioms}</h3>
        <div className="flex items-center">
          <div className="flex flex-col items-center justify-center w-20">
            <div className="relative z-10 flex items-center justify-center w-12 h-12" style={{ fontSize: '36px' }}>
              <ReactCountryFlag countryCode="ES" svg />
            </div>
            <span className="text-white">{t.es}</span>
          </div>
          <div className="flex flex-col items-center justify-center w-20">
            <div className="relative z-10 flex items-center justify-center w-12 h-12" style={{ fontSize: '36px' }}>
              <ReactCountryFlag countryCode="IT" svg />
            </div>
            <span className="text-white">{t.it}</span>
          </div>
          <div className="flex flex-col items-center justify-center w-20">
            <div className="relative z-10 flex items-center justify-center w-12 h-12" style={{ fontSize: '36px' }}>
              <ReactCountryFlag countryCode="US" svg />
            </div>
            <span className="text-white">{t.en}</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default CardLeng;
  
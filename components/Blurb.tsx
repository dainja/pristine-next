export const Blurb: React.FC = () => {
  return (
    <div className="relative bg-custom1 pt-16 sm:pt-20 lg:pt-28">
      <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase"></h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl font-aurora">
            Salong Pristine
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            Hos oss hittar du den perfekta balansen mellan en kunnig och erfaren
            frisör, barberare och en makeupartist med ett brett utbud. Vi
            erbjuder alltså en härlig kombination av kompetens och en bekväm
            samt avslappnad stämning som utgör grunden för salong Pristine.
          </p>
        </div>
        <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
          <img
            className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 object-position"
            src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2036&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

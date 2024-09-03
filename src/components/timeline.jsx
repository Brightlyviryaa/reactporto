const Timeline = () => {
  const projects = [
    {
      Date: "February 2023 - april 2023",
      Title: "Movie Pedia - Movie database with TMDB API, and React JS",
      Description:
        "Movie Pedia merupakan website yang aku dan kelompok ku buat untuk pameran website front end semester 2 menggunakan framework CSS bootstrap, Framework javascript react js, dan API database yang berisi daftar film gratis terlengkap TMDB. Dosen kami (Fenina Adline Twince Tobing, S.Kom., M.Kom) memberi apresiasi nilai 96.00 untuk UAS Teori",
    },
    {
      Date: "Agustus 2023 - December 2023",
      Title: "Real Client PT.Crevon Indonesia - crevonparts.com",
      Description:
        "Project uas web programming adalah mencari real client untuk dibuatkan website, crevon merupakan suplier sparepart motor yang minta untuk dibuatkan catalogue untuk produk nya sebagai pengganti buku catalogue konvensional. di backend web ini dapat melakukan crud product dan catalogue baru",
    },
  ];

  return (
    <section className="mb-10 px-10 md:px-32 bg-slate-100 py-10">
      <h1 className="mb-10 text-4xl font-extrabold tracking-tight leading-none text-black text-center md:text-5xl lg:text-6xl">
        My Project Timeline
      </h1>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {projects.map((project, index) => (
          <li className="mb-10 ms-4" key={index}>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {project.Date}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {project.Title}
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {project.Description}
            </p>
            {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg></a> */}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Timeline;

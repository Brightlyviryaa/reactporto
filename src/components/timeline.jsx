const Timeline = () => {
    const projects = [
        {
            Date: "February 2023 - april 2023",
            Title: "Movie Pedia - Movie database with TMDB API, and React JS",
            Description: "Movie Pedia merupakan website yang aku dan kelompok ku buat untuk pameran website front end semester 2 menggunakan framework CSS bootstrap, Framework javascript react js, dan API database yang berisi daftar film gratis terlengkap TMDB. Dosen kami (Fenina Adline Twince Tobing, S.Kom., M.Kom) memberi apresiasi nilai 96.00 untuk UAS Teori"
        },
        {
            Date: "Agustus 2023 - December 2023",
            Title: "Real Client PT.Crevon Indonesia - crevonparts.com",
            Description: "Project uas web programming adalah mencari real client untuk dibuatkan website, crevon merupakan suplier sparepart motor yang minta untuk dibuatkan catalogue untuk produk nya sebagai pengganti buku catalogue konvensional. di backend web ini dapat melakukan crud product dan catalogue baru"
        },
        {
            Date: "Ready soon",
            Title: "burgerbangorporis.com - Web app untuk F&B UMKM burger bangor cabang poris indah",
            Description: "burger bangor poris adalah salah satu cabang tertua ke 4 burger bangor berlokasi di cipondoh indah, tangerang, banten. Web app ini memiliki tampilan user yang menampilkan singgle home page untuk menampilkan dasar informasi burger bangor poris, namun dibelakangnya kompleks karena akan ada management stock product, management akuntansi keuangan, management karyawan, dan oprec."
        },
        {
            Date: "Future Projects",
            Title: "Social mannequin - Buy social media followers, like, comments, and more",
            Description: "Menggunakan API resseler social media di website ini pelanggan dapat membeli followers, like, coments untuk berbagai kebutuhan dengan harga yang terjangkau"
        },
        {
            Date: "Future Projects",
            Title: "Budhism Forum",
            Description: "Rencana ingin membuat forum online untuk berbagi pengetahuan tentang ajaran buddha, disana juga akan ada laman untuk berdana dan koperasi online untuk memvasilitasi vihara vihara yang terdaftar berjualan menambah dana untuk membantu mengembangkan buddha dhamma"
        },
        {
            Date: "Future Projects",
            Title: "koderia Tube - Youtube clone for IT education",
            Description: "Koderia merupakan kursus komputer ofline yang ku dirikan dan sudah beroprasi di cipondoh, kota tanggerang. website ini akan membagikan edukasi gratis mengenai pemograman sehingga akses edukasi bisa lebih tersebar luaskan"
        },
    ];

    return (
        <section className="mb-10 px-10 md:px-32 bg-slate-100 py-10">
            <h1 className="mb-10 text-4xl font-extrabold tracking-tight leading-none text-black text-center md:text-5xl lg:text-6xl">My Project Timeline</h1>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                {projects.map((project, index) => (
                    <li className="mb-10 ms-4" key={index}>
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{project.Date}</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.Title}</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{project.Description}</p>
                        {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg></a> */}
                    </li>
                ))}
            </ol>
        </section>
    )
}

export default Timeline;

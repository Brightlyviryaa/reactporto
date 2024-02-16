import moviepedia from './Projects/moviepedia.svg'
import crevonparts from './Projects/crevonparts.svg'
import bangor from './Projects/bangor.svg'

const Galery = () => {
    const Projects = [
        {
            name: "Movie Pedia - Movie database with TMDB API, and React JS",
            image: moviepedia,
        },
        {
            name: "Real Client PT.Crevon Indonesia - crevonparts.com",
            image: crevonparts,
        },
        {
            name: "burgerbangorporis.com - Web app untuk F&B UMKM burger bangor cabang poris indah",
            image: bangor,
        },

    ]

    return (
        <section id="galery">
            <h1 className="mb-10 text-4xl font-extrabold tracking-tight leading-none text-black text-center md:text-5xl lg:text-6xl">Projects Gallery</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 md:px-32">
                {Projects.map((project, index) => (
                    <div data-aos="flip-left" className='w-full h-full flex justify-center items-center'>
                        <div key={index} className="min-h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src={project.image} alt={project.name} />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.name}</h5>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Galery;

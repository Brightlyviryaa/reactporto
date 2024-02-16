import brightly from './images/brightly.png'

const Profile = () => {
    return (
        <section className='px-5 md:px-32'>
            <h1 className="mb-10 text-4xl font-extrabold tracking-tight leading-none text-black text-center md:text-5xl lg:text-6xl">My Profile</h1>
            <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
                <div className='w-full flex justify-center items-center'>
                    <img className='w-72 h-auto md:w-auto md:h-96 rounded-lg object-cover' src={brightly} alt="Profile photo" />
                </div>
                <div className="w-full md:ml-10 mt-5 md:mt-0">
                    <h2 className="text-2xl font-extrabold mb-2">Brightly Virya</h2>
                    <h5 className="text-lg font-medium mb-4 text-yellow-900">Informatics Student</h5>

                    <ul className="list-disc ml-5 text-slate-600">
                        <li className="mb-2">Overall GPA 3.27</li>
                        <li>straight 9 on PTI (Pengantar teknologi internet) and Web Programming Lecture</li>
                        <li className="mb-2">Arsa OMB UMN 2023</li>
                        <li className="mb-2">Coder mentor of Game Development Club UMN 2023 - 2024</li>
                        <li className="mb-2">Coordinator of Accommodation in Global Game Jam 2023</li>
                        <li className="mb-2">Coordinator of sowulo (website division) in starlight 2024</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Profile;

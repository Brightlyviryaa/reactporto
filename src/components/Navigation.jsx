
const Navigation = () => {

    return (
        <nav className="mx-auto max-w-screen-xl flex flex-row justify-between items-center m-5 ">
            <div>
                <h1 className="font-bold text-2xl">Brightly Virya</h1>
            </div>
            <div className="hidden md:block">
                <button className="bg-orange-400 rounded-xl text-white font-medium px-5 py-2 hover:bg-orange-500">Download CV</button>
            </div>
        </nav>

    );
}

export default Navigation;

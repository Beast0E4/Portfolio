function Home () {
    return (
        <div className="w-full h-[100vh] flex flex-col items-center justify-center relative">
            <div className="flex flex-col w-full items-center z-[10]">
                <h1 className="text-white font-bold title text-[7rem]">EBISON SOJAN</h1>
                <p className="text-white text-[1.3rem] uppercase font-monospace tracking-widest">Full stack developer, Competitve Programmer</p>
            </div>
            <img
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[5]"
                src="../../public/Hero.png"
            />

        </div>
    )
}

export default Home;
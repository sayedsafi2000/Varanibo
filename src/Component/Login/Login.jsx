import "./Login.css";
const Login = () => {
    return (
        <div className=" dark:bg-gray-800 h-screen overflow-hidden">
            <div className="container mx-auto px-6 py-8">
                
                <div className="full-card w-[70VW] mx-auto  lg:flex flex-wrap items-center bg-gray-200 h-[70vh] mt-20">
                    <div className="w-full md:w-1/3 bg-[#0fc599] lg:h-full flex items-center justify-center flex-col rounded-l-lg">
                        <h3 className="text-5xl text-white dark:text-white font-bold ">Varanibo</h3>
                        
                    </div>
                    <div className="w-full sm:w-full md:w-2/3 lg:2/3 h-full  flex items-start justify-center flex-col bg-[#e0e0e0] mt-8 md:mt-0 px-28 rounded-r-lg">
                        <form action="#" className="w-full">
                            <div className="mb-4 w-full">
                                <label className=" text-green-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="username">Username</label>
                                <input className="shadow appearance-none border border-b-[#0fc599] dark:border-gray-700 rounded w-full py-3 px-3 text-black dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                            </div>
                            <div className="mb-">
                                <label className=" text-green-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="password">Password</label>
                                <input className="shadow appearance-none border  border-b-[#0fc599] dark:border-gray-700 rounded w-full py-3 px-3 text-black dark:text-gray-200 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                            </div>
                            <h3 className="mb-10">
                            Don`t have an account?<span className="text-[#0fc599]"> Sign Up</span>
                            </h3>
                            <div className="w-full flex justify-start items-start ">
                                <button className="bg-[#0fc599] dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-bold py-3 px-14 rounded focus:outline-none focus:shadow-outline text-2xl z-10" type="button">LogIn</button>
                                <a className="inline-block align-baseline ml-6 text-2xl text-[#0fc599] dark:text-gray-200 dark:hover:text-gray-400" href="#">Forgot Password?</a>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="card-data"></div>
            </div>
        </div>

    );
};

export default Login;
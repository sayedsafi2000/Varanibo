import "./LoginForm.css";
const LoginForm = () => {
    return (
        <div className="main-card min-h-screen flex items-center justify-center p-8 md:p-0">
            <div className="dj-card bg-white shadow-lg flex flex-col items-center rounded-xl lg:flex-row lg:w-2/3 2xl:w-1/2 h:[100vh] 2xl:h-[75vh] md:h-[75vh] h-[80vh]">
                <div className="w-full md:w-1/3 2xl:w-1/3 2xl:h-full md:h-full flex flex-col items-center justify-center bg-[#0fc599] rounded-l-lg">
                    <h1 className="text-5xl text-white text-center flex items-center pb-2 ">Varanibo</h1>
                    <span className="hidden lg:block w-[30%] h-1 -ml-28 bg-white"></span>
                </div>


                <div className="p-8 lg:w-2/3 sm:p-8">
                    <form action="" className="flex flex-col px-16">
                        <div id="input-field" className="flex flex-col mb-4 relative">
                            <i className="fi fi-rr-envelope absolute top-11 right-5 text-zinc-400"></i>
                            <label htmlFor="email" className="mb-0 text-gray-500 font-bold">Email</label>
                            <input type="email" name="" id="email" placeholder="youremail@gmail.com" className="px-4 py-2 border-2 border-slate-300 rounded-md max-w-full focus:border-blue-500 focus:outline-none" />
                        </div>

                        <div id="input-field" className="flex flex-col relative">
                            <i className="fi fi-rr-lock absolute top-11 right-5 text-zinc-400"></i>
                            <label htmlFor="Password" className="mb-0 text-gray-500 font-bold">Password</label>
                            <input type="password" name="" id="password" placeholder="your password" className="px-4 py-2 border-2 border-slate-300 rounded-md max-w-full focus:outline-none focus:border-blue-500" />
                        </div>
                        <h3 className="mb-10">
                            Don`t have an account?<span className="text-[#0fc599]"> Sign Up</span>
                        </h3>
                        <div className="w-full flex justify-start items-start ">
                            <button className="bg-[#0fc599] dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-bold py-3 px-10 rounded focus:outline-none focus:shadow-outline text-2xl z-10" type="button">LogIn</button>
                            <a className="inline-block align-baseline ml-6 text-xl text-[#0fc599] dark:text-gray-200 dark:hover:text-gray-400" href="#">Forgot Password?</a>
                        </div>
                    </form>

                </div>
            </div>
            <div className="left-corner"></div>
            <div className="right-corner"></div>
        </div>
    );
};

export default LoginForm;
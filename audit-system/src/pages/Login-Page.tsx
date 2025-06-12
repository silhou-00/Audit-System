export default function Login(){
    return(
        <>
            <div className="bg-page h-dvh w-dvw flex justify-center items-center">
                <div className="bg-element h-128 w-147 rounded-4xl flex justify-evenly items-center flex-col gap-10">

                    <div className="mt-10">
                        <span className="font-OSExBold italic text-4xl font-bold">Audit System</span>
                    </div>

                    <div className="flex flex-col gap-8 -mt-5">
                        <div className="">
                            <a>
                                <svg className="absolute w-12 h-12 fill-blacktext mt-1 ml-6"
                                xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EFEFEF"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/>
                            </svg>
                            </a>

                            <input className="bg-white rounded-full w-140 h-15 pl-20 font-RWRegular text-2xl text-blacktext"
                            type="text" 
                            placeholder="Username" 
                            required />
                        </div>
                        

                        <div className="">
                            <a>
                                <svg className="absolute w-12 h-10 fill-blacktext mt-2 ml-6"
                                xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EFEFEF"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/>
                                </svg>
                            </a>
                            <input className="bg-white rounded-full w-140 h-15 pl-20 pr-15 font-RWRegular text-2xl text-blacktext"
                            type="text" 
                            placeholder="Password" 
                            required />
                            <button className="absolute -ml-18 mt-3">
                                <svg className="fill-blacktext w-20 h-10 cursor-pointer"
                                xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EFEFEF"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/>
                                </svg>
                            </button>
                        </div>

                    </div>

                    <div className="flex flex-row justify-between -mt-12 gap-55">
                        <span className="font-RWRegular text-base">
                            New User? <br></br>
                            <a className="underline " href="">Create an Account!</a>
                        </span>

                        <span className="">
                            <br></br>
                            <a href="" className="underline font-RWRegular text-base">Forgot Password?</a>
                        </span>
                    </div>

                    <div className="-mt-10">
                        <button className="bg-button text-whitetext font-RWBold text-2xl rounded-2xl w-80 h-15">Login</button>
                    </div>

                </div>
            </div>
        </>
    )
}
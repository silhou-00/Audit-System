
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navigation(){
    const NavbarButtons: any = [
        {
            text: "Dashboard",
            icon: ("M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400 0v-240h320v240H120Zm80-400h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z"),
            route: "/dashboard"
        },
        {
            text: "Audit",
            icon: ("M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z"),
            route: "/audit"
        },
        {
            text: "Report",
            icon: ("M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"),
            route: "/report"
        },
        {
            text: "Logs",
            icon: ("M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z"),
            route: "/log"
        },
        {
            text: "Profile",
            icon: ("M200-246q54-53 125.5-83.5T480-360q83 0 154.5 30.5T760-246v-514H200v514Zm280-194q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm69-80h422q-44-39-99.5-59.5T480-280q-56 0-112.5 20.5T269-200Zm211-320q-25 0-42.5-17.5T420-580q0-25 17.5-42.5T480-640q25 0 42.5 17.5T540-580q0 25-17.5 42.5T480-520Zm0 17Z"),
            route: "/profile"
        },
        {
            text: "Log Out",
            icon: ("M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"),
            route: "/logout"
        }
    ];

    //*Variables
    const navigate = useNavigate()
    const location = useLocation()
    const [active, setActive] = useState(-1)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)
    const [navbarClass, setnavbarClass] = useState('')

    const handleClick = (index:any, router:any) =>{
        navigate(router)
        setActive(index)
    }

    //!REDIRECTION
    useEffect(() => {
        const curIndex = NavbarButtons.findIndex((btn:any) => {
            if (btn.route === '/') return location.pathname === '/'
            return location.pathname.startsWith(btn.route.replace(/\/$/, ''));
        })
        setActive(curIndex)
    }, [location.pathname])

    //!RESPONSIVE FROM MOBILE TO PC VICE VERSA
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024)
        }
        window.addEventListener('resize',handleResize)
        return () => window.removeEventListener('resize', handleResize)
    },[])
    useEffect(()=>{
        const dynamicClass= isMobile
        ? 'flex flex-row flex-nowrap sticky items-end w-dvw p-5 overflow-x-auto'
        : 'flex flex-col relative justify-start h-dvh w-63'

        setnavbarClass(dynamicClass)
    },[isMobile])
    const navbarBody = isMobile ? 'flex justify-center items-end h-dvh w-dvw overflow-hidden' : ''


    return(
        <section className="">
            <div id="navbar" className={`${navbarBody}`}>
                <div className={`${navbarClass} bg-element lg:gap-10`}>
                    {NavbarButtons.map((item:any, index:any) => (
                        <div 
                        className={`lg:flex ${index === 0 ? 'lg:mt-35' : ''} ${index === 5 ? 'lg:mt-70' : ''}`}
                        key={`${item}-${index}`}>
                            <button 
                            type='button'
                            onClick={() => handleClick(index, item.route)}
                            className={"w-full cursor-pointer flex flex-nowrap justify-start items-center lg:ml-8"}>
                                <div 
                                className={`bg-button opacity-0 
                                            ${index === 0 && index === active ? 'block opacity-100 sm:w-35' : ''}
                                            ${index === 1 && index === active ? 'block opacity-100 -ml-1.5' : ''}
                                            ${index === 2 && index === active ? 'block opacity-100 -ml-0.5' : ''}
                                            ${index === 3 && index === active ? 'block opacity-100 -ml-0.5 sm:w-26' : ''}
                                            ${index === 4 && index === active ? 'block opacity-100 -ml-1 sm:w-28' : ''}
                                            ${index === 5 && index === active ? 'block opacity-100 -ml-0.5 sm:w-29' : ''} 
                                            absolute sm:-z-10 sm:pb-12 sm:pt-6 lg:w-63 lg:z-1 lg:-ml-8`}>
                                </div>
                                <svg
                                    className={`z-999 sm:w-8 sm:h-8 ${index>0 && index<=5 ? '' : ''}`}
                                    xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                    fill={index === active ? 'oklch(98.5% 0.001 106.423)' : 'oklch(14.7% 0.004 49.25)'}>
                                    <path
                                    d={item.icon}
                                    />
                                </svg>
                                <span className={`sm:w-20 sm:text-xl font-RWMedium z-999
                                                ${index === 0 ? 'lg:ml-2 sm:mr-10' : ''}
                                                ${index === 1 ? 'lg:-ml-2' : ''}
                                                ${index === 3 ? 'lg:-ml-1.5' : ''}
                                                ${index === 5 ? 'lg:ml-2.5' : ''}

                                                ${index === active ? 'text-whitetext' : 'text-blacktext'}`}>
                                    {item.text}
                                </span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
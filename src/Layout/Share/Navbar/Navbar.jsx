import logo from '../../../../public/NikeLogo.jpg';
import { BsHeart, BsHandbagFill } from "react-icons/bs";
import './Navbar.css';
const Navbar = () => {
    return (
        <div>
            <div className={`gap-2 bg-slate-50 text-black items-center justify-between md:justify-between px-4 xl:px-[100px] 2xl:px-[80px] py-2`}>
                <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                        <p>logo</p>
                        <p>logo2</p>
                    </div>
                    <div className="flex gap-3 text-sm font-semibold">
                        <p>Nike Refurbished <span className="ml-3"> | </span></p>
                        <p>Find a Store <span className="ml-3"> | </span></p>
                        <p>Help <span className="ml-3"> | </span></p>
                        <p>Join Us  <span className="ml-3"> | </span></p>
                        <p>Sign In</p>
                    </div>
                </div>
            </div>
            <div className="navbar bg-white xl:px-[100px] 2xl:px-[100px] ">
                <div className="navbar-start">
                    <div className="dropdown">

                    </div>
                    <div className="flex-1">
                        <a className="btn btn-ghost normal-case text-xl"><img className='w-10' src={logo} alt="" /></a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex gap-6 text-black text-lg font-semibold">
                    <li className='list-none'><p>New </p></li>
                    <li className='list-none'>
                        <a>Men</a>
                    </li>
                    <li className='list-none women-items-has-children'><a>Women</a>
                        <div className='sub-menu'>
                            <ul>
                                <div className='flex'>
                                    <div className='padding'>
                                        <li className='list-none'><a className='text-xl'>New & Featured</a></li>
                                        <li className='list-none'><a>New & Featured</a></li>
                                        <li className='list-none'><a>New & Featured</a></li>
                                        <li className='list-none'><a>New & Featured</a></li>
                                        <li className='list-none'><a>New & Featured</a></li>
                                    </div>
                                    <div className='padding'>
                                        <li className='list-none'><a className='text-xl'>New & Featured</a></li>
                                        <li className='list-none'><a>New & Featured</a></li>
                                        <li className='list-none'><a>New & Featured</a></li>
                                        <li className='list-none'><a>New & Featured</a></li>
                                        <li className='list-none'><a>New & Featured</a></li>
                                    </div>
                                    <div className='padding'>
                                        <li className='list-none'><a className='text-xl'>New & Featured</a></li>
                                        <li className='list-none'><a>New & Featured</a></li>
                                        <li className='list-none'><a>New & Featured</a></li>
                                        <li className='list-none'><a>New & Featured</a></li>
                                        <li className='list-none'><a>New & Featured</a></li>
                                    </div>
                                    <div className='padding'>
                                        <li className='list-none'><a className='text-xl'>New & Featured</a></li>
                                        <li className='list-none'><a>New & Featured</a></li>
                                        <li className='list-none'><a>New & Featured</a></li>
                                        <li className='list-none'><a>New & Featured</a></li>
                                        <li className='list-none'><a>New & Featured</a></li>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </li>
                    <li className='list-none'><a>Kids</a></li>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center gap-6">
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="input input-bordered rounded-lg w-24 md:w-auto bg-white" />
                        </div>
                        <p><BsHeart className='text-2xl text-black'></BsHeart></p>
                        <p><BsHandbagFill className='text-2xl text-black'></BsHandbagFill></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
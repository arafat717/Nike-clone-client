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
                <div className="navbar-center hidden lg:flex gap-6 text-black font-semibold">
                    <li className='list-none New-feature-has-children menus'><p className='cursor-pointer'>New & Featured </p>
                        <div className='sub-menu mega-menu mega-menu-colum-4'>
                            <div className="list-items">
                                New And Feature
                                <li><a href="">New Arrivels</a></li>
                                <li><a href="">Best Seller</a></li>
                                <li><a href="">Member Product</a></li>
                                <li><a href="">BusketBalls and LifeStyle</a></li>
                                <li><a href="">New:Nike Refurbished</a></li>
                                <li><a href=""></a></li>
                                <span className='my-5'> Limited Time</span>
                                <li><a href="">20% off Select Style</a></li>
                                <li><a href=""></a></li>
                               <span className='mt-6'> Gifts</span>
                                <li><a href="">All Gift</a></li>
                                <li><a href="">Gift Card</a></li>
                                <li><a href="">Gifts $30 under</a></li>
                            </div>
                            <div className="list-items">
                                Shop Icon
                                <li><a href="">Air Force</a></li>
                                <li><a href="">Air jordan</a></li>
                                <li><a href="">Air Max</a></li>
                                <li><a href="">Blazer</a></li>
                                <li><a href="">Pagasus</a></li>
                                <li><a href="">Metcon</a></li>
                                <li><a href="">Levon</a></li>
                                <li><a href="">Flecce</a></li>
                            </div>
                            <div className="list-items">
                                New for men
                                <li><a href="">Big Kids (3.5Y - 7Y)</a></li>
                                <li><a href="">Little Kids (10.5C - 3Y)</a></li>
                                <li><a href="">Baby & Toddler (1C - 10C)</a></li>
                                <li><a href="">All Shoes</a></li>
                                <li><a href="">Jordan</a></li>
                                <li><a href="">Air Max</a></li>
                                <li><a href="">Air Force 1</a></li>
                                <li><a href="">Dunks & Blazers</a></li>
                                <li><a href="">Basketball</a></li>
                                <li><a href="">Running</a></li>
                                <li><a href="">Boots</a></li>
                                <li><a href="">Shoes $70 & Under</a></li>
                                <li><a href="">NEW: Nike Refurbished</a></li>
                            </div>
                            <div className="list-items">Drops
                            <li><a href="">Basketball</a></li>
                                <li><a href="">Cheerleading</a></li>
                                <li><a href="">Soccer</a></li>
                                <li><a href="">Baseball</a></li>
                                <li><a href="">Softball</a></li>
                                <li><a href="">Football</a></li>
                                <li><a href="">Running</a></li>
                            </div>
                        </div>
                    </li>
                    <li className='list-none New-feature-has-children menus'>
                        <a className='cursor-pointer'>Men</a>
                        <div className='sub-menu mega-menu mega-menu-colum-4'>
                            <div className="list-items">
                                new and feature
                                <li><a href="">New Arrivels</a></li>
                                <li><a href="">Best Seller</a></li>
                                <li><a href="">Member Product</a></li>
                                <li><a href="">BusketBalls and LifeStyle</a></li>
                                <li><a href="">New:Nike Refurbished</a></li>
                                <li><a href=""></a></li>
                                <span className='my-5'> Limited Time</span>
                                <li><a href="">20% off Select Style</a></li>
                                <li><a href=""></a></li>
                               <span className='mt-6'> Gifts</span>
                                <li><a href="">All Gift</a></li>
                                <li><a href="">Gift Card</a></li>
                                <li><a href="">Gifts $30 under</a></li>
                            </div>
                            <div className="list-items">
                                Shop Icon
                                <li><a href="">Little Kids (4 - 7)</a></li>
                                <li><a href="">Baby & Toddler (0M - 4T)</a></li>
                                <li><a href="">Extended Sizing</a></li>
                                <li><a href="">Jordan</a></li>
                                <li><a href="">Matching Sets</a></li>
                                <li><a href="">Tops & T-Shirts</a></li>
                                <li><a href="">Shorts</a></li>
                                <li><a href="">Hoodies & Sweatshirts</a></li>
                                <li><a href="">Outerwear & Jackets</a></li>
                                <li><a href="">Pants & Tights</a></li>
                                <li><a href="">Bras</a></li>
                                <li><a href="">Underwear</a></li>
                                <li><a href="">Socks</a></li>
                                <li><a href="">Clothing $50 & Under</a></li>
                            </div>
                            <div className="list-items">
                                New for men
                                <li><a href="">Big Kids (3.5Y - 7Y)</a></li>
                                <li><a href="">Little Kids (10.5C - 3Y)</a></li>
                                <li><a href="">Baby & Toddler (1C - 10C)</a></li>
                                <li><a href="">All Shoes</a></li>
                                <li><a href="">Jordan</a></li>
                                <li><a href="">Air Max</a></li>
                                <li><a href="">Air Force 1</a></li>
                                <li><a href="">Dunks & Blazers</a></li>
                                <li><a href="">Basketball</a></li>
                                <li><a href="">Running</a></li>
                                <li><a href="">Boots</a></li>
                                <li><a href="">Shoes $70 & Under</a></li>
                                <li><a href="">NEW: Nike Refurbished</a></li>
                            </div>
                            <div className="list-items">Drops
                            <li><a href="">Basketball</a></li>
                                <li><a href="">Cheerleading</a></li>
                                <li><a href="">Soccer</a></li>
                                <li><a href="">Baseball</a></li>
                                <li><a href="">Softball</a></li>
                                <li><a href="">Football</a></li>
                                <li><a href="">Running</a></li>
                            </div>
                        </div>
                    </li>
                    <li className='list-none New-feature-has-children menus'><a className='cursor-pointer'>Women</a>
                        <div className='sub-menu mega-menu mega-menu-colum-4'>
                            <div className="list-items">
                                new and feature
                                <li><a href="">New Arrivels</a></li>
                                <li><a href="">Best Seller</a></li>
                                <li><a href="">Member Product</a></li>
                                <li><a href="">BusketBalls and LifeStyle</a></li>
                                <li><a href="">New:Nike Refurbished</a></li>
                                <li><a href=""></a></li>
                                <span className='my-5'> Limited Time</span>
                                <li><a href="">20% off Select Style</a></li>
                                <li><a href=""></a></li>
                               <span className='mt-6'> Gifts</span>
                                <li><a href="">All Gift</a></li>
                                <li><a href="">Gift Card</a></li>
                                <li><a href="">Gifts $30 under</a></li>
                            </div>
                            <div className="list-items">
                                Shop Icon
                                <li><a href="">Little Kids (4 - 7)</a></li>
                                <li><a href="">Baby & Toddler (0M - 4T)</a></li>
                                <li><a href="">Extended Sizing</a></li>
                                <li><a href="">Jordan</a></li>
                                <li><a href="">Matching Sets</a></li>
                                <li><a href="">Tops & T-Shirts</a></li>
                                <li><a href="">Shorts</a></li>
                                <li><a href="">Hoodies & Sweatshirts</a></li>
                                <li><a href="">Outerwear & Jackets</a></li>
                                <li><a href="">Pants & Tights</a></li>
                                <li><a href="">Bras</a></li>
                                <li><a href="">Underwear</a></li>
                                <li><a href="">Socks</a></li>
                                <li><a href="">Clothing $50 & Under</a></li>
                            </div>
                            <div className="list-items">
                                New for men
                                <li><a href="">Basketball</a></li>
                                <li><a href="">Cheerleading</a></li>
                                <li><a href="">Soccer</a></li>
                                <li><a href="">Baseball</a></li>
                                <li><a href="">Softball</a></li>
                                <li><a href="">Football</a></li>
                                <li><a href="">Running</a></li>
                            </div>
                            <div className="list-items">Drops
                            <li><a href="">Big Kids (3.5Y - 7Y)</a></li>
                                <li><a href="">Little Kids (10.5C - 3Y)</a></li>
                                <li><a href="">Baby & Toddler (1C - 10C)</a></li>
                                <li><a href="">All Shoes</a></li>
                                <li><a href="">Jordan</a></li>
                                <li><a href="">Air Max</a></li>
                                <li><a href="">Air Force 1</a></li>
                                <li><a href="">Dunks & Blazers</a></li>
                                <li><a href="">Basketball</a></li>
                                <li><a href="">Running</a></li>
                                <li><a href="">Boots</a></li>
                                <li><a href="">Shoes $70 & Under</a></li>
                                <li><a href="">NEW: Nike Refurbished</a></li>
                            </div>
                        </div>
                    </li>
                    <li className='list-none New-feature-has-children menus'><a className='cursor-pointer'>Kids</a>
                        <div className='sub-menu mega-menu mega-menu-colum-4'>
                            <div className="list-items">
                                new and feature
                                <li><a href="">New Arrivels</a></li>
                                <li><a href="">Best Seller</a></li>
                                <li><a href="">Member Product</a></li>
                                <li><a href="">BusketBalls and LifeStyle</a></li>
                                <li><a href="">New:Nike Refurbished</a></li>
                                <li><a href=""></a></li>
                                <span className='my-5'> Limited Time</span>
                                <li><a href="">20% off Select Style</a></li>
                                <li><a href=""></a></li>
                               <span className='mt-6'> Gifts</span>
                                <li><a href="">All Gift</a></li>
                                <li><a href="">Gift Card</a></li>
                                <li><a href="">Gifts $30 under</a></li>
                            </div>
                            <div className="list-items">
                                 Clothing by Size
                                <li><a href="">Big Kids (3.5Y - 7Y)</a></li>
                                <li><a href="">Little Kids (10.5C - 3Y)</a></li>
                                <li><a href="">Baby & Toddler (1C - 10C)</a></li>
                                <li><a href="">All Shoes</a></li>
                                <li><a href="">Jordan</a></li>
                                <li><a href="">Air Max</a></li>
                                <li><a href="">Air Force 1</a></li>
                                <li><a href="">Dunks & Blazers</a></li>
                                <li><a href="">Basketball</a></li>
                                <li><a href="">Running</a></li>
                                <li><a href="">Boots</a></li>
                                <li><a href="">Shoes $70 & Under</a></li>
                                <li><a href="">NEW: Nike Refurbished</a></li>
                            </div>
                            <div className="list-items">
                                Clothing By Size
                                <li><a href="">Little Kids (4 - 7)</a></li>
                                <li><a href="">Baby & Toddler (0M - 4T)</a></li>
                                <li><a href="">Extended Sizing</a></li>
                                <li><a href="">Jordan</a></li>
                                <li><a href="">Matching Sets</a></li>
                                <li><a href="">Tops & T-Shirts</a></li>
                                <li><a href="">Shorts</a></li>
                                <li><a href="">Hoodies & Sweatshirts</a></li>
                                <li><a href="">Outerwear & Jackets</a></li>
                                <li><a href="">Pants & Tights</a></li>
                                <li><a href="">Bras</a></li>
                                <li><a href="">Underwear</a></li>
                                <li><a href="">Socks</a></li>
                                <li><a href="">Clothing $50 & Under</a></li>
                            </div>
                            <div className="list-items">Shop by Sport
                                <li><a href="">Basketball</a></li>
                                <li><a href="">Cheerleading</a></li>
                                <li><a href="">Soccer</a></li>
                                <li><a href="">Baseball</a></li>
                                <li><a href="">Softball</a></li>
                                <li><a href="">Football</a></li>
                                <li><a href="">Running</a></li>
                            </div>
                        </div>
                    </li>
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
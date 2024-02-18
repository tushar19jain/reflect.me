export default function  Navbar(){
    return(
        <div className='flex flex-row justify-between px-10 xl:px-60 pt-10 items-center'>
            <h1 className="logo text-md xl:text-2xl cursor-pointer">Reflect.me</h1>
            <ul className="navlinks text-sm xl:text-lg cursor-pointer flex-row">
              <a href="#faq"><li className="hover:underline transition-[0.3s] ease-in-out decoration-orange-600 decoration-2">FAQ</li>
</a>              
            </ul>
        </div>
    )
}
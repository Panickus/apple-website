import { appleImg } from '../utils';

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={appleImg} alt="apple logo" width={14} height={18}/>

        <div>
          {['iPhones', 'Macs', 'iPads', 'Accessories'].map((nav, i) => (
            <div>
              {nav}
            </div>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
import styles from './navBar.module.scss'
import logo from "../../../public/logo.png"
import Image from 'next/image'
import Link from 'next/link'

const navItems = [
  { label: "Church", subItems: [{name:"Home" , page: ""}, {name:"Sermons" , page: "sermons"}, {name:"About us" , page: "about-us"}] },
  { label: "Leadership Training Institute", subItems: [{name:"Details" , page: "institute"}, {name:"Gallery" , page: "institute-gallery"}] },
  { label: "Prison Ministry", subItems: [{name:"Gallery" , page: "prison-ministry"}, {name:"What happens" , page: "prison-ministry"}] },
  { label: "Senior Pastors", subItems: [{name:"profiles" , page: "senior-pastors"}] },
  { label: "Cause", subItems: [{name:"Empowerment" , page: "empowerment"}, {name:"Investment Programs" , page: "investment-programs"}] },
  { label: "Contact", subItems: [{name:"Contact Us" , page: "contact-us"}, {name:"Partnerships" , page: "partnerships"}] },
]

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link href={'/'}>
          <div className={styles.logo}>
            <Image src={logo} alt='logo' height={80} width={80}/>
          </div>
        </Link>
        <ul className={styles.navMenu}>
          {navItems.map((item, index) => (
            <li key={index} className={styles.navItem}>
              <button className={styles.navButton}>{item.label}</button>
              <ul className={styles.dropdown}>
                {item.subItems.map((subItem, subIndex) => (
                  <Link href={`/${subItem.page}`} key={subIndex}>
                    <li key={subIndex} className={styles.dropdownItem}>
                      {subItem.name}
                    </li>
                  </Link>
                  
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

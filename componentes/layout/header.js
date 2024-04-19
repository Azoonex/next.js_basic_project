import Link from 'next/link'
import classes from './header.module.css'

export default function Header() {
  return (
  <header className={classes.header_con}>
      <Link href="/">Evetn-Code</Link>
      <Link href="/events">Event-Explor</Link>
   </header>
  )
}

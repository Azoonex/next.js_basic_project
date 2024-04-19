import Link from 'next/link'
import styles from './button.module.css'
export default function Button(props) {
    const { link, children } = props
    return (
        <Link href={link}>
            <button className={styles.btn}>
                {children}
            </button>
        </Link>

    )
}

import Link from 'next/link'
import classes from './button.module.css'
export default function Button(props) {
    const { link, children, onclick } = props

    if(link){
        return (
            <Link href={link}>
                <button className={classes.btn}>
                    {children}
                </button>
            </Link>

        )
    }

    return (
        <button onClick={onclick} className={classes.btn_click}>
            {children}
        </button>
    )
    
}

import styles from './alert.module.css'
import cn from 'classnames'
import 'tailwindcss/tailwind.css'

export default function Alert({ children, type }) {
  return (
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error'
      }, 'mt-10')}
    >
      {children}
    </div>
  )
}

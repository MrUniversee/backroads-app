import { pageLinks } from '../Data'

const PageLink = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id={parentClass}>
      {pageLinks.map(({ id, href, text }) => {
        return (
          <li key={id}>
            <a href={href} className={itemClass}>
              {text}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
export default PageLink

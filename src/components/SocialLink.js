const SocialLink = ({ link, itemClass }) => {
  const { href, icon } = link
  return (
    <li>
      <a href={href} target="_blank" className={itemClass} rel="noreferrer">
        <i className={icon}></i>
      </a>
    </li>
  )
}
export default SocialLink

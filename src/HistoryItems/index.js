import './index.css'

const Solution = props => {
  const {items, onDeleteButton} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = items

  const Remove = () => {
    onDeleteButton(id)
  }

  return (
    <li className="listEl">
      <div className="rowArrangeEl1">
        <p className="timeEl">{timeAccessed}</p>
        <div className="rowArrangeEl2">
          <img className="imageLogoEl" alt="domain logo" src={logoUrl} />
          <p className="titleEl23">{title}</p>
          <p className="DomainUrlEl">{domainUrl}</p>
        </div>
      </div>
      <div>
        <button
          data-testid="delete"
          onClick={Remove}
          className="buttonEl23"
          type="button"
        >
          <img
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
          />
        </button>
      </div>
    </li>
  )
}

export default Solution

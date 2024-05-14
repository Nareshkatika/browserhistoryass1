import {useState} from 'react'
import Solution from '../HistoryItems'

import './index.css'

const FinalSolution = props => {
  const {initialHistoryList} = props
  const [searchEl, setSearchEl] = useState('')
  const [List, setList] = useState(initialHistoryList)

  const onChangeSol = event => {
    setSearchEl(event.target.value)
  }

  const onDeleteButton = id => {
    setList(List.filter(each => each.id !== id))
  }

  const Answer = List.filter(eachItem =>
    eachItem.title.toLowerCase().includes(searchEl.toLowerCase()),
  )

  return (
    <div>
      <nav className="navbar">
        <img
          className="logoEl"
          alt="app logo"
          src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
        />
        <div className="MarginEl">
          <img
            className="searchEl"
            alt="search"
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
          />
          <input
            value={searchEl}
            placeholder="Search history"
            onChange={onChangeSol}
            type="search"
          />
        </div>
      </nav>
      {Answer.length === 0 && (
        <p className="paraWarning">There is no history to show</p>
      )}
      <ul>
        {Answer.map(eachId => (
          <Solution
            onDeleteButton={onDeleteButton}
            key={eachId.id}
            items={eachId}
          />
        ))}
      </ul>
    </div>
  )
}

export default FinalSolution

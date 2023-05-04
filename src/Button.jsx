import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Button = ({ isOpen, onClose, onOpen }) => {
  const handleClick = () => {
    isOpen ? onClose() : onOpen()
  }

  return (
    <button className='expand__toggle-button' onClick={handleClick}>
      {isOpen ? (
        <FontAwesomeIcon icon={faChevronUp} />
      ) : (
        <FontAwesomeIcon icon={faChevronDown} />
      )}
    </button>
  )
}

Button.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
}

export default Button

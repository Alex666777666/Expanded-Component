import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button.jsx'

const Expand = ({ isOpen, children, title, onClose, onOpen }) => {
  return (
    <div className='expand border'>
      <div className='expand__header'>
        <span className='expand__title'>{title}</span>
        <Button isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      </div>
      {isOpen && (
        <div className='expand__content'>
          <p>{children}</p>
        </div>
      )}
    </div>
  )
}

Expand.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.element,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
}

Expand.defaultProps = {
  isOpen: false,
  title: '',
}

export default Expand

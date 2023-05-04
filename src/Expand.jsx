import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

class Expand extends Component {
  state = {
    isOpen: false,
  }

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { title, children } = this.props
    return (
      <div className='expand border'>
        <div className='expand__header'>
          <span className='expand__title'>{title}</span>
          <button className='expand__toggle-btn' onClick={this.handleClick}>
            {this.state.isOpen ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
          </button>
        </div>
        {this.state.isOpen ? (
          <div className='expand__content'>{children}</div>
        ) : null}
      </div>
    )
  }
}

Expand.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.element,
  title: PropTypes.string,
}

Expand.defaultProps = {
  isOpen: false,
  title: '',
}

export default Expand

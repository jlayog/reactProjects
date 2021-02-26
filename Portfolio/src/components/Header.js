import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {

    }
    
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text='Add' onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}


export default Header

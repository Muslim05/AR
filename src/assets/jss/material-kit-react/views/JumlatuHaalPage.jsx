import { container, title } from 'assets/jss/material-kit-react.jsx'

// import imagesStyle from 'assets/jss/material-kit-react/imagesStyles.jsx'
import arFont from 'assets/jss/ar/font'
import tooltipsStyle from 'assets/jss/material-kit-react/tooltipsStyle.jsx'

const JumlatuHaalPage = {
    container,
    description: {
        margin: '1.071rem auto 0',
        // maxWidth: '600px',
        color: '#999',
        // textAlign: 'center !important',
    },
    ...arFont,

    main: {
        paddingTop: 20,
        paddingBottom: 30,
        background: '#FFFFFF',
        position: 'relative',
        zIndex: '3',
    },
    mainRaised: {
        margin: '-60px 30px 0px',
        borderRadius: '6px',
        boxShadow:
            '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
    },
    ...tooltipsStyle,
}

export default JumlatuHaalPage

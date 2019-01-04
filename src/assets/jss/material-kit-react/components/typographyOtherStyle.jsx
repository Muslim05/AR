import {
    defaultFont,
    primaryColor,
    infoColor,
    successColor,
    warningColor,
    dangerColor,
} from 'assets/jss/material-kit-react.jsx'

const typographyOtherStyle = {
    defaultFontStyle: {
        ...defaultFont,
    },
    primaryText: {
        // color: primaryColor,
        color: '#676767',
    },
    // арабские буквы очень маленьки на фоне других
    arFonts: {
        fontSize: '32px',
    },
    ruFonts: {
        // fontSize: 16,
    },
    defaultParagraphMargins: {
        marginBottom: '1rem',
    },
    // выделить слово
    contrastWord: {
        color: dangerColor,
    },
    // несколько предложений
    severalSentence: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        '& > *': {
            marginRight: 20,
        },
    },
    // блок дополнительно  информации
    additionalInfo: {
        paddingLeft: 15,
        borderLeft: `solid 3px ${primaryColor}`,
    },
}

export default typographyOtherStyle
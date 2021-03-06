import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'

import { Tooltip, Button } from '@material-ui/core'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import typographyOtherStyle from 'assets/jss/material-kit-react/components/typographyOtherStyle.jsx'
import classNames from 'classnames'

function ContrastWord({ ...props }) {
    const { classes, children, inRu, blue, red, translate, inAr } = props
    const classContrastWord = classNames({
        [classes.defaultFontStyle]: true,
        [classes.contrastWord]: true,
        [classes.arFonts]: inRu, // в русском предложении арабское слово
        [classes.colorBlue]: blue,
        [classes.colorRed]: red,
    })
    const buttonStyle = classNames({
        [classes.btnInContrastWord]: true,
        [classes.btnInContrastWordInArSentence]: inAr,
    })
    const WordWithTranslate = (
        <Tooltip title={translate} placement="top" classes={{ tooltip: classes.tooltip }}>
            <Button className={classNames(classContrastWord, buttonStyle)}>{children}</Button>
        </Tooltip>
    )

    return (
        <React.Fragment>
            {translate ? WordWithTranslate : <span className={classContrastWord}>{children}</span>}
        </React.Fragment>
    )
}

ContrastWord.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(typographyOtherStyle)(ContrastWord)

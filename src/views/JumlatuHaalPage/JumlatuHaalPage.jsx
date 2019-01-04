import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

import { Paper, Tooltip, Button } from '@material-ui/core'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'

import RuSentence from 'components/Typography/RuSentence.jsx'
import ContrastWord from 'components/Typography/ContrastWord.jsx'
import ArSentence from 'components/Typography/ArSentence.jsx'
import Paragraph from 'components/Typography/Paragraph.jsx'

import HeaderLinks from 'components/Header/HeaderLinks.jsx'

import Parallax from 'components/Parallax/Parallax.jsx'

import JumlatuHaalPage from 'assets/jss/material-kit-react/views/JumlatuHaalPage.jsx'

class ProfilePage extends React.Component {
    render() {
        const { classes, ...rest } = this.props

        return (
            <div>
                <Header
                    color="transparent"
                    brand="جملة الحال"
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 200,

                        color: 'white',
                    }}
                    {...rest}
                />

                <Parallax small filter image={require('assets/img/bg4-.jpg')} />
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <div className={classes.navWrapper}>
                            <h1 className={classes.titleAr}>جملة الحال</h1>
                            <h4>
                                Отвечает на вопрос "как?" - является образом действия слово الحال буквально означает
                                "ситуация" или "положение. В каком положении пребывает объект, в каком состоянии.
                                <br />
                                Перед جملة الحال приходит глагольное предложение в то время как جملة الحال именное
                            </h4>
                            <h3 className={classes.titleAr}> :الحال</h3>
                            <Paper className={classes.paperStandart}>
                                <Paragraph>
                                    <ArSentence>
                                        دخل المدرس الفصل <ContrastWord>غَضِبًا </ContrastWord>
                                    </ArSentence>
                                    <RuSentence>
                                        Пришел учитель в класс{' '}
                                        <ContrastWord>злым (пришёл в состоянии злости)</ContrastWord>
                                    </RuSentence>
                                </Paragraph>

                                <Paragraph>
                                    <ArSentence>
                                        شرب اِبني الماء <ContrastWord>صافِيًا </ContrastWord>
                                    </ArSentence>
                                    <RuSentence>
                                        Мой сын пил воду{' '}
                                        <ContrastWord>чистую (в момент пития вода была чистой)</ContrastWord>
                                    </RuSentence>
                                </Paragraph>

                                <Paragraph>
                                    <RuSentence>
                                        <ArSentence>شرب اِبني الماء الصافِي</ArSentence>
                                        Если же мы хотим сказать что вода И была чистой, то используем простое
                                        прилагательное
                                    </RuSentence>
                                </Paragraph>
                            </Paper>

                            <h3 className={classes.titleAr}> :جملة الحال </h3>
                            <Paper className={classes.paperStandart}>
                                <Paragraph>
                                    <ArSentence>
                                        قرأ الكتاب{' '}
                                        <ContrastWord>
                                            <Tooltip
                                                title="واو الحال"
                                                placement="top"
                                                classes={{ tooltip: classes.tooltip }}>
                                                <Button className={classes.tooltipButton}>و</Button>
                                            </Tooltip>{' '}
                                            أنا جالِس{' '}
                                        </ContrastWord>
                                    </ArSentence>
                                    <RuSentence>
                                        Читал книгу
                                        <ContrastWord> сидя (в состоянии сидения)</ContrastWord>
                                    </RuSentence>
                                </Paragraph>

                                <Paragraph>
                                    <ArSentence>
                                        شربت الشاي{' '}
                                        <Tooltip
                                            title="واو العَطْف"
                                            placement="top"
                                            classes={{ tooltip: classes.tooltip }}>
                                            <Button className={classes.tooltipButton}>و</Button>
                                        </Tooltip>{' '}
                                        القهوة{' '}
                                        <ContrastWord>
                                            <Tooltip
                                                title="واو الحال"
                                                placement="top"
                                                classes={{ tooltip: classes.tooltip }}>
                                                <Button className={classes.tooltipButton}>و</Button>
                                            </Tooltip>{' '}
                                            أنا في العَمل{' '}
                                        </ContrastWord>
                                    </ArSentence>
                                    <div>
                                        Пил чай и кофе
                                        <ContrastWord>
                                            когда был на работе (в состоянии нахождения на работе)
                                        </ContrastWord>
                                    </div>
                                </Paragraph>

                                <Paragraph>
                                    <ArSentence>
                                        أكل أخي تفاحتي{' '}
                                        <ContrastWord>
                                            <Tooltip
                                                title="واو الحال"
                                                placement="top"
                                                classes={{ tooltip: classes.tooltip }}>
                                                <Button className={classes.tooltipButton}>و</Button>
                                            </Tooltip>{' '}
                                            أنا نائِم{' '}
                                        </ContrastWord>
                                    </ArSentence>
                                    <div>
                                        Мой брат ел яблоки{' '}
                                        <ContrastWord>пока я спал (был в состоянии сна)</ContrastWord>
                                    </div>
                                </Paragraph>
                            </Paper>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withStyles(JumlatuHaalPage)(ProfilePage)
import { API, graphqlOperation } from 'aws-amplify';
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
import { useRecoilState, useRecoilValue } from 'recoil'
import { HistoryContent } from '.';
import { updateHistory } from '../../../graphql/mutations';
import { listHistorys } from '../../../graphql/queries';
import { darkModeState, historyState } from '../../atoms'
import './styles.scss'

export default function Featured() {


    const darkMode = useRecoilValue(darkModeState)
    const check: boolean = darkMode === false
    const [history, setHistory] = useRecoilState(historyState)
    const [selected, setSelected] = React.useState(0)


    async function fetchHistory() {
        try {
            const { data }: any = await API.graphql(graphqlOperation(listHistorys))
            const { items } = data.listHistorys
            setHistory(items)
        } catch (error) {
            console.log('Error getting history: ', error)
        }
    }


    React.useEffect(() => {
        fetchHistory()
    }, [])



    return (
        <Container id={check ? 'feature' : 'feature-dark'} fluid >
            <Row>
                <Col sm={12} md={2} lg={2}>
                    <h1 className='t-header text-left'>Featured</h1>
                </Col>
                <Col className='featured-container' sm={12} md={10} lg={20}>
                    <Row className='featured-grid'>
                        {HistoryContent.map((item, idx) => (
                            <Col key={idx} className={item.className} sm={12} md={6} lg={6}>
                                <h1 className={item.className2}>{item.header}</h1>
                                <>
                                    {history.slice(0, 4).reverse().map((his, jdx) => (
                                        <>
                                            { idx === jdx &&
                                                <div key={jdx}>
                                                    <p className={idx === 2 ? 'p': 'p-dark'}>{his.content}</p>
                                                    <Image src={his.image} width='50px' />
                                                </div>
                                            }
                                        </>
                                    ))}
                                </>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

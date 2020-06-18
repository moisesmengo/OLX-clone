import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PageArea, Fake } from './styled'
import useApi from '../../helpers/OlxAPI'
import {Slide} from 'react-slideshow-image'

import { PageContainer } from '../../components/MainComponents'

const Page = () => {
    const api = useApi();
    const {id} = useParams()

    const [loading, setLoading] = useState([])
    const [adInfo, setAdInfo] = useState({})

    useEffect(() => {
        const getAdInfo =  async (id) => {
            const json =  await api.getAd(id, true)
            setAdInfo(json)
            setLoading(false)
        }
        getAdInfo(id)
    }, [])

    const formatDate = date =>{
        let cDate = new Date(date)
        let months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 
                    'julho', 'agosto', 'setempro', 'outubro', 'novembro', 'dezembro']
        let cDay = cDate.getMonth()
        let cMonth = cDate.getMonth()
        let cYear = cDate.getFullYear()

        return `${cDay} de ${months[cMonth]} de ${cYear}`
    }

    return (
        <PageContainer>
            <PageArea>
                <div className="leftSide">
                    <div className="box">
                        <div className="adImage">
                            {loading && <Fake height={300} />}
                            {adInfo.images && 
                                <Slide>
                                    {adInfo.images.map((img,k) => 
                                        <div key={k} className="each-slide">
                                            <img src={img} alt=""/>
                                        </div>
                                    )}
                                </Slide>
                            }
                        </div>
                        <div className="adInfo">
                            <div className="adName">
                                {loading && <Fake height={20}/>}
                                {adInfo.title && 
                                    <h2> {adInfo.title} </h2>
                                }
                                {adInfo.dateCreated && 
                                   <small>Criado em {formatDate(adInfo.dateCreated)}</small>
                                }
                            </div>
                            <div className="adDescription">
                                {loading && <Fake height={100} />}
                                {adInfo.description}
                                <hr/>
                                {adInfo.views &&
                                    <small>Vizualizações: {adInfo.views} </small>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightSide">
                    <div className="box box--padding">
                        {loading && <Fake height={20} />}
                        {adInfo.priceNegotiable &&
                            "Preço Negociávvel"
                        }
                        {!adInfo.priceNegotiable && adInfo.price &&
                            <div className="price">
                                Preço: <span>R$ {adInfo.price}</span>
                            </div>
                        }
                    </div>
                    {loading && <Fake height={50} />}
                    {adInfo.userInfo && 
                        <>
                            <a href={`mailto:${adInfo.userInfo.email}`} className="contactSellerLink" target="_blank">Contate o vendedor</a>
                            <div className="box box--padding createdBy">
                                <strong> {adInfo.userInfo.email} </strong>
                                <small>E-mail: {adInfo.userInfo.email} </small>
                                <small>Estado: {adInfo.stateName} </small>
                            </div>
                        </>
                    }
                    
                </div>
            </PageArea>
        </PageContainer>
    );
}

export default Page;
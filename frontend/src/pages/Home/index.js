import React, { useState, useEffect } from 'react';
import { PageArea, SearchArea } from './styled';
import useApi from '../../helpers/OlxAPI';
import { Link } from 'react-router-dom'

import { PageContainer } from '../../components/MainComponents';

const Page = () => {
    const api = useApi();

    const [stateList, setStateList] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getStates = async () => {
            const slist = await api.getStates()
            setStateList(slist)
        }
        getStates()
    }, [])

    useEffect(() => {
        const getCategories = async () => {
            const cat = await api.getCategories()
            setCategories(cat)
        }
        getCategories()
    }, [])

    return (
        <>
            <SearchArea>
                <PageContainer>
                    <div className="searchBox">
                        <form method="GET" action="/ads">
                            <input type="text" name="q" placeholder="O que você procura?"/>
                            <select name="state">
                                {stateList.map((i,k)=>
                                    <option value={i.name} key={k}>{i.name}</option>
                                )}
                            </select>
                            <button>Buscar</button>
                        </form>
                    </div>
                    <div className="categoryList">
                        {categories.map((i,k)=>
                            <Link to={`/ads?cat=${i.slug}`} key={k} className="categoryItem">
                                <img src={i.img} alt=""/>
                                <span>{i.name}</span>
                            </Link>
                        )}
                    </div>
                </PageContainer>
            </SearchArea>
            <PageContainer>
                <PageArea>
                    ...
                </PageArea>
            </PageContainer>
        </>
    );

    }
export default Page;
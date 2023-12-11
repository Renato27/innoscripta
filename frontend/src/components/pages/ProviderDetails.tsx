import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { NewsAuthor, NewsCategory, NewsSource, ResponseNews } from '../../types/types';
import CardsProvider from '../CardsProvider';
import HeaderSection from '../HeaderSection';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function ProviderDetails() {
    const { providerId } = useParams();
    const [news, setNews] = useState<ResponseNews>();
	const [categories, setCategories] = useState<NewsCategory[]>([]);
	const [sources, setSources] = useState<NewsSource[]>([]);
	const [authors, setAuthors] = useState<NewsAuthor[]>([]);

	const getNews = async () => {
		try {
			const response = await fetch(`${backendUrl}/news/${providerId}`);
			const result = await response.json();
			setNews(result);
		} catch (error) {
			console.error('Erro ao obter dados da API:', error);
		}
	};

	const getCategories = async () => {
		try {
			const response = await fetch(`${backendUrl}/category/provider/${providerId}`);
			const result = await response.json();
			setCategories(result.data);
		} catch (error) {
			console.error('Erro ao obter dados da API:', error);
		}
	}

	const getSources = async () => {
		try {
			const response = await fetch(`${backendUrl}/source/provider/${providerId}`);
			const result = await response.json();
			setSources(result.data);
		} catch (error) {
			console.error('Erro ao obter dados da API:', error);
		}
	}

	const getAuthors = async () => {
		try {
			const response = await fetch(`${backendUrl}/author/provider/${providerId}`);
			const result = await response.json();
			setAuthors(result.data);
		} catch (error) {
			console.error('Erro ao obter dados da API:', error);
		}
	}
	
	useEffect(() => {
		getNews();
		getCategories();
		getSources();
		getAuthors();
	}, [providerId]);
	
  return (
    <>
	<HeaderSection />	
        {news && Array.isArray(categories) && Array.isArray(sources) && Array.isArray(authors) ?
			<>	
				<CardsProvider responseNews={news} categories={categories} sources={sources} authors={authors} />
			</> : 
			<p>Carregando...</p>
		}
    </>
  )
}

export default ProviderDetails
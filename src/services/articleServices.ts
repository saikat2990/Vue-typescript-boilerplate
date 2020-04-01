import axios from 'axios'

import {ArticlesResponse} from '@/Models/ArticleModel';

export const articleApi = axios.create({
    baseURL: 'https://conduit.productionready.io/api',
});

export async function getGlobalFeed() {
    const response = await articleApi.get('/articles');
    return response.data as ArticlesResponse;
}








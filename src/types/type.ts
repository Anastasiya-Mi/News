export interface IArticles {
    source: ISourceItems;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface ISourceItems {
    id: string;
    name: string;
}

export interface ISource {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

export interface IRequestSource {
    articles?: IArticles[];
    sources?: ISource[];
    status?: string;
    endpoint: 'sources' | 'everything';
}

export interface ILoad {
    sources?: string;
    apiKey?: string;
}

export type Callback = (data: IRequestSource) => void;

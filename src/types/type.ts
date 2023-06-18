export interface Articles {
    source: sourceItems;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface sourceItems {
    id: string;
    name: string;
}

export interface Source {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

export interface RequestSource {
    articles?: Articles[];
    sources?: Source[];
    status?: string;
    endpoint: 'sources' | 'everything';
}

export interface Load {
    sources?: string;
    apiKey?: string;
}
export type Callback = (data: RequestSource) => void;

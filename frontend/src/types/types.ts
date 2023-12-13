export type ProviderItem = {
	id: number;
	name: string;
	webName: string;
	base64Logo: string;
}

export type LinkNews = {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
}

export type MetaNews = {
    current_page: number;
    from: number;
    last_page: number;
    links: Array<{
      url: string | null;
      label: string;
      active: boolean;
    }>;
    path: string;
    per_page: number;
    to: number;
    total: number;
}

export type ResponseNews = {
    data: NewsItemData[];
    links: LinkNews;
    meta: MetaNews;
}

export type NewsItemData = {
    id: number;
    published_at: string;
    article_title: string;
    description: string;
    provider: string;
    image_url: string;
    url: string;
    result: Record<string, any> | null; // Altere o tipo conforme necessário
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    category: NewsCategory;
    author: NewsAuthor;
    source: NewsSource;
  };

  export type NewsCategory = {
    id: number;
    name: string;
    news_provider: number;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
  };
  
  export type NewsAuthor = {
    id: number;
    name: string;
    news_provider: number;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
  };
  
  export type NewsSource = {
    id: number;
    name: string;
    news_provider: number;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
  };
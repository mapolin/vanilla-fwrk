interface RenderedContent {
    rendered: string,
    protected?: boolean
}

export interface Author {
    id: number,
    name: string,
    link: string,
}

export interface Term {
    id: number,
    link: string,
    name: string,
    slug: string,
    taxonomy: 'category' | 'topic' | 'post_tag'
}

export interface Media {
    id: number,
    source_url: string,
    alt_text: string,
    media_details: {
        width: number,
        height: number,
    }
}

export interface RawPost {
    id: number,  
    link: string,
    title: RenderedContent,
    excerpt: RenderedContent,
    content: RenderedContent,
    date: string,
    modified: string,
    featured_media: string,
    type: 'post' | 'page',

    _embedded: {
        author: Author[],
        ['wp:term']: Term[][],
        ['wp:featuredmedia']?: Media[],
    }

    tags?: number[],
    categories?: number[],
}

export interface Post extends Omit<RawPost, 'title' | 'excerpt' | 'content' | 'modified' | 'date' | '_embedded'> {
    title: string,
    excerpt: string,
    content: string,
    modified: Date,
    date: Date,
    author: Author,
    category: Term,
    tag: Term,
}
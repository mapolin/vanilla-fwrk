"use client"

import { useEffect, useState } from 'react';
import { getPosts } from './services/getPosts';
import { RawPost, Post, Term } from './contracts/Post';
import { Card } from './components/card';

const transformPost = (post: RawPost): Post => {
    const category = post._embedded['wp:term'].find(terms => terms.find(term => term.taxonomy === 'category' && post.categories?.includes(term.id))) as Term[];
    const postTag = post._embedded['wp:term'].find(terms => terms.find(term => term.taxonomy === 'post_tag')) as Term[];

    return {
        id: post.id,
        author: post._embedded.author[0],
        featured_media: post.featured_media,
        title: post.title.rendered,
        excerpt: post.excerpt.rendered,
        content: post.excerpt.rendered,
        link: post.link,
        modified: new Date(post.modified),
        date: new Date(post.date),
        type: post.type,

        category: category[0],
        tag: postTag[0],
    }
};

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then((posts) => {
        setPosts(posts.map(post => transformPost(post)));
    });
  }, []);

  return (
    <div className='row'>
        {posts.map(p =>
            <div key={p.id} className='col-4'>
                <Card  {...p} />
            </div>
        )}
    </div>
  )
}

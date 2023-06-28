import { Author, Term } from '../contracts/Post';

type CardProps = {
    title: string,
    link: string,
    excerpt: string,
    content?: string,
    featured_media: string,
    author: Author,
    modified: Date,
    category: Term,
    tag: Term,
}

const toDateString = (date: Date) => {
    const month = date.toLocaleString('default', { month: 'long' });
    return `${date.getDate()} ${month} ${date.getFullYear()}`
}

export const Card = ({
    title,
    featured_media,
    author,
    modified,
    category,
    link,
    tag
}: CardProps) => (
  <div className='p-card'>
    <div className='p-card__content'>
        <p className='p-card__top'>
            <a href={tag?.link} title={tag.name} target='_blank'>{tag?.name}</a>
        </p>
        <hr className='u-sv-1'></hr>
        <a href={link} title={title} target='_blank'>
            <img className='p-card__image' src={featured_media} alt={title} />
        </a>
        <h3 className='p-card__title'>
            <a href={link} title={title} target='_blank'>{title}</a>
        </h3>
        <div className='p-card__author'>
            By <a href={author.link}>{author.name}</a> on {toDateString(modified)}
        </div>
        <hr className='u-sv1'></hr>
        <div className='p-card__bottom'>
            <a href={category?.link}>{category?.name}</a>
        </div>
    </div>
  </div>
);

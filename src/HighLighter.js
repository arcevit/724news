import React, { useContext } from 'react';
import { ArticleContext } from './Context';

export default function HighLighter({ children }) {
  const { searchInput } = useContext(ArticleContext);
  let highlight = searchInput.toLowerCase();
  if (!highlight) return children;
  const regexp = new RegExp(highlight, 'g');
  const matches = children.props.children.toLowerCase().match(regexp);

  let parts = children.props.children
    .toLowerCase()
    .split(new RegExp(`${highlight.replace()}`, 'g'));

  for (let i = 0; i < parts.length; i++) {
    if (i !== parts.length - 1) {
      let match = matches[i];
      while (parts[i + 1] === '') {
        match += matches[++i];
      }

      parts[i] = (
        <span key={i}>
          {parts[i]}
          <span className='bg-warning font-weight-bold'>{match}</span>
        </span>
      );
    }
  }

  return <h3 className='font-weight-bold'>{parts}</h3>;
}

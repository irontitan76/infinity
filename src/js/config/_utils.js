import React from 'react';

export const linebreak = (string) => {
  return string.split('\n').map((item, key) => {
    return <span key={key}>{item}<br /></span>
  });
};

import React from 'react';

import { linebreak } from './_utils.js';

export const insights =  [
    {
      byline: {
        bioContainer: { pad: 'medium' },
        bio: 'Ross Sheppard is working on a book, My Time in Ibiza, based on this article. He is returning to the region this summer to gather material for a follow-up essay.',
        externalContainer: { direction: 'row', flex: true, alignContent: 'start', pad: 'none', colorIndex: 'light-1' },
        internalContainer: { basis: 'small', pad: 'none', texture: './../img/home-grid-tile-2-min.jpg' },
        heading: { strong: true, tag: 'h3', value: 'Ross Sheppard' },
      },
      bylineContainer: { margin: { top: 'medium' }},
      cards: [
        {
          colorIndex: 'light-1',
          contentPad: 'medium',
          description: linebreak('R&D Engineer\nEmployee\n4 articles'),
          heading: 'Ross Sheppard',
          headingStrong: false,
          textSize: 'small'
        },
        {
          colorIndex: 'light-1',
          contentPad: 'medium',
          description: linebreak('R&D Engineer\nEmployee\n4 articles'),
          heading: 'Ross Sheppard',
          headingStrong: false,
          textSize: 'small',
          thumbnail: './../img/home-grid-tile-6-min.jpg'
        },
      ],
      content: { align: 'start', margin: { vertical: 'medium' }, size: 'auto', value: 'Ross Sheppard is working on a book, My Time in Ibiza, based on this article. He is returning to the region this summer to gather material for a follow-up essay.Ross Sheppard is working on a book, My Time in Ibiza, based on this article. He is returning to the region this summer to gather material for a follow-up essay.Ross Sheppard is working on a book, My Time in Ibiza, based on this article. He is returning to the region this summer to gather material for a follow-up essay.'},
      date: 'October 17, 2017',
      container: { colorIndex: 'light-1', pad: 'medium'  },
      externalContainer: { margin: { left: 'large', vertical: 'large' } },
      image: { src: './../img/woman-working-in-office-PLTT5XW-min.jpg', fit: 'cover' },
      separator: {
        container: { colorIndex: 'light-1', align: 'start'},
        heading: { margin: 'medium', strong: true, tag: 'h1', value: 'Our journey' },
        line: { borderBottom: 'solid #425563 5px', width: '3.2em', marginBottom: '2em' }
      },
      subtitle: { align: 'start', size: 'small', margin: 'none', value: 'Our journey is just beginning. The vision for this company has already seen countless hours of hard work, design, and idea shifts. What comes after? The venture.'}
    }
];

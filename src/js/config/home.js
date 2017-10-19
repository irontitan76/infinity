import React from 'react';

import InspectIcon from 'grommet/components/icons/base/Inspect';
import WorkshopIcon from 'grommet/components/icons/base/Workshop';

export const home = {
  slider: [
    {
      carousel: {},
      slides: [
        {
          externalContainer: { key: '3254353', justify: 'center', pad: 'large', size: { height: 'xlarge' }, texture: './img/joey-kyber-132520-min.jpg' },
          internalContainer: { align: 'center' },
          animate: { enter: { animation: 'slide-up', duration: 500, delay: 0 } },
          box: { align: 'center', colorIndex: 'grey-2-a', pad: { vertical: 'large' }, size: 'xxlarge' },
          heading: { align: 'center', strong: true, tag: 'h2', value: 'Accelerate application delivery' },
          description: { align: 'center', tag: 'h3', value: 'Quickly advance your business with scalable and secure web applications and services by Infinity' },
          button: { fill: true, label: 'Contact us today', primary: true, type: 'submit' },
          tiles: [
            { type: 'anchor', key: '32908409', value: { label: 'Discover more first', path: '/insights', icon: <InspectIcon /> } },
            { type: 'text', key: '32908fd409', value: 'or' },
            { type: 'anchor', key: 'FDAFADFDS4', value: { label: 'Learn what we do', path: '/about', icon: <WorkshopIcon /> } },
          ]
        },
        {
          externalContainer: { key: '32543343', justify: 'center', pad: 'large', size: { height: 'xlarge' }, texture: './img/high-speed-blue-passenger-train-in-motion-PKDR77F-min.jpg' },
          internalContainer: { align: 'center' },
          animate: { enter: { animation: 'slide-up', duration: 500, delay: 0 } },
          box: { align: 'center', colorIndex: 'light-1-a', pad: { vertical: 'large' }, size: 'xxlarge' },
          heading: { align: 'center', strong: true, tag: 'h2', value: 'Infinity accelerates your business plans' },
          description: { align: 'center', tag: 'h3', value: 'Focus on other aspects of your business growth as we provide a robust website for it' },
          button: { fill: true, label: 'Contact us today', primary: true, type: 'submit' },
        },
      ],
    }
  ],
  separator: [
    {
      container: { colorIndex: 'light-2', align: 'center'},
      heading: { margin: 'medium', strong: true, tag: 'h1', value: 'The tech' },
      line: { borderBottom: 'solid #425563 5px', width: '2.5em', marginBottom: '2em' }
    }
  ],
  grid: [
    {
      tilesContainer: { colorIndex: 'light-2', flush: false, fill: false, justify: 'center' },
      tiles: [
        {
          url: '/insights/nodejs',
          container: { key: '90324809', className: 'grid-tile' },
          animate: { enter: { animation: 'slide-up', duration: 1000, delay: 200 }, visible: 'scroll' },
          card: {
            colorIndex: 'light-1',
            description: 'With the help of Node.js and its asynchronous event driven JavaScript runtime environment, we develop scalable, fast, and non-blocking network applications.',
            heading: 'Adopt non-blocking throughput with asynchronous operations',
            textSize: 'xsmall',
            thumbnail: './img/home-grid-tile-1-min.jpg',
          }
        },
        {
          url: '/insights/reactjs',
          container: { key: '90324832', className: 'grid-tile' },
          animate: { enter: { animation: 'slide-up', duration: 1000, delay: 350 }, visible: 'scroll' },
          card: {
            colorIndex: 'light-1',
            description: 'The React library enables developers to quickly create interactive user interfaces through the use of reusable components that manage their own state.',
            heading: 'With atomic design, your business operates at optimum',
            thumbnail: './img/home-grid-tile-2-min.jpg',
            textSize: 'xsmall',
          }
        },
        {
          url: '/insights/redux',
          container: { key: '90324ret9', className: 'grid-tile' },
          animate: { enter: { animation: 'slide-up', duration: 1000, delay: 500 }, visible: 'scroll' },
          card: {
            colorIndex: 'light-1',
            description: "We capitalize on Redux's flatly structured state management system to create loosely coupled, tested applications that behave like they're supposed to.",
            heading: 'Use flat structures to operate quicky and easily',
            textSize: 'xsmall',
            thumbnail: './img/home-grid-tile-3-min.jpg',
          }
        },
        {
          url: '/insights/mongodb',
          container: { key: 'joierj943', className: 'grid-tile' },
          animate: { enter: { animation: 'slide-up', duration: 1000, delay: 200 }, visible: 'scroll' },
          card: {
            colorIndex: 'light-1',
            description: 'To adhere to our isomorphic coding philosophy, we use MongoDB, a NoSQL database, to easily store data for customer applications in scalable JSON-like documents.',
            heading: 'Handle large datasets with a scale-out architecture',
            textSize: 'xsmall',
            thumbnail: './img/home-grid-tile-4-min.jpg',
          }
        },
        {
          url: '/insights/expressjs',
          container: { key: '43tu90jge', className: 'grid-tile' },
          animate: { enter: { animation: 'slide-up', duration: 1000, delay: 350 }, visible: 'scroll' },
          card: {
            colorIndex: 'light-1',
            description: 'Express builds atop Node.js with additional features to quickly build web applications. We use Express to create a robust API for our customers quickly and easily.',
            heading: 'Construct robust APIs for the modern business',
            textSize: 'xsmall',
            thumbnail: './img/home-grid-tile-5-min.jpg',
          }
        },
        {
          url: '/insights/grommet',
          container: { key: 'fads90fuad', className: 'grid-tile' },
          animate: { enter: { animation: 'slide-up', duration: 1000, delay: 500 }, visible: 'scroll' },
          card: {
            colorIndex: 'light-1',
            description: 'Grommet\'s intelligent design system that consists of a dynamic and robust library of components enables our developers to efficiently create great user experiences.',
            heading: 'Build your brand with a single design system',
            textSize: 'xsmall',
            thumbnail: './img/home-grid-tile-6-min.jpg',
          }
        }
      ]
    }
  ]
};

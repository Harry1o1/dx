import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const PhoneClockIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" className={classes.svg} viewBox="2 2 16 16">
      <g className={cx(iconClassNames.outline, classes.outlinePart)}>
        <path d="M10 2.00001C13.3317 1.99572 15.5858 3.2756 17.154 4.65976C17.8139 5.2422 18.116 6.11792 17.9594 6.94005L17.8015 7.76918C17.6535 8.54611 16.9272 9.06786 16.1042 8.98837L14.4666 8.8302C13.753 8.76127 13.2241 8.24008 13 7.50005C12.6957 6.4953 12.5 5.75009 12.5 5.75009C11.7522 5.44357 11.0138 5.25005 10 5.25005C8.98623 5.25005 8.26225 5.46492 7.5 5.75009C7.5 5.75009 7.29566 6.49597 7 7.50005C6.80244 8.17099 6.49595 8.75668 5.79708 8.82691L4.16895 8.99053C3.35656 9.07217 2.57765 8.55549 2.3467 7.78177L2.09921 6.95259C1.85286 6.12726 2.0727 5.25869 2.67633 4.67245C4.10141 3.28843 6.67315 2.00433 10 2.00001ZM13.4754 5.52689L13.5008 5.62157C13.5232 5.70474 13.5565 5.82664 13.5991 5.97972C13.6846 6.28606 13.8075 6.71629 13.9571 7.21019C14.0936 7.66095 14.3462 7.81391 14.5628 7.83483L16.2004 7.99301C16.5457 8.02635 16.7746 7.81599 16.8191 7.58206L16.9771 6.75293C17.0653 6.28943 16.8963 5.76613 16.4923 5.40948C15.0673 4.1517 13.0404 2.9961 10.0013 3.00001C6.92594 3.00401 4.60599 4.19238 3.37303 5.38982C3.04458 5.70881 2.9145 6.18768 3.05744 6.66657L3.30493 7.49575C3.39647 7.80242 3.72575 8.03003 4.06896 7.99554L5.69709 7.83193C5.73551 7.82807 5.74859 7.82034 5.7511 7.81886C5.75521 7.81649 5.77275 7.80572 5.80155 7.76923C5.8711 7.6811 5.9536 7.51349 6.04073 7.21759C6.18728 6.71989 6.31122 6.28611 6.39847 5.97694C6.44208 5.82241 6.47648 5.69914 6.49992 5.61474L6.52663 5.51827C6.62916 5.15132 6.98467 4.89552 7.14961 4.81349C7.96877 4.50703 8.81921 4.25005 10 4.25005C11.1653 4.25005 12.0327 4.47779 12.8793 4.8248C13.0313 4.88736 13.3617 5.10921 13.4672 5.4961L13.4691 5.50315L13.4754 5.52689Z" />
        <path d="M10 12C10 11.7239 9.77614 11.5 9.5 11.5C9.22386 11.5 9 11.7239 9 12V14.0001C9 14.2762 9.22386 14.5001 9.5 14.5001H11.0047C11.2809 14.5001 11.5047 14.2762 11.5047 14.0001C11.5047 13.7239 11.2809 13.5001 11.0047 13.5001H10V12Z" />
        <path d="M5.5 13.5C5.5 11.0147 7.51472 9 10 9C12.4853 9 14.5 11.0147 14.5 13.5C14.5 15.9853 12.4853 18 10 18C7.51472 18 5.5 15.9853 5.5 13.5ZM10 10C8.067 10 6.5 11.567 6.5 13.5C6.5 15.433 8.067 17 10 17C11.933 17 13.5 15.433 13.5 13.5C13.5 11.567 11.933 10 10 10Z" />
      </g>
      <g className={cx(iconClassNames.filled, classes.filledPart)}>
        <path d="M17.8015 7.76906L17.9594 6.93993C18.116 6.1178 17.8139 5.24209 17.154 4.65965C15.5858 3.27548 13.3241 2.49957 9.99245 2.50386C6.6656 2.50818 4.10141 3.28832 2.67633 4.67234C2.0727 5.25858 1.85286 6.12714 2.09921 6.95248L2.3467 7.78165C2.57765 8.55537 3.35656 9.07205 4.16895 8.99042L5.79708 8.8268C6.49595 8.75657 6.80244 8.17088 7 7.49994C7.29566 6.49585 7.5 5.74998 7.5 5.74998C8.26225 5.46481 8.98623 5.24994 10 5.24994C11.0138 5.24994 11.7522 5.44346 12.5 5.74998C12.5 5.74998 12.6957 6.49518 13 7.49994C13.2241 8.23997 13.753 8.76115 14.4666 8.83008L16.1042 8.98826C16.9272 9.06774 17.6535 8.546 17.8015 7.76906Z" />
        <path d="M9.5 11.5C9.77614 11.5 10 11.7239 10 12V13.5001H11.0047C11.2809 13.5001 11.5047 13.7239 11.5047 14.0001C11.5047 14.2762 11.2809 14.5001 11.0047 14.5001H9.5C9.22386 14.5001 9 14.2762 9 14.0001V12C9 11.7239 9.22386 11.5 9.5 11.5Z" />
        <path d="M5.5 13.5C5.5 11.0147 7.51472 9 10 9C12.4853 9 14.5 11.0147 14.5 13.5C14.5 15.9853 12.4853 18 10 18C7.51472 18 5.5 15.9853 5.5 13.5ZM10 10C8.067 10 6.5 11.567 6.5 13.5C6.5 15.433 8.067 17 10 17C11.933 17 13.5 15.433 13.5 13.5C13.5 11.567 11.933 10 10 10Z" />
      </g>
    </svg>
  ),
  displayName: 'PhoneClockIcon',
});

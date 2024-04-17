import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const SQLAnalyticsPoolIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" className={classes.svg} focusable="false">
      <path d="M1408 774q16-1 31-1t32 0q37 0 94 3t121 14 129 28 116 46 84 67 33 93v768q0 54-32 93t-84 68-116 47-129 29-121 15-94 4q-37 0-94-4t-121-14-128-29-116-47-84-69-33-93v-768q0-41 20-73t52-57 74-44 84-32 83-21 71-12V512H256v768H128V512H0V384L768 0l768 384v128h-128v262zM286 384h964L768 143 286 384zm1634 1408v-603q-110 51-219 71t-229 20q-120 0-229-20t-219-71v603q0 11 10 21t19 15q38 27 91 45t111 28 115 15 102 4q45 0 101-4t115-14 111-29 92-45q8-5 18-15t11-21zm-448-640q45 0 101-4t115-14 111-29 92-45q7-5 18-15t11-21q0-11-11-21t-18-15q-38-27-91-44t-112-28-114-15-102-5q-45 0-102 4t-114 15-111 28-92 45q-7 5-18 15t-11 21q0 11 11 21t18 15q38 27 91 45t111 28 115 15 102 4zM384 1280v-128h128v128H384zm256 0v-128h128v128H640zm-256-256V896h128v128H384zm0-256V640h128v128H384zm256 256V896h128v128H640z" />
    </svg>
  ),
  displayName: 'SQLAnalyticsPoolIcon',
});

export default SQLAnalyticsPoolIcon;

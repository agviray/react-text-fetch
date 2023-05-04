import React from 'react';

const WarningIcon = ({ style }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 126 110"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      xmlnsserif="http://www.serif.com/"
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        strokeLinejoin: 'round',
        strokeMiterlimit: '2',
      }}
    >
      <path
        d="M62.779,0c3.483,0 6.696,1.839 8.462,4.856l52.977,90.258c1.79,3.041 1.79,6.794 0.049,9.835c-1.741,3.041 -5.003,4.93 -8.511,4.93l-105.954,0c-3.508,0 -6.77,-1.889 -8.511,-4.93c-1.742,-3.041 -1.717,-6.818 0.049,-9.835l52.977,-90.258c1.766,-3.017 4.979,-4.856 8.462,-4.856Z"
        style={{ fill: `${style.triangleColor}` }}
      />
      <clipPath id="_clip1">
        <path d="M62.779,0c3.483,0 6.696,1.839 8.462,4.856l52.977,90.258c1.79,3.041 1.79,6.794 0.049,9.835c-1.741,3.041 -5.003,4.93 -8.511,4.93l-105.954,0c-3.508,0 -6.77,-1.889 -8.511,-4.93c-1.742,-3.041 -1.717,-6.818 0.049,-9.835l52.977,-90.258c1.766,-3.017 4.979,-4.856 8.462,-4.856Z" />
      </clipPath>
      <g clipPath="url(#_clip1)">
        <path
          d="M70.627,86.334c0,-4.306 -3.542,-7.849 -7.848,-7.849c-4.306,0 -7.849,3.543 -7.849,7.849c0,4.305 3.543,7.848 7.849,7.848c4.306,0 7.848,-3.543 7.848,-7.848Z"
          style={{ fill: `${style.exclamationColor}` }}
        />
        <path
          d="M62.779,31.394c-3.262,0 -5.886,2.624 -5.886,5.886l-0,27.47c-0,3.262 2.624,5.887 5.886,5.887c3.262,-0 5.886,-2.625 5.886,-5.887l0,-27.47c0,-3.262 -2.624,-5.886 -5.886,-5.886Z"
          style={{ fill: `${style.exclamationColor}` }}
        />
      </g>
    </svg>
  );
};

export default WarningIcon;

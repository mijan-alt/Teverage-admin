import * as React from "react";

function Hamburger({ width, height }) {
  return (
    <svg
      width={`${width}px`}
      height={`${height}px`}
      viewBox="0 -0.5 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    
    >
      <path
        d="M5.5 11.75a.75.75 0 000 1.5v-1.5zm14 1.5a.75.75 0 000-1.5v1.5zm-11.666 2.5a.75.75 0 000 1.5v-1.5zm9.333 1.5a.75.75 0 000-1.5v1.5zm-9.333-9.5a.75.75 0 000 1.5v-1.5zm9.333 1.5a.75.75 0 000-1.5v1.5zm-11.667 4h14v-1.5h-14v1.5zm2.334 4h9.333v-1.5H7.834v1.5zm0-8h9.333v-1.5H7.834v1.5z"
        fill="#000"
      />
    </svg>
  );
}



export default Hamburger;




export const Setting=({width, height}) =>{
  return (
    <svg
      width={`${width}px`}
      height={`${height}px`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="#222" strokeLinecap="round">
        <rect x={3} y={3} width={7} height={7} rx={1} />
        <rect x={3} y={14} width={7} height={7} rx={1} />
        <rect x={14} y={3} width={7} height={7} rx={1} />
        <rect x={14} y={14} width={7} height={7} rx={1} />
      </g>
    </svg>
  );
}

export const Dashboard=() =>{
  return (
    <svg
      width="18px"
      height="18px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 2a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V3a1 1 0 00-1-1H3zm0-2h3a3 3 0 013 3v3a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm11 16h7a3 3 0 013 3v2a3 3 0 01-3 3h-7a3 3 0 01-3-3v-2a3 3 0 013-3zm0 2a1 1 0 00-1 1v2a1 1 0 001 1h7a1 1 0 001-1v-2a1 1 0 00-1-1h-7zM3 11h3a3 3 0 013 3v7a3 3 0 01-3 3H3a3 3 0 01-3-3v-7a3 3 0 013-3zm0 2a1 1 0 00-1 1v7a1 1 0 001 1h3a1 1 0 001-1v-7a1 1 0 00-1-1H3zM21 0a3 3 0 013 3v8a3 3 0 01-3 3h-7a3 3 0 01-3-3V3a3 3 0 013-3h7zm-8 3v8a1 1 0 001 1h7a1 1 0 001-1V3a1 1 0 00-1-1h-7a1 1 0 00-1 1z"
        fill="#758CA3"
      />
    </svg>
  );
}
export const Chevronright=() =>{
  return (
    <svg
      width="18px"
      height="18px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
  
    >
      <path fill="#fff" d="M0 0H24V24H0z" />
      <path
        d="M9.5 7l5 5-5 5"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export const Widget=() =>{
  return (
    <svg
      fill="#000"
      height="18px"
      width="18px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
     
    >
      <path d="M256 168.306a8.17 8.17 0 00-8.17 8.17v23.421a8.17 8.17 0 008.17 8.17 8.17 8.17 0 008.17-8.17v-23.421a8.169 8.169 0 00-8.17-8.17zM256 112.204a8.17 8.17 0 00-8.17 8.17v23.421a8.17 8.17 0 008.17 8.17 8.17 8.17 0 008.17-8.17v-23.421a8.17 8.17 0 00-8.17-8.17zM256 56.102a8.17 8.17 0 00-8.17 8.17v23.421a8.17 8.17 0 008.17 8.17 8.17 8.17 0 008.17-8.17V64.272a8.17 8.17 0 00-8.17-8.17zM328.956 288.686l-20.284-11.711a8.171 8.171 0 00-8.171 14.151l20.284 11.711a8.168 8.168 0 0011.16-2.99 8.17 8.17 0 00-2.989-11.161zM377.54 316.737l-20.283-11.711a8.171 8.171 0 00-8.17 14.151l20.283 11.711a8.166 8.166 0 0011.161-2.99c2.257-3.907.917-8.903-2.991-11.161zM426.127 344.788l-20.283-11.711a8.167 8.167 0 00-11.16 2.99 8.17 8.17 0 002.99 11.16l20.283 11.711a8.166 8.166 0 0011.161-2.99 8.172 8.172 0 00-2.991-11.16zM214.489 279.967a8.17 8.17 0 00-11.161-2.99l-20.284 11.711a8.17 8.17 0 108.171 14.151l20.284-11.711a8.171 8.171 0 002.99-11.161zM165.903 308.018a8.17 8.17 0 00-11.161-2.99l-20.283 11.711a8.17 8.17 0 008.17 14.151l20.283-11.711a8.17 8.17 0 002.991-11.161zM117.317 336.069a8.17 8.17 0 00-11.161-2.99L85.873 344.79a8.17 8.17 0 004.093 15.246 8.125 8.125 0 004.077-1.096l20.283-11.711a8.17 8.17 0 002.991-11.16z" />
      <path d="M474.712 125.01L260.085 1.095a8.167 8.167 0 00-8.17 0L37.288 125.01a8.172 8.172 0 00-4.085 7.075v247.83a8.17 8.17 0 004.085 7.075l214.627 123.915a8.161 8.161 0 008.17 0L474.712 386.99a8.172 8.172 0 004.085-7.075v-247.83a8.168 8.168 0 00-4.085-7.075zM247.83 489.679L57.713 379.915l8.027-4.634a8.17 8.17 0 00-8.169-14.152l-8.028 4.634V146.236L239.66 256l-8.029 4.635a8.17 8.17 0 008.17 14.151l8.029-4.635v219.528zM256 224.408a8.17 8.17 0 00-8.17 8.17v9.27L57.713 132.085 247.83 22.321v9.27a8.17 8.17 0 008.17 8.17 8.17 8.17 0 008.17-8.17v-9.27l190.116 109.764L264.17 241.849v-9.27a8.17 8.17 0 00-8.17-8.171zm206.457 141.356l-8.029-4.635a8.171 8.171 0 00-8.171 14.151l8.027 4.634L264.17 489.679V270.151l8.029 4.635a8.166 8.166 0 0011.161-2.99 8.171 8.171 0 00-2.99-11.161L272.34 256l190.116-109.764v219.528z" />
    </svg>
  );
}
export const SmallCircle=() =>{
  return (
    <svg
      width="10px"
      height="10px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
   
    >
      <g fill="#727272">
        <path d="M21.25 12A9.25 9.25 0 1112 2.75a.75.75 0 000-1.5C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12a.75.75 0 00-1.5 0z" />
        <path d="M12.47 10.47a.75.75 0 101.06 1.06l7.72-7.72v3.534a.75.75 0 001.5 0V2a.75.75 0 00-.75-.75h-5.344a.75.75 0 000 1.5h3.533l-7.72 7.72z" />
      </g>
    </svg>
  );
}
export const Notification=() =>{
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9.002 17H5.606c-1.258 0-1.887 0-2.02-.098-.148-.11-.185-.174-.2-.358-.015-.164.37-.795 1.142-2.057C5.324 13.184 6 11.287 6 8.6c0-1.485.632-2.91 1.758-3.96C8.883 3.59 10.409 3 12 3c1.592 0 3.118.59 4.243 1.64C17.368 5.69 18 7.115 18 8.6c0 2.686.677 4.584 1.473 5.887.771 1.262 1.157 1.893 1.143 2.057-.017.184-.053.248-.202.358-.132.098-.761.098-2.02.098H15m-5.998 0L9 18a3 3 0 106 0v-1m-5.998 0H15"
      ></path>
    </svg>
  );
}
export const Search=() =>{
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#0F0F0F"
        fillRule="evenodd"
        d="M17.04 15.624a9.004 9.004 0 10-1.415 1.415l5.667 5.668a1 1 0 001.415-1.415l-5.668-5.668zm-7.036 1.393a7.013 7.013 0 110-14.026 7.013 7.013 0 010 14.026z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
export const Minimize=() =>{
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
    >
      <g>
        <g>
          <g
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M8 3v3a2 2 0 01-2 2H3M16 21v-3a2 2 0 012-2h3M8 21v-3a2 2 0 00-2-2H3M16 3v3a2 2 0 002 2h3"></path>
          </g>
        </g>
      </g>
    </svg>
  );
}
export const Threedots=() =>{
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M19 13a1 1 0 100-2 1 1 0 000 2zM12 13a1 1 0 100-2 1 1 0 000 2zM5 13a1 1 0 100-2 1 1 0 000 2z"></path>
      </g>
    </svg>
  );
}

export const PageIcon=() =>{
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 48 48"
    >
      <g>
        <path fill="#fff" fillOpacity="0.01" d="M0 0H48V48H0z"></path>
        <rect
          width="40"
          height="40"
          x="4"
          y="4"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth="4"
          rx="3"
        ></rect>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          d="M4 17.333h40M17.333 44V17.333"
        ></path>
      </g>
    </svg>
  );
}





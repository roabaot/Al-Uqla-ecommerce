import React from 'react'

export function PrimeShoppingCart({ width, height, color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width ? width : '16px'} height={height ? height : '16px'} viewBox="0 0 24 24"><path fill={color ? color : '#fff'} d="M11.25 18.75c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5Zm5-1.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5Zm4.48-9.57l-2 8a.75.75 0 0 1-.73.57H8c-.36 0-.67-.26-.74-.62L5.37 5.25H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.36 0 .67.26.74.62l.43 2.38H20a.754.754 0 0 1 .73.93Zm-1.69.57H7.44l1.18 6.5h8.79l1.63-6.5Z"></path></svg>
  )
}
export default PrimeShoppingCart
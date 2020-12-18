import styled from 'styled-components'

export const DarkModeButton = styled.svg`
  color: ${(props) => props.theme.button.sunDarkModeColour};
  height: 1.4rem;
  width: 1.4rem;
  margin-left: ${(props) => props.theme.sizes.sizeM};
  
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.button.sunDarkModeHoverColour};
    transition: ease-in 0.6s color;
  }
`

export default function GlyphSun() {
  return (
    <DarkModeButton
      width='16'
      height='16'
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fill='currentColor'
        d='M8.5498 1.0918C8.5498 0.71582 8.22852 0.394531 7.85254 0.394531C7.47656 0.394531 7.16211 0.71582 7.16211 1.0918V2.47949C7.16211 2.85547 7.47656 3.16992 7.85254 3.16992C8.22852 3.16992 8.5498 2.85547 8.5498 2.47949V1.0918ZM11.2842 3.63477C11.0176 3.90137 11.0176 4.3457 11.291 4.6123C11.5508 4.87891 12.002 4.87891 12.2686 4.60547L13.2529 3.62109C13.5195 3.36133 13.5195 2.90332 13.2529 2.63672C12.9863 2.37695 12.542 2.37695 12.2754 2.64355L11.2842 3.63477ZM3.43652 4.60547C3.69629 4.87891 4.14746 4.87891 4.41406 4.6123C4.68066 4.35254 4.68066 3.89453 4.4209 3.63477L3.43652 2.64355C3.17676 2.38379 2.72559 2.37695 2.45898 2.63672C2.19238 2.90332 2.19238 3.36133 2.45215 3.61426L3.43652 4.60547ZM7.85254 4.43457C5.88379 4.43457 4.25 6.06152 4.25 8.03711C4.25 10.0127 5.88379 11.6396 7.85254 11.6396C9.82129 11.6396 11.4482 10.0127 11.4482 8.03711C11.4482 6.06152 9.82129 4.43457 7.85254 4.43457ZM7.85254 5.72656C9.11035 5.72656 10.1631 6.77246 10.1631 8.03711C10.1631 9.30176 9.11035 10.3477 7.85254 10.3477C6.58789 10.3477 5.53516 9.30176 5.53516 8.03711C5.53516 6.77246 6.58789 5.72656 7.85254 5.72656ZM14.791 8.73438C15.167 8.73438 15.4814 8.41309 15.4814 8.03711C15.4814 7.66113 15.167 7.34668 14.791 7.34668H13.4033C13.0273 7.34668 12.7129 7.66113 12.7129 8.03711C12.7129 8.41309 13.0273 8.73438 13.4033 8.73438H14.791ZM0.920898 7.34668C0.538086 7.34668 0.223633 7.66113 0.223633 8.03711C0.223633 8.41309 0.538086 8.73438 0.920898 8.73438H2.30176C2.67773 8.73438 2.99902 8.41309 2.99902 8.03711C2.99902 7.66113 2.67773 7.34668 2.30176 7.34668H0.920898ZM12.2617 11.4688C11.9951 11.2021 11.5508 11.209 11.2842 11.4756C11.0176 11.7354 11.0176 12.1797 11.291 12.4531L12.2822 13.4375C12.542 13.7041 12.9932 13.6973 13.2598 13.4307C13.5195 13.1641 13.5195 12.7197 13.2529 12.4531L12.2617 11.4688ZM2.45215 12.4463C2.18555 12.7129 2.17871 13.1641 2.43848 13.4238C2.70508 13.6904 3.16309 13.6973 3.42285 13.4375L4.41406 12.4531C4.68066 12.1865 4.68066 11.7354 4.4209 11.4756C4.1543 11.209 3.70312 11.209 3.43652 11.4688L2.45215 12.4463ZM8.5498 13.5947C8.5498 13.2188 8.22852 12.9043 7.85254 12.9043C7.47656 12.9043 7.16211 13.2188 7.16211 13.5947V14.9824C7.16211 15.3584 7.47656 15.6797 7.85254 15.6797C8.22852 15.6797 8.5498 15.3584 8.5498 14.9824V13.5947Z'
      />
    </DarkModeButton>
  )
}

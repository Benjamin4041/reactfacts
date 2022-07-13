import React from 'react'

export default function top() {
  return (
    <header style={{backgroundColor:"#21222A", padding:"1.5em", display:"flex", justifyContent:"space-between",color:"white",alignItems:"center"}}>
        <div>
        <svg width="158" height="29" viewBox="0 0 158 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M37.0124 22H40.4342V16.2628H42.9314L45.9976 22H49.775L46.3374 15.7096C48.1787 14.9193 49.1981 13.3151 49.1981 11.1024C49.1981 7.8861 47.0723 5.81564 43.3977 5.81564H37.0124V22ZM40.4342 13.5127V8.61313H42.7418C44.7174 8.61313 45.6736 9.49031 45.6736 11.1024C45.6736 12.7066 44.7174 13.5127 42.7576 13.5127H40.4342ZM55.7766 22.2371C58.7795 22.2371 60.8026 20.7751 61.2767 18.5229L58.1631 18.3174C57.8233 19.242 56.954 19.7241 55.8319 19.7241C54.1487 19.7241 53.0818 18.6098 53.0818 16.8001V16.7922H61.3479V15.8676C61.3479 11.7425 58.8507 9.70368 55.6422 9.70368C52.0703 9.70368 49.7549 12.2404 49.7549 15.9862C49.7549 19.8347 52.0387 22.2371 55.7766 22.2371ZM53.0818 14.706C53.1529 13.323 54.204 12.2167 55.6975 12.2167C57.1595 12.2167 58.171 13.2598 58.1789 14.706H53.0818ZM65.8934 22.2292C67.6873 22.2292 68.8489 21.4468 69.4416 20.3168H69.5364V22H72.7291V13.813C72.7291 10.9207 70.2793 9.70368 67.5766 9.70368C64.6685 9.70368 62.7561 11.0945 62.2898 13.3072L65.4034 13.5601C65.6326 12.7541 66.3517 12.1614 67.5608 12.1614C68.7067 12.1614 69.3626 12.7382 69.3626 13.734V13.7814C69.3626 14.5637 68.5328 14.6665 66.4228 14.8719C64.0205 15.0932 61.8631 15.8993 61.8631 18.6098C61.8631 21.0122 63.5779 22.2292 65.8934 22.2292ZM66.8575 19.9058C65.8223 19.9058 65.0794 19.4238 65.0794 18.4992C65.0794 17.5509 65.8618 17.0846 67.0471 16.9187C67.7821 16.8159 68.9833 16.6421 69.3863 16.3734V17.6615C69.3863 18.9338 68.3353 19.9058 66.8575 19.9058ZM79.7125 22.2371C82.9446 22.2371 84.9756 20.3405 85.1336 17.5509H81.9568C81.7593 18.8469 80.9058 19.5739 79.752 19.5739C78.1794 19.5739 77.16 18.2542 77.16 15.9309C77.16 13.6391 78.1873 12.3273 79.752 12.3273C80.9848 12.3273 81.7751 13.1413 81.9568 14.3504H85.1336C84.9914 11.545 82.8656 9.70368 79.6967 9.70368C76.0141 9.70368 73.7382 12.2562 73.7382 15.9783C73.7382 19.6688 75.9746 22.2371 79.7125 22.2371ZM92.6327 9.86173H90.3489V6.9536H86.9824V9.86173H85.3229V12.3905H86.9824V18.7126C86.9666 21.0912 88.5866 22.2687 91.0285 22.166C91.8978 22.1343 92.5142 21.9605 92.854 21.8499L92.3245 19.3448C92.1586 19.3764 91.803 19.4554 91.4869 19.4554C90.8152 19.4554 90.3489 19.2025 90.3489 18.27V12.3905H92.6327V9.86173ZM94.037 22H97.4588V15.3145H104.042V12.4933H97.4588V8.63684H104.753V5.81564H94.037V22ZM109.188 22.2292C110.982 22.2292 112.143 21.4468 112.736 20.3168H112.831V22H116.023V13.813C116.023 10.9207 113.574 9.70368 110.871 9.70368C107.963 9.70368 106.05 11.0945 105.584 13.3072L108.698 13.5601C108.927 12.7541 109.646 12.1614 110.855 12.1614C112.001 12.1614 112.657 12.7382 112.657 13.734V13.7814C112.657 14.5637 111.827 14.6665 109.717 14.8719C107.315 15.0932 105.157 15.8993 105.157 18.6098C105.157 21.0122 106.872 22.2292 109.188 22.2292ZM110.152 19.9058C109.117 19.9058 108.374 19.4238 108.374 18.4992C108.374 17.5509 109.156 17.0846 110.341 16.9187C111.076 16.8159 112.278 16.6421 112.681 16.3734V17.6615C112.681 18.9338 111.63 19.9058 110.152 19.9058ZM123.007 22.2371C126.239 22.2371 128.27 20.3405 128.428 17.5509H125.251C125.054 18.8469 124.2 19.5739 123.046 19.5739C121.474 19.5739 120.454 18.2542 120.454 15.9309C120.454 13.6391 121.482 12.3273 123.046 12.3273C124.279 12.3273 125.069 13.1413 125.251 14.3504H128.428C128.286 11.545 126.16 9.70368 122.991 9.70368C119.308 9.70368 117.033 12.2562 117.033 15.9783C117.033 19.6688 119.269 22.2371 123.007 22.2371ZM135.927 9.86173H133.643V6.9536H130.277V9.86173H128.617V12.3905H130.277V18.7126C130.261 21.0912 131.881 22.2687 134.323 22.166C135.192 22.1343 135.809 21.9605 136.148 21.8499L135.619 19.3448C135.453 19.3764 135.097 19.4554 134.781 19.4554C134.11 19.4554 133.643 19.2025 133.643 18.27V12.3905H135.927V9.86173ZM146.933 13.323C146.633 11.0866 144.831 9.70368 141.765 9.70368C138.659 9.70368 136.612 11.1419 136.62 13.4811C136.612 15.2987 137.758 16.4761 140.129 16.9503L142.231 17.3691C143.29 17.5825 143.772 17.9697 143.788 18.5782C143.772 19.2973 142.99 19.811 141.812 19.811C140.611 19.811 139.813 19.2973 139.607 18.3095L136.296 18.4834C136.612 20.8067 138.588 22.2371 141.804 22.2371C144.949 22.2371 147.202 20.6329 147.21 18.2384C147.202 16.484 146.056 15.433 143.701 14.951L141.504 14.5084C140.374 14.2634 139.955 13.8762 139.963 13.2914C139.955 12.5644 140.777 12.0902 141.82 12.0902C142.99 12.0902 143.685 12.7303 143.851 13.5127L146.933 13.323Z" fill="#61DAFB"/>
<g clip-path="url(#clip0_0_30)">
<path d="M14.4653 17.0241C15.892 17.0241 17.0486 15.8675 17.0486 14.4408C17.0486 13.014 15.892 11.8575 14.4653 11.8575C13.0385 11.8575 11.8819 13.014 11.8819 14.4408C11.8819 15.8675 13.0385 17.0241 14.4653 17.0241Z" fill="#00D8FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.4658 9.18842C17.9342 9.18842 21.1563 9.68611 23.5858 10.5225C26.513 11.5302 28.3127 13.0577 28.3127 14.4409C28.3127 15.8822 26.4053 17.5049 23.262 18.5464C20.8855 19.3338 17.7582 19.7448 14.4658 19.7448C11.0901 19.7448 7.8935 19.359 5.49025 18.5378C2.4497 17.4985 0.618347 15.8547 0.618347 14.4409C0.618347 13.0689 2.33672 11.5533 5.22274 10.547C7.66126 9.69687 10.9629 9.18842 14.4653 9.18842H14.4658Z" stroke="#00D8FF" stroke-width="1.23587"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.89374 11.8297C11.6265 8.82508 13.6673 6.28248 15.6055 4.59573C17.9408 2.56344 20.1632 1.76754 21.3613 2.45845C22.6099 3.17849 23.0628 5.64153 22.3946 8.88476C21.89 11.3368 20.6833 14.2511 19.0384 17.1033C17.352 20.0276 15.4209 22.604 13.5091 24.2751C11.0899 26.3898 8.75098 27.1551 7.52618 26.4488C6.33768 25.7639 5.88319 23.5177 6.45334 20.5149C6.93507 17.9778 8.14401 14.8636 9.89318 11.8296L9.89374 11.8297Z" stroke="#00D8FF" stroke-width="1.23587"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.89694 17.1109C8.15926 14.1097 6.97617 11.0713 6.48233 8.5497C5.88788 5.51152 6.30818 3.1886 7.50522 2.49569C8.75263 1.77353 11.1127 2.61124 13.5888 4.80986C15.4609 6.4721 17.3833 8.97252 19.033 11.822C20.7242 14.7435 21.9918 17.7032 22.4849 20.1941C23.1089 23.3463 22.6039 25.7547 21.3802 26.4631C20.1929 27.1504 18.0202 26.4227 15.7035 24.429C13.746 22.7446 11.6518 20.142 9.89694 17.1109V17.1109Z" stroke="#00D8FF" stroke-width="1.23587"/>
</g>
<defs>
<clipPath id="clip0_0_30">
<rect width="28.9295" height="28.9295" fill="white"/>
</clipPath>
</defs>
</svg>

        </div>
        <p>
        React Course - Project  2
        </p>
    </header>
  )
}

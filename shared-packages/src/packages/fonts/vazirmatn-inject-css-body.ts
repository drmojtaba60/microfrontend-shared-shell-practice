// import 'vazirmatn/Vazirmatn-font-face.css';
// import {App} from "vue";
// export default {
//   install(app:App) {
//     console.log('font vazirmatn is installed');
//     console.log(app)
//   }
// }



// shared-app/src/plugins/fonts.js
const SHARED_BASE_URL = import.meta.env.VITE_SHARED_URL || 'http://localhost:4001'

const style = document.createElement('style')
style.textContent = `
  @font-face {
    font-family: 'Vazirmatn';
    src: url('${SHARED_BASE_URL}/assets/fonts/vazirmatn/webfonts/Vazirmatn-Regular.woff2') format('woff2');
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'Vazirmatn';
    src: url('${SHARED_BASE_URL}/assets/fonts/vazirmatn/webfonts/Vazirmatn-Bold.woff2') format('woff2');
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: 'Vazirmatn';
    src: url('${SHARED_BASE_URL}/assets/fonts/vazirmatn/webfonts/Vazirmatn-Light.woff2') format('woff2');
    font-weight: 300;
    font-display: swap;
  }

  @font-face {
    font-family: 'Vazirmatn';
    src: url('${SHARED_BASE_URL}/assets/fonts/vazirmatn/webfonts/Vazirmatn-Medium.woff2') format('woff2');
    font-weight: 500;
    font-display: swap;
  }
`

// اجرا خودکار
document.head.appendChild(style)

export default {}

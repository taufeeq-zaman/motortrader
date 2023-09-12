module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // darkMode: false,
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1500px',
      '3xl': '1780px',
    },
    extend: {
      colors: {
        blacks:'#242628',
        mtyellow:'#ffcf00',
        body: '#5A5A5A',
        heading: '#212121',
        input: '#1D1E1F',
        black: '#000',
        white: '#fff',
        linen: '#FBF1E9',
        linenSecondary: '#ECE7E3',
        olive: '#3D9970',
        maroon: '#B03060',
        brown: '#C7844B',
        placeholder: '#707070',
        borderBottom: '#f7f7f7',
        facebook: '#4267B2',
        facebookHover: '#395fad',
        google: '#4285F4',
        googleHover: '#307bf9',
        gray: {
          50: '#FBFBFB',
          100: '#F1F1F1',
          150: '#F4F4F4',
          200: '#F9F9F9',
          300: '#E6E6E6',
          350: '#E9ECEF',
          400: '#999999',
          500: '#D8D8D8',
          600: '#3A3A3A',
          700: '#292929',
          800: '#707070',
          900: '#343D48',
        },
      },
      fontSize: {
        '10px': '.625rem',
      },
      spacing: {
        '430px': '430px',
        '450px': '450px',
        '500px': '500px',
        '64vh': '64vh',
      },
      minHeight: {
        '50px': '50px',
      },
      scale: {
        80: '0.8',
        85: '0.85',
        300: '3',
        400: '4',
      },
      animation: {
        shine: 'shine 1s',
        shineRTL: 'shineRTL 1s',
      },
      keyframes: {
        shine: {
          '100%': { left: '125%' },
        },
        shineRTL: {
          '100%': { right: '125%' },
        },
      },
      backgroundImage: {
        'app-pattern': "url('/assets/images/app-pattern.png')",
      },
    },
    boxShadow: {
      cart: '0 3px 6px rgba(0,0,0,0.12)',
      product: '0 6px 12px rgba(0,0,0,.08)',
      listProduct: '0 2px 4px rgba(0,0,0,.08)',
      navigation: '0 3px 6px rgba(0, 0, 0, 0.16)',
      navigationReverse: '0 -3px 6px rgba(0, 0, 0, 0.16)',
      header: '0 2px 3px rgba(0, 0, 0, 0.08)',
      vendorCard: '1px 1px 4px rgba(0, 0, 0, 0.12)',
      vendorCardHover: '0 6px 18px rgba(0, 0, 0, 0.12)',
      subMenu: '1px 2px 3px rgba(0, 0, 0, 0.08)',
      bottomNavigation: '0 -2px 3px rgba(0, 0, 0, 0.06)',
      cookies: '0 -2px 3px rgba(0, 0, 0, 0.04)',
      avatar: '0px 15px 30px rgba(0, 0, 0, 0.16)',
      tab:'0px 0px 12px 0px rgba(240,240,240,1)',
    },
    fontFamily: {
      body: ["'Poppins', sans-serif"],
      satisfy: ["'Poppins', sans-serif"],
      segoe: ["'Poppins', sans-serif"],
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
};

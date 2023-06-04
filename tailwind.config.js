/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      keyframes: {
         progress: {
          '0%': {
            strokeDasharray:'0 100'
          }
        },
        inUp: {
          '0%': {
            transform: 'translateY(40%)',
            
          },
        
          '100%': {
            transform: 'translateY(0px)',
            opacity: '1'
          }
        },
        fromMiddle: {
          '0%': {
            letterSpacing: '-0.5em',
            transform: 'translateZ(-700px)',
            opacity: '0'
          },
        
          '40%': {
            opacity: '0.6'
          },
        
          '100%': {
            transform: 'translateZ(0px)',
            opacity: '1'
          }
        },
        fadeIn: {
          '0%': {
            opacity: '0'
          },
        
          '40%': {
            opacity: '0.6'
          },
        
          '100%': {
            opacity: '1'
          }
        }


      },
      animation: {
        'fill-circle':  'progress 1s ease-out forwards',
        'in-up': 'inUp 1s ease-in',
        'from-middle': 'fromMiddle 6s ease-in',
        'fade-in': 'fadeIn 2s ease-in'

      },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ink: 'var(--color-ink)',
        paper: 'var(--color-paper)',
        off: 'var(--color-off)',
        mid: 'var(--color-mid)',
        line: 'var(--color-line)',
      },
      fontFamily: {
        sans: ['"Inter Tight"', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['"Inter Tight"', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.055em',
        meta: '0.18em',
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
}

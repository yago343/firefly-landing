import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        /* Cores principais do design system */
        bg: "hsl(var(--bg))",
        surface: "hsl(var(--surface))",
        "surface-2": "hsl(var(--surface-2))",
        text: "hsl(var(--text))",
        muted: "hsl(var(--muted))",
        
        brand: {
          DEFAULT: "hsl(var(--brand))",
          strong: "hsl(var(--brand-strong))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          strong: "hsl(var(--accent-strong))",
        },
        
        graphite: "hsl(var(--graphite))",
        stroke: "hsl(var(--stroke))",
        
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
      },
      
      backgroundImage: {
        'gradient-brand-accent': 'var(--gradient-brand-accent)',
        'gradient-duotone': 'var(--gradient-duotone)',
        'gradient-surface': 'var(--gradient-surface)',
        'gradient-glow': 'var(--gradient-glow)',
        'gradient-text-glow': 'var(--gradient-text-glow)',
        'dotgrid': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 1px)',
        'light-rays': 'conic-gradient(from 0deg at 50% 50%, transparent, hsl(var(--brand) / 0.1), transparent, hsl(var(--accent) / 0.1), transparent)',
        'radial-glow': 'radial-gradient(ellipse at center, hsl(var(--brand) / 0.15), hsl(var(--accent) / 0.1), transparent)',
      },
      
      backgroundSize: {
        'dotgrid': '20px 20px',
        'light-rays': '400px 400px',
        'radial-glow': '800px 600px',
      },
      
      boxShadow: {
        'glow-brand': 'var(--glow-brand)',
        'glow-accent': 'var(--glow-accent)',
        'glow-mixed': 'var(--glow-mixed)',
        'glow-text': 'var(--glow-text)',
        'glow-border': 'var(--glow-border)',
        'glass': '0 14px 34px hsl(var(--shadow) / 0.5), 0 0 40px hsl(var(--brand) / 0.1)',
        'glass-hover': '0 22px 50px hsl(var(--shadow) / 0.6), 0 0 60px hsl(var(--brand) / 0.2)',
        'deep': '0 20px 60px hsl(var(--shadow) / 0.6), 0 0 80px hsl(var(--accent) / 0.2)',
        'ultra-glow': '0 0 100px hsl(var(--brand) / 0.6), 0 0 200px hsl(var(--accent) / 0.4), 0 0 300px hsl(var(--brand) / 0.2)',
      },
      
      backdropBlur: {
        'glass': '8px',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "glow-pulse": {
          "0%, 100%": { filter: "brightness(1)" },
          "50%": { filter: "brightness(1.2)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

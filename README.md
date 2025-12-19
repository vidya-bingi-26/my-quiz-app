# My Quiz App
## Setup instructions

1. Clone the repo or extract the ZIP.
2. Install dependencies:
```bash
cd my-quiz-app
npm install
```
3. Run development server:
```bash
npm run dev
```
Open http://localhost:5173 (or the port shown by Vite).



## Tech stack used

- React (TypeScript)
- Vite
- Tailwind CSS
- React Router (for navigation)
- Framer Motion (animations) 
- ESLint / TypeScript for linting & types
- Asset pipeline includes images and other media files in `src/assets`

## Key features implemented

- Quiz flow with multiple questions and answer selection.
- Progress bar with partial/full fill states.
- `GoodLuckBadge` component (badge with paw asset and decorative vectors).
- `GradientButton` reusable component with submit/disabled states and adaptive padding.
- Result page with animated counter (rolls up to a final score, stops at 62).
- Routing: main quiz page (`/`) and result page (`/result`).
- Tailwind-based layout with responsive absolute positioning for design fidelity.
- Animated "smart animate" entry using `useEffect` + CSS transitions.
- Cursor/pointer state adjustments for interactive controls.
- Assets included: `paw.gif` and `BestofLuck.png` (referenced in components).

## Project structure (high level)

```
my-quiz-app/
├─ package.json
├─ src/
│  ├─ pages/
│  │  ├─ QuizPage.tsx
│  │  └─ ResultPage.tsx
│  ├─ components/
│  │  ├─ Question.tsx
│  │  ├─ GoodLuckBadge.tsx
│  │  └─ GradientButton.tsx
│  ├─ assets/
│  └─ main.tsx
```

## Any assumptions made

- The repo is a Vite + React + TypeScript app (inferred from `package.json` and `.tsx` files).
- The development environment uses Node.js (>=16 recommended) and npm.
- Ports / host defaults use Vite defaults.
- Final score in `ResultPage` is hard-coded to animate to 62 (as requested).
- Some CSS exact pixel placements were adapted into Tailwind utility classes; minor visual adjustments may be necessary to exactly match designs.
- Time spent below is an estimate of development/testing for the implemented features.

## Time spent on the assignment

Estimated **~8 hours** (design, implementing components, wiring navigation, animations, assets, and testing). This is an approximate value — adjust if you want an exact time log.


# MuniStream

Een streaming platform geïnspireerd op VTMGO.be, gebouwd met Next.js 16 en React 19.

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **UI**: React 19, Tailwind CSS v4, Lucide React
- **Video**: react-player
- **Taal**: TypeScript
- **Deployment**: AWS Amplify

## Functionaliteiten

- **Homepage** met hero-banner en meerdere carousels (alle titels, series, films, per genre)
- **Detailpagina** per show met poster, beschrijving, afleveringenlijst per seizoen
- **Videospeler** met terugnavigatie naar de show
- **Zoeken** op titel, beschrijving en genre
- **Mijn lijst** (watchlist via localStorage, geen login vereist)
- **Series** en **Films** overzichtspagina's
- Volledig **Nederlandstalige** interface
- Responsief design (mobiel + desktop)

## Projectstructuur

```
stream-app/               # Next.js applicatie
├── src/
│   ├── app/              # App Router pagina's
│   │   ├── page.tsx      # Homepage
│   │   ├── shows/[id]/   # Show detailpagina
│   │   ├── watch/[id]/   # Videospeler
│   │   ├── search/       # Zoekresultaten
│   │   ├── movies/       # Filmsoverzicht
│   │   ├── shows/        # Seriesoverzicht
│   │   └── watchlist/    # Mijn lijst
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── HeroBanner.tsx
│   │   ├── ShowCard.tsx
│   │   ├── ShowCarousel.tsx
│   │   ├── VideoPlayer.tsx
│   │   └── WatchlistButton.tsx
│   └── lib/
│       ├── mock-data.ts  # 10 shows + 18 afleveringen (mock)
│       └── data.ts       # Data access layer
amplify.yml               # AWS Amplify build configuratie
```

## Data

De applicatie gebruikt momenteel **mock data** (`src/lib/mock-data.ts`) met 10 shows (series + films) en 18 afleveringen. Alle afbeeldingen komen van Picsum Photos en video's van publieke CDN-bronnen.

De data access layer (`src/lib/data.ts`) is opgezet zodat dit later eenvoudig vervangen kan worden door een echte database (bijv. Supabase).

## Lokaal draaien

```bash
cd stream-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment (AWS Amplify)

De `amplify.yml` in de root van het project configureert de build voor AWS Amplify. De Next.js app bevindt zich in de `stream-app/` submap, wat Amplify automatisch detecteert via dit bestand.

Bij elke push naar de `main` branch wordt automatisch een nieuwe versie gedeployed.

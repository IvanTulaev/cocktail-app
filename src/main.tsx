import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import {CocktailStore} from "./store/CocktailStore.ts";
import {RootStoreContext} from "./store/RootStoreContext.ts";
import {AppRouter} from "./AppRouter.tsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RootStoreContext value={new CocktailStore()}>
          <AppRouter />
      </RootStoreContext>
  </StrictMode>,
)
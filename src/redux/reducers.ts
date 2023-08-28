import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import {
  loadCharacters,
  loadDetailCharacters,
  loadFavorite,
  loadPagination,
} from '../api'

export interface EpisodeState {
  episodes: string[]
  loading: boolean
  favorites: string[]
}

const initialState = {
  episodes: [],
  loading: false,
  favorites: [],
}
/**
 * Carregar os personagens
 */
export const characterData = createAsyncThunk(
  'character/characterData',
  async (filters: object) => {
    const result = await loadCharacters(filters)
    return result
  },
)
/**
 * Carregar os detalhes do personagem (card)
 */
export const characterDataDetail = createAsyncThunk(
  'character/characterDataDetail',
  async (id: string) => {
    const result = await loadDetailCharacters(id)
    return result
  },
)
/**
 * Carregar a paginação
 */
export const loadCharacterPagination = createAsyncThunk(
  'character/loadCharacterPagination',
  async (num: number) => {
    const result = await loadPagination(num)
    return result
  },
)

/**
 * Carregar os favoritos
 */
export const loadCharacterFavorite = createAsyncThunk(
  'character/loadCharacterFavorite',
  async (num: number[]) => {
    const result = await loadFavorite(num)
    return result
  },
)
/**
 * Filtrar os favoritos
 */
const characters = createSlice({
  name: 'character',
  initialState,
  reducers: {
    addToFavorites: (state: EpisodeState, action: PayloadAction<string>) => {
      const episodeId = action.payload

      if (!state.favorites.includes(episodeId)) {
        state.favorites.push(episodeId)
      }
    },
    removeFromFavorites: (
      state: EpisodeState,
      action: PayloadAction<string>,
    ) => {
      const episodeId = action.payload

      state.favorites = state.favorites.filter((id) => id !== episodeId)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(characterData.pending, (state: EpisodeState) => {
        state.loading = true
        state.episodes = []
      })
      .addCase(
        characterData.fulfilled,
        (state: EpisodeState, action: PayloadAction<string[]>) => {
          state.loading = false
          state.episodes = action.payload || []
        },
      )
      .addCase(characterData.rejected, (state: EpisodeState) => {
        state.loading = false
        state.episodes = []
      })
      .addCase(characterDataDetail.pending, (state: EpisodeState) => {
        state.loading = true
        state.episodes = []
      })
      .addCase(
        characterDataDetail.fulfilled,
        (state: EpisodeState, action: PayloadAction<string[]>) => {
          state.loading = false
          state.episodes = action.payload || []
        },
      )
      .addCase(characterDataDetail.rejected, (state: EpisodeState) => {
        state.loading = false
        state.episodes = []
      })
      .addCase(loadCharacterPagination.pending, (state: EpisodeState) => {
        state.loading = true
        state.episodes = []
      })
      .addCase(
        loadCharacterPagination.fulfilled,
        (state: EpisodeState, action: PayloadAction<string[]>) => {
          state.loading = false
          state.episodes = action.payload || []
        },
      )
      .addCase(loadCharacterPagination.rejected, (state: EpisodeState) => {
        state.loading = false
        state.episodes = []
      })
      .addCase(loadCharacterFavorite.pending, (state: EpisodeState) => {
        state.loading = true
        state.episodes = []
      })
      .addCase(
        loadCharacterFavorite.fulfilled,
        (state: EpisodeState, action: PayloadAction<string[]>) => {
          state.loading = false
          state.episodes = action.payload || []
        },
      )
      .addCase(loadCharacterFavorite.rejected, (state: EpisodeState) => {
        state.loading = false
        state.episodes = []
      })
  },
})

export const { addToFavorites, removeFromFavorites } = characters.actions

export default characters.reducer

import { createSlice } from "@reduxjs/toolkit";

export const origenSlice = createSlice({
  name: "misValores",
  initialState: {
    categorias: '',
    miCarrito: [],
  },
  reducers: {
    guardarCategorias: (state, action) => {
      state.categorias = action.payload
    },
    comprar: (state, action) => {
      state.miCarrito = [...state.miCarrito, action.payload]
    },
    devolver: (state, action) => {
      state.miCarrito = state.miCarrito.filter((valor) => valor.producto !== action.payload)
    }
  }
})

export const { guardarCategorias, comprar, devolver } = origenSlice.actions
import { create } from 'zustand';

export const useMenu = create((set) => ({
  menu: false,
  showMenu: () => set((state) => ({ menu: true})),
  hideMenu: () => set((state) => ({ menu: false}))
}))

export const useSortBy = create((set) => ({
  sortBy: false,
  showSortBy: () => set((state) => ({ sortBy: true})),
  hideSortBy: () => set((state) => ({ sortBy: false}))
}))

/**
 * Create an array for storing filters and use length
 * to determine how many are active.
 * This way the type is inside the store and the amount
 * of filters can be know by the length of the array
 */
export const useFilter = create((set) => ({
  filter: false,
  filters: 0,
  showFilter: () => set(() => ({ filter: true })),
  hideFilter: () => set(() => ({ filter: false })),
  addFilter: () => set((state) => ({ filters: state.filters + 1 })),
  removeFilter: () => set((state) => ({ filters: state.filters - 1 }))
}))

export const useSave = create((set) => ({
  save: false,
  items: [],
  showSave: () => set((state) => ({ save: true })),
  hideSave: () => set((state) => ({ save: false })),
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (item) => set((state) => ({ items: state.items.filter((prev) => prev !== item) }))
}))

export const useCart = create((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (item) => set((state) => ({ items: state.items.filter((prev) => prev !== item) }))
}))
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

export const useFilter = create((set) => ({
  filter: false,
  showFilter: () => set((state) => ({ filter: true})),
  hideFilter: () => set((state) => ({ filter: false}))
}))
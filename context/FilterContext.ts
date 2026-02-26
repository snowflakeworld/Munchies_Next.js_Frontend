import { createContext } from 'react'

import { FilterList, PriceRangeList } from '@/types'

export const FilterContext = createContext<{
  categories: FilterList
  prices: PriceRangeList
  onCategoryClicked: (id: string) => void
  onTimeClicked: (id: number) => void
  onPriceClicked: (id: number) => void
  categoryId: string
  timeId: number
  priceId: number
} | null>(null)

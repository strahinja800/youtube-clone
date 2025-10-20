'use server'

import { db } from '@/lib/db'

export async function getCategories() {
  const data = await db.category.findMany()
  return data
}

'use server'

export async function getGreatings(name: string) {
  return `Hello: ${name}`
}

// TODO: Create script seed categories

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const categoryNames = [
  'Cars and vehicles',
  'Comedy',
  'Education',
  'Gaming',
  'Entertainment',
  'Film and animation',
  'How-to and style',
  'Music',
  'News and Politics',
  'People and blogs',
  'Pets and animals',
  'Science and technology',
  'Sports',
  'Travel and events',
]

async function main() {
  console.log('Seeding categories...')

  try {
    const values = categoryNames.map(name => ({
      name,
      description: `Videos related to ${name.toLowerCase()}`,
    }))

    await prisma.category.createMany({
      data: values,
    })

    console.log('Categories seeded successfully')
  } catch (error) {
    console.error('An error occured while seeding categories', error)
    process.exit(1)
  }
}

main()

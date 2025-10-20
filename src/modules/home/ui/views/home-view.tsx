import { Suspense } from 'react'
import { CategoriesSection } from '../sections/categories-section'

export default function HomeView() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className='max-w-[2400px] mx-auto mb-10 px-4 pt-2.5 flex flex-col gap-y-6'>
        <CategoriesSection />
      </div>
    </Suspense>
  )
}

import { getCategories } from '@/actions/getCategories'
import FilterCarousel from '@/components/filter-carousel'

export async function CategoriesSection() {
  const categories = await getCategories()
  const data = categories.map(({ name, id }) => ({
    value: id,
    label: name,
  }))
  console.log(data)

  return (
    // <div>
    //   {categories.map(category => (
    //     <li
    //       className='list-none'
    //       key={category.id}
    //     >
    //       {category.name}
    //     </li>
    //   ))}
    // </div>

    <FilterCarousel data={data}></FilterCarousel>
  )
}

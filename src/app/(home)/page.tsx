import { getGreatings } from '@/actions/getGreetings'

export default async function Home() {
  const greetingsMessage = await getGreatings('alal')

  return (
    <div>
      <h1>Component says: {greetingsMessage}</h1>
    </div>
  )
}

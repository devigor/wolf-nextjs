import Image from 'next/image'
import wolfLogo from '../../public/wolf.png'

export default function Home() {
  return (
    <main className="container max-w-full mx-auto">
      <div className="max-w-full h-screen flex justify-center items-center flex-col lg:flex-row">
        <Image
          src={wolfLogo}
          alt="A wolf image"
          placeholder="blur"
          width={200}
          height={200}
        />

        <h1 className="mt-4 font-mono text-6xl tracking-widest text-center uppercase">
          Wolf NextJs
        </h1>
      </div>
    </main>
  )
}

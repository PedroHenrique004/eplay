import { useEffect, useState } from 'react'

import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

// import Game from '../../models/Game'

// Aqui ficavam os antigos mocks de promocoes e em breve que foram substituidos pela API

// const promocoes: Game[] = [
//   {
//     id: 1,
//     category: 'Acão',
//     description: 'teste',
//     system: 'Windows',
//     title: 'Resident Evil 4',
//     infos: ['10%', 'R$ 250,00'],
//     image: resident
//   },
//   {
//     id: 2,
//     category: 'Acão',
//     description: 'teste',
//     system: 'PS5',
//     title: 'Resident Evil 4',
//     infos: ['5%', 'R$ 290,00'],
//     image: resident
//   },
//   {
//     id: 3,
//     category: 'Acão',
//     description: 'teste',
//     system: 'Windows',
//     title: 'Resident Evil 4',
//     infos: ['10%', 'R$ 250,00'],
//     image: resident
//   },
//   {
//     id: 4,
//     category: 'Acão',
//     description: 'teste',
//     system: 'Windows',
//     title: 'Resident Evil 4',
//     infos: ['10%', 'R$ 250,00'],
//     image: resident
//   }
// ]

// const emBreve: Game[] = [
//   {
//     id: 5,
//     category: 'RPG',
//     description: 'teste',
//     system: 'Windows',
//     title: 'Diablo 4',
//     infos: ['17/05'],
//     image: diablo
//   },
//   {
//     id: 6,
//     category: 'RPG',
//     description: 'teste',
//     system: 'Windows',
//     title: 'Diablo 4',
//     infos: ['17/05'],
//     image: zelda
//   },
//   {
//     id: 7,
//     category: 'RPG',
//     description: 'teste',
//     system: 'Windows',
//     title: 'Diablo 4',
//     infos: ['17/05'],
//     image: starWars
//   },
//   {
//     id: 8,
//     category: 'RPG',
//     description: 'teste',
//     system: 'Nintendo Switch',
//     title: 'Resident Evil 4',
//     infos: ['17/05'],
//     image: resident
//   }
// ]

// Trouxe a interface gallery la da componentes/gallery/index

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const [promocoes, setPromocoes] = useState<Game[]>([])
  const [emBreve, setEmBreve] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
      .then((res) => res.json())
      .then((res) => setPromocoes(res))
  }, [])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
      .then((res) => res.json())
      .then((res) => setEmBreve(res))
  }, [])

  return (
    <>
      <Banner />
      <ProductsList title="Promoções" background="gray" games={promocoes} />
      <ProductsList title="Em breve" background="black" games={emBreve} />
    </>
  )
}
export default Home

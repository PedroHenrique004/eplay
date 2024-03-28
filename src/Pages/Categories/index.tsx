import ProductsList from '../../components/ProductsList'
import { Game } from '../Home'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'
import { useEffect, useState } from 'react'

// const promocoes: Game[] = []

// const emBreve: Game[] = []

const Categories = () => {
  // As anotacoes de cima foram trocadas por esses states:

  const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  const [gamesEsportes, setGamesEsportes] = useState<Game[]>([])
  const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])
  const [gamesLuta, setGamesLuta] = useState<Game[]>([])
  const [gamesRPG, setGamesRPG] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGamesAcao(res))
  }, [])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGamesEsportes(res))
  }, [])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGamesSimulacao(res))
  }, [])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGamesLuta(res))
  }, [])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGamesRPG(res))
  }, [])

  return (
    <>
      <ProductsList title="Ação" background="black" games={gamesAcao} />
      <ProductsList title="Esportes" background="gray" games={gamesEsportes} />
      <ProductsList title="Luta" background="black" games={gamesLuta} />
      <ProductsList title="RPG" background="gray" games={gamesRPG} />
      <ProductsList
        title="Simulação"
        background="black"
        games={gamesSimulacao}
      />
    </>
  )
}

export default Categories

// Os mocks eram assim antes da API:

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

import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRPG } = useGetRpgGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: sportGames, isLoading: isLoadingSport } =
    useGetSportGamesQuery()

  return (
    <>
      <ProductsList
        title="Ação"
        background="black"
        games={actionGames}
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        title="Esportes"
        background="gray"
        games={sportGames}
        id="sports"
        isLoading={isLoadingSport}
      />
      <ProductsList
        title="Luta"
        background="black"
        games={fightGames}
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductsList
        title="RPG"
        background="gray"
        games={rpgGames}
        id="rpg"
        isLoading={isLoadingRPG}
      />
      <ProductsList
        title="Simulação"
        background="black"
        games={simulationGames}
        id="simulation"
        isLoading={isLoadingSimulation}
      />
    </>
  )
}

export default Categories

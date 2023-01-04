import axios from 'axios'
import * as XMLToJSON from './xml-to-json'

const BGG_API = 'https://boardgamegeek.com/xmlapi2/'
const SEARCH_QUERY = 'search?query='
const THING_QUERY = 'thing?id='
const TYPE = 'type=boardgame'
const STATS = 'stats=1'

export const getBoardByName = async (gameName: string): Promise<any> => {
  const {data} = await axios.get(`${BGG_API}${SEARCH_QUERY}${gameName}&${TYPE}`)

  const games = XMLToJSON.transform(data)

  const gamesWithRanking = await Promise.all(games.map(async ({id}: {id: string}) => getDetailsById(id)))
  const [firstGame] = gamesWithRanking

  return firstGame
}

export const getDetailsById = async (gameId: string): Promise<any> => {
  const {data} = await axios.get(`${BGG_API}${THING_QUERY}${gameId}&${TYPE}&${STATS}}`)

  const game = XMLToJSON.transform(data)

  return game
}

import axios from 'axios'
import * as XMLToJSON from './xml-to-json'

interface BgDetails {
  statistics: BgStatistics
}

type BgStatistics = {
  ratings: BgRatings
}

type BgRatings = {
  ranks: any
}

const BGG_API = 'https://boardgamegeek.com/xmlapi2/'
const SEARCH_QUERY = 'search?query='
const THING_QUERY = 'thing?id='
const COLLECTION_QUERY = 'collection?username='
const TYPE = 'type=boardgame'
const STATS = 'stats=1'
const BRIEF = 'brief=1'

export const getBoardByName = async (gameName: string): Promise<any> => {
  const {data} = await axios.get(`${BGG_API}${SEARCH_QUERY}${gameName}&${TYPE}`)

  const games = XMLToJSON.transform(data)

  const gamesWithRanking = await Promise.all(games.map(async ({id}:{id:number}) => getDetailsById(id)))
  const [firstGame] = gamesWithRanking

  return firstGame
}

export const getDetailsById = async (gameId: number): Promise<BgDetails> => {
  const {data} = await axios.get(`${BGG_API}${THING_QUERY}${gameId}&${TYPE}&${STATS}}`)

  const game = XMLToJSON.transform(data)

  return game
}

export const getUserCollection =  async (userName: string, limit: number): Promise<any> => {
  const {data, status} = await axios.get(`${BGG_API}${COLLECTION_QUERY}${userName}&${BRIEF}`)

  if (status === 202) {
    return getUserCollection(userName, limit)
  }

  const userCollection = XMLToJSON.transform(data)
  userCollection.length = limit

  return userCollection.map((game: Record<string, any>) => XMLToJSON.moveUnnamedProps(game))
}

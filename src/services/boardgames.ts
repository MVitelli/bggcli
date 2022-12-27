import axios from 'axios'
import * as parser from 'xml2json'

const BGG_URL = 'https://boardgamegeek.com/xmlapi2/'
const SEARCH_QUERY = 'search?query='
const TYPE = 'type=boardgame'
// const STATS = 'stats=1'

export const getBoardByName = async (gameName: string): Promise<any> => {
  const result = await axios.get(`${BGG_URL}${SEARCH_QUERY}${gameName}&${TYPE}`)
  const jsonResult = JSON.parse(parser.toJson(result.data))
  const [firstGame] = jsonResult.items.item

  return firstGame
}

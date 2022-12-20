import axios from 'axios'
import {parseStringPromise} from 'xml2js'

const BGG_URL = 'https://boardgamegeek.com/xmlapi2/'
const SEARCH_QUERY = 'search?query='
const TYPE_QUERY = 'type=boardgame'

const getBoardByName = async (gameName: string): Promise<any> => {
  const result = await axios.get(`${BGG_URL}${SEARCH_QUERY}${gameName}&${TYPE_QUERY}`)
  const jsonResult = await parseStringPromise(result.data)
  const [firstGame] = jsonResult.items.item
  console.log('firstGame', firstGame)

  return firstGame
}

getBoardByName('orleans')

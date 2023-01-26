import axios from 'axios'
import * as BoardgamesService from './boardgames'

interface Boardgame {
  name: string,
  href: string,
  yearPublished: number,
  id: number
}

type BgResponse = Boardgame & {
  ranking: number,
  score: number,
}

const BGG_URL = 'https://boardgamegeek.com/geeksearch.php'

const getBoardsByName = async (name: string) : Promise<Boardgame[]> => {
  const {data: {items}} = await axios.get(BGG_URL, {
    params: {
      action: 'search',
      objecttype: 'boardgame',
      q: name,
    },
  })

  return items
}

export const getBoardsTable = async (name: string) : Promise<any> => {
  const {data} = await axios.get(BGG_URL, {
    params: {
      action: 'search',
      q: name,
      objecttype: 'boardgame',
    },
  })

  return data
}

export const getBoardByNameFromWeb = async (boardName: string) : Promise<BgResponse> => {
  const [firstGame] = await getBoardsByName(boardName)
  const {name, id, href, yearPublished} = firstGame

  const {statistics} = await BoardgamesService.getDetailsById(id)
  const {ratings: {ranks: {rank: [generalRank]}}} = statistics
  const {value, bayesaverage} = generalRank

  return {name, id, href, yearPublished, ranking: value, score: bayesaverage}
}

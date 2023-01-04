import * as parser from 'xml2json'

export const transform = (data: string): any => {
  const jsonResult = JSON.parse(parser.toJson(data))

  const apiInfo = jsonResult.items.item

  return apiInfo
}


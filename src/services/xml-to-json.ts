import * as parser from 'xml2json'

const DEFAULT_KEY = '$t'

export const transform = (data: string): any => {
  const jsonResult: any = parser.toJson(data, {object: true})

  const apiInfo = jsonResult.items.item

  return apiInfo
}

export const moveUnnamedProps = (transformed: Record<string, any>): Record<string, unknown> => {
  for (const [key, value] of Object.entries(transformed)) {
    for (const [innerKey, innerValue] of Object.entries(value)) {
      if (innerKey === DEFAULT_KEY) {
        transformed[key] =  innerValue
      }
    }
  }

  return transformed
}

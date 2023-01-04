import {Command, Flags} from '@oclif/core'
import {getBoardByNameFromWeb} from '../services/scrapping'

export default class Search extends Command {
  static description = 'Search a boardgame by name'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  }

  static args = [{name: 'board', description: 'Boardgame name to search', required: true}]

  public async run(): Promise<void> {
    const {args} = await this.parse(Search)

    const {board} = args
    const boardGame = await getBoardByNameFromWeb(board)
    this.log(JSON.stringify(boardGame, null, 2))
  }
}

import {Command, Flags} from '@oclif/core'
import { getBoardByName } from '../services/boardgames'

export default class Search extends Command {
  static description = 'search a boardgame by name'

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
    const boardGame = await getBoardByName(board)
    this.log(boardGame)
  }
}

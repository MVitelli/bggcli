import {getUserCollection} from './../services/boardgames'
import {Command, Flags} from '@oclif/core'

export default class Collection extends Command {
  static description = 'Get user collection of games'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    limit: Flags.integer({char: 'l', description: 'limit the number of games', default: 10}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  }

  static args = [{name: 'user', description: 'username of collection owner', required: true}]

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Collection)

    const collection = await getUserCollection(args.user, flags.limit)

    this.log(JSON.stringify(collection, null, 2))
  }
}

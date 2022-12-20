oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g bggcli
$ bggcli COMMAND
running command...
$ bggcli (--version)
bggcli/0.0.0 darwin-x64 node-v16.18.1
$ bggcli --help [COMMAND]
USAGE
  $ bggcli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`bggcli hello PERSON`](#bggcli-hello-person)
* [`bggcli hello world`](#bggcli-hello-world)
* [`bggcli help [COMMAND]`](#bggcli-help-command)
* [`bggcli plugins`](#bggcli-plugins)
* [`bggcli plugins:install PLUGIN...`](#bggcli-pluginsinstall-plugin)
* [`bggcli plugins:inspect PLUGIN...`](#bggcli-pluginsinspect-plugin)
* [`bggcli plugins:install PLUGIN...`](#bggcli-pluginsinstall-plugin-1)
* [`bggcli plugins:link PLUGIN`](#bggcli-pluginslink-plugin)
* [`bggcli plugins:uninstall PLUGIN...`](#bggcli-pluginsuninstall-plugin)
* [`bggcli plugins:uninstall PLUGIN...`](#bggcli-pluginsuninstall-plugin-1)
* [`bggcli plugins:uninstall PLUGIN...`](#bggcli-pluginsuninstall-plugin-2)
* [`bggcli plugins update`](#bggcli-plugins-update)

## `bggcli hello PERSON`

Say hello

```
USAGE
  $ bggcli hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/mvitelli/bggcli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `bggcli hello world`

Say hello world

```
USAGE
  $ bggcli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ bggcli hello world
  hello world! (./src/commands/hello/world.ts)
```

## `bggcli help [COMMAND]`

Display help for bggcli.

```
USAGE
  $ bggcli help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for bggcli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.20/src/commands/help.ts)_

## `bggcli plugins`

List installed plugins.

```
USAGE
  $ bggcli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ bggcli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.8/src/commands/plugins/index.ts)_

## `bggcli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ bggcli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ bggcli plugins add

EXAMPLES
  $ bggcli plugins:install myplugin 

  $ bggcli plugins:install https://github.com/someuser/someplugin

  $ bggcli plugins:install someuser/someplugin
```

## `bggcli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ bggcli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ bggcli plugins:inspect myplugin
```

## `bggcli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ bggcli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ bggcli plugins add

EXAMPLES
  $ bggcli plugins:install myplugin 

  $ bggcli plugins:install https://github.com/someuser/someplugin

  $ bggcli plugins:install someuser/someplugin
```

## `bggcli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ bggcli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ bggcli plugins:link myplugin
```

## `bggcli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ bggcli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ bggcli plugins unlink
  $ bggcli plugins remove
```

## `bggcli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ bggcli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ bggcli plugins unlink
  $ bggcli plugins remove
```

## `bggcli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ bggcli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ bggcli plugins unlink
  $ bggcli plugins remove
```

## `bggcli plugins update`

Update installed plugins.

```
USAGE
  $ bggcli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->

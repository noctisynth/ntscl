/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export declare function defineCommand(options: Command): Command
export declare function run(cmd: Command, args?: Array<string> | undefined | null): void
export const VERSION: string
/**
 * Command context
 *
 * This is the context object that is passed to the command callback.
 */
export interface Context {
  /**
   * Parsed arguments
   *
   * This is a js object that contains the parsed arguments.
   * The keys of the object are the names of the arguments and
   * the values are the parsed values.
   */
  args: object
  /**
   * Raw arguments
   *
   * The raw arguments parsed by command line or manually given.
   */
  rawArgs: Array<string>
}
/** Command metadata */
export interface CommandMeta {
  /**
   * Command name
   *
   * This is the name of the command that will be used to call it from the CLI.
   * If the command is the main command, the name will be the name of the binary.
   * If the command is a subcommand, the name will be the name of the subcommand.
   */
  name?: string
  /**
   * CLI version
   *
   * This is optional and can be used to display the version of the CLI
   * when the command is called with the `--version` flag or `-V` option.
   *
   * If not provided, the CLI will not display the version and you can't
   * call the command with the `--version` flag or `-V` option.
   */
  version?: string
  /**
   * Command description
   *
   * Command description will be displayed in the help output.
   */
  about?: string
  /**
   * Enable styled mode
   *
   * Determines whether the CLI output should be displayed in the styled format.
   */
  styled?: boolean
}
export interface CommandOption {
  type?: 'positional' | 'flag' | 'option'
  parser?:
  | 'string'
  | 'str'
  | 'string[]'
  | 'str[]'
  | 'number'
  | 'boolean'
  | 'bool'
  short?: string
  long?: string
  alias?: Array<string>
  hiddenAlias?: Array<string>
  help?: string
  required?: boolean
  default?: string
  hidden?: boolean
}
/**
 * Command definition
 *
 * This is the object that defines a command.
 * It contains the metadata, options, and callback function.
 */
export interface Command {
  meta: CommandMeta
  options: Record<string, CommandOption>
  callback?: (ctx: Context) => void
  subcommands?: Record<string, Command>
}

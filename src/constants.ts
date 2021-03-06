import { handleCheerup } from './functions/handleCheerup';
import { handleEmoteOnlyMessage } from './functions/handleEmoteOnlyMessage';
import { handleHelpCommand } from './functions/handleHelpCommand';
import { handleLeaderboard } from './functions/handleLeaderboard';
import { handlePyramid } from './functions/handlePyramid';
import { handleSpeedrunSearch } from './functions/handleSpeedrunSearch';
import { ALLOWED_COMMANDS, CommandsObject, NIXXO_EMOTES, TWITCH_EMOTES } from './types';

export const TWITCH_USER_TAG = '@';
export const BOT_PREFIX = '$';
export const BOT_PREFIX_LENGTH = BOT_PREFIX.length;
export const SPACE = ' ';
export const MULTIPLIER_HELP_TEXT = 'You can add a multiplier separated by a space.';
export const NO_HELP_TEXT = `Whoops! Seems like that command doesn't exist! Try to use ${BOT_PREFIX}${ALLOWED_COMMANDS.HELP} for extra information!`;
export const EMOTE_LIMIT = 25;
export const PYRAMID_BASE_LIMIT = 5;
export const DEFAULT_PYRAMID_BASE = 3;

export const COMMANDS: CommandsObject = {
  [ALLOWED_COMMANDS.CHEER_UP]: {
    helpText: `Cheer Nixxo up by sending a ${NIXXO_EMOTES.PET_NIXXO} with a comforting sentence.`,
    handler: handleCheerup,
    emote: NIXXO_EMOTES.PET_NIXXO
  },
  [ALLOWED_COMMANDS.HELP]: {
    helpText: `You keep using this command. I don't think you know what it means... ${TWITCH_EMOTES.KAPPA} . Use with a command name to get information about a command.`,
    handler: handleHelpCommand
  },
  [ALLOWED_COMMANDS.JAM]: {
    helpText: `Jam it away with ${NIXXO_EMOTES.CAT_JAM} . ${MULTIPLIER_HELP_TEXT}`,
    handler: handleEmoteOnlyMessage,
    emote: NIXXO_EMOTES.CAT_JAM
  },
  [ALLOWED_COMMANDS.KISS]: {
    helpText: `Blow away some kisses ${NIXXO_EMOTES.KISS} . ${MULTIPLIER_HELP_TEXT} You can tag someone to kiss them!`,
    handler: handleEmoteOnlyMessage,
    emote: NIXXO_EMOTES.KISS
  },
  [ALLOWED_COMMANDS.PYRAMID]: {
    helpText: `Build a mighty pyramid of emotes! First parameter is the emote, second parameter is the base(amount of "steps") of the pyramid.`,
    handler: handlePyramid
  },
  [ALLOWED_COMMANDS.EMOTE]: {
    helpText: `Send any emote (that the bot user actually has). ${MULTIPLIER_HELP_TEXT}`,
    handler: handleEmoteOnlyMessage
  },
  [ALLOWED_COMMANDS.SEARCH_GAME]: {
    helpText: 'Search for a game in speedrun.com, you get a list of possible games to get the results for.',
    handler: handleSpeedrunSearch
  },
  [ALLOWED_COMMANDS.LEADERBOARD]: {
    helpText: 'Get a list of the top 10 results for a specific game',
    handler: handleLeaderboard
  },
  [ALLOWED_COMMANDS.WORLD_RECORD]: {
    helpText: 'Get a list of the top 10 results for a specific game',
    handler: handleLeaderboard
  }
};

export const PROXY_SEARCH_ROUTE = 'search';
export const PROXY_LEADERBOARD_ROUTE = 'get-leaderboard';
export const IGNORE_REGEX = /^\W/;
export const SPEEDRUN_BASE_URL = 'https://www.speedrun.com';
export const PROXY_URL = 'http://localhost';
const Thumbnail = require('./media/thumbnail.jpg');
import { IGameDef, IGameStatus } from 'gamesShared/definitions/game';
import { GameMode } from 'gamesShared/definitions/mode';
import instructions from './instructions.md';

export const secretcodesGameDef: IGameDef = {
  code: 'secretcodes',
  name: 'Secret Codes',
  contributors: ['JvSomeren', 'mateusazis'],
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.LocalFriend }, { mode: GameMode.OnlineFriend }],
  minPlayers: 4,
  maxPlayers: 20,
  description: 'Similar to Codenames',
  descriptionTag: `Play Secret Codes, a free online game\
 similar to the board game Codenames! You can play multi-player\
 from four and up to twenty players online!`,
  instructions: {
    videoId: 'zQVHkl8oQEU',
    text: instructions,
  },
  status: IGameStatus.PUBLISHED,
  config: () => import('./config'),
  customization: () => import('./customization'),
};

export default secretcodesGameDef;

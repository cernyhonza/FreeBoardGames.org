import { GameCustomization } from 'gamesShared/definitions/customization';
import slider from 'gamesShared/components/customization/Slider';
import { GameMode } from 'gamesShared/definitions/mode';

const MIN_VALUE = 1;
const MAX_VALUE = 8;

export interface QuickCustomizationState {
  difficulty: number;
}

const customization: GameCustomization = {
  renderQuick: ({ mode, currentValue, onChange }) => {
    if (mode != GameMode.AI) {
      return null;
    }
    const state = currentValue as QuickCustomizationState;
    return slider(MIN_VALUE, MAX_VALUE, state.difficulty, (difficulty) => {
      onChange({ difficulty });
    });
  },
};

export default customization;

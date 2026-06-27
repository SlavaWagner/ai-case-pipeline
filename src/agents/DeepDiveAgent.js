import chalk from 'chalk';
import { runDeepDive } from '../googleAds.js';

export default class DeepDiveAgent {
  constructor() {
    this.name = 'Deep-Dive Feedback Agent';
  }

  async run(winningWindow) {
    console.log(chalk.bold.blue(`\n[${this.name}] Conducting deep-dive feedback loops on Keywords, Assets, Conversions & ROAS...`));
    const deepDiveData = await runDeepDive(winningWindow);

    console.log(chalk.green(`✓ Keyword & Negative-Loop Analysis complete.`));
    console.log(chalk.green(`✓ Asset Performance & Conversion Hierarchy structured.`));
    console.log(chalk.bold.magenta(`✨ Hidden Detail Extracted: ${deepDiveData.targetRoasTrajectory.hiddenDetail}`));

    return deepDiveData;
  }
}

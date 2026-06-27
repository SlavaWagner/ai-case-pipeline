import chalk from 'chalk';
import { generateCaseContent } from '../aiEngine.js';

export default class CaseForgeAgent {
  constructor() {
    this.name = 'Case-Schmiede Agent';
  }

  async run(deepDiveData, accountName) {
    console.log(chalk.bold.blue(`\n[${this.name}] Forging complete Case Study, LinkedIn posts, Ads copy, Landingpage & Blog post...`));
    const caseBundle = await generateCaseContent(deepDiveData, accountName);

    console.log(chalk.green(`✓ Case Fließtext & Ausführlicher Report forged.`));
    console.log(chalk.green(`✓ 10x LinkedIn Posts with high-converting copy & chart suggestions forged.`));
    console.log(chalk.green(`✓ 10x Meta Ads & 10x Google Ads copy sets forged.`));
    console.log(chalk.green(`✓ Landingpage Copy & Detailed Blog post forged.`));

    return caseBundle;
  }
}

import chalk from 'chalk';
import { scanTimeframes } from '../googleAds.js';

export default class PeriodScannerAgent {
  constructor() {
    this.name = 'Period Scanner Agent';
  }

  async run(accountId) {
    console.log(chalk.bold.blue(`\n[${this.name}] Searching historical timeframes for breakthrough performance periods...`));
    const scanResult = await scanTimeframes(accountId);
    
    console.log(chalk.green(`✓ Scanned ${scanResult.scannedWindowsCount} timeframes.`));
    console.log(chalk.bold.yellow(`★ Breakthrough Window Identified: ${scanResult.winningWindow.period}`));
    console.log(chalk.cyan(`  - Spend: ${scanResult.winningWindow.spend} € | Revenue: ${scanResult.winningWindow.conversionValue} € | ROAS: ${scanResult.winningWindow.roas}x`));

    return scanResult.winningWindow;
  }
}

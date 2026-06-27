import chalk from 'chalk';
import { exportCaseToDesktop, saveCaseRecord } from '../storage.js';

export default class ExportAgent {
  constructor() {
    this.name = 'Export & Persistent Storage Agent';
  }

  async run(caseBundle) {
    console.log(chalk.bold.blue(`\n[${this.name}] Saving persistent record and exporting files to Desktop...`));
    
    const recordPath = saveCaseRecord(caseBundle);
    const desktopFolderPath = exportCaseToDesktop(caseBundle);

    console.log(chalk.green(`✓ Persistent record stored: ${recordPath}`));
    console.log(chalk.bold.green(`🚀 Case Bundle successfully exported to Desktop:`));
    console.log(chalk.underline.cyan(`   ${desktopFolderPath}`));

    return { recordPath, desktopFolderPath };
  }
}

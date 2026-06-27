#!/usr/bin/env node

import { Command } from 'commander';
import { input, select } from '@inquirer/prompts';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { getConfig, saveConfig } from '../src/config.js';
import { initStorage, listCases } from '../src/storage.js';
import PeriodScannerAgent from '../src/agents/PeriodScannerAgent.js';
import DeepDiveAgent from '../src/agents/DeepDiveAgent.js';
import CaseForgeAgent from '../src/agents/CaseForgeAgent.js';
import ExportAgent from '../src/agents/ExportAgent.js';

initStorage();

function getAsciiLogo() {
  const greenCube = chalk.hex('#1dd900');
  const cyanCube = chalk.hex('#06b6d4');
  const blueCube = chalk.hex('#4064d7');
  
  return [
    '',
    greenCube("             +---+ ") + cyanCube("     +---+ ") + blueCube("     +---+ "),
    greenCube("            /   /| ") + cyanCube("    /   /| ") + blueCube("    /   /| "),
    greenCube("           +---+ | ") + cyanCube("  +---+ | ") + blueCube("  +---+ | "),
    greenCube("           |   |/  ") + cyanCube("  |   |/  ") + blueCube("  |   |/  "),
    greenCube("           +---+   ") + cyanCube("  +---+   ") + blueCube("  +---+   "),
    blueCube("     +---+ ") + greenCube("     +---+ ") + blueCube("     +---+ "),
    blueCube("    /   /| ") + greenCube("    /   /| ") + blueCube("    /   /| "),
    blueCube("   +---+ | ") + greenCube("  +---+ | ") + blueCube("  +---+ | "),
    blueCube("   |   |/  ") + cyanCube("  |   |/  ") + blueCube("  |   |/  "),
    blueCube("   +---+   ") + greenCube("  +---+   ") + blueCube("  +---+   "),
    cyanCube("     +---+ ") + blueCube("     +---+ ") + greenCube("     +---+ "),
    cyanCube("    /   /| ") + blueCube("    /   /| ") + greenCube("    /   /| "),
    cyanCube("   +---+ | ") + blueCube("  +---+ | ") + greenCube("  +---+ | "),
    cyanCube("   |   |/  ") + blueCube("  |   |/  ") + greenCube("  |   |/  "),
    cyanCube("   +---+   ") + blueCube("  +---+   ") + greenCube("  +---+   "),
    '',
    chalk.bold.green('=== ai-case-pipeline - Autonomous AI Case Study & Ads Forge ==='),
    chalk.cyan('Optimized for Google Ads API & Antigravity CLI Architecture'),
    chalk.gray('Created with the help of the Google Antigravity CLI'),
    ''
  ].join('\n');
}

const program = new Command();

program
  .name('ai-case-pipeline')
  .description('Autonomous AI Case Forge for Google Ads Performance Analysis & Content Creation')
  .version('1.0.0');

program.addHelpText('before', getAsciiLogo());

async function runInteractiveDashboard() {
  console.clear();
  console.log(getAsciiLogo());
  console.log(chalk.bold.yellow('================ DASHBOARD & AVAILABLE COMMANDS ================'));
  console.log(chalk.cyan(' 1. run / analyze      - ') + chalk.white('Launch full Case Forge pipeline'));
  console.log(chalk.cyan(' 2. scan-periods       - ') + chalk.white('Scan historical date ranges for breakthrough periods'));
  console.log(chalk.cyan(' 3. deep-dive          - ') + chalk.white('Conduct Keyword, Asset & Conversion feedback loops'));
  console.log(chalk.cyan(' 4. setup              - ') + chalk.white('Configure Google Ads API credentials & AI settings'));
  console.log(chalk.cyan(' 5. status             - ') + chalk.white('Display system status & saved case records'));
  console.log(chalk.cyan(' 6. help / dashboard    - ') + chalk.white('Open this interactive dashboard screen'));
  console.log(chalk.yellow('=================================================================\n'));

  const action = await select({
    message: 'Please select a command to execute:',
    choices: [
      { name: '🚀 Launch Full Case Forge Pipeline (run)', value: 'run' },
      { name: '🔍 Scan Historical Periods (scan-periods)', value: 'scan-periods' },
      { name: '🧬 Execute Deep-Dive Analysis (deep-dive)', value: 'deep-dive' },
      { name: '⚙️ Configure Google Ads API (setup)', value: 'setup' },
      { name: '📊 View System Status (status)', value: 'status' },
      { name: '❌ Exit', value: 'exit' }
    ]
  });

  if (action === 'run') {
    await executePipeline();
  } else if (action === 'scan-periods') {
    const scanner = new PeriodScannerAgent();
    await scanner.run();
  } else if (action === 'deep-dive') {
    const scanner = new PeriodScannerAgent();
    const winningWindow = await scanner.run();
    const deepDive = new DeepDiveAgent();
    await deepDive.run(winningWindow);
  } else if (action === 'setup') {
    await executeSetup();
  } else if (action === 'status') {
    await showStatus();
  } else {
    console.log(chalk.gray('Goodbye!'));
  }
}

async function executeSetup() {
  console.log(chalk.bold.cyan('\n=== Google Ads API & Antigravity Setup ===\n'));
  const current = getConfig();

  const customerId = await input({ message: 'Google Ads Customer ID (e.g. 123-456-7890):', default: current.customerId });
  const developerToken = await input({ message: 'Google Ads Developer Token:', default: current.developerToken });
  const clientId = await input({ message: 'Google Ads Client ID:', default: current.clientId });
  const clientSecret = await input({ message: 'Google Ads Client Secret:', default: current.clientSecret });
  const refreshToken = await input({ message: 'Google Ads Refresh Token (or OAuth2):', default: current.refreshToken });
  const loginCustomerId = await input({ message: 'Manager Login Customer ID (Optional):', default: current.loginCustomerId || '' });

  const updated = saveConfig({
    customerId,
    developerToken,
    clientId,
    clientSecret,
    refreshToken,
    loginCustomerId
  });

  console.log(chalk.bold.green('\n✓ Configuration successfully saved to config.json!'));
}

async function executePipeline() {
  console.log(chalk.bold.magenta('\n=== LAUNCHING FULL AI CASE FORGE PIPELINE ===\n'));
  const config = getConfig();
  const accountName = await input({ message: 'Enter Account/Client Name for the Case Study:', default: 'Premium Ads Account' });

  const scanner = new PeriodScannerAgent();
  const winningWindow = await scanner.run(config.customerId);

  const deepDive = new DeepDiveAgent();
  const deepDiveData = await deepDive.run(winningWindow);

  const caseForge = new CaseForgeAgent();
  const caseBundle = await caseForge.run(deepDiveData, accountName);

  const exporter = new ExportAgent();
  await exporter.run(caseBundle);

  console.log(chalk.bold.yellow('\n🎉 AI CASE FORGE PIPELINE COMPLETED SUCCESSFULLY!'));
}

async function showStatus() {
  const config = getConfig();
  const cases = listCases();

  console.log(chalk.bold.cyan('\n=== SYSTEM STATUS & SAVED CASES ===\n'));
  console.log(chalk.white(`Google Ads Customer ID: ${config.customerId || 'Not configured'}`));
  console.log(chalk.white(`Developer Token status: ${config.developerToken ? 'Configured ✓' : 'Missing ❌'}`));
  console.log(chalk.white(`AI Engine Mode: ${config.aiEngine || 'antigravity'}`));
  console.log(chalk.white(`Saved Cases in storage/cases: ${cases.length}`));
  
  if (cases.length > 0) {
    console.log(chalk.yellow('\nRecent Saved Case Records:'));
    cases.slice(0, 5).forEach(c => {
      console.log(chalk.gray(`- [${c.accountName}] Period: ${c.timeframe} (File: ${c.filename})`));
    });
  }
  console.log('');
}

program
  .command('dashboard')
  .alias('help-menu')
  .description('Displays the interactive CLI start window and command dashboard')
  .action(runInteractiveDashboard);

program
  .command('setup')
  .description('Configures Google Ads API credentials and Antigravity CLI options')
  .action(executeSetup);

program
  .command('run')
  .alias('analyze')
  .description('Launches the full autonomous Case Forge pipeline')
  .action(executePipeline);

program
  .command('scan-periods')
  .description('Scans historical account data for breakthrough performance periods')
  .action(async () => {
    const scanner = new PeriodScannerAgent();
    await scanner.run();
  });

program
  .command('deep-dive')
  .description('Executes keyword, asset, and conversion feedback loops')
  .action(async () => {
    const scanner = new PeriodScannerAgent();
    const winningWindow = await scanner.run();
    const deepDive = new DeepDiveAgent();
    await deepDive.run(winningWindow);
  });

program
  .command('status')
  .description('Displays current system status and saved cases')
  .action(showStatus);

if (process.argv.length <= 2) {
  runInteractiveDashboard();
} else {
  program.parse(process.argv);
}

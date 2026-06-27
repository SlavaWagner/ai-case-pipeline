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
    chalk.gray('Powered by Google Antigravity CLI persistent AI agents'),
    ''
  ].join('\n');
}

const program = new Command();

program
  .name('ai-case-pipeline')
  .description('Autonomous AI Case-Schmiede for Google Ads Analysis & Content Creation')
  .version('1.0.0');

program.addHelpText('before', getAsciiLogo());

async function runInteractiveDashboard() {
  console.clear();
  console.log(getAsciiLogo());
  console.log(chalk.bold.yellow('================ DASHBOARD & VERFÜGBARE BEFEHLE ================'));
  console.log(chalk.cyan(' 1. run / analyze      - ') + chalk.white('Vollständigen Case-Schmiede-Prozess starten'));
  console.log(chalk.cyan(' 2. scan-periods       - ') + chalk.white('Historische Zeiträume nach Durchbrüchen absuchen'));
  console.log(chalk.cyan(' 3. deep-dive          - ') + chalk.white('Keyword-, Asset- & Conversion-Rückkopplung durchführen'));
  console.log(chalk.cyan(' 4. setup              - ') + chalk.white('Google Ads API Zugangsdaten & KI-Einstellungen konfigurieren'));
  console.log(chalk.cyan(' 5. status             - ') + chalk.white('Systemstatus & gespeicherte Cases anzeigen'));
  console.log(chalk.cyan(' 6. help / dashboard    - ') + chalk.white('Diesen Hilfebildschirm aufrufen'));
  console.log(chalk.yellow('=================================================================\n'));

  const action = await select({
    message: 'Bitte wählen Sie einen Befehl aus:',
    choices: [
      { name: '🚀 Vollständige Case-Schmiede starten (run)', value: 'run' },
      { name: '🔍 Zeiträume scannen (scan-periods)', value: 'scan-periods' },
      { name: '🧬 Deep-Dive Analyse (deep-dive)', value: 'deep-dive' },
      { name: '⚙️ Google Ads API Setup (setup)', value: 'setup' },
      { name: '📊 Systemstatus anzeigen (status)', value: 'status' },
      { name: '❌ Beenden', value: 'exit' }
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
    console.log(chalk.gray('Auf Wiedersehen!'));
  }
}

async function executeSetup() {
  console.log(chalk.bold.cyan('\n=== Google Ads API & Antigravity Setup ===\n'));
  const current = getConfig();

  const customerId = await input({ message: 'Google Ads Customer ID (z.B. 123-456-7890):', default: current.customerId });
  const developerToken = await input({ message: 'Google Ads Developer Token:', default: current.developerToken });
  const clientId = await input({ message: 'Google Ads Client ID:', default: current.clientId });
  const clientSecret = await input({ message: 'Google Ads Client Secret:', default: current.clientSecret });
  const refreshToken = await input({ message: 'Google Ads Refresh Token (oder OAuth2):', default: current.refreshToken });
  const loginCustomerId = await input({ message: 'Manager Login Customer ID (Optional):', default: current.loginCustomerId || '' });

  const updated = saveConfig({
    customerId,
    developerToken,
    clientId,
    clientSecret,
    refreshToken,
    loginCustomerId
  });

  console.log(chalk.bold.green('\n✓ Konfiguration erfolgreich gespeichert in config.json!'));
}

async function executePipeline() {
  console.log(chalk.bold.magenta('\n=== STARTE FULL AI CASE-SCHMIEDE PIPELINE ===\n'));
  const config = getConfig();
  const accountName = await input({ message: 'Name des Kunden / Accounts für die Case Study:', default: 'Premium Business Account' });

  const scanner = new PeriodScannerAgent();
  const winningWindow = await scanner.run(config.customerId);

  const deepDive = new DeepDiveAgent();
  const deepDiveData = await deepDive.run(winningWindow);

  const caseForge = new CaseForgeAgent();
  const caseBundle = await caseForge.run(deepDiveData, accountName);

  const exporter = new ExportAgent();
  await exporter.run(caseBundle);

  console.log(chalk.bold.yellow('\n🎉 AI CASE-SCHMIEDE PIPELINE ERFOLGREICH ABGESCHLOSSEN!'));
}

async function showStatus() {
  const config = getConfig();
  const cases = listCases();

  console.log(chalk.bold.cyan('\n=== SYSTEMSTATUS & GESPEICHERTE CASES ===\n'));
  console.log(chalk.white(`Google Ads Customer ID: ${config.customerId || 'Nicht konfiguriert'}`));
  console.log(chalk.white(`Developer Token status: ${config.developerToken ? 'Konfiguriert ✓' : 'Fehlt ❌'}`));
  console.log(chalk.white(`AI Engine Mode: ${config.aiEngine || 'antigravity'}`));
  console.log(chalk.white(`Gespeicherte Cases in storage/cases: ${cases.length}`));
  
  if (cases.length > 0) {
    console.log(chalk.yellow('\nLetzte gespeicherte Case Records:'));
    cases.slice(0, 5).forEach(c => {
      console.log(chalk.gray(`- [${c.accountName}] Zeitraum: ${c.timeframe} (Datei: ${c.filename})`));
    });
  }
  console.log('');
}

program
  .command('dashboard')
  .alias('help-menu')
  .description('Zeigt das interaktive CLI-Startfenster und die Befehlsübersicht')
  .action(runInteractiveDashboard);

program
  .command('setup')
  .description('Richtet Google Ads API Zugangsdaten und Antigravity CLI Optionen ein')
  .action(executeSetup);

program
  .command('run')
  .alias('analyze')
  .description('Startet die vollständige autonome Case-Schmiede Pipeline')
  .action(executePipeline);

program
  .command('scan-periods')
  .description('Sucht in historischen Daten nach Gewinn-Zeiträumen')
  .action(async () => {
    const scanner = new PeriodScannerAgent();
    await scanner.run();
  });

program
  .command('deep-dive')
  .description('Führt Keyword-, Asset- und Conversion-Deep-Dive durch')
  .action(async () => {
    const scanner = new PeriodScannerAgent();
    const winningWindow = await scanner.run();
    const deepDive = new DeepDiveAgent();
    await deepDive.run(winningWindow);
  });

program
  .command('status')
  .description('Zeigt den aktuellen Systemstatus an')
  .action(showStatus);

if (process.argv.length <= 2) {
  runInteractiveDashboard();
} else {
  program.parse(process.argv);
}

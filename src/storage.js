import fs from 'fs';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STORAGE_DIR = path.join(__dirname, '../storage');
const CASES_DIR = path.join(STORAGE_DIR, 'cases');
const LOGS_DIR = path.join(STORAGE_DIR, 'logs');

/**
 * Initializes required directories.
 */
export function initStorage() {
  if (!fs.existsSync(STORAGE_DIR)) fs.mkdirSync(STORAGE_DIR, { recursive: true });
  if (!fs.existsSync(CASES_DIR)) fs.mkdirSync(CASES_DIR, { recursive: true });
  if (!fs.existsSync(LOGS_DIR)) fs.mkdirSync(LOGS_DIR, { recursive: true });
}

/**
 * Saves a completed case analysis object locally.
 */
export function saveCaseRecord(caseData) {
  initStorage();
  const filename = `case_${Date.now()}_${(caseData.accountName || 'account').replace(/\s+/g, '_')}.json`;
  const filePath = path.join(CASES_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(caseData, null, 2), 'utf-8');
  return filePath;
}

/**
 * Lists saved case records.
 */
export function listCases() {
  initStorage();
  const files = fs.readdirSync(CASES_DIR).filter(f => f.endsWith('.json'));
  return files.map(file => {
    const content = JSON.parse(fs.readFileSync(path.join(CASES_DIR, file), 'utf-8'));
    return {
      filename: file,
      accountName: content.accountName || 'Unknown Account',
      timeframe: content.timeframe || 'N/A',
      createdAt: content.createdAt || file
    };
  });
}

/**
 * Exports generated case files directly to the user's Desktop directory.
 */
export function exportCaseToDesktop(caseBundle, customSubfolderName) {
  const homeDir = os.homedir();
  const desktopDir = path.join(homeDir, 'Desktop');
  
  const targetFolderName = customSubfolderName || `Case_Study_${caseBundle.accountName.replace(/\s+/g, '_')}_${Date.now()}`;
  const exportDir = path.join(desktopDir, 'Case_Studies', targetFolderName);

  if (!fs.existsSync(exportDir)) {
    fs.mkdirSync(exportDir, { recursive: true });
  }

  // File 1: Case als Fließtext
  fs.writeFileSync(
    path.join(exportDir, '01_Case_Fliesstext.md'),
    caseBundle.fliesstext || '# Case Study Fließtext\n\nKein Text generiert.',
    'utf-8'
  );

  // File 2: Ausführlicher Report
  fs.writeFileSync(
    path.join(exportDir, '02_Ausfuehrlicher_Report.md'),
    caseBundle.report || '# Ausführlicher Analytics Report\n\nKein Report generiert.',
    'utf-8'
  );

  // File 3: 10 LinkedIn-Post-Texte
  fs.writeFileSync(
    path.join(exportDir, '03_LinkedIn_Posts_10x.md'),
    caseBundle.linkedinPosts || '# 10x LinkedIn Posts\n\nKeine Posts generiert.',
    'utf-8'
  );

  // File 4: 10 Meta Ads & 10 Google Ads Anzeigentexte
  fs.writeFileSync(
    path.join(exportDir, '04_Meta_Google_Ads_Texts.md'),
    caseBundle.adsTexts || '# Meta & Google Ads Copywriting\n\nKeine Anzeigentexte generiert.',
    'utf-8'
  );

  // File 5: Landingpage-Text mit ausführlichem Blogartikel
  fs.writeFileSync(
    path.join(exportDir, '05_Landingpage_Blogartikel.md'),
    caseBundle.landingpageBlog || '# Landingpage & Blogartikel\n\nKein Content generiert.',
    'utf-8'
  );

  return exportDir;
}

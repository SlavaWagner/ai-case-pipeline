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
 * Initializes required storage directories.
 */
export function initStorage() {
  if (!fs.existsSync(STORAGE_DIR)) fs.mkdirSync(STORAGE_DIR, { recursive: true });
  if (!fs.existsSync(CASES_DIR)) fs.mkdirSync(CASES_DIR, { recursive: true });
  if (!fs.existsSync(LOGS_DIR)) fs.mkdirSync(LOGS_DIR, { recursive: true });
}

/**
 * Saves a completed case analysis record locally.
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

  // File 1: Executive Case Overview Narrative
  fs.writeFileSync(
    path.join(exportDir, '01_Case_Study_Overview.md'),
    caseBundle.fliesstext || '# Case Study Overview\n\nNo content generated.',
    'utf-8'
  );

  // File 2: Comprehensive Analytics Report
  fs.writeFileSync(
    path.join(exportDir, '02_Comprehensive_Analytics_Report.md'),
    caseBundle.report || '# Comprehensive Analytics Report\n\nNo content generated.',
    'utf-8'
  );

  // File 3: 10x LinkedIn Posts
  fs.writeFileSync(
    path.join(exportDir, '03_LinkedIn_Posts_10x.md'),
    caseBundle.linkedinPosts || '# 10x LinkedIn Posts\n\nNo content generated.',
    'utf-8'
  );

  // File 4: Meta & Google Ads Copywriting
  fs.writeFileSync(
    path.join(exportDir, '04_Meta_Google_Ads_Copywriting.md'),
    caseBundle.adsTexts || '# Meta & Google Ads Copywriting\n\nNo content generated.',
    'utf-8'
  );

  // File 5: Landingpage Copy & Blog Implementation Guide
  fs.writeFileSync(
    path.join(exportDir, '05_Landingpage_Blog_Guide.md'),
    caseBundle.landingpageBlog || '# Landingpage Copy & Blog Guide\n\nNo content generated.',
    'utf-8'
  );

  return exportDir;
}

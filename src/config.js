import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CONFIG_PATH = path.join(__dirname, '../config.json');

/**
 * Gets the current configuration.
 */
export function getConfig() {
  try {
    if (fs.existsSync(CONFIG_PATH)) {
      const data = fs.readFileSync(CONFIG_PATH, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Error reading config.json:', err.message);
  }
  return {
    customerId: '',
    developerToken: '',
    clientId: '',
    clientSecret: '',
    refreshToken: '',
    loginCustomerId: '',
    aiEngine: 'antigravity',
    exportPath: 'Desktop/Case_Studies'
  };
}

/**
 * Saves updated configuration.
 */
export function saveConfig(newConfig) {
  try {
    const current = getConfig();
    const updated = { ...current, ...newConfig };
    fs.writeFileSync(CONFIG_PATH, JSON.stringify(updated, null, 2), 'utf-8');
    return updated;
  } catch (err) {
    console.error('Error saving config.json:', err.message);
    throw err;
  }
}

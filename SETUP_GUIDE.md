# SETUP GUIDE: ai-case-pipeline

Dieser Leitfaden beschreibt die Einrichtung und Inbetriebnahme des `ai-case-pipeline` KI-Agents für die Antigravity CLI.

---

## 1. Voraussetzungen
- Node.js (v18 oder höher)
- Google Antigravity CLI Environment
- Google Ads API Zugangsdaten (MCC / Customer Account)

---

## 2. Google Ads API Einrichtung
Starten Sie den interaktiven Setup-Prozess in Ihrer Konsole:
```bash
ai-case-pipeline setup
```
Sie werden nach folgenden Angaben gefragt:
- **Google Ads Customer ID**: Ihre 10-stellige Kunden-ID (z.B. `123-456-7890`)
- **Developer Token**: Entwickler-Token aus Ihrem Google Ads Verwaltungskonto (MCC)
- **Client ID & Client Secret**: Aus der Google Cloud Console (OAuth 2.0 Credentials)
- **Refresh Token**: Gültiges Refresh Token für den API-Zugriff
- **Manager Login Customer ID**: (Optional) Falls Zugriff über ein MCC erfolgt

Die Zugangsdaten werden sicher in `config.json` abgespeichert.

---

## 3. Ausführen der Case-Schmiede
Um den vollständigen Prozess zu starten:
```bash
ai-case-pipeline run
```
Der Agent führt Sie schrittweise durch den Prozess und legt das fertige Case-Paket direkt auf Ihrem Desktop unter `Desktop/Case_Studies/Case_Study_<AccountName>_<Timestamp>` ab.

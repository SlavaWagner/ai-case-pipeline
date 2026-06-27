# SETUP GUIDE: ai-case-pipeline

This guide provides instructions for configuring and executing the `ai-case-pipeline` AI agent within the Antigravity CLI environment.

*Created with the help of the Google Antigravity CLI.*

---

## 1. Prerequisites
- **Node.js** (v18 or higher)
- **Google Antigravity CLI Environment**
- **Google Ads API Credentials** (MCC Developer Token, OAuth 2.0 Client ID, Client Secret, Refresh Token, Customer ID)

---

## 2. Interactive Google Ads API Setup
Launch the interactive configuration wizard in your terminal:
```bash
ai-case-pipeline setup
```
You will be guided through setting up the required credentials:
- **Google Ads Customer ID**: Your 10-digit customer account ID (e.g., `123-456-7890`)
- **Developer Token**: API Center Developer Token from your Google Ads Manager Account (MCC)
- **Client ID & Client Secret**: OAuth 2.0 Desktop credentials generated in Google Cloud Console
- **Refresh Token**: Valid OAuth 2.0 Refresh Token for API authentication
- **Manager Login Customer ID**: (Optional) Required if accessing client accounts through a top-level Manager Account

Credentials are stored securely in `config.json`.

---

## 3. Running the Case Forge Pipeline
To launch the automated scanning, deep-dive analysis, and marketing asset generation:
```bash
ai-case-pipeline run
```
The agent will execute all analysis stages and deploy the complete marketing package directly to your Desktop under `Desktop/Case_Studies/Case_Study_<AccountName>_<Timestamp>`.

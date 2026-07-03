# SETUP GUIDE: ai-case-pipeline

This guide provides instructions for configuring and executing the `ai-case-pipeline` AI agent within the Antigravity CLI environment.

*Created with the help of the Google Antigravity CLI.*

## Crucial Requirement: Antigravity CLI

This tool is designed to be executed directly inside the **Antigravity CLI** environment. It utilizes the Antigravity Agent Bridge to process AI completions.

Before configuring or running the pipeline, ensure that:
1. **Antigravity** is installed on your machine.
2. The Antigravity CLI has been activated. Run the following command in your terminal to initialize and activate it:
   ```bash
   agy
   ```
If the Antigravity CLI is not active (`agy`), the AI completions will fail or prompt for manual bridge copies. Always start the tool from within an activated Antigravity CLI terminal.

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

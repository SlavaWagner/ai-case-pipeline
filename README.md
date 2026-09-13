# ai-case-pipeline 🚀
> Autonomous AI Case Study Forge & Google Ads Performance Analytics Agent

`ai-case-pipeline` is an autonomous AI agent developed for the Antigravity CLI. It searches Google Ads accounts for breakthrough historical performance windows, conducts deep-dive feedback loops on keywords, assets, conversion value hierarchies, and target ROAS trajectories, and automatically forges high-converting marketing bundles directly onto your Desktop.

*Created with the help of the Google Antigravity CLI.*

> [!IMPORTANT]
> **Prerequisite for AI Processing:**
> Please start Google Antigravity beforehand using the command **`agy`** in your console!
> Interactive chat sessions, asset generation workflows, and AI processing run exclusively **INSIDE the Antigravity CLI**. In a standard terminal shell outside Antigravity, no AI processing takes place, and static execution outputs are intercepted with a guidance notice.

---

## 🌟 Key Features

1. **Integrated Google Ads API Setup**: Interactive CLI setup for Developer Token, Client ID, Client Secret, Refresh Token, Customer ID, and Manager Login ID.
2. **Antigravity CLI Architecture**: All AI content generation and strategic synthesis execute directly via the Antigravity CLI infrastructure without requiring external third-party API keys.
3. **Interactive Terminal Dashboard**: Complete CLI-native interactive start window and command dashboard (no browser required).
4. **Breakthrough Period Scanner**: Algorithmic scan across historical account performance windows to detect revenue and ROAS breakthrough spikes.
5. **Deep-Dive Feedback Engine**: Granular analysis of high-performing keywords, negative keyword loops, asset headlines, conversion hierarchies, and target ROAS optimizations.
6. **Automated Desktop Asset Export**: Generates 5 ready-to-use marketing documents in `Desktop/Case_Studies`:
   - `01_Case_Study_Overview.md` (Full executive case study narrative)
   - `02_Comprehensive_Analytics_Report.md` (In-depth architecture & performance report)
   - `03_LinkedIn_Posts_10x.md` (10 viral LinkedIn post copy sets with chart suggestions)
   - `04_Meta_Google_Ads_Copywriting.md` (10 Meta Ads & 10 Google Ads copy sets)
   - `05_Landingpage_Blog_Guide.md` (Landing page copy & comprehensive step-by-step implementation blog post)

---

## 🔍 Detailed Search & Operational Methodology

The `ai-case-pipeline` agent operates through a multi-stage autonomous pipeline designed to replicate top-tier performance marketing auditing and copywriting workflows:

```
[Account Data] ➔ [1. Period Scanner] ➔ [2. Deep-Dive Engine] ➔ [3. Case Forge] ➔ [4. Desktop Export]
```

### 1. Historical Period Scanning
The agent algorithmically evaluates historical account performance across multiple date windows (e.g., quarterly, monthly, or campaign milestone ranges). It calculates cost-per-acquisition (CPA), conversion value, and return on ad spend (ROAS) to isolate the exact breakthrough period ("Winning Window") where profitability peaked.

### 2. Deep-Dive Feedback Loops
Once the winning window is identified, the agent runs four interconnected feedback loops:
- **Keyword & Negative Loop Analysis**: Extracts exact-match and phrase-match driver keywords while identifying necessary negative keyword exclusions to eliminate ad spend waste.
- **Asset Performance Evaluation**: Analyzes headline and description combinations in Responsive Search Ads (RSAs) and visual assets to identify the winning positioning frames.
- **Conversion Value Hierarchy**: Evaluates how primary conversion actions (e.g., Qualified Appointments), secondary actions (e.g., Content Downloads), and micro-conversions (e.g., High-Intent Page Views) were weighted to train the Google Ads smart bidding algorithm.
- **Target ROAS & Hidden Detail ("The Secret Sauce")**: Traces the step-by-step adjustment of target ROAS bids and extracts the unique technical lever (such as Offline Conversion Tracking or custom intent signals) that drove the account's unique performance.

### 3. Case Forging & Asset Generation
Using strategic marketing frameworks, the agent synthesizes the raw data into polished multi-channel collateral. It creates structured narratives, LinkedIn posts with copywriting hooks and visual chart recommendations, responsive ad copy sets, and an instructional blog post detailing how to replicate the setup.

### 4. Desktop File Deployment
The generated assets are packaged and deployed into a dedicated subfolder on your Desktop (`Desktop/Case_Studies/Case_Study_<AccountName>_<Timestamp>`), ensuring instant availability for client presentation or content publishing.

---

## 🔑 Google Ads API Authentication & Prerequisites Guide

To connect `ai-case-pipeline` to live Google Ads accounts, you must configure Google Ads API credentials. Below is the step-by-step prerequisite and setup guide.

### Prerequisites (What You Need Before Setup)
1. **Google Ads Manager Account (MCC)**: An MCC account is required to generate a Developer Token.
2. **Developer Token**: Obtained from your Google Ads MCC account under *Tools & Settings ➔ API Center*. (A Test Account token or Basic Access token is sufficient).
3. **Google Cloud Project**: A project created in the [Google Cloud Console](https://console.cloud.google.com/) with the **Google Ads API** enabled.
4. **OAuth 2.0 Client Credentials**: A Desktop Application OAuth 2.0 Client ID and Client Secret created inside your Google Cloud Project.
5. **OAuth 2.0 Refresh Token**: A valid refresh token authorizing your application to access Google Ads data on behalf of your account.

### Step-by-Step API Setup Process

#### Step 1: Enable Google Ads API in Google Cloud
1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Select or create a project.
3. Navigate to **APIs & Services ➔ Library**.
4. Search for **Google Ads API** and click **Enable**.

#### Step 2: Create OAuth 2.0 Client Credentials
1. In Google Cloud Console, navigate to **APIs & Services ➔ Credentials**.
2. Click **Create Credentials ➔ OAuth client ID**.
3. Select **Desktop app** as the Application type.
4. Name your credential (e.g., `Antigravity CLI Agent`) and click **Create**.
5. Note down your **Client ID** and **Client Secret**.

#### Step 3: Configure Credentials in `ai-case-pipeline`
Run the built-in interactive setup wizard directly in your terminal:
```bash
ai-case-pipeline setup
```
You will be prompted to enter your credentials:
```
? Google Ads Customer ID (e.g. 123-456-7890): 123-456-7890
? Google Ads Developer Token: your_developer_token
? Google Ads Client ID: your_client_id.apps.googleusercontent.com
? Google Ads Client Secret: your_client_secret
? Google Ads Refresh Token (or OAuth2): your_refresh_token
? Manager Login Customer ID (Optional): 987-654-3210
```
Your inputs are securely saved locally to `config.json`.

---

## 🛠 CLI & Agent Command Reference

Alle Befehle werden innerhalb der Google Antigravity CLI (`agy`) ausgeführt:

| Befehl | Argumente / Optionen | Kurzbeschreibung |
| :--- | :--- | :--- |
| `ai-case-pipeline run`<br>*(Alias: `analyze`)* | Keine *(interaktive Abfrage des Account-Namens)* | Startet die vollständige 4-Agenten Case Forge Pipeline: Historischer Scan, Identifikation des Breakthrough-Fensters, Deep-Dive Analyse und automatische Erstellung von 5 Marketing-Assets auf dem Desktop. |
| `ai-case-pipeline scan-periods` | Keine | Führt einen isolierten Scan über historische Leistungszeiträume des Google Ads Accounts aus und ermittelt das profitabelste "Winning Window". |
| `ai-case-pipeline deep-dive` | Keine | Führt granulare Feedback-Loops auf Gewinner-Keywords, Negative-Listen, Asset-Headlines und Conversion-Hierarchien durch. |
| `ai-case-pipeline dashboard`<br>*(Alias: `help-menu`)* | Keine | Öffnet das interaktive Terminal-Dashboard zur schnellen Ausführung sämtlicher Pipeline-Aktionen ohne Browser. |
| `ai-case-pipeline status` | Keine | Zeigt den aktuellen System- und API-Status sowie die Liste aller bisher in `storage/cases/` abgelegten Fallstudien an. |
| `ai-case-pipeline setup` | Keine | Interaktiver Einrichtungsassistent zur Konfiguration von Google Ads API Credentials (Customer ID, Developer Token, OAuth Client ID & Secret, Refresh Token). |

### Beteiligte KI-Agenten

*   **`PeriodScannerAgent`**: Analysiert historische Performance-Streams (CPA, Conversion Value, ROAS) zur mathematischen Identifikation profitabler Breakthrough-Zeitfenster.
*   **`DeepDiveAgent`**: Untersucht Keywords, Suchbegriffe, RSA-Assets und Conversion-Hierarchien auf kausale Erfolgstreiber ("The Secret Sauce").
*   **`CaseForgeAgent`**: Synthetisiert die quantitativen Rohdaten in hochkonvertierende Marketing-Assets und überzeugende B2B-Narrative.
*   **`ExportAgent`**: Exportiert alle 5 fertigen Dokumente (Case Study, Report, 10x LinkedIn Posts, Ad Copy Sets, Blog Guide) direkt in den Desktop-Ordner `Desktop/Case_Studies/`.

#### Anwendungsbeispiele:

```bash
# 1. Vollständige Case Forge Pipeline ausführen:
ai-case-pipeline run

# 2. Interaktives Menü öffnen:
ai-case-pipeline dashboard

# 3. Nur Breakthrough-Perioden im Account scannen:
ai-case-pipeline scan-periods

# 4. Status und gespeicherte Cases anzeigen:
ai-case-pipeline status
```

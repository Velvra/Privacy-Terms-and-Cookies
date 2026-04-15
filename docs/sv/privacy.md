# <i class="fa-solid fa-lock" style="color: var(--velvra-primary); margin-right: 8px;"></i> Integritetspolicy

**Ikraftträdande:** 15 april 2026  
**Senast uppdaterad:** 15 april 2026

Denna integritetspolicy förklarar vilka uppgifter Velvra samlar in, hur vi använder dem och dina rättigheter.

### 1. Uppgifter vi samlar in

Vi samlar in minimalt med data som krävs för att botens funktioner ska fungera. All data hämtas direkt från Discord API eller din användning av kommandon.

#### 1.1 Användardata
| Datapunkt | Syfte | Lagringstid |
|---|---|---|
| **Discord Användar-ID** | Länkar profil, XP, och ekonomi | Tills du begär radering |
| **XP och Nivå-framsteg** | Möjliggör nivåsystem och uppdrag | Permanent |
| **Ekonomi och Transaktioner** | Spårar mynt, överföringar | Permanent |
| **Märken och Rykte** | Spårar prestationer och profilstatus | Permanent |
| **Notifikationsval** | Respekterar DM-meddelanden | Permanent |
| **Premium- & Blacklist-status** | Tillgång till premiumfunktioner och missbruk | Permanent |

#### 1.2 Serverdata (Guild)
| Datapunkt | Syfte | Lagringstid |
|---|---|---|
| **Server-ID och Ägar-ID** | Identifierar konfigurationsägaren | Tills boten sparkas ut |
| **Språk och Dialekt** | Rätt tal anpassat lokalt | Permanent |
| **Custom Prefix** | Egna kommandon | Permanent |
| **Premium-status** | Tillgång till exklusiva premiumfunktioner | Permanent |

#### 1.3 Modereringsdata
| Datapunkt | Syfte | Lagringstid |
|---|---|---|
| **Varningar** (Guild ID, User ID, Reason) | Modereringshistorik | Permanent; kan tas bort mjukt |
| **Skyddskonfiguration** (Anti-Raid/Spam) | Säkra server-miljöer | Permanent |
| **Eventlogg-kanaler** | Omdirigera auditloggar | Permanent |

#### 1.5 Velvra AI Data
När du använder **Velvra AI** (Premiumfunktion):
- **Konversationshistorik**: De sista 20 meddelandena lagras lokalt i en JSON-fil för att behålla sammanhanget. **Lagras INTE i raderbara databaser** över tid.
- AI-anrop går genom en **lokalt hostad Ollama-server**.
- Inga data skickas någonsin till tredje part (som OpenAI). Bildbilagor omvandlas till base64, analyseras och försvinner.

#### 1.6 Data vi INTE samlar in
- <i class="fa-solid fa-xmark" style="color: #f87171; margin-right: 4px;"></i> Meddelandets innehåll (utom i premium-AI konversationer).
- <i class="fa-solid fa-xmark" style="color: #f87171; margin-right: 4px;"></i> Direktmeddelanden (DMs), e-post, IP-adresser eller ditt riktiga namn.
- <i class="fa-solid fa-xmark" style="color: #f87171; margin-right: 4px;"></i> Ljud- eller röstdata.

### 2. Hur vi använder din data

Vi använder datan **uteslutande** för att:
- Tillhandahålla funktioner (nivåer, ekonomi, moderering).
- Personifiera funktioner och AI.
- Förhindra missbruk (blacklists).

Vi säljer, lånar ut eller delar **ALDRIG** din data med utomstående tredje parter för skum marknadsföring. All data används internt.

### 3. Datalagring & Säkerhet
- **Databas:** MongoDB med end-to-end TLS-kryptering.
- **Cache:** Redis via säkra `rediss://` foder.
- Endast Creative Framework-teamet har högsta säkerhetsåtkomst till strukturerna.

### 5. Dina rättigheter

Du har full makt över din data att:
- Begära ut informationen.
- Begära omedelbar **Radering** av alla uppgifter relaterat till dig.
Detta sker genom att kontakta oss via vår support-server.

### 6. Barns integritet
Vi lagrar aldrig avsiktligt information ifrån barn under 13 år (I enlighet med Discords användarpolicy). Upptäcker vi detta genomförs omedelbar radering.

### 7. Förändringar i Policyn
Ändringar tillkännages på supportservern i framtiden. Fortsatt användning innebär godkännande av ev. nya villkor.

# <i class="fa-solid fa-cookie-bite" style="color: var(--velvra-primary); margin-right: 8px;"></i> Cookiepolicy

**Ikraftträdande:** 15 april 2026  
**Senast uppdaterad:** 15 april 2026

### 1. Använder Velvra Cookies?

**Nej.** Velvra är en Discord-bot och driver inte en traditionell webbplats med webbläsarbaserad cookie-spårning. Boten körs helt och hållet på Discords plattform och sätter, läser eller hanterar inte webbläsarcookies.

### 2. Vad vi använder istället

Även om vi inte använder cookies, använder vi liknande tekniker för operationella syften:

| Teknik | Syfte | Detaljer |
|---|---|---|
| **Redis Cache** | Nedkylningsspårning (cooldowns), hastighetsbegränsning och sessionshantering | Lagrar temporär data (t.ex. XP-cooldowns, röst-studsar) med automatisk förfallotid |
| **MongoDB** | Permanent datalagring | Lagrar användarpreferenser och serverkonfigurationer enligt Integritetspolicyn |
| **Lokala JSON-filer** | AI konversationsminne | Sparar tillfälligt de sista 20 meddelandena per kanal för Velvra AI; skrivs över regelbundet |

### 3. Tredjepartsspårning

- **Top.gg**: Om du röstar på Velvra kan deras webbplats använda cookies enligt sin egen policy. Vi får endast ditt Discord användar-ID från webhooken.
- **Discord**: Discord-appen och webbplatsen använder sina egna cookies. Se [Discords Integritetspolicy](https://discord.com/privacy).

### 4. Data som lagras lokalt (motsvarighet till cookies)

Följande temporära data fungerar på samma sätt som cookies:

| Data | Livslängd (TTL) | Syfte |
|---|---|---|
| XP cooldown-tidsstämpel | 60 sekunder | Förhindra XP-farming (fusk) |
| Daglig belönings-cooldown | 24 timmar | Begränsa dagliga anspråk |
| Röst-registrering (Debounce) | 30 sekunder | Förhindra dubbla röstbelöningar |
| Kommando-cooldowns | Varierar | Hastighetsbegränsning |

All denna data är knuten till ditt **Discord Användar-ID**, inte till en webbläsare eller enhet.

### 5. Din kontroll över uppgifterna

Eftersom vi inte använder webbläsarcookies:
- Ingen cookie-banner eller samtyckesfråga krävs.
- Dina datainställningar hanteras via bot-kommandon.
- Du kan när som helst begära radering av data (se [Integritetspolicy](/#/privacy) § 5).

---

## <i class="fa-solid fa-envelope" style="color: var(--velvra-primary); margin-right: 8px;"></i> Kontakta oss

Något du undrar över gällande dessa säkerhetspolicyer?
- **Support-server**: [Creative Framework Discord](https://discord.gg/qccq2mMgaT)
- **Grundare**: AmtiXDev

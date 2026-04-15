# <i class="fa-solid fa-cookie-bite" style="color: var(--velvra-primary); margin-right: 8px;"></i> Cookie-Richtlinie

**Inkrafttreten:** 15. April 2026  
**Zuletzt aktualisiert:** 15. April 2026

### 1. Verwendet Velvra Cookies?

**Nein.** Velvra ist ein Discord-Bot und betreibt keine traditionelle Website mit browserbasiertem Cookie-Tracking. Der Bot läuft vollständig auf der Discord-Plattform und setzt, liest oder verwaltet keine Browser-Cookies.

### 2. Was wir stattdessen verwenden

Obwohl wir keine Cookies verwenden, nutzen wir ähnliche Technologien für betriebliche Zwecke:

| Technologie | Zweck | Details |
|---|---|---|
| **Redis Cache** | Cooldown-Tracking, Rate-Limiting und Sitzungsmanagement | Speichert temporäre Daten (z. B. XP-Cooldowns, Command-Cooldowns) mit automatischem Ablaufdatum |
| **MongoDB** | Dauerhafte Datenspeicherung | Speichert Benutzereinstellungen, Serverkonfigurationen und Funktionsdaten, wie in unserer Datenschutzrichtlinie beschrieben |
| **Lokale JSON-Dateien** | KI-Konversationsspeicher | Speichert die letzten 20 Nachrichten pro Kanal für den Velvra-KI-Kontext; wird regelmäßig überschrieben |

### 3. Tracking durch Dritte

- **Top.gg**: Wenn Sie auf Top.gg für Velvra abstimmen, verwendet deren Website möglicherweise Cookies gemäß ihrer eigenen Cookie-Richtlinie. Wir erhalten nur Ihre Discord-Benutzer-ID aus dem Abstimmungs-Webhook.
- **Discord**: Der Discord-Client verwendet seine eigenen Cookies und Tracking-Technologien. Bitte lesen Sie die [Discord-Datenschutzrichtlinie](https://discord.com/privacy).

### 4. Lokal gespeicherte Daten (analog zu Cookies)

Die folgenden temporären Daten funktionieren ähnlich wie Cookies:

| Daten | Lebensdauer (TTL) | Zweck |
|---|---|---|
| XP-Cooldown | 60 Sekunden | Verhindert XP-Farming |
| Tägliche Belohnung | 24 Stunden | Begrenzt tägliche Anforderungen |
| Reputation | Pro Nutzung | Verhindert Reputations-Spam |
| Abstimmungs-Ausgleich | 30 Sekunden | Verhindert doppelte Belohnungen |
| Befehls-Cooldowns | Variiert | Rate-Limiting |

Alle diese Daten sind an Ihre **Discord-Benutzer-ID** gebunden, nicht an einen Browser oder ein Gerät.

### 5. Ihre Kontrolle

Da wir keine Browser-Cookies verwenden:
- Es ist kein Cookie-Banner oder eine Zustimmungserklärung erforderlich.
- Ihre Dateneinstellungen werden über Bot-Befehle (z. B. Benachrichtigungseinstellungen) verwaltet.
- Sie können jederzeit die vollständige Löschung Ihrer Daten beantragen.

---

## <i class="fa-solid fa-envelope" style="color: var(--velvra-primary); margin-right: 8px;"></i> Kontakt

Bei Fragen wenden Sie sich an uns:
- **Support-Server**: [Creative Framework Discord](https://discord.gg/qccq2mMgaT)
- **Gründer**: AmtiXDev
- **Lead-Entwickler**: MohaDev69

# <i class="fa-solid fa-lock" style="color: var(--velvra-primary); margin-right: 8px;"></i> Datenschutzrichtlinie

**Inkrafttreten:** 15. April 2026  
**Zuletzt aktualisiert:** 15. April 2026

Diese Datenschutzrichtlinie erklärt, welche Daten Velvra (betrieben von Creative Framework) sammelt, wie wir sie verwenden und welche Rechte Sie haben. Durch das Hinzufügen von Velvra zu Ihrem Discord-Server oder das Interagieren mit dem Bot stimmen Sie diesen Praktiken zu.

### 1. Daten, die wir sammeln

Wir sammeln nur die minimal erforderlichen Daten, um die Funktionen von Velvra auszuführen. Alle Daten stammen ausschließlich von der Discord-API oder Ihren Befehlen.

#### 1.1 Benutzerdaten
| Datenpunkt | Zweck | Speicherdauer |
|---|---|---|
| **Discord-Benutzer-ID** | Verknüpft Profil, XP, Wirtschaft, Einstellungen | Bis zum Löschantrag |
| **XP & Level-Fortschritt** | Kern des Level- und Quest-Systems | Dauerhaft |
| **Kontostand & Transaktionshistorie** | Verfolgt Münzen, tägliche Belohnungen, Transfers | Dauerhaft |
| **Profiltitel & Ruf** | Öffentliche Profilanpassung | Dauerhaft |
| **Abzeichen (Badges)** | Verfolgt verdiente Erfolge | Dauerhaft |
| **Benachrichtigungseinstellungen** | Respektiert Ihre Wahl für DM-Ereignisse | Dauerhaft |
| **Quest-Fortschritt & Aktivitäts-Tracking** | Verfolgt Nachrichten, Commands, Wörterzahlen | Täglich zurückgesetzt; Gesamtwert dauerhaft |
| **Premium-Status & Blacklist** | Funktionsfreigaben und Anti-Abuse-Schutz | Dauerhaft |

#### 1.2 Serverdaten
| Datenpunkt | Zweck | Speicherdauer |
|---|---|---|
| **Guild ID & Owner ID** | Identifiziert Server und Inhaber | Bis zum Bot-Kick |
| **Name, Icon & Memberzahl** | Anzeige im Dashboard / in Logs | Gelöscht nach Entfernung |
| **Sprache & Dialekt** | Richtige Lokalisierung der Antworten | Dauerhaft |
| **Custom Prefix & Command-Shortcuts** | Eigene Bot-Befehle | Dauerhaft |
| **Premium-Stufe** | Serverseitige Freischaltung | Dauerhaft |
| **Blacklist-Einträge** | Sperrungen von missbräuchlichen Servern | Dauerhaft |

#### 1.3 Moderationsdaten
| Datenpunkt | Zweck | Speicherdauer |
|---|---|---|
| **Verwarnungen** (Guild, User, Mod, Grund) | Moderations-Historie | Dauerhaft, Soft-delete möglich |
| **Protection Config** (Anti-Raid/Spam) | Auto-Mod Sicherung | Dauerhaft |
| **Event-Log-Kanäle** | Senden von Audits in Channels | Dauerhaft |

#### 1.4 Funktionsspezifische Daten
| Datenpunkt | Zweck | Speicherdauer |
|---|---|---|
| **Giveaway-Einträge** | Faires Ziehen von Gewinnern | Gelöscht nach Giveaway-Ende |
| **Ticket-Einträge** | Support-Prozesse tracken | Dauerhaft |
| **Server-Backups** (Rollen, Channel, Banns) | Zur Wiederherstellung genutzt | Bis die Kopie manuell gelöscht wird |
| **Auto-Responder Parameter** | Lokale Reaktionen | Dauerhaft |
| **Premium-Codes** | Einlösen von Subscriptions | Gelöscht nach Nutzung |

#### 1.5 Velvra AI Daten
Wenn Sie **Velvra AI** (Premium Feature) verwenden:
- **Konversationsverlauf**: Die letzten 20 Nachrichten pro Kanal werden in einer lokalen JSON-Datei zwischengespeichert, um den Zusammenhang zu wahren. Diese werden **nicht** in einer Datenbank aggregiert und regelmäßig überschrieben.
- **KI-Kontext**: Der Bot erhält Daten (User, Server-Name, Berechtigungen), um eine rollenspezifische Antwort zu erzeugen.
- Bildanhänge werden in base64 verarbeitet und flüchtig verarbeitet.
- KI-Anfragen laufen über eine **lokal gehostete Ollama-Infrastruktur**. Wir leiten **keine Daten** oder Prompts an kommerzielle Dritte wie OpenAI weiter.

#### 1.6 Daten, die wir NICHT SÄMMELN
- <i class="fa-solid fa-xmark" style="color: #f87171; margin-right: 4px;"></i> Chat-Inhalte, außer für aktive KI-Konversationen.
- <i class="fa-solid fa-xmark" style="color: #f87171; margin-right: 4px;"></i> Direct Messages (DMs).
- <i class="fa-solid fa-xmark" style="color: #f87171; margin-right: 4px;"></i> E-Mail-Adressen, IP-Adressen.
- <i class="fa-solid fa-xmark" style="color: #f87171; margin-right: 4px;"></i> Voice-Audiodaten.

### 2. Wie wir Daten verwenden
Wir nutzen gesammelte Informationen **ausschließlich** für:
- Bereitstellung von Moderation und Wirtschaftssystem.
- KI-Generierung.
- Blacklisting bei Missbrauch.
Wir verkaufen und vermieten Daten **niemals** an Dritte und nutzen sie nicht für Marketingzwecke.

### 3. Datenspeicherung & Sicherheit
- **Datenbank:** MongoDB (TLS Verschlüsselung).
- **Cache:** Upstash Redis (`rediss://` Verschlüsselung).
- Ausschließlich Creative Framework hat Systemzugriff.

### 5. Ihre Rechte
Sie können jederzeit auf unserem Support-Discord (oder über DMs an das Team) Folgendes verlangen: 
Anforderung einer Datenkopie, Fehlerkorrektur, Deaktivierung von Profilen oder **die vollumfängliche Datenlöschung**.

### 6. Datenschutz für Kinder
Wir sammeln keine Daten von Kindern unter 13 Jahren wissentlich.

### 7. Änderungen der Richtlinie
Änderungen werden öffentlich kommuniziert und gelten durch Weiternutzung als bestätigt.

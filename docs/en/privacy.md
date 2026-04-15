# <i class="fa-solid fa-lock" style="color: var(--velvra-primary); margin-right: 8px;"></i> Privacy Policy

**Effective Date:** April 15, 2026  
**Last Updated:** April 15, 2026

This Privacy Policy explains what data Velvra (operated by Creative Framework) collects, how we use it, and your rights. By adding Velvra to your Discord server or interacting with the bot, you agree to the practices described below.

### 1. Data We Collect

We collect the minimum data necessary for Velvra's features to function. All data is sourced exclusively from the Discord API or from your direct interactions with bot commands.

#### 1.1 User Data
| Data Point | Purpose | Storage Duration |
|---|---|---|
| **Discord User ID** | Unique identifier to link your profile, XP, economy, and settings | Until deletion is requested |
| **XP & Level Progress** | Powers the global leveling and quest system | Persistent |
| **Economy Balance & Transaction History** | Track coins, daily rewards, and peer-to-peer transfers | Persistent |
| **Profile Title & Reputation** | Public profile customization | Persistent |
| **Badges** | Track earned or assigned achievements | Persistent |
| **Notification Preferences** | Respect your choice for DM notifications (level-up, quest completion) | Persistent |
| **Quest Progress & Activity Tracking** | Daily quest system — tracks message counts, command usage, word counts, and similar activity metrics | Reset daily; aggregates are persistent |
| **Premium Status & Blacklist Status** | Feature gating and abuse prevention | Persistent |

#### 1.2 Server (Guild) Data
| Data Point | Purpose | Storage Duration |
|---|---|---|
| **Guild ID & Owner ID** | Identify the server and its owner for configuration | Until bot is removed |
| **Server Name, Icon & Member Count** | Displayed in dashboards and logs | Updated on events; deleted on removal |
| **Language & Dialect Preference** | Serve responses in the correct locale | Persistent |
| **Custom Prefix & Command Shortcuts** | Per-server command customization | Persistent |
| **Premium Tier & Expiry** | Gate premium features per server | Persistent |
| **Blacklist Status & Reason** | Abuse prevention | Persistent |

#### 1.3 Moderation Data
| Data Point | Purpose | Storage Duration |
|---|---|---|
| **Warnings** (guild ID, user ID, moderator ID, reason) | Moderation audit trail | Persistent; soft-deletable |
| **Protection Configuration** (whitelists, thresholds, punishment settings) | Server anti-abuse configuration | Persistent |
| **Event Log Channel Mappings** | Route audit events to the correct channels | Persistent |

#### 1.4 Feature-Specific Data
| Data Point | Purpose | Storage Duration |
|---|---|---|
| **Giveaway Entries** (user ID, join time) | Select winners fairly | Deleted when giveaway is deleted |
| **Ticket Records** (channel ID, creator ID, panel reference, status) | Track support tickets | Persistent |
| **Server Backups** (roles, channels, permission overwrites, bans) | Server snapshot & restoration | Until manually deleted |
| **Auto-Responder Rules** (triggers, responses) | Custom auto-reply feature | Persistent |
| **Premium Codes** (code, tier, duration) | Redeem premium features | Deleted after use |

#### 1.5 Velvra AI Data
When interacting with **Velvra AI** (Premium feature):
- **Conversation history**: The last 20 messages per channel are stored locally in a JSON file to maintain conversational context. This is **not** stored in a database and is periodically overwritten.
- **Contextual data sent to the AI**: Server name, channel name, your username, display name, roles, permissions, XP, coins, reputation, badges, and premium status are included in the prompt to provide personalized responses.
- **Image attachments**: Images sent with AI messages are converted to base64 and forwarded to the AI model for vision analysis. They are **not** stored persistently.
- AI requests are routed through a **locally hosted** Ollama instance. No data is sent to third-party AI providers.

#### 1.6 Data We Do NOT Collect
- <i class="fa-solid fa-xmark" style="color: #f87171; margin-right: 4px;"></i> Message content (outside of AI conversations in premium servers)
- <i class="fa-solid fa-xmark" style="color: #f87171; margin-right: 4px;"></i> Direct messages
- <i class="fa-solid fa-xmark" style="color: #f87171; margin-right: 4px;"></i> Email addresses, IP addresses, or real names
- <i class="fa-solid fa-xmark" style="color: #f87171; margin-right: 4px;"></i> Voice or audio data
- <i class="fa-solid fa-xmark" style="color: #f87171; margin-right: 4px;"></i> Data from servers where the bot is not present
- <i class="fa-solid fa-xmark" style="color: #f87171; margin-right: 4px;"></i> Browsing or activity data outside Discord

### 2. How We Use Your Data

We use collected data **exclusively** to:
- Provide and operate bot features (leveling, economy, moderation, etc.)
- Personalize your experience (language preference, notification settings)
- Prevent abuse and enforce blacklists
- Generate AI responses with relevant context (Premium only)
- Maintain moderation audit trails for server administrators

We **never**:
- Sell, rent, or share your data with third parties
- Use your data for advertising or marketing
- Profile users for purposes outside of bot functionality

### 3. Data Storage & Security

| Aspect | Details |
|---|---|
| **Primary Database** | MongoDB (encrypted in transit via TLS) |
| **Cache Layer** | Redis (Upstash, encrypted connection via `rediss://`) |
| **AI Chat History** | Local JSON file on the host server |
| **Access Control** | Only the Creative Framework development team has database access |
| **Retention** | Data is retained as long as the bot is in your server, or until you request deletion |

### 4. Third-Party Services

| Service | Purpose | Data Shared |
|---|---|---|
| **Discord API** | Core bot functionality | As required by Discord's API |
| **Top.gg** | Bot listing & vote tracking | User ID (for vote rewards) |
| **MongoDB Atlas** | Database hosting | All persistent data listed above |
| **Upstash Redis** | Caching & rate limiting | Temporary session/cooldown data |
| **Ollama (self-hosted)** | AI response generation | Prompt text & image data (local only) |

Each third-party service has its own privacy policy. We encourage you to review them.

### 5. Your Rights

You have the right to:
- **Access**: Request a copy of all data we store about you
- **Deletion**: Request complete deletion of your user data
- **Correction**: Request correction of inaccurate data
- **Opt-out**: Disable specific features (e.g., notification preferences)
- **Server data removal**: Remove the bot from your server to stop future data collection

To exercise any of these rights, contact us in the [Creative Framework Support Server](https://discord.gg/qccq2mMgaT) or DM a developer.

### 6. Children's Privacy

Velvra does not knowingly collect data from users under the age of 13 (or the minimum age required by Discord's Terms of Service in your jurisdiction). If we learn that we have collected data from a child, we will delete it promptly.

### 7. Changes to This Policy

We may update this Privacy Policy from time to time. Significant changes will be announced in our support server. Continued use of Velvra after changes constitutes acceptance of the updated policy.

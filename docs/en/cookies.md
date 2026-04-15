# <i class="fa-solid fa-cookie-bite" style="color: var(--velvra-primary); margin-right: 8px;"></i> Cookie Policy

**Effective Date:** April 15, 2026  
**Last Updated:** April 15, 2026

### 1. Does Velvra Use Cookies?

**No.** Velvra is a Discord bot and does not operate a traditional website with browser-based cookie tracking. The bot runs entirely within the Discord platform and does not set, read, or manage browser cookies.

### 2. What We Use Instead

While we don't use cookies, we use similar technologies for operational purposes:

| Technology | Purpose | Details |
|---|---|---|
| **Redis Cache** | Cooldown tracking, rate limiting, and session management | Stores temporary data (e.g., XP cooldowns, command cooldowns, vote debouncing) with automatic expiration |
| **MongoDB** | Persistent data storage | Stores user preferences, server configurations, and feature data as described in our Privacy Policy |
| **Local JSON Files** | AI conversation memory | Stores the last 20 messages per channel for Velvra AI context; overwritten regularly |

### 3. Third-Party Tracking

- **Top.gg**: If you vote for Velvra on Top.gg, their website may use cookies as per their own cookie policy. We only receive your Discord user ID from the vote webhook.
- **Discord**: The Discord client and website use their own cookies and tracking technologies. Please refer to [Discord's Privacy Policy](https://discord.com/privacy) for details.

### 4. Data Stored Locally (Analogous to Cookies)

The following temporary data functions similarly to cookies:

| Data | TTL (Time to Live) | Purpose |
|---|---|---|
| XP cooldown timestamp | 60 seconds | Prevent XP farming |
| Daily reward cooldown | 24 hours | Limit daily claims |
| Reputation cooldown | Per-use basis | Prevent rep spam |
| Vote debounce | 30 seconds | Prevent duplicate vote rewards |
| Command cooldowns | Varies per command | Rate limiting |

All of this data is tied to your **Discord User ID**, not to a browser or device.

### 5. Your Control

Since we don't use browser cookies:
- There is no cookie banner or consent prompt required
- Your data preferences are managed through bot commands (e.g., notification settings)
- You can request complete data deletion at any time (see [Privacy Policy](/#/privacy) § 5)

---

## <i class="fa-solid fa-envelope" style="color: var(--velvra-primary); margin-right: 8px;"></i> Contact Us

For any questions about these policies, reach out to us:
- **Support Server**: [Creative Framework Discord](https://discord.gg/qccq2mMgaT)
- **Founder**: AmtiXDev
- **Lead Developer**: MohaDev69

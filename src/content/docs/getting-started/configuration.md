---
title: Configuration
description: How to configure a Magritte instance.
---

Because Magritte is intended to be usable in a wide range deployment scenarios, it supports extensive configuration.

# Environment Variables

Magritte reads all configuration for how to store and retrieve user data, handle secrets, etc from the environment it runs in.

## Storage

By default, Magritte stores its data in a hidden folder in the user's home directory, searches for song files in a user's music folder, and uses an sqlite3 database. These things can be customized if you are running Magritte somewhere besides your computer.

| Key | Description | Type | Default |
|-----|-------------|------|---------|
| `DATA_HOME` | Where the instance stores its data | `str` | `$HOME/.magritte` |
| `MUSIC_HOME` | Where the instance can find music files for libraries | `str` | `$HOME/Music` |
| `DB` | The custom URL to connect to the database | `str` | `sqlite+aiosqlite:////$HOME/.magritte/db.sqlite3` |

## Uploads

Magritte can be configured to support uploading new song files. This is disabled by default.

| Key | Description | Type | Default |
|-----|-------------|------|---------|
| `ENABLE_UPLOADS` | Whether music files can be uploaded to this instance | `bool` | `false` |
| `UPLOAD_MAX_FILE_SIZE` | The maximum size in bytes of a file that can be uploaded to this instance | `int` | `1073741824` (1 GiB) |

## Account Emails

Magritte can be configured to associate email addresses with user accounts. This enables features such as lost password recovery and notifications.

| Key | Description | Type | Default |
|-----|-------------|------|---------|
| `WEB_URL` | The custom URL where this instance can be accessed on the web | `str` | _Not set_ |
| `EMAIL_SENDER_ADDRESS` | The custom address emails from this instance come from | `str` | _Not set_ |
| `EMAIL_SMTP` | The URL of an SMTP server to send emails through, including credentials | `str` | _Not set_ |
| `EMAIL_MAILTRAP_API_KEY` | The Mailtrap API key to use to send emails | `str` | _Not set_ |

## Secrets

Magritte uses random secret values to generate signed tokens to control access to user data.

| Key | Description | Type | Default |
|-----|-------------|------|---------|
| `TOKEN_ALGORITHM` | The algorithm to use when generating tokens | `str` | `HS256` |
| `SESSION_TOKEN_SECRET` | The random secret to use when generating session tokens | `str` | _Not set_ |
| `FEATURE_TOKEN_SECRET` | The random secret to use when generating tokens for specific features | `str` | _Not set_ |
| `SALT` | The random salt added to passwords before storing them in the DB | `str` | _Not set_ |

If you are running Magritte on a desktop-class machine, like in a development environment, it will default to generating and storing token secrets in your user's keyring (Keychain, KWallet, etc).

If you need Magritte to load secrets from the environment instead of your keyring, it can generate secrets and salts for you:

```sh
# From a development environment:
$ ./admin generate-secrets
```

Paste the result into your environment.

## Other

If you are deploying a Magritte instance, make sure you set the appropriate `ENV` value.

| Key | Description | Type | Default |
|-----|-------------|------|---------|
| `ENV` | The environment the server is running in | `dev`, `ci`, `prod` | `prod` |

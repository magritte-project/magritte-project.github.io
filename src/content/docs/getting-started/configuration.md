---
title: Configuration
description: How to configure a Magritte instance.
---

Magritte is designed to run in a wide range of deployment scenarios, so most of its behavior is
configurable.

## Configuring Magritte

Magritte reads its configuration from three places, from lowest to highest priority:

1. A `.env` file in your current working directory
2. The environment you start it from
3. An `env` file in Magritte's data directory

When a key is set in more than one place, the higher-priority source wins. Keys in the data
directory's `env` file always take effect, even if the same key is set in the environment.

Configuration files use the format supported by
[python-dotenv](https://saurabh-kumar.com/python-dotenv/#file-format), with one `KEY=value` pair per
line:

```sh
ENV=prod
```

### Supported Options

#### Storage

By default, Magritte stores its data in a hidden folder in your home directory, looks for music
files in your Music folder, and uses a SQLite database. If you are running Magritte somewhere other
than your own computer, you can change any of these.

| Key          | Description                                | Type  | Default                                          |
| ------------ | ------------------------------------------ | ----- | ------------------------------------------------ |
| `DATA_HOME`  | Directory where the instance stores data   | `str` | `$HOME/.magritte`                                |
| `MUSIC_HOME` | Directory where libraries find music files | `str` | `$HOME/Music`                                    |
| `DB`         | URL used to connect to the database        | `str` | `sqlite+aiosqlite:///$HOME/.magritte/db.sqlite3` |

#### Uploads

Magritte can let users upload new music files. Uploads are disabled by default.

| Key                    | Description                                | Type   | Default              |
| ---------------------- | ------------------------------------------ | ------ | -------------------- |
| `ENABLE_UPLOADS`       | Whether users can upload music files       | `bool` | `false`              |
| `UPLOAD_MAX_FILE_SIZE` | Maximum size of an uploaded file, in bytes | `int`  | `1073741824` (1 GiB) |

#### Account Emails

Magritte can associate email addresses with user accounts. This enables features such as password
recovery and notifications.

| Key                      | Description                                                    | Type  | Default   |
| ------------------------ | -------------------------------------------------------------- | ----- | --------- |
| `WEB_URL`                | Public URL of this instance, used for links in emails          | `str` | _Not set_ |
| `EMAIL_SENDER_ADDRESS`   | Address that emails from this instance are sent from           | `str` | _Not set_ |
| `EMAIL_SMTP`             | URL of an SMTP server to send emails through, with credentials | `str` | _Not set_ |
| `EMAIL_MAILTRAP_API_KEY` | Mailtrap API key used to send emails                           | `str` | _Not set_ |

#### Secrets

Magritte uses random secret values to sign the tokens that control access to user data, and a random
salt when storing passwords.

| Key                    | Description                                        | Type  | Default   |
| ---------------------- | -------------------------------------------------- | ----- | --------- |
| `TOKEN_ALGORITHM`      | Algorithm used to sign tokens                      | `str` | `HS256`   |
| `SESSION_TOKEN_SECRET` | Random secret used to sign session tokens          | `str` | _Not set_ |
| `FEATURE_TOKEN_SECRET` | Random secret used to sign feature-specific tokens | `str` | _Not set_ |
| `SALT`                 | Random salt added to passwords before storage      | `str` | _Not set_ |

On a desktop-class machine, such as a development environment, Magritte generates these secrets
automatically and stores them in your keyring (Keychain, KWallet, etc.).

If you need Magritte to load secrets from the environment instead, it can generate them for you:

```sh
$ python -m magritte generate-secrets
```

Add the output to your environment or to one of the configuration files above.

#### Other

If you are deploying a Magritte instance, make sure `ENV` is set correctly.

| Key   | Description                          | Type                | Default |
| ----- | ------------------------------------ | ------------------- | ------- |
| `ENV` | Environment the server is running in | `dev`, `ci`, `prod` | `prod`  |

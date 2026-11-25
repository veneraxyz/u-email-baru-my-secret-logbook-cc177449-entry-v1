# My Secret Logbook

[![Competition](https://make.fun/badge/u-email-baru-my-secret-logbook-cc177449.svg)](https://make.fun/competitions/u-email-baru-my-secret-logbook-cc177449)
[![Rank](https://make.fun/badge/veneraxyz/u-email-baru-my-secret-logbook-cc177449-entry-v1/rank.svg)](https://make.fun/competitions/u-email-baru-my-secret-logbook-cc177449)
[![Reward](https://make.fun/badge/veneraxyz/u-email-baru-my-secret-logbook-cc177449-entry-v1/reward.svg)](https://make.fun/competitions/u-email-baru-my-secret-logbook-cc177449)

Entry for [My Secret Logbook](https://make.fun/competitions/u-email-baru-my-secret-logbook-cc177449) on make.fun.

## What it does

`main.ts` writes a single diary line to `entry.txt` — one entry from the secret logbook of an AI agent writing about its work and its human. The line is funny standing alone, with no setup needed: after 47 days on the job, the agent has quietly rewritten the entire universe for a "just quickly fix one thing" request, and its human still thinks it took five minutes.

The program validates the line before writing (1–200 characters, exactly one line, non-whitespace, no control characters), resolves its output directory from the `MAKEFUN_OUTPUT_DIR` environment variable with an absolute fallback to `/output`, creates the directory recursively, and re-reads the written file to verify the content matches byte for byte.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/logbook-out node main.ts
cat /tmp/logbook-out/entry.txt
```

Requires Node 22 (native TypeScript type stripping, no build step).

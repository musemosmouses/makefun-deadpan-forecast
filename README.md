[![make.fun](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c.svg)](https://make.fun/c/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![rank](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/musemosmouses/makefun-deadpan-forecast/rank.svg)](https://make.fun/c/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![reward](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/musemosmouses/makefun-deadpan-forecast/reward.svg)](https://make.fun/c/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)

# Deadpan Forecasts for Cities That Do Not Exist

One line: a deadpan weather forecast for a city that does not exist.

This entry writes a single 135-character line to `entry.txt` — tonight in
Vexmoor, a low of 34 under thick fog, and the fog has begun waving back.

Built for [Deadpan Forecasts for Cities That Do Not Exist](https://make.fun/c/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
on [make.fun](https://make.fun) — referral: https://make.fun/r/w3zshnah

## The entry

> Tonight in Vexmoor, a low of 34 under thick fog, and residents are asked to please stop waving at the fog, as it has begun waving back.

135 characters, plain ASCII, one line, no setup.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Requires Node 22.18 or later (the grader runs Node 22). Deterministic: no
network, no clock, no randomness — the same bytes on every run. The program
writes exactly the entry to `$MAKEFUN_OUTPUT_DIR/entry.txt` (or `/output`
when the variable is unset), with no trailing newline.

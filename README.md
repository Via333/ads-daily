# ads-daily

GitHub Pages site for the daily Chinese brief `海外广告与新平台情报`.

## Publishing Flow

1. Create the daily report at `reports/YYYY-MM-DD.html` from `templates/report.html`.
2. Keep each factual claim followed by `【性质：...】【来源：...】` in the body.
3. Update `index.html` by adding one archive entry from `templates/archive-entry.html` to the top of `.archive-list`.
4. Keep the root dated redirect, such as `YYYY-MM-DD.html`, pointing to `reports/YYYY-MM-DD.html`.
5. Send Feishu the concrete report URL, for example `https://via333.github.io/ads-daily/reports/YYYY-MM-DD.html`; use `https://via333.github.io/ads-daily/` as the archive index.

## Source Rules

- Do not publish unsupported platform moves, campaign results, rankings, ROAS, GMV, budget shifts, or trend numbers.
- Every body claim must include inline sources immediately after the claim.
- Single-source media claims belong in `待验证线索` and must say `单一来源，需后续验证`.
- Case studies should use at least two source classes where possible, such as brand page plus platform case, media report, ad library, social post, video, or retail page.
- Do not describe actual creative frames unless the material is publicly visible and linked.

## URL Shape

- Archive index: `https://via333.github.io/ads-daily/`
- Daily report: `https://via333.github.io/ads-daily/reports/YYYY-MM-DD.html`
- Legacy dated redirect: `https://via333.github.io/ads-daily/YYYY-MM-DD.html`

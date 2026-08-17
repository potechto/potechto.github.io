# Ralph John Santos Portfolio - Current Handover

Last updated: 2026-08-18

## Project Identity

Portfolio Website:
Ralph John Santos Personal Portfolio

Repository:
https://github.com/potechto/potechto.github.io.git

Local Main Path:

C:\Users\Ralph John\OneDrive\Desktop\ME FILES\ABOUT ME\Source Code

---

# IMPORTANT: SOURCE OF TRUTH

The ONLY active local portfolio source is:

ABOUT ME\Source Code

All future portfolio modifications must happen inside that folder.

Do not work from:
- old ZIP backups
- old extracted repositories
- duplicate Source Code folders
- outdated copies

GitHub branch:

main

---

# Current Git Baseline

Latest completed functional update before this handover refresh:

0e2067e
Update resume and refresh download cache

Previous important commits:

7acbcf5
Update portfolio handover with latest fixes

1984bd6
Improve certificate grid alignment

6482c4b
Update RAR Foods project preview image

2cba419
Refresh certificate stylesheet version

IMPORTANT:
The handover file itself may be committed after the functional update above.
Always run:

git log -5 --oneline

at the beginning of a future session to determine the real latest commit.

---

# Resume Update - 2026-08-18

Updated files:

Resources/resume.pdf
index.html

The main resume was changed from an admin-specific presentation into a more general-purpose resume.

Current resume headline:

INFORMATION TECHNOLOGY GRADUATE

The previous headline:

ADMINISTRATIVE ASSISTANT

should NOT be restored to the main general resume unless a separate admin-targeted version is intentionally created.

The general resume is intended to be usable for entry-level applications including:

- office and administrative work
- IT-related entry-level work
- customer service
- retail
- restaurants and fast-food/service roles
- other general entry-level positions

Main resume file:

Resources/resume.pdf

Keep this filename unchanged during normal resume refreshes.

Current download filename:

Ralph_John_Santos_Resume.pdf

Current website link:

Resources/resume.pdf?v=20260818

The previous cache version was:

Resources/resume.pdf?v=20260727

Purpose of the version query:

Force browsers and GitHub Pages visitors to load the newly replaced PDF instead of an older cached resume.

Resume update commit:

0e2067e
Update resume and refresh download cache

That commit correctly contains:

- Resources/resume.pdf
- index.html

---

# GitHub Pages Build Incident - 2026-08-18

After commit 0e2067e was pushed, the GitHub Pages deployment failed.

The resume commit itself was successfully pushed.

The failure happened during the GitHub Pages Jekyll build.

Exact affected file:

PORTFOLIO_HANDOVER_CURRENT.md

GitHub Pages reported an invalid UTF-8 byte sequence while processing the Markdown handover.

Because the build failed:

- the deploy stage was skipped
- the previous successful website deployment remained live
- the live portfolio continued serving the older resume

This explains why the GitHub repository contained the new resume while the live portfolio still downloaded the older ADMINISTRATIVE ASSISTANT version.

Fix:

Rewrite this handover file using valid UTF-8 encoding.

Encoding rule for this file:

Always save PORTFOLIO_HANDOVER_CURRENT.md as UTF-8.

Prefer plain ASCII characters for diagrams and folder structures.
Avoid unusual box-drawing characters or corrupted symbols.

---

# Future Resume Replacement Workflow

When replacing the resume again:

1. Replace:

Resources/resume.pdf

2. Keep the filename resume.pdf unless intentionally redesigning the website structure.

3. Update the cache value in index.html.

Example:

Resources/resume.pdf?v=YYYYMMDD

4. Verify the exact change:

git --no-pager diff -- index.html

5. Check status:

git status

6. Stage only intended files when possible.

Example:

git add index.html Resources/resume.pdf

7. Commit.

8. Push:

git push origin main

9. Verify:

git status

Expected result:

nothing to commit, working tree clean

10. Confirm that GitHub Pages deployment succeeds before assuming the live website has updated.

---

# Repository Migration

The active local repository is:

C:\Users\Ralph John\OneDrive\Desktop\ME FILES\ABOUT ME\Source Code

This is the local source of truth.

Avoid:
- duplicate repositories
- outdated extracted folders
- unnecessary backup folders

Use Git history as the primary backup system.

---

# RAR Foods Preview Update

Previously updated:

js/main.js

RAR Foods preview references were standardized from:

RAR2.png

to:

RAR1.jpg

Current related assets include:

assets/thumbnails/rar-foods.jpg

Resources/Canva Projects/Rar Foods/RAR1.jpg

Affected areas include:

- Project modal preview
- Brand Board viewer

---

# Certificate Grid Update

Certificate layout was changed from CSS Grid to Flex Wrap behavior.

Current desktop behavior:

- certificate cards are centered
- incomplete rows automatically center

Current mobile behavior:

- existing responsive single-column layout remains

Certificate page:

pages/certificates.html

Certificate resources:

Resources/Certifications & Seminars/

---

# Current Portfolio Structure

Source Code/

- index.html
- css/
- js/
- assets/
  - thumbnails/
- pages/
  - certificates.html
- Resources/
  - resume.pdf
  - Certifications & Seminars/
- PORTFOLIO_HANDOVER_CURRENT.md

---

# Git Workflow

Before editing:

cd "C:\Users\Ralph John\OneDrive\Desktop\ME FILES\ABOUT ME\Source Code"

Then check:

git status
git log -5 --oneline

If remote changes exist that are not local:

git pull origin main

After modifications:

git status
git --no-pager diff

Prefer targeted staging when only specific files were intentionally changed.

Example:

git add index.html Resources/resume.pdf

Use:

git add .

only when every visible change is intentionally part of the same update.

Commit:

git commit -m "Describe update"

Push:

git push origin main

Final verification:

git status

Expected:

nothing to commit, working tree clean

If normal git diff becomes stuck at a colon prompt, press:

q

Or use:

git --no-pager diff

---

# Future AI Assistance Rules

Before modifying the portfolio:

1. Read this handover.
2. Run git status.
3. Run git log -5 --oneline.
4. Confirm the real current files before editing.
5. Make only the requested changes.
6. Do not redesign unrelated sections.
7. Review diffs before committing.
8. Preserve existing working features.
9. Push to main only after verification.
10. Confirm GitHub Pages deployment succeeds.

For resume work specifically:

Main file:

Resources/resume.pdf

Current general headline:

INFORMATION TECHNOLOGY GRADUATE

Keep the main resume broad/general-purpose.

After replacing the PDF, refresh the cache value in index.html.

---

# Handover Encoding Rule

This file previously caused GitHub Pages deployment failure because of invalid character encoding.

Always maintain this file as valid UTF-8.

Avoid copying corrupted special characters into this file.

---

END OF HANDOVER
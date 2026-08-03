# Ralph John Santos Portfolio - Current Handover

## Project Identity

Portfolio Website:
Ralph John Santos Personal Portfolio

Repository:
https://github.com/potechto/potechto.github.io.git

Current Local Main Path:

C:\Users\Ralph John\OneDrive\Desktop\ME FILES\ABOUT ME\Source Code


---

# IMPORTANT: SOURCE OF TRUTH

The ONLY active portfolio source is:

ABOUT ME
+-- Source Code


All future modifications must happen inside:

ABOUT ME\Source Code


---

# Current Git Status

Branch:

main


Latest Commit:

1984bd6

Message:

Improve certificate grid alignment


Recent important commits:

6482c4b
Update RAR Foods project preview image

2cba419
Refresh certificate stylesheet version

7e33505
Add current portfolio handover documentation


---

# Recent Completed Updates


## Repository Migration

Completed migration into:

ABOUT ME\Source Code


This is now the single source of truth.

Avoid using:
- old ZIP backups
- previous extracted folders
- duplicate repositories


---

## RAR Foods Preview Update

Updated:

js/main.js


Changed project preview references from:

RAR2.png


to:

RAR1.jpg


Affected:

- Project modal preview
- Brand Board viewer


Current assets:

assets/thumbnails/rar-foods.jpg

Resources/Canva Projects/Rar Foods/RAR1.jpg


Purpose:

Removed the old transparent/incorrect RAR preview reference and standardized the project presentation image.


---

## Certificate Grid Update

Updated:

css/style.css


Changed certificate layout from:

CSS Grid


to:

Flex Wrap Layout


Current behavior:

Desktop:
- Certificate cards are centered.
- Incomplete rows automatically center.


Example:

[1][2][3][4]

   [5][6]


Mobile:
- Existing single-column responsive layout remains.


Purpose:

Prevent incomplete certificate rows from being left-aligned.


---

# Current Portfolio Structure

Source Code/

+-- index.html
+-- css/
+-- js/
+-- assets/
¦   +-- thumbnails/
+-- pages/
¦   +-- certificates.html
+-- Resources/
+-- PORTFOLIO_HANDOVER_CURRENT.md


---

# Certificate System

Certificate page:

pages/certificates.html


Current certificates include:

- Academic credentials
- OJT certifications
- Seminar certificates
- Typing Test Hard
- Typing Test Medium


Future certificates should be added inside:

Resources/
+-- Certifications & Seminars/


---

# Featured Projects

Current featured projects include:

- RAR Foods
- Canva Projects
- Application Development Projects
- School Projects
- OJT Projects


Project thumbnails:

assets/thumbnails/


---

# Git Workflow

Before editing:

cd "ABOUT ME\Source Code"


Check:

git status

git log -5 --oneline


After changes:

git add .

git commit -m "Describe update"

git push origin main


Always verify:

git status


Expected:

nothing to commit, working tree clean


---

# Future ZIP Backup

When creating a manual backup:

ZIP this folder:

ABOUT ME


The ZIP should contain:

- Source Code
- Portfolio files
- PORTFOLIO_HANDOVER_CURRENT.md


Do not ZIP the entire ME FILES folder.


---

# Notes for Future AI Assistance

Always continue from:

ABOUT ME\Source Code


Before modifying:

1. Check git status
2. Check latest commit
3. Read PORTFOLIO_HANDOVER_CURRENT.md


Avoid unnecessary backups.

Use Git history as the backup system.


---

END OF HANDOVER

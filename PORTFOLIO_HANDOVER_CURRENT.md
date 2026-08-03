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
└── Source Code


Do not use:
- old ZIP backups
- extracted potechto.github.io folders
- previous Source Code backups


All future modifications must happen inside:

ABOUT ME\Source Code


---

# Current Git Status

Branch:

main


Latest Commit:

672d079

Message:

Update RAR Foods thumbnail and improve certificate layout


Previous important commits:

84dee0a
Center lone final featured project card

50808a5
Add Canva projects and update downloadable resume

45195c9
Remove Basic HTML CSS Java from skills


---

# Recent Completed Updates

## Repository Migration

Completed migration from old duplicated folders into:

ABOUT ME\Source Code


Old duplicate repositories were removed.


## RAR Foods Update

Changed featured project thumbnail:

Before:

assets/thumbnails/rar-foods.png


After:

assets/thumbnails/rar-foods.jpg


Source:

Resources/Canva Projects/Rar Foods/RAR1.jpg


Reason:

The previous thumbnail used a transparent PNG style.
The updated version uses the full brand showcase image.


---

## Certificate Layout Update

Updated:

css/style.css


Changed certificate grid behavior from:

CSS Grid


to:

Flex Wrap Layout


Purpose:

Automatically center incomplete rows.

Example:

4 certificates:

[1][2][3][4]


6 certificates:

[1][2][3][4]
   [5][6]


Future certificates will automatically adjust without manual positioning.


---

# Current Portfolio Structure

Source Code/

├── index.html
├── css/
├── js/
├── assets/
│   └── thumbnails/
├── pages/
│   └── certificates.html
└── Resources/


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


Future certificates should be added here:

Resources/
└── Certifications & Seminars/


Then create a new:

.cert-card


inside:

pages/certificates.html


---

# Featured Projects

Current portfolio projects include:

- RAR Foods
- Canva Projects
- Application Development Projects
- School Projects
- OJT Projects


Project thumbnails are stored:

assets/thumbnails/


---

# Git Workflow

Before editing:

cd "ABOUT ME\Source Code"


Check:

git status


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


Do NOT ZIP:

ME FILES entire folder


The ZIP should automatically contain:

- Source Code
- This handover file
- Project context


---

# Notes for Future AI Assistance

Always continue from:

ABOUT ME\Source Code


Check:

git log -5 --oneline


before making changes.


Avoid creating unnecessary backups.

Use Git history as the backup system.

---

END OF HANDOVER
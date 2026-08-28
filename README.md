# Decodreams Portfolio Upgrade

Decodreams — Replace Placeholder Images With Local Project Images

I have provided the complete existing Decodreams Next.js project along with the real interior-design images that need to be integrated.

PRIMARY GOAL

Replace the existing Unsplash placeholder photography with the provided Decodreams interior-design images.

The final website must work correctly when:

The project is downloaded/exported.

The complete project is pushed to GitHub.

The GitHub repository is deployed to Vercel.

The website is opened on desktop, tablet and mobile.

Do NOT use external image URLs for these provided project images.

The images must be stored locally inside the project so there is no possibility of images disappearing after GitHub/Vercel deployment.

1. IMAGE FILE MANAGEMENT

Create/use a proper local image directory such as:

/public/images/projects/

Place all provided images there with clean filenames.

Use appropriate filenames such as:

living-room-01.jpg

bedroom-01.jpg

bedroom-02.jpg

modern-bedroom.jpg

luxury-living-room.jpg

interior-detail.jpg

jewellery-showroom.jpg

etc.

Do NOT rename files in a way that breaks references.

Make sure all image paths use Next.js-compatible local paths beginning with /images/....

Example:

/images/projects/living-room-01.jpg

NOT:

https://...

NOT:

images/...

NOT:

./images/...

2. REPLACE THE CURRENT UNSPLASH DATA

Inspect:

src/lib/projects.ts

The current projects contain Unsplash placeholder URLs.

Replace those placeholder URLs with the provided local image paths.

Do not simply dump all images into one project.

Map the provided photographs intelligently according to what is actually visible in each image.

For example:

Living room photographs → Living Room projects

Bedroom photographs → Bedroom projects

High-end showroom/interior photographs → Commercial / appropriate project

Decorative interior/detail photographs → appropriate project lightbox/gallery

Preserve the existing project structure, categories, filters, project titles, descriptions and lightbox functionality unless a change is genuinely required for the image integration.

3. VERY IMPORTANT — IMAGE QUALITY & CROPPING

The existing portfolio uses different image ratios, including:

portrait/4:5 style cards

wide/8:5 cards

Make every provided photograph look intentional inside its assigned card.

Do NOT allow:

stretched images

distorted images

squashed images

accidental cropping of the main furniture/design subject

awkward empty areas

faces/focal objects being cut off

inconsistent card heights

Use object-cover where appropriate and adjust the positioning with object-position when necessary.

If an image needs a different focal point, use a suitable object-position instead of changing the original image.

For example:

object-position: center

or

object-position: center 35%

depending on the photograph.

The portfolio should look like a professionally curated interior-design photography gallery.

4. DO NOT BREAK THE EXISTING DESIGN

Keep the existing Decodreams visual identity.

Preserve:

dark editorial portfolio section

typography

brass/gold accent

limewash/off-white text

existing spacing system

hover effects

animated gallery transitions

project filters

lightbox

navigation

buttons

existing sections

Do NOT redesign the entire website.

The goal is to improve the existing implementation by replacing placeholder photography with the real supplied photographs.

5. PORTFOLIO GRID

Inspect the existing:

src/components/Portfolio.tsx

The current grid already supports:

1-column mobile

2-column tablet

3-column desktop

wide project cards

hover zoom

animated transitions

clickable lightbox

Keep this architecture.

Make sure the new local images work correctly with the existing <Image /> / Media component.

Every image must have:

correct alt

proper sizes

responsive rendering

no layout shift

good loading performance

Use Next.js Image correctly.

6. LIGHTBOX / GALLERY

Inspect:

src/components/Lightbox.tsx

All images assigned to a project must also work correctly inside the lightbox.

When a visitor clicks a portfolio project:

the correct project should open

all images assigned to that project should appear

previous/next controls should work

images should remain sharp

portrait images should not be awkwardly cropped

landscape images should fit naturally

mobile lightbox must work properly

background scroll locking must continue working

Do not leave any Unsplash image inside the lightbox.

7. RESPONSIVE DESIGN

Test the portfolio at minimum at:

Mobile

320px

375px

390px

430px

Tablet

768px

1024px

Desktop

1280px

1440px

1920px

On mobile:

cards should remain visually balanced

images should not overflow

captions should remain readable

filters should remain usable

horizontal filter scrolling should continue working

lightbox should fit the viewport

buttons should remain accessible

no horizontal page overflow

Fix any responsive issues you discover.

8. ANIMATIONS

Keep the existing Framer Motion animations.

Make sure image loading and animations feel premium and subtle.

Use:

smooth reveal animations

gentle image scale on hover

existing portfolio crossfade when filtering

existing brass frame hover animation

Do NOT add excessive animations.

The website should feel like a premium interior-design studio website, not a flashy template.

Also respect prefers-reduced-motion where practical.

9. IMAGE PERFORMANCE

Because these images will be deployed on Vercel:

use Next.js Image

use responsive sizes

avoid unnecessarily huge rendered dimensions

preserve image quality

allow Vercel/Next.js image optimization to handle delivery

do not convert the website to external image hosting

do not introduce unnecessary third-party image dependencies

Do NOT base the implementation on images being available from the local computer.

All required images must physically exist inside the project.

10. CRITICAL GITHUB + VERCEL CHECK

This is extremely important.

The previous version displayed the images locally but the images disappeared after GitHub → Vercel deployment.

Prevent that problem completely.

Before considering the task finished, verify:

File paths

Every referenced image must physically exist under the project's public/ directory.

References

Every image reference must point to the correct /images/... public path.

Case sensitivity

Check filename casing carefully.

For example:

Living-Room.jpg

and

living-room.jpg

must NOT be treated as the same file.

Vercel/Linux filesystem is case-sensitive.

Git

Make sure the image files are not excluded by .gitignore.

Check that there is no rule accidentally ignoring:

public/images

or image extensions such as:

.jpg
.jpeg
.png
.webp

Build

Run a production build and fix all errors.

Use the project's existing package manager and run the equivalent of:

npm run build

If the build fails because of image paths, TypeScript errors, lint errors, or another issue introduced during this task, fix them before finishing.

11. REMOVE UNUSED PLACEHOLDER IMAGE DEPENDENCY

After replacing the portfolio photography:

remove unused Unsplash project URLs from src/lib/projects.ts

keep next.config.ts clean

if the Unsplash remotePatterns configuration is no longer needed anywhere else, remove it

do not remove anything that is still genuinely required elsewhere in the website

Search the entire project for:

images.unsplash.com

There should be no accidental portfolio references remaining.

12. ACCESSIBILITY

Keep meaningful alt text.

Example:

Modern luxury living room interior in Indore

rather than:

image1

Do not put important information only inside images.

Maintain keyboard accessibility for:

portfolio cards

filters

lightbox

close button

previous/next controls

13. FINAL VISUAL QA

After implementing everything, inspect the complete website.

Specifically check:

Hero

About

Services

Process

Portfolio

Testimonials

Contact

Footer

Make sure the newly added images do not break spacing or visual hierarchy anywhere.

In the portfolio, verify every card individually.

Check:

image alignment

crop

aspect ratio

caption placement

hover animation

category label

year/locality

lightbox

mobile layout

If an image looks poorly cropped in a specific card, fix the positioning rather than replacing the image randomly.

14. DO NOT MAKE THESE MISTAKES

Do NOT:

use base64 images

use blob URLs

use temporary browser URLs

use external Unsplash URLs for the provided images

store images only outside the repository

reference Windows/local computer paths

create broken relative paths

change the whole website design

remove existing animations

remove the portfolio filtering system

randomly assign photographs

stretch photographs to fit cards

hide broken images with placeholder backgrounds

The deployed website must be completely self-contained regarding these project images.

15. FINAL REQUIREMENT

When finished, give me a concise summary containing:

Which images were added.

Where the image files were stored.

Which portfolio projects were updated.

Whether all Unsplash portfolio references were removed.

Whether the project successfully passes the production build.

Any files you modified.

Confirmation that the image paths are suitable for GitHub + Vercel deployment.

Most importantly:

Do not stop after visually adding the images. Verify the actual production build and local asset paths so the images continue working after the repository is pushed to GitHub and deployed to Vercel.

The final result should look like a polished, premium interior-design portfolio using the supplied real project photographs.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/30d5a4ef-5bc3-42c6-8f72-6515ff0bbc57).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

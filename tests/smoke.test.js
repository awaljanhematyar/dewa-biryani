import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {menuItems,branches,siteConfig} from '../js/data.js';
import {translations} from '../js/translations.js';
import {galleryItems} from '../js/gallery-data.js';
const pages=['index.html','menu.html','offers.html','about.html','gallery.html','branches.html','contact.html'];
assert.equal(menuItems.length,7);
assert.deepEqual(menuItems.map(x=>x.price).sort((a,b)=>a-b),[120,150,200,200,350,370,550]);
assert.ok(menuItems.every(x=>x.verified===undefined));
assert.equal(menuItems.flatMap(x=>x.images).length,8,'Eight menu image references are mapped (one image is reused)');
const specialPlatter=menuItems.find(x=>x.id==='special-platter');
assert.deepEqual(specialPlatter.contents.ps,['نیم کیلو دیګي چرګ','یوه پرس بریاني','یو بوتل کوکاکولا','۳ دانې ډوډۍ','سلاد او چټني']);
const fridayOffer=menuItems.find(x=>x.id==='friday-degi-offer');
assert.equal(fridayOffer.price,350);assert.equal(fridayOffer.compareAt,370);
assert.ok(fridayOffer.descriptions.ps.includes('پخواني'));
for(const item of [specialPlatter,fridayOffer])for(const lang of ['ps','fa','en'])assert.ok(item.contents[lang].length,`Platter/offer contents translated: ${lang}`);
for(const stem of menuItems.flatMap(x=>x.images)){const webp=await readFile(new URL(`../assets/images/menu/optimized/${stem}.webp.b64`,import.meta.url),'utf8');assert.ok(/^[A-Za-z0-9+/=]+$/.test(webp.trim()),`Optimized menu image stored: ${stem}`)}
assert.equal(branches.length,3);
assert.equal(galleryItems.length,20,'Gallery keeps the hero image and includes all nineteen user supplied gallery photos');
assert.deepEqual(new Set(galleryItems.map(item=>item.category)),new Set(['food','branches','exterior','dining','interior']));
for(const item of galleryItems){for(const lang of ['ps','fa','en'])assert.ok(item.alt[lang]&&item.caption[lang],`Gallery labels are translated: ${item.id}/${lang}`);if(item.source!=='hero'){const webp=await readFile(new URL(`../assets/images/gallery/optimized/${item.source}.webp.b64`,import.meta.url),'utf8');const original=await readFile(new URL(`../assets/images/gallery/originals/${item.source}.${['05-1000474144'].includes(item.source)?'webp':'jpg'}.b64`,import.meta.url),'utf8');assert.ok(/^[A-Za-z0-9+/=]+$/.test(webp.trim()),`Optimized image stored: ${item.id}`);assert.ok(/^[A-Za-z0-9+/=]+$/.test(original.trim()),`Original image preserved: ${item.id}`)}}
assert.ok(branches[1].phones.length===0,'Do not invent a Shahr-e-Naw phone number');
assert.equal(siteConfig.officialSocial.tiktok,'','Do not publish an unverified TikTok account');
for(const lang of ['ps','fa','en']) assert.ok(translations[lang].home&&translations[lang].menu&&translations[lang].contact);
for(const lang of ['ps','fa','en'])for(const key of ['galleryAll','galleryFood','galleryInterior','galleryExterior','galleryDining','galleryBranches'])assert.ok(translations[lang][key],`Gallery filter translation: ${lang}/${key}`);
for(const file of pages){const html=await readFile(new URL(`../${file}`,import.meta.url),'utf8');assert.match(html,/<title>.+<\/title>/);assert.match(html,/meta name="description"/);assert.match(html,/id="main"/);assert.match(html,/js\/main\.js/);}
for(const file of [...pages,'js/translations.js','js/gallery-data.js'])assert.ok(!(await readFile(new URL(`../${file}`,import.meta.url),'utf8')).includes('دیوه'),'Use corrected Pashto brand spelling');
const main=await readFile(new URL('../js/main.js',import.meta.url),'utf8');assert.match(main,/menu-includes/);
const index=await readFile(new URL('../index.html',import.meta.url),'utf8');
assert.match(index,/dewa-restaurant-hero\.webp/);
const heroData=await readFile(new URL('../assets/images/hero/dewa-restaurant-hero.webp.b64',import.meta.url),'utf8');
assert.ok(heroData.length>50000&&/^[A-Za-z0-9+/=]+$/.test(heroData.trim()),'Optimized user-provided hero image should be embedded as base64 text');
const branchPage=await readFile(new URL('../branches.html',import.meta.url),'utf8');
assert.equal((branchPage.match(/maps\.google\.com\/maps\?/g)||[]).length,3);
assert.equal((branchPage.match(/google\.com\/maps\/dir/g)||[]).length,3);
console.log(`Smoke checks passed for ${pages.length} pages, ${menuItems.length} menu items, ${branches.length} branches, ${galleryItems.length} gallery photos, and 3 locales.`);

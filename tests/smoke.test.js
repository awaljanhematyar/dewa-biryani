import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {menuItems,branches,siteConfig} from '../js/data.js';
import {translations} from '../js/translations.js';
const pages=['index.html','menu.html','offers.html','about.html','gallery.html','branches.html','contact.html'];
assert.equal(menuItems.length,6);
assert.deepEqual(menuItems.map(x=>x.price).sort((a,b)=>a-b),[120,150,200,200,370,550]);
assert.ok(menuItems.every(x=>x.verified===undefined));
assert.equal(branches.length,3);
assert.ok(branches[1].phones.length===0,'Do not invent a Shahr-e-Naw phone number');
assert.equal(siteConfig.officialSocial.tiktok,'','Do not publish an unverified TikTok account');
for(const lang of ['ps','fa','en']) assert.ok(translations[lang].home&&translations[lang].menu&&translations[lang].contact);
for(const file of pages){const html=await readFile(new URL(`../${file}`,import.meta.url),'utf8');assert.match(html,/<title>.+<\/title>/);assert.match(html,/meta name="description"/);assert.match(html,/id="main"/);assert.match(html,/js\/main\.js/);}
const index=await readFile(new URL('../index.html',import.meta.url),'utf8');
assert.match(index,/dewa-restaurant-hero\.webp/);
const branchPage=await readFile(new URL('../branches.html',import.meta.url),'utf8');
assert.equal((branchPage.match(/maps\.google\.com\/maps\?/g)||[]).length,3);
assert.equal((branchPage.match(/google\.com\/maps\/dir/g)||[]).length,3);
console.log(`Smoke checks passed for ${pages.length} pages, ${menuItems.length} menu items, ${branches.length} branches, and 3 locales.`);

# Just a simple tic toe game 

## Available Scripts
Clone først repo'et ned. Kør derefter npm build for at bygge projektet, eller npm start for at kører projektet i development mode. Sidst nævnte vil kører spillet på http://localhost:3000 


# Source code
Folderen src indeholder source koden for spillet. Den indeholder bla. folderen components, der indeholder de forskellige komponenter, der indegår i spillet samt deres css-filer. 

## tictoc.js
Filen tictoc.js indeholder funktionalitet til at starte spillet op, og til at afslutte spillet, når en af spillerne har vundet, eller hvis spillet er blevet uafgjort. 

## board.js
board.js indeholder den overordede funktionalitet for spillet. Hver gang en spiller har lagt en brik, vil den tjekke om der er et match, eller om spillet er uafgjort. 
Hvis der er et match, eller hvis spillet er uafgjort, sendes der et event til tictoc.js, der så vil afslutte spillet.

## field.js
field.js indeholder funktionalitet til at rendere et felt i spillet. Spillerne kan ligge en brik på et tomt felt. Alt efter hvilken spiller, der lagt en brik, vil feltet enten vise et x eller et o. 

## tic.js og toc.js 
tic.js og toc.js implementere henholdvist et x og et o i form af svg-elementer. Disse bliver renderet i felterne i spillet. 

## gameoverlay.js
gameoverlay.js indeholder funktionalitet til at rendere beskeden, der fortæller, hvordan spillet er endt. Dvs, hvilken spiller der har vundet, eller om spillet er uafgjort.  

import { loadRespecWithConfiguration } from "https://improrail.github.io/respec-assets/js/prorail-config.mjs";

loadRespecWithConfiguration({
  useLogo: true,
  useLabel: true,

    //-- TODO titel is verplicht.
  title: "Real Time Traffic Plan (RTTP)",

  // TODO: Vul de github URL in.
  //neem hier de URL van de github repository op waar het respec document in staat
  github: "https://github.com/IMProRail/rttp",

  //-- TODO shortName is verplicht! (komt in de URL: kies logische afkorting)
  //-- Regel: shortName mag geen hoofdletters bevatten.
  shortName: "rttp",
  pubDomain: "rttp",  

  //-- TODO licentie is verplicht
  //-- "cc0" Creative Commons 0 Public Domain Dedication
  //-- "cc-by" Creative Commons Attribution 4.0 International Public License
  //-- "cc-by-nd" Creative Commons Naamsvermelding-GeenAfgeleideWerken 4.0 Internationaal
  license: "cc-by",
  
  //-- TODO status van het document is verplicht
  //-- wv: "Werkversie",
  //-- cv: "Consultatieversie",
  //-- vv: "Versie ter vaststelling",
  //-- def: "Vastgestelde versie",
  //-- ld: "Levend document",
  //-- //eo: "Verouderde versie",
  //-- //tg: "Teruggetrokken versie",
  specStatus: "wv",

  //-- TODO type van het document is verplicht
  //-- basis: "Document",
  //-- no: "Norm",
  //-- st: "Standaard",
  //-- im: "Informatiemodel",
  //-- pr: "Praktijkrichtlijn",
  //-- hr: "Handreiking",
  //-- wa: "Werkafspraak",
  //-- al: "Algemeen",
  //-- bd: "Beheerdocumentatie",
  //-- bp: "Best practice",
  specType: "im",
    
  //edDraftURI = De URI van de draft version. Deze wordt automatisch afgeleid van de github URI; maar kan hier overschreven worden. 
	//edDraftURI: ["https://improrail.github.io", "/", "shortName"],

  //-- publishDate is verplicht. Als je werkversie gekozen hebt  dan pakt Respec
  //-- de pushdate maar de publishDate is nog steeds verplicht.
  publishDate: "2026-10-07", 

  //-- publishVersion is verplicht. Hij mag wel leeg zijn [], maar niet de lege string zijn "".
  //publishVersion: "0.0.1",
  publishVersion: [],
 
  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beide aan/uit! 
  previousPublishVersion: [],
  previousPublishDate: "2026-07-10",
  previousMaturity: "cv",
  //prevVersion: "0.0.1",

  //-- TODO: de namen van de Editor(s) / Redacteur(en)
  //-- vul in: per Editor: name:, company:, companyURL: 
  //-- companyURL moet beginnen met https://


  editors:
    [
      {
        name: "ProRail",
        company: "ProRail",
        companyURL: "https://www.prorail.nl",
      }
    ],
  authors:
    [
      {
        name: "ProRail",
        company: "ProRail",
        companyURL: "https://www.prorail.nl",
      }
    ],
  github: "https://github.com/IMProRail/rttp",
  

  // Create PDF or DOCX and link to file in header:
  // Leave 'uri' empty
  alternateFormats: [
      {
         label: "pdf",
         uri: null
      },
     // {
   //      label: "docx",
   //      uri: null
   //   },
  ],

  //
  // Lokale lijst voor bibliografie
  // - Kijk eerst naar de beschikbare www.specref.org .
  // - Kijk daarna in de organisatieconfig op
  // - Voeg dan pas hieronder toe.
  //
  localBiblio: 
  {
    MIM12: {
      id: "MIM12",
      title: "MIM - Metamodel Informatie Modellering (Versie 1.2)",
      href: "https://docs.geostandaarden.nl/mim/def-st-mim-20240613/",
      status: "Definitief",
      publisher: "Geonovum",
      date: "2024-06-13"
    }
  }
});



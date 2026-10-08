function link(text, url) {
  return "<a href='" + url + "' target='_blank' rel='noopener'>" + text + "</a>";
}

const SOBRAL_UNCERTAINTY = Math.round(0.12 / 1.98 * 100);
const PRINCIPE_UNCERTAINTY = Math.round(0.31 / 1.61 * 100);

const CASES = [
  {
    kicker: "585 BCE",
    title: "The eclipse that stopped a battle",
    subtitle: "28 May 585 BCE",
    type: "Total", saros: "57", catalogueNo: "03379", date: "−0584 May 28",
    magnitude: "1.0798", duration: "06m04s", seconds: 364, greatest: "38°N 45°W", pathWidth: "271 km",
    map: "images/map-585bce.gif",
    mapAlt: "NASA catalogue map of the 28 May 585 BCE eclipse: the narrow path of totality crosses the North Atlantic towards Europe.",
    paragraphs: [
      "In the sixth year of the war between the Lydians and the Medes, Herodotus recounts that, during a battle, “the day was suddenly turned to night.” As the armies witnessed the total eclipse, they stopped fighting, and both sides became “more eager to make peace” (" + link("Querejeta, 2011", "https://arxiv.org/abs/1307.2095") + ", quoting Herodotus, <i>Histories</i> 1.74).",
      "Which eclipse was it? Pliny dates the event to the fourth year of the 48th Olympiad, generally understood as 585/4 BCE. Modern astronomical calculations point to a solar eclipse visible from Asia Minor on 28 May 585 BCE. Stephenson and Fatoohi argued that this is the only known eclipse that fits the geographical and observational requirements of the account, particularly the need for totality over the battlefield. " + link("NASA’s catalogue", "https://eclipse.gsfc.nasa.gov/SEcat5/SE-0599--0500.html") + " likewise identifies the event as a total eclipse, with a magnitude of 1.0798, meaning that the Moon’s apparent diameter exceeded that of the Sun by approximately 8 percent, and with a path of totality about 271 km wide. The identification is therefore strongly supported by the astronomical evidence, although it need not be regarded as absolutely certain.",
      "The catalogue’s figure of 6 minutes 4 seconds, however, requires some qualification. It refers to the duration of totality along the eclipse’s central line at the moment of greatest eclipse, located in the North Atlantic at approximately 38°N, 45°W, far from Anatolia. The duration experienced by observers on the battlefield would therefore have been different and the NASA catalogue’s central line value can't by itself determine how long the soldiers experienced totality.",
      "Herodotus adds that Thales of Miletus had predicted the disappearance of daylight and had even indicated the year in which it would occur. The central question, therefore, is not whether the eclipse can be identified, but whether such a prediction was astronomically possible in the sixth century BCE. Some scholars, including Martin and Neugebauer, have argued that it was not. Others have attempted to identify an eclipse cycle that Thales might have used. " + link("Querejeta (2011)", "https://arxiv.org/abs/1307.2095") + " examines the two principal proposals, those of Willy Hartner (1969) and Dirk Couprie (2004), and argues that both rely on incomplete eclipse selections, excluding eclipses that should be included according to their own criteria. His statistical analysis of the proposed cycles ultimately finds no statistically significant basis for predicting a solar eclipse from them.",
    ],
  },
  {
    kicker: "1919",
    title: "The eclipse that tested Einstein",
    subtitle: "29 May 1919",
    type: "Total", saros: "136", catalogueNo: "09326", date: "1919 May 29",
    magnitude: "1.0719", duration: "06m51s", seconds: 411, greatest: "4°N 17°W", pathWidth: "244 km",
    map: "images/map-1919.gif",
    mapAlt: "NASA catalogue map of the 29 May 1919 eclipse: the path of totality crosses the Atlantic from Brazil to West Africa.",
    paragraphs: [
      "In 1919 the Moon crossed a part of the sky astronomers wanted. On 29 May the Sun would stand in front of the Hyades, a cluster with many bright stars and Frank Dyson had noted in 1917 that the eclipse was particularly favourable for testing the deflection of light. General relativity predicts that the Sun bends starlight by 1.75 seconds of arc at its edge. The Newtonian figure is 0.87, half as much (" + link("Longair, 2015", "https://doi.org/10.1098/rsta.2014.0287") + "). Longair gives “about 6 min” of totality. The " + link("catalogue’s", "https://eclipse.gsfc.nasa.gov/SEcat5/SE1901-2000.html") + " 6 minutes 51 seconds is the central-line figure, in the Atlantic, so it is not what any observing site saw.",
      "Two expeditions went out. Arthur Eddington and Edwin Cottingham took a 16-inch lens to Príncipe, an island off West Africa. Charles Davidson and Andrew Crommelin went to Sobral, in Brazil, with another 16-inch lens and a 4-inch telescope borrowed from the Royal Irish Academy as a backup.",
      "Neither day went to plan. At Príncipe there were days of cloud, then a heavy thunderstorm on the morning of 29 May. Most plates could not be used because the stars could not be seen through the cloud, and 16 were obtained. At Sobral the weather was better, but the 16-inch lens had to be stopped down to 8 inches because of serious astigmatism. The sharp images came from the 4-inch.",
      "The numbers, as Longair reports them: the 4-inch plates at Sobral gave a deflection of 1.98 ± 0.12 seconds of arc and the Príncipe plates 1.61 ± 0.31. The blurred 16-inch plates gave values between 0.93 and 1.56, depending on the assumptions made. Measured against the values themselves, the Sobral uncertainty is about " + SOBRAL_UNCERTAINTY + "% and the Príncipe uncertainty about " + PRINCIPE_UNCERTAINTY + "% (our arithmetic). Both results are nearer to Einstein’s 1.75 than to Newton’s 0.87.",
      "The result was presented on 6 November 1919 at a joint meeting of the Royal Society and the Royal Astronomical Society in London (" + link("Dyson, Eddington & Davidson, 1920", "https://doi.org/10.1098/rsta.1920.0009") + ", cited as reported by Longair). The Times headline was “Revolution in Science. New Theory of Universe. Newtonian Ideas Overthrown.” J. J. Thomson, the Society’s president, called the announcement “one of the most momentous, if not the most momentous, pronouncements of human thought.”",
      "The decision to set aside the blurred Sobral plates has been argued over ever since. In 1980 the philosophers John Earman and Clark Glymour charged that the team had thrown out data that favoured Newton. " + link("Daniel Kennefick (2009)", "https://doi.org/10.1063/1.3099578") + " answers that the astrographic images were out of focus, that the decision was Dyson’s, and that in 1979 Geoffrey Harvey re-measured the original plates with modern machines: the 4-inch lens gave 1.90 ± 0.11 and the astrographic lens 1.55 ± 0.34, in line with Dyson’s own alternative reduction of 1.52. Kennefick concludes that the team’s judgement was defensible.",
      "" + link("Longair", "https://doi.org/10.1098/rsta.2014.0287") + " calls the expedition “a turning point in the history of relativity” and notes that the bending of light is now a standard tool, used to map dark matter and to find exoplanets."
    ],
  },
  {
    kicker: "2017",
    title: "The same test, a century later",
    subtitle: "21 August 2017",
    type: "Total", saros: "145", catalogueNo: "09546", date: "2017 Aug 21",
    magnitude: "1.0306", duration: "02m40s", seconds: 160, greatest: "37°N 88°W", pathWidth: "115 km",
    map: "images/map-2017.gif",
    mapAlt: "NASA catalogue map of the 21 August 2017 eclipse: the path of totality crosses North America.",
    paragraphs: [
      "The 2017 eclipse was a smaller event than the one of 1919. The " + link("catalogue", "https://eclipse.gsfc.nasa.gov/SEcat5/SE2001-2100.html") + " gives it 2 minutes 40 seconds on the central line and a path " + link("115 km wide", "https://eclipse.gsfc.nasa.gov/SEpath/SEpath2001/SE2017Aug21Tpath.html") + ". The 1919 eclipse had 6 minutes 51 seconds and 244 km, so on the central line it lasted " + (411 / 160).toFixed(1) + " times as long.",
      "" + link("Donald Bruns (2018)", "https://doi.org/10.1088/1361-6382/aaaf2a") + " used it to repeat the 1919 measurement. He set up a portable refractor, a CCD camera and a computerized mount in Wyoming. Before the eclipse he took night-time images to correct the optics. During totality he took star-field images 7.4 degrees on each side of the Sun for calibration, and 45 images of the sky around the Sun in the middle part of totality, 22 seconds of exposure in all. Star positions were compared with the US Naval Observatory’s UCAC5 catalogue.",
      "His result was a deflection coefficient of 1.752 seconds of arc, against a theoretical value of 1.751, with an uncertainty of only 3%. For comparison, the relative uncertainties worked out above for 1919 were about " + SOBRAL_UNCERTAINTY + "% at Sobral and " + PRINCIPE_UNCERTAINTY + "% at Príncipe.",
      "A limit of this page: only the paper’s abstract has been read, so nothing is said here about how the 3% was reached or what it leaves out."
    ],
  }
];

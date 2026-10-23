---
title: Real-time SIFT-MS for CO₂ reduction products
summary: "A method that measures ten reaction products about every two seconds. It contributed to a paper in ACS Analytical Chemistry."
year: "2024"
place: Advanced Materials Research Facility
organization: National Research Council Canada
role: Research assistant, funded by an NSERC Undergraduate Student Research Award
facts:
  - label: Dates
    value: "April to August 2024."
  - label: Place
    value: "National Research Council of Canada, Advanced Materials Research Facility, Mississauga."
  - label: Role
    value: "Research assistant, funded by an NSERC Undergraduate Student Research Award."
  - label: Tools
    value: "SIFT-MS (selected-ion flow-tube mass spectrometer), Autodesk Inventor, Blender, Excel, EndNote."
tileRatio: 1.6
order: 2
latest: 3
cover: ../../assets/projects/sift-ms-co2-reduction/lead.jpg
coverAlt: Exploded diagram of the two-compartment flow cell with platinum counter electrode, membrane, Ag/AgCl reference electrode and copper working electrode.
gallery:
  - src: ../../assets/projects/sift-ms-co2-reduction/poster-photo.jpg
    alt: "Me standing beside my research poster, Evaluating the Real-Time Electrocatalytic Performance of Copper Nanoparticles for CO2R, with sections for background, objectives, methods, results, conclusions, future work and references"
    caption: "Beside my poster at the McMaster Summer Research Fair."
  - src: ../../assets/projects/sift-ms-co2-reduction/lab-bench.jpg
    alt: "Me in a blue lab coat and safety glasses working at the electrochemistry bench, with pumps, tubing and the mass spectrometer's sample line around me"
    caption: "Running an experiment at the bench."
  - src: ../../assets/projects/sift-ms-co2-reduction/flow-cell.jpg
    alt: "The clear acrylic two-compartment flow cell, with white screws along its face, a yellow fitting on top and two metal electrode tabs"
    caption: "The two-compartment flow cell."
  - src: ../../assets/projects/sift-ms-co2-reduction/bench-setup.jpg
    alt: "Overhead view of the experiment: two red peristaltic pumps, a mass flow controller, two white-lidded electrolyte bottles with tubing, and the flow cell on a hot plate"
    caption: "The experiment set up: pumps, electrolyte bottles, mass flow controller and the cell."
  - src: ../../assets/projects/sift-ms-co2-reduction/setup-schematic.jpg
    alt: "Diagram of the setup: a potentiostat and two pumps connected to the two-compartment cell, with catholyte and analyte bottles, a CO2 cylinder with mass flow controller, a mass flow meter and the SIFT-MS"
    caption: "My diagram of the electrolyte and gas flow setup, from the CO₂ supply to the SIFT-MS."
embeds:
  - label: "Poster: Evaluating the Real-Time Electrocatalytic Performance of Copper Nanoparticles for CO₂R"
    src: /SIFT-MS-CuNP-poster.pdf
    ratio: 1.5
    maxRem: 62
  - label: "EndNote guide for new users, written for students joining the group"
    src: /EndNote-guide-for-new-users.pdf
    ratio: 0.8
    maxRem: 46
links:
  - label: "McMaster Engineering news: the CO₂ reduction team's low-cost catalyst for turning CO₂ into carbon monoxide"
    href: https://www.eng.mcmaster.ca/chemeng/news/a-catalyst-for-change-mcmaster-researchers-discover-a-low-cost-path-to-carbon-conversion/
  - label: "Paper: SIFT-MS for real-time quantitative measurement of electrochemical CO₂ reduction products (ACS Analytical Chemistry, October 2025)"
    href: https://pubs.acs.org/doi/full/10.1021/acs.analchem.5c04792
    note: "Author. I helped develop the real-time quantification method and ran flow cell experiments and data analysis."
tags: [instrumentation]
compact: true
galleryHeight: 12
tools: [Selected-Ion Flow-Tube Mass Spectrometer (SIFT-MS), Autodesk Inventor, Blender, Excel, EndNote]
fit: contain
plate: '#ffffff'
group: "research"
outcome: "Developing a method for measuring 10 reaction products every 2 seconds, contributed to a paper in ACS Analytical Chemistry."
---
Summer 2024 I worked at the NRC's Advanced Materials Research Facility, funded by an NSERC Undergraduate Student Research Award. I helped develop a method to quantify the products of electrochemical CO₂ reduction in real time with a selected-ion flow-tube mass spectrometer (SIFT-MS). To test it, I ran 25 nm copper nanoparticle catalysts in a flow cell. The instrument read ten products, seven liquid and three gaseous, about every two seconds at four applied potentials.

NMR, HPLC and gas chromatography can't show how a catalyst changes over time, and they take hours to days to judge one catalyst. SIFT-MS reads products within seconds, so a catalyst can be watched while it runs. This would be useful in the search for catalysts that turn CO₂ into useful chemicals and fuels.

## Cell design

- **Modelled the two-compartment cell.** I built the experimental flow cell in Autodesk Inventor: two compartments separated by an anion exchange membrane, with working, counter and reference electrodes.
- **Fixed a leak.** The first design leaked, so I adapted it with an improved screwing mechanism.
- **Illustrations.** I made illustrations and computational models in CAD and Blender to explain catalyst structures and the setup in publications and presentations.

![A Blender window rotating an exploded view of the flow cell: a plate with rows of screws, the two compartments with a membrane between them, and a back plate with long screws.](../../assets/projects/sift-ms-co2-reduction/flow-cell-blender.gif "w40:")

## Experiments and method

- **Experimental design.** I designed and validated the experimental methods using the scientific method.
- **Real-time measurement.** The headspace above the catholyte was sampled by the SIFT-MS to quantify seven liquid and three gaseous products, with a reading about every two seconds, while a potentiostat held the electrode at four applied potentials.
- **Repeatability.** The experiments were run three times to validate the results.
- **Efficiency and selectivity.** I executed experiments evaluating the efficiency and selectivity of the electrocatalysts, supported by data from real-time characterization.

## Data analysis

I processed over 10,000 real-time data points across ten products and four applied potentials, and improved the Excel workbook scripts that deconvolute signals into concentrations, production rates, Faradaic efficiencies and partial current densities. Several products give overlapping signals, so I used deconvolution formulae in Excel, built on calibration runs with known concentrations. In the final report, ethene reached a partial current density approaching 100 mA/cm² at the most negative potential tested.

![SIFT-MS time series of analyte concentrations in ppm for ten products, with a table of slope values and a mixture calibration curve of concentration against ppm](../../assets/projects/sift-ms-co2-reduction/sift-time-series.jpg "even12: SIFT-MS signal for the ten products over time, with the slope table and calibration curve used to convert ppm into concentration.")
![Spreadsheet titled SIFT data analysis, with columns of deconvolved concentrations, Faradaic efficiency and partial current density for each product](../../assets/projects/sift-ms-co2-reduction/excel-analysis.jpg "even12: The Excel workbook that converts the signals into concentrations, Faradaic efficiencies and partial current densities.")

## Presenting and sharing the work

- Wrote a final report on the findings and presented a poster at the McMaster Undergraduate Research Fair (embedded below). The study contributed to the paper linked below.
- Wrote an EndNote guide for students new to citation management, embedded below.

I worked alongside other undergraduate researchers in a multidisciplinary team, and with the CO₂ reduction team at the NRC. McMaster Engineering featured that team's work on a low-cost catalyst that converts CO₂ into carbon monoxide.

![Four students standing in front of a National Research Council of Canada banner about advanced materials research.](../../assets/projects/sift-ms-co2-reduction/nrc-group.jpg "even12:")
![Three researchers in lab coats and safety glasses at an electrochemistry bench.](../../assets/projects/sift-ms-co2-reduction/co2r-team-news.jpg)

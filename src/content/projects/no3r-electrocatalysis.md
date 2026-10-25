---
title: Nitrate-to-ammonia electrocatalysis
summary: "H-cell experiments, product measurements and journal cover. Author on two papers."
year: "2023"
place: Hamilton, Ontario
organization: Higgins Lab, McMaster University
role: Undergraduate research assistant, Nitrate Reduction Team
facts:
  - label: Dates
    value: "September to December 2023."
  - label: Place
    value: "Higgins Lab, McMaster University, Hamilton, Ontario"
  - label: Role
    value: "Undergraduate research assistant, Nitrate Reduction Team."
  - label: Tools
    value: "Python, Blender, Autodesk Inventor, UV-vis spectroscopy, NMR"
order: 3
latest: 5
cover: ../../assets/projects/no3r-electrocatalysis/lead.jpg
coverAlt: ACS Catalysis journal cover artwork showing a molecular catalyst on a graphene surface.
links:
  - label: "Paper: Decoupling the Impact of Electronic Structure and Electrode Wettability of Functionalized Iron Phthalocyanine Catalysts for Electrochemical Nitrate Reduction to Ammonia (JACS, April 2026)"
    href: https://doi.org/10.1021/jacs.5c22794
  - label: "Paper: Elucidating the Impact of the Metal Center Identity and Macrocycle Structure of Molecular Catalysts for Electrochemical Reduction of Nitrate to Ammonia (ACS Catalysis, December 2025)"
    href: https://pubs.acs.org/doi/10.1021/acscatal.5c06580
coverAside:
  src: ../../assets/projects/no3r-electrocatalysis/lab-computer.jpg
  heightRatio: 0.925
  alt: Working at a computer beside an H-cell setup in the lab, with two colleagues standing behind.
tools: [Python, Blender, Autodesk Inventor, UV-vis spectroscopy, NMR]
rich: true
linksHeading: Publications
tags: [instrumentation]
group: "research"
outcome: "H-cell experiments and product quantification; author on papers in ACS Catalysis and JACS."
---

I spent September to December 2023 in the Higgins Lab at McMaster, on a team developing catalysts for electrochemical nitrate reduction to ammonia. The aim is a cleaner alternative to the Haber Bosch process, which makes ammonia but is very energy intensive. Our catalysts are single metal atoms held in small ring shaped molecules (porphyrins and phthalocyanines). I ran H-cell experiments, measured the products by UV-vis and NMR, and made the 3D figures, journal cover art and graphical abstracts for the papers below.

## The catalysts

I synthesized catalysts with copper based porphyrin and phthalocyanine structures. My case study resulted in a current density above 150 mA/cm² and less than 5% loss after 24 hours.

![Ball-and-stick model of a phthalocyanine macrocycle, with carbon in black, nitrogen in green and hydrogen in grey.](../../assets/projects/no3r-electrocatalysis/phthalocyanine-model.jpg "evenxl: A phthalocyanine molecule. The four nitrogen atoms (green) are where a metal atom, copper in our case, is added in the middle.")
![A copper atom held at the centre of a macrocycle by four green nitrogen atoms, lying on the wall of a carbon nanotube.](../../assets/projects/no3r-electrocatalysis/cutpp-nanotube.jpg "My illustration of a copper porphyrin on the wall of a carbon nanotube support")

## Running the experiments

I carried out H-cell nitrate-to-ammonia electrolysis experiments. In an H-cell the cathode and anode sit in separate compartments joined across a membrane, with a reference electrode alongside the cathode, an argon line and an acid trap. I modelled the experimental H-cell in Autodesk Inventor, and the model appears in the Blender scenes I built for our figures.

![The H-cell on the bench: two electrode compartments side by side, with wires clipped to the electrodes, a reference electrode angled in from the left and tubing running to the cell.](../../assets/projects/no3r-electrocatalysis/h-cell-setup.jpg "evenlg: The H-cell experimental setup.")
![A render of the H-cell with the reference electrode, cathode, argon inlet, anode, membrane and acid trap labelled.](../../assets/projects/no3r-electrocatalysis/h-cell-render.jpg "evenlg: My labeled H-cell diagram.")
![Blender window rotating a 3D model of an H-cell with electrodes and wires.](../../assets/projects/no3r-electrocatalysis/h-cell-blender.gif "evenlg: H-cell model in Blender.")

## Quantifying the products

I quantified the products by UV-vis spectroscopy and NMR and calculated Faradaic efficiencies, then analyzed the data to see how the active sites affect the reaction mechanism and the selectivity of the products.

Because the samples are colourless, I labelled and colour coded every vial. I also took careful notes to learn from my own mistakes and those of my colleagues, so that errors were not repeated.

![Black electrode pieces each in its own dish on a cutting mat beside lab notebook pages and a sticky note.](../../assets/projects/no3r-electrocatalysis/electrode-prep.jpg "even16: Electrode pieces being drop cast with catalyst ink before an experiment.")
![Rows of amber sample vials with blue tape labels on their caps, and bottles marked Step 1, Step 2 and Step 3.](../../assets/projects/no3r-electrocatalysis/sample-prep-vials.jpg "Sample preparation: every colourless sample gets a colour coded label, and the bottles are marked by step.")
![Open lab notebook with a hand drawn H-cell sketch, tables of conditions and the sample preparation steps for UV-vis and NMR.](../../assets/projects/no3r-electrocatalysis/lab-notebook.jpg "Notebook pages: the experiment setup, conditions for each run and sample preparation for UV-vis and NMR.")

## Computational models and figures

![Blender's scripting workspace with the Python script, the Python console and the atom models of a molecule selected in the viewport.](../../assets/projects/no3r-electrocatalysis/blender-script.jpg "evenxl: The script in Blender's scripting workspace: it places each atom and bond, collects them into AtomsCollection and BondsCollection, and assigns materials by element.")
![Blender window showing a 3D model of an orange molecule.](../../assets/projects/no3r-electrocatalysis/molecule-blender.gif "A molecule built by the script, selected in Blender.")

The script is on [GitHub](https://github.com/madelinelebreton/molecule-scripting-blender), adapted from Jakob Kibsgaard's Blender course. It reads a molecule's atoms and bonds from an .sdf or .mol file and builds the 3D model in Blender: a sphere for each atom, a cylinder for each bond, and a material for each element. Double and triple bonds are drawn as parallel cylinders, and each bond takes the colour of the atoms at its ends. The script made the molecular models for the ACS Catalysis cover, which I designed, and rendered components of the graphical abstract.

![Graphical abstract: an H-cell with electrodes, a carbon nanotube decorated with metal macrocycle catalysts, and nitrate converting to ammonia, with electron microscopy and spectroscopy insets.](../../assets/projects/no3r-electrocatalysis/graphical-abstract.jpg "even14: Graphical abstract for the final publication, built from the H-cell and catalyst models.")
![Group members in lab coats and safety glasses gathered around a flask at the lab bench.](../../assets/projects/no3r-electrocatalysis/higgins-group.jpg "Collaborating on the Nitrate Reduction Team")
![Blender scene with a carbon nanotube, a pipette and molecule models.](../../assets/projects/no3r-electrocatalysis/blender-scene.jpg "Blender scene for the journal cover I designed.")

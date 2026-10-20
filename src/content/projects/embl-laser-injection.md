---
title: Laser injection system for synchrotron crystallography
summary: Characterizing and optimizing a prototype laser injection system at the European Photon and Neutron Science Campus in Grenoble, France.
year: "2025"
place: European Photon and Neutron Science Campus, Grenoble, France
organization: EMBL Instrumentation Team
role: Characterization and optimization of an existing prototype
order: 2
latest: 2
cover: ../../assets/projects/embl-laser-injection/optical-setup.jpg
coverAlt: "Optical layout of the laser injection system: injecting collimator, optical fiber, projecting collimator, motorized gimbal, objective, cameras and detector."
focal: center
coverCaption: My characterization of the gimbal-controlled optical system
tools: [Python, Java, XILabs gimbal, DataRay beam profiler, Thorlabs power meter, OXXIUS lasers]
gallery:
  - src: ../../assets/projects/embl-laser-injection/lead.jpg
    alt: "Two sets of beam-spot images from the laser tests, one at 405 nm and one at 450 nm, each showing the spot at the centre and at four corner positions"
    caption: "Beam-spot images from the laser tests at 405 nm and 450 nm."
  - src: ../../assets/projects/embl-laser-injection/oav-transmission.jpg
    alt: "Five colour maps of transmission rate across the gimbal range, one for each laser wavelength from 375 to 638 nm"
    caption: "Transmission rate across the gimbal range for five OXXIUS lasers (375, 405, 450, 522 and 638 nm), measured at 225 points with the DataRay beam profiler."
    wide: true
  - src: ../../assets/projects/embl-laser-injection/oav-spot-size.jpg
    alt: "Five orange-red colour maps of spot size across the gimbal range, one for each laser wavelength"
    caption: "Spot size across the gimbal range for the same five lasers."
    wide: true
  - src: ../../assets/projects/embl-laser-injection/oav-spot-shape.jpg
    alt: "A five by five grid of beam images from the profiler, mostly round spots, with some distorted at the corners"
    caption: "Beam images at 25 locations across the gimbal range (450 nm): the spot stays mostly circular and changes shape at the extremities."
    wide: true
  - src: ../../assets/projects/embl-laser-injection/oav-ellipticity.jpg
    alt: "Five green colour maps of spot ellipticity across the gimbal range, one for each laser wavelength"
    caption: "Spot ellipticity across the gimbal range for the five lasers, above 80% across the physical range."
    wide: true
  - src: ../../assets/projects/embl-laser-injection/oav-repeatability.jpg
    alt: "Scatter plot of 200 coordinates recorded during a repetitive motion test, with the home point marked in red"
    caption: "Repeatability test: the gimbal returned to a home position after each of 100 randomly generated positions, with the home coordinates varying by about ±6 µm."
    wide: true
  - src: ../../assets/projects/embl-laser-injection/oav-duration.jpg
    alt: "Step chart of movement duration against distance, with diagrams showing the single-axis and diagonal ranges both taking 1.3 seconds"
    caption: "Duration of gimbal movements at the fastest settings: the full range takes 1.3 s."
    wide: true
galleryHeading: Some samples of my work
galleryColumns: 2
tags: [instrumentation]
compact: true
fit: contain
plate: '#ffffff'
---
Project during my internship at the European Molecular Biology Laboratory's Instrumentation Team, which develops scientific instrumentation for synchrotron beamlines and cryo-electron microscopy.

![Me wearing laser safety glasses, seated beside the laser injection setup in its black enclosure on an optical bench.](../../assets/projects/embl-laser-injection/lab-bench.jpg "even7: At the laser injection setup.")
![The motorized laser injection prototype on an optical bench, with a red laser beam, a fibre and a gimbal.](../../assets/projects/embl-laser-injection/laser-bench.jpg "Prototype on the optical bench.")
![Whiteboard notes with formulas for spot size and the geometry of the fibre and collimators.](../../assets/projects/embl-laser-injection/whiteboard-optics.jpg "even7: Optics sketches")
![Screen recording of beam profiler software showing a laser spot and its intensity profile.](../../assets/projects/embl-laser-injection/dataray-beam-profile.gif "even7: Focusing the laser profile")

I helped develop a motorized, wide-wavelength-range laser injection system for time-resolved macromolecular X-ray crystallography at the synchrotron, a collaboration between the European Synchrotron Radiation Facility and the EMBL. Light from lasers at several wavelengths is carried by optical fibre to a collimator and focused onto the sample by an objective, steered by a motorized gimbal. The optical design draws on photonics and precision instrumentation, which I learned during this work term.

## What I did

- **Theory.** Understood the optical design and built a theoretical model of the system for transmission rate and laser spot size.
- **Test bench.** Assembled and aligned the bench, first with a simplified, non-motorized version of the system for the initial evaluations, then with the custom designed and manufactured motorized system.
- **Measurement.** Wrote Python scan routines that interface a DataRay beam profiler, a power meter and the motorized gimbal, to automate transmission, spot size and ellipticity mapping across the gimbal range. I showed that the gimbal repeats a position within about ±6 µm and crosses its full range in 1.3 s at maximum speed settings.
- **Design fix.** Found that lower transmission in one corner of the range came from a misalignment in the mechanical design of the prototype. I took my analysis to the CAD engineering office with a proposed solution, and the critical parts were redesigned and re-manufactured, which gave a fully functional prototype.
- **Reporting.** Documented each test in structured technical reports, which the team shares with its collaborators at the ESRF and with industrial partners, and presented the results to a working group of beamline scientists and engineers from several institutions.

![The EMBL Grenoble building, with four members of the instrumentation team standing in front of it.](../../assets/projects/embl-laser-injection/team.jpg "evenlg: The team at EMBL.")
![Welcome sign for the EPN Science Campus listing the Institut Laue-Langevin, ESRF, EMBL and IBS, with a mountain behind.](../../assets/projects/embl-laser-injection/epn-campus.jpg "The EPN Campus.")

![My card on the Instrumentation team board at EMBL Grenoble, reading Madeline LEBRETON, Technical Trainee.](../../assets/projects/embl-laser-injection/staff-card.jpg "w22: My team card.")

![Madeline standing on a walkway above the large experimental hall of the synchrotron.](../../assets/projects/embl-laser-injection/esrf-hall.jpg "even: At the synchrotron.")
![A diffractometer at a beamline, with cables and tubing, labelled Arinax MD2-S.](../../assets/projects/embl-laser-injection/md2-diffractometer.jpg "An Arinax MD2-S diffractometer.")

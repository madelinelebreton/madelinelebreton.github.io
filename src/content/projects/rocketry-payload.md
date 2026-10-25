---
title: Fracture-test payload on Osiris
summary: "I designed the experiment and the battery housing for a payload that placed first in the Payload Challenge at Launch Canada 2026."
year: 2025–26
place: Hamilton, Ontario
organization: McMaster Rocketry
role: Experiment and battery housing design
facts:
  - label: Year
    value: "2025–26"
  - label: Place
    value: "Hamilton, Ontario"
  - label: Organization
    value: "McMaster Rocketry"
  - label: Role
    value: "Experiment design and battery housing, Payload team."
  - label: Team
    value: "Team of 7."
  - label: Tools
    value: "Onshape, Autodesk Inventor stress analysis, 3D printing, Excel."
order: 1
latest: 4
cover: ../../assets/projects/rocketry-payload/lead.jpg
coverAlt: Assembled cylindrical payload frame on a table at a competition.
focal: center 40%
hideCover: true
links:
  - label: "Team reel: McMaster Rocketry at Launch Canada 2026 (Instagram)"
    href: https://www.instagram.com/reel/DceuL8LR-SN/
  - label: "McMaster Rocketry: Magpie payload page"
    href: https://macrocketry.ca/payloads/magpie/
sectionLinks:
  - label: Experimental design
    href: "#experimental-design"
    image: ../../assets/projects/rocketry-payload/exp-selfhealing-tile.png
  - label: Fracture mechanism design
    href: "#fracture-mechanism-design"
    image: ../../assets/projects/rocketry-payload/fracture-mechanism.gif
  - label: Simulation and validation
    href: "#simulation-and-validation"
    image: ../../assets/projects/rocketry-payload/fea-7lb-after.png
  - label: Battery housing
    href: "#battery-housing"
    image: ../../assets/projects/rocketry-payload/battery-case.gif
  - label: Integration
    href: "#integration"
    image: ../../assets/projects/rocketry-payload/lead.jpg
    focal: center 40%
embeds:
  - label: "Onshape guide: designing a parametric electronics enclosure"
    src: /payload-onshape-guide.pdf
    ratio: 0.77
    maxRem: 54
rich: true
tags: [instrumentation, robotics]
tools: [Onshape, Finite element analysis, 3D printing]
group: "robotics"
outcome: "Experiment and battery housing for a payload that placed first in the Payload Challenge."
---
McMaster Rocketry's rocket Osiris flew at Launch Canada 2026, a student rocketry challenge held in Timmins, Ontario. Our payload, Magpie, placed first in the Payload Challenge. The flown module was a baseline fracture test of epoxy samples under real flight loads, as groundwork for a later self-healing polymer payload. Osiris reached 33,528 ft and a top speed of Mach 2.

I worked on two parts of the payload: designing the fracture experiment with the team, and designing the battery housing. This page follows both, from the decision matrix to the printed case.

![The rocket Osiris, white with the team's sponsor logos and a gold and black chevron pattern.](../../assets/projects/rocketry-payload/osiris-rocket.png "tallspan: Osiris, the team's rocket for Launch Canada 2026.")

![Five payload team members standing with the rocket in front of an engineering building.](../../assets/projects/rocketry-payload/payload-team.jpg "wide: Payload team with the rocket.")

The payload is a stack of three identical experiment stations above three circuit boards, held in an aluminum frame inside a 4 inch airframe.

## At a glance

- **Experiment.** A tapered double cantilever beam (TDCB) fracture test, modified so the crack can be closed again. Three identical stations fly.
- **Critical load.** 39 N for a 6.35 mm sample with a 2.5 mm groove. The first lead-screw concept needed 0.41 Nm of torque with a factor of safety of 3, before the design moved to a single linear actuator.
- **Mass.** 327 g per module, 981 g for three, within a 1.6 kg payload allocation.
- **Simulation.** Widening the weakest regions of the sample and thickening its base by 2 mm raised the factor of safety above 3 in the stress analysis.
- **Battery case.** Four Onshape versions, printed and tested with a snap fit.

![The Magpie payload poster: a render of the cylindrical payload in the centre, with sections on the experiment, the bus and the electronics.](../../assets/projects/rocketry-payload/magpie-poster.jpg "even26: The Magpie payload poster")
![CAD render of the payload module with three experiment stations above a stack of three circuit boards.](../../assets/projects/rocketry-payload/payload-cad.png "even26: The payload module CAD assembly")
![Animated CAD view of the payload assembly rotating.](../../assets/projects/rocketry-payload/payload-assembly.gif "even26: Animated payload assembly")

[Open the full size Magpie payload poster](/magpie-payload-poster.jpg)

## Experimental design

The payload experiment defines the scientific value of a flight. In flight the payload sees vibration, acceleration and mechanical stress together, which is hard to reproduce in a lab. We wanted data from that environment on how epoxy fractures, as a baseline for self-healing materials, which offer promising applications in reusable rockets.

| Objectives | Constraints |
| --- | --- |
| Address a gap in the literature for high powered rocketry. | Respect the vehicle design and its environmental stresses. |
| Be easy to manufacture and cost effective. | Be feasible within the time and financial budgets. |
| Produce data that is useful and relevant to the scientific community. | Not exceed the supplied battery power, and store all experimental data locally. |

### Choosing the experiment

I started by brainstorming a list of experiments that use the unique flight environment. Preliminary research narrowed it to two ideas:

![A brainstormed list of experiment ideas, including self-healing polymers in microgravity, resonance reduction and an EMF generator.](../../assets/projects/rocketry-payload/exp-brainstorm.png "right: The brainstormed experiment list.")

- **Self-healing polymer performance.** Quantify how well microcapsule based self-healing polymers activate under launch vibration, acceleration and microgravity, recording the growth of microcracks and their healing with embedded sensors or high resolution imaging.
- **Resonance avoidance.** Test a countersnapping or metamaterial based vibration suppression mechanism under flight loads, to see whether natural frequency switching happens as predicted and whether resonance amplitudes are reduced.

![Illustration of the resonance avoidance experiment: a counter-snapping mechanism, the flight context and the expected outcome.](../../assets/projects/rocketry-payload/exp-resonance.png "w38: High level illustration of the resonance avoidance experiment.")

We used a decision matrix pick between them. It also included two other ideas that were dismissed due to infeasibility. The two finalists scored very similarly, and the team chose the polymers experiment after having issues obtaining baseline resonance vibration data.

![Decision matrix scoring four experiments on novelty, scientific relevance, feasibility and capability, with the self-healing polymers and resonance suppression close at the top.](../../assets/projects/rocketry-payload/decision-matrix.png "The decision matrix used to narrow the selection.")

### Refining the experiment

![Illustration of the self-healing polymer experiment: a crack forming, resin released, and the healed region, with the flight context and expected outcome.](../../assets/projects/rocketry-payload/exp-selfhealing.png "right30: High level illustration of the self-healing polymer experiment.")

For the sample material I wrote a set of engineering requirements from the project constraints: it had to use feasible microencapsulation techniques, keep its mechanical integrity before fracture, crack in a controlled way without failing catastrophically, heal when capsules rupture, and be possible to fabricate within lab limits.

Self-healing polymers with embedded microcapsules that rupture and release a hardening resin looked most promising. I compared four established microencapsulation methods on capsule robustness and rupture behaviour, fabrication complexity, compatibility with polymer matrices and reproducibility from the literature: solvent evaporation with PMMA walls, in-situ polymerization, urea-formaldehyde encapsulation and interfacial polymerization.

I selected **urea-formaldehyde microcapsules**, because they:

- are widely validated in the literature for self-healing polymers,
- produce consistent, mechanically stable capsules,
- rupture reliably under crack propagation,
- are compatible with common polymer matrices, and
- are relatively accessible to synthesize.

Interfacial polymerization and solvent evaporation add fabrication complexity or variability, which made them less suitable for the project's scope and timeline.

## Fracture mechanism design

To judge self-healing, a sample has to be cracked on purpose and then assessed before and after healing. Our payload needed a compact, reliable mechanism to do that.

### Researching fracture methods

The experiment needs controlled, partial fractures that trigger the healing mechanism without splitting the sample in two. I evaluated five standard geometries.

![CAD of the final experiment module: red arms moving on a blue block with a yellow bracket, on a circular plate.](../../assets/projects/rocketry-payload/fracture-mechanism.gif "right: The final experiment module")

1. **Compact tension with cyclic loading.** Controlled fractures from a sinusoidal tensile force. It needs a complex loading setup and a long test time, and it was doubtful whether the payload could generate the force within the flight duration.
2. **Tapered double cantilever beam (TDCB).** Two bonded beams split at one end, loaded in tension to make partial fractures. It is widely used for fracture and self-healing studies, allows stable crack growth, and is well documented and reproducible.
3. **Charpy impact.** A swinging mass breaks the sample at a notch. It usually fractures the sample completely, which is unsuitable for controlled partial cracks.
4. **Wedge splitting.** Used for concrete. Compressive loading promotes stable crack growth, but the mechanical setup is more complex.
5. **Three-point bending.** A simple, widely available setup that can give controlled partial fractures with careful loading, and could also press the crack faces back together to evaluate healing.

### Selected approach

I selected a TDCB geometry, modified with ideas from three-point bending so that the crack can be closed again. It allows controlled crack initiation and growth, is simpler to implement than compact tension or wedge splitting, suits small samples, and allows repeated tests and a healing evaluation.

Early on I sketched out fracture, gripping and loading mechanisms, and modular sample holders, on paper before moving to CAD.

![Pencil sketches of fracture mechanism concepts on lined paper.](../../assets/projects/rocketry-payload/sketch-1.jpg "Early concept sketches for the fracture mechanism.")
![Pencil sketches of a gripping and loading mechanism, with a force-versus-time plot.](../../assets/projects/rocketry-payload/sketch-2.jpg "Gripping and loading concepts.")
![Handwritten notes and sketches of a double cantilever beam mechanism.](../../assets/projects/rocketry-payload/sketch-3.jpg "Double cantilever beam sketches.")
![Blue ink sketches of modular sample holders and actuator layouts.](../../assets/projects/rocketry-payload/sketch-4.jpg "Modular sample holders.")

### Fracture framework

![Sketch of a motor and lead screw mechanism that drives the sample for displacement control.](../../assets/projects/rocketry-payload/lead-screw-sketch.png "right: The motor and lead screw concept (sketch by teammate Christina Zhou).")

A motor driven lead screw was proposed to apply controlled tensile loading. My job was to check whether that was feasible within the hardware limits, and to balance fracture stability against actuation requirements.

The TDCB geometry was chosen because its compliance changes at a constant rate with crack length, which allows stable, measurable crack growth. I modelled the problem with linear elastic fracture mechanics in Mode I (opening), assuming small scale yielding, quasi-static loading and room temperature.

Fracture happens when the strain energy release rate G_I exceeds the critical fracture energy G_IC. To avoid a catastrophic failure and get stable crack growth instead:

- The system is designed to operate at G_I ≈ 1.1 to 1.3 × G_IC.
- The sample gets stiffer near its end, which lowers G and stops the crack before the sample separates.
- A notched pre-crack makes the fracture start where it should.

For actuation, a motor and lead screw provide displacement-controlled loading, which is more stable than controlling force and allows a precise crack start within the payload's limits.

### Theory and results

The TDCB geometry has a constant compliance gradient, so the fracture energy can be calculated with relationships from the literature. They use the critical load, Young's modulus, the sample geometry and the compliance variation:

- G_IC = m · 4P_c² / (E · β²), the critical fracture energy
- m = (E · b / 8) · dC/da, the geometry factor, set by the constant compliance gradient
- β = √(b · b_n), the Mostovoy effective thickness

where P_c is the critical load, and dC/da is how the sample's compliance C changes with crack length a. I approximated the material with EPON 828 epoxy, the matrix of our self-healing composite. I put the equations in a parameterized spreadsheet to see how the geometry changes the fracture behaviour.

![Parameterized spreadsheet of the fracture critical load calculation, with the selected values highlighted.](../../assets/projects/rocketry-payload/load-spreadsheet.png "small: The fracture critical load spreadsheet.")

With a sample thickness of 6.35 mm and a groove thickness of 2.5 mm, the critical load comes to **39 N**.

To turn that into a motor requirement, I used the lead screw torque relation T = F · l / (2π · e), with a factor of safety of 3, a screw lead of 2 mm per revolution and an efficiency of 0.9. The required torque is **0.41 Nm**, within the range of compact stepper motors, so the concept was feasible.

![Spreadsheet calculating the required motor torque from the critical load, screw lead, efficiency and factor of safety.](../../assets/projects/rocketry-payload/torque-spreadsheet.png "small: The motor torque calculation.")

### Limits of the calculations (ideal assumptions)

- **Notch geometry.** The framework assumes a notch tip radius of 0 mm, but machined notches have a radius of 0.1 to 0.3 mm, which changes crack initiation. To reduce the effect I planned to try razor blade tapping to sharpen the notch.
- **Material properties.** I assumed our material has the same fracture energy as EPON 828. A double cantilever beam test could confirm the real value.
- **Viscoelastic effects.** Rate-dependent fracture behaviour is not modelled.
- **Lead screw efficiency.** I assumed 0.9, a typical value for a ball screw (0.85 to 0.95). It depends on the component chosen, and other screw types are much lower, for example 0.3 to 0.4 for acme screws.

### Design iteration: a linear actuator

After the lead screw concept was validated, a design review found a way to simplify the mechanism while keeping controlled loading. A double lead screw system overcomplicates the mechanism for little benefit, and loading from one side can give comparable fracture behaviour if the sample is properly constrained.

<div class="align-bottom">
<div class="ab-text">

Our revised mechanism replaces the motor and lead screw with a single linear actuator that applies displacement-controlled loading. One side of the TDCB sample is fixed while the actuator pushes the other, and the sample is constrained at several contact points to keep it aligned. This cuts complexity and assembly time, makes the design more compact for the payload, and gives repeatable displacement from the actuator’s built-in feedback. The tradeoff is asymmetric loading, which differs from the standard TDCB test and may change the fracture behaviour compared with ideal Mode I, so the constraints have to be designed carefully.

</div>

![CAD render of one fracture test mechanism, colour coded, on a circular plate.](../../assets/projects/rocketry-payload/fracture-mechanism-cad.png "w21: One of the fracture test mechanisms, in CAD.")

</div>

## Simulation and validation

Before any prototyping, I checked the design with a mass estimate of the whole experiment module and finite element analysis (FEA) of the TDCB sample under load.

### Mass estimate

I compiled a spreadsheet of CAD data and material properties to get a detailed mass breakdown. Machined volumes came from Onshape, material properties from supplier datasheets, and mass is volume times density.

![Spreadsheet of component masses with material, volume, density and mass for each part.](../../assets/projects/rocketry-payload/mass-spreadsheet.png "wide: The component spreadsheet for the mass calculation.")

![Onshape mass properties panel beside a breakdown of the experiment module components.](../../assets/projects/rocketry-payload/onshape-breakdown.png "wide: The Onshape breakdown of the experiment module.")

Onshape's mass properties tool checked the result. My calculation gave 326.82 g and Onshape gave 328.05 g, within 0.4%. The assumptions are the load cell material (an average density of 7.93 g/cm³ because the manufacturer data was ambiguous), the linear actuator (18 g from its specification, with no mounting hardware) and small differences between CAD material libraries and datasheets. The close agreement suggests the estimate is accurate enough for design validation.

One module is about 327 g, and the payload carries three identical modules, so the experiment mass is 3 × 327 g = 981 g. Against the payload’s 1.6 kg allocation, that leaves a margin of 0.62 kg for wiring, electronics, fastening and mounting hardware, safety factors and uncertainty in component masses.

![Table of the rocket's mass allocation by subteam.](../../assets/projects/rocketry-payload/mass-allocation.png "The rocket's mass allocation by subteam.")

### Finite element analysis

I used Autodesk Inventor's stress analysis on the TDCB sample, in EPON 828 epoxy from literature values. Bearing constraints went on the pin points, fixed supports at the actuator and mounting locations, and loads from 5 to 10 lbs (22 to 44 N). The mesh was refined to 1 mm near the crack tip.

![The TDCB sample in Inventor with pin constraints and the loading conditions marked.](../../assets/projects/rocketry-payload/fea-setup.png "even: The FEA setup, with pin constraints and loading.")
![Safety factor plot of the sample at 7 lbs, with red regions at the outer edge.](../../assets/projects/rocketry-payload/fea-7lb.png "even: The first FEA result at 7 lbs.")
![Safety factor plot of the sample at 10 lbs, with larger red regions.](../../assets/projects/rocketry-payload/fea-10lb.png "even: The first FEA result at 10 lbs.")

I checked the factor of safety (FOS) across the load range. At 7 lbs (31 N) there was stress on the outer edge, and red marks an FOS below 3. At 10 lbs (44 N) the stress concentrations grew and the outer edge was likely to fail.

To stop the sample failing away from the intended crack, I proposed making the weakest regions wider and the base 2 mm thicker, and kept the fillet to limit stress concentrations. That raised the FOS above 3.

![The revised sample outline with the thickened regions marked.](../../assets/projects/rocketry-payload/tdcb-thickened.png "even: The thickened regions, with the fillet kept.")
![Safety factor plot of the revised sample at 7 lbs, mostly green and blue.](../../assets/projects/rocketry-payload/fea-7lb-after.png "even: The revised sample at 7 lbs.")
![Safety factor plot of the revised sample at 10 lbs, mostly green and blue.](../../assets/projects/rocketry-payload/fea-10lb-after.png "even: The revised sample at 10 lbs.")

The revised sample is expected to withstand the analytically predicted critical load of 39 N, with acceptable FOS in the green and blue regions. Stress concentrates at the crack tip, consistent with the Mode I assumption, and the risk of complete fracture begins around 44 N. That supports achieving a controlled fracture within the expected force range.

The simulation has limits. EPON 828 properties stand in for our self-healing composite, and the results depend on the mesh size near the crack tip. I used it for trend validation and ballpark estimates, not precise measurements.

## Battery housing

![CAD animation of the battery housing assembly components.](../../assets/projects/rocketry-payload/battery-case.gif "right: The battery housing components, CAD animation.")

The battery housing is a critical part of the payload, because it keeps the onboard power reliable during flight. It has to protect the batteries from mechanical stress and vibration while staying compact enough for the payload bay.

| Objectives | Constraints |
| --- | --- |
| Enclose four 14500 batteries with wiring allowances. | Withstand peak accelerations of -7.5 to 28.5 g and temperature changes from 20 to 40 °C. |
| Be easy to manufacture and cost effective. | Fit within a 4 inch diameter and keep the height small. |
| Be modular, so the batteries can be reached without taking other modules apart. | Respect the weight limits of the vehicle design. |

### Design process

I ideated battery pack versions that balance modularity and integration.

![Pencil sketches of the modular battery case design.](../../assets/projects/rocketry-payload/batt-sketch-modular.png "right: My sketches of the modular design.")

![Pencil sketches of a battery holder integrated with the PCB holder.](../../assets/projects/rocketry-payload/batt-sketch-pcb.png "right: Sketches of integrating the case with the PCB holder.")

**Modularity.** I compared top opening and front opening designs for reaching the batteries without taking other modules apart. I chose top opening, so the PCB stack never has to be rewired or removed, and the case slides out the side with no strut in the way.

**Height.** One idea was to merge the battery case with the neighbouring PCB holder to save vertical space, which would also need fewer strut holes for fasteners. I didn't use it, because it gave up modularity.

**Fasteners.** The case attaches to three struts with heat inserts and M2.5 screws, for strength and to keep metric sizing consistent across the payload.

**Wiring.** I left room for positive and negative wires so each of the four batteries has a wiring route, between the batteries for space efficiency with an allowance for soldering.

![Sketch of the wiring between four batteries in a row.](../../assets/projects/rocketry-payload/batt-wiring-a.png "even: Wiring between the batteries.")
![Sketch of where the wiring sits between two adjacent batteries.](../../assets/projects/rocketry-payload/batt-wiring-b.png "even: The wiring location between cells.")

### Onshape prototypes

I modelled the case in Onshape in four versions, using variable parameters so it could adapt to dimensions that weren't final yet.

- **Version 1** met the size constraints, with space for the batteries and wiring and holes for the heat inserts and for fastening the top and bottom together.
- **Version 2** added a wire connector for modularity, used fillets instead of chamfers to avoid 3D printing sag, and used six fasteners instead of three for strength. Holes were placed symmetrically while keeping the 1.6 mm minimum thickness, and counterbores let the screws sit flush.
- **Version 3** used the offset feature for shadow lines that strengthen the printed edges, enlarged the wiring channels for 1.9 mm wires, added a snap-fit to restrain the batteries, and used a uniform 3.2 mm wall. The distance to the wire connector grew to 15 mm to allow a bend radius.
- **Version 4** used a curved profile to reduce stress concentrations, dropped the wire connector, and redesigned the lid to interface directly with the PCB stack.

![Version 1 of the battery case in Onshape, with a transparent top showing the cell slots.](../../assets/projects/rocketry-payload/batt-v1.png "even9: Version 1.")
![Version 2 of the battery case in Onshape, with an orange base and a yellow lid.](../../assets/projects/rocketry-payload/batt-v2.png "even9: Version 2.")
![Transparent view of version 2, showing the fasteners and cell slots.](../../assets/projects/rocketry-payload/batt-v2-transparent.png "even9: Version 2, transparent.")
![Detail of the wiring channel dimensions between two cells.](../../assets/projects/rocketry-payload/batt-wire-allowance.png "even9: Wiring allowance.")

![Version 3 of the battery case with an orange lid.](../../assets/projects/rocketry-payload/batt-assembled.png "evenlg: The assembled enclosure.")
![The base of the battery case, showing the cell slots.](../../assets/projects/rocketry-payload/batt-base.png "evenlg: The base of the case.")
![Transparent view of version 3.](../../assets/projects/rocketry-payload/batt-v3.png "evenlg: Version 3.")

![Animated Onshape views of the battery case.](../../assets/projects/rocketry-payload/batt-onshape-views.gif "evenlg: The Onshape model, rotating.")
![The lid of version 4 meeting the PCB stack.](../../assets/projects/rocketry-payload/batt-lid-pcb.png "evenlg: The lid interfaces directly with the PCB stack.")

### Integration into the payload assembly

I derived version 4 in the payload assembly, mating it to the bottom of the PCB stack and simulating the fasteners, using a master sketch to reference the mated parts. In practice the modular design lets the battery pack come out and the batteries be swapped without taking the whole bay apart.

![A master sketch with centre lines and planes used to mate the referenced parts.](../../assets/projects/rocketry-payload/batt-master-sketch.png "even22: The master sketch used to mate the parts.")
![The master sketch in use, with the payload stack mated to it.](../../assets/projects/rocketry-payload/batt-master-sketch-use.png "even22: The master sketch in use.")
![Animation of the battery case being integrated into the payload assembly.](../../assets/projects/rocketry-payload/batt-integration.gif "even22: Final integration into the payload assembly.")

I also wrote a technical how-to guide to the CAD tools I used and recorded the design's evolution for future team members working on similar components. [Open the Onshape guide](/payload-onshape-guide.pdf), also embedded at the bottom of this page.

### Manufacturing and validation

I 3D-printed test models to check the CAD tolerances.

![The bottom half of the printed case with a battery in one slot, showing the internal geometry.](../../assets/projects/rocketry-payload/print-bottom.png "even: The bottom half, showing the internal geometry.")
![The top half of the printed case, with the snap-fit features.](../../assets/projects/rocketry-payload/print-top.png "even: The top half, highlighting the snap-fit features.")
![The assembled printed case, with the top and bottom shells aligned.](../../assets/projects/rocketry-payload/print-assembly.png "even: The full assembly, with the top and bottom shells aligned.")

- **Snap-fit.** It engaged reliably in assembly and resisted separation under moderate force, validating the interference tolerances. I saw no plastic deformation after repeated use.
- **Shadow lines.** They worked, giving a seamless fit between the top and bottom.
- **Heat insert holes.** The printed holes were smaller than the inserts’ nominal size, so the inserts wouldn’t seat, probably from printer shrinkage and material flow. I added 0.2 mm in the next iteration.

![CAD model of the battery enclosure with an orange lid.](../../assets/projects/rocketry-payload/battery-case-cad.png "The updated battery enclosure in Onshape.")

Next time, I would model it fully parametrically from the start. Early on, I dimensioned features directly from the battery geometry, which caused widespread Onshape errors when the battery position changed. Rebuilding the case from a master sketch with defined parameters made it far more flexible, since clearances, wall thickness and component placement could change with a parameter instead of rework. I would also control versions more tightly and leave cosmetic features until the core geometry is final.

## Integration

I worked with the Controls and Airframe teams to integrate sensors for structural monitoring within the payload's constraints.

![The assembled payload frame seen through the open airframe: three experiment stations stacked above circuit boards, held in the aluminum frame between two end caps.](../../assets/projects/rocketry-payload/payload-inside.jpg "even26: The assembled payload inside the airframe: three experiment stations above the electronics, held in the aluminum frame.")
![Rocket lifting off from a forest clearing.](../../assets/projects/rocketry-payload/launch.jpg "Osiris lifting off at Launch Canada 2026.")

## Reflection

**Design approach.** I learned that the first solution is rarely the best and that progress comes from iterating quickly. Early on I spent too long developing initial concepts before testing them. A "fail fast" mindset, generating ideas without getting attached to them, led to better decisions, like moving from a dual lead screw mechanism to a simpler linear actuator.

**CAD and workflow.** Parameterization and structured modelling matter. Early modelling choices caused rework in Onshape, while later variables and stable references made iteration much faster, and I carried that into my spreadsheet calculations. Organized notes with clear headings also sped up revisiting decisions, calculations and assumptions.

**Engineering judgment.** The saying "all models are wrong, but some are useful" held here. Both the analytical calculations and the FEA relied on simplifying assumptions, but they gave useful insight. I learned to use models as decision making tools rather than expect perfect accuracy.

**Direction.** I was most interested in system behaviour and iterative problem solving. I’m drawn to work that combines physical systems with analytical reasoning, which reinforces my interest in a mechatronics focused career, particularly roles in hardware and software integration, controls and system design.

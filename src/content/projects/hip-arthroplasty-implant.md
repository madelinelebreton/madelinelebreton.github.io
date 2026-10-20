---
title: Hip implant for developmental hip dysplasia
summary: A team design project for a long-lasting total hip replacement that realigns the hip and promotes bone ingrowth, with the material choice backed by hand calculations.
year: September–December 2022
place: McMaster University
organization: Mechatronics Engineering, Health Solutions Engineering Design Projects
order: 12
cover: ../../assets/projects/hip-arthroplasty-implant/cover-cad-xray.png
coverAlt: On the left, the implant in CAD, exploded into the acetabular cup, liner, femoral head and a tapered femoral stem. On the right, an X-ray of a hip affected by dysplasia, with a plate and screws fixed to the femur.
rich: true
hideCover: true
fit: contain
plate: "#ffffff"
tools: [AutoCAD Inventor, 3D printing, Materials selection]
tags: [instrumentation]
---
For the final project of Health Solutions Engineering Design Projects, our team designed an implant for a patient case with Developmental Hip Dysplasia, a condition of the femoral head and the acetabulum of the pelvis. The implant realigns the hips and promotes bone ingrowth.

![The Re-Align poster: patient profile, form, our design, materials, surgical fixation and references, under the McMaster Integrated Biomedical Engineering and Health Sciences banner.](../../assets/projects/hip-arthroplasty-implant/poster.jpg "full: The Re-Align poster.")

[Open the poster as a PDF](/re-align-hip-prosthesis-poster.pdf)

## Design process

I started with preliminary research on the condition, then sketched the design to target the challenges of this patient case. The main difference from a standard replacement is that the implant adds to the bone, elongating it rather than drilling into it to even out the length of the patient's legs.

![Sketch of a hip bone with a purple implant: a piece on the surface of the hip bone to secure it, a socket, and a stem whose length evens out the legs.](../../assets/projects/hip-arthroplasty-implant/design-sketch.png "even18: A sketch of the implant on the hip: the piece that secures it to the surface of the bone, the socket, and the extra length that evens out the legs.")
![Pencil concept sketch of a hip implant, with notes on bone ingrowth, a polyethylene inner lining, plates and screws, and shortening the femur.](../../assets/projects/hip-arthroplasty-implant/concept-sketch.jpg "An early concept sketch, with notes on materials and the surgical approach.")

## Materials selection

I did the calculations for the metal of the acetabular component and the femoral stem. The choice was a β-type titanium alloy, Ti-6Al-7Nb, for its high ultimate strength, which gives a low fracture risk, and its softer cubic lattice phase, which reduces stress shielding. A porous hydroxyapatite coating promotes bone ingrowth. I worked out the fracture risk, the fatigue life and the magnitude of bone stress reduction from material property formulas, and compared metals and ceramics, with longevity and stress shielding in mind.

![Whiteboard calculation of fracture risk for a titanium implant: axial stress plus bending stress divided by ultimate tensile strength, giving about 2.7.](../../assets/projects/hip-arthroplasty-implant/calc-fracture-risk.jpg "evenlg: 1. Fracture risk: the axial and bending stresses against the alloy's ultimate tensile strength.")
![Whiteboard calculation of fatigue life for a titanium implant under tension and compression loads, giving a stress amplitude of 530 MPa.](../../assets/projects/hip-arthroplasty-implant/calc-fatigue.jpg "2. Fatigue life, from the cyclic load.")
![Whiteboard calculation of bone stress reduction from the compressive stress and the elastic moduli of bone and implant, giving about 25 MPa.](../../assets/projects/hip-arthroplasty-implant/calc-stress-reduction.jpg "3. Magnitude of bone stress reduction.")

For the liner I chose vitamin E-stabilized, highly cross-linked polyethylene (HXLPE). It reduces friction in the liner, which protects against metallosis, and produces far fewer wear particles than competing materials, which prevents debris-induced osteolysis.

## Prototyping

I 3D printed the parts to check the design. I had to reconsider the scale and orientation of the prints to keep them stable while printing.

![Two 3D printed implants, one green and one blue, with the stem, head and cup of each.](../../assets/projects/hip-arthroplasty-implant/prints.jpg "small: The printed prototypes.")

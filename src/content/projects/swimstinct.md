---
title: SwimStinct
summary: "A biomedical engineering design challenge. With a team of 4, I designed a wearable device that tells swimmers with visual impairments how far they are from the wall, using touch and sound instead of a tapper."
year: "2022"
place: McMaster University
organization: Mechatronics Engineering, Design Solutions for Accessibility and Independence
order: 11
cover: ../../assets/projects/swimstinct/verification.gif
coverAlt: "Animation of the device being verified in a simulated pool lane: a hand adjusts the wired device on a table with red flags as distance markers."
facts:
  - label: Year
    value: "2022"
  - label: Place
    value: "McMaster University"
  - label: Course
    value: "Mechatronics Engineering, Design Solutions for Accessibility and Independence"
  - label: Team
    value: "Four students."
  - label: My part
    value: "I designed the housing in Inventor and prototyped the clip and the tapping mechanism."
  - label: Tools
    value: "AutoCAD Inventor, 3D printing, LEGO prototyping"
rich: true
tags: [robotics]
tools: [AutoCAD Inventor, 3D printing, LEGO prototyping]
group: "design"
outcome: "A wearable device that alerts swimmers with visual impairments when they approach the wall."
---
![Two people at the pool edge reaching long poles with padded tips over the lane ropes to tap a swimmer in the water.](../../assets/projects/swimstinct/tappers.jpg "right: Tappers at the end of the lanes, using poles to tap swimmers with visual impairments as they approach the wall.")

Swimmers with visual impairments risk hitting the wall at the end of a length, so they usually need a coach standing at the end of the lane with a tapper to warn them. For a biomedical engineering design challenge, our team of four built **SwimStinct**, a wearable device that senses the distance between the swimmer and the wall and communicates it through non-visual outputs, so the swimmer can turn or finish without a person tapping them. The animation above shows the device being verified in a simulated pool lane: the flags are distance markers and the black T in front of the wall.



## Design process

### Where to put the device

Early sketches worked out where the mechanism should sit, based on the orientation of the distance sensor and the swimmer's body position while swimming. I prototyped a clip that attaches to the swim cap or ear and the goggle strap.

![Sketches of the device on a swim cap, the sensor orientation and a swimmer in correct and incorrect body positions.](../../assets/projects/swimstinct/location-sketches.png "even10: Sketches of where the mechanism could sit, and the sensor's orientation as the swimmer moves.")
![Sketches of an adjustable strap and clip for the swim cap and goggle strap.](../../assets/projects/swimstinct/clip-sketches.png "Sketches of the clip for the cap and goggle strap.")

I also tried other locations on the body, including a chest strap that would tap on the skin. I dismissed it as over-complicated, and chose a dual output that combines a buzzer with a physical tap.

### Housing

I shaped the housing as a teardrop, inspired by the streamlined bodies of fish, to reduce drag. I designed the 3D printed assembly in AutoCAD Inventor.

![A diagram of flow over a streamlined body, with laminar flow, turbulent flow, boundary layer separation and the wake labelled.](../../assets/projects/swimstinct/housing-flow.jpg "even12: Flow around a streamlined body, the reasoning behind the teardrop shape.")
![My sketch of the one-piece hydrodynamic teardrop housing, with the embedded tapper, buzzer, goggle strap holes and distance sensor labelled.](../../assets/projects/swimstinct/housing-sketch.jpg "My sketch of the one-piece housing.")

![CAD of the teardrop housing, closed and with the lid lifted to show a yellow part inside.](../../assets/projects/swimstinct/housing-cad-render.jpg "even11: The housing in CAD, closed and open.")
![The housing 3D printed in blue, with its lid and a small tray beside it.](../../assets/projects/swimstinct/housing-print.jpg "The 3D printed housing.")
![CAD render of the housing with a yellow motor, a disc and a thin tapping arm.](../../assets/projects/swimstinct/housing-cad.jpg "The housing with the motor and tapping arm in CAD.")

## An interview with a Paralympian

![Matt Cabraja standing in front of a dark background, wearing red swim briefs with a Canadian flag draped over his shoulders.](../../assets/projects/swimstinct/matt-cabraja.png "right14: Matt Cabraja, Paralympic swimmer. Photo: @matt_cabraja on Instagram (instagram.com/matt_cabraja).")

To get an insider's view, we met Matt Cabraja, a blind Paralympic swimmer. Hearing the strengths and weaknesses of our device from him showed how well it suited a user's needs and directed the next iteration. He confirmed the need for a device that improves independence.

His main points were to:

1. make the device independent of the pool, so it is accessible to everyone,
2. wear it on the head, where swimmers are already comfortable with devices such as snorkels, tempo trainers and heart rate monitors, and
3. add personalized settings, because the distance at which a swimmer starts a flip turn depends on height and personal preference.

## Mechanism prototyping

The tap needs a motor's rotation converted to a linear motion. I prototyped the options.

![A LEGO prototype seen from above: a motor, a long arm and a black rod.](../../assets/projects/swimstinct/yoke-top.jpg "even15: A LEGO prototype to check that a Scotch yoke mechanism would work.")
![The LEGO prototype from the side, with a large gear, a red base and a long black rod.](../../assets/projects/swimstinct/yoke-side.jpg)
![The LEGO prototype from the end, with a black rod angled above a stack of bricks.](../../assets/projects/swimstinct/yoke-end.jpg)

A revised mechanism used a zip tie as the flexible material, for a bigger range of motion. I tried several ways to convert the motor's rotation into a linear tap.

![The revised LEGO prototype on a table, with a gear, a long arm and a black rod.](../../assets/projects/swimstinct/zip-tie-left.jpg "even15: The revised mechanism, with a zip tie as the flexible material.")
![The revised prototype from the side, with a green zip tie as the flexible arm.](../../assets/projects/swimstinct/zip-tie-right.jpg)

Then I assembled the 3D printed parts into a proof-of-concept linkage, with angle and mate constraints for the flexible zip tie.

![CAD of the motor, disc, linkage and tapping arm.](../../assets/projects/swimstinct/mech-cad-motor.jpg "even15: From CAD to the printed proof of concept.")
![The same CAD model inside the teardrop housing.](../../assets/projects/swimstinct/mech-cad-housing.jpg)
![The printed parts wired up inside the housing.](../../assets/projects/swimstinct/mech-printed.jpg)

![A printed motor adapter holding the motor, with a gear on the shaft.](../../assets/projects/swimstinct/adapter-print.jpg "even15: The motor adapter, its drawing and the printed gear.")
![The engineering drawing of the gear motor adapter, with its dimensions.](../../assets/projects/swimstinct/adapter-drawing.jpg)
![A printed gear with a tan axle.](../../assets/projects/swimstinct/adapter-gear.jpg)

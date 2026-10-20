---
title: Microcontroller, circuits and controls labs
summary: "Lab and course projects in embedded C on a PIC16F887, a sequential digital circuit built from simulation to breadboard, and a ball-and-beam controls lab."
year: Course projects
place: McMaster University
organization: Mechatronics Engineering
order: 9
cover: ../../assets/projects/microcontroller-controls-labs/ball-and-beam.gif
coverAlt: Animation of a ball-and-beam rig on a lab bench next to a laptop plotting the response live as the ball is balanced.
coverWidth: 22
tools: [C, PIC16F887, MPLAB, Multisim]
gallery:
  - src: ../../assets/projects/microcontroller-controls-labs/microcontroller-boards.jpg
    alt: "Two green circuit boards and a white development board wired together inside a clear acrylic case, seen from above and turned on its side"
    caption: "Microcontroller boards in their acrylic case."
  - src: ../../assets/projects/microcontroller-controls-labs/analog-bench.jpg
    alt: "A lab bench with two power supplies, a multimeter, an oscilloscope, a laptop and jumper wires on a breadboard"
    caption: "Analog circuit lab bench."
  - src: ../../assets/projects/microcontroller-controls-labs/analog-breadboard.jpg
    alt: "A large breadboard densely wired with jumper wires and green tape labels"
    caption: "A labelled breadboard circuit."
  - src: ../../assets/projects/microcontroller-controls-labs/analog-leds.jpg
    alt: "A breadboard with colourful jumper wires and green LEDs lit, beside a signal generator and an oscilloscope"
    caption: "A breadboard circuit with lit LEDs."
rich: true
galleryHeight: 22
tags: [robotics]
---
Lab and course work from my mechatronics degree at McMaster: embedded programming in C on a PIC16F887 microcontroller, a digital circuit taken from analysis through simulation to a working breadboard, and a controls lab balancing a ball on a beam with the live response plotted on a laptop. The code for the controls work is in my [Control systems repository on GitHub](https://github.com/madelinelebreton/control-systems).

## Introduction to Microcontroller Systems

![A microcontroller board with a green LCD, connected by cables to a red programmer, beside handwritten notes.](../../assets/projects/microcontroller-controls-labs/pic-board.jpg "right: The PIC16F887 board, wired to its programmer.")

The course covered programming a PIC16F887 in C, including the standard peripherals (I/O, timers, the ADC and a serial link), the internal structure of a processor, and an introduction to interrupts.

<div class="two-col">
<div>

### Timer labs

**Timer Lab I** was a timed LED flasher on RB0, with a button to switch it on and off and a second button to choose the flashing frequency, 1 Hz or 5 Hz. **Timer Lab II** extended it to five LEDs on RB0 to RB4 flashing in an ordered pattern, with a button to pick the direction. The excerpt below is the helper that lights one LED and turns the other four off.

```c
// lights LED and turns off the other 4
void light_LED(short int LED){
    switch(LED){
        case 0: PORTB = 0; break;
        case 1: PORTB = 0x01; break; // LED 1 on
        case 2: PORTB = 0x02; break; // LED 2 on
        case 3: PORTB = 0x04; break; // LED 3 on
        case 4: PORTB = 0x08; break; // LED 4 on
        case 5: PORTB = 0x10; break; // LED 5 on
    }
}
```

</div>
<div>

### PedagoBot

![Animation of C code open on a monitor, scrolling through the motor control functions.](../../assets/projects/microcontroller-controls-labs/pedagobot.gif "Debugging the PedagoBot")

For the final project I programmed the PedagoBot robot to perform complex behaviour, using I/O ports, timers, PWM signals, interrupts, the ADC and the RS232 serial link together.

</div>
</div>

## Analog and Digital Circuits

This course covered how to design and analyze analog and digital circuits: component and circuit analysis and theorems, binary numbers, Boolean analysis and digital circuit design.

The final project was to simulate and build a sequential circuit that cycles through a student number.

![Circuit schematic with four JK flip-flops, AND gates, a clock and four LEDs with resistors.](../../assets/projects/microcontroller-controls-labs/circuit-schematic.png "wide: The final circuit: four flip-flops clocked together, with an LED on each output.")

### Analysis

I solved the circuit analytically with sum-of-products expressions and Karnaugh maps for every JK input. That gave optimized truth tables for the JK flip-flops, a state transition table and an excitation table.

![State transition table with the current state of four flip-flops and two counters for each digit.](../../assets/projects/microcontroller-controls-labs/state-table.png "even14: The state transition table.")
![Colour-coded Karnaugh maps for the flip-flop inputs.](../../assets/projects/microcontroller-controls-labs/kmaps.png "The Karnaugh maps.")

![Colour-coded JK flip-flop truth table and excitation table.](../../assets/projects/microcontroller-controls-labs/jk-tables.png "even15: The JK flip-flop and excitation tables, colour-coded to match the K-maps.")
![Hand-drawn state transition diagram of the finite state machine, with states shown as four-bit binary numbers.](../../assets/projects/microcontroller-controls-labs/state-diagram.png "The state transition diagram.")

Next I drew the state transition diagram and a timing diagram of the finite state machine, to show how the clock pulses move it between states.

### Simulation

I simulated the circuit in Multisim to measure its output. The timing diagram matched the analytical solution.

<div class="stack-pair">

![The circuit in Multisim, with flip-flops, gates and LEDs.](../../assets/projects/microcontroller-controls-labs/multisim-circuit.png "The circuit in Multisim.")

<div class="stack">

![Four rows of LEDs lighting in sequence in the simulation.](../../assets/projects/microcontroller-controls-labs/multisim-leds.png "The simulated LEDs.")

![Four square-wave traces from the simulation.](../../assets/projects/microcontroller-controls-labs/timing-diagram.png "The simulated timing diagram.")

</div>
</div>

### Building it

I built the circuit on a breadboard with two dual JK flip-flop chips (74HC109N) and one quad AND chip (74HC08), wiring the inputs and outputs to match. Then I tested it to check that it worked as designed.

![Four photos of a breadboard with green LEDs lighting in sequence.](../../assets/projects/microcontroller-controls-labs/breadboard-sequence.jpg "even8: The LEDs lighting in sequence on the breadboard.")
![A breadboard densely wired with jumper wires, with test leads clipped on and one green LED lit.](../../assets/projects/microcontroller-controls-labs/breadboard-build.jpg "The wired breadboard.")

## Controls lab

In a controls lab I balanced a ball on a beam, with the response plotted live on a laptop (the animation at the top of this page). The photos below are from the labs around it.

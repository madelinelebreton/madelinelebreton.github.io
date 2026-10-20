---
title: Extended Degrees of Freedom Robotic Visual System with Computer Vision Control
summary: A capstone project continuing TWIST2, with the Pediatric Image-Guided Therapy Innovation Lab at The Hospital for Sick Children.
year: April 2026–present
place: McMaster University
organization: "Lab contact: Thomas Looi"
order: 0
cover: ../../assets/projects/capstone-twist2/placeholder.jpg
coverAlt: The PCIGITI logo, in white on blue, with the lab's full name, the Wilfred and Joyce Posluns Centre for Image-Guided Innovation and Therapeutic Intervention.
fit: contain
plate: "#244f78"
coverWidth: 24
status: in-progress
placeholder: In progress
notice: In progress. Design documentation coming soon!
tools: [ROS 2, Simulink, NVIDIA Isaac Sim]
tags: [robotics]
---
Final-year capstone with the Pediatric Image-Guided Therapy Innovation Lab (PCIGITI) at The Hospital for Sick Children, in a team of six. We are developing a neck and computer-vision tracking system that keeps a workspace or object of interest in view on a Unitree G1 humanoid without moving its torso, for surgical-robotics research teleoperation. It extends the neck of the TWIST2 humanoid teleoperation system with added degrees of freedom.

## What I'm learning

Using this project to gain experience with three robotics tools: ROS 2, Simulink and Isaac Sim. Implementing what I have learned in the classroom, this project is a chance to use that material on a real system.

### ROS 2

ROS 2 is the middleware robot software is built around: separate programs, called nodes, publish and subscribe to messages, so sensing, vision and control can be developed on their own and then connected. It builds on Operating Systems, Real-Time Systems & Control Applications and Embedded Systems Design.

### Simulink

Simulink is for modelling the neck's dynamics and tuning its controllers before anything is built. It brings together Dynamic Models & Control of Physical Systems and Predictive & Intelligent Control, and my controls and microcontroller labs.

### Isaac Sim

Isaac Sim is NVIDIA's physics-based robot simulator, used to test the robot's motion and what its camera sees before trying it on hardware. It draws on Robotics, CAD/CAM/CAE and Image Processing.

## Coursework in use

| From my undergraduate degree | Where it shows up in the project |
| --- | --- |
| Robotics | Kinematics and coordinate frames for the neck's extra degrees of freedom. |
| Dynamic Models & Control of Physical Systems, Predictive & Intelligent Control | Modelling the joints and designing and tuning controllers. |
| Image Processing | Computer-vision tracking of the workspace or object of interest. |
| Real-Time Systems & Control Applications, Operating Systems | Timing, concurrency and message passing between ROS 2 nodes. |
| Embedded Systems Design, Analog Electronics for Measurement Systems | Interfacing with sensors and actuators. |
| Mechanical Engineering Design Elements, CAD/CAM/CAE | Mechanical design of the neck and its models for simulation. |

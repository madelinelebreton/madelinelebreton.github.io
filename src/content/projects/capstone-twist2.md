---
title: Humanoid robot neck with visual tracking
subtitle: Extended Degrees of Freedom Robotic Visual System with Computer Vision Control
summary: "Working on a team of six to extend a humanoid robot's neck with more degrees of freedom and camera tracking, for surgical robotics research."
year: April 2026–present
place: McMaster University
order: 0
cover: ../../assets/projects/capstone-twist2/placeholder.jpg
coverAlt: The PCIGITI logo, in white on blue, with the lab's full name, the Wilfred and Joyce Posluns Centre for Image-Guided Innovation and Therapeutic Intervention.
fit: contain
plate: "#244f78"
coverWidth: 24
status: in-progress
facts:
  - label: Dates
    value: "April 2026 to present. In progress; design documentation to follow."
  - label: Place
    value: "McMaster University, Mechatronics Engineering capstone."
  - label: Collaborator
    value: "Pediatric Centre for Image Guided Innovation and Therapeutic Intervention (PCIGITI), The Hospital for Sick Children. Contact: Thomas Looi."
  - label: Tools
    value: "ROS 2, Simulink, NVIDIA Isaac Sim."
  - label: My part
    value: "Control and mechanical design."
tools: [ROS 2, Simulink, NVIDIA Isaac Sim]
tags: [robotics]
group: "robotics"
latest: 1
outcome: "A six-person team extending a humanoid robot's neck for surgical-robotics research."
---
For my final-year capstone project, I'm working with a team of six to build a neck for the Unitree G1 humanoid robot. The neck has 4 degrees of freedom and a camera that tracks a workspace or object of interest, so the robot keeps it in view without moving its torso. The robot is for surgical-robotics research, where a person teleoperates it. We are extending the neck of [TWIST2](https://yanjieze.com/projects/TWIST2/), a humanoid teleoperation system. TWIST2 is a portable, scalable humanoid data collection system with whole-body control, used to collect long-horizon, whole-body, dexterous loco-manipulation data from the robot's own point of view.

## Tools

The team uses ROS 2 to connect the robot's sensing, vision and control programs as separate nodes that pass messages to each other. Simulink lets us model the neck's dynamics and tune its controllers before we build anything. Isaac Sim, NVIDIA's robot simulator, lets us test the neck's motion and what its camera sees before we run on hardware.

## Coursework in use

| From my undergraduate degree | Where it shows up in the project |
| --- | --- |
| Robotics | Kinematics and coordinate frames for the neck's extra degrees of freedom. |
| Dynamic Models & Control of Physical Systems, Predictive & Intelligent Control | Modelling the joints and designing and tuning controllers. |
| Image Processing | Computer-vision tracking of the workspace or object of interest. |
| Real-Time Systems & Control Applications, Operating Systems | Timing, concurrency and message passing between ROS 2 nodes. |
| Embedded Systems Design, Analog Electronics for Measurement Systems | Interfacing with sensors and actuators. |
| Mechanical Engineering Design Elements, CAD/CAM/CAE | Mechanical design of the neck and its models for simulation. |

<h1 align="center">
  <br>
  <img width="150" src="https://user-images.githubusercontent.com/5698566/230345149-ef757e51-6eb9-479d-94f5-a13e4ad33b03.png">
  <br>
  Kasm Workspaces Registry
  <br>
</h1>

<p align="center">This repository delivers a front end website and repository listing to install nchat in a terminal docker container on your kasm install.</p>

![image](https://user-images.githubusercontent.com/5698566/230064289-9e8967a1-4ff9-43f3-8495-f4170c23a80f.png)

## Contents

- [nchat Workspace](nchat-workspace)
  - [Workspace features](#workspace-features)
  - [Workspace deployment](#workspace-deployment)

## nchat Workspace
This registry primarily serves as the distribution mechanism for Kasm workspaces
generated as an unofficial nchat kasm workspace.  The workspace is based on the kasmweb/terminal:1.15.0 build container installs build tools and then pulls the latest source from [d99kris/nchat](https://github.com/d99kris/nchat) github repo and cleans its self up at the end.  

 ### Workspace features

 The current version is a terminal only version running xfce in an ubuntu docker container.  nchat is installed but you have to set it up yourself.  At this point it is untested so go ahead and test it to destruction. Remember that unless you set up persistent profiles everytime the workspace times out the session (and your login details and chats) will be destroyed. 

 ### Workspace deployment

## Repository template

This repository was created from the registry repository template at
[https://github.com/kasmtech/workspaces_registry_template](https://github.com/kasmtech/workspaces_registry_template).

<h1 align="center">
  <br>
  <img width="150" src="https://user-images.githubusercontent.com/5698566/230345149-ef757e51-6eb9-479d-94f5-a13e4ad33b03.png">
  <br>
  Kasm Workspaces Registry
  <br>
</h1>

<p align="center">This repository delivers a front end website and repository listing to install nchat in a terminal docker container on your kasm install.</p>

![image](https://github.com/chriswilson2020/kasm-workspaces-nchat/blob/abf0e3c4e360106a31ac9809c08043ec311008c7/kasm%20registry.png)

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
 This workspace is designed for deployment using
[Kasm Workspaces](https://kasmweb.com). The Docker image can be deployed
directly with Docker but in a shared environment it will not provide persistent user profiles
and thus at best will not be as usable at worse a major security issue giving anyone who has access to that machine access to your chats and accounts.
The use of Kasm Workspaces for deployment is strongly encouraged.

To deploy using Kasm Workspaces, add this registry to
your Kasm deployment by visiting the
[nchat workspace registry](https://chriswilson2020.github.io/kasm-workspaces-nchat/)
and clicking on the `Workspace Registry Link`. This will copy
`https://chriswilson2020.github.io/kasm-workspaces-nchat/` to your clipboard.

Once you have the Workspace Registry Link for this registry, in Kasm
as an administrator click on `Workspaces` -> `Registry` -> `Registries`.
Click `Add new` and enter the nchat registry link copied above.
Click `ADD REGISTRY` and you should now see the nchat workspace
in Kasm.

After adding a 3rd party workspace registry to Kasm, clicking on `Workspaces` ->
`Registry` should now show the new registry under `Available Workspaces`.
Clicking on `Unofficial nchat` will filter the available workspaces and
display only those workspaces available from this registry.

Click on the nchat workspace and then click `Install`
to install that workspace. Once installed go to `Workspaces` -> `Workspaces`
and click the right arrow button on the right hand side of the newly installed
workspace then click the pencil icon to edit the workspace. Adjust any of
the settings you like but most importantly scroll down to the
`Persistent Profile Path` and add a path to save changes users make to their
workspace. I use the following setting for a persistent profile:

```
/mnt/kasm_profiles/nchat-workspace/{user_id}
```

Where the `/mnt/kasm_profiles/` folder has been created on the Kasm host.

## Repository template

This repository was created from the registry repository template at
[https://github.com/kasmtech/workspaces_registry_template](https://github.com/kasmtech/workspaces_registry_template).

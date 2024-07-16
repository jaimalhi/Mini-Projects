# Docker commands & info

## basic 'docker' commands

**docker \_\_\_ {flags} {command}**

-  images (shows all images)
-  ps (shows all active containers (add -a to see all))
-  run _nameOfImage:tag_
   -  `-ti` flag to create interactive terminal
   -  `--rm`
   -  `-p`
   -  `-name`
   -  `-v` flag to using volumes
-  commit _imageId_ _nameOfCustomImage:tag_
-  rm _containerId_ (removes the container with container_id)
-  rmi _imageId_ (removes the image with image_id)
-  attach _containerId_ (access a running container)
-  exit (stops a container that you enter, ready for commit)

**Pushing to Dockerhub**

-  login -u _username_
-  build -t _username/imageName:tag_ .
-  tag _imageName:tag_ _username/imageName:tag_ (create a new tag for existing image: optional step)
-  push _username/imageName:tag_

## Volumes

-  To use volumes in Docker, you can specify a volume when running a container using the -v flag. For example:
-  `docker run -v /path/on/host:/path/in/container image_name`
-  This command creates a volume that maps the /path/on/host directory on the host machine to the /path/in/container directory inside the container
-  Any data written to or read from /path/in/container will be stored in the volume, making it accessible to other containers or even the host machine

## Keyboard shortcuts

-  CTRL+P+Q (exit an attached container freely)

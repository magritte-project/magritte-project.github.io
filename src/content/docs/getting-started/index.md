---
title: Getting Started
description: Instructions for how to get up and running with Magritte.
---

Magritte is an application server designed to run on desktop-class machines, single-board computers,
network-attached storage devices, and in the cloud.

## Quick Start

Magritte is currently in early development and must be run from its development environment. Before
you get started, make sure you have [`git`](https://git-scm.com/) and [`asdf`](https://asdf-vm.com/)
installed on your machine. Follow the instructions on those projects' pages to get set up.

With `git` and `asdf` installed, clone the GitHub project on your machine:

```sh
$ git clone git@github.com:magritte-project/magritte.git
```

You can then `cd` into `magritte/` use the included bootstrap script to set up a local development
environment:

```sh
$ ./bootstrap
```

Note: Magritte currently does not support development on Windows. Pull requests are welcome!

Once bootstrapping finishes, you can run the development API and web servers:

```sh
$ just dev
```

This starts the API server on port 6477 and the web front end on port 6479. After a few moments, you
should be able to navigate to the Magritte web front end in your browser:

```
http://localhost:6479/
```

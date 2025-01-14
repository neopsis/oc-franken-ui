### Skeleton for OctoberCMS with Tailwind CSS and Franken UI component library.

[OctoberCMS](https://octobercms.com/) is a flexible and robust Content Management System that allows users
to create and manage websites with ease. With the use of themes, website owners can customize the look and
feel of their website to suit their branding and aesthetic preferences. [TailwindCSS](https://tailwindcss.com/,
on the other hand, is a highly popular CSS framework that allows users to easily create custom and responsive
user interfaces. [Franken UI](https://franken-ui.dev/) is an open-source library of UI components that works
as a standalone or as a Tailwind CSS plugin. Under the hood, it uses UIkit 3 and extended with LitElement.
The design is based on shadcn/ui.

`oc-franken-ui` is an OctoberCMS theme skeleton for a quick start of developing your own theme.

#### Instalation

**Requirements**: installed and running October CMS (see homepage).

Copy the `oc-franken-ui` content under the October `/themes` directory. Switch to the root of your October
installation and install the required development components:

```
npm install npm install -D tailwindcss postcss autoprefixer franken-ui@internal laravel-mix mix-tailwindcss browser-sync@2.0 --save-dev
```

**NOTE**: node module `browser-sync` must be version 2.x, do not install the latest 3.x. There is a compatibility issue with the module
`browser-sync-webpack-plugin`.

Now you can start the theme development. To compile your CSS and JS, use the Laravel Mix command `mix`
in a terminal from your **theme root directory**:

* `mix build` compiles the sources from the directory `assets/resources` to `assets/public`.
* `mix watch` compiles like `mix-build` but additionally watches for file changes and keeps the
   public resources up to date. Thanks `browser-sync` package the changes are propagated to the browser.



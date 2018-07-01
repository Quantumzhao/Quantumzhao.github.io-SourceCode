# Toturial
## reason to use a compiler
 - easy to manage the website content without modifying the page structure

## running environment
The compiler runs under __node.js__ environment, you can download it at this page: 
[nodejs](https://nodejs.org/dist/v8.11.3/node-v8.11.3-x64.msi)

then, open powershell in this folder and type:

``` bash
npm update
```
to install all running dependencies. 

## test server
You can start a test server to see the website on localhost:4000 immediately by typing:

``` bash
hexo server
```

## deploy website

``` bash
hexo deploy
```

the target repo is configured in _config.yaml

## create a new bulletin

``` bash
hexo new page <title> --path bulletins/bulletin/<number>
```

## modify github projects

in the directory of github-projects

## folder structure
 |- .deploy_git           => the file uploaded to your github
 |- node_modules          => necessary files for hexo to run
 |- public                => complied website
 |- scaffolds             => won't use
 |- source                => source file of the website
    |- _posts             => won't use, don't delete
    |- about              => as your thought
    |- bulletins
       |- bulletin        => store content of each bulletin
       |- index.md        => used ad placeholder, don't delete
    |- github-projects    => as your thought
    |- posts              => as your thought
 |- themes                => the theme used for your website
    |- space-theme
        |- ...
        |- layout         => layout structure of the website
        |- source         => the static files **including icons** needed to run website
        |- _config.yaml   => theme configuration
 |- _config.yaml          => the global configuration, you can
                             the **webpage repo** here
 |- ...                   => useless files, don't care

 ## known bugs:
  - github projects overflow on the mobile screen
  - no animation effects
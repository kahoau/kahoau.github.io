---
layout: post
title:  "Github host jekyll generated web pages"
date:   2014-09-22 13:37:45
categories: jekyll update
---

Install Jekyll on windows

* [jekyll installation on window ref1](http://jekyllrb.com/docs/windows/)

* [jekyll installation on window ref2](http://jekyll-windows.juthilo.com/) 
 
Jekyll quick start guide and generator

* [jekyll quickstart](http://jekyllrb.com/docs/quickstart/)


**Simple Jekyll local testing (to start up localhost:4040)**

* `jekyll build`
* `jekyll build --watch`
* `jekyll build -w`
* `jekyll serve`
* `jekyll serve --watch`
* `jekyll serve -w`


Posting project page with github and jekyll

* Create a public repo (e.g. ka_pages)
* Clone it to your computer
    * `git clone [repo path]`
* Switch to gh-pages 
    * `git checkout -b gh-pages`

* put static page file to that directory
* Add files to git 
    * `git add --all`

* Commit changes
    * `git commit -m "first commit"`

* push it to gh-pages branch
    * `git push origin gh-pages`


* view your page at: 
    * http://kahoau.github.io/ka_web/

* https://help.github.com/articles/creating-project-pages-manually


Push modified changes

* `git commit -am "commit message"`
    * Providing the -a option to the git commit command makes Git automatically stage every file that is already tracked before doing the commi
    * http://stackoverflow.com/questions/4873976/how-to-commit-only-modified-and-not-new-or-deleted-files

Editer for Markdown 

* http://brackets.io/?lang=en

Warn and Note: 

* Need correct baseurl in _config.xml
* baseurl: "http://kahoau.github.io/jekyll_test/" # the subpath of your site, e.g. /blog/


More references:

* https://github.com/jekyll/jekyll/issues/1336
* https://github.com/briggslab/briggslab.github.io/issues/37
* https://github.com/jekyll/jekyll/issues/1336
* http://joshualande.com/jekyll-github-pages-poole/
* http://www.smashingmagazine.com/2014/08/01/build-blog-jekyll-github-pages/
* http://aviaryan.github.io/
* http://www.smashingmagazine.com/2014/08/01/build-blog-jekyll-github-pages/
* https://github.com/jekyll/jekyll/wiki/sites 
* http://daringfireball.net/projects/markdown/syntax



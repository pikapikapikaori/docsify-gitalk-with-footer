# docsify-gitalk-with-footer

<p align="center">
  <img src="https://docsify.js.org/_media/icon.svg" />
  <br />
  <code>docsify-gitalk-with-footer</code>
</p>

English | [中文](README_zh-cn.md)

This is a plugin to enhance gitalk for docsify.

## What Problem to Solve

If you have tried gitalk plugin according to [here](https://docsify.js.org/#/plugins?id=gitalk), you'll find that several problems exists, which are:

- The gitalk is rendered to the bottom of the whole page, therefore it may look like this:

    ![picture](resources/gitalk-default.png)

    There is hardly no spacing between the bottom of gitalk and the bottom of the wholepage, and:

- As docsify refresh pages partly while using hash mode, gitalk won't be able to refetch the actual comments under each page. As a result, readers may comment under wrong articles.

## After Using This Plugin

This plugin adds a footer under gitalk, like this:

![picture](resources/gitalk-with-this-plugin.png)

Besides, this plugin also force the browser to render gitalk each time after router change, so gitalk will show the correct comments according to different articles.

## To Use

In `index.html`, add:


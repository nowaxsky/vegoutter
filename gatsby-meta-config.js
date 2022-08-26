/**
 * @typedef {Object} Links
 * @prop {string} github Your github repository
 */

/**
 * @typedef {Object} MetaConfig
 * @prop {string} title Your website title
 * @prop {string} description Your website description
 * @prop {string} author Maybe your name
 * @prop {string} siteUrl Your website URL
 * @prop {string} lang Your website Language
 * @prop {string} utterances Github repository to store comments
 * @prop {Links} links
 * @prop {string} favicon Favicon Path
 */

/** @type {MetaConfig} */
const metaConfig = {
  title: "團長麥魯魯",
  description: `Chuck's Blog`,
  author: "Chuck",
  siteUrl: "https://nowaxsky.github.io/vegoutter/",
  lang: "zh-Hant",
  utterances: "nowaxsky/vegoutter-comment",
  links: {
    github: "https://github.com/nowaxsky/vegoutter",
    linkedin: "https://www.linkedin.com/in/nowaxsky/",
    medium: "https://medium.com/@cpm.chuck",
  },
  favicon: "src/images/icon.png",
}

// eslint-disable-next-line no-undef
module.exports = metaConfig

# Image Tools

## Asset optimization

### [tinypng-cli](https://github.com/websperts/tinypng-cli)
**{jpg,png}**

Optimizes assets using the TinyPNG API.

#### Requirements
- API key from TinyPNG (free limit of 500 images /month)

#### Installation

    npm install -g tinypng-cli

#### Usage
*Convert all images in current directory*

    tinypng

*Convert all images in another directory*
    
    tinypng src/dir


### imagemin
**{jpg,png,svg,gif}**

#### Installation

    npm install -g imagemin

#### Usage

    imagemin images/* build

#### Options

    -i, --interlaced
    -o, --optimizationLevel 0-7
    -p, --progressive
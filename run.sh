#!/usr/bin/env node

if [ $1 == "sanity" ]; then
 node runSanity.js
fi

node getApiJson.js
node runImageAspect.js
node getCustomObject.js

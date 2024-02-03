import {readFileSync, writeFileSync} from "fs";

const pkg = JSON.parse(readFileSync("package-lock.json"));

let out = {};
let deps = {};

[...Object.entries(pkg.dependencies), ...Object.entries(pkg.packages)].forEach(i => {
    let name = i[0];
    let versionobj = i[1];

    if (name.startsWith('node_modules/')){
        name = name.replace('node_modules/', '');
    }
    if (name.includes('/node_modules/')){
        let parent = name.split('/node_modules/')[0];
        let nm = name.split('/node_modules/')[1];
        let existing = out[parent] || {}
        if (typeof existing === 'string'){
            deps[parent] = existing;
            existing = {};
        }
        name = parent;
        versionobj = {
            ...existing,
            [nm]: i[1].version,
        }
    } else {
        versionobj = i[1].version;
    }
    out[name] = versionobj;
})

let newPkg = JSON.parse(readFileSync('package.json'));

newPkg.overrides = out;
console.log(deps);
newPkg.dependencies = {...(newPkg.dependencies || {}), ...deps};

writeFileSync("package.json", JSON.stringify(newPkg, null, 2))
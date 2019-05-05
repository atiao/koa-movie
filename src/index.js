// import { promisify } from 'util'
// import { resolve as r } from 'path'
// import { readFile, writeFile as wfs } from "fs";
// import * as qs from "querystring";

// promisify(readFile)(r(__dirname, '../package.json'))
// .then(data => {
//     data = JSON.parse(data)

//     console.log(data.name)

//     wfs(r(__dirname, './name'), String(data.name), 'utf8')
// })

import { name } from "./ex";
import { getName } from "./ex";

console.log(name)
console.log(getName())
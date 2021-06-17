const fs = require("fs");
const path = require("path");
const asn1 = require("asn1-ts");
require("module-alias/register");

const DIST_DIR = "dist";
const LIBS_DIR = path.posix.join(DIST_DIR, "libs");
const OID_FILE_NAME = path.join(DIST_DIR, "oids.csv");

function *walkFiles (directoryName) {
    const directorySet = new Set(fs.readdirSync(directoryName, { encoding: "utf8" }));
    for (let entry of directorySet.values()) {
        const fullEntryPath = path.join(directoryName, entry);
        const stat = fs.statSync(fullEntryPath);
        if (stat.isDirectory()) {
            const subdirectory = walkFiles(fullEntryPath);
            let iteration = subdirectory.next();
            while (!iteration.done) {
                yield iteration.value;
                iteration = subdirectory.next();
            }
        } else if (fullEntryPath.endsWith(".js") && stat.isFile())
            yield fullEntryPath;
    }
}

async function main () {
    const javascriptFiles = Array.from(walkFiles(LIBS_DIR));
    let oids = [];
    for (const jsf of javascriptFiles) {
        const file = "../" + jsf.replace(/\\/g, "/");
        const asn1module = file.split("/").slice(-2, -1)[0].replace(/_/, "-");
        // const basename = path.basename(file).slice(0, -3);
        console.log(file);
        oids = [
            ...oids,
            ...Object.entries(await import(file))
                .filter(([ k, v ]) => (
                    (v instanceof asn1.ObjectIdentifier)
                    || (v && (typeof v === "object") && ("constructor" in v) && (v.constructor?.name === "ObjectIdentifier"))
                ))
                .map(([ k, v ]) => `${asn1module},${k.replace(/_/, "-")},${v.toString()}`),
        ];
    }
    const output = oids.join("\r\n");
    fs.writeFileSync(OID_FILE_NAME, output);
    console.log(`OIDs written to ${OID_FILE_NAME}.`);
}

main();

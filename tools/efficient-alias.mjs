import { Project } from "ts-morph";

if (process.argv.length !== 3) {
    console.log(process.argv);
}

const project = new Project();
project.addSourceFileAtPath(process.argv[2]);
const sourceFiles = project.getSourceFiles();

if (sourceFiles.length === 0) {
    console.warn("No source files");
    process.exit(1);
}

for (const sourceFile of sourceFiles) {
    console.log(sourceFile.getFilePath());
    for (const fn of sourceFile.getFunctions()) {
        let changed = false;
        const fnName = fn.getName();
        if (fnName.startsWith("_decode_")) {
            const typeName = fnName.slice("_decode_".length);
            const bodyText = fn.getBodyText();
            const naughtyString = `_cached_decoder_for_${typeName} = $._`;
            const naughtyIndex = bodyText.indexOf(naughtyString);
            if (naughtyIndex > -1) {
                const terminator = bodyText.indexOf(";", naughtyIndex);
                if (terminator === -1) {
                    console.log(`  - Skipping ${fnName}: no terminator found`);
                    continue;
                }
                const realFunction = bodyText.slice(naughtyIndex + naughtyString.length, terminator);
                if (realFunction.includes("_")) // Skip $._decode_implicit, for example.
                    continue;
                fn.replaceWithText(`export const _decode_${typeName} = $._${realFunction};`);
                try {
                    const variable = sourceFile.getVariableStatement(`_cached_decoder_for_${typeName}`);
                    variable.remove();
                } catch {}
                changed = true;
            }
        }
        if (fnName.startsWith("_encode_")) {
            const typeName = fnName.slice("_encode_".length);
            const bodyText = fn.getBodyText();
            const naughtyString = `_cached_encoder_for_${typeName} = $._`;
            const naughtyIndex = bodyText.indexOf(naughtyString);
            if (naughtyIndex > -1) {
                const terminator = bodyText.indexOf(";", naughtyIndex);
                if (terminator === -1) {
                    console.log(`  - Skipping ${fnName}: no terminator found`);
                    continue;
                }
                const realFunction = bodyText.slice(naughtyIndex + naughtyString.length, terminator);
                if (realFunction.includes("_")) // Skip $._encode_implicit, for example.
                    continue;
                fn.replaceWithText(`export const _encode_${typeName} = $._${realFunction};`);
                try {
                    const variable = sourceFile.getVariableStatement(`_cached_encoder_for_${typeName}`);
                    variable.remove();
                } catch {}
                changed = true;
            }
        }
        if (changed) {
            sourceFile.saveSync();
        }
    }
}

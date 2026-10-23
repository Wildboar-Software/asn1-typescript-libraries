/**
 * Marks trailing constructor parameters typed as `OPTIONAL<T>`
 * (imported from `@wildboar/asn1`) with `?`, so callers can omit them
 * instead of passing `undefined`.
 *
 * A parameter is trailing when every parameter after it is already
 * optional (`?`, an initializer, or a rest parameter). A required
 * parameter stops the walk, which keeps the signature valid.
 *
 * Usage: node tools/optional-trailing-params.mjs <file-or-directory>...
 */
import { Project, SyntaxKind } from "ts-morph";
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { extname, join } from "node:path";

const ASN1_MODULE = "@wildboar/asn1";
const SOURCE_EXTENSIONS = new Set([".mts", ".ts"]);

if (process.argv.length < 3) {
    console.error("Usage: node tools/optional-trailing-params.mjs <file-or-directory>...");
    process.exit(1);
}

function collectFiles(target, out) {
    const stat = statSync(target);
    if (stat.isDirectory()) {
        for (const entry of readdirSync(target, { withFileTypes: true })) {
            if (entry.name === "node_modules" || entry.name === "dist") continue;
            collectFiles(join(target, entry.name), out);
        }
        return;
    }
    if (SOURCE_EXTENSIONS.has(extname(target))) out.push(target);
}

function optionalBindings(sourceFile) {
    const names = new Set();
    const namespaces = new Set();
    for (const imp of sourceFile.getImportDeclarations()) {
        if (imp.getModuleSpecifierValue() !== ASN1_MODULE) continue;
        const namespaceImport = imp.getNamespaceImport();
        if (namespaceImport) namespaces.add(namespaceImport.getText());
        for (const spec of imp.getNamedImports()) {
            if (spec.getNameNode().getText() !== "OPTIONAL") continue;
            names.add((spec.getAliasNode() ?? spec.getNameNode()).getText());
        }
    }
    return { names, namespaces };
}

function unwrapParentheses(typeNode) {
    let current = typeNode;
    while (current?.getKind() === SyntaxKind.ParenthesizedType) {
        current = current.getTypeNode();
    }
    return current;
}

function isOptionalWrapper(typeNode, bindings) {
    const current = unwrapParentheses(typeNode);
    if (current?.getKind() !== SyntaxKind.TypeReference) return false;
    if (current.getTypeArguments().length < 1) return false;
    const typeName = current.getTypeName();
    if (typeName.getKind() === SyntaxKind.Identifier) {
        return bindings.names.has(typeName.getText());
    }
    if (typeName.getKind() === SyntaxKind.QualifiedName) {
        const left = typeName.getLeft();
        return left.getKind() === SyntaxKind.Identifier
            && bindings.namespaces.has(left.getText())
            && typeName.getRight().getText() === "OPTIONAL";
    }
    return false;
}

function questionMarkPositions(sourceFile) {
    const bindings = optionalBindings(sourceFile);
    if (bindings.names.size === 0 && bindings.namespaces.size === 0) return [];
    const positions = [];
    for (const ctor of sourceFile.getDescendantsOfKind(SyntaxKind.Constructor)) {
        const params = ctor.getParameters();
        for (let i = params.length - 1; i >= 0; i--) {
            const param = params[i];
            if (param.hasQuestionToken() || param.getInitializer() || param.isRestParameter()) {
                continue;
            }
            if (!isOptionalWrapper(param.getTypeNode(), bindings)) break;
            const nameNode = param.getNameNode();
            if (!nameNode) break;
            positions.push(nameNode.getEnd());
        }
    }
    return positions;
}

const files = [];
for (const target of process.argv.slice(2)) collectFiles(target, files);

const project = new Project({
    skipAddingFilesFromTsConfig: true,
    skipFileDependencyResolution: true,
    skipLoadingLibFiles: true,
});

let filesChanged = 0;
let paramsChanged = 0;

for (const file of files) {
    let original;
    try {
        original = readFileSync(file, "utf8");
    } catch (error) {
        console.error(`Failed to read ${file}: ${error.message}`);
        continue;
    }
    if (!original.includes("constructor") || !original.includes("OPTIONAL")) continue;

    let sourceFile;
    try {
        sourceFile = project.addSourceFileAtPath(file);
    } catch (error) {
        console.error(`Failed to parse ${file}: ${error.message}`);
        continue;
    }
    if (sourceFile.getFullText() !== original) {
        console.error(`Refusing to edit ${file}: parsed text differs from disk`);
        project.removeSourceFile(sourceFile);
        continue;
    }

    const positions = questionMarkPositions(sourceFile);
    project.removeSourceFile(sourceFile);
    if (positions.length === 0) continue;

    let next = original;
    for (const pos of positions.sort((a, b) => b - a)) {
        next = next.slice(0, pos) + "?" + next.slice(pos);
    }
    writeFileSync(file, next);
    filesChanged++;
    paramsChanged += positions.length;
    console.log(`${file} (${positions.length})`);
}

console.log(`Updated ${paramsChanged} parameter(s) in ${filesChanged} file(s).`);

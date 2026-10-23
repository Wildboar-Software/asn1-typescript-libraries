/**
 * Turns encoder and decoder functions for an ASN.1 type alias into aliases of
 * the underlying codec.
 *
 * A generated alias looks like `export type HashAlgorithm = AlgorithmIdentifier`
 * with `_decode_HashAlgorithm` / `_encode_HashAlgorithm` lazily caching a call
 * to `_decode_AlgorithmIdentifier` / `_encode_AlgorithmIdentifier`. This
 * replaces those functions with:
 *
 *   export const _decode_HashAlgorithm: $.ASN1Decoder<HashAlgorithm> = _decode_AlgorithmIdentifier;
 *   export const _encode_HashAlgorithm: $.ASN1Encoder<HashAlgorithm> = _encode_AlgorithmIdentifier;
 *
 * When the original encoder took `elGetter: $.ASN1Encoder<any>` (callers pass
 * the surrounding value's element getter), the alias keeps that parameter
 * type instead of narrowing it to `$.ASN1Encoder<ThisType>`.
 *
 * and deletes the cache variable. The same rewrite applies when the function
 * body is already a direct `return _decode_Other(...)` / `return _encode_Other(...)`.
 * Tagged, constrained-in-the-codec, and parameterized codecs are left alone:
 * the whole body must be that forward, and the type must be a plain reference.
 *
 * A const alias reads its target during module initialization. That throws if
 * the target binding is still in the temporal dead zone, which happens when
 * the target is (or would become) a `const` and the two files import each
 * other. Those codecs stay lazy functions. Targets that are `function`
 * declarations are safe to alias even across a cycle, because functions are
 * initialized before evaluation.
 *
 * Usage: node tools/efficient-defined-alias.mjs <file-or-directory>...
 */
import { Project, SyntaxKind } from "ts-morph";
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync, writeSync } from "node:fs";
import { dirname, extname, join, resolve } from "node:path";

const SOURCE_EXTENSIONS = new Set([".mts", ".ts"]);

if (process.argv.length < 3) {
    console.error("Usage: node tools/efficient-defined-alias.mjs <file-or-directory>...");
    process.exit(1);
}

function collectFiles(target, out) {
    const stat = statSync(target);
    if (stat.isDirectory()) {
        const entries = readdirSync(target, { withFileTypes: true });
        entries.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
        for (const entry of entries) {
            if (entry.name === "node_modules" || entry.name === "dist") continue;
            collectFiles(join(target, entry.name), out);
        }
        return;
    }
    if (!SOURCE_EXTENSIONS.has(extname(target))) return;
    if (/\.(spec|test)\.[cm]?[jt]s$/.test(target)) return;
    out.push(resolve(target));
}

function unwrapParentheses(typeNode) {
    let current = typeNode;
    while (current?.getKind() === SyntaxKind.ParenthesizedType) {
        current = current.getTypeNode();
    }
    return current;
}

function isSimpleTypeAlias(sourceFile, typeName) {
    const alias = sourceFile.getTypeAlias(typeName);
    if (!alias) return false;
    const typeNode = unwrapParentheses(alias.getTypeNode());
    if (typeNode?.getKind() !== SyntaxKind.TypeReference) return false;
    return typeNode.getTypeName().getKind() === SyntaxKind.Identifier;
}

function forwardedIdentifier(callExpr, params, expectedPrefix) {
    if (!callExpr || callExpr.getKind() !== SyntaxKind.CallExpression) return null;
    if (callExpr.getTypeArguments().length > 0) return null;
    const expr = callExpr.getExpression();
    if (expr.getKind() !== SyntaxKind.Identifier) return null;
    const name = expr.getText();
    if (!name.startsWith(expectedPrefix)) return null;
    if (!/^_(decode|encode)_[A-Za-z0-9_]+$/.test(name)) return null;
    const args = callExpr.getArguments();
    if (args.length !== params.length) return null;
    for (let i = 0; i < params.length; i++) {
        const arg = args[i];
        if (arg.getKind() !== SyntaxKind.Identifier) return null;
        if (arg.getText() !== params[i].getName()) return null;
    }
    return name;
}

function isCachePassthrough(callExpr, cacheName, params) {
    if (!callExpr || callExpr.getKind() !== SyntaxKind.CallExpression) return false;
    if (callExpr.getTypeArguments().length > 0) return false;
    const expr = callExpr.getExpression();
    if (expr.getKind() !== SyntaxKind.Identifier || expr.getText() !== cacheName) return false;
    const args = callExpr.getArguments();
    if (args.length !== params.length) return false;
    for (let i = 0; i < params.length; i++) {
        if (args[i].getKind() !== SyntaxKind.Identifier) return false;
        if (args[i].getText() !== params[i].getName()) return false;
    }
    return true;
}

function assignedCodec(statement, cacheName, expectedPrefix) {
    if (statement.getKind() !== SyntaxKind.ExpressionStatement) return null;
    const expr = statement.getExpression();
    if (expr.getKind() !== SyntaxKind.BinaryExpression) return null;
    if (expr.getOperatorToken().getKind() !== SyntaxKind.EqualsToken) return null;
    const left = expr.getLeft();
    if (left.getKind() !== SyntaxKind.Identifier || left.getText() !== cacheName) return null;
    const right = expr.getRight();
    if (right.getKind() !== SyntaxKind.Identifier) return null;
    const name = right.getText();
    if (!name.startsWith(expectedPrefix)) return null;
    if (!/^_(decode|encode)_[A-Za-z0-9_]+$/.test(name)) return null;
    return name;
}

function isBangIdentifier(expr, name) {
    if (expr.getKind() !== SyntaxKind.PrefixUnaryExpression) return false;
    if (expr.getOperatorToken() !== SyntaxKind.ExclamationToken) return false;
    const operand = expr.getOperand();
    return operand.getKind() === SyntaxKind.Identifier && operand.getText() === name;
}

function soleStatement(statement) {
    if (statement.getKind() !== SyntaxKind.Block) return statement;
    const inner = statement.getStatements();
    return inner.length === 1 ? inner[0] : null;
}

/**
 * @returns {{ target: string, cacheName: string | null } | null}
 */
function aliasTarget(fn) {
    const fnName = fn.getName();
    if (!fnName || fn.isDefaultExport() || !fn.getBody()) return null;
    const kind = fnName.startsWith("_decode_")
        ? "decode"
        : fnName.startsWith("_encode_")
            ? "encode"
            : null;
    if (!kind) return null;
    const typeName = fnName.slice(kind === "decode" ? "_decode_".length : "_encode_".length);
    if (!/^[A-Za-z0-9_]+$/.test(typeName)) return null;
    const prefix = kind === "decode" ? "_decode_" : "_encode_";
    const cacheName = kind === "decode"
        ? `_cached_decoder_for_${typeName}`
        : `_cached_encoder_for_${typeName}`;
    const params = fn.getParameters();
    const body = fn.getBody();
    if (body.getKind() !== SyntaxKind.Block) return null;
    const statements = body.getStatements();

    if (statements.length === 1 && statements[0].getKind() === SyntaxKind.ReturnStatement) {
        const target = forwardedIdentifier(statements[0].getExpression(), params, prefix);
        if (!target || target === fnName) return null;
        return { target, cacheName: null, kind, typeName };
    }

    if (statements.length !== 2) return null;
    const [ifStmt, retStmt] = statements;
    if (ifStmt.getKind() !== SyntaxKind.IfStatement) return null;
    if (retStmt.getKind() !== SyntaxKind.ReturnStatement) return null;
    if (ifStmt.getElseStatement()) return null;
    if (!isBangIdentifier(ifStmt.getExpression(), cacheName)) return null;
    const thenStmt = soleStatement(ifStmt.getThenStatement());
    if (!thenStmt) return null;
    const target = assignedCodec(thenStmt, cacheName, prefix);
    if (!target || target === fnName) return null;
    if (!isCachePassthrough(retStmt.getExpression(), cacheName, params)) return null;
    return { target, cacheName, kind, typeName };
}

function codecAnnotation(fn, kind, typeName) {
    if (kind === "decode") {
        const ret = fn.getReturnTypeNode()?.getText() ?? typeName;
        if (ret.includes("\n") || ret.includes("=>")) return null;
        return `$.ASN1Decoder<${ret}>`;
    }
    const params = fn.getParameters();
    const valueType = params[0]?.getTypeNode()?.getText() ?? typeName;
    const elGetter = params[1]?.getTypeNode()?.getText();
    const ret = fn.getReturnTypeNode()?.getText() ?? "_Element";
    if ([valueType, elGetter, ret].some((part) => part && (part.includes("\n") || part.includes("=>")))) {
        return null;
    }
    const standard = `$.ASN1Encoder<${valueType}>`;
    if (!elGetter || elGetter === standard) return standard;
    const valueName = params[0]?.getName() ?? "value";
    const getterName = params[1]?.getName() ?? "elGetter";
    return `(${valueName}: ${valueType}, ${getterName}: ${elGetter}) => ${ret}`;
}

function cacheDeclaration(sourceFile, cacheName) {
    if (!cacheName) return null;
    const declaration = sourceFile.getVariableDeclaration(cacheName);
    if (!declaration) return null;
    const statement = declaration.getVariableStatement();
    if (!statement || statement.getDeclarations().length !== 1) return null;
    return statement;
}

function identifierUsedOutside(sourceFile, name, ranges) {
    let outside = false;
    for (const node of sourceFile.getDescendantsOfKind(SyntaxKind.Identifier)) {
        if (node.getText() !== name) continue;
        const pos = node.getStart();
        const inside = ranges.some((range) => pos >= range.start && pos < range.end);
        if (!inside) {
            outside = true;
            break;
        }
    }
    return outside;
}

function resolveImported(sourceFile, localName) {
    for (const imp of sourceFile.getImportDeclarations()) {
        for (const spec of imp.getNamedImports()) {
            const local = (spec.getAliasNode() ?? spec.getNameNode()).getText();
            if (local !== localName) continue;
            return {
                importedName: spec.getNameNode().getText(),
                moduleSpec: imp.getModuleSpecifierValue(),
            };
        }
    }
    return null;
}

function lineStart(text, pos) {
    let index = pos;
    while (index > 0 && text[index - 1] !== "\n") index--;
    return index;
}

function onlyWhitespace(text, from, to) {
    for (let i = from; i < to; i++) {
        if (text[i] !== " " && text[i] !== "\t") return false;
    }
    return true;
}

function consumeNewline(text, index) {
    if (text[index] === "\r" && text[index + 1] === "\n") return index + 2;
    if (text[index] === "\n" || text[index] === "\r") return index + 1;
    return index;
}

function consumeBlankLine(text, index) {
    let cursor = index;
    while (text[cursor] === " " || text[cursor] === "\t") cursor++;
    const next = consumeNewline(text, cursor);
    return next === cursor ? index : next;
}

function previousLineStart(text, lineStartPos) {
    if (lineStartPos <= 0) return null;
    let index = lineStartPos - 1;
    if (text[index] === "\n") index--;
    if (index >= 0 && text[index] === "\r") index--;
    if (index < 0) return 0;
    // An empty line has no content character left; it starts just after the newline that precedes it.
    if (text[index] === "\n") return index + 1;
    return lineStart(text, index);
}

function isBlankLineAt(text, lineStartPos) {
    let index = lineStartPos;
    while (text[index] === " " || text[index] === "\t") index++;
    return text[index] === undefined || text[index] === "\n" || text[index] === "\r";
}

/**
 * Drop a cache declaration that sits on its own lines, and leave one blank
 * line between whatever declarations were around it.
 */
function statementRemoval(text, statement) {
    const tokenStart = statement.getStart();
    let start = lineStart(text, tokenStart);
    if (!onlyWhitespace(text, start, tokenStart)) {
        let end = statement.getEnd();
        end = consumeNewline(text, end);
        return { start: tokenStart, end, insert: "" };
    }
    let end = statement.getEnd();
    while (text[end] === " " || text[end] === "\t") end++;
    if (text.startsWith("//", end)) {
        while (end < text.length && text[end] !== "\n" && text[end] !== "\r") end++;
    }
    end = consumeNewline(text, end);
    while (end < text.length && isBlankLineAt(text, end)) {
        const next = consumeBlankLine(text, end);
        if (next === end) break;
        end = next;
    }
    while (start > 0) {
        const previous = previousLineStart(text, start);
        if (previous === null || !isBlankLineAt(text, previous)) break;
        start = previous;
    }
    const newline = text.includes("\r\n") ? "\r\n" : "\n";
    const insert = start > 0 && end < text.length ? newline : "";
    return { start, end, insert };
}

function hasDollarImport(sourceFile) {
    return sourceFile.getImportDeclarations().some((imp) => imp.getNamespaceImport()?.getText() === "$");
}

function dollarImportInsert(sourceFile, text) {
    const imports = sourceFile.getImportDeclarations();
    const quote = text.includes("from '@wildboar/asn1") ? "'" : "\"";
    const newline = text.includes("\r\n") ? "\r\n" : "\n";
    const line = `import * as $ from ${quote}@wildboar/asn1/functional${quote};${newline}`;
    if (imports.length === 0) return { start: 0, end: 0, insert: line };
    const last = imports[imports.length - 1];
    let end = last.getEnd();
    end = consumeNewline(text, end);
    return { start: end, end, insert: line };
}

const textCache = new Map();

function fileText(file) {
    let text = textCache.get(file);
    if (text === undefined) {
        text = readFileSync(file, "utf8");
        textCache.set(file, text);
    }
    return text;
}

const resolvedModules = new Map();

function resolveModule(fromFile, spec) {
    if (!spec.startsWith(".")) return null;
    const key = fromFile + "\0" + spec;
    if (resolvedModules.has(key)) return resolvedModules.get(key);
    const abs = resolve(dirname(fromFile), spec);
    const tries = [];
    if (abs.endsWith(".mjs")) tries.push(abs.slice(0, -4) + ".mts");
    if (abs.endsWith(".js")) tries.push(abs.slice(0, -3) + ".ts");
    tries.push(abs, abs + ".mts", abs + ".ts", join(abs, "index.mts"), join(abs, "index.ts"));
    let found = null;
    for (const candidate of tries) {
        if (existsSync(candidate) && statSync(candidate).isFile()) {
            found = resolve(candidate);
            break;
        }
    }
    resolvedModules.set(key, found);
    return found;
}

const importCache = new Map();

function fileImports(file) {
    let imports = importCache.get(file);
    if (imports) return imports;
    imports = [];
    const text = fileText(file);
    for (const match of text.matchAll(/from\s+['"](\.[^'"]+)['"]/g)) {
        const resolved = resolveModule(file, match[1]);
        if (resolved) imports.push(resolved);
    }
    importCache.set(file, imports);
    return imports;
}

const reachCache = new Map();

function canReach(from, to) {
    let reachable = reachCache.get(from);
    if (!reachable) {
        reachable = new Set();
        const stack = fileImports(from).slice();
        while (stack.length > 0) {
            const next = stack.pop();
            if (reachable.has(next)) continue;
            reachable.add(next);
            for (const dep of fileImports(next)) stack.push(dep);
        }
        reachCache.set(from, reachable);
    }
    return reachable.has(to);
}

const bindingCache = new Map();

function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function classifyBinding(file, name) {
    const key = file + "\0" + name;
    const cached = bindingCache.get(key);
    if (cached) return cached;
    const text = fileText(file);
    const ident = escapeRegExp(name);
    const functionPattern = new RegExp(`(?:^|\\n)export\\s+(?:\\n\\s*)?function\\s+${ident}\\b`);
    const constPattern = new RegExp(`(?:^|\\n)export\\s+const\\s+${ident}\\b`);
    let info;
    if (functionPattern.test(text)) {
        info = { kind: "function" };
    } else if (constPattern.test(text)) {
        const pos = text.search(constPattern);
        info = { kind: "const", pos };
    } else {
        info = { kind: "other" };
        const exportFrom = /export\s*\{([\s\S]*?)\}\s*from\s*['"]([^'"]+)['"]/g;
        for (const match of text.matchAll(exportFrom)) {
            const clause = match[1];
            const alias = clause.match(new RegExp(`\\b([A-Za-z0-9_]+)\\s+as\\s+${ident}\\b`));
            const bare = new RegExp(`(?:^|[,\\s])${ident}\\s*(?:,|$)`).test(clause);
            if (!alias && !bare) continue;
            const importedName = alias ? alias[1] : name;
            const spec = match[2];
            const target = spec.startsWith(".") ? resolveModule(file, spec) : null;
            info = { kind: "reexport", file: target, name: importedName };
            break;
        }
    }
    bindingCache.set(key, info);
    return info;
}

function isHoistedFunction(file, name, accepted, seen) {
    const marker = file + "\0" + name;
    if (accepted.has(marker)) return false;
    if (seen.has(marker)) return false;
    seen.add(marker);
    const info = classifyBinding(file, name);
    if (info.kind === "function") return true;
    if (info.kind === "reexport" && info.file) return isHoistedFunction(info.file, info.name, accepted, seen);
    return false;
}

function bindingPosition(file, name, accepted, candidatesByKey) {
    const key = file + "\0" + name;
    if (accepted.has(key)) return candidatesByKey.get(key).pos;
    const info = classifyBinding(file, name);
    if (info.kind === "const") return info.pos;
    if (info.kind === "reexport" && info.file) return bindingPosition(info.file, info.name, accepted, candidatesByKey);
    return -1;
}

function isSafe(candidate, accepted, candidatesByKey) {
    if (!candidate.targetFile) return true;
    if (isHoistedFunction(candidate.targetFile, candidate.targetImportedName, accepted, new Set())) {
        return true;
    }
    if (candidate.targetFile === candidate.file) {
        const pos = bindingPosition(
            candidate.targetFile,
            candidate.targetImportedName,
            accepted,
            candidatesByKey,
        );
        return pos >= 0 && pos < candidate.pos;
    }
    return !canReach(candidate.targetFile, candidate.file);
}

const files = [];
for (const target of process.argv.slice(2)) collectFiles(resolve(target), files);

const project = new Project({
    skipAddingFilesFromTsConfig: true,
    skipFileDependencyResolution: true,
    skipLoadingLibFiles: true,
});

const candidates = [];
let parseSkips = 0;
let considered = 0;

for (const file of files) {
    let original;
    try {
        original = fileText(file);
    } catch (error) {
        console.error(`Failed to read ${file}: ${error.message}`);
        parseSkips++;
        continue;
    }
    if (!original.includes("DefinedType") && !original.includes("VALUE_SET_TYPE")) continue;
    considered++;
    if (considered % 200 === 0) writeSync(2, `parsed ${considered}\n`);
    if (!original.includes("function")) continue;
    if (!original.includes("_decode_") && !original.includes("_encode_")) continue;

    let sourceFile;
    try {
        sourceFile = project.addSourceFileAtPath(file);
    } catch (error) {
        console.error(`Failed to parse ${file}: ${error.message}`);
        parseSkips++;
        continue;
    }
    if (sourceFile.getFullText() !== original) {
        console.error(`Refusing to edit ${file}: parsed text differs from disk`);
        project.removeSourceFile(sourceFile);
        parseSkips++;
        continue;
    }

    const needsDollar = !hasDollarImport(sourceFile);
    for (const fn of sourceFile.getFunctions()) {
        const alias = aliasTarget(fn);
        if (!alias) continue;
        if (!isSimpleTypeAlias(sourceFile, alias.typeName)) continue;
        const declaration = cacheDeclaration(sourceFile, alias.cacheName);
        if (alias.cacheName) {
            if (!declaration) continue;
            const ranges = [
                { start: fn.getStart(), end: fn.getEnd() },
                { start: declaration.getStart(), end: declaration.getEnd() },
            ];
            if (identifierUsedOutside(sourceFile, alias.cacheName, ranges)) continue;
        }

        const imported = resolveImported(sourceFile, alias.target);
        let targetFile = null;
        let targetImportedName = alias.target;
        if (imported) {
            targetImportedName = imported.importedName;
            if (imported.moduleSpec.startsWith(".")) {
                targetFile = resolveModule(file, imported.moduleSpec);
            }
        } else {
            targetFile = file;
        }

        const annotation = codecAnnotation(fn, alias.kind, alias.typeName);
        if (!annotation) continue;
        const exported = fn.hasExportKeyword() ? "export " : "";
        const edits = [{
            start: fn.getStart(),
            end: fn.getEnd(),
            insert: `${exported}const ${fn.getName()}: ${annotation} = ${alias.target};`,
        }];
        if (declaration) edits.push(statementRemoval(original, declaration));

        candidates.push({
            file,
            name: fn.getName(),
            pos: fn.getStart(),
            targetFile,
            targetImportedName,
            edits,
            needsDollar,
        });
    }
    project.removeSourceFile(sourceFile);
}

writeSync(2, `candidates ${candidates.length} from ${considered} alias file(s)\n`);
const candidatesByKey = new Map(candidates.map((candidate) => [`${candidate.file}\0${candidate.name}`, candidate]));
const accepted = new Set(candidatesByKey.keys());
const skipped = [];
let removed = true;
while (removed) {
    removed = false;
    const unsafe = [];
    for (const key of accepted) {
        if (!isSafe(candidatesByKey.get(key), accepted, candidatesByKey)) unsafe.push(key);
    }
    unsafe.sort();
    if (unsafe.length === 0) break;
    accepted.delete(unsafe[0]);
    skipped.push(unsafe[0]);
    removed = true;
}

const editsByFile = new Map();
for (const key of accepted) {
    const candidate = candidatesByKey.get(key);
    let list = editsByFile.get(candidate.file);
    if (!list) {
        list = [];
        editsByFile.set(candidate.file, list);
    }
    list.push(...candidate.edits);
    if (candidate.needsDollar) list.needsDollar = true;
}

let filesChanged = 0;
let codecsChanged = 0;

for (const file of [...editsByFile.keys()].sort()) {
    const edits = editsByFile.get(file);
    if (edits.needsDollar) {
        const sourceFile = project.addSourceFileAtPath(file);
        edits.push(dollarImportInsert(sourceFile, fileText(file)));
        project.removeSourceFile(sourceFile);
    }
    edits.sort((a, b) => b.start - a.start || b.end - a.end);
    let next = fileText(file);
    let cursor = next.length;
    let overlap = false;
    for (const edit of edits) {
        if (edit.end > cursor) {
            overlap = true;
            break;
        }
        cursor = edit.start;
    }
    if (overlap) {
        console.error(`Refusing to edit ${file}: overlapping ranges`);
        parseSkips++;
        continue;
    }
    for (const edit of edits) {
        next = next.slice(0, edit.start) + edit.insert + next.slice(edit.end);
    }
    if (next === fileText(file)) continue;
    writeFileSync(file, next);
    textCache.set(file, next);
    const codecCount = edits.filter((edit) => edit.insert.startsWith("export const ") || edit.insert.startsWith("const ")).length;
    filesChanged++;
    codecsChanged += codecCount;
    console.log(`${file} (${codecCount})`);
}

if (skipped.length > 0) {
    console.log("Left lazy because a const alias would read an uninitialized binding:");
    for (const key of skipped) {
        const candidate = candidatesByKey.get(key);
        console.log(`  ${candidate.file} ${candidate.name} -> ${candidate.targetImportedName}`);
    }
}
if (parseSkips > 0) console.log(`Skipped ${parseSkips} file(s) that could not be edited safely.`);
console.log(`Updated ${codecsChanged} codec(s) in ${filesChanged} file(s).`);

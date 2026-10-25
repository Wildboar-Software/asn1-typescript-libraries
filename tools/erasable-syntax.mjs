/**
 * Rewrites non-erasable TypeScript syntax so a package can set
 * `erasableSyntaxOnly`.
 *
 * - `enum` becomes a `const` object and a type alias of the same name.
 *   Numeric initializers are preserved; members without initializers get
 *   the usual 0, 1, 2, ... values.
 * - Constructor parameter properties become real fields. The constructor
 *   assigns them. JSDoc moves from the parameter onto the field.
 * - `$._decodeEnumerated` and `$._encodeEnumerated` bindings are asserted
 *   to the enum's decoder or encoder type when the literal union no longer
 *   accepts `number`.
 *
 * Usage: node tools/erasable-syntax.mjs <package-directory>...
 */
import ts from "typescript";
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { extname, join } from "node:path";

const SOURCE_EXTENSIONS = new Set([".mts", ".ts"]);
const PROPERTY_MODIFIERS = new Set([
    ts.SyntaxKind.PublicKeyword,
    ts.SyntaxKind.PrivateKeyword,
    ts.SyntaxKind.ProtectedKeyword,
    ts.SyntaxKind.ReadonlyKeyword,
    ts.SyntaxKind.OverrideKeyword,
]);

if (process.argv.length < 3) {
    console.error("Usage: node tools/erasable-syntax.mjs <package-directory>...");
    process.exit(1);
}

function collectFiles(target, out) {
    const stat = statSync(target);
    if (stat.isDirectory()) {
        for (const entry of readdirSync(target, { withFileTypes: true })) {
            if (entry.name === "node_modules" || entry.name === "dist" || entry.name === "out-tsc") continue;
            collectFiles(join(target, entry.name), out);
        }
        return;
    }
    const name = target.slice(target.lastIndexOf("/") + 1);
    if (name.endsWith(".d.ts") || name.endsWith(".d.mts")) return;
    if (SOURCE_EXTENSIONS.has(extname(target))) out.push(target);
}

function newlineOf(text) {
    return text.includes("\r\n") ? "\r\n" : "\n";
}

function lineIndentAt(text, pos) {
    const lineStart = text.lastIndexOf("\n", pos - 1) + 1;
    const indent = /^[ \t]*/.exec(text.slice(lineStart, pos));
    return indent ? indent[0] : "";
}

function applyEdits(text, edits) {
    const sorted = [...edits].sort((a, b) => b.start - a.start || b.end - a.end);
    for (let i = 0; i < sorted.length - 1; i++) {
        const later = sorted[i];
        const earlier = sorted[i + 1];
        if (earlier.end > later.start) {
            throw new Error(`Overlapping edits ${earlier.start}-${earlier.end} and ${later.start}-${later.end}`);
        }
    }
    let out = text;
    for (const edit of sorted) {
        out = out.slice(0, edit.start) + edit.text + out.slice(edit.end);
    }
    return out;
}

function scriptKind(file) {
    if (file.endsWith(".mts") || file.endsWith(".cts")) return ts.ScriptKind.TS;
    if (file.endsWith(".tsx")) return ts.ScriptKind.TSX;
    if (file.endsWith(".jsx")) return ts.ScriptKind.JSX;
    if (file.endsWith(".js") || file.endsWith(".mjs")) return ts.ScriptKind.JS;
    return ts.ScriptKind.TS;
}

function isParameterProperty(param) {
    return param.modifiers?.some((modifier) => PROPERTY_MODIFIERS.has(modifier.kind)) ?? false;
}

function hasExportModifier(node) {
    return node.modifiers?.some((modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword) ?? false;
}

function hasDefaultModifier(node) {
    return node.modifiers?.some((modifier) => modifier.kind === ts.SyntaxKind.DefaultKeyword) ?? false;
}

function isDefaultExported(sourceFile, name) {
    return sourceFile.statements.some((statement) =>
        ts.isExportAssignment(statement)
        && !statement.isExportEquals
        && ts.isIdentifier(statement.expression)
        && statement.expression.text === name
    );
}

function childOfKind(node, kind) {
    return node.getChildren().find((child) => child.kind === kind);
}

function literalEnumValue(initializer) {
    if (!initializer) return undefined;
    if (ts.isNumericLiteral(initializer)) return { numeric: Number(initializer.text) };
    if (ts.isPrefixUnaryExpression(initializer)
        && initializer.operator === ts.SyntaxKind.MinusToken
        && ts.isNumericLiteral(initializer.operand)) {
        return { numeric: -Number(initializer.operand.text) };
    }
    if (ts.isPrefixUnaryExpression(initializer)
        && initializer.operator === ts.SyntaxKind.PlusToken
        && ts.isNumericLiteral(initializer.operand)) {
        return { numeric: Number(initializer.operand.text) };
    }
    if (ts.isStringLiteral(initializer) || ts.isNoSubstitutionTemplateLiteral(initializer)) {
        return { numeric: undefined };
    }
    return null;
}

function transformEnum(node, text, sourceFile, edits) {
    if (node.modifiers?.some((modifier) => modifier.kind === ts.SyntaxKind.DeclareKeyword)) {
        throw new Error(`declare enum ${node.name.text} is not rewritten`);
    }
    if (hasDefaultModifier(node)) {
        throw new Error(`export default enum ${node.name.text} is not rewritten`);
    }
    const enumKeyword = childOfKind(node, ts.SyntaxKind.EnumKeyword);
    const openBrace = childOfKind(node, ts.SyntaxKind.OpenBraceToken);
    if (!enumKeyword || !openBrace) throw new Error(`Could not parse enum ${node.name.text}`);

    const name = node.name.text;
    const alreadyExported = hasExportModifier(node);
    const defaultExported = isDefaultExported(sourceFile, name);
    const exportConst = alreadyExported || defaultExported;
    if (node.modifiers?.some((modifier) => modifier.kind === ts.SyntaxKind.ConstKeyword)) {
        const trailingSpace = text[enumKeyword.end] === " " ? 1 : 0;
        edits.push({ start: enumKeyword.getStart(), end: enumKeyword.end + trailingSpace, text: "" });
        if (!alreadyExported && defaultExported) {
            edits.push({ start: enumKeyword.getStart(), end: enumKeyword.getStart(), text: "export " });
        }
    } else {
        edits.push({
            start: enumKeyword.getStart(),
            end: enumKeyword.end,
            text: !alreadyExported && defaultExported ? "export const" : "const",
        });
    }
    edits.push({ start: openBrace.getStart(), end: openBrace.getStart(), text: "= " });

    let nextNumeric = 0;
    let numericRun = true;
    for (const member of node.members) {
        const equals = childOfKind(member, ts.SyntaxKind.EqualsToken);
        if (!member.initializer) {
            if (!numericRun) {
                throw new Error(`enum ${name} has a member without an initializer after a non-numeric value`);
            }
            const value = String(nextNumeric);
            nextNumeric += 1;
            edits.push({ start: member.name.end, end: member.name.end, text: `: ${value}` });
            continue;
        }
        const literal = literalEnumValue(member.initializer);
        if (literal === null) {
            throw new Error(`enum ${name}.${member.name.getText(sourceFile)} has an initializer that is not a literal`);
        }
        if (!equals) throw new Error(`enum ${name} is missing '='`);
        let equalsStart = equals.getStart(sourceFile);
        if (text[equalsStart - 1] === " " || text[equalsStart - 1] === "\t") equalsStart--;
        const colon = text[equals.end] === " " || text[equals.end] === "\t" ? ":" : ": ";
        edits.push({ start: equalsStart, end: equals.end, text: colon });
        if (literal.numeric === undefined) {
            numericRun = false;
        } else {
            nextNumeric = literal.numeric + 1;
            numericRun = true;
        }
    }

    const hasSemi = text[node.end] === ";";
    const typePrefix = exportConst ? "export " : "";
    const nl = newlineOf(text);
    const typeAlias = `${nl}${nl}${typePrefix}type ${name} = (typeof ${name})[keyof typeof ${name}];`;
    if (hasSemi) {
        edits.push({ start: node.end, end: node.end, text: " as const" });
        edits.push({ start: node.end + 1, end: node.end + 1, text: typeAlias });
    } else {
        edits.push({ start: node.end, end: node.end, text: ` as const;${typeAlias}` });
    }
}

function commentDeletion(text, range) {
    let start = range.pos;
    const lineStart = text.lastIndexOf("\n", start - 1) + 1;
    if (/^[ \t]*$/.test(text.slice(lineStart, start))) start = lineStart;
    let end = range.end;
    if (text[end] === "\r") end++;
    if (text[end] === "\n") end++;
    return { start, end };
}

function reindent(block, fromIndent, toIndent) {
    if (!fromIndent || fromIndent === toIndent) return block;
    return block.split("\n").map((line) => {
        if (line.startsWith(fromIndent)) return toIndent + line.slice(fromIndent.length);
        return line;
    }).join("\n");
}

function isSuperCallStatement(statement) {
    return ts.isExpressionStatement(statement)
        && ts.isCallExpression(statement.expression)
        && statement.expression.expression.kind === ts.SyntaxKind.SuperKeyword;
}

function parameterName(param, sourceFile) {
    if (!ts.isIdentifier(param.name)) {
        throw new Error(`parameter property ${param.name.getText(sourceFile)} is not a plain identifier`);
    }
    return param.name.text;
}

function transformConstructor(ctor, cls, text, sourceFile, edits) {
    const parameters = ctor.parameters.filter(isParameterProperty);
    if (parameters.length === 0) return 0;
    const nl = newlineOf(text);
    const fieldIndent = lineIndentAt(text, ctor.getStart(sourceFile));
    const firstParam = ctor.parameters[0];
    const paramIndent = firstParam
        ? lineIndentAt(text, firstParam.getStart(sourceFile))
        : fieldIndent + "    ";
    const unit = paramIndent.startsWith(fieldIndent) && paramIndent.length > fieldIndent.length
        ? paramIndent.slice(fieldIndent.length)
        : "    ";
    const bodyIndent = fieldIndent + unit;
    const existing = new Set(
        cls.members
            .filter((member) => ts.isPropertyDeclaration(member) && ts.isIdentifier(member.name))
            .map((member) => member.name.text)
    );

    const fieldChunks = [];
    const assignments = [];
    for (const param of parameters) {
        const name = parameterName(param, sourceFile);
        const modifiers = param.modifiers.filter((modifier) => PROPERTY_MODIFIERS.has(modifier.kind));
        const foreign = param.modifiers.filter((modifier) => !PROPERTY_MODIFIERS.has(modifier.kind));
        if (foreign.length > 0) {
            throw new Error(`parameter ${name} has a modifier that is not moved onto the field`);
        }
        const modifierStart = modifiers[0].getStart(sourceFile);
        let modifierEnd = modifiers[modifiers.length - 1].end;
        while (text[modifierEnd] === " " || text[modifierEnd] === "\t") modifierEnd++;
        edits.push({ start: modifierStart, end: modifierEnd, text: "" });

        const paramIndentHere = lineIndentAt(text, modifierStart);
        const comments = ts.getLeadingCommentRanges(text, param.pos) ?? [];
        const docParts = [];
        for (const comment of comments) {
            const deletion = commentDeletion(text, comment);
            const raw = text.slice(deletion.start, comment.end).replace(/[ \t]+$/g, "");
            docParts.push(reindent(raw, paramIndentHere, fieldIndent));
            edits.push({ start: deletion.start, end: deletion.end, text: "" });
        }

        if (!existing.has(name)) {
            const mods = text.slice(modifiers[0].getStart(sourceFile), modifiers[modifiers.length - 1].end);
            const optional = param.questionToken ? "?" : "";
            const type = param.type ? `: ${param.type.getText(sourceFile)}` : "";
            const docs = docParts.length ? docParts.join(nl) + nl : "";
            fieldChunks.push(`${docs}${fieldIndent}${mods} ${name}${optional}${type};${nl}`);
        }
        assignments.push(`${bodyIndent}this.${name} = ${name};`);
    }

    if (fieldChunks.length > 0) {
        edits.push({
            start: ctor.getFullStart(),
            end: ctor.getFullStart(),
            text: nl + fieldChunks.join(""),
        });
    }

    if (ctor.body) {
        const assignmentText = assignments.join(nl);
        const innerStart = ctor.body.getStart(sourceFile) + 1;
        const innerEnd = ctor.body.end - 1;
        const inner = text.slice(innerStart, innerEnd);
        if (/^[\s]*$/.test(inner)) {
            edits.push({
                start: innerStart,
                end: innerEnd,
                text: `${nl}${assignmentText}${nl}${fieldIndent}`,
            });
        } else if (ctor.body.statements.length === 0) {
            edits.push({ start: innerStart, end: innerStart, text: `${nl}${assignmentText}${nl}` });
        } else {
            let anchor = ctor.body.statements[0];
            if (isSuperCallStatement(anchor)) {
                if (ctor.body.statements.length > 1) {
                    anchor = ctor.body.statements[1];
                    edits.push({ start: anchor.getFullStart(), end: anchor.getFullStart(), text: `${nl}${assignmentText}` });
                } else {
                    edits.push({ start: anchor.end, end: anchor.end, text: `${nl}${assignmentText}` });
                }
            } else {
                edits.push({ start: anchor.getFullStart(), end: anchor.getFullStart(), text: `${nl}${assignmentText}` });
            }
        }
    }
    return parameters.length;
}

function remainingProblems(text, file) {
    const sourceFile = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, scriptKind(file));
    const problems = [];
    if (sourceFile.parseDiagnostics.length > 0) {
        for (const diagnostic of sourceFile.parseDiagnostics) {
            const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n");
            problems.push(`parse: ${message}`);
        }
    }
    function visit(node) {
        if (ts.isEnumDeclaration(node) && !node.modifiers?.some((modifier) => modifier.kind === ts.SyntaxKind.DeclareKeyword)) {
            problems.push(`enum ${node.name.text} remains`);
        }
        if (ts.isParameter(node) && isParameterProperty(node)) {
            problems.push(`parameter property remains`);
        }
        ts.forEachChild(node, visit);
    }
    visit(sourceFile);
    return problems;
}

function isDollarAccess(node, name) {
    return ts.isPropertyAccessExpression(node)
        && node.name.text === name
        && ts.isIdentifier(node.expression)
        && node.expression.text === "$";
}

function exportedTypeNames(sourceFile) {
    const names = new Set();
    for (const statement of sourceFile.statements) {
        if (ts.isTypeAliasDeclaration(statement) && hasExportModifier(statement)) {
            names.add(statement.name.text);
        }
    }
    return names;
}

function localTypeNames(sourceFile) {
    const names = new Set();
    function visit(node) {
        if (ts.isTypeAliasDeclaration(node)) names.add(node.name.text);
        ts.forEachChild(node, visit);
    }
    visit(sourceFile);
    return names;
}

function enumTypeForCodec(sourceFile, codecName) {
    const suffix = codecName.replace(/^_(?:de|en)code_/, "");
    if (suffix === codecName) return null;
    const exported = exportedTypeNames(sourceFile);
    const local = localTypeNames(sourceFile);
    if (exported.has(suffix)) return suffix;
    if (exported.has(`_enum_for_${suffix}`)) return `_enum_for_${suffix}`;
    if (local.has(suffix)) return suffix;
    if (local.has(`_enum_for_${suffix}`)) return `_enum_for_${suffix}`;
    return null;
}

function isNullishType(typeNode) {
    if (typeNode.kind === ts.SyntaxKind.NullKeyword || typeNode.kind === ts.SyntaxKind.UndefinedKeyword) {
        return true;
    }
    return ts.isLiteralTypeNode(typeNode)
        && (typeNode.literal.kind === ts.SyntaxKind.NullKeyword
            || typeNode.literal.kind === ts.SyntaxKind.UndefinedKeyword);
}

function enumeratedCodecType(typeNode) {
    let current = typeNode;
    if (ts.isUnionTypeNode(current)) {
        const parts = current.types.filter((part) => !isNullishType(part));
        if (parts.length !== 1) return null;
        current = parts[0];
    }
    if (!ts.isTypeReferenceNode(current) || !current.typeArguments || current.typeArguments.length !== 1) {
        return null;
    }
    const name = current.typeName.getText();
    const kind = name === "$.ASN1Decoder" || name.endsWith(".ASN1Decoder")
        ? "ASN1Decoder"
        : name === "$.ASN1Encoder" || name.endsWith(".ASN1Encoder")
            ? "ASN1Encoder"
            : null;
    if (!kind) return null;
    return { kind, arg: current.typeArguments[0].getText() };
}

function containingFunction(node) {
    let current = node.parent;
    while (current) {
        if (ts.isFunctionLike(current) && current.type) return current;
        current = current.parent;
    }
    return undefined;
}

function variableTypeNode(sourceFile, name) {
    let found;
    function visit(node) {
        if (found) return;
        if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && node.name.text === name && node.type) {
            found = node.type;
            return;
        }
        ts.forEachChild(node, visit);
    }
    visit(sourceFile);
    return found;
}

function addEnumeratedCodecCasts(sourceFile, edits) {
    const dollar = "$";
    function visit(node) {
        if (ts.isVariableDeclaration(node) && node.initializer && ts.isIdentifier(node.name)) {
            const init = node.initializer;
            const codec = isDollarAccess(init, "_decodeEnumerated")
                ? "ASN1Decoder"
                : isDollarAccess(init, "_encodeEnumerated")
                    ? "ASN1Encoder"
                    : null;
            if (codec) {
                const typeName = enumTypeForCodec(sourceFile, node.name.text);
                const already = init.getText(sourceFile).includes(" as ");
                if (typeName && !already) {
                    edits.push({
                        start: init.getStart(sourceFile),
                        end: init.end,
                        text: `${dollar}._${codec === "ASN1Decoder" ? "decode" : "encode"}Enumerated as ${dollar}.${codec}<${typeName}>`,
                    });
                }
            }
        } else if (ts.isBinaryExpression(node)
            && node.operatorToken.kind === ts.SyntaxKind.EqualsToken
            && ts.isIdentifier(node.left)) {
            const codec = isDollarAccess(node.right, "_decodeEnumerated")
                ? "ASN1Decoder"
                : isDollarAccess(node.right, "_encodeEnumerated")
                    ? "ASN1Encoder"
                    : null;
            if (codec) {
                const typeNode = variableTypeNode(sourceFile, node.left.text);
                const enumerated = typeNode && enumeratedCodecType(typeNode);
                const already = node.right.getText(sourceFile).includes(" as ");
                if (enumerated && enumerated.kind === codec && !already) {
                    edits.push({
                        start: node.right.getStart(sourceFile),
                        end: node.right.end,
                        text: `${dollar}._${codec === "ASN1Decoder" ? "decode" : "encode"}Enumerated as ${dollar}.${codec}<${enumerated.arg}>`,
                    });
                }
            }
        } else if (ts.isReturnStatement(node) && node.expression && ts.isCallExpression(node.expression)) {
            const call = node.expression;
            if (isDollarAccess(call.expression, "_decodeEnumerated") && !ts.isAsExpression(call.parent)) {
                const fn = containingFunction(node);
                if (fn?.type && call.arguments.length === 1) {
                    const returnType = fn.type.getText(sourceFile);
                    edits.push({
                        start: call.getStart(sourceFile),
                        end: call.end,
                        text: `${call.getText(sourceFile)} as ${returnType}`,
                    });
                }
            } else if (isDollarAccess(call.expression, "_encodeEnumerated") && call.arguments.length >= 2) {
                const elGetter = call.arguments[1];
                if (!ts.isAsExpression(elGetter)) {
                    edits.push({
                        start: elGetter.getStart(sourceFile),
                        end: elGetter.end,
                        text: `${elGetter.getText(sourceFile)} as ${dollar}.ASN1Encoder<number>`,
                    });
                }
            }
        }
        ts.forEachChild(node, visit);
    }
    visit(sourceFile);
    return edits.length;
}

function transformFile(file) {
    const original = readFileSync(file, "utf8");
    if (!original.includes("enum")
        && !original.includes("constructor")
        && !original.includes("_decodeEnumerated")
        && !original.includes("_encodeEnumerated")) {
        return { changed: false, enums: 0, params: 0 };
    }
    const sourceFile = ts.createSourceFile(file, original, ts.ScriptTarget.Latest, true, scriptKind(file));
    if (sourceFile.parseDiagnostics.length > 0) {
        const message = sourceFile.parseDiagnostics
            .map((diagnostic) => ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"))
            .join("; ");
        throw new Error(`parse error: ${message}`);
    }
    const edits = [];
    let enums = 0;
    let params = 0;
    function visit(node) {
        if (ts.isEnumDeclaration(node)) {
            transformEnum(node, original, sourceFile, edits);
            enums++;
        } else if (ts.isConstructorDeclaration(node) && ts.isClassLike(node.parent)) {
            params += transformConstructor(node, node.parent, original, sourceFile, edits);
        }
        ts.forEachChild(node, visit);
    }
    visit(sourceFile);
    const editsBeforeCasts = edits.length;
    addEnumeratedCodecCasts(sourceFile, edits);
    const casts = edits.length - editsBeforeCasts;
    if (edits.length === 0) return { changed: false, enums: 0, params: 0, casts: 0 };
    const next = applyEdits(original, edits);
    const problems = remainingProblems(next, file);
    if (problems.length > 0) {
        throw new Error(`rewrite left non-erasable syntax (${problems.join("; ")})`);
    }
    if (next !== original) writeFileSync(file, next);
    return { changed: next !== original, enums, params, casts };
}

function enableErasableSyntaxOnly(tsconfigPath) {
    const original = readFileSync(tsconfigPath, "utf8");
    if (/"erasableSyntaxOnly"\s*:/.test(original)) return false;
    const strict = /^([ \t]*)"strictNullChecks"\s*:\s*true,?/m.exec(original);
    let next;
    if (strict) {
        let line = strict[0];
        if (!line.trimEnd().endsWith(",")) line += ",";
        const replacement = `${line}\n${strict[1]}"erasableSyntaxOnly": true,`;
        next = original.slice(0, strict.index) + replacement + original.slice(strict.index + strict[0].length);
    } else {
        const header = /("compilerOptions"\s*:\s*\{)\s*\n/.exec(original);
        if (!header) throw new Error(`No compilerOptions in ${tsconfigPath}`);
        const indent = "    ";
        const insertAt = header.index + header[0].length;
        next = original.slice(0, insertAt) + `${indent}"erasableSyntaxOnly": true,\n` + original.slice(insertAt);
    }
    writeFileSync(tsconfigPath, next);
    return true;
}

let failed = 0;
for (const target of process.argv.slice(2)) {
    const files = [];
    collectFiles(target, files);
    let packageFailed = false;
    let fileCount = 0;
    let enumCount = 0;
    let paramCount = 0;
    let castCount = 0;
    const summary = () => `${target}: ${fileCount} file(s), ${enumCount} enum(s), ${paramCount} parameter propert${paramCount === 1 ? "y" : "ies"}, ${castCount} codec cast(s)`;
    for (const file of files) {
        try {
            const result = transformFile(file);
            if (result.changed) {
                fileCount++;
                enumCount += result.enums;
                paramCount += result.params;
                castCount += result.casts;
            }
        } catch (error) {
            packageFailed = true;
            failed++;
            console.error(`${file}: ${error.message}`);
        }
    }
    const tsconfig = join(target, "tsconfig.lib.json");
    if (!packageFailed) {
        try {
            if (statSync(tsconfig).isFile() && enableErasableSyntaxOnly(tsconfig)) {
                console.log(`${summary()}; erasableSyntaxOnly enabled`);
            } else {
                console.log(summary());
            }
        } catch (error) {
            if (error.code !== "ENOENT") {
                failed++;
                console.error(`${tsconfig}: ${error.message}`);
            } else {
                console.log(summary());
            }
        }
    }
}

if (failed > 0) {
    console.error(`${failed} file(s) failed.`);
    process.exit(1);
}

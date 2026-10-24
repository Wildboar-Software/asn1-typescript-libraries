/**
 * Rewrites TypeScript enum declarations into the erasable const-object form
 * so the sources can satisfy `erasableSyntaxOnly`.
 *
 * An enum is both a value and a type. The replacement keeps both:
 *
 *   export enum Color {
 *       red = 0,
 *       blue = 1,
 *   }
 *
 * becomes
 *
 *   export const Color = {
 *       red: 0,
 *       blue: 1,
 *   } as const;
 *
 *   export type Color = (typeof Color)[keyof typeof Color];
 *
 * `export` stays on its own line when the enum wrote it that way. A
 * `const enum` drops the extra `const` modifier. Member names, comments,
 * trailing commas, and literal initializers stay as written; `=` becomes
 * `:`. A member with no initializer gets the number TypeScript would have
 * assigned (0, then one more than the previous member). Any other
 * initializer is replaced with that constant value. `declare enum` is
 * rejected.
 *
 * A numeric enum type accepts any number. The replacement type is only the
 * member values, so an assignment of a plain number no longer typechecks.
 * Aliases in this repo that already say `| ENUMERATED` stay as wide as
 * they were. The tool does not rewrite those aliases.
 *
 * The rest of the file is left byte for byte. Inserted line breaks use
 * the newline that already precedes the enum, so CRLF files stay CRLF.
 * Running the tool again changes nothing.
 *
 * Usage: node tools/erasable-enum.mjs <file-or-directory>...
 */
import { Project, SyntaxKind, ts } from "ts-morph";
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { extname, join } from "node:path";

const SOURCE_EXTENSIONS = new Set([".mts", ".ts"]);

if (process.argv.length < 3) {
    console.error("Usage: node tools/erasable-enum.mjs <file-or-directory>...");
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

function lineStart(text, pos) {
    let i = pos;
    while (i > 0 && text[i - 1] !== "\n") i--;
    return i;
}

function fileNewline(text) {
    const lf = text.indexOf("\n");
    if (lf > 0 && text[lf - 1] === "\r") return "\r\n";
    return "\n";
}

function precedingNewline(text, pos) {
    const start = lineStart(text, pos);
    if (start >= 2 && text[start - 2] === "\r" && text[start - 1] === "\n") return "\r\n";
    if (start >= 1 && text[start - 1] === "\n") return "\n";
    // The declaration is at the start of the file, so the line above it
    // cannot tell us. Use the newline the file already writes.
    return fileNewline(text);
}

/** Indent of the line containing `pos`, or null when that line has code first. */
function indentAt(text, pos) {
    const raw = text.slice(lineStart(text, pos), pos).replace(/\r/g, "");
    for (const ch of raw) {
        if (ch !== " " && ch !== "\t") return null;
    }
    return raw;
}

function mayContainEnum(text) {
    return /\benum\s+[A-Za-z_$]/.test(text) || /\benum\s*\r?\n/.test(text);
}

function isPreservedLiteral(init) {
    if (!init) return false;
    const kind = init.getKind();
    if (kind === SyntaxKind.NumericLiteral
        || kind === SyntaxKind.StringLiteral
        || kind === SyntaxKind.BigIntLiteral
        || kind === SyntaxKind.NoSubstitutionTemplateLiteral) {
        return true;
    }
    if (kind === SyntaxKind.PrefixUnaryExpression) {
        // Prefix unary operators are a SyntaxKind, not a node.
        const operator = init.getOperatorToken();
        return (operator === SyntaxKind.MinusToken || operator === SyntaxKind.PlusToken)
            && init.getOperand().getKind() === SyntaxKind.NumericLiteral;
    }
    return false;
}

function formatValue(value, memberName) {
    if (typeof value === "number") {
        if (!Number.isFinite(value) || !Number.isSafeInteger(value)) {
            throw new Error(`member ${memberName} has unsupported numeric value ${value}`);
        }
        return String(value);
    }
    if (typeof value === "string") return JSON.stringify(value);
    throw new Error(`member ${memberName} has unsupported value ${String(value)}`);
}

function evaluatedValue(member) {
    const value = member.getValue();
    if (value === undefined) {
        const init = member.getInitializer();
        const rendered = init ? init.getText() : "(no initializer)";
        throw new Error(`cannot evaluate member ${member.getName()} (${rendered})`);
    }
    return value;
}

function horizontalGap(text) {
    return /^[ \t]*$/.test(text);
}

function memberEdit(text, member) {
    const nameEnd = member.getNameNode().getEnd();
    const equals = member.getFirstChildByKind(SyntaxKind.EqualsToken);
    if (!equals) {
        return {
            start: nameEnd,
            end: nameEnd,
            text: ": " + formatValue(evaluatedValue(member), member.getName()),
        };
    }
    const init = member.getInitializer();
    if (!init) throw new Error(`member ${member.getName()} has '=' but no initializer`);
    const gap = text.slice(nameEnd, equals.getStart());
    if (!isPreservedLiteral(init)) {
        const literal = formatValue(evaluatedValue(member), member.getName());
        if (horizontalGap(gap)) {
            return { start: nameEnd, end: init.getEnd(), text: ": " + literal };
        }
        return { start: equals.getStart(), end: init.getEnd(), text: ": " + literal };
    }
    if (horizontalGap(gap)) {
        const after = text[equals.getEnd()] ?? "";
        const colon = after === " " || after === "\t" || after === "\n" || after === "\r" ? ":" : ": ";
        return { start: nameEnd, end: equals.getEnd(), text: colon };
    }
    return { start: equals.getStart(), end: equals.getEnd(), text: ":" };
}

function typeIntro(text, en, indent) {
    const exported = en.getFirstModifierByKind(SyntaxKind.ExportKeyword);
    if (!exported) return `${indent}type `;
    const enumKeyword = en.getFirstChildByKind(SyntaxKind.EnumKeyword);
    const between = text.slice(exported.getEnd(), enumKeyword.getStart());
    if (between.includes("\n") && /^[\t \r\n]*$/.test(between)) {
        return `${indent}export${between}type `;
    }
    return `${indent}export type `;
}

function closingSpan(text, en) {
    let end = en.getEnd();
    let i = end;
    while (text[i] === " " || text[i] === "\t") i++;
    if (text[i] === ";") end = i + 1;
    return end;
}

function siblingStatements(en) {
    const parent = en.getParent();
    if (parent && typeof parent.getStatements === "function") return parent.getStatements();
    return [];
}

function assertNoNameConflict(en) {
    const name = en.getName();
    for (const stmt of siblingStatements(en)) {
        if (stmt === en) continue;
        if (stmt.getKind() === SyntaxKind.VariableStatement) {
            for (const decl of stmt.getDeclarations()) {
                if (decl.getName() === name) throw new Error(`${name} is already declared`);
            }
            continue;
        }
        if (typeof stmt.getName === "function" && stmt.getName() === name) {
            throw new Error(`${name} is already declared`);
        }
    }
}

function supportedModifiers(en) {
    for (const modifier of en.getModifiers()) {
        const kind = modifier.getKind();
        if (kind === SyntaxKind.ExportKeyword || kind === SyntaxKind.ConstKeyword) continue;
        throw new Error(`unsupported modifier "${modifier.getText()}" on enum ${en.getName()}`);
    }
    if (!en.getName()) throw new Error("unnamed enum");
    if (en.getNameNode().getKind() !== SyntaxKind.Identifier) {
        throw new Error(`enum name must be an identifier (${en.getNameNode().getText()})`);
    }
}

function transformEnum(text, en, edits) {
    supportedModifiers(en);
    assertNoNameConflict(en);
    const enumKeyword = en.getFirstChildByKind(SyntaxKind.EnumKeyword);
    if (!enumKeyword) throw new Error(`enum keyword missing on ${en.getName()}`);
    const indent = indentAt(text, en.getStart());
    if (indent === null) {
        throw new Error(`enum ${en.getName()} is not at the start of its line`);
    }
    const constModifier = en.getFirstModifierByKind(SyntaxKind.ConstKeyword);
    if (constModifier) {
        edits.push({ start: constModifier.getStart(), end: enumKeyword.getStart(), text: "" });
    }
    edits.push({ start: enumKeyword.getStart(), end: enumKeyword.getEnd(), text: "const" });

    const nameEnd = en.getNameNode().getEnd();
    const afterName = text[nameEnd] ?? "";
    const equalsInsert = afterName === " " || afterName === "\t" || afterName === "\n" || afterName === "\r"
        ? " ="
        : " = ";
    edits.push({ start: nameEnd, end: nameEnd, text: equalsInsert });

    const members = [];
    for (const member of en.getMembers()) {
        if (member.getNameNode().getKind() !== SyntaxKind.Identifier) {
            throw new Error(`enum member name must be an identifier (${member.getNameNode().getText()})`);
        }
        members.push({ name: member.getName(), value: evaluatedValue(member) });
        edits.push(memberEdit(text, member));
    }

    const nl = precedingNewline(text, en.getStart());
    const intro = typeIntro(text, en, indent);
    const alias = `${intro}${en.getName()} = (typeof ${en.getName()})[keyof typeof ${en.getName()}];`;
    const end = closingSpan(text, en);
    const trailingNl = end === text.length ? nl : "";
    edits.push({
        start: en.getEnd(),
        end,
        text: ` as const;${nl}${nl}${alias}${trailingNl}`,
    });
    return {
        name: en.getName(),
        exported: Boolean(en.getFirstModifierByKind(SyntaxKind.ExportKeyword)),
        members,
    };
}

function assertNoOverlap(edits) {
    const sorted = [...edits].sort((a, b) => a.start - b.start || a.end - b.end);
    for (let i = 1; i < sorted.length; i++) {
        const prev = sorted[i - 1];
        const next = sorted[i];
        if (next.start < prev.end || next.start === prev.start) {
            throw new Error(`overlapping edits at ${prev.start}-${prev.end} and ${next.start}-${next.end}`);
        }
    }
}

function applyEdits(original, edits) {
    assertNoOverlap(edits);
    const sorted = [...edits].sort((a, b) => b.start - a.start || b.end - a.end);
    let next = original;
    for (const edit of sorted) {
        if (edit.start < 0 || edit.end > next.length || edit.start > edit.end) {
            throw new Error(`edit out of range ${edit.start}-${edit.end} for length ${next.length}`);
        }
        next = next.slice(0, edit.start) + edit.text + next.slice(edit.end);
    }
    return next;
}

function literalValue(node) {
    if (!node) return undefined;
    if (node.getKind() === SyntaxKind.NumericLiteral
        || node.getKind() === SyntaxKind.StringLiteral
        || node.getKind() === SyntaxKind.BigIntLiteral) {
        return node.getLiteralValue();
    }
    if (node.getKind() === SyntaxKind.NoSubstitutionTemplateLiteral) {
        return node.getLiteralText();
    }
    if (node.getKind() === SyntaxKind.PrefixUnaryExpression) {
        const operator = node.getOperatorToken();
        const operand = node.getOperand();
        if (operand.getKind() !== SyntaxKind.NumericLiteral) return undefined;
        if (operator === SyntaxKind.MinusToken) return -operand.getLiteralValue();
        if (operator === SyntaxKind.PlusToken) return operand.getLiteralValue();
    }
    return undefined;
}

function constObjectMembers(decl) {
    const init = decl.getInitializer();
    if (!init || init.getKind() !== SyntaxKind.AsExpression) return null;
    if (init.getTypeNode()?.getText() !== "const") return null;
    const object = init.getExpression();
    if (object.getKind() !== SyntaxKind.ObjectLiteralExpression) return null;
    const members = new Map();
    for (const prop of object.getProperties()) {
        if (prop.getKind() !== SyntaxKind.PropertyAssignment) return null;
        const value = literalValue(prop.getInitializer());
        if (value === undefined) return null;
        members.set(prop.getName(), value);
    }
    return members;
}

function sameMembers(actual, expected) {
    if (actual.size !== expected.length) return false;
    for (const member of expected) {
        if (!actual.has(member.name) || actual.get(member.name) !== member.value) return false;
    }
    return true;
}

function assertRewritten(project, next, enums) {
    const check = project.createSourceFile("/virtual/erasable-enum-check.mts", next, { overwrite: true });
    try {
        const diagnostics = check.compilerNode.parseDiagnostics ?? [];
        if (diagnostics.length > 0) {
            const message = diagnostics
                .map((diag) => ts.flattenDiagnosticMessageText(diag.messageText, "\n"))
                .join("; ");
            throw new Error(`rewrite did not parse: ${message}`);
        }
        const left = check.getDescendantsOfKind(SyntaxKind.EnumDeclaration);
        if (left.length > 0) {
            throw new Error(`rewrite left ${left.length} enum declaration(s)`);
        }
        const variables = check.getDescendantsOfKind(SyntaxKind.VariableDeclaration);
        const aliases = check.getDescendantsOfKind(SyntaxKind.TypeAliasDeclaration);
        for (const info of enums) {
            const found = variables.filter((decl) => {
                const nameNode = decl.getNameNode();
                if (nameNode.getKind() !== SyntaxKind.Identifier || nameNode.getText() !== info.name) return false;
                const members = constObjectMembers(decl);
                return members !== null && sameMembers(members, info.members);
            });
            if (found.length !== 1) {
                throw new Error(`rewrite did not produce a const object for ${info.name}`);
            }
            const statement = found[0].getVariableStatement();
            if (Boolean(statement?.isExported()) !== info.exported) {
                throw new Error(`export of const ${info.name} does not match the enum`);
            }
            const alias = aliases.find((decl) => decl.getName() === info.name);
            const expectedType = `(typeof ${info.name})[keyof typeof ${info.name}]`;
            if (!alias || alias.getTypeNode()?.getText() !== expectedType) {
                throw new Error(`rewrite did not produce a type alias for ${info.name}`);
            }
            if (alias.isExported() !== info.exported) {
                throw new Error(`export of type ${info.name} does not match the enum`);
            }
        }
    } finally {
        project.removeSourceFile(check);
    }
}

function transformFile(project, file, original) {
    if (!mayContainEnum(original)) return null;
    const sourceFile = project.addSourceFileAtPath(file);
    try {
        if (sourceFile.getFullText() !== original) {
            throw new Error("parsed text differs from disk");
        }
        const enums = sourceFile.getDescendantsOfKind(SyntaxKind.EnumDeclaration);
        if (enums.length === 0) return null;
        const edits = [];
        const rewritten = [];
        for (const en of enums) rewritten.push(transformEnum(original, en, edits));
        const next = applyEdits(original, edits);
        assertRewritten(project, next, rewritten);
        return { next, count: rewritten.length };
    } finally {
        project.removeSourceFile(sourceFile);
    }
}

const files = [];
for (const target of process.argv.slice(2)) collectFiles(target, files);
files.sort();

const project = new Project({
    skipAddingFilesFromTsConfig: true,
    skipFileDependencyResolution: true,
    skipLoadingLibFiles: true,
});

let filesChanged = 0;
let enumsChanged = 0;
let failed = 0;

for (const file of files) {
    let original;
    try {
        original = readFileSync(file, "utf8");
    } catch (error) {
        failed++;
        console.error(`Failed to read ${file}: ${error.message}`);
        continue;
    }
    try {
        const result = transformFile(project, file, original);
        if (!result) continue;
        writeFileSync(file, result.next);
        filesChanged++;
        enumsChanged += result.count;
        console.log(`${file} (${result.count})`);
    } catch (error) {
        failed++;
        console.error(`Failed to rewrite ${file}: ${error.message}`);
    }
}

console.log(`Updated ${enumsChanged} enum(s) in ${filesChanged} file(s).`);
if (failed > 0) {
    console.error(`${failed} file(s) failed.`);
    process.exit(1);
}

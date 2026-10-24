/**
 * Rewrites TypeScript constructor parameter properties into explicit class
 * fields so the sources satisfy `erasableSyntaxOnly`.
 *
 * A constructor parameter such as `readonly name: Type = fallback`, with
 * its leading comment, becomes a class field `public readonly name: Type`
 * carrying that comment. The parameter keeps its name, type, question
 * mark, and default. The constructor assigns `this.name = name`.
 *
 * `readonly` parameter properties are public when they have no access
 * modifier, so the field is declared `public readonly`. An explicit
 * `public` / `protected` / `private`, and `override`, are kept. The
 * parameter's leading comments move onto the field. A same-line trailing
 * comment moves onto the field too. Defaults stay on the parameter.
 * Assignments are the first statements of the constructor, or the first
 * statements after a direct `super()` call.
 *
 * The rest of the file is left byte for byte. Inserted line breaks use
 * the newline that already precedes the constructor, so CRLF files stay
 * CRLF. Running the tool again changes nothing.
 *
 * Usage: node tools/explicit-readonly-params.mjs <file-or-directory>...
 */
import { Node, Project, SyntaxKind, ts } from "ts-morph";
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { extname, join } from "node:path";

const SOURCE_EXTENSIONS = new Set([".mts", ".ts"]);
const ALLOWED_MODIFIERS = new Set([
    SyntaxKind.PublicKeyword,
    SyntaxKind.PrivateKeyword,
    SyntaxKind.ProtectedKeyword,
    SyntaxKind.OverrideKeyword,
    SyntaxKind.ReadonlyKeyword,
]);

if (process.argv.length < 3) {
    console.error("Usage: node tools/explicit-readonly-params.mjs <file-or-directory>...");
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

function precedingNewline(text, pos) {
    const start = lineStart(text, pos);
    if (start >= 2 && text[start - 2] === "\r" && text[start - 1] === "\n") return "\r\n";
    if (start >= 1 && text[start - 1] === "\n") return "\n";
    return "\n";
}

/** Indent of the line containing `pos`, or null when that line has code first. */
function indentAt(text, pos) {
    const raw = text.slice(lineStart(text, pos), pos).replace(/\r/g, "");
    for (const ch of raw) {
        if (ch !== " " && ch !== "\t") return null;
    }
    return raw;
}

function reindentComment(commentText, fromIndent, toIndent) {
    const parts = commentText.split(/(\r\n|\n)/);
    let out = "";
    for (let i = 0; i < parts.length; i++) {
        if (i % 2 === 1) {
            out += parts[i];
            continue;
        }
        const line = parts[i];
        if (i === 0) {
            out += line;
            continue;
        }
        if (line.trim() === "") continue;
        if (fromIndent.length > 0 && line.startsWith(fromIndent)) {
            out += toIndent + line.slice(fromIndent.length);
        } else {
            out += line;
        }
    }
    return out;
}

function modifierText(param) {
    for (const modifier of param.getModifiers()) {
        if (!ALLOWED_MODIFIERS.has(modifier.getKind())) {
            throw new Error(`unsupported modifier "${modifier.getText()}" on parameter ${param.getName()}`);
        }
    }
    if (param.getDecorators().length > 0) {
        throw new Error(`decorators on parameter ${param.getName()} are not supported`);
    }
    if (param.isRestParameter()) {
        throw new Error(`rest parameter property ${param.getName()} is not supported`);
    }
    if (param.getNameNode().getKind() !== SyntaxKind.Identifier) {
        throw new Error(`parameter property name must be an identifier (${param.getNameNode().getText()})`);
    }
    const parts = [];
    if (param.hasModifier(SyntaxKind.PrivateKeyword)) parts.push("private");
    else if (param.hasModifier(SyntaxKind.ProtectedKeyword)) parts.push("protected");
    else parts.push("public");
    if (param.hasModifier(SyntaxKind.OverrideKeyword)) parts.push("override");
    if (param.hasModifier(SyntaxKind.ReadonlyKeyword)) parts.push("readonly");
    return parts.join(" ");
}

function typeSlice(text, param) {
    const nameEnd = param.getNameNode().getEnd();
    const typeNode = param.getTypeNode();
    if (typeNode) return text.slice(nameEnd, typeNode.getEnd());
    const question = param.getFirstChildByKind(SyntaxKind.QuestionToken);
    if (question) return text.slice(nameEnd, question.getEnd());
    return "";
}

function leadingCommentText(text, param, memberIndent) {
    const ranges = param.getLeadingCommentRanges();
    if (ranges.length === 0) return "";
    const raw = text.slice(ranges[0].getPos(), ranges[ranges.length - 1].getEnd());
    const fromIndent = indentAt(text, ranges[0].getPos()) ?? "";
    return memberIndent + reindentComment(raw, fromIndent, memberIndent);
}

/**
 * Same-line trailing comments belong on the field. Returns the comment
 * text (with a leading space) and the source span to delete, or null
 * when the comment is not on the parameter's last line.
 */
function sameLineTrailingComment(text, param, limit) {
    const trails = param.getTrailingCommentRanges()
        .filter((range) => range.getPos() >= param.getEnd() && range.getEnd() <= limit);
    if (trails.length === 0) return null;
    const gap = text.slice(param.getEnd(), trails[0].getPos());
    if (gap.includes("\n") || gap.trim() !== "") return null;
    // A comma (and whitespace) may sit between the comment and the next
    // parameter or the closing parenthesis. Anything else means the
    // comment is not the parameter's own trailing comment.
    const after = text.slice(trails[trails.length - 1].getEnd(), limit);
    if (!/^[\s,]*$/.test(after)) return null;
    return {
        start: param.getEnd(),
        end: trails[trails.length - 1].getEnd(),
        text: " " + trails.map((range) => text.slice(range.getPos(), range.getEnd())).join(" "),
    };
}

function parameterGap(text, param) {
    const leading = text.slice(param.getFullStart(), param.getStart());
    if (!leading.includes("\n")) {
        return leading.trim() === "" && leading.length > 0 ? " " : "";
    }
    const indent = indentAt(text, param.getStart());
    if (indent === null) {
        throw new Error(`parameter ${param.getName()} is not alone on its line`);
    }
    return precedingNewline(text, param.getStart()) + indent;
}

function isSuperCallStatement(stmt) {
    if (!Node.isExpressionStatement(stmt)) return false;
    const expr = stmt.getExpression();
    return Node.isCallExpression(expr) && expr.getExpression().getKind() === SyntaxKind.SuperKeyword;
}

function propertyBlock(text, params, memberIndent, nl, limits) {
    const blocks = [];
    for (let i = 0; i < params.length; i++) {
        const param = params[i];
        const comment = leadingCommentText(text, param, memberIndent);
        const trail = sameLineTrailingComment(text, param, limits[i]);
        const decl = `${memberIndent}${modifierText(param)} ${param.getNameNode().getText()}${typeSlice(text, param)};${trail ? trail.text : ""}`;
        blocks.push(comment ? comment + nl + decl : decl);
    }
    return blocks.join(nl);
}

function assignmentBlock(params, stmtIndent, nl) {
    return params
        .map((param) => `${stmtIndent}this.${param.getNameNode().getText()} = ${param.getNameNode().getText()};`)
        .join(nl);
}

function indentUnit(memberIndent) {
    if (memberIndent.includes("\t")) return "\t";
    if (memberIndent.length > 0 && memberIndent.length % 4 === 0) return "    ";
    if (memberIndent.length > 0 && memberIndent.length % 2 === 0) return "  ";
    return "    ";
}

function statementIndent(text, body, memberIndent, paramIndent) {
    const first = body.getStatements()[0];
    if (first) {
        const indent = indentAt(text, first.getStart());
        if (indent !== null && indent.length > 0) return indent;
    }
    if (paramIndent.startsWith(memberIndent) && paramIndent.length > memberIndent.length) {
        return paramIndent;
    }
    return memberIndent + indentUnit(memberIndent);
}

function transformConstructor(text, cls, ctor, edits) {
    const params = ctor.getParameters().filter((param) => param.isParameterProperty());
    if (params.length === 0) return 0;
    const body = ctor.getBody();
    if (!body) {
        throw new Error("parameter property on a constructor without a body");
    }
    const ctorStart = ctor.getStart();
    const ctorEnd = ctor.getEnd();
    for (const prop of cls.getProperties()) {
        const start = prop.getStart();
        if (start >= ctorStart && start < ctorEnd) continue;
        if (params.some((param) => param.getName() === prop.getName())) {
            throw new Error(`property ${prop.getName()} is already declared`);
        }
    }

    const memberIndent = indentAt(text, ctor.getStart());
    if (memberIndent === null) {
        throw new Error("constructor is not at the start of its line");
    }
    const nl = precedingNewline(text, ctor.getStart());
    let paramIndent = memberIndent;
    for (const param of params) {
        const indent = indentAt(text, param.getStart());
        if (indent !== null) {
            paramIndent = indent;
            break;
        }
    }
    const allParams = ctor.getParameters();
    const closeParen = ctor.getFirstChildByKind(SyntaxKind.CloseParenToken);
    const limits = params.map((param) => {
        const next = allParams[allParams.indexOf(param) + 1];
        if (next) return next.getFullStart();
        return closeParen ? closeParen.getStart() : body.getStart();
    });

    const constructors = cls.getConstructors();
    const anchor = constructors[0] ?? ctor;
    const anchorComments = anchor.getLeadingCommentRanges();
    const insertAt = anchorComments.length > 0
        ? lineStart(text, anchorComments[0].getPos())
        : lineStart(text, anchor.getStart());
    edits.push({
        start: insertAt,
        end: insertAt,
        text: propertyBlock(text, params, memberIndent, nl, limits) + nl + nl,
    });

    for (let i = 0; i < params.length; i++) {
        const param = params[i];
        edits.push({
            start: param.getFullStart(),
            end: param.getNameNode().getStart(),
            text: parameterGap(text, param),
        });
        const trail = sameLineTrailingComment(text, param, limits[i]);
        if (trail) edits.push({ start: trail.start, end: trail.end, text: "" });
    }

    const assignments = assignmentBlock(params, statementIndent(text, body, memberIndent, paramIndent), nl);
    const statements = body.getStatements();
    const superKeywords = body.getDescendantsOfKind(SyntaxKind.SuperKeyword);
    if (superKeywords.length > 0) {
        const superStmts = statements.filter(isSuperCallStatement);
        if (superStmts.length !== 1 || superKeywords.length !== 1) {
            throw new Error("unsupported super() placement");
        }
        const at = superStmts[0].getEnd();
        edits.push({ start: at, end: at, text: nl + assignments });
    } else if (statements.length === 0) {
        const innerStart = body.getStart() + 1;
        const innerEnd = body.getEnd() - 1;
        const inner = text.slice(innerStart, innerEnd);
        if (inner.trim() === "") {
            edits.push({
                start: innerStart,
                end: innerEnd,
                text: nl + assignments + nl + memberIndent,
            });
        } else {
            edits.push({ start: innerStart, end: innerStart, text: nl + assignments + nl });
        }
    } else {
        const at = statements[0].getFullStart();
        edits.push({ start: at, end: at, text: nl + assignments });
    }
    return params.length;
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

function assertErased(project, next) {
    const check = project.createSourceFile("/virtual/explicit-readonly-check.mts", next, { overwrite: true });
    try {
        const diagnostics = check.compilerNode.parseDiagnostics ?? [];
        if (diagnostics.length > 0) {
            const message = diagnostics
                .map((diag) => ts.flattenDiagnosticMessageText(diag.messageText, "\n"))
                .join("; ");
            throw new Error(`rewrite did not parse: ${message}`);
        }
        const left = check.getDescendantsOfKind(SyntaxKind.Constructor)
            .flatMap((ctor) => ctor.getParameters())
            .filter((param) => param.isParameterProperty());
        if (left.length > 0) {
            throw new Error(`rewrite left ${left.length} parameter propert${left.length === 1 ? "y" : "ies"}`);
        }
    } finally {
        project.removeSourceFile(check);
    }
}

function transformFile(project, file, original) {
    if (!original.includes("constructor")) return null;
    const sourceFile = project.addSourceFileAtPath(file);
    try {
        if (sourceFile.getFullText() !== original) {
            throw new Error("parsed text differs from disk");
        }
        const edits = [];
        let count = 0;
        const classes = [
            ...sourceFile.getDescendantsOfKind(SyntaxKind.ClassDeclaration),
            ...sourceFile.getDescendantsOfKind(SyntaxKind.ClassExpression),
        ];
        for (const cls of classes) {
            for (const ctor of cls.getConstructors()) {
                count += transformConstructor(original, cls, ctor, edits);
            }
        }
        if (count === 0) return null;
        const next = applyEdits(original, edits);
        assertErased(project, next);
        return { next, count };
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
let paramsChanged = 0;
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
        paramsChanged += result.count;
        console.log(`${file} (${result.count})`);
    } catch (error) {
        failed++;
        console.error(`Failed to rewrite ${file}: ${error.message}`);
    }
}

console.log(`Updated ${paramsChanged} parameter(s) in ${filesChanged} file(s).`);
if (failed > 0) {
    console.error(`${failed} file(s) failed.`);
    process.exit(1);
}

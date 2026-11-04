import { Buffer } from "node:buffer";

/**
 * A UTF-8 string when the octets are valid UTF-8, otherwise the lowercase
 * hexadecimal encoding of those octets. The hex form cannot be confused with
 * text, because text is always a JSON string.
 */
export type OctetsJSON = string | { hex: string };

const LDIF_LINE_LENGTH: number = 76;

const NUL: number = "\u0000".charCodeAt(0);
const START_OF_HEADING: number = "\u0001".charCodeAt(0);
const LINE_FEED: number = "\n".charCodeAt(0);
const CARRIAGE_RETURN: number = "\r".charCodeAt(0);
const SPACE: number = " ".charCodeAt(0);
const LEFT_PARENTHESIS: number = "(".charCodeAt(0);
const RIGHT_PARENTHESIS: number = ")".charCodeAt(0);
const ASTERISK: number = "*".charCodeAt(0);
const COLON: number = ":".charCodeAt(0);
const LESS_THAN: number = "<".charCodeAt(0);
const BACKSLASH: number = "\\".charCodeAt(0);
const DELETE: number = "\u007F".charCodeAt(0);

function asBuffer(octets: Uint8Array): Buffer {
    return Buffer.from(octets.buffer, octets.byteOffset, octets.byteLength);
}

/**
 * Decode octets as UTF-8, or `undefined` if they are not well-formed.
 *
 * `Buffer.toString("utf8")` never throws: it replaces bad sequences with
 * U+FFFD. A fatal {@link TextDecoder} throws instead, which is the same
 * check used elsewhere in this repo.
 */
function tryUtf8(octets: Uint8Array): string | undefined {
    try {
        return new TextDecoder("utf-8", { fatal: true }).decode(octets);
    } catch {
        return undefined;
    }
}

/**
 * Decode an `LDAPString` (UTF-8 octets) to a JavaScript string.
 *
 * @param octets The LDAP string
 * @returns The decoded text
 */
export function ldapString(octets: Uint8Array): string {
    return asBuffer(octets).toString("utf8");
}

/**
 * Escape the RFC 4515 filter metacharacters in text that is already UTF-8.
 */
function escapeFilterText(text: string): string {
    let out: string = "";
    for (const char of text) {
        const code: number = char.charCodeAt(0);
        const escaped: boolean = (code === NUL)
            || (code === LEFT_PARENTHESIS)
            || (code === RIGHT_PARENTHESIS)
            || (code === ASTERISK)
            || (code === BACKSLASH);
        out += escaped
            ? "\\" + code.toString(16).padStart(2, "0")
            : char;
    }
    return out;
}

/**
 * Encode octets as an RFC 4515 filter `<value>`.
 *
 * The octets are decoded as one UTF-8 string. NUL, `(`, `)`, `*`, and `\`
 * in that text are written as `\HH`. If the octets are not UTF-8, the whole
 * value is base64, the same encoding LDIF uses for a value that is not a
 * safe string.
 *
 * @param octets The assertion value
 * @returns The filter value text
 */
export function rfc4515Value(octets: Uint8Array): string {
    const text: string | undefined = tryUtf8(octets);
    if (text !== undefined) {
        return escapeFilterText(text);
    }
    return asBuffer(octets).toString("base64");
}

function isBytes(value: unknown): value is Uint8Array {
    return value instanceof Uint8Array;
}

/**
 * The `<value>` of an RFC 4515 substring filter, without the attribute type.
 *
 * `initial` is written first and `final` last, which is the order RFC 4511
 * requires, even if the SEQUENCE lists them differently. Stars separate the
 * pieces; a missing side still contributes its star (`foo*`, `*bar`, `*baz*`).
 *
 * @param substrings The substring choices
 * @returns The RFC 4515 substring value
 */
export function rfc4515Substrings(substrings: readonly object[]): string {
    let initial: Uint8Array | undefined;
    const anys: Uint8Array[] = [];
    let final_: Uint8Array | undefined;
    for (const sub of substrings) {
        if (
            ("initial" in sub)
            && isBytes(sub.initial)
            && (initial === undefined)
        ) {
            initial = sub.initial;
            continue;
        }
        if (("any_" in sub) && isBytes(sub.any_)) {
            anys.push(sub.any_);
            continue;
        }
        if (
            ("final" in sub)
            && isBytes(sub.final)
            && (final_ === undefined)
        ) {
            final_ = sub.final;
        }
    }
    if (
        (initial === undefined)
        && (final_ === undefined)
        && (anys.length === 0)
    ) {
        return "";
    }
    const parts: string[] = [initial ? rfc4515Value(initial) : ""];
    for (const any of anys) {
        parts.push(rfc4515Value(any));
    }
    parts.push(final_ ? rfc4515Value(final_) : "");
    return parts.join("*");
}

/**
 * An RFC 4515 substring filter, including the surrounding parentheses.
 *
 * @param type_ The attribute description
 * @param substrings The substring choices
 * @returns The filter string
 */
export function rfc4515SubstringFilter(
    type_: Uint8Array,
    substrings: readonly object[],
): string {
    return `(${ldapString(type_)}=${rfc4515Substrings(substrings)})`;
}

/**
 * An RFC 4515 extensible match, including the surrounding parentheses.
 *
 * @param options The assertion fields
 * @returns The filter string
 */
export function rfc4515Extensible(options: {
    readonly type_?: Uint8Array | undefined;
    readonly matchingRule?: Uint8Array | undefined;
    readonly matchValue: Uint8Array;
    readonly dnAttributes?: boolean | undefined;
}): string {
    const attr: string = options.type_ ? ldapString(options.type_) : "";
    const dn: string = options.dnAttributes ? ":dn" : "";
    const rule: string = options.matchingRule
        ? `:${ldapString(options.matchingRule)}`
        : "";
    return `(${attr}${dn}${rule}:=${rfc4515Value(options.matchValue)})`;
}

/**
 * JSON for an octet string: the UTF-8 text when that is lossless, otherwise
 * `{ hex }`.
 *
 * @param octets The octets
 * @returns The JSON value
 */
export function octetsToJSON(octets: Uint8Array): OctetsJSON {
    const text: string | undefined = tryUtf8(octets);
    if (text !== undefined) {
        return text;
    }
    return { hex: asBuffer(octets).toString("hex") };
}

function isSafeInit(byte: number): boolean {
    if (
        (byte === NUL)
        || (byte === LINE_FEED)
        || (byte === CARRIAGE_RETURN)
        || (byte === SPACE)
        || (byte === COLON)
        || (byte === LESS_THAN)
    ) {
        return false;
    }
    return (byte >= START_OF_HEADING) && (byte <= DELETE);
}

function isSafeChar(byte: number): boolean {
    if (
        (byte === NUL)
        || (byte === LINE_FEED)
        || (byte === CARRIAGE_RETURN)
    ) {
        return false;
    }
    return (byte >= START_OF_HEADING) && (byte <= DELETE);
}

function isLdifSafe(value: Uint8Array): boolean {
    if (value.length === 0) {
        return true;
    }
    if (!isSafeInit(value[0])) {
        return false;
    }
    for (let i: number = 1; i < value.length; i++) {
        if (!isSafeChar(value[i])) {
            return false;
        }
    }
    return true;
}

/**
 * Fold an LDIF line at 76 characters, per IETF RFC 2849. Continuation lines
 * begin with a single space, which a parser removes.
 *
 * @param line One logical LDIF line
 * @returns The line, folded with `\n`
 */
export function foldLdifLine(line: string): string {
    if (line.length <= LDIF_LINE_LENGTH) {
        return line;
    }
    const chunks: string[] = [line.slice(0, LDIF_LINE_LENGTH)];
    let index: number = LDIF_LINE_LENGTH;
    while (index < line.length) {
        const take: number = Math.min(LDIF_LINE_LENGTH - 1, line.length - index);
        chunks.push(line.slice(index, index + take));
        index += take;
    }
    return chunks.join("\n ");
}

/**
 * One LDIF `attr: value` or `attr:: base64` line, folded.
 *
 * Safe values are those RFC 2849 allows in a SAFE-STRING. Anything else,
 * including non-ASCII UTF-8, is base64.
 *
 * @param description The attribute description
 * @param value The raw value octets
 * @returns The folded LDIF line
 */
export function formatLdifAttribute(
    description: string,
    value: Uint8Array,
): string {
    if (isLdifSafe(value)) {
        const text: string = (value.length === 0)
            ? ""
            : asBuffer(value).toString("latin1");
        const separator: string = (text.length === 0) ? "" : " ";
        return foldLdifLine(`${description}:${separator}${text}`);
    }
    return foldLdifLine(
        `${description}:: ${asBuffer(value).toString("base64")}`,
    );
}

/**
 * LDIF lines for every value of one attribute. No lines when there are no
 * values: LDIF has no spelling of a zero-value attribute.
 *
 * @param description The attribute description
 * @param values The values
 * @returns The lines joined by `\n`, or `""`
 */
export function formatLdifAttributes(
    description: string,
    values: readonly Uint8Array[],
): string {
    return values
        .map((value) => formatLdifAttribute(description, value))
        .join("\n");
}

/**
 * The LDIF name of a modify operation. Unknown codes are their decimal form.
 *
 * @param operation `add` (0), `delete` (1), `replace` (2), or an extension
 * @returns The LDIF operation keyword
 */
export function ldifModifyOperation(operation: number): string {
    if (operation === 0) {
        return "add";
    }
    if (operation === 1) {
        return "delete";
    }
    if (operation === 2) {
        return "replace";
    }
    return operation.toString();
}

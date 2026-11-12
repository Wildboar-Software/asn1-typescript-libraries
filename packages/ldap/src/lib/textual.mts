import { Buffer } from "node:buffer";

/**
 * JSON encoding of an octet string. `hex` is always the lowercase
 * hexadecimal octets. `utf8` is present when those octets are well-formed
 * UTF-8.
 */
export type OctetsJSON = {
    hex: string;
    utf8?: string;
};

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
 * @param substrings The substring choices. An array or an iterator is read once.
 * @returns The RFC 4515 substring value
 */
export function rfc4515Substrings(
    substrings: readonly object[] | IterableIterator<object>,
): string {
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
 * @param substrings The substring choices. An array or an iterator is read once.
 * @returns The filter string
 */
export function rfc4515SubstringFilter(
    type_: Uint8Array,
    substrings: readonly object[] | IterableIterator<object>,
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
 * JSON for an octet string: always `{ hex }`, plus `utf8` when the octets
 * are well-formed UTF-8.
 *
 * @param octets The octets
 * @returns The JSON value
 */
export function octetsToJSON(octets: Uint8Array): OctetsJSON {
    const json: OctetsJSON = {
        hex: asBuffer(octets).toString("hex"),
    };
    const text: string | undefined = tryUtf8(octets);
    if (text !== undefined) {
        json.utf8 = text;
    }
    return json;
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
    // RFC 2849 note 8: a value that ends with SPACE SHOULD be base-64
    // encoded. Physical-line parsers often strip that trailing space.
    if (value[value.length - 1] === SPACE) {
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
 * How many characters of `line` starting at `index` belong on this physical
 * line. RFC 2849 folds at 76. Every SPACE at the end of the slice is left
 * for the next line so a run of two or more spaces is not stripped (note 8).
 */
function ldifFoldTake(line: string, index: number, max: number): number {
    let take: number = Math.max(1, Math.min(max, line.length - index));
    while (
        (take > 1)
        && (line.charCodeAt(index + take - 1) === SPACE)
    ) {
        take--;
    }
    return Math.max(1, take);
}

function ldifLineEndsWithSpace(folded: string): boolean {
    return folded.split("\n").some((physical) => physical.endsWith(" "));
}

/**
 * Fold an LDIF line at 76 characters, per IETF RFC 2849. Continuation lines
 * begin with a single space, which a parser removes. A fold is moved earlier
 * when it would leave one or more SPACE characters at the end of a physical
 * line.
 *
 * @param line One logical LDIF line
 * @returns The line, folded with `\n`
 */
export function foldLdifLine(line: string): string {
    if (line.length <= LDIF_LINE_LENGTH) {
        return line;
    }
    const chunks: string[] = [];
    let index: number = 0;
    let max: number = LDIF_LINE_LENGTH;
    while (index < line.length) {
        const take: number = ldifFoldTake(line, index, max);
        chunks.push(line.slice(index, index + take));
        index += take;
        max = LDIF_LINE_LENGTH - 1;
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
        const folded: string = foldLdifLine(`${description}:${separator}${text}`);
        if (!ldifLineEndsWithSpace(folded)) {
            return folded;
        }
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
 * @param values The values. An array or an iterator is read once.
 * @returns The lines joined by `\n`, or `""`
 */
export function formatLdifAttributes(
    description: string,
    values: readonly Uint8Array[] | IterableIterator<Uint8Array>,
): string {
    const lines: string[] = [];
    for (const value of values) {
        lines.push(formatLdifAttribute(description, value));
    }
    return lines.join("\n");
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

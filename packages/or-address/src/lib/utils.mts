/**
 * @summary Replace an unescaped delimiter so the result stays a PrintableString.
 * @description
 *
 * Used when a value cannot include the O/R-address display delimiter. Space
 * delimiters become `?`; other delimiters become a space. This is a display
 * helper, not an X.400 protocol rule (ITU-T X.402 (1999) does not define this
 * substitution).
 *
 * @param s The string to sanitize.
 * @param delim Code point of the delimiter.
 * @returns The sanitized string.
 * @function
 */
export function make_string_safe(s: string, delim: number): string {
    const replacement = (delim === " ".charCodeAt(0))
        ? "?" // Still PrintableString
        : " " // Still PrintableString
        ;
    const d = String.fromCharCode(delim);
    if (s.includes(d)) {
        return s.replace(d, replacement);
    }
    return s;
}

/**
 * @summary Escape an attribute value string based on the delimiter used.
 * @description
 * 
 * This escapes strings based on this statement in
 * [IETF RFC 1685](https://www.rfc-editor.org/info/rfc1685/), Section F.3.2.1:
 * 
 * > If the value of any attribute contains the delimiter character, this is
 * > represented by a pair of delimiter characters.
 * 
 * @param s The string to escape.
 * @param delim The delimiter to escape.
 * @returns The escaped string.
 * @function
 */
export function escape_oraddress_attribute_value(s: string, delim: number): string {
    const d = String.fromCharCode(delim);
    const replacement = d.repeat(2);
    // At least according to ChatGPT, V8 is smart enough to return the original
    // string if the replaced substring is not found, so we don't have to worry
    // about optimizing for the most likely "not-found" case.
    return s.replaceAll(d, replacement);
}

/**
 * Options for IETF RFC 2156 `std-printablestring` quoting.
 */
export interface EscapeRFC2156StdPrintableOptions {
    /**
     * When `true` (the default), prefix `*` with `$` so a printable-only value
     * is not later parsed as `teletex-and-or-ps`.
     */
    escapeStar?: boolean;
}

/**
 * @summary Quote `$`, `/`, `=`, and optionally `*` for IETF RFC 2156.
 * @description
 *
 * RFC 2156 §4.1.3 uses `$` to quote the next character so `/` and `=` are not
 * taken as `std-or-address` delimiters. `*` is quoted in printable-only values
 * so it is not taken as the `teletex-and-or-ps` separator.
 *
 * @param s The unquoted string.
 * @param options Quoting options.
 * @returns The quoted string.
 */
export function escapeRFC2156StdPrintable(
    s: string,
    options: EscapeRFC2156StdPrintableOptions = {},
): string {
    const escapeStar = options.escapeStar ?? true;
    let out = "";
    for (const c of s) {
        if (
            (c === "$")
            || (c === "/")
            || (c === "=")
            || (
                escapeStar
                && (c === "*")
            )
        ) {
            out += "$";
        }
        out += c;
    }
    return out;
}

/**
 * An abstract O/R address attribute label after quoting has been undone.
 */
export type AddressAttributeLabel = string;

/**
 * An abstract O/R address attribute value after quoting has been undone.
 */
export type AddressAttributeValue = string;

/**
 * An abstract label/value pair yielded by the RFC 1685 or RFC 2156 lexers.
 */
export type AddressComponent = readonly [AddressAttributeLabel, AddressAttributeValue];

const SOLIDUS = "/".codePointAt(0)!;
const SEMICOLON = ";".codePointAt(0)!;
const DOLLAR = "$".codePointAt(0)!;
const EQUALS_SIGN = "=";

/**
 * @summary Find the label/value separator in an IETF RFC 1685 component.
 * @description
 *
 * Returns the index of the first `=` that is not doubled. Doubled `=` is used
 * only in a domain-defined attribute type (`DDA:<type>`), so `DDA:foo==bar=value`
 * splits after the type, not inside it.
 *
 * @param s The `LABEL=value` component.
 * @returns The index of the separator, or `-1` if none is found.
 */
export function findRFC1685LabelValueSeparator(s: string): number {
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== EQUALS_SIGN) {
            continue;
        }
        if (s[i + 1] === EQUALS_SIGN) {
            i++;
            continue;
        }
        return i;
    }
    return -1;
}

/**
 * @summary Find the label/value separator in an IETF RFC 2156 component.
 * @description
 *
 * Returns the index of the first `=` that is not quoted by a preceding `$`.
 *
 * @param s The `LABEL=value` component.
 * @returns The index of the separator, or `-1` if none is found.
 */
export function findRFC2156LabelValueSeparator(s: string): number {
    for (let i = 0; i < s.length; i++) {
        if (s.codePointAt(i) === DOLLAR) {
            i++;
            continue;
        }
        if (s[i] === EQUALS_SIGN) {
            return i;
        }
    }
    return -1;
}

function unescapeRFC2156Quoted(s: string): string | null {
    let out = "";
    for (let i = 0; i < s.length; i++) {
        if (s.codePointAt(i) !== DOLLAR) {
            out += s[i];
            continue;
        }
        if ((i + 1) >= s.length) {
            return null; // Trailing unescaped $. Not valid.
        }
        out += s[i + 1];
        i++;
    }
    return out;
}

function rfc1685DelimiterCodePoint(s: string): number {
    return s.startsWith("/")
        ? SOLIDUS
        : SEMICOLON
        ;
}


// TODO: Export this from @wildboar/asn1.
// Written by ChatGPT.
export function canEncodeAsBMPString(value: string): boolean {
    for (const character of value) {
        const codePoint = character.codePointAt(0)!;
        if (
            codePoint > 0xffff ||
            (codePoint >= 0xd800 && codePoint <= 0xdfff)
        ) {
            return false;
        }
    }
    return true;
}

// TODO: Define this in @wildboar/asn1. I think it will be faster.
export function isPrintableString(s: string): boolean {
    return /^[A-Za-z0-9 '()+,-./:=?]*$/.test(s);
}

/**
 * @summary Split an IETF RFC 1685 O/R address into `LABEL=value` components.
 * @description
 *
 * Splits on a single delimiter (`/` or `;`). A doubled delimiter is part of a
 * value, not a split. Empty chunks (a leading `/`) are skipped.
 *
 * @param input The RFC 1685 address string.
 * @param delimiter_code_point The delimiter code point.
 * @returns The raw components, still containing doubled-delimiter quoting.
 */
export function* splitRFC1685AddressComponents(
    input: string,
    delimiter_code_point: number,
): Generator<string, void, undefined> {
    let field_start = 0;
    for (let i = 0; i < input.length; i++) {
        const char = input.codePointAt(i);
        if (char !== delimiter_code_point) {
            continue;
        }
        if (input.codePointAt(i + 1) === delimiter_code_point) {
            i++;
            continue;
        }
        const piece = input.slice(field_start, i).trimStart();
        if (piece.length > 0) {
            yield piece;
        }
        field_start = i + 1;
    }
    const last = input.slice(field_start).trimStart();
    if (last.length > 0) {
        yield last;
    }
}

/**
 * @summary Split an IETF RFC 2156 O/R address into `LABEL=value` components.
 * @description
 *
 * Splits on `/` or `;` (they may be mixed). A `$` quotes the next character, so
 * `$/` and `$;` are not separators. Empty chunks from leading or trailing
 * separators are skipped. A delimiter may be followed by spaces.
 *
 * @param input The RFC 2156 address string.
 * @returns The raw components, still containing `$` quoting.
 */
export function* splitRFC2156AddressComponents(
    input: string,
): Generator<string, void, undefined> {
    let field_start = 0;
    for (let i = 0; i < input.length; i++) {
        const char = input.codePointAt(i);
        if (char === DOLLAR) {
            i++;
            continue;
        }
        if (
            (char !== SOLIDUS)
            && (char !== SEMICOLON)
        ) {
            continue;
        }
        const piece = input.slice(field_start, i).trimStart();
        if (piece.length > 0) {
            yield piece;
        }
        field_start = i + 1;
    }
    const last = input.slice(field_start).trimStart();
    if (last.length > 0) {
        yield last;
    }
}

function unescapeRFC1685DdaType(label: string): string {
    if (label.slice(0, 4).toUpperCase() !== "DDA:") {
        return label;
    }
    return `${label.slice(0, 4)}${label.slice(4).replaceAll("==", "=")}`;
}

/**
 * @summary Yield abstract IETF RFC 1685 label/value pairs.
 * @description
 *
 * Splits the address, finds each `=`, undoes doubled delimiters in values, and
 * undoes `==` only in a `DDA:<type>`. Yields `null` for a malformed component.
 *
 * @param s The RFC 1685 address string.
 */
export function* rfc1685LabelValuePairs(
    s: string,
): Generator<AddressComponent | null, void, undefined> {
    const delimiter_code_point = rfc1685DelimiterCodePoint(s);
    const delimiter = String.fromCodePoint(delimiter_code_point);
    for (const chunk of splitRFC1685AddressComponents(s, delimiter_code_point)) {
        const eqIdx = findRFC1685LabelValueSeparator(chunk);
        if (eqIdx === -1) {
            yield null;
            return;
        }
        const label = unescapeRFC1685DdaType(chunk.slice(0, eqIdx));
        const value = chunk.slice(eqIdx + 1).replaceAll(delimiter.repeat(2), delimiter);
        yield [label, value];
    }
}

/**
 * @summary Yield abstract IETF RFC 2156 label/value pairs.
 * @description
 *
 * Splits the address, finds each unquoted `=`, and undoes `$` quoting on both
 * the label and the value. Yields `null` for a malformed component (including a
 * trailing `$`).
 *
 * @param s The RFC 2156 address string.
 */
export function* rfc2156LabelValuePairs(
    s: string,
): Generator<AddressComponent | null, void, undefined> {
    for (const chunk of splitRFC2156AddressComponents(s)) {
        const eqIdx = findRFC2156LabelValueSeparator(chunk);
        if (eqIdx === -1) {
            yield null;
            return;
        }
        const maybeLabel = unescapeRFC2156Quoted(chunk.slice(0, eqIdx));
        const maybeValue = unescapeRFC2156Quoted(chunk.slice(eqIdx + 1));
        if (
            (maybeLabel === null)
            || (maybeValue === null)
        ) {
            yield null;
            return;
        }
        yield [maybeLabel, maybeValue];
    }
}

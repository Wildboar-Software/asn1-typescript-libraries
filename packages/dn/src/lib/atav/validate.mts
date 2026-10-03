import { unescapeDistinguishedValue } from "../unescapeDistinguishedValue.mjs";
import type {
    AttributeTypeAndValueString,
    EscapedAttributeTypeAndValueString,
} from "../brands.mjs";

const SHARP: number = 0x23; // #
const BACKSLASH: number = 0x5C; // \

const NUMERIC_OID_RE: RegExp = /^(0|[1-9][0-9]*)(\.(0|[1-9][0-9]*))+$/;
const DESCR_RE: RegExp = /^[A-Za-z][A-Za-z0-9-]*$/;
const HEX_RE: RegExp = /^[0-9A-Fa-f]+$/;
const INTEGER_RE: RegExp = /^-?\d+$/;
const LONE_SURROGATE_RE: RegExp = /\p{Cs}/u;
/** Matches exactly the values {@link validateHexstringValue} accepts. */
const HEXSTRING_RE: RegExp = /^#(?:[0-9A-Fa-f]{2}){2,}$/;

/**
 * Attribute types whose X.520 syntax is `INTEGER`.
 * Used only by {@link validateAttributeValueSemantics}.
 */
const INTEGER_TYPES: ReadonlySet<string> = new Set([
    "oidc",
]);

/**
 * Attribute types whose X.520 syntax is `OBJECT IDENTIFIER`.
 * Used only by {@link validateAttributeValueSemantics}.
 */
const OID_TYPES: ReadonlySet<string> = new Set([
    "objectidentifier",
    "object identifier",
]);

function isHexDigit (code: number): boolean {
    return (code >= 0x30 && code <= 0x39)
        || (code >= 0x41 && code <= 0x46)
        || (code >= 0x61 && code <= 0x66);
}

/**
 * Decodes with `decoder`, which must be fatal. Omit `byte` to end the
 * current run of bytes, which throws if a multi-byte sequence is
 * incomplete. The next call starts a new run with the same decoder.
 */
function decodeUtf8 (decoder: TextDecoder, byte?: Uint8Array): void {
    try {
        decoder.decode(byte, { stream: byte !== undefined });
    } catch (e) {
        throw new SyntaxError("malformed escape (invalid utf-8)", { cause: e });
    }
}

/**
 * Characters permitted after a backslash as a single-character
 * escape: `special` plus backslash itself. This is `escaped /
 * SPACE / SHARP / EQUALS` from IETF RFC 4514, section 3, plus `ESC`.
 */
function isSingleEscapable (code: number): boolean {
    return code === 0x20 // SPACE
        || code === 0x22 // DQUOTE
        || code === 0x23 // SHARP
        || code === 0x2B // PLUS
        || code === 0x2C // COMMA
        || code === 0x3B // SEMI
        || code === 0x3C // LANGLE
        || code === 0x3D // EQUALS
        || code === 0x3E // RANGLE
        || code === 0x5C; // ESC
}

/** `LUTF1` from IETF RFC 4514, section 3. */
function isLeadChar (code: number): boolean {
    return (code >= 0x01 && code <= 0x1F)
        || code === 0x21
        || (code >= 0x24 && code <= 0x2A)
        || (code >= 0x2D && code <= 0x3A)
        || code === 0x3D
        || (code >= 0x3F && code <= 0x5B)
        || (code >= 0x5D && code <= 0x7F);
}

/** `TUTF1` from IETF RFC 4514, section 3: `LUTF1` plus `#`. */
function isTrailChar (code: number): boolean {
    return code === 0x23 || isLeadChar(code);
}

/** `SUTF1` from IETF RFC 4514, section 3: `TUTF1` plus space. */
function isStringChar (code: number): boolean {
    return code === 0x20 || isTrailChar(code);
}

// TODO: Replace with function from asn1-ts once it's published.
/**
 * @summary Validate a dotted-decimal object identifier.
 * @description
 *
 * Checks `number 1*( DOT number )` syntax (no leading zeroes),
 * then the X.660 arc constraints: at least two arcs, a first
 * arc of 0, 1, or 2, and a second arc of at most 39 unless
 * the first arc is 2.
 *
 * @param oid The object identifier in dotted-decimal notation.
 * @param what What is being validated, for error messages.
 * @function
 */
export
function validateNumericOID (
    oid: string,
    what: string = "attribute type",
): void {
    if (!NUMERIC_OID_RE.test(oid)) {
        throw new SyntaxError(
            `invalid numeric object identifier ${JSON.stringify(oid)}`,
        );
    }
    const arcs: string[] = oid.split(".");
    if (arcs.length < 2) {
        throw new SyntaxError(
            `object identifier ${JSON.stringify(oid)} `
            + `(${what}) must have at least two arcs`,
        );
    }
    const first: string = arcs[0];
    if (first !== "0" && first !== "1" && first !== "2") {
        throw new SyntaxError(
            `object identifier ${JSON.stringify(oid)} `
            + `(${what}) has invalid first arc `
            + `${JSON.stringify(first)} (expected 0, 1, or 2)`,
        );
    }
    if (first !== "2") {
        // No leading zeroes, so length > 2 implies a value > 39.
        const second: string = arcs[1];
        const secondValue: number = (second.length > 2)
            ? 100
            : Number(second);
        if (secondValue > 39) {
            throw new SyntaxError(
                `object identifier ${JSON.stringify(oid)} `
                + `(${what}) has invalid second arc `
                + `${JSON.stringify(second)} `
                + `(expected 0..39 when the first arc is ${first})`,
            );
        }
    }
}

/**
 * @summary Validate a `#`-prefixed hex attribute value.
 * @description
 *
 * Checks the `hexstring` production from IETF RFC 4514,
 * section 3: `SHARP 1*hexpair`.
 *
 * @param raw The raw (still escaped) attribute value.
 * @function
 */
function validateHexstringValue (raw: string): void {
    if (raw.charCodeAt(0) !== "#".charCodeAt(0)) {
        throw new SyntaxError("hexstring value must start with #");
    }
    if (raw.length < 5) {
        throw new SyntaxError(
            "hexstring value must contain at least two encoded octets",
        );
    }
    if (!HEX_RE.test(raw.slice(1))) {
        throw new SyntaxError(
            "hexstring value contains non-hex characters",
        );
    }
    if (((raw.length - 1) % 2) !== 0) {
        throw new SyntaxError(
            "hexstring value has an odd number of hex digits",
        );
    }
}

/**
 * @summary Validate one unescaped character of a string-form value.
 *
 * @param cp The code point.
 * @param first Whether it is the first character of the value.
 * @param last Whether it is the last character of the value.
 * @function
 */
function validateUnescapedChar (
    cp: number,
    first: boolean,
    last: boolean,
): void {
    if (cp >= 0x80) {
        if (cp >= 0xD800 && cp <= 0xDFFF) {
            throw new SyntaxError("invalid character in value");
        }
        return; // UTFMB is permitted in every position.
    }
    let ok: boolean;
    if (first) {
        ok = isLeadChar(cp);
    } else if (last) {
        ok = isTrailChar(cp);
    } else {
        ok = isStringChar(cp);
    }
    if (ok) {
        return;
    }
    if (cp === 0x20) {
        throw new SyntaxError(
            first
                ? "leading space must be escaped"
                : "trailing space must be escaped",
        );
    }
    if (cp === 0x00) {
        throw new SyntaxError("null character must be escaped");
    }
    if (cp === 0x23) {
        throw new SyntaxError("leading number sign must be escaped");
    }
    throw new SyntaxError(
        `character ${JSON.stringify(String.fromCodePoint(cp))} `
        + "must be escaped",
    );
}

/**
 * @summary Validate a string-form attribute value.
 * @description
 *
 * Checks the `string` production from IETF RFC 4514, section 3:
 * every backslash starts a valid `pair`, consecutive hex pairs
 * decode as valid UTF-8, and every unescaped character is
 * permitted in its position (`leadchar`, `stringchar`, or
 * `trailchar`).
 *
 * @param raw The raw (still escaped) attribute value.
 * @function
 */
function validateStringValue (raw: string): void {
    const decoder = new TextDecoder("utf-8", { fatal: true });
    const byte = new Uint8Array(1);
    let i: number = 0;
    while (i < raw.length) {
        const code: number = raw.charCodeAt(i);
        if (code !== BACKSLASH) {
            decodeUtf8(decoder);
            const cp: number = raw.codePointAt(i)!;
            const width: number = (cp > 0xFFFF) ? 2 : 1;
            validateUnescapedChar(cp, i === 0, i + width === raw.length);
            i += width;
            continue;
        }
        if (i + 1 >= raw.length) {
            throw new SyntaxError("malformed escape");
        }
        const next: number = raw.charCodeAt(i + 1);
        if (isSingleEscapable(next)) {
            decodeUtf8(decoder);
            i += 2;
            continue;
        }
        if (
            (i + 2 < raw.length)
            && isHexDigit(next)
            && isHexDigit(raw.charCodeAt(i + 2))
        ) {
            byte[0] = Number.parseInt(raw.slice(i + 1, i + 3), 16);
            decodeUtf8(decoder, byte);
            i += 3;
            continue;
        }
        throw new SyntaxError("malformed escape");
    }
    decodeUtf8(decoder);
}

/**
 * @summary Validate the semantics of a distinguished value.
 * @description
 *
 * This performs optional checks on the unescaped value that go
 * beyond the string grammar of IETF RFC 4514, section 3:
 *
 * - string-form values contain no null bytes;
 * - values of INTEGER-syntax attribute types (such as `oidC`)
 *   are decimal integers; and
 * - values of OBJECT IDENTIFIER-syntax attribute types (such
 *   as `objectIdentifier`) are valid object identifiers.
 *
 * Do not call this with a hexstring (`#...`) value: it is a BER
 * encoding, not a string. This function is called by
 * {@link validateAttributeTypeAndValueString}. It is kept separate
 * so it can be removed easily if these checks are undesired.
 *
 * @param type The attribute type name, as written in the DN.
 * @param value The unescaped string value.
 * @function
 */
export
function validateAttributeValueSemantics (
    type: string,
    value: string,
): void {
    if (value.indexOf("\0") !== -1) {
        throw new SyntaxError(
            `null character in value of attribute type `
            + JSON.stringify(type),
        );
    }
    const lowered: string = type.toLowerCase();
    if (INTEGER_TYPES.has(lowered) && !INTEGER_RE.test(value)) {
        throw new SyntaxError(
            `invalid integer value for attribute type `
            + JSON.stringify(type),
        );
    }
    if (OID_TYPES.has(lowered)) {
        try {
            validateNumericOID(value, "attribute value");
        } catch (e) {
            throw new SyntaxError(
                `invalid object identifier value for attribute type `
                + JSON.stringify(type),
                { cause: e },
            );
        }
    }
}

/**
 * @summary Validate one `attributeTypeAndValue` string.
 * @description
 *
 * Checks IETF RFC 4514, section 3, `attributeTypeAndValue`:
 * the string holds an `=`, the type is a `descr` or a valid
 * `numericoid`, and a numeric type is paired with a `hexstring`
 * value.
 *
 * If `escaped` is `true`, the value must satisfy the `string` or
 * `hexstring` production, including valid escape sequences, as it
 * would in a distinguished name. A leading `#` starts a
 * `hexstring`.
 *
 * If `escaped` is `false`, the value of a `descr` type may be a
 * `hexstring`. Otherwise, it is taken literally: backslashes are
 * not escapes, any character may appear anywhere, including a
 * leading `#`, and the only restriction is that the value must
 * not contain lone surrogates.
 *
 * In both cases, string values (but not hexstrings) are also
 * checked with {@link validateAttributeValueSemantics}.
 *
 * @param atav The attribute type and value, e.g. `cn=Smith`.
 * @param escaped Whether the value is escaped per IETF RFC 4514.
 * @throws {SyntaxError} If `atav` is invalid.
 * @function
 */
export
function validateAttributeTypeAndValueString (
    atav: string,
    escaped: true,
): asserts atav is EscapedAttributeTypeAndValueString;
export
function validateAttributeTypeAndValueString (
    atav: string,
    escaped?: false,
): asserts atav is AttributeTypeAndValueString;
export
function validateAttributeTypeAndValueString (
    atav: string,
    escaped?: boolean,
): asserts atav is AttributeTypeAndValueString | EscapedAttributeTypeAndValueString;
export
function validateAttributeTypeAndValueString (
    atav: string,
    escaped: boolean = false,
): asserts atav is AttributeTypeAndValueString | EscapedAttributeTypeAndValueString {
    if (atav.indexOf("\0") !== -1) {
        throw new SyntaxError("null character in attribute type and value");
    }
    // The type is a descr or numericoid, neither of which can contain
    // `=` or `\`, so the first `=` is necessarily the separator.
    const equals: number = atav.indexOf("=");
    if (equals === -1) {
        throw new SyntaxError("missing equals sign");
    }
    const type: string = atav.slice(0, equals);
    const value: string = atav.slice(equals + 1);
    if (type.length === 0) {
        throw new SyntaxError("empty attribute type");
    }
    const descr: boolean = DESCR_RE.test(type);
    // A descr can never be a numericoid and vice versa, so at most
    // one of these regular expressions runs.
    const numeric: boolean = !descr && NUMERIC_OID_RE.test(type);
    if (!descr && !numeric) {
        throw new SyntaxError(
            `invalid attribute type ${JSON.stringify(type)}`,
        );
    }
    if (numeric) {
        validateNumericOID(type);
        validateHexstringValue(value);
    } else if (!escaped) {
        if (HEXSTRING_RE.test(value)) {
            return;
        }
        if (LONE_SURROGATE_RE.test(value)) {
            throw new SyntaxError("invalid character in value");
        }
        validateAttributeValueSemantics(type, value);
    } else if (value.charCodeAt(0) === SHARP) {
        validateHexstringValue(value);
    } else {
        validateStringValue(value);
        validateAttributeValueSemantics(type, unescapeDistinguishedValue(value));
    }
}

/**
 * @summary Check whether a string is a valid `attributeTypeAndValue`.
 * @description
 *
 * Returns whether {@link validateAttributeTypeAndValueString} accepts
 * `atav`, which has the same meaning here.
 *
 * @param atav The attribute type and value, e.g. `cn=Smith`.
 * @param escaped Whether the value is escaped per IETF RFC 4514.
 * @returns Whether `atav` is valid.
 * @function
 */
export
function isAttributeTypeAndValueString (
    atav: string,
    escaped: true,
): atav is EscapedAttributeTypeAndValueString;
export
function isAttributeTypeAndValueString (
    atav: string,
    escaped?: false,
): atav is AttributeTypeAndValueString;
export
function isAttributeTypeAndValueString (
    atav: string,
    escaped?: boolean,
): atav is AttributeTypeAndValueString | EscapedAttributeTypeAndValueString;
export
function isAttributeTypeAndValueString (
    atav: string,
    escaped: boolean = false,
): atav is AttributeTypeAndValueString | EscapedAttributeTypeAndValueString {
    try {
        validateAttributeTypeAndValueString(atav, escaped);
        return true;
    } catch (e) {
        if (e instanceof SyntaxError) {
            return false;
        }
        throw e;
    }
}

export default validateAttributeTypeAndValueString;

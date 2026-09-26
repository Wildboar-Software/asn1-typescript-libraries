import { ParsedAttributeTypeAndValue } from "../ParsedAttributeTypeAndValue.mjs";

const escape = "\\".charCodeAt(0);
const comma = ",".charCodeAt(0);
const plus = "+".charCodeAt(0);

function isEscaped (str: string, index: number): boolean {
    let backslashes = 0;
    for (let i = index - 1; i >= 0 && str.charCodeAt(i) === escape; i--) {
        backslashes++;
    }
    return (backslashes % 2) === 1;
}

function* attributeTypesAndValues (
    rdn: string,
): Generator<ParsedAttributeTypeAndValue, void, undefined> {
    let start = 0;
    for (let i = 0; i <= rdn.length; i++) {
        const atEnd = i === rdn.length;
        if (
            !atEnd
            && !(
                (rdn.charCodeAt(i) === plus)
                && !isEscaped(rdn, i)
            )
        ) {
            continue;
        }
        const atav = rdn.slice(start, i);
        const equalsIndex = atav.indexOf("=");
        if (equalsIndex === -1) {
            throw new SyntaxError("malformed attribute type and value");
        }
        yield new ParsedAttributeTypeAndValue(
            atav.slice(0, equalsIndex),
            atav.slice(equalsIndex + 1),
        );
        start = i + 1;
    }
}

/**
 * @summary Parse a distinguished name according to RFC 4514.
 * @description
 *
 * Yields one iterator per relative distinguished name, left to right,
 * per [IETF RFC 4514](https://www.rfc-editor.org/rfc/rfc4514) section 3.
 * Each inner iterator yields that RDN's attribute type and value
 * assertions. The type is the text before the first `=`. An escaped
 * comma or plus does not separate components, and values keep their
 * escapes.
 *
 * @param str The distinguished name.
 * @yields An iterator of attribute type and value assertions for one RDN.
 * @returns {void}
 * @throws {SyntaxError} When a component has no equals sign. The message
 * is lowercase.
 * @function
 */
export
function* rdnSequenceFromString (
    str: string,
): Generator<
    Generator<ParsedAttributeTypeAndValue, void, undefined>,
    void,
    undefined
> {
    if (str.length === 0) {
        return;
    }
    let start = 0;
    for (let i = 0; i <= str.length; i++) {
        const atEnd = i === str.length;
        if (!atEnd && !(str.charCodeAt(i) === comma && !isEscaped(str, i))) {
            continue;
        }
        yield attributeTypesAndValues(str.slice(start, i));
        start = i + 1;
    }
}

export default rdnSequenceFromString;

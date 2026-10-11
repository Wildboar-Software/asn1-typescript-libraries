import { atavFromStringX520 } from "../atav/fromstr.mjs";
import { ParsedAttributeTypeAndValue } from "../ParsedAttributeTypeAndValue.mjs";
import type { RDNSequence } from "../RDNSequence.ta.mjs";
import type { RelativeDistinguishedName } from "../RelativeDistinguishedName.ta.mjs";
import { attributeTypesAndValues } from "../rdn/fromstr.mjs";
import isEscaped from "../isEscaped.mjs";

const comma = ",".charCodeAt(0);

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

/**
 * @summary Parse a distinguished name into an `RDNSequence`.
 * @description
 *
 * Splits `str` with {@link rdnSequenceFromString}, then encodes each
 * attribute type and value with {@link atavFromStringX520}. Attribute
 * types this module does not recognize, and values that do not fit their
 * directory syntax, throw `SyntaxError`.
 *
 * Unlike IETF RFC 4514, the RDNs are not reversed: the first RDN in `str` is
 * the first element of the result.
 *
 * @param str The distinguished name, in RFC 4514 string form.
 * @returns The relative distinguished names, from left to right.
 * @function
 */
export
function rdnSequenceFromStringX520 (str: string): RDNSequence {
    const rdns: RDNSequence = [];
    for (const rdn of rdnSequenceFromString(str)) {
        const atavs: RelativeDistinguishedName = [];
        for (const atav of rdn) {
            atavs.push(atavFromStringX520(atav));
        }
        rdns.push(atavs);
    }
    return rdns;
}

export default rdnSequenceFromString;

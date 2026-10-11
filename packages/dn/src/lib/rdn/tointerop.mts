import type { RelativeDistinguishedName } from "../RelativeDistinguishedName.ta.mjs";

/**
 * @summary Stringify a relative distinguished name as an "interop string."
 * @description
 *
 * Each attribute type and value is converted as
 * `AttributeTypeAndValue.toInteropString()` does: the type is always a
 * numeric object identifier, and the value is always `#` followed by the
 * hexadecimal BER encoding of the value element, which is the syntax of
 * [IETF RFC 4514](https://www.rfc-editor.org/rfc/rfc4514) for unrecognized
 * syntaxes. No attribute names are used, and the value needs no escaping,
 * so the result does not depend on which attribute types or syntaxes the
 * reader recognizes. The ATAVs are joined with `+` in their existing order.
 *
 * @param rdn The relative distinguished name to stringify.
 * @returns A string of the form `numericoid=#hex+numericoid=#hex...`
 * @function
 */
export
function relativeDistinguishedNameToInteropString (
    rdn: RelativeDistinguishedName,
): string {
    return rdn
        .map((atav) => atav.toInteropString())
        .join("+");
}

export default relativeDistinguishedNameToInteropString;

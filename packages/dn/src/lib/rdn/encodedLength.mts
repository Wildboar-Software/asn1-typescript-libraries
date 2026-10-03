import type { RelativeDistinguishedName } from "../RelativeDistinguishedName.ta.mjs";
import { getAttributeTypeAndValueEncodedLength } from "../atav/encodedLength.mjs";
import { tlvLength } from "../encodedLength.mjs";

/**
 * @summary Get the length of the BER encoding of a `RelativeDistinguishedName`
 * @description
 *
 * Calculates the number of bytes that the BER encoding of `rdn` (as produced
 * by `_encode_RelativeDistinguishedName`) would occupy, using definite lengths
 * throughout, without producing that encoding. Because BER does not order the
 * components of a `SET OF`, the order of `rdn` has no effect on the result.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RelativeDistinguishedName ::= SET SIZE (1..MAX) OF AttributeTypeAndValue
 * ```
 *
 * @param rdn The relative distinguished name
 * @returns The number of bytes in the BER encoding
 * @function
 */
export
function getRelativeDistinguishedNameEncodedLength (rdn: RelativeDistinguishedName): number {
    let content: number = 0;
    for (let i = 0; i < rdn.length; i++) {
        content += getAttributeTypeAndValueEncodedLength(rdn[i]);
    }
    return tlvLength(1, content);
}

export default getRelativeDistinguishedNameEncodedLength;

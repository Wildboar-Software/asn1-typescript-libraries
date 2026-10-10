import type { AttributeTypeAndValue } from "../AttributeTypeAndValue.ta.mjs";
import { definiteElementLength, tlvLength } from "../encodedLength.mjs";

/**
 * @summary Get the length of the BER encoding of an `AttributeTypeAndValue`
 * @description
 *
 * Calculates the number of bytes that the BER encoding of `atav` (as produced
 * by `_encode_AttributeTypeAndValue`) would occupy, using definite lengths
 * throughout, without producing that encoding. Only the lengths of the
 * type, value, and any unrecognized extensions are consulted; the value is
 * never serialized.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeTypeAndValue ::= SEQUENCE {
 *   type   ATTRIBUTE.&id({SupportedAttributes}),
 *   value  ATTRIBUTE.&Type({SupportedAttributes}{@type}),
 *   ... }
 * ```
 *
 * @param atav The attribute type and value
 * @returns The number of bytes in the BER encoding
 * @function
 */
export
function getAttributeTypeAndValueEncodedLength (atav: AttributeTypeAndValue): number {
    // The OID is a one-octet tag, a length, and its (cached) content octets.
    let content: number = tlvLength(1, atav.type_.byteLength())
        + definiteElementLength(atav.value);
    const extensions = atav._unrecognizedExtensionsList;
    if (extensions) {
        for (let i = 0; i < extensions.length; i++) {
            content += definiteElementLength(extensions[i]);
        }
    }
    return tlvLength(1, content);
}

export default getAttributeTypeAndValueEncodedLength;

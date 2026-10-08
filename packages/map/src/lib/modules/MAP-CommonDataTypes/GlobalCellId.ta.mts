/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GlobalCellId
 * @description
 *
 * Cell Global Identification as in 3GPP TS 23.003. Size 5..7 octets.
 *
 * - octet 1 bits 4321: MCC 1st digit; bits 8765: MCC 2nd digit
 * - octet 2 bits 4321: MCC 3rd digit; bits 8765: MNC 3rd digit or filler 1111
 *   for 2-digit MNCs
 * - octet 3 bits 4321: MNC 1st digit; bits 8765: MNC 2nd digit
 * - octets 4-5: Location Area Code as in 3GPP TS 24.008
 * - octets 6-7: Cell Identity (CI) as in 3GPP TS 24.008
 *
 * Used e.g. as serving / target cell Id.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 17.7.8, 7.6.2.8 and 7.6.2.37).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GlobalCellId  ::=  OCTET STRING (SIZE (5..7))
 * ```
 */
export
type GlobalCellId = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) GlobalCellId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_GlobalCellId = (el: _Element): GlobalCellId => {
    const value = $._decodeOctetString(el);
    if (value.length < 5 || value.length > 7) {
        throw new ASN1SizeError("GlobalCellId violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) GlobalCellId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GlobalCellId, encoded as an ASN.1 Element.
 */
export const _encode_GlobalCellId = $._encodeOctetString;


/* eslint-enable */

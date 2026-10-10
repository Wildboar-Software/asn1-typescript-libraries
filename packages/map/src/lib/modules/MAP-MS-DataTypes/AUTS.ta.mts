/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AUTS
 * @description
 *
 * UMTS resynchronisation token (3GPP TS 29.002 V19.1.0 clauses 7.6.7.6B and
 * 17.7.1). Encoded as an OCTET STRING of 14 octets.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AUTS  ::=  OCTET STRING (SIZE (14))
 * ```
 */
export
type AUTS = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) AUTS
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AUTS = (el: _Element): AUTS => {
    const value = $._decodeOctetString(el);
    if (value.length < 14 || value.length > 14) {
        throw new ASN1SizeError("AUTS violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) AUTS into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AUTS, encoded as an ASN.1 Element.
 */
export const _encode_AUTS = $._encodeOctetString;


/* eslint-enable */

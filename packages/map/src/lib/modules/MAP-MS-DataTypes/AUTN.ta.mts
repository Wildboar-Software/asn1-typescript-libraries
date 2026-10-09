/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AUTN
 * @description
 *
 * UMTS/EPS Authentication Token (3GPP TS 29.002 V19.1.0 clauses 7.6.7.5C and
 * 17.7.1). Encoded as an OCTET STRING of 16 octets.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AUTN  ::=  OCTET STRING (SIZE (16))
 * ```
 */
export
type AUTN = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) AUTN
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AUTN = (el: _Element): AUTN => {
    const value = $._decodeOctetString(el);
    if (value.length < 16 || value.length > 16) {
        throw new ASN1SizeError("AUTN violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) AUTN into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AUTN, encoded as an ASN.1 Element.
 */
export const _encode_AUTN = $._encodeOctetString;


/* eslint-enable */

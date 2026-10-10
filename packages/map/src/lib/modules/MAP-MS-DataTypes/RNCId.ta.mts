/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RNCId
 * @description
 *
 * Identity of the RNC to which a call has to be relocated. Octets 1-3: MCC/MNC
 * (TBCD; filler `1111` for 2-digit MNC); octets 4-5: LAC (3GPP TS 24.008);
 * octets 6-7: RNC Id or Extended RNC Id (3GPP TS 25.413).
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.2.8A and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RNCId  ::=  OCTET STRING (SIZE (7))
 * ```
 */
export
type RNCId = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) RNCId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RNCId = (el: _Element): RNCId => {
    const value = $._decodeOctetString(el);
    if (value.length < 7 || value.length > 7) {
        throw new ASN1SizeError("RNCId violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) RNCId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RNCId, encoded as an ASN.1 Element.
 */
export const _encode_RNCId = $._encodeOctetString;


/* eslint-enable */

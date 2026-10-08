/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AoIPCodec
 * @description
 *
 * AoIP speech codec element. Octet 1 is coded as Speech Codec Elements in 3GPP
 * TS 48.008 except FI, PI, PT and TF bits shall be set to 0. Optional octets
 * 2-3 define supported AMR codec configurations as in 3GPP TS 48.008 (3GPP TS
 * 29.002 V19.1.0 clauses 7.6.6.22 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AoIPCodec  ::=  OCTET STRING (SIZE (1..3))
 * ```
 */
export
type AoIPCodec = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) AoIPCodec
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AoIPCodec = (el: _Element): AoIPCodec => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 3) {
        throw new ASN1SizeError("AoIPCodec violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) AoIPCodec into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AoIPCodec, encoded as an ASN.1 Element.
 */
export const _encode_AoIPCodec = $._encodeOctetString;


/* eslint-enable */

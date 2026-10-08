/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CUG_Interlock
 * @description
 *
 * CUG interlock code defined in ETS 300 138 (3GPP TS 29.002 V19.1.0 clause
 * 7.6.3.24).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CUG-Interlock  ::=  OCTET STRING (SIZE (4))
 * ```
 */
export
type CUG_Interlock = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) CUG_Interlock
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CUG_Interlock = (el: _Element): CUG_Interlock => {
    const value = $._decodeOctetString(el);
    if (value.length < 4 || value.length > 4) {
        throw new ASN1SizeError("CUG_Interlock violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) CUG_Interlock into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CUG_Interlock, encoded as an ASN.1 Element.
 */
export const _encode_CUG_Interlock = $._encodeOctetString;


/* eslint-enable */

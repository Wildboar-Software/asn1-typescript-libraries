/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UUI
 * @description
 *
 * OCTET STRING (1..131) coded according to ETS 300 356 (3GPP TS 29.002 V19.1.0
 * clause 17.7.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UUI   ::=  OCTET STRING (SIZE (1..131))
 * ```
 */
export
type UUI = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) UUI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_UUI = (el: _Element): UUI => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 131) {
        throw new ASN1SizeError("UUI violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) UUI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UUI, encoded as an ASN.1 Element.
 */
export const _encode_UUI = $._encodeOctetString;


/* eslint-enable */

/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMSI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSI  ::=  NumericString (SIZE(6..15))
 * ```
 */
export
type IMSI = NumericString; // NumericString

/**
 * @summary Decodes an ASN.1 element into a(n) IMSI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IMSI = (el: _Element): IMSI => {
    const value = $._decodeNumericString(el);
    if (value.length < 6 || value.length > 15) {
        throw new ASN1SizeError("IMSI violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) IMSI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMSI, encoded as an ASN.1 Element.
 */
export const _encode_IMSI = $._encodeNumericString;


/* eslint-enable */

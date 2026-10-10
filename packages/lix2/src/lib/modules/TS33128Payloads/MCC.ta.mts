/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MCC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCC  ::=  NumericString (SIZE(3))
 * ```
 */
export
type MCC = NumericString; // NumericString

/**
 * @summary Decodes an ASN.1 element into a(n) MCC
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_MCC = (el: _Element): MCC => {
    const value = $._decodeNumericString(el);
    if (value.length < 3 || value.length > 3) {
        throw new ASN1SizeError("MCC violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) MCC into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCC, encoded as an ASN.1 Element.
 */
export const _encode_MCC = $._encodeNumericString;


/* eslint-enable */

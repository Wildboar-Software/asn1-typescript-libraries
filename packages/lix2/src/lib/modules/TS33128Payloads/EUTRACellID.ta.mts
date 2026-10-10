/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EUTRACellID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EUTRACellID  ::=  BIT STRING (SIZE(28))
 * ```
 */
export
type EUTRACellID = BIT_STRING;

/**
 * @summary Decodes an ASN.1 element into a(n) EUTRACellID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_EUTRACellID = (el: _Element): EUTRACellID => {
    const value = $._decodeBitString(el);
    if (value.length < 28 || value.length > 28) {
        throw new ASN1SizeError("EUTRACellID violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) EUTRACellID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EUTRACellID, encoded as an ASN.1 Element.
 */
export const _encode_EUTRACellID = $._encodeBitString;


/* eslint-enable */

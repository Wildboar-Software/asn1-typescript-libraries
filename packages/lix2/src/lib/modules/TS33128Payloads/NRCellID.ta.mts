/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NRCellID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NRCellID  ::=  BIT STRING (SIZE(36))
 * ```
 */
export
type NRCellID = BIT_STRING;

/**
 * @summary Decodes an ASN.1 element into a(n) NRCellID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_NRCellID = (el: _Element): NRCellID => {
    const value = $._decodeBitString(el);
    if (value.length < 36 || value.length > 36) {
        throw new ASN1SizeError("NRCellID violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) NRCellID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NRCellID, encoded as an ASN.1 Element.
 */
export const _encode_NRCellID = $._encodeBitString;


/* eslint-enable */

/* eslint-disable */
import {
    GraphicString,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PersonNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PersonNumber  ::=  GraphicString(SIZE (0..64))
 * ```
 */
export
type PersonNumber = GraphicString; // GraphicString
export function _decode_PersonNumber (el: _Element): PersonNumber {
    const value = ($._decodeGraphicString)(el);
    if (value.length < 0 || value.length > 64) {
        throw new ASN1SizeError("PersonNumber violates SIZE constraint");
    }
    return value;
}
export const _encode_PersonNumber = $._encodeGraphicString;


/* eslint-enable */

/* eslint-disable */
import {
    GraphicString,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TelephoneNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TelephoneNumber  ::=  GraphicString(SIZE (0..32))
 * ```
 */
export
type TelephoneNumber = GraphicString; // GraphicString
export function _decode_TelephoneNumber (el: _Element): TelephoneNumber {
    const value = ($._decodeGraphicString)(el);
    if (value.length < 0 || value.length > 32) {
        throw new ASN1SizeError("TelephoneNumber violates SIZE constraint");
    }
    return value;
}
export const _encode_TelephoneNumber = $._encodeGraphicString;


/* eslint-enable */

/* eslint-disable */
import {
    GraphicString,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CalledNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CalledNumber  ::=  GraphicString(SIZE (0..64))
 * ```
 */
export
type CalledNumber = GraphicString; // GraphicString
export function _decode_CalledNumber (el: _Element): CalledNumber {
    const value = ($._decodeGraphicString)(el);
    if (value.length < 0 || value.length > 64) {
        throw new ASN1SizeError("CalledNumber violates SIZE constraint");
    }
    return value;
}
export const _encode_CalledNumber = $._encodeGraphicString;


/* eslint-enable */

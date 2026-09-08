/* eslint-disable */
import {
    GraphicString,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CustomerWorkCenter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CustomerWorkCenter  ::=  GraphicString(SIZE (0..64))
 * ```
 */
export
type CustomerWorkCenter = GraphicString; // GraphicString
export function _decode_CustomerWorkCenter (el: _Element): CustomerWorkCenter {
    const value = ($._decodeGraphicString)(el);
    if (value.length < 0 || value.length > 64) {
        throw new ASN1SizeError("CustomerWorkCenter violates SIZE constraint");
    }
    return value;
}
export const _encode_CustomerWorkCenter = $._encodeGraphicString;


/* eslint-enable */

/* eslint-disable */
import {
    GraphicString,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TspPriority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TspPriority  ::=  GraphicString(SIZE (2))
 * ```
 */
export
type TspPriority = GraphicString; // GraphicString
export function _decode_TspPriority (el: _Element): TspPriority {
    const value = ($._decodeGraphicString)(el);
    if (value.length !== 2) {
        throw new ASN1SizeError("TspPriority violates SIZE constraint");
    }
    return value;
}
export const _encode_TspPriority = $._encodeGraphicString;


/* eslint-enable */

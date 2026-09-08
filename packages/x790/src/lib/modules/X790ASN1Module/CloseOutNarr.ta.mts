/* eslint-disable */
import {
    GraphicString,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CloseOutNarr
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CloseOutNarr  ::=  GraphicString(SIZE (0..256))
 * ```
 */
export
type CloseOutNarr = GraphicString; // GraphicString
export function _decode_CloseOutNarr (el: _Element): CloseOutNarr {
    const value = ($._decodeGraphicString)(el);
    if (value.length < 0 || value.length > 256) {
        throw new ASN1SizeError("CloseOutNarr violates SIZE constraint");
    }
    return value;
}
export const _encode_CloseOutNarr = $._encodeGraphicString;


/* eslint-enable */

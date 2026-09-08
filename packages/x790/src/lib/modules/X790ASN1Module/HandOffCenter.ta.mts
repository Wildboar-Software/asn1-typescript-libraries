/* eslint-disable */
import {
    GraphicString,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HandOffCenter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HandOffCenter  ::=  GraphicString(SIZE (0..64))
 * ```
 */
export
type HandOffCenter = GraphicString; // GraphicString
export function _decode_HandOffCenter (el: _Element): HandOffCenter {
    const value = ($._decodeGraphicString)(el);
    if (value.length < 0 || value.length > 64) {
        throw new ASN1SizeError("HandOffCenter violates SIZE constraint");
    }
    return value;
}
export const _encode_HandOffCenter = $._encodeGraphicString;


/* eslint-enable */

/* eslint-disable */
import {
    GraphicString,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HandOffLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HandOffLocation  ::=  GraphicString(SIZE (0..64))
 * ```
 */
export
type HandOffLocation = GraphicString; // GraphicString
export function _decode_HandOffLocation (el: _Element): HandOffLocation {
    const value = ($._decodeGraphicString)(el);
    if (value.length < 0 || value.length > 64) {
        throw new ASN1SizeError("HandOffLocation violates SIZE constraint");
    }
    return value;
}
export const _encode_HandOffLocation = $._encodeGraphicString;


/* eslint-enable */

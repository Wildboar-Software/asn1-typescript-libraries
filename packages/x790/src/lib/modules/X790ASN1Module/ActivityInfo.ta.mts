/* eslint-disable */
import {
    GraphicString,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ActivityInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivityInfo  ::=  GraphicString(SIZE (0..256))
 * ```
 */
export
type ActivityInfo = GraphicString; // GraphicString
export function _decode_ActivityInfo (el: _Element): ActivityInfo {
    const value = ($._decodeGraphicString)(el);
    if (value.length < 0 || value.length > 256) {
        throw new ASN1SizeError("ActivityInfo violates SIZE constraint");
    }
    return value;
}
export const _encode_ActivityInfo = $._encodeGraphicString;


/* eslint-enable */

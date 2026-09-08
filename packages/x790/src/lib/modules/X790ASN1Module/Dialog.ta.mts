/* eslint-disable */
import {
    GraphicString,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Dialog
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Dialog  ::=  GraphicString(SIZE (0..64))
 * ```
 */
export
type Dialog = GraphicString; // GraphicString
export function _decode_Dialog (el: _Element): Dialog {
    const value = ($._decodeGraphicString)(el);
    if (value.length < 0 || value.length > 64) {
        throw new ASN1SizeError("Dialog violates SIZE constraint");
    }
    return value;
}
export const _encode_Dialog = $._encodeGraphicString;


/* eslint-enable */

/* eslint-disable */
import {
    GraphicString,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AdditionalText
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdditionalText  ::=  GraphicString(SIZE (0..256))
 * ```
 */
export
type AdditionalText = GraphicString; // GraphicString
export function _decode_AdditionalText (el: _Element): AdditionalText {
    const value = ($._decodeGraphicString)(el);
    if (value.length < 0 || value.length > 256) {
        throw new ASN1SizeError("AdditionalText violates SIZE constraint");
    }
    return value;
}
export const _encode_AdditionalText = $._encodeGraphicString;


/* eslint-enable */

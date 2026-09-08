/* eslint-disable */
import {
    GraphicString,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AccountName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccountName  ::=  GraphicString(SIZE (0..64))
 * ```
 */
export
type AccountName = GraphicString; // GraphicString
export function _decode_AccountName (el: _Element): AccountName {
    const value = ($._decodeGraphicString)(el);
    if (value.length < 0 || value.length > 64) {
        throw new ASN1SizeError("AccountName violates SIZE constraint");
    }
    return value;
}
export const _encode_AccountName = $._encodeGraphicString;


/* eslint-enable */

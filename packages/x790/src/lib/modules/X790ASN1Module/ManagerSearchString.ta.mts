/* eslint-disable */
import {
    GraphicString,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ManagerSearchString
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ManagerSearchString  ::=  GraphicString(SIZE (0..64))
 * ```
 */
export
type ManagerSearchString = GraphicString; // GraphicString
export function _decode_ManagerSearchString (el: _Element): ManagerSearchString {
    const value = ($._decodeGraphicString)(el);
    if (value.length < 0 || value.length > 64) {
        throw new ASN1SizeError("ManagerSearchString violates SIZE constraint");
    }
    return value;
}
export const _encode_ManagerSearchString = $._encodeGraphicString;


/* eslint-enable */

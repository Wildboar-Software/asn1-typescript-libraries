/* eslint-disable */
import {
    GraphicString,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NamingString
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NamingString  ::=  GraphicString(SIZE (0..32))
 * ```
 */
export
type NamingString = GraphicString; // GraphicString
export function _decode_NamingString (el: _Element): NamingString {
    const value = ($._decodeGraphicString)(el);
    if (value.length < 0 || value.length > 32) {
        throw new ASN1SizeError("NamingString violates SIZE constraint");
    }
    return value;
}
export const _encode_NamingString = $._encodeGraphicString;


/* eslint-enable */

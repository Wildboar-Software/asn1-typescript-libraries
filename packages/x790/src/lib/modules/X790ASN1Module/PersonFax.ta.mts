/* eslint-disable */
import {
    GraphicString,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PersonFax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PersonFax  ::=  GraphicString(SIZE (0..64))
 * ```
 */
export
type PersonFax = GraphicString; // GraphicString
export function _decode_PersonFax (el: _Element): PersonFax {
    const value = ($._decodeGraphicString)(el);
    if (value.length < 0 || value.length > 64) {
        throw new ASN1SizeError("PersonFax violates SIZE constraint");
    }
    return value;
}
export const _encode_PersonFax = $._encodeGraphicString;


/* eslint-enable */

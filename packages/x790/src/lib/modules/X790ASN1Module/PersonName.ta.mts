/* eslint-disable */
import {
    GraphicString,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PersonName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PersonName  ::=  GraphicString(SIZE (0..64))
 * ```
 */
export
type PersonName = GraphicString; // GraphicString
export function _decode_PersonName (el: _Element): PersonName {
    const value = ($._decodeGraphicString)(el);
    if (value.length < 0 || value.length > 64) {
        throw new ASN1SizeError("PersonName violates SIZE constraint");
    }
    return value;
}
export const _encode_PersonName = $._encodeGraphicString;


/* eslint-enable */

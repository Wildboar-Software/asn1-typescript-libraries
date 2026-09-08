/* eslint-disable */
import {
    GraphicString,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PersonPhone
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PersonPhone  ::=  GraphicString(SIZE (0..64))
 * ```
 */
export
type PersonPhone = GraphicString; // GraphicString
export function _decode_PersonPhone (el: _Element): PersonPhone {
    const value = ($._decodeGraphicString)(el);
    if (value.length < 0 || value.length > 64) {
        throw new ASN1SizeError("PersonPhone violates SIZE constraint");
    }
    return value;
}
export const _encode_PersonPhone = $._encodeGraphicString;


/* eslint-enable */

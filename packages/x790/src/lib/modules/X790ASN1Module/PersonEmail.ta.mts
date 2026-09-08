/* eslint-disable */
import {
    GraphicString,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PersonEmail
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PersonEmail  ::=  GraphicString(SIZE (0..64))
 * ```
 */
export
type PersonEmail = GraphicString; // GraphicString
export function _decode_PersonEmail (el: _Element): PersonEmail {
    const value = ($._decodeGraphicString)(el);
    if (value.length < 0 || value.length > 64) {
        throw new ASN1SizeError("PersonEmail violates SIZE constraint");
    }
    return value;
}
export const _encode_PersonEmail = $._encodeGraphicString;


/* eslint-enable */

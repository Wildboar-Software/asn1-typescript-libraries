/* eslint-disable */
import {
    GraphicString,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PersonRespon
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PersonRespon  ::=  GraphicString(SIZE (0..64))
 * ```
 */
export
type PersonRespon = GraphicString; // GraphicString
export function _decode_PersonRespon (el: _Element): PersonRespon {
    const value = ($._decodeGraphicString)(el);
    if (value.length < 0 || value.length > 64) {
        throw new ASN1SizeError("PersonRespon violates SIZE constraint");
    }
    return value;
}
export const _encode_PersonRespon = $._encodeGraphicString;


/* eslint-enable */

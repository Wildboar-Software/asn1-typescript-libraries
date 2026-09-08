/* eslint-disable */
import {
    IA5String,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TypeText
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TypeText  ::=  IA5String(SIZE (0..32))
 * ```
 */
export
type TypeText = IA5String; // IA5String
export function _decode_TypeText (el: _Element): TypeText {
    const value = ($._decodeIA5String)(el);
    if (value.length < 0 || value.length > 32) {
        throw new ASN1SizeError("TypeText violates SIZE constraint");
    }
    return value;
}
export const _encode_TypeText = $._encodeIA5String;


/* eslint-enable */

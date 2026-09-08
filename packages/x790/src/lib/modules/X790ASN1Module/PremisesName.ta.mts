/* eslint-disable */
import {
    GraphicString,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PremisesName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PremisesName  ::=  GraphicString(SIZE (0..64))
 * ```
 */
export
type PremisesName = GraphicString; // GraphicString
export function _decode_PremisesName (el: _Element): PremisesName {
    const value = ($._decodeGraphicString)(el);
    if (value.length < 0 || value.length > 64) {
        throw new ASN1SizeError("PremisesName violates SIZE constraint");
    }
    return value;
}
export const _encode_PremisesName = $._encodeGraphicString;


/* eslint-enable */

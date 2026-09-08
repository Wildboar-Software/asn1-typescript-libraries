/* eslint-disable */
import {
    GraphicString,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CustTroubleTickNum
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CustTroubleTickNum  ::=  GraphicString(SIZE (0..64))
 * ```
 */
export
type CustTroubleTickNum = GraphicString; // GraphicString
export function _decode_CustTroubleTickNum (el: _Element): CustTroubleTickNum {
    const value = ($._decodeGraphicString)(el);
    if (value.length < 0 || value.length > 64) {
        throw new ASN1SizeError("CustTroubleTickNum violates SIZE constraint");
    }
    return value;
}
export const _encode_CustTroubleTickNum = $._encodeGraphicString;


/* eslint-enable */

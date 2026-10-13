/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CellIdType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CellIdType  ::=  BIT STRING (SIZE (16))
 * ```
 */
export
type CellIdType = BIT_STRING;
export const _decode_CellIdType: $.ASN1Decoder<CellIdType> = (el: _Element): CellIdType => {
    const value = $._decodeBitString(el);
    if (value.length < 16 || value.length > 16) {
        throw new ASN1SizeError("CellIdType violates SIZE constraint");
    }
    return value;
};
export const _encode_CellIdType: $.ASN1Encoder<CellIdType> = $._encodeBitString;


/* eslint-enable */

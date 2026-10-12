/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
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
export const _decode_CellIdType: $.ASN1Decoder<CellIdType> = $._decodeBitString;
export const _encode_CellIdType: $.ASN1Encoder<CellIdType> = $._encodeBitString;


/* eslint-enable */

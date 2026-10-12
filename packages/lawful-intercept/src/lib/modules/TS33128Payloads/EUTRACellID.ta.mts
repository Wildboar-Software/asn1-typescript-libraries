/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EUTRACellID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EUTRACellID  ::=  BIT STRING (SIZE(28))
 * ```
 */
export
type EUTRACellID = BIT_STRING;
export const _decode_EUTRACellID: $.ASN1Decoder<EUTRACellID> = $._decodeBitString;
export const _encode_EUTRACellID: $.ASN1Encoder<EUTRACellID> = $._encodeBitString;


/* eslint-enable */

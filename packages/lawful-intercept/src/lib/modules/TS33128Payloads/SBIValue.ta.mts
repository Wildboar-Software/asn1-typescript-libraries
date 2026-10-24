/* eslint-disable */
import {
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SBIValue
 * @description
 * 
 * Shall contain the entire value of the SBI Message or parameter being
 * reported.
 *
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SBIValue  ::=  UTF8String
 * ```
 */
export
type SBIValue = UTF8String; // UTF8String
export const _decode_SBIValue: $.ASN1Decoder<SBIValue> = $._decodeUTF8String;
export const _encode_SBIValue: $.ASN1Encoder<SBIValue> = $._encodeUTF8String;


/* eslint-enable */

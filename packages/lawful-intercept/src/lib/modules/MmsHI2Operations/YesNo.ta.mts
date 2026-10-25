/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary YesNo
 * @description
 * 
 * Yes or no. True means Yes and false means No.
 * 
 * 3GPP TS 33.108, annex B.15.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * YesNo ::=  BOOLEAN
 * ```
 */
export
type YesNo = BOOLEAN; // BooleanType
export const _decode_YesNo: $.ASN1Decoder<YesNo> = $._decodeBoolean;
export const _encode_YesNo: $.ASN1Encoder<YesNo> = $._encodeBoolean;


/* eslint-enable */

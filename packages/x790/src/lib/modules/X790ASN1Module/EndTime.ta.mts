/* eslint-disable */
import {
    type GeneralizedTime,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EndTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EndTime  ::=  GeneralizedTime
 * ```
 */
export
type EndTime = GeneralizedTime; // GeneralizedTime
export const _decode_EndTime: $.ASN1Decoder<Date> = $._decodeGeneralizedTime;
export const _encode_EndTime: $.ASN1Encoder<Date> = $._encodeGeneralizedTime;


/* eslint-enable */

/* eslint-disable */
import {
    type GeneralizedTime,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BeginTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BeginTime  ::=  GeneralizedTime
 * ```
 */
export
type BeginTime = GeneralizedTime; // GeneralizedTime
export const _decode_BeginTime: $.ASN1Decoder<Date> = $._decodeGeneralizedTime;
export const _encode_BeginTime: $.ASN1Encoder<Date> = $._encodeGeneralizedTime;


/* eslint-enable */

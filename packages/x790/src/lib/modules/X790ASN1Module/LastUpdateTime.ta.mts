/* eslint-disable */
import {
    type GeneralizedTime,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LastUpdateTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LastUpdateTime  ::=  GeneralizedTime
 * ```
 */
export
type LastUpdateTime = GeneralizedTime; // GeneralizedTime
export const _decode_LastUpdateTime: $.ASN1Decoder<Date> = $._decodeGeneralizedTime;
export const _encode_LastUpdateTime: $.ASN1Encoder<Date> = $._encodeGeneralizedTime;


/* eslint-enable */

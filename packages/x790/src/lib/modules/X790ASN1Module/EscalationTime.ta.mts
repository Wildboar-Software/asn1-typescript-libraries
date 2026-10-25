/* eslint-disable */
import {
    type GeneralizedTime,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EscalationTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EscalationTime  ::=  GeneralizedTime
 * ```
 */
export
type EscalationTime = GeneralizedTime; // GeneralizedTime
export const _decode_EscalationTime: $.ASN1Decoder<Date> = $._decodeGeneralizedTime;
export const _encode_EscalationTime: $.ASN1Encoder<Date> = $._encodeGeneralizedTime;


/* eslint-enable */

/* eslint-disable */
import {
    type GeneralizedTime,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TroubleReportStatusTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TroubleReportStatusTime  ::=  GeneralizedTime
 * ```
 */
export
type TroubleReportStatusTime = GeneralizedTime; // GeneralizedTime
export const _decode_TroubleReportStatusTime: $.ASN1Decoder<Date> = $._decodeGeneralizedTime;
export const _encode_TroubleReportStatusTime: $.ASN1Encoder<Date> = $._encodeGeneralizedTime;


/* eslint-enable */

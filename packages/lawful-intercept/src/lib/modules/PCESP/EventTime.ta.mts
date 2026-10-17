/* eslint-disable */
import {
    GeneralizedTime
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EventTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventTime  ::=  GeneralizedTime
 * ```
 */
export
type EventTime = GeneralizedTime; // GeneralizedTime
export const _decode_EventTime: $.ASN1Decoder<EventTime> = $._decodeGeneralizedTime;
export const _encode_EventTime: $.ASN1Encoder<EventTime> = $._encodeGeneralizedTime;


/* eslint-enable */

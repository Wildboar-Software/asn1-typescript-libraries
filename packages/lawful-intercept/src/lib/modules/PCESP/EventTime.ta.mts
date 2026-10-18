/* eslint-disable */
import {
    GeneralizedTime
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EventTime
 * @description
 *
 * Time carried on a PCESP message, encoded as `GeneralizedTime`.
 *
 * This edition does not say which instant is recorded. It is a
 * different field from the mandatory `UTCTime` timestamp on
 * `TARGETACTIVITYMONITOR`, which clause 8.4.2.1.3 defines as the time
 * the interception was made.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.4.2.1.3 and annex A.
 *
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
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

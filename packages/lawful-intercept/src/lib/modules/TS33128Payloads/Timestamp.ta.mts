/* eslint-disable */
import {
    type GeneralizedTime
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Timestamp
 * @description
 * 
 * Unless otherwise specified, the timestamp shall be given qualified with time
 * zone information (i.e. as UTC or offset from UTC, not using the local time
 * format).
 *
 * 3GPP TS 33.128, clause 8.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Timestamp  ::=  GeneralizedTime
 * ```
 */
export
type Timestamp = GeneralizedTime; // GeneralizedTime
export const _decode_Timestamp: $.ASN1Decoder<Timestamp> = $._decodeGeneralizedTime;
export const _encode_Timestamp: $.ASN1Encoder<Timestamp> = $._encodeGeneralizedTime;


/* eslint-enable */

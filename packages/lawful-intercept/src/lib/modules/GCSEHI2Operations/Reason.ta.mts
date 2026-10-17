/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Reason
 * @description
 * 
 * Text reason, used for the end of GCSE group communications when a reason is
 * available. No further format is defined. 3GPP TS 33.108, clause 14.2.6, table
 * 14.8, and annex B.14.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Reason  ::=  UTF8String
 * ```
 */
export
type Reason = UTF8String; // UTF8String
export const _decode_Reason: $.ASN1Decoder<Reason> = $._decodeUTF8String;
export const _encode_Reason: $.ASN1Encoder<Reason> = $._encodeUTF8String;


/* eslint-enable */

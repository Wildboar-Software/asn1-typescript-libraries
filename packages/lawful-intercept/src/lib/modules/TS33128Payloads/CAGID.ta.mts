/* eslint-disable */
import {
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CAGID
 * @description
 * 
 * Provides CAG cell information (e.g. CAGId) if UE is attempting registration
 * from a CAG.
 *
 * 3GPP TS 33.128, clause 7.2.2.3.8.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CAGID  ::=  UTF8String
 * ```
 */
export
type CAGID = UTF8String; // UTF8String
export const _decode_CAGID: $.ASN1Decoder<CAGID> = $._decodeUTF8String;
export const _encode_CAGID: $.ASN1Encoder<CAGID> = $._encodeUTF8String;


/* eslint-enable */

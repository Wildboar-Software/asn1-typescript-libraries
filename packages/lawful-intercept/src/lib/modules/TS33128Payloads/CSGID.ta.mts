/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CSGID
 * @description
 * 
 * Closed Subscriber Group Identifier derived from CSG-ID defined in TS 29.272
 * [106] clause 7.3.79.
 *
 * 3GPP TS 33.128, clause 8.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSGID  ::=  INTEGER
 * ```
 */
export
type CSGID = INTEGER;
export const _decode_CSGID: $.ASN1Decoder<CSGID> = $._decodeInteger;
export const _encode_CSGID: $.ASN1Encoder<CSGID> = $._encodeInteger;


/* eslint-enable */

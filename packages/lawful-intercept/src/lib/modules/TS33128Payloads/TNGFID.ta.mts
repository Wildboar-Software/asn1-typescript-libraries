/* eslint-disable */
import {
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TNGFID
 * @description
 * 
 * This represents the identifier of the TNGF ID. The TNGFID is derived from the
 * TngfId parameter in TS 29.571 [17] clause 5.4.4.28 and table 5.4.2-1.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TNGFID  ::=  UTF8String
 * ```
 */
export
type TNGFID = UTF8String; // UTF8String
export const _decode_TNGFID: $.ASN1Decoder<TNGFID> = $._decodeUTF8String;
export const _encode_TNGFID: $.ASN1Encoder<TNGFID> = $._encodeUTF8String;


/* eslint-enable */

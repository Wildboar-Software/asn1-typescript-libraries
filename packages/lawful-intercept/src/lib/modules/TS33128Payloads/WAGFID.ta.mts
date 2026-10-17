/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary WAGFID
 * @description
 * 
 * This represents the identifier of the W-AGF ID. The WAGFID is derived from
 * the WAgfId parameter in TS 29.571 [17] clause 5.4.4.28 and table 5.4.2-1.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WAGFID  ::=  UTF8String
 * ```
 */
export
type WAGFID = UTF8String; // UTF8String
export const _decode_WAGFID: $.ASN1Decoder<WAGFID> = $._decodeUTF8String;
export const _encode_WAGFID: $.ASN1Encoder<WAGFID> = $._encodeUTF8String;


/* eslint-enable */

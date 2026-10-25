/* eslint-disable */
import {
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MCServiceGroupID
 * @description
 * 
 * MC service group ID of the target MC service group the file is intended for.
 * Represented by the mcdata-request-uri element of the
 * application/vnd.3gpp.mcdata-info+xml MIME body.
 *
 * 3GPP TS 33.128, clause 7.20.2.6.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCServiceGroupID  ::=  UTF8String
 * ```
 */
export
type MCServiceGroupID = UTF8String; // UTF8String
export const _decode_MCServiceGroupID: $.ASN1Decoder<MCServiceGroupID> = $._decodeUTF8String;
export const _encode_MCServiceGroupID: $.ASN1Encoder<MCServiceGroupID> = $._encodeUTF8String;


/* eslint-enable */

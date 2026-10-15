/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MCServiceID
 * @description
 * 
 * MC service ID of the target MC service user uploading a file or MC service
 * user uploading a file intended for a target MC service group. Represented by
 * the mcdata-calling-user-id element of the
 * application/vnd.3gpp.mcdata-info+xml MIME body.
 *
 * 3GPP TS 33.128, clause 7.20.2.6.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCServiceID  ::=  UTF8String
 * ```
 */
export
type MCServiceID = UTF8String; // UTF8String
export const _decode_MCServiceID: $.ASN1Decoder<MCServiceID> = $._decodeUTF8String;
export const _encode_MCServiceID: $.ASN1Encoder<MCServiceID> = $._encodeUTF8String;


/* eslint-enable */

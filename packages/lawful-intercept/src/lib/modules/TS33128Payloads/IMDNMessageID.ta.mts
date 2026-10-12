/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMDNMessageID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMDNMessageID  ::=  UTF8String
 * ```
 */
export
type IMDNMessageID = UTF8String; // UTF8String
export const _decode_IMDNMessageID: $.ASN1Decoder<IMDNMessageID> = $._decodeUTF8String;
export const _encode_IMDNMessageID: $.ASN1Encoder<IMDNMessageID> = $._encodeUTF8String;


/* eslint-enable */

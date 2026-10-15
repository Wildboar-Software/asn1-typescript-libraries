/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SIPAccessInfo
 * @description
 * 
 * Contains the contents of the access-info parameter of the specified Header
 * Field of the SIP Message. See TS 24.229 [74] clauses 7.2A.4.2 and 7.2A.4.3.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIPAccessInfo  ::=  UTF8String
 * ```
 */
export
type SIPAccessInfo = UTF8String; // UTF8String
export const _decode_SIPAccessInfo: $.ASN1Decoder<SIPAccessInfo> = $._decodeUTF8String;
export const _encode_SIPAccessInfo: $.ASN1Encoder<SIPAccessInfo> = $._encodeUTF8String;


/* eslint-enable */

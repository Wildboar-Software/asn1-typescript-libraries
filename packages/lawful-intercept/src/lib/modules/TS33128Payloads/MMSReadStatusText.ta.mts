/* eslint-disable */
import {
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMSReadStatusText
 * @description
 * 
 * Text explanation corresponding to the Read Status. Include if sent to/by the
 * MMS Proxy-Relay.
 *
 * 3GPP TS 33.128, clause 7.4.3.16.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSReadStatusText  ::=  UTF8String
 * ```
 */
export
type MMSReadStatusText = UTF8String; // UTF8String
export const _decode_MMSReadStatusText: $.ASN1Decoder<MMSReadStatusText> = $._decodeUTF8String;
export const _encode_MMSReadStatusText: $.ASN1Encoder<MMSReadStatusText> = $._encodeUTF8String;


/* eslint-enable */

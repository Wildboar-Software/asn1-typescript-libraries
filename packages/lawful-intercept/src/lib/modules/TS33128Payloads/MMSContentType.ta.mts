/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMSContentType
 * @description
 * 
 * The content type of the MM. See OMA-TS-MMS_ENC [39] clause 7.3.11.
 *
 * 3GPP TS 33.128, clause 7.4.3.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSContentType  ::=  UTF8String
 * ```
 */
export
type MMSContentType = UTF8String; // UTF8String
export const _decode_MMSContentType: $.ASN1Decoder<MMSContentType> = $._decodeUTF8String;
export const _encode_MMSContentType: $.ASN1Encoder<MMSContentType> = $._encodeUTF8String;


/* eslint-enable */

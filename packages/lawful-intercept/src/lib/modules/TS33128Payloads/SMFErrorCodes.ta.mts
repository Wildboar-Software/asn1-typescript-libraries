/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMFErrorCodes
 * @description
 * 
 * Indicates the NF Service Consumer cause for the requested PDU session release
 * (see TS 29.502 [16] clause 6.1.6.3.8 for enumerated cause information).
 * Include if known.
 *
 * 3GPP TS 33.128, clause 6.2.3.2.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFErrorCodes  ::=  UTF8String
 * ```
 */
export
type SMFErrorCodes = UTF8String; // UTF8String
export const _decode_SMFErrorCodes: $.ASN1Decoder<SMFErrorCodes> = $._decodeUTF8String;
export const _encode_SMFErrorCodes: $.ASN1Encoder<SMFErrorCodes> = $._encodeUTF8String;


/* eslint-enable */

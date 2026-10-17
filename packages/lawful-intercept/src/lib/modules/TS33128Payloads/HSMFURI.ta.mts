/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HSMFURI
 * @description
 * 
 * URI of the Nsmf_PDUSession service of the selected H-SMF, if available. See
 * TS 29.502 [16] clause 6.1.6.2.2.
 *
 * 3GPP TS 33.128, clause 6.2.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HSMFURI  ::=  UTF8String
 * ```
 */
export
type HSMFURI = UTF8String; // UTF8String
export const _decode_HSMFURI: $.ASN1Decoder<HSMFURI> = $._decodeUTF8String;
export const _encode_HSMFURI: $.ASN1Encoder<HSMFURI> = $._encodeUTF8String;


/* eslint-enable */

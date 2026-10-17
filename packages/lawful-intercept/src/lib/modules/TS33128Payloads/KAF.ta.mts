/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary KAF
 * @description
 * 
 * New value of the AF-specific key, after refresh.
 *
 * 3GPP TS 33.128, clause 7.9.1.4.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KAF  ::=  OCTET STRING
 * ```
 */
export
type KAF = OCTET_STRING; // OctetStringType
export const _decode_KAF: $.ASN1Decoder<KAF> = $._decodeOctetString;
export const _encode_KAF: $.ASN1Encoder<KAF> = $._encodeOctetString;


/* eslint-enable */

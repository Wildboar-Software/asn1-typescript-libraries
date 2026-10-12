/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary KAF
 * @description
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

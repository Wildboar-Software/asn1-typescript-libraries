/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary KAKMA
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KAKMA  ::=  OCTET STRING
 * ```
 */
export
type KAKMA = OCTET_STRING; // OctetStringType
export const _decode_KAKMA: $.ASN1Decoder<KAKMA> = $._decodeOctetString;
export const _encode_KAKMA: $.ASN1Encoder<KAKMA> = $._encodeOctetString;


/* eslint-enable */

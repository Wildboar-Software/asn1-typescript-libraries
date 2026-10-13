/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UPFCCPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UPFCCPDU  ::=  OCTET STRING
 * ```
 */
export
type UPFCCPDU = OCTET_STRING; // OctetStringType
export const _decode_UPFCCPDU: $.ASN1Decoder<UPFCCPDU> = $._decodeOctetString;
export const _encode_UPFCCPDU: $.ASN1Encoder<UPFCCPDU> = $._encodeOctetString;


/* eslint-enable */

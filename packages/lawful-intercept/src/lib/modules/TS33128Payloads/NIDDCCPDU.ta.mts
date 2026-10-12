/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NIDDCCPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NIDDCCPDU  ::=  OCTET STRING
 * ```
 */
export
type NIDDCCPDU = OCTET_STRING; // OctetStringType
export const _decode_NIDDCCPDU: $.ASN1Decoder<NIDDCCPDU> = $._decodeOctetString;
export const _encode_NIDDCCPDU: $.ASN1Encoder<NIDDCCPDU> = $._encodeOctetString;


/* eslint-enable */

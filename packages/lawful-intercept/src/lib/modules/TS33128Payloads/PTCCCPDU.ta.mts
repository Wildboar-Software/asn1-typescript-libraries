/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PTCCCPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCCCPDU  ::=  OCTET STRING
 * ```
 */
export
type PTCCCPDU = OCTET_STRING; // OctetStringType

export const _decode_PTCCCPDU: $.ASN1Decoder<PTCCCPDU> = $._decodeOctetString;

export const _encode_PTCCCPDU: $.ASN1Encoder<PTCCCPDU> = $._encodeOctetString;


/* eslint-enable */

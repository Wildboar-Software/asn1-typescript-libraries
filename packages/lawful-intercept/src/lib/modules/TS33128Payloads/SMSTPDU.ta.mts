/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMSTPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSTPDU  ::=  OCTET STRING (SIZE(1..270))
 * ```
 */
export
type SMSTPDU = OCTET_STRING; // OctetStringType
export const _decode_SMSTPDU: $.ASN1Decoder<SMSTPDU> = $._decodeOctetString;
export const _encode_SMSTPDU: $.ASN1Encoder<SMSTPDU> = $._encodeOctetString;


/* eslint-enable */

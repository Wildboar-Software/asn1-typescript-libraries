/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TAC  ::=  OCTET STRING (SIZE(2..3))
 * ```
 */
export
type TAC = OCTET_STRING; // OctetStringType
export const _decode_TAC: $.ASN1Decoder<TAC> = $._decodeOctetString;
export const _encode_TAC: $.ASN1Encoder<TAC> = $._encodeOctetString;


/* eslint-enable */

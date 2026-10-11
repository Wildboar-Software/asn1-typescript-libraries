/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LAC  ::=  OCTET STRING (SIZE(2))
 * ```
 */
export
type LAC = OCTET_STRING; // OctetStringType

export const _decode_LAC: $.ASN1Decoder<LAC> = $._decodeOctetString;

export const _encode_LAC: $.ASN1Encoder<LAC> = $._encodeOctetString;


/* eslint-enable */

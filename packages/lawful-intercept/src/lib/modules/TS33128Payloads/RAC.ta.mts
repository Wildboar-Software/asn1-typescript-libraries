/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RAC  ::=  OCTET STRING (SIZE(2))
 * ```
 */
export
type RAC = OCTET_STRING; // OctetStringType
export const _decode_RAC: $.ASN1Decoder<RAC> = $._decodeOctetString;
export const _encode_RAC: $.ASN1Encoder<RAC> = $._encodeOctetString;


/* eslint-enable */

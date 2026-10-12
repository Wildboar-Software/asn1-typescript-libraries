/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EUI64
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EUI64  ::=  OCTET STRING (SIZE(8))
 * ```
 */
export
type EUI64 = OCTET_STRING; // OctetStringType
export const _decode_EUI64: $.ASN1Decoder<EUI64> = $._decodeOctetString;
export const _encode_EUI64: $.ASN1Encoder<EUI64> = $._encodeOctetString;


/* eslint-enable */

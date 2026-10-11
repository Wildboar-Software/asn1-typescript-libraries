/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGMMCapability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGMMCapability  ::=  OCTET STRING (SIZE(1..13))
 * ```
 */
export
type FiveGMMCapability = OCTET_STRING; // OctetStringType

export const _decode_FiveGMMCapability: $.ASN1Decoder<FiveGMMCapability> = $._decodeOctetString;

export const _encode_FiveGMMCapability: $.ASN1Encoder<FiveGMMCapability> = $._encodeOctetString;


/* eslint-enable */

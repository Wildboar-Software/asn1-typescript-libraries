/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CC_Link_Identifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CC-Link-Identifier  ::=  OCTET STRING (SIZE (1..8))
 * ```
 */
export
type CC_Link_Identifier = OCTET_STRING; // OctetStringType
export const _decode_CC_Link_Identifier: $.ASN1Decoder<CC_Link_Identifier> = $._decodeOctetString;
export const _encode_CC_Link_Identifier: $.ASN1Encoder<CC_Link_Identifier> = $._encodeOctetString;


/* eslint-enable */

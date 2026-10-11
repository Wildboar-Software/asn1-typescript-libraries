/* eslint-disable */
import {
    OCTET_STRING,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ThreeGPP2SMSTPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ThreeGPP2SMSTPDU  ::=  OCTET STRING
 * ```
 */
export
type ThreeGPP2SMSTPDU = OCTET_STRING; // OctetStringType

export const _decode_ThreeGPP2SMSTPDU: $.ASN1Decoder<ThreeGPP2SMSTPDU> = $._decodeOctetString;

export const _encode_ThreeGPP2SMSTPDU: $.ASN1Encoder<ThreeGPP2SMSTPDU> = $._encodeOctetString;

/* eslint-enable */

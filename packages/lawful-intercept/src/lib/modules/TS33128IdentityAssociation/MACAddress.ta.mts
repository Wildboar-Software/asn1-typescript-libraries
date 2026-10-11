/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MACAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MACAddress  ::=  OCTET STRING (SIZE(6))
 * ```
 */
export
type MACAddress = OCTET_STRING; // OctetStringType

export const _decode_MACAddress: $.ASN1Decoder<MACAddress> = $._decodeOctetString;

export const _encode_MACAddress: $.ASN1Encoder<MACAddress> = $._encodeOctetString;


/* eslint-enable */

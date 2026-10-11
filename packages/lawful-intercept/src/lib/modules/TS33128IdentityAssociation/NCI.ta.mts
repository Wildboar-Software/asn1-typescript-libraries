/* eslint-disable */
import {
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary NCI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NCI  ::=  BIT STRING (SIZE(36))
 * ```
 */
export
type NCI = BIT_STRING;

export const _decode_NCI: $.ASN1Decoder<NCI> = $._decodeBitString;

export const _encode_NCI: $.ASN1Encoder<NCI> = $._encodeBitString;

/* eslint-enable */

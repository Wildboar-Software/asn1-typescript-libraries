/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary MCPTTCCPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCPTTCCPDU  ::=  OCTET STRING
 * ```
 */
export
type MCPTTCCPDU = OCTET_STRING; // OctetStringType

export const _decode_MCPTTCCPDU: $.ASN1Decoder<MCPTTCCPDU> = $._decodeOctetString;

export const _encode_MCPTTCCPDU: $.ASN1Encoder<MCPTTCCPDU> = $._encodeOctetString;

/* eslint-enable */

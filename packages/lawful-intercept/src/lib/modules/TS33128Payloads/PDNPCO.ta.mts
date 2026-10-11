/* eslint-disable */
import {
    OCTET_STRING,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary PDNPCO
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDNPCO  ::=  OCTET STRING
 * ```
 */
export
type PDNPCO = OCTET_STRING; // OctetStringType

export const _decode_PDNPCO: $.ASN1Decoder<PDNPCO> = $._decodeOctetString;

export const _encode_PDNPCO: $.ASN1Encoder<PDNPCO> = $._encodeOctetString;

/* eslint-enable */

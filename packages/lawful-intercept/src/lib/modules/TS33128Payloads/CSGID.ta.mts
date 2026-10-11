/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CSGID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSGID  ::=  INTEGER
 * ```
 */
export
type CSGID = INTEGER;

export const _decode_CSGID: $.ASN1Decoder<CSGID> = $._decodeInteger;

export const _encode_CSGID: $.ASN1Encoder<CSGID> = $._encodeInteger;

/* eslint-enable */

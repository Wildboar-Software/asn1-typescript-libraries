/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RANUENGAPID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RANUENGAPID  ::=  INTEGER (0..4294967295)
 * ```
 */
export
type RANUENGAPID = INTEGER;

export const _decode_RANUENGAPID: $.ASN1Decoder<RANUENGAPID> = $._decodeInteger;

export const _encode_RANUENGAPID: $.ASN1Encoder<RANUENGAPID> = $._encodeInteger;


/* eslint-enable */

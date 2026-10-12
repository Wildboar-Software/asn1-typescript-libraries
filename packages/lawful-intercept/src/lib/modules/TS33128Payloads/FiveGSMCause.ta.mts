/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGSMCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGSMCause  ::=  INTEGER (0..255)
 * ```
 */
export
type FiveGSMCause = INTEGER;
export const _decode_FiveGSMCause: $.ASN1Decoder<FiveGSMCause> = $._decodeInteger;
export const _encode_FiveGSMCause: $.ASN1Encoder<FiveGSMCause> = $._encodeInteger;


/* eslint-enable */

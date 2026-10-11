/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSQOSPriority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSQOSPriority  ::=  INTEGER (1..15)
 * ```
 */
export
type EPSQOSPriority = INTEGER;

export const _decode_EPSQOSPriority: $.ASN1Decoder<EPSQOSPriority> = $._decodeInteger;

export const _encode_EPSQOSPriority: $.ASN1Encoder<EPSQOSPriority> = $._encodeInteger;


/* eslint-enable */

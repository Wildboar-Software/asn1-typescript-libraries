/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IntUnsignedLong
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IntUnsignedLong         ::=     INTEGER (0 .. 4294967295)
 * ```
 */
export
type IntUnsignedLong = INTEGER;
export const _decode_IntUnsignedLong: $.ASN1Decoder<IntUnsignedLong> = $._decodeInteger;
export const _encode_IntUnsignedLong: $.ASN1Encoder<IntUnsignedLong> = $._encodeInteger;


/* eslint-enable */

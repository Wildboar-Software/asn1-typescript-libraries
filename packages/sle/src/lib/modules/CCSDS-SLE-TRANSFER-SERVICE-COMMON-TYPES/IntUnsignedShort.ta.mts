/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IntUnsignedShort
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IntUnsignedShort        ::=     INTEGER (0 .. 65535)
 * ```
 */
export
type IntUnsignedShort = INTEGER;
export const _decode_IntUnsignedShort: $.ASN1Decoder<IntUnsignedShort> = $._decodeInteger;
export const _encode_IntUnsignedShort: $.ASN1Encoder<IntUnsignedShort> = $._encodeInteger;


/* eslint-enable */

/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BaseDistance
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BaseDistance  ::=  INTEGER(0..MAX)
 * ```
 */
export
type BaseDistance = INTEGER;

export
const _decode_BaseDistance: $.ASN1Decoder<BaseDistance> = $._decodeInteger;

export
const _encode_BaseDistance: $.ASN1Encoder<BaseDistance> = $._encodeInteger;

/* eslint-enable */

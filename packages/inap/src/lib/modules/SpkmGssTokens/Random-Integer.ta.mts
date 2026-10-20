/* eslint-disable */
import {
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Random_Integer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Random-Integer  ::=  BIT STRING
 * ```
 */
export
type Random_Integer = BIT_STRING;

export
const _decode_Random_Integer: $.ASN1Decoder<Random_Integer> = $._decodeBitString;

export
const _encode_Random_Integer: $.ASN1Encoder<Random_Integer> = $._encodeBitString;

/* eslint-enable */

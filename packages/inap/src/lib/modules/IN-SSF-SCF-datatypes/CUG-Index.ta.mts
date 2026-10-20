/* eslint-disable */
import {
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CUG_Index
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CUG-Index  ::= 
 *   IA5String(SIZE (1..4))
 *     (FROM ("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"))
 * ```
 */
export
type CUG_Index = IA5String; // IA5String

export
const _decode_CUG_Index: $.ASN1Decoder<CUG_Index> = $._decodeIA5String;

export
const _encode_CUG_Index: $.ASN1Encoder<CUG_Index> = $._encodeIA5String;

/* eslint-enable */

/* eslint-disable */
import {
    type IA5String,
    ASN1Element as _Element,
    ASN1SizeError,
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
function _decode_CUG_Index (el: _Element): CUG_Index {
    const value = $._decodeIA5String(el);
    if (value.length < 1 || value.length > 4) {
        throw new ASN1SizeError("CUG_Index violates SIZE constraint");
    }
    return value;
}

export
const _encode_CUG_Index: $.ASN1Encoder<CUG_Index> = $._encodeIA5String;

/* eslint-enable */

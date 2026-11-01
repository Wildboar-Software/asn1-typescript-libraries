/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1OverflowError,
    type INTEGER
} from "@wildboar/asn1";
import { maxUint32 } from "../NIS/maxUint32.va.mjs";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Uint32
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Uint32  ::=  INTEGER (0..maxUint32)
 * ```
 */
export
type Uint32 = INTEGER;

export
function _decode_Uint32 (el: _Element): Uint32 {
    const value = $._decodeInteger(el);
    const below = typeof value === "bigint" ? value < 0n : value < 0;
    const above = typeof value === "bigint" ? value > BigInt(maxUint32) : value > maxUint32;
    if (below || above) {
        throw new ASN1OverflowError("Uint32 violates INTEGER constraint");
    }
    return value;
}

export
const _encode_Uint32: $.ASN1Encoder<Uint32> = $._encodeInteger;

/* eslint-enable */

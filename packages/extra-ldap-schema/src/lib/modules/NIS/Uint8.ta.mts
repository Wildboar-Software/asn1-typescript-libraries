/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1OverflowError,
    type INTEGER
} from "@wildboar/asn1";
import { maxUint8 } from "../NIS/maxUint8.va.mjs";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Uint8
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Uint8   ::=  INTEGER (0..maxUint8)
 * ```
 */
export
type Uint8 = INTEGER;

export
function _decode_Uint8 (el: _Element): Uint8 {
    const value = $._decodeInteger(el);
    const below = typeof value === "bigint" ? value < 0n : value < 0;
    const above = typeof value === "bigint" ? value > BigInt(maxUint8) : value > maxUint8;
    if (below || above) {
        throw new ASN1OverflowError("Uint8 violates INTEGER constraint");
    }
    return value;
}

export
const _encode_Uint8: $.ASN1Encoder<Uint8> = $._encodeInteger;

/* eslint-enable */

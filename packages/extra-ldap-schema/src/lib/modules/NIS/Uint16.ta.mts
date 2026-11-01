/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1OverflowError,
    type INTEGER
} from "@wildboar/asn1";
import { maxUint16 } from "../NIS/maxUint16.va.mjs";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Uint16
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Uint16  ::=  INTEGER (0..maxUint16)
 * ```
 */
export
type Uint16 = INTEGER;

export
function _decode_Uint16 (el: _Element): Uint16 {
    const value = $._decodeInteger(el);
    const below = typeof value === "bigint" ? value < 0n : value < 0;
    const above = typeof value === "bigint" ? value > BigInt(maxUint16) : value > maxUint16;
    if (below || above) {
        throw new ASN1OverflowError("Uint16 violates INTEGER constraint");
    }
    return value;
}

export
const _encode_Uint16: $.ASN1Encoder<Uint16> = $._encodeInteger;

/* eslint-enable */

/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { maxUint32 } from "../NIS/maxUint32.va.mjs";


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
const _decode_Uint32 = (el: _Element): Uint32 => {
    const value = $._decodeInteger(el);
    if (typeof value === "bigint" ? (value < 0n || value > BigInt(maxUint32)) : (value < 0 || value > maxUint32)) {
        throw new ASN1OverflowError("Uint32 violates INTEGER constraint");
    }
    return value;
};

export
const _encode_Uint32: $.ASN1Encoder<Uint32> = $._encodeInteger;

/* eslint-enable */

/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { maxUint16 } from "../NIS/maxUint16.va.mjs";


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
const _decode_Uint16 = (el: _Element): Uint16 => {
    const value = $._decodeInteger(el);
    if (typeof value === "bigint" ? (value < 0n || value > BigInt(maxUint16)) : (value < 0 || value > maxUint16)) {
        throw new ASN1OverflowError("Uint16 violates INTEGER constraint");
    }
    return value;
};

export
const _encode_Uint16: $.ASN1Encoder<Uint16> = $._encodeInteger;

/* eslint-enable */

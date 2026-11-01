/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1OverflowError
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
const _decode_Uint8 = (el: _Element): Uint8 => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? value < 0n : value < 0) || (typeof value === "bigint" ? value : BigInt(value)) > (typeof maxUint8 === "bigint" ? maxUint8 : BigInt(maxUint8))) {
        throw new ASN1OverflowError("Uint8 violates INTEGER constraint");
    }
    return value;
};

export
const _encode_Uint8: $.ASN1Encoder<Uint8> = $._encodeInteger;

/* eslint-enable */

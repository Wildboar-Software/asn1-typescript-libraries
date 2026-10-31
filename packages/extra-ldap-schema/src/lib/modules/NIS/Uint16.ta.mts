/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import { maxUint16 } from "./maxUint16.va.mjs";
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

export function _decode_Uint16 (el: _Element): Uint16 {
    const value = $._decodeInteger(el);
    if (value < 0 || value > maxUint16) {
        throw new ASN1OverflowError("Uint16 violates INTEGER range");
    }
    return value;
}

export
const _encode_Uint16: $.ASN1Encoder<Uint16> = $._encodeInteger;

/* eslint-enable */

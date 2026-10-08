/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import { ASN1OverflowError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SkipCerts
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SkipCerts  ::=  INTEGER (0..MAX)
 * ```
 */
export
type SkipCerts = INTEGER;
export function _decode_SkipCerts (el: _Element): SkipCerts {
    const value = $._decodeInteger(el);
    const numeric = typeof value === "bigint" ? value : BigInt(value);
    if (numeric < 0n) {
        throw new ASN1OverflowError("SkipCerts violates INTEGER range constraint");
    }
    return value;
}
export const _encode_SkipCerts = $._encodeInteger;


/* eslint-enable */

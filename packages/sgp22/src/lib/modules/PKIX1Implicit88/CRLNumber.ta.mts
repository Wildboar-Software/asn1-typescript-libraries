/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import { ASN1OverflowError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CRLNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CRLNumber  ::=  INTEGER (0..MAX)
 * ```
 */
export
type CRLNumber = INTEGER;
export function _decode_CRLNumber (el: _Element): CRLNumber {
    const value = $._decodeInteger(el);
    const numeric = typeof value === "bigint" ? value : BigInt(value);
    if (numeric < 0n) {
        throw new ASN1OverflowError("CRLNumber violates INTEGER range constraint");
    }
    return value;
}
export const _encode_CRLNumber = $._encodeInteger;


/* eslint-enable */

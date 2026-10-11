/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ContextIDinList
 * @description
 * 
 * One ContextID inside a context list. Same numeric range and the same
 * distinguished values as `ContextID` (0 NULL, 4294967294 CHOOSE, 4294967295
 * ALL).
 *
 * The compiled module uses this type, rather than `ContextID`, for
 * `ContextRequest.contextList`, following the Wireshark adjustment in
 * `doc/h248v3.asn1`. The Recommendation's Annex A types that field as `SEQUENCE
 * OF ContextID`.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContextIDinList  ::=  INTEGER(0..4294967295)
 * ```
 */
export
type ContextIDinList = INTEGER;
export const _decode_ContextIDinList = (el: _Element): ContextIDinList => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? value : BigInt(value);
    if (n < 0n || n > 4294967295n) {
        throw new ASN1OverflowError("ContextIDinList violates INTEGER range");
    }
    return value;
};
export const _encode_ContextIDinList = $._encodeInteger;


/* eslint-enable */

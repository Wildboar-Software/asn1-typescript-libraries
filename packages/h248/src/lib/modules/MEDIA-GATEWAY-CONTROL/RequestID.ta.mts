/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RequestID
 * @description
 * 
 * 32-bit correlation token, 0 to 4294967295 (ITU-T Rec. H.248.1 (03/2013)
 * clause 7.1.9.1).
 *
 * It ties an Events descriptor to the Notify that descriptor produces, and ties
 * a signal instance to its completion event. On an AuditCapability reply that
 * returns every event, ALL is 0xFFFFFFFF (Annex A). Procedures for a Notify
 * whose RequestID is 0 are for further study (clause 7.2.7).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestID  ::=  INTEGER(0..4294967295)
 * ```
 */
export
type RequestID = INTEGER;
export const _decode_RequestID = (el: _Element): RequestID => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? value : BigInt(value);
    if (n < 0n || n > 4294967295n) {
        throw new ASN1OverflowError("RequestID violates INTEGER range");
    }
    return value;
};
export const _encode_RequestID = $._encodeInteger;


/* eslint-enable */

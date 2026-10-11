/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TransactionId
 * @description
 * 
 * 32-bit transaction identifier, 0 to 4294967295, assigned by the sender and
 * unique within that sender.
 *
 * A reply that reports a missing TransactionID uses the value 0 (ITU-T Rec.
 * H.248.1 (03/2013) clause 8.1.1). A reply that cannot determine a legal
 * transaction also uses a NULL TransactionID with error 403 (clause 8.2.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransactionId  ::=  INTEGER(0..4294967295)
 * ```
 */
export
type TransactionId = INTEGER;
export const _decode_TransactionId = (el: _Element): TransactionId => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? value : BigInt(value);
    if (n < 0n || n > 4294967295n) {
        throw new ASN1OverflowError("TransactionId violates INTEGER range");
    }
    return value;
};
export const _encode_TransactionId = $._encodeInteger;


/* eslint-enable */

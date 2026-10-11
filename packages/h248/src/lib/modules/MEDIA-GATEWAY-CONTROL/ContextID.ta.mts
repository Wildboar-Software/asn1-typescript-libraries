/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ContextID
 * @description
 * 
 * 32-bit context identifier, assigned by the MG and unique within that MG. The
 * MGC uses the value the MG supplied in later transactions (ITU-T Rec. H.248.1
 * (03/2013) clause 8.1.2).
 *
 * 0 is the NULL context: every termination that is not in another context.
 * 4294967294 (0xFFFFFFFE) is CHOOSE, asking the MG to create a context.
 * 4294967295 (0xFFFFFFFF) is ALL, which does not include NULL. Partial
 * ContextIDs are not used (clauses 8.1.2 and A.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContextID  ::=  INTEGER(0..4294967295)
 * ```
 */
export
type ContextID = INTEGER;
export const _decode_ContextID = (el: _Element): ContextID => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? value : BigInt(value);
    if (n < 0n || n > 4294967295n) {
        throw new ASN1OverflowError("ContextID violates INTEGER range");
    }
    return value;
};
export const _encode_ContextID = $._encodeInteger;


/* eslint-enable */

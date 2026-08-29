/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";

/**
 * @summary sha_1
 * @description
 *
 * OIW SHA-1 algorithm OID. ANSI X9.62-1998 §5.3.1 / §5.4.1
 * requires SHA-1 (ANSI X9.30 Part 2) for ECDSA, identified there
 * by `ecdsa-with-SHA1` rather than this OID. This OID appears in
 * the later `ANSIX9HashFunctions` set.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha-1 OBJECT IDENTIFIER ::= { iso(1)
 * identified-organization(3) oiw(14) secsig(3) algorithm(2) 26 }
 * ```
 *
 * @constant
 */
export const sha_1: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* oiw */ 14,
    /* secsig */ 3,
    /* algorithm */ 2,
    26,
]);

/* eslint-enable */

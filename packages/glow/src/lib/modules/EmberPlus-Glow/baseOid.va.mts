/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary baseOid
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * baseOid OBJECT IDENTIFIER ::= { iso(1) org(3) dod(6) internet(1) private(4) enterprises(1) lsb(37411) lsb-mgmt(2) emberPlus(1) glow(1) glowVolatile(100) }
 * ```
 * 
 * @constant
 */
export
const baseOid: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* org */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* private */ 4,
    /* enterprises */ 1,
    /* lsb */ 37411,
    /* lsb-mgmt */ 2,
    /* emberPlus */ 1,
    /* glow */ 1,
    /* glowVolatile */ 100,
]);

/* eslint-enable */

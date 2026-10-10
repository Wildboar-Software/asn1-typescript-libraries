/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary id_pkinit_san
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-pkinit-san OBJECT IDENTIFIER ::= { iso(1) org(3) dod(6) internet(1) security(5) kerberosv5(2)
 *     x509SanAN (2) }
 * ```
 * 
 * @constant
 */
export
const id_pkinit_san: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* org */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* security */ 5,
    /* kerberosv5 */ 2,
    /* x509SanAN */ 2,
]);

/* eslint-enable */

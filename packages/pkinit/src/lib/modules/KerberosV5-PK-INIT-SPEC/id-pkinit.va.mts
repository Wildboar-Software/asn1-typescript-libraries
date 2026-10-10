/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary id_pkinit
 * @description
 *
 * `1.3.6.1.5.2.3`. Arc for the PKINIT content types and the
 * PKINIT extended key usages.
 *
 * [RFC 4556, Appendix A](https://www.rfc-editor.org/rfc/rfc4556#appendix-A).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-pkinit OBJECT IDENTIFIER ::= { iso(1) identified-organization(3) dod(6) internet(1)
 *     security(5) kerberosv5(2) pkinit (3) }
 * ```
 * 
 * @constant
 */
export
const id_pkinit: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* security */ 5,
    /* kerberosv5 */ 2,
    /* pkinit */ 3,
]);

/* eslint-enable */

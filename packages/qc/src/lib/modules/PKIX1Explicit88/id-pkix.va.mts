/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_pkix
 * @description
 *
 * Root arc for Internet PKIX object identifiers
 * ([RFC 5280 §4.2.2](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.2),
 * Appendix A.1 / `PKIX1Explicit88`). Imported by the Qualified
 * Certificates modules in
 * [RFC 3739](https://datatracker.ietf.org/doc/html/rfc3739) Appendix A.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pkix  OBJECT IDENTIFIER ::= { iso(1) identified-organization(3) dod(6) internet(1)
 *                     security(5) mechanisms(5) pkix(7) }
 * ```
 *
 * @constant
 */
export const id_pkix: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* security */ 5,
    /* mechanisms */ 5,
    /* pkix */ 7,
]);

/* eslint-enable */

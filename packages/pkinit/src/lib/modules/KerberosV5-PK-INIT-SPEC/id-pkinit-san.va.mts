/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary id_pkinit_san
 * @description
 *
 * `1.3.6.1.5.2.2`. `type-id` of a subject alternative name
 * `otherName` whose value is a {@link KRB5PrincipalName}.
 * Implementations must be able to process this name form.
 * Appendix C says the Windows release anticipated by RFC 4556
 * does not put this name on KDC certificates.
 *
 * [RFC 4556, section 3.2.2](https://www.rfc-editor.org/rfc/rfc4556#section-3.2.2)
 * and
 * [Appendix C](https://www.rfc-editor.org/rfc/rfc4556#appendix-C).
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

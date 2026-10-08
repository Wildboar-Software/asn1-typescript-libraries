/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary id_logo
 * @description
 *
 * Arc for other-logotype class identifiers, `1.3.6.1.5.5.7.20`
 * (`{ id-pkix 20 }`). {@link id_logo_loyalty} and
 * {@link id_logo_background} are assigned under it. Any other class
 * uses an OID defined by the issuer or the application.
 *
 * [RFC 3709, section 4.2](https://www.rfc-editor.org/rfc/rfc3709#section-4.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-logo OBJECT IDENTIFIER ::= { iso(1) identified-organization(3)
 *    dod(6) internet(1) security(5) mechanisms(5) pkix(7) 20 }
 * ```
 * 
 * @constant
 */
export
const id_logo: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* security */ 5,
    /* mechanisms */ 5,
    /* pkix */ 7,
    20,
]);

/* eslint-enable */

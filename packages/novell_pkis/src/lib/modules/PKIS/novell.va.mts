/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary novell
 * @description
 *
 * Novell's organization arc under the US joint-iso-ccitt name-registration
 * arc: `2.16.840.1.113719`. Appendix F introduces it as the root of the
 * PKI attribute identifiers. §7 uses the same numeric organization id,
 * 113719, inside enterprise-identifier singletons.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * novell OBJECT IDENTIFIER ::= {joint-iso-ccitt(2) country(16) us(840) organization(1) novell (113719)}
 * ```
 * 
 * @constant
 */
export
const novell: OBJECT_IDENTIFIER = _OID.fromParts([
    /* joint-iso-ccitt */ 2,
    /* country */ 16,
    /* us */ 840,
    /* organization */ 1,
    /* novell */ 113719,
]);

/* eslint-enable */

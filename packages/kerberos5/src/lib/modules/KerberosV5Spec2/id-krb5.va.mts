/* eslint-disable */
import {
  OBJECT_IDENTIFIER,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';


/**
 * @summary id_krb5
 * @description
 *
 * OID arc for Kerberos V5 ([RFC 4120 §7.4](https://datatracker.ietf.org/doc/html/rfc4120#section-7.4)). MAY identify Kerberos
 * messages encapsulated in other protocols; also the arc for
 * future KerberosV5-related OIDs.
 * Value: `{1 3 6 1 5 2}`
 * (`iso.identified-organization.dod.internet.security.kerberosV5`).
 * RFC 1510 had an incorrect “dod” arc component.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-krb5         OBJECT IDENTIFIER ::= {
 *         iso(1) identified-organization(3) dod(6) internet(1)
 *         security(5) kerberosV5(2)
 * }
 * ```
 *
 * @constant
 */
export const id_krb5: OBJECT_IDENTIFIER = _OID.fromParts([
  /* iso */ 1,
  /* identified-organization */ 3,
  /* dod */ 6,
  /* internet */ 1,
  /* security */ 5,
  /* kerberosV5 */ 2,
]);

/* eslint-enable */

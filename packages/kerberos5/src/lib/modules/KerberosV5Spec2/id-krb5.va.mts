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
} from 'asn1-ts';


/**
 * @summary id_krb5
 * @description
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

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
 * @summary finf_doc_opt_decl
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * finf-doc-opt-decl OBJECT IDENTIFIER ::= {joint-iso-itu-t(2) asn1(1) generic-applications(10) fast-infoset(0)
 *    encodings(1) optional-xml-declaration(0)}
 * ```
 *
 * @constant
 */
export const finf_doc_opt_decl: OBJECT_IDENTIFIER = _OID.fromParts([
  /* joint-iso-itu-t */ 2,
  /* asn1 */ 1,
  /* generic-applications */ 10,
  /* fast-infoset */ 0,
  /* encodings */ 1,
  /* optional-xml-declaration */ 0,
]);

/* eslint-enable */

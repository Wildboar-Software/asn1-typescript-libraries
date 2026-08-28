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
 * @summary finf_doc_no_decl
 * @description
 *
 * Identifies a fast infoset document with no XML declaration:
 * the encoding starts with the 16 bits `1110000000000000`,
 * then a 16-bit version (this edition is 1), one padding bit,
 * then the ECN encoding of `Document`. Those 16 bits cannot
 * begin a well-formed XML 1.0 or 1.1 document. ITU-T Rec.
 * X.891 (05/2005)
 * [§12.6](https://www.itu.int/rec/T-REC-X.891-200505-I)–
 * §12.10, Annex E.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * finf-doc-no-decl OBJECT IDENTIFIER ::= {joint-iso-itu-t(2) asn1(1) generic-applications(10) fast-infoset(0)
 *    encodings(1) no-xml-declaration(1)}
 * ```
 *
 * @constant
 */
export const finf_doc_no_decl: OBJECT_IDENTIFIER = _OID.fromParts([
  /* joint-iso-itu-t */ 2,
  /* asn1 */ 1,
  /* generic-applications */ 10,
  /* fast-infoset */ 0,
  /* encodings */ 1,
  /* no-xml-declaration */ 1,
]);

/* eslint-enable */

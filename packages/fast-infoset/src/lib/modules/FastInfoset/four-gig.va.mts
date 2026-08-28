/* eslint-disable */
import {
  INTEGER,
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
 * @summary four_gig
 * @description
 *
 * 2³². Maximum length of a `NonEmptyOctetString` and thus of
 * identifying UTF-8 strings and of non-identifying character
 * strings in a single chunk, attribute value, comment, or PI.
 * ITU-T Rec. X.891 (05/2005)
 * [§7.2.1](https://www.itu.int/rec/T-REC-X.891-200505-I),
 * §7.4.6, §11.3 j.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * four-gig INTEGER ::= 4294967296
 * ```
 *
 * @constant
 */
export const four_gig: INTEGER = 4294967296;

/* eslint-enable */

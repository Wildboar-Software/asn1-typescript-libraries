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
 * @summary one_meg
 * @description
 *
 * 2²⁰. Upper bound on string-table and name-table indexes
 * (and on the number of additional-data items and most
 * initial-vocabulary sequences). Identifying indexes are
 * 1..`one-meg`; non-identifying indexes are 0..`one-meg`
 * (0 = empty string). ITU-T Rec. X.891 (05/2005)
 * [§7.2.1](https://www.itu.int/rec/T-REC-X.891-200505-I),
 * §7.2.18.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * one-meg INTEGER ::= 1048576
 * ```
 *
 * @constant
 */
export const one_meg: INTEGER = 1048576;

/* eslint-enable */

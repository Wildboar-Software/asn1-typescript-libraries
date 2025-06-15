/* eslint-disable */
import {
  joint_iso_itu_t,
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
 * @summary acse_as_id
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * acse-as-id OBJECT IDENTIFIER ::= {joint-iso-itu-t association-control(2) abstract-syntax(1) apdus(0)
 *    version1(1)}
 * ```
 *
 * @constant
 */
export const acse_as_id: OBJECT_IDENTIFIER = new _OID(
  [
    /* association-control */ 2,
    /* abstract-syntax */ 1,
    /* apdus */ 0,
    /* version1 */ 1,
  ],
  joint_iso_itu_t
);

/* eslint-enable */

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
 * @summary rTSE_abstract_syntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rTSE-abstract-syntax OBJECT IDENTIFIER ::= {joint-iso-itu-t reliable-transfer(3) abstract-syntax(2)}
 * ```
 *
 * @constant
 */
export const rTSE_abstract_syntax: OBJECT_IDENTIFIER = new _OID(
  [/* reliable-transfer */ 3, /* abstract-syntax */ 2],
  joint_iso_itu_t
);

/* eslint-enable */

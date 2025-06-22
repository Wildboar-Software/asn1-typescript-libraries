/* eslint-disable */
import {
  joint_iso_ccitt,
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
 * @summary cmoi
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cmoi OBJECT IDENTIFIER ::= {joint-iso-ccitt network-layer(13) management(0) sc6-gmi(0)}
 * ```
 *
 * @constant
 */
export const cmoi: OBJECT_IDENTIFIER = _OID.fromParts(
  [/* network-layer */ 13, /* management */ 0, /* sc6-gmi */ 0],
  joint_iso_ccitt
);

/* eslint-enable */

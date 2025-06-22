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
 * @summary basic_per_aligned
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * basic-per-aligned OBJECT IDENTIFIER ::= {joint-iso-itu-t asn1(1) packed-encoding(3) basic(0) aligned(0)}
 * ```
 *
 * @constant
 */
export const basic_per_aligned: OBJECT_IDENTIFIER = _OID.fromParts(
  [/* asn1 */ 1, /* packed-encoding */ 3, /* basic */ 0, /* aligned */ 0],
  joint_iso_itu_t
);

/* eslint-enable */

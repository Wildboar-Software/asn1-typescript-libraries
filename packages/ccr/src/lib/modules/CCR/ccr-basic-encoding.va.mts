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
} from '@wildboar/asn1';


/**
 * @summary ccr_basic_encoding
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ccr-basic-encoding OBJECT IDENTIFIER ::= {joint-iso-itu-t asn1(1) basic-encoding(1)}
 * ```
 *
 * @constant
 */
export const ccr_basic_encoding: OBJECT_IDENTIFIER = _OID.fromParts(
  [/* asn1 */ 1, /* basic-encoding */ 1],
  joint_iso_itu_t
);

/* eslint-enable */

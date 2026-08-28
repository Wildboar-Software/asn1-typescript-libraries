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
 * @summary joint_CCR
 * @description
 *
 * Root OID for CCR information objects
 * (`{joint-iso-itu-t ccr(7)}`). Identifies the procedures and shared
 * semantics of this Protocol Specification. ITU-T Rec. X.852 (12/97)
 * Annex A.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * joint-CCR OBJECT IDENTIFIER ::= {joint-iso-itu-t ccr(7)}
 * ```
 *
 * @constant
 */
export const joint_CCR: OBJECT_IDENTIFIER = _OID.fromParts(
  [/* ccr */ 7],
  joint_iso_itu_t
);

/* eslint-enable */

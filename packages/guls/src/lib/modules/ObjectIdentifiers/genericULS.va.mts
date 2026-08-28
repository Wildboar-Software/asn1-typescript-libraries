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
 * @summary genericULS
 * @description
 *
 * Root of the GULS OID tree `{joint-iso-itu-t genericULS(20)}`.
 * All OIDs in this series of Recommendations hang under this
 * arc. ITU-T Rec. X.830 (04/95)
 * [Annex F](https://www.itu.int/rec/T-REC-X.830-199504-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * genericULS OBJECT IDENTIFIER ::= {joint-iso-itu-t genericULS(20)}
 * ```
 *
 * @constant
 */
export const genericULS: OBJECT_IDENTIFIER = _OID.fromParts(
  [/* genericULS */ 20],
  joint_iso_itu_t
);

/* eslint-enable */

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
 * @summary basic_per_aligned
 * @description
 *
 * Encoding identified by
 * `{joint-iso-itu-t asn1(1) packed-encoding(3) basic(0)
 * aligned(0)}`. Every BIP message carried in
 * `TCPIPBIPMessage.content.bIPMessage` (and every discovery
 * / announcement message) shall be encoded in aligned PER
 * (ITU-T Rec. X.691 | ISO/IEC 8825-2). ITU-T Rec. X.1083
 * (11/2007)
 * [Annex A.2](https://www.itu.int/rec/T-REC-X.1083-200711-I),
 * A.6; Annex B.12.
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

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
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary UnsignedLong
 * @description
 *
 * Mapping of XML Schema `xsd:unsignedLong` (0..2^64−1).
 * ITU-T Rec. X.694 | ISO/IEC 8825-5. X.892 Annex A.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnsignedLong  ::=      INTEGER (0..18446744073709551615)
 * ```
 */
export type UnsignedLong = INTEGER;




export const _decode_UnsignedLong = $._decodeInteger;




export const _encode_UnsignedLong = $._encodeInteger;


/* eslint-enable */

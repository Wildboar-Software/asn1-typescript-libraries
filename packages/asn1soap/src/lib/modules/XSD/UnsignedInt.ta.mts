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
 * @summary UnsignedInt
 * @description
 *
 * Mapping of XML Schema `xsd:unsignedInt` (0..4294967295).
 * ITU-T Rec. X.694 | ISO/IEC 8825-5. X.892 Annex A.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnsignedInt  ::=     INTEGER (0..4294967295)
 * ```
 */
export type UnsignedInt = INTEGER;




export const _decode_UnsignedInt = $._decodeInteger;




export const _encode_UnsignedInt = $._encodeInteger;


/* eslint-enable */

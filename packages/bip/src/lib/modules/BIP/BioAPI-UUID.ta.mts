/* eslint-disable */
import {
  OCTET_STRING,
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
 * @summary BioAPI_UUID
 * @description
 *
 * 16-octet UUID in the same order as the C `uint8_t[16]`.
 *
 * ITU-T Rec. X.1083 (11/2007)
 * [§15.58](https://www.itu.int/rec/T-REC-X.1083-200711-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-UUID  ::=  OCTET STRING(SIZE (16))
 * ```
 */
export type BioAPI_UUID = OCTET_STRING; // OctetStringType




export const _decode_BioAPI_UUID = $._decodeOctetString;




export const _encode_BioAPI_UUID = $._encodeOctetString;


/* eslint-enable */

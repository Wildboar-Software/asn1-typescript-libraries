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
 * @summary BioAPI_DATA
 * @description
 *
 * Opaque octet payload. When the component is OPTIONAL, absence
 * means the C `Data` pointer was NULL (length 0). Otherwise C
 * NULL is unconvertible. Length is the octet-string length
 * (C `Length`).
 *
 * ITU-T Rec. X.1083 (11/2007)
 * [§15.22](https://www.itu.int/rec/T-REC-X.1083-200711-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-DATA  ::=  OCTET STRING(SIZE (0..max-unsigned-int))
 * ```
 */
export type BioAPI_DATA = OCTET_STRING; // OctetStringType




export const _decode_BioAPI_DATA = $._decodeOctetString;




export const _encode_BioAPI_DATA = $._encodeOctetString;


/* eslint-enable */

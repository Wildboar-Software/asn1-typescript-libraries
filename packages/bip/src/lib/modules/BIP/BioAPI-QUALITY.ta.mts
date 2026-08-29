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
 * @summary BioAPI_QUALITY
 * @description
 *
 * Sample quality. Allowed range −2..100; values outside are
 * unconvertible (clause 33). X.1083 does not define the scale.
 *
 * ITU-T Rec. X.1083 (11/2007)
 * [§15.51](https://www.itu.int/rec/T-REC-X.1083-200711-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-QUALITY  ::=  INTEGER(-2..100)
 * ```
 */
export type BioAPI_QUALITY = INTEGER;




export const _decode_BioAPI_QUALITY = $._decodeInteger;




export const _encode_BioAPI_QUALITY = $._encodeInteger;


/* eslint-enable */

/* eslint-disable */
import {
  ENUMERATED,
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


export enum _enum_for_BioAPI_CATEGORY {
  archive = 0,
  comparisonAlgorithm = 1,
  processingAlgorithm = 2,
  sensor = 3,
}


/**
 * @summary BioAPI_CATEGORY
 * @description
 *
 * BFP/unit category. ASN.1 enumerators are 0–3; C values are
 * bit-flag-like: `archive` = C `0x00000001`,
 * `comparisonAlgorithm` = `0x00000002`,
 * `processingAlgorithm` = `0x00000004`, `sensor` = `0x00000008`.
 * Other C values are unconvertible.
 *
 * ITU-T Rec. X.1083 (11/2007)
 * [§15.21](https://www.itu.int/rec/T-REC-X.1083-200711-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-CATEGORY  ::=  ENUMERATED {
 *   archive, comparisonAlgorithm, processingAlgorithm, sensor, ...
 *   }
 * ```
 *
 * @enum {number}
 */
export type BioAPI_CATEGORY = _enum_for_BioAPI_CATEGORY | ENUMERATED;


/**
 * @summary BioAPI_CATEGORY_archive
 * @constant
 * @type {number}
 */
export const BioAPI_CATEGORY_archive: BioAPI_CATEGORY = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary archive
 * @constant
 * @type {number}
 */
export const archive: BioAPI_CATEGORY = BioAPI_CATEGORY_archive; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_CATEGORY_comparisonAlgorithm
 * @constant
 * @type {number}
 */
export const BioAPI_CATEGORY_comparisonAlgorithm: BioAPI_CATEGORY = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary comparisonAlgorithm
 * @constant
 * @type {number}
 */
export const comparisonAlgorithm: BioAPI_CATEGORY = BioAPI_CATEGORY_comparisonAlgorithm; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_CATEGORY_processingAlgorithm
 * @constant
 * @type {number}
 */
export const BioAPI_CATEGORY_processingAlgorithm: BioAPI_CATEGORY = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary processingAlgorithm
 * @constant
 * @type {number}
 */
export const processingAlgorithm: BioAPI_CATEGORY = BioAPI_CATEGORY_processingAlgorithm; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_CATEGORY_sensor
 * @constant
 * @type {number}
 */
export const BioAPI_CATEGORY_sensor: BioAPI_CATEGORY = 3; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary sensor
 * @constant
 * @type {number}
 */
export const sensor: BioAPI_CATEGORY = BioAPI_CATEGORY_sensor; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_BioAPI_CATEGORY = $._decodeEnumerated;




export const _encode_BioAPI_CATEGORY = $._encodeEnumerated;


/* eslint-enable */

/* eslint-disable */
import {
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
 * @summary ImportanceField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ImportanceField  ::=  ENUMERATED {low(0), normal(1), high(2)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_ImportanceField {
    low = 0,
    normal = 1,
    high = 2,
}

/**
 * @summary ImportanceField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ImportanceField  ::=  ENUMERATED {low(0), normal(1), high(2)}
 * ```
 *
 * @enum {number}
 */
export type ImportanceField = _enum_for_ImportanceField;

/**
 * @summary ImportanceField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ImportanceField  ::=  ENUMERATED {low(0), normal(1), high(2)}
 * ```
 *
 * @enum {number}
 */
export const ImportanceField = _enum_for_ImportanceField;

/**
 * @summary ImportanceField_low
 * @constant
 * @type {number}
 */
export const ImportanceField_low: ImportanceField =
    ImportanceField.low; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary low
 * @constant
 * @type {number}
 */
export const low: ImportanceField =
    ImportanceField.low; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ImportanceField_normal
 * @constant
 * @type {number}
 */
export const ImportanceField_normal: ImportanceField =
    ImportanceField.normal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normal
 * @constant
 * @type {number}
 */
export const normal: ImportanceField =
    ImportanceField.normal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ImportanceField_high
 * @constant
 * @type {number}
 */
export const ImportanceField_high: ImportanceField =
    ImportanceField.high; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary high
 * @constant
 * @type {number}
 */
export const high: ImportanceField =
    ImportanceField.high; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_ImportanceField = $._decodeEnumerated;


export const _encode_ImportanceField = $._encodeEnumerated;


/* eslint-enable */

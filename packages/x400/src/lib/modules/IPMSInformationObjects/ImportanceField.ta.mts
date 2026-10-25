/* eslint-disable */
import {
    type ASN1Element as _Element,
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
 * Heading importance (ITU-T X.420 (1999), §7.2.10): `low`(0), `normal`(1), `high`(2). When
 * the heading field is omitted the default is **`normal`**, not `low`. `0` is a real 'low'
 * importance, not a sentinel for unspecified.
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
export const ImportanceField_low =
    ImportanceField.low satisfies ImportanceField; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary low
 * @constant
 * @type {number}
 */
export const low =
    ImportanceField.low satisfies ImportanceField; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ImportanceField_normal
 * @constant
 * @type {number}
 */
export const ImportanceField_normal =
    ImportanceField.normal satisfies ImportanceField; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normal
 * @constant
 * @type {number}
 */
export const normal =
    ImportanceField.normal satisfies ImportanceField; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ImportanceField_high
 * @constant
 * @type {number}
 */
export const ImportanceField_high =
    ImportanceField.high satisfies ImportanceField; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary high
 * @constant
 * @type {number}
 */
export const high =
    ImportanceField.high satisfies ImportanceField; /* SHORT_NAMED_ENUMERATED_VALUE */


export function _decode_ImportanceField(el: _Element): ImportanceField {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case ImportanceField.low: return ImportanceField.low;
        case ImportanceField.normal: return ImportanceField.normal;
        case ImportanceField.high: return ImportanceField.high;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for ImportanceField.',
                el,
            );
    }
}


export const _encode_ImportanceField: $.ASN1Encoder<ImportanceField> = $._encodeEnumerated as $.ASN1Encoder<ImportanceField>;


/* eslint-enable */

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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary IntegerDataType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IntegerDataType  ::=  INTEGER {
 *   allBitOn(0), allBitOff(1), incrementNumber(2),
 *   pn11(3), -- CCITT 0.152
 *   pn15(4), -- CCITT 0.151
 *   pn20(5)}
 * ```
 */
export type IntegerDataType = INTEGER;

/**
 * @summary IntegerDataType_allBitOn
 * @constant
 * @type {number}
 */
export const IntegerDataType_allBitOn: IntegerDataType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IntegerDataType_allBitOn
 * @constant
 * @type {number}
 */
export const allBitOn: IntegerDataType = IntegerDataType_allBitOn; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IntegerDataType_allBitOff
 * @constant
 * @type {number}
 */
export const IntegerDataType_allBitOff: IntegerDataType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IntegerDataType_allBitOff
 * @constant
 * @type {number}
 */
export const allBitOff: IntegerDataType = IntegerDataType_allBitOff; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IntegerDataType_incrementNumber
 * @constant
 * @type {number}
 */
export const IntegerDataType_incrementNumber: IntegerDataType = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IntegerDataType_incrementNumber
 * @constant
 * @type {number}
 */
export const incrementNumber: IntegerDataType = IntegerDataType_incrementNumber; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IntegerDataType_pn11
 * @constant
 * @type {number}
 */
export const IntegerDataType_pn11: IntegerDataType = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IntegerDataType_pn11
 * @constant
 * @type {number}
 */
export const pn11: IntegerDataType = IntegerDataType_pn11; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IntegerDataType_pn15
 * @constant
 * @type {number}
 */
export const IntegerDataType_pn15: IntegerDataType = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IntegerDataType_pn15
 * @constant
 * @type {number}
 */
export const pn15: IntegerDataType = IntegerDataType_pn15; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IntegerDataType_pn20
 * @constant
 * @type {number}
 */
export const IntegerDataType_pn20: IntegerDataType = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IntegerDataType_pn20
 * @constant
 * @type {number}
 */
export const pn20: IntegerDataType = IntegerDataType_pn20; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_IntegerDataType = $._decodeInteger;


export const _encode_IntegerDataType = $._encodeInteger;


/* eslint-enable */

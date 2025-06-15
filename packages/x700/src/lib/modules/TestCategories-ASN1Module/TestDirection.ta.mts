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
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary TestDirection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestDirection  ::=  INTEGER {
 *   atoZ(0), ztoA(1), bothDirections(2), transmitFromNearEnd(3),
 *   receiveFromNearEnd(4)}
 * ```
 */
export type TestDirection = INTEGER;

/**
 * @summary TestDirection_atoZ
 * @constant
 * @type {number}
 */
export const TestDirection_atoZ: TestDirection = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TestDirection_atoZ
 * @constant
 * @type {number}
 */
export const atoZ: TestDirection = TestDirection_atoZ; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TestDirection_ztoA
 * @constant
 * @type {number}
 */
export const TestDirection_ztoA: TestDirection = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TestDirection_ztoA
 * @constant
 * @type {number}
 */
export const ztoA: TestDirection = TestDirection_ztoA; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TestDirection_bothDirections
 * @constant
 * @type {number}
 */
export const TestDirection_bothDirections: TestDirection = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TestDirection_bothDirections
 * @constant
 * @type {number}
 */
export const bothDirections: TestDirection = TestDirection_bothDirections; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TestDirection_transmitFromNearEnd
 * @constant
 * @type {number}
 */
export const TestDirection_transmitFromNearEnd: TestDirection = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TestDirection_transmitFromNearEnd
 * @constant
 * @type {number}
 */
export const transmitFromNearEnd: TestDirection = TestDirection_transmitFromNearEnd; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TestDirection_receiveFromNearEnd
 * @constant
 * @type {number}
 */
export const TestDirection_receiveFromNearEnd: TestDirection = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TestDirection_receiveFromNearEnd
 * @constant
 * @type {number}
 */
export const receiveFromNearEnd: TestDirection = TestDirection_receiveFromNearEnd; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_TestDirection = $._decodeInteger;


export const _encode_TestDirection = $._encodeInteger;


/* eslint-enable */

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
 * @summary TestDirection
 * @description
 *
 * Direction(s) of a connection test on the MORT. Default if
 * omitted: transmitting direction at the near end of a
 * uni-directional path. Bidirectional: each direction is exercised
 * in an implementation-dependent order. ITU-T Rec. X.737 (11/95)
 * [§7.1.2](https://www.itu.int/rec/T-REC-X.737-199511-I), §7.1.6, A.7.
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
 * @description
 *
 * One-way A to Z (0). X.737 §7.1.2 Fig. 4.
 * @constant
 * @type {number}
 */
export const TestDirection_atoZ: TestDirection = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TestDirection_atoZ
 * @description
 *
 * One-way A to Z (0). X.737 §7.1.2 Fig. 4.
 * @constant
 * @type {number}
 */
export const atoZ: TestDirection = TestDirection_atoZ; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TestDirection_ztoA
 * @description
 *
 * One-way Z to A (1). X.737 §7.1.2 Fig. 4.
 * @constant
 * @type {number}
 */
export const TestDirection_ztoA: TestDirection = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TestDirection_ztoA
 * @description
 *
 * One-way Z to A (1). X.737 §7.1.2 Fig. 4.
 * @constant
 * @type {number}
 */
export const ztoA: TestDirection = TestDirection_ztoA; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TestDirection_bothDirections
 * @description
 *
 * Both directions (2). X.737 §7.1.2.
 * @constant
 * @type {number}
 */
export const TestDirection_bothDirections: TestDirection = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TestDirection_bothDirections
 * @description
 *
 * Both directions (2). X.737 §7.1.2.
 * @constant
 * @type {number}
 */
export const bothDirections: TestDirection = TestDirection_bothDirections; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TestDirection_transmitFromNearEnd
 * @description
 *
 * Transmit from near end (3). Default if `testDirection` omitted. X.737 §7.1.6.
 * @constant
 * @type {number}
 */
export const TestDirection_transmitFromNearEnd: TestDirection = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TestDirection_transmitFromNearEnd
 * @description
 *
 * Transmit from near end (3). Default if `testDirection` omitted. X.737 §7.1.6.
 * @constant
 * @type {number}
 */
export const transmitFromNearEnd: TestDirection = TestDirection_transmitFromNearEnd; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TestDirection_receiveFromNearEnd
 * @description
 *
 * Receive from near end (4). X.737 A.7.
 * @constant
 * @type {number}
 */
export const TestDirection_receiveFromNearEnd: TestDirection = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TestDirection_receiveFromNearEnd
 * @description
 *
 * Receive from near end (4). X.737 A.7.
 * @constant
 * @type {number}
 */
export const receiveFromNearEnd: TestDirection = TestDirection_receiveFromNearEnd; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_TestDirection = $._decodeInteger;


export const _encode_TestDirection = $._encodeInteger;


/* eslint-enable */

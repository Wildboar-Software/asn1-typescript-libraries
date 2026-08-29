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
 * @summary IntegerDataType
 * @description
 *
 * Well-known test-data patterns for `DataType`. `pn11` and
 * `pn15` comments cite CCITT 0.152 and 0.151 (ITU-T Recs O.152 and
 * O.151). Cor.3 keeps these INTEGER names and withdraws Cor.2's
 * extensibility marker. ITU-T Rec. X.737 (11/95)
 * [A.7](https://www.itu.int/rec/T-REC-X.737-199511-I);
 * Cor.3 (03/01) [https://www.itu.int/rec/T-REC-X.737-200103-I].
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
 * @description
 *
 * All bits on (0).
 * @constant
 * @type {number}
 */
export const IntegerDataType_allBitOn: IntegerDataType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IntegerDataType_allBitOn
 * @description
 *
 * All bits on (0).
 * @constant
 * @type {number}
 */
export const allBitOn: IntegerDataType = IntegerDataType_allBitOn; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IntegerDataType_allBitOff
 * @description
 *
 * All bits off (1).
 * @constant
 * @type {number}
 */
export const IntegerDataType_allBitOff: IntegerDataType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IntegerDataType_allBitOff
 * @description
 *
 * All bits off (1).
 * @constant
 * @type {number}
 */
export const allBitOff: IntegerDataType = IntegerDataType_allBitOff; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IntegerDataType_incrementNumber
 * @description
 *
 * Incrementing values (2).
 * @constant
 * @type {number}
 */
export const IntegerDataType_incrementNumber: IntegerDataType = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IntegerDataType_incrementNumber
 * @description
 *
 * Incrementing values (2).
 * @constant
 * @type {number}
 */
export const incrementNumber: IntegerDataType = IntegerDataType_incrementNumber; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IntegerDataType_pn11
 * @description
 *
 * Named pattern `pn11` (3). A.7 comment: CCITT 0.152.
 * @constant
 * @type {number}
 */
export const IntegerDataType_pn11: IntegerDataType = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IntegerDataType_pn11
 * @description
 *
 * Named pattern `pn11` (3). A.7 comment: CCITT 0.152.
 * @constant
 * @type {number}
 */
export const pn11: IntegerDataType = IntegerDataType_pn11; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IntegerDataType_pn15
 * @description
 *
 * Named pattern `pn15` (4). A.7 comment: CCITT 0.151.
 * @constant
 * @type {number}
 */
export const IntegerDataType_pn15: IntegerDataType = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IntegerDataType_pn15
 * @description
 *
 * Named pattern `pn15` (4). A.7 comment: CCITT 0.151.
 * @constant
 * @type {number}
 */
export const pn15: IntegerDataType = IntegerDataType_pn15; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IntegerDataType_pn20
 * @description
 *
 * Named pattern `pn20` (5). A.7 does not cite a rec.
 * @constant
 * @type {number}
 */
export const IntegerDataType_pn20: IntegerDataType = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IntegerDataType_pn20
 * @description
 *
 * Named pattern `pn20` (5). A.7 does not cite a rec.
 * @constant
 * @type {number}
 */
export const pn20: IntegerDataType = IntegerDataType_pn20; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_IntegerDataType = $._decodeInteger;


export const _encode_IntegerDataType = $._encodeInteger;


/* eslint-enable */

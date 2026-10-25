/* eslint-disable */
import {
    type INTEGER,
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
 * @summary DeliverResult
 * @description
 *
 * Outcome of a software delivery, carried in
 * `deliverResultNotification` and the deliver action reply.
 * Clause 8.4.3 summarizes values as pass, fail, or unknown; A.8
 * distinguishes:
 *
 * - `pass` (0) — delivery completed successfully
 * - `communicationError` (1)
 * - `equipmentError` (2)
 * - `qosError` (3)
 * - `accessDenied` (4)
 * - `notFound` (5)
 * - `insufficientSpace` (6)
 * - `alreadyDelivered` (7)
 * - `inProgress` (8)
 * - `unknown` (9)
 *
 * The rec does not define the named failure codes beyond these
 * identifiers. ITU-T Rec. X.744 (10/96)
 * [§8.4.3](https://www.itu.int/rec/T-REC-X.744-199610-I),
 * A.6.3, A.8.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliverResult  ::=  INTEGER {
 *   pass(0), communicationError(1), equipmentError(2), qosError(3),
 *   accessDenied(4), notFound(5), insufficientSpace(6), alreadyDelivered(7),
 *   inProgress(8), unknown(9)}
 * ```
 */
export type DeliverResult = INTEGER;

/**
 * @summary DeliverResult_pass
 * @description
 *
 * Delivery completed successfully. ITU-T Rec. X.744 (10/96)
 * §8.4.3, A.8.
 * @constant
 * @type {number}
 */
export const DeliverResult_pass: 0 = 0 satisfies DeliverResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliverResult_pass
 * @constant
 * @type {number}
 */
export const pass: 0 = DeliverResult_pass; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliverResult_communicationError
 * @constant
 * @type {number}
 */
export const DeliverResult_communicationError: 1 = 1 satisfies DeliverResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliverResult_communicationError
 * @constant
 * @type {number}
 */
export const communicationError: 1 = DeliverResult_communicationError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliverResult_equipmentError
 * @constant
 * @type {number}
 */
export const DeliverResult_equipmentError: 2 = 2 satisfies DeliverResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliverResult_equipmentError
 * @constant
 * @type {number}
 */
export const equipmentError: 2 = DeliverResult_equipmentError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliverResult_qosError
 * @constant
 * @type {number}
 */
export const DeliverResult_qosError: 3 = 3 satisfies DeliverResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliverResult_qosError
 * @constant
 * @type {number}
 */
export const qosError: 3 = DeliverResult_qosError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliverResult_accessDenied
 * @constant
 * @type {number}
 */
export const DeliverResult_accessDenied: 4 = 4 satisfies DeliverResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliverResult_accessDenied
 * @constant
 * @type {number}
 */
export const accessDenied: 4 = DeliverResult_accessDenied; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliverResult_notFound
 * @constant
 * @type {number}
 */
export const DeliverResult_notFound: 5 = 5 satisfies DeliverResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliverResult_notFound
 * @constant
 * @type {number}
 */
export const notFound: 5 = DeliverResult_notFound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliverResult_insufficientSpace
 * @constant
 * @type {number}
 */
export const DeliverResult_insufficientSpace: 6 = 6 satisfies DeliverResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliverResult_insufficientSpace
 * @constant
 * @type {number}
 */
export const insufficientSpace: 6 = DeliverResult_insufficientSpace; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliverResult_alreadyDelivered
 * @constant
 * @type {number}
 */
export const DeliverResult_alreadyDelivered: 7 = 7 satisfies DeliverResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliverResult_alreadyDelivered
 * @constant
 * @type {number}
 */
export const alreadyDelivered: 7 = DeliverResult_alreadyDelivered; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliverResult_inProgress
 * @constant
 * @type {number}
 */
export const DeliverResult_inProgress: 8 = 8 satisfies DeliverResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliverResult_inProgress
 * @constant
 * @type {number}
 */
export const inProgress: 8 = DeliverResult_inProgress; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliverResult_unknown
 * @description
 *
 * Delivery outcome unknown. ITU-T Rec. X.744 (10/96) §8.4.3, A.8.
 * @constant
 * @type {number}
 */
export const DeliverResult_unknown: 9 = 9 satisfies DeliverResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliverResult_unknown
 * @constant
 * @type {number}
 */
export const unknown: 9 = DeliverResult_unknown; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_DeliverResult: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_DeliverResult: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */

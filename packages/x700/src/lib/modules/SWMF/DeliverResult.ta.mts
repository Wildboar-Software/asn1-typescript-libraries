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
 * @summary DeliverResult
 * @description
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
 * @constant
 * @type {number}
 */
export const DeliverResult_pass: DeliverResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliverResult_pass
 * @constant
 * @type {number}
 */
export const pass: DeliverResult = DeliverResult_pass; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliverResult_communicationError
 * @constant
 * @type {number}
 */
export const DeliverResult_communicationError: DeliverResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliverResult_communicationError
 * @constant
 * @type {number}
 */
export const communicationError: DeliverResult = DeliverResult_communicationError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliverResult_equipmentError
 * @constant
 * @type {number}
 */
export const DeliverResult_equipmentError: DeliverResult = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliverResult_equipmentError
 * @constant
 * @type {number}
 */
export const equipmentError: DeliverResult = DeliverResult_equipmentError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliverResult_qosError
 * @constant
 * @type {number}
 */
export const DeliverResult_qosError: DeliverResult = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliverResult_qosError
 * @constant
 * @type {number}
 */
export const qosError: DeliverResult = DeliverResult_qosError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliverResult_accessDenied
 * @constant
 * @type {number}
 */
export const DeliverResult_accessDenied: DeliverResult = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliverResult_accessDenied
 * @constant
 * @type {number}
 */
export const accessDenied: DeliverResult = DeliverResult_accessDenied; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliverResult_notFound
 * @constant
 * @type {number}
 */
export const DeliverResult_notFound: DeliverResult = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliverResult_notFound
 * @constant
 * @type {number}
 */
export const notFound: DeliverResult = DeliverResult_notFound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliverResult_insufficientSpace
 * @constant
 * @type {number}
 */
export const DeliverResult_insufficientSpace: DeliverResult = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliverResult_insufficientSpace
 * @constant
 * @type {number}
 */
export const insufficientSpace: DeliverResult = DeliverResult_insufficientSpace; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliverResult_alreadyDelivered
 * @constant
 * @type {number}
 */
export const DeliverResult_alreadyDelivered: DeliverResult = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliverResult_alreadyDelivered
 * @constant
 * @type {number}
 */
export const alreadyDelivered: DeliverResult = DeliverResult_alreadyDelivered; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliverResult_inProgress
 * @constant
 * @type {number}
 */
export const DeliverResult_inProgress: DeliverResult = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliverResult_inProgress
 * @constant
 * @type {number}
 */
export const inProgress: DeliverResult = DeliverResult_inProgress; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliverResult_unknown
 * @constant
 * @type {number}
 */
export const DeliverResult_unknown: DeliverResult = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliverResult_unknown
 * @constant
 * @type {number}
 */
export const unknown: DeliverResult = DeliverResult_unknown; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_DeliverResult = $._decodeInteger;


export const _encode_DeliverResult = $._encodeInteger;


/* eslint-enable */

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
 * @summary Status
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Status  ::=  INTEGER {
 *   operatingWithinNominals(0), replyTimeout(1), badReplyFormat(2),
 *   hardwareSoftwareFault(3), propagationFailure(4), badDateFormatOrValue(5),
 *   badTimeFormatOrValue(6)}
 * ```
 */
export type Status = INTEGER;

/**
 * @summary Status_operatingWithinNominals
 * @constant
 * @type {number}
 */
export const Status_operatingWithinNominals: Status = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Status_operatingWithinNominals
 * @constant
 * @type {number}
 */
export const operatingWithinNominals: Status = Status_operatingWithinNominals; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Status_replyTimeout
 * @constant
 * @type {number}
 */
export const Status_replyTimeout: Status = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Status_replyTimeout
 * @constant
 * @type {number}
 */
export const replyTimeout: Status = Status_replyTimeout; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Status_badReplyFormat
 * @constant
 * @type {number}
 */
export const Status_badReplyFormat: Status = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Status_badReplyFormat
 * @constant
 * @type {number}
 */
export const badReplyFormat: Status = Status_badReplyFormat; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Status_hardwareSoftwareFault
 * @constant
 * @type {number}
 */
export const Status_hardwareSoftwareFault: Status = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Status_hardwareSoftwareFault
 * @constant
 * @type {number}
 */
export const hardwareSoftwareFault: Status = Status_hardwareSoftwareFault; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Status_propagationFailure
 * @constant
 * @type {number}
 */
export const Status_propagationFailure: Status = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Status_propagationFailure
 * @constant
 * @type {number}
 */
export const propagationFailure: Status = Status_propagationFailure; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Status_badDateFormatOrValue
 * @constant
 * @type {number}
 */
export const Status_badDateFormatOrValue: Status = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Status_badDateFormatOrValue
 * @constant
 * @type {number}
 */
export const badDateFormatOrValue: Status = Status_badDateFormatOrValue; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Status_badTimeFormatOrValue
 * @constant
 * @type {number}
 */
export const Status_badTimeFormatOrValue: Status = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Status_badTimeFormatOrValue
 * @constant
 * @type {number}
 */
export const badTimeFormatOrValue: Status = Status_badTimeFormatOrValue; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_Status = $._decodeInteger;


export const _encode_Status = $._encodeInteger;


/* eslint-enable */

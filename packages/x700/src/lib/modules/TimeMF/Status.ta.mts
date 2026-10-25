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
 * @summary Status
 * @description
 *
 * Current status of the clock. Syntax of `clockStatus`. A
 * state attribute: a change, like a change of
 * `operationalState`, causes a `stateChange` notification.
 * Named values (A.5): `operatingWithinNominals` (0),
 * `replyTimeout` (1), `badReplyFormat` (2),
 * `hardwareSoftwareFault` (3), `propagationFailure` (4),
 * `badDateFormatOrValue` (5), `badTimeFormatOrValue` (6).
 * The rec does not further define those names. ITU-T Rec. X.743 (06/98)
 * [§8.3.10](https://www.itu.int/rec/T-REC-X.743-199806-I), §8.2.1, A.2.10.
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
export const Status_operatingWithinNominals: 0 = 0 satisfies Status; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Status_operatingWithinNominals
 * @constant
 * @type {number}
 */
export const operatingWithinNominals: 0 = Status_operatingWithinNominals; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Status_replyTimeout
 * @constant
 * @type {number}
 */
export const Status_replyTimeout: 1 = 1 satisfies Status; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Status_replyTimeout
 * @constant
 * @type {number}
 */
export const replyTimeout: 1 = Status_replyTimeout; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Status_badReplyFormat
 * @constant
 * @type {number}
 */
export const Status_badReplyFormat: 2 = 2 satisfies Status; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Status_badReplyFormat
 * @constant
 * @type {number}
 */
export const badReplyFormat: 2 = Status_badReplyFormat; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Status_hardwareSoftwareFault
 * @constant
 * @type {number}
 */
export const Status_hardwareSoftwareFault: 3 = 3 satisfies Status; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Status_hardwareSoftwareFault
 * @constant
 * @type {number}
 */
export const hardwareSoftwareFault: 3 = Status_hardwareSoftwareFault; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Status_propagationFailure
 * @constant
 * @type {number}
 */
export const Status_propagationFailure: 4 = 4 satisfies Status; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Status_propagationFailure
 * @constant
 * @type {number}
 */
export const propagationFailure: 4 = Status_propagationFailure; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Status_badDateFormatOrValue
 * @constant
 * @type {number}
 */
export const Status_badDateFormatOrValue: 5 = 5 satisfies Status; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Status_badDateFormatOrValue
 * @constant
 * @type {number}
 */
export const badDateFormatOrValue: 5 = Status_badDateFormatOrValue; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Status_badTimeFormatOrValue
 * @constant
 * @type {number}
 */
export const Status_badTimeFormatOrValue: 6 = 6 satisfies Status; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Status_badTimeFormatOrValue
 * @constant
 * @type {number}
 */
export const badTimeFormatOrValue: 6 = Status_badTimeFormatOrValue; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_Status: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_Status: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */

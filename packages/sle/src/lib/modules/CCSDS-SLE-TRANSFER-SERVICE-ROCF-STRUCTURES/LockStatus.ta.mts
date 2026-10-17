/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LockStatus
 * @description
 * 
 * Lock state of a demodulation or synchronization process. Subcarrier
 * demodulation uses in-lock, out-of-lock, not in use, and unknown. Carrier
 * demodulation, symbol synchronization, and frame synchronization use
 * in-lock, out-of-lock, and unknown. Reported lock is typically integrated
 * over a measurement period and can lag the notification.
 *
 * CCSDS 911.5-B-4, sections 3.7.2.4.2 and 3.9.2.5 through 3.9.2.8.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LockStatus               ::=    INTEGER
 * {  inLock                        (0)
 * ,  outOfLock                     (1)
 * ,  notInUse                      (2)
 * ,  unknown                       (3)
 * }
 * ```
 */
export
type LockStatus = INTEGER;

/**
 * @summary LockStatus_inLock
 * @description
 * 
 * The demodulation or synchronization process is in lock. CCSDS 911.5-B-4,
 * sections 3.7.2.4.2 and 3.9.2.
 * @constant
 * @type {number}
 */
export
const LockStatus_inLock: LockStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LockStatus_inLock
 * @description
 * 
 * The process is in lock (CCSDS 911.5-B-4, sections 3.7.2.4.2 and 3.9.2).
 * @constant
 * @type {number}
 */
export
const inLock: LockStatus = LockStatus_inLock; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LockStatus_outOfLock
 * @description
 * 
 * The demodulation or synchronization process is out of lock. CCSDS 911.5-B-4,
 * sections 3.7.2.4.2 and 3.9.2.
 * @constant
 * @type {number}
 */
export
const LockStatus_outOfLock: LockStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LockStatus_outOfLock
 * @description
 * 
 * The process is out of lock (CCSDS 911.5-B-4, sections 3.7.2.4.2 and 3.9.2).
 * @constant
 * @type {number}
 */
export
const outOfLock: LockStatus = LockStatus_outOfLock; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LockStatus_notInUse
 * @description
 * 
 * Subcarrier demodulation is not in use. Carrier, symbol, and frame-sync
 * status omit this value. CCSDS 911.5-B-4, sections 3.7.2.4.2 and 3.9.2.7.
 * @constant
 * @type {number}
 */
export
const LockStatus_notInUse: LockStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LockStatus_notInUse
 * @description
 * 
 * Subcarrier demodulation is not in use (CCSDS 911.5-B-4, section 3.9.2.7).
 * @constant
 * @type {number}
 */
export
const notInUse: LockStatus = LockStatus_notInUse; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LockStatus_unknown
 * @description
 * 
 * Permitted lock status in sections 3.7.2.4.2 and 3.9.2.5 through 3.9.2.8.
 * CCSDS 911.5-B-4 does not further define when unknown is reported.
 * @constant
 * @type {number}
 */
export
const LockStatus_unknown: LockStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LockStatus_unknown
 * @description
 * 
 * CCSDS 911.5-B-4 lists unknown as a lock status and does not further define
 * when it is reported (sections 3.7.2.4.2 and 3.9.2).
 * @constant
 * @type {number}
 */
export
const unknown: LockStatus = LockStatus_unknown; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_LockStatus: $.ASN1Decoder<LockStatus> = $._decodeInteger;
export const _encode_LockStatus: $.ASN1Encoder<LockStatus> = $._encodeInteger;


/* eslint-enable */

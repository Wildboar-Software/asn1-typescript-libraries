/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LockStatus
 * @description
 *
 * Lock of a demodulation or synchronization process reported with a
 * loss-of-frame-sync notification or a status report. Carrier, frame-sync, and
 * symbol-sync reports use the subset that excludes notInUse. Subcarrier status
 * on the loss-of-frame-sync notification uses the full set.
 *
 * CCSDS 911.2-B-4, sections 3.7.2.4.2 and 3.9.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LockStatus                     ::=  INTEGER
 * {   inLock                            (0)
 * ,   outOfLock                         (1)
 * ,   notInUse                          (2)
 * ,   unknown                           (3)
 * }
 * ```
 */
export
type LockStatus = INTEGER;

/**
 * @summary LockStatus_inLock
 * @description
 *
 * The reported process is in lock.
 *
 * CCSDS 911.2-B-4, sections 3.7.2.4.2 and 3.9.2.
 * @constant
 * @type {number}
 */
export
const LockStatus_inLock: LockStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LockStatus_inLock
 * @description
 *
 * The reported process is in lock (CCSDS 911.2-B-4, sections 3.7.2.4.2 and
 * 3.9.2).
 * @constant
 * @type {number}
 */
export
const inLock: LockStatus = LockStatus_inLock; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LockStatus_outOfLock
 * @description
 *
 * The reported process is out of lock. A frame-synchronizer transition from in
 * lock to out of lock is what causes a loss-of-frame-sync notification.
 *
 * CCSDS 911.2-B-4, sections 3.7.2.3 and 3.9.2.
 * @constant
 * @type {number}
 */
export
const LockStatus_outOfLock: LockStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LockStatus_outOfLock
 * @description
 *
 * The reported process is out of lock (CCSDS 911.2-B-4, sections 3.7.2.3 and
 * 3.9.2).
 * @constant
 * @type {number}
 */
export
const outOfLock: LockStatus = LockStatus_outOfLock; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LockStatus_notInUse
 * @description
 *
 * Subcarrier demodulation is not in use, on a loss-of-frame-sync notification.
 * Section 3.9.2.7 also uses the words 'not in use' for carrier demodulation on
 * a status report, while CarrierLockStatus has no such code. CCSDS 911.2-B-4
 * does not reconcile that wording with Annex A.
 *
 * CCSDS 911.2-B-4, sections 3.7.2.4.2 and 3.9.2.7.
 * @constant
 * @type {number}
 */
export
const LockStatus_notInUse: LockStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LockStatus_notInUse
 * @description
 *
 * Subcarrier demodulation is not in use (CCSDS 911.2-B-4, section 3.7.2.4.2).
 * @constant
 * @type {number}
 */
export
const notInUse: LockStatus = LockStatus_notInUse; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LockStatus_unknown
 * @description
 *
 * The book lists 'unknown' for carrier, subcarrier, symbol, and frame-sync
 * status. It does not define the condition that selects this code.
 *
 * CCSDS 911.2-B-4, sections 3.7.2.4.2 and 3.9.2.
 * @constant
 * @type {number}
 */
export
const LockStatus_unknown: LockStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LockStatus_unknown
 * @description
 *
 * CCSDS 911.2-B-4 lists this lock status and does not define when it is
 * selected (sections 3.7.2.4.2 and 3.9.2).
 * @constant
 * @type {number}
 */
export
const unknown: LockStatus = LockStatus_unknown; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_LockStatus: $.ASN1Decoder<LockStatus> = $._decodeInteger;
export const _encode_LockStatus: $.ASN1Encoder<LockStatus> = $._encodeInteger;


/* eslint-enable */

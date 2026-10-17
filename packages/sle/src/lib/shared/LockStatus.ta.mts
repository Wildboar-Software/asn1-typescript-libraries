/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LockStatus
 * @description
 * 
 * Lock vocabulary shared by carrier demodulation, subcarrier demodulation,
 * symbol synchronization, and frame synchronization. Carrier, frame-sync, and
 * symbol-sync reports use the subtypes that omit `notInUse`. Subcarrier
 * demodulation uses the full set, including `notInUse`. RAF, RCF, and ROCF
 * use the same names and numbers.
 * 
 * CCSDS 911.1-B-5, 911.2-B-4, and 911.5-B-4, sections 3.7.2.4.2 and 3.9.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LockStatus                    ::=  INTEGER
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
 * The named demodulation or synchronization process is locked.
 * 
 * CCSDS 911.1-B-5, sections 3.7.2.4.2 and 3.9.2.
 * @constant
 * @type {number}
 */
export
const LockStatus_inLock: LockStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LockStatus_inLock
 * @description
 * 
 * The named process is locked (CCSDS 911.1-B-5, sections 3.7.2.4.2 and 3.9.2).
 * @constant
 * @type {number}
 */
export
const inLock: LockStatus = LockStatus_inLock; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LockStatus_outOfLock
 * @description
 * 
 * The named process is out of lock. For the frame synchronizer, a transition
 * from in-lock to out-of-lock during a lock-status observation period causes
 * one `lossFrameSync` notification. The provider documents the length of that
 * period. The return to in-lock has no separate notification; the next
 * transfer-data invocation indicates it.
 * 
 * CCSDS 911.1-B-5, sections 3.7.2.3 and 3.9.2.
 * @constant
 * @type {number}
 */
export
const LockStatus_outOfLock: LockStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LockStatus_outOfLock
 * @description
 * 
 * The named process is out of lock (CCSDS 911.1-B-5, sections 3.7.2.3 and
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
 * Subcarrier demodulation is not in use. Carrier, frame-sync, and symbol-sync
 * reports exclude this value.
 * 
 * CCSDS 911.1-B-5, sections 3.7.2.4.2 and 3.9.2.7.
 * @constant
 * @type {number}
 */
export
const LockStatus_notInUse: LockStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LockStatus_notInUse
 * @description
 * 
 * Subcarrier demodulation is not in use (CCSDS 911.1-B-5, sections 3.7.2.4.2
 * and 3.9.2.7).
 * @constant
 * @type {number}
 */
export
const notInUse: LockStatus = LockStatus_notInUse; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LockStatus_unknown
 * @description
 * 
 * The lock status is reported as unknown. Sections 3.7.2.4.2 and 3.9.2.5 to
 * 3.9.2.8 name this value and do not further define how the provider determines
 * it.
 * 
 * CCSDS 911.1-B-5, sections 3.7.2.4.2 and 3.9.2.
 * @constant
 * @type {number}
 */
export
const LockStatus_unknown: LockStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LockStatus_unknown
 * @description
 * 
 * Lock status unknown; sections 3.7.2.4.2 and 3.9.2 do not further define it
 * (CCSDS 911.1-B-5).
 * @constant
 * @type {number}
 */
export
const unknown: LockStatus = LockStatus_unknown; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_LockStatus: $.ASN1Decoder<LockStatus> = $._decodeInteger;
export const _encode_LockStatus: $.ASN1Encoder<LockStatus> = $._encodeInteger;


/* eslint-enable */

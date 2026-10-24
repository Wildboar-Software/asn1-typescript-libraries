/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticCltuTransferData_specific
 * @description
 * 
 * FCLTU-specific negative result for CLTU-TRANSFER-DATA. The provider should
 * report the first failure in the order given in section 3.6.2.13, after
 * duplicate invoke id. other reason is the common alternative. CCSDS 912.1-B-5,
 * sections 3.6.2.13 and 3.1.3.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticCltuTransferData-specific ::= INTEGER
 *    {  unableToProcess                  (0)
 *    ,  unableToStore                    (1)
 *    ,  outOfSequence                    (2)
 *    ,  inconsistentTimeRange            (3)
 *    ,  invalidTime                      (4)
 *    ,  lateSldu                         (5)
 *    ,  invalidDelayTime                 (6)
 *    ,  cltuError                        (7)
 *    }
 * ```
 */
export
type DiagnosticCltuTransferData_specific = INTEGER;

/**
 * @summary DiagnosticCltuTransferData_specific_unableToProcess
 * @description
 *
 * The provider will not process CLTUs. Causes, in the order listed:
 * production-status is halted; production-status is interrupted and the user
 * has already been sent production interrupted; production is operational again
 * but the user has not cleared an earlier production interrupted notification;
 * production is operational but the user has not cleared an sldu expired
 * notification; or production is briefly suspended to process a
 * CLTU-THROW-EVENT, with no fault notification. In deferred notification mode
 * the provider may keep accepting CLTUs until it has actually notified the
 * interruption. CCSDS 912.1-B-5, section 3.6.2.13.
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuTransferData_specific_unableToProcess: DiagnosticCltuTransferData_specific = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_unableToProcess
 * @description
 *
 * The provider is blocked and will not accept this CLTU (CCSDS 912.1-B-5,
 * section 3.6.2.13).
 * @constant
 * @type {number}
 */
export
const unableToProcess: DiagnosticCltuTransferData_specific = DiagnosticCltuTransferData_specific_unableToProcess; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_unableToStore
 * @description
 *
 * The remaining buffer cannot hold this CLTU. CCSDS 912.1-B-5, section
 * 3.6.2.13.
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuTransferData_specific_unableToStore: DiagnosticCltuTransferData_specific = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_unableToStore
 * @description
 *
 * Not enough buffer space remains for this CLTU (CCSDS 912.1-B-5, section
 * 3.6.2.13).
 * @constant
 * @type {number}
 */
export
const unableToStore: DiagnosticCltuTransferData_specific = DiagnosticCltuTransferData_specific_unableToStore; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_outOfSequence
 * @description
 *
 * cltu-identification is not the value the provider expects: the START
 * first-cltu-identification for the first CLTU, otherwise the value from the
 * latest positive CLTU-TRANSFER-DATA return. CCSDS 912.1-B-5, section 3.6.2.13.
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuTransferData_specific_outOfSequence: DiagnosticCltuTransferData_specific = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_outOfSequence
 * @description
 *
 * cltu-identification is not the next value the provider expects (CCSDS
 * 912.1-B-5, section 3.6.2.13).
 * @constant
 * @type {number}
 */
export
const outOfSequence: DiagnosticCltuTransferData_specific = DiagnosticCltuTransferData_specific_outOfSequence; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_inconsistentTimeRange
 * @description
 *
 * earliest-radiation-time is later than latest-radiation-time. CCSDS 912.1-B-5,
 * section 3.6.2.13.
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuTransferData_specific_inconsistentTimeRange: DiagnosticCltuTransferData_specific = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_inconsistentTimeRange
 * @description
 *
 * earliest-radiation-time is later than latest-radiation-time (CCSDS 912.1-B-5,
 * section 3.6.2.13).
 * @constant
 * @type {number}
 */
export
const inconsistentTimeRange: DiagnosticCltuTransferData_specific = DiagnosticCltuTransferData_specific_inconsistentTimeRange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_invalidTime
 * @description
 *
 * The radiation window does not overlap the scheduled production period, or it
 * does not overlap the service instance provision period. Production may be
 * scheduled to end before the provision period so the complex can move to
 * another mission while the user still retrieves a final status report. CCSDS
 * 912.1-B-5, section 3.6.2.13.
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuTransferData_specific_invalidTime: DiagnosticCltuTransferData_specific = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_invalidTime
 * @description
 *
 * The radiation window misses the scheduled production period or the provision
 * period (CCSDS 912.1-B-5, section 3.6.2.13).
 * @constant
 * @type {number}
 */
export
const invalidTime: DiagnosticCltuTransferData_specific = DiagnosticCltuTransferData_specific_invalidTime; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_lateSldu
 * @description
 *
 * latest-radiation-time is earlier than the time the provider received this
 * invocation. CCSDS 912.1-B-5, section 3.6.2.13.
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuTransferData_specific_lateSldu: DiagnosticCltuTransferData_specific = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_lateSldu
 * @description
 *
 * latest-radiation-time is already past when the invocation arrives (CCSDS
 * 912.1-B-5, section 3.6.2.13).
 * @constant
 * @type {number}
 */
export
const lateSldu: DiagnosticCltuTransferData_specific = DiagnosticCltuTransferData_specific_lateSldu; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_invalidDelayTime
 * @description
 *
 * delay-time is less than the minimum-delay-time set by service management.
 * CCSDS 912.1-B-5, section 3.6.2.13.
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuTransferData_specific_invalidDelayTime: DiagnosticCltuTransferData_specific = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_invalidDelayTime
 * @description
 *
 * delay-time is below minimum-delay-time (CCSDS 912.1-B-5, section 3.6.2.13).
 * @constant
 * @type {number}
 */
export
const invalidDelayTime: DiagnosticCltuTransferData_specific = DiagnosticCltuTransferData_specific_invalidDelayTime; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_cltuError
 * @description
 *
 * The provider applied the error checks in the service agreement and found the
 * CLTU in error. One example is a CLTU longer than the maximum size for this
 * service instance. CCSDS 912.1-B-5, section 3.6.2.13.
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuTransferData_specific_cltuError: DiagnosticCltuTransferData_specific = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_cltuError
 * @description
 *
 * The CLTU failed a service-agreement check, such as maximum length (CCSDS
 * 912.1-B-5, section 3.6.2.13).
 * @constant
 * @type {number}
 */
export
const cltuError: DiagnosticCltuTransferData_specific = DiagnosticCltuTransferData_specific_cltuError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagnosticCltuTransferData_specific: $.ASN1Decoder<DiagnosticCltuTransferData_specific> = $._decodeInteger;
export const _encode_DiagnosticCltuTransferData_specific: $.ASN1Encoder<DiagnosticCltuTransferData_specific> = $._encodeInteger;


/* eslint-enable */

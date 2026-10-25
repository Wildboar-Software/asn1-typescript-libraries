/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticRocfStart_specific
 * @description
 * 
 * ROCF-START diagnostics that are particular to this service. Present when the
 * START return is a negative result and the cause is one of section 3.4.2.12
 * items b through j. duplicateInvokeId and otherReason are carried on the
 * common alternative of DiagnosticRocfStart.
 *
 * CCSDS 911.5-B-4, section 3.4.2.12.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticRocfStart-specific ::= INTEGER
 *    {  outOfService            (0)
 *    ,  unableToComply          (1)
 *    ,  invalidStartTime        (2)
 *    ,  invalidStopTime         (3)
 *    ,  missingTimeValue        (4)
 *    ,  invalidGvcid            (5)
 *    ,  invalidControlWordType  (6)
 *    ,  invalidTcVcid           (7)
 *    ,  invalidUpdateMode       (8)
 *    }
 * ```
 */
export
type DiagnosticRocfStart_specific = INTEGER;

/**
 * @summary DiagnosticRocfStart_specific_outOfService
 * @description
 * 
 * Production status is halted: management has taken the provider out of
 * service for an indefinite period. Annex B also rejects ROCF-BIND with this
 * diagnostic while halted. While production is interrupted, ROCF-START is
 * accepted and no frames are sent until production is running again. CCSDS
 * 911.5-B-4, sections 3.4.2.12 and B2.
 * @constant
 * @type {number}
 */
export
const DiagnosticRocfStart_specific_outOfService: 0 = 0 satisfies DiagnosticRocfStart_specific; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRocfStart_specific_outOfService
 * @description
 * 
 * START was rejected because production status is halted (CCSDS 911.5-B-4,
 * section 3.4.2.12).
 * @constant
 * @type {number}
 */
export
const outOfService: 0 = DiagnosticRocfStart_specific_outOfService; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRocfStart_specific_unableToComply
 * @description
 * 
 * The provider cannot transfer data because of a fault. The user may invoke
 * ROCF-START again later in the provision period. If management decides the
 * fault is more than transient, the provider may invoke ROCF-PEER-ABORT. CCSDS
 * 911.5-B-4, sections 3.4.2.12 and 3.4.3.2.
 * @constant
 * @type {number}
 */
export
const DiagnosticRocfStart_specific_unableToComply: 1 = 1 satisfies DiagnosticRocfStart_specific; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRocfStart_specific_unableToComply
 * @description
 * 
 * START was rejected because a fault prevents the provider from transferring
 * data (CCSDS 911.5-B-4, section 3.4.2.12).
 * @constant
 * @type {number}
 */
export
const unableToComply: 1 = DiagnosticRocfStart_specific_unableToComply; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRocfStart_specific_invalidStartTime
 * @description
 * 
 * start-time failed the rules in section 3.4.2.5: online, it must fall inside
 * the provision period and be earlier than stop-time. CCSDS 911.5-B-4, section
 * 3.4.2.12.
 * @constant
 * @type {number}
 */
export
const DiagnosticRocfStart_specific_invalidStartTime: 2 = 2 satisfies DiagnosticRocfStart_specific; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRocfStart_specific_invalidStartTime
 * @description
 * 
 * START was rejected because start-time is not valid (CCSDS 911.5-B-4, section
 * 3.4.2.12).
 * @constant
 * @type {number}
 */
export
const invalidStartTime: 2 = DiagnosticRocfStart_specific_invalidStartTime; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRocfStart_specific_invalidStopTime
 * @description
 * 
 * stop-time failed the rules in section 3.4.2.6: it must be later than
 * start-time; online, a specified stop must be earlier than or equal to the
 * end of the provision period; offline, stop-time plus the offline processing
 * latency must be earlier than the current time. CCSDS 911.5-B-4, section
 * 3.4.2.12.
 * @constant
 * @type {number}
 */
export
const DiagnosticRocfStart_specific_invalidStopTime: 3 = 3 satisfies DiagnosticRocfStart_specific; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRocfStart_specific_invalidStopTime
 * @description
 * 
 * START was rejected because stop-time is not valid (CCSDS 911.5-B-4, section
 * 3.4.2.12).
 * @constant
 * @type {number}
 */
export
const invalidStopTime: 3 = DiagnosticRocfStart_specific_invalidStopTime; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRocfStart_specific_missingTimeValue
 * @description
 * 
 * The instance is offline and start-time, stop-time, or both were null.
 * Offline START requires both times. CCSDS 911.5-B-4, sections 3.4.2.5.5,
 * 3.4.2.6.5, and 3.4.2.12.
 * @constant
 * @type {number}
 */
export
const DiagnosticRocfStart_specific_missingTimeValue: 4 = 4 satisfies DiagnosticRocfStart_specific; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRocfStart_specific_missingTimeValue
 * @description
 * 
 * Offline START was rejected because a start or stop time was null (CCSDS
 * 911.5-B-4, section 3.4.2.12).
 * @constant
 * @type {number}
 */
export
const missingTimeValue: 4 = DiagnosticRocfStart_specific_missingTimeValue; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRocfStart_specific_invalidGvcid
 * @description
 * 
 * requested-global-VCID is not in the set service management permits for this
 * instance. CCSDS 911.5-B-4, section 3.4.2.12.
 * @constant
 * @type {number}
 */
export
const DiagnosticRocfStart_specific_invalidGvcid: 5 = 5 satisfies DiagnosticRocfStart_specific; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRocfStart_specific_invalidGvcid
 * @description
 * 
 * START was rejected because the requested global VCID is outside the
 * permitted set (CCSDS 911.5-B-4, section 3.4.2.12).
 * @constant
 * @type {number}
 */
export
const invalidGvcid: 5 = DiagnosticRocfStart_specific_invalidGvcid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRocfStart_specific_invalidControlWordType
 * @description
 * 
 * control-word-type is not valid. Section 3.1.3.2 treats a value outside the
 * set service management permits as invalid. CCSDS 911.5-B-4, sections 3.1.3.2
 * and 3.4.2.12.
 * @constant
 * @type {number}
 */
export
const DiagnosticRocfStart_specific_invalidControlWordType: 6 = 6 satisfies DiagnosticRocfStart_specific; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRocfStart_specific_invalidControlWordType
 * @description
 * 
 * START was rejected because the control word type is not valid (CCSDS
 * 911.5-B-4, section 3.4.2.12).
 * @constant
 * @type {number}
 */
export
const invalidControlWordType: 6 = DiagnosticRocfStart_specific_invalidControlWordType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRocfStart_specific_invalidTcVcid
 * @description
 * 
 * tc-vcid is not valid. The parameter is present when control-word-type is
 * clcw. Section 3.1.3.2 treats a value outside the permitted telecommand-VC
 * set as invalid. CCSDS 911.5-B-4, sections 3.1.3.2, 3.4.2.9, and 3.4.2.12.
 * @constant
 * @type {number}
 */
export
const DiagnosticRocfStart_specific_invalidTcVcid: 7 = 7 satisfies DiagnosticRocfStart_specific; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRocfStart_specific_invalidTcVcid
 * @description
 * 
 * START was rejected because the telecommand VC is not valid (CCSDS 911.5-B-4,
 * section 3.4.2.12).
 * @constant
 * @type {number}
 */
export
const invalidTcVcid: 7 = DiagnosticRocfStart_specific_invalidTcVcid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRocfStart_specific_invalidUpdateMode
 * @description
 * 
 * update-mode is not in the set service management permits for this instance.
 * CCSDS 911.5-B-4, section 3.4.2.12.
 * @constant
 * @type {number}
 */
export
const DiagnosticRocfStart_specific_invalidUpdateMode: 8 = 8 satisfies DiagnosticRocfStart_specific; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRocfStart_specific_invalidUpdateMode
 * @description
 * 
 * START was rejected because the update mode is outside the permitted set
 * (CCSDS 911.5-B-4, section 3.4.2.12).
 * @constant
 * @type {number}
 */
export
const invalidUpdateMode: 8 = DiagnosticRocfStart_specific_invalidUpdateMode; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagnosticRocfStart_specific: $.ASN1Decoder<DiagnosticRocfStart_specific> = $._decodeInteger;
export const _encode_DiagnosticRocfStart_specific: $.ASN1Encoder<DiagnosticRocfStart_specific> = $._encodeInteger;


/* eslint-enable */

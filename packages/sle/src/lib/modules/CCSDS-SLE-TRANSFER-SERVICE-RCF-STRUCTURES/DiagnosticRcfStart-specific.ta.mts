/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticRcfStart_specific
 * @description
 *
 * RCF-START diagnostics that are particular to this service. The shared
 * diagnostics duplicate Invoke-ID and other reason are the common alternative
 * of DiagnosticRcfStart.
 *
 * CCSDS 911.2-B-4, section 3.4.2.9.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticRcfStart-specific ::= INTEGER
 *     {   outOfService                          (0)
 *     ,   unableToComply                        (1)
 *     ,   invalidStartTime                      (2)
 *     ,   invalidStopTime                       (3)
 *     ,   missingTimeValue                      (4)
 *     ,   invalidGvcid                          (5)
 *     }
 * ```
 */
export
type DiagnosticRcfStart_specific = INTEGER;

/**
 * @summary DiagnosticRcfStart_specific_outOfService
 * @description
 *
 * The provider has been taken out of service for an indefinite period by
 * management action, and production status is halted. Annex B also rejects
 * RCF-BIND with out of service while halted.
 *
 * CCSDS 911.2-B-4, section 3.4.2.9 and annex B.
 * @constant
 * @type {number}
 */
export
const DiagnosticRcfStart_specific_outOfService: DiagnosticRcfStart_specific = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRcfStart_specific_outOfService
 * @description
 *
 * Production is halted by management action (CCSDS 911.2-B-4, section
 * 3.4.2.9).
 * @constant
 * @type {number}
 */
export
const outOfService: DiagnosticRcfStart_specific = DiagnosticRcfStart_specific_outOfService; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRcfStart_specific_unableToComply
 * @description
 *
 * A fault prevents the provider from transferring data now. The user may retry
 * RCF-START later in the service instance provision period. If management
 * decides the fault is more than transient, the provider may invoke
 * RCF-PEER-ABORT.
 *
 * CCSDS 911.2-B-4, sections 3.4.2.9 and 3.4.3.2.
 * @constant
 * @type {number}
 */
export
const DiagnosticRcfStart_specific_unableToComply: DiagnosticRcfStart_specific = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRcfStart_specific_unableToComply
 * @description
 *
 * A fault prevents transfer at this time (CCSDS 911.2-B-4, section 3.4.2.9).
 * @constant
 * @type {number}
 */
export
const unableToComply: DiagnosticRcfStart_specific = DiagnosticRcfStart_specific_unableToComply; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRcfStart_specific_invalidStartTime
 * @description
 *
 * start-time is outside the service instance provision period, is not earlier
 * than stop-time, or otherwise fails the start-time checks. In an online mode
 * a known start time must lie in the provision period.
 *
 * CCSDS 911.2-B-4, sections 3.4.2.9 and 3.4.2.5.
 * @constant
 * @type {number}
 */
export
const DiagnosticRcfStart_specific_invalidStartTime: DiagnosticRcfStart_specific = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRcfStart_specific_invalidStartTime
 * @description
 *
 * start-time fails the checks in section 3.4.2.5 (CCSDS 911.2-B-4, section
 * 3.4.2.9).
 * @constant
 * @type {number}
 */
export
const invalidStartTime: DiagnosticRcfStart_specific = DiagnosticRcfStart_specific_invalidStartTime; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRcfStart_specific_invalidStopTime
 * @description
 *
 * stop-time is not later than start-time, an online stop time is later than
 * the end of the service instance provision period, or an offline stop time
 * plus the offline processing latency is not earlier than the current time.
 *
 * CCSDS 911.2-B-4, sections 3.4.2.9 and 3.4.2.6.
 * @constant
 * @type {number}
 */
export
const DiagnosticRcfStart_specific_invalidStopTime: DiagnosticRcfStart_specific = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRcfStart_specific_invalidStopTime
 * @description
 *
 * stop-time fails the checks in section 3.4.2.6 (CCSDS 911.2-B-4, section
 * 3.4.2.9).
 * @constant
 * @type {number}
 */
export
const invalidStopTime: DiagnosticRcfStart_specific = DiagnosticRcfStart_specific_invalidStopTime; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRcfStart_specific_missingTimeValue
 * @description
 *
 * The instance is in offline delivery mode and start-time, stop-time, or both
 * were null. Both times are required offline.
 *
 * CCSDS 911.2-B-4, sections 3.4.2.9, 3.4.2.5.5, and 3.4.2.6.5.
 * @constant
 * @type {number}
 */
export
const DiagnosticRcfStart_specific_missingTimeValue: DiagnosticRcfStart_specific = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRcfStart_specific_missingTimeValue
 * @description
 *
 * An offline RCF-START omitted start-time or stop-time (CCSDS 911.2-B-4,
 * section 3.4.2.9).
 * @constant
 * @type {number}
 */
export
const missingTimeValue: DiagnosticRcfStart_specific = DiagnosticRcfStart_specific_missingTimeValue; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRcfStart_specific_invalidGvcid
 * @description
 *
 * requested-global-VCID is not a valid Transfer Frame version, spacecraft
 * identifier, and Virtual Channel selection for this instance. A value outside
 * the set permitted by service management is invalid. If the permitted list
 * contains a Master Channel and no Virtual Channels from it, a request for one
 * of those Virtual Channels is invalid.
 *
 * CCSDS 911.2-B-4, sections 3.4.2.9, 3.4.2.7, and 3.1.3.2.
 * @constant
 * @type {number}
 */
export
const DiagnosticRcfStart_specific_invalidGvcid: DiagnosticRcfStart_specific = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRcfStart_specific_invalidGvcid
 * @description
 *
 * The requested global VCID is not valid for this instance (CCSDS 911.2-B-4,
 * section 3.4.2.9).
 * @constant
 * @type {number}
 */
export
const invalidGvcid: DiagnosticRcfStart_specific = DiagnosticRcfStart_specific_invalidGvcid; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagnosticRcfStart_specific: $.ASN1Decoder<DiagnosticRcfStart_specific> = $._decodeInteger;
export const _encode_DiagnosticRcfStart_specific: $.ASN1Encoder<DiagnosticRcfStart_specific> = $._encodeInteger;


/* eslint-enable */

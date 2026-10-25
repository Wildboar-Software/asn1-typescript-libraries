/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticRafStart_specific
 * @description
 * 
 * RAF-specific rejection codes for RAF-START. Duplicate invoke-ID and other
 * reason are carried in the `common` alternative. On `unableToComply` the user
 * may retry within the provision period, and the provider may RAF-PEER-ABORT if
 * the fault is more than transient.
 * 
 * CCSDS 911.1-B-5, sections 3.4.2.9 and 3.4.3.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticRafStart-specific ::= INTEGER
 *     {   outOfService                          (0)
 *     ,   unableToComply                        (1)
 *     ,   invalidStartTime                      (2)
 *     ,   invalidStopTime                       (3)
 *     ,   missingTimeValue                      (4)
 *     }
 * ```
 */
export
type DiagnosticRafStart_specific = INTEGER;

/**
 * @summary DiagnosticRafStart_specific_outOfService
 * @description
 * 
 * RAF-START is rejected because production status is `halted`: management has
 * taken production out of service for an indefinite period. The same condition
 * rejects RAF-BIND.
 * 
 * CCSDS 911.1-B-5, sections 3.4.2.9, 3.7.2.4, and annex B.
 * @constant
 * @type {number}
 */
export
const DiagnosticRafStart_specific_outOfService = 0 satisfies DiagnosticRafStart_specific; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRafStart_specific_outOfService
 * @description
 * 
 * Production status is `halted` (CCSDS 911.1-B-5, section 3.4.2.9).
 * @constant
 * @type {number}
 */
export
const outOfService = DiagnosticRafStart_specific_outOfService satisfies DiagnosticRafStart_specific; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRafStart_specific_unableToComply
 * @description
 * 
 * The provider cannot transfer data because of a fault affecting the provider.
 * The user may invoke RAF-START again later in the provision period.
 * 
 * CCSDS 911.1-B-5, sections 3.4.2.9 and 3.4.3.2.
 * @constant
 * @type {number}
 */
export
const DiagnosticRafStart_specific_unableToComply = 1 satisfies DiagnosticRafStart_specific; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRafStart_specific_unableToComply
 * @description
 * 
 * A provider fault prevents transfer (CCSDS 911.1-B-5, section 3.4.2.9).
 * @constant
 * @type {number}
 */
export
const unableToComply = DiagnosticRafStart_specific_unableToComply satisfies DiagnosticRafStart_specific; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRafStart_specific_invalidStartTime
 * @description
 * 
 * `start-time` fails the validity rules. Online, it must be at or after the
 * provision period start and before the provision period end. It must be
 * earlier than `stop-time`.
 * 
 * CCSDS 911.1-B-5, sections 3.4.2.9 and 3.4.2.5.6.
 * @constant
 * @type {number}
 */
export
const DiagnosticRafStart_specific_invalidStartTime = 2 satisfies DiagnosticRafStart_specific; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRafStart_specific_invalidStartTime
 * @description
 * 
 * `start-time` fails the rules in section 3.4.2.5.6 (CCSDS 911.1-B-5).
 * @constant
 * @type {number}
 */
export
const invalidStartTime = DiagnosticRafStart_specific_invalidStartTime satisfies DiagnosticRafStart_specific; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRafStart_specific_invalidStopTime
 * @description
 * 
 * `stop-time` fails the validity rules. It must be later than `start-time`.
 * Online, a known stop time must be at or before the provision period end.
 * Offline, the stop time plus the offline processing latency must be earlier
 * than the current time.
 * 
 * CCSDS 911.1-B-5, sections 3.4.2.9 and 3.4.2.6.6.
 * @constant
 * @type {number}
 */
export
const DiagnosticRafStart_specific_invalidStopTime = 3 satisfies DiagnosticRafStart_specific; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRafStart_specific_invalidStopTime
 * @description
 * 
 * `stop-time` fails the rules in section 3.4.2.6.6 (CCSDS 911.1-B-5).
 * @constant
 * @type {number}
 */
export
const invalidStopTime = DiagnosticRafStart_specific_invalidStopTime satisfies DiagnosticRafStart_specific; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRafStart_specific_missingTimeValue
 * @description
 * 
 * The delivery mode is offline and `start-time`, `stop-time`, or both was null.
 * Offline RAF-START requires both times.
 * 
 * CCSDS 911.1-B-5, sections 3.4.2.9, 3.4.2.5.5, and 3.4.2.6.5.
 * @constant
 * @type {number}
 */
export
const DiagnosticRafStart_specific_missingTimeValue = 4 satisfies DiagnosticRafStart_specific; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRafStart_specific_missingTimeValue
 * @description
 * 
 * Offline RAF-START was given a null start or stop time (CCSDS 911.1-B-5,
 * section 3.4.2.9).
 * @constant
 * @type {number}
 */
export
const missingTimeValue = DiagnosticRafStart_specific_missingTimeValue satisfies DiagnosticRafStart_specific; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagnosticRafStart_specific: $.ASN1Decoder<DiagnosticRafStart_specific> = $._decodeInteger;
export const _encode_DiagnosticRafStart_specific: $.ASN1Encoder<DiagnosticRafStart_specific> = $._encodeInteger;


/* eslint-enable */

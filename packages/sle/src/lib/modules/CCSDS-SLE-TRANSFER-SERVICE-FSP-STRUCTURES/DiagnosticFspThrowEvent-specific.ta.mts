/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticFspThrowEvent_specific
 * @description
 * 
 * FSP-specific rejection codes for FSP-THROW-EVENT. Duplicate invoke-ID and
 * other reason are carried in the `common` alternative.
 * 
 * CCSDS 912.3-B-3, section 3.11.2.9.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticFspThrowEvent-specific ::= INTEGER
 *    {  operationNotSupported            (0)
 *    ,  eventIdentificationOutOfSequence (1)
 * ,  noSuchEvent                         (2)
 *    }
 * ```
 */
export
type DiagnosticFspThrowEvent_specific = INTEGER;

/**
 * @summary DiagnosticFspThrowEvent_specific_operationNotSupported
 * @description
 * 
 * FSP-THROW-EVENT is not supported by the provider, or it is not enabled for
 * this service instance.
 * 
 * CCSDS 912.3-B-3, section 3.11.2.9.
 * @constant
 * @type {number}
 */
export
const DiagnosticFspThrowEvent_specific_operationNotSupported = 0 satisfies DiagnosticFspThrowEvent_specific; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspThrowEvent_specific_operationNotSupported
 * @description
 * 
 * Throw-event is unsupported or disabled for this instance (CCSDS 912.3-B-3,
 * section 3.11.2.9).
 * @constant
 * @type {number}
 */
export
const operationNotSupported = DiagnosticFspThrowEvent_specific_operationNotSupported satisfies DiagnosticFspThrowEvent_specific; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspThrowEvent_specific_eventIdentificationOutOfSequence
 * @description
 * 
 * The event-invocation identification is not the value the provider expected.
 * Section 3.11.2.9 names this condition `out of sequence`. Annex A names the
 * code `eventIdentificationOutOfSequence`.
 * 
 * CCSDS 912.3-B-3, sections 3.11.2.9 and 3.11.2.7.
 * @constant
 * @type {number}
 */
export
const DiagnosticFspThrowEvent_specific_eventIdentificationOutOfSequence = 1 satisfies DiagnosticFspThrowEvent_specific; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspThrowEvent_specific_eventIdentificationOutOfSequence
 * @description
 * 
 * The event-invocation identification is not the expected value
 * (CCSDS 912.3-B-3, section 3.11.2.9).
 * @constant
 * @type {number}
 */
export
const eventIdentificationOutOfSequence = DiagnosticFspThrowEvent_specific_eventIdentificationOutOfSequence satisfies DiagnosticFspThrowEvent_specific; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspThrowEvent_specific_noSuchEvent
 * @description
 * 
 * The event identifier is not in the set Complex Management recognizes.
 * 
 * CCSDS 912.3-B-3, section 3.11.2.9.
 * @constant
 * @type {number}
 */
export
const DiagnosticFspThrowEvent_specific_noSuchEvent = 2 satisfies DiagnosticFspThrowEvent_specific; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspThrowEvent_specific_noSuchEvent
 * @description
 * 
 * Complex Management does not recognize the event identifier (CCSDS 912.3-B-3,
 * section 3.11.2.9).
 * @constant
 * @type {number}
 */
export
const noSuchEvent = DiagnosticFspThrowEvent_specific_noSuchEvent satisfies DiagnosticFspThrowEvent_specific; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagnosticFspThrowEvent_specific: $.ASN1Decoder<DiagnosticFspThrowEvent_specific> = $._decodeInteger;
export const _encode_DiagnosticFspThrowEvent_specific: $.ASN1Encoder<DiagnosticFspThrowEvent_specific> = $._encodeInteger;


/* eslint-enable */

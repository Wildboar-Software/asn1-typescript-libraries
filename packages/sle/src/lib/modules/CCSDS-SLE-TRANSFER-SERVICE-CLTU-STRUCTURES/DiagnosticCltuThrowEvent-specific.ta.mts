/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticCltuThrowEvent_specific
 * @description
 * 
 * FCLTU-specific negative result for CLTU-THROW-EVENT. The provider should
 * report the first failure in the order given in section 3.11.2.9, after
 * duplicate invoke id. CCSDS 912.1-B-5, sections 3.11.2.9 and 3.1.3.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticCltuThrowEvent-specific ::= INTEGER
 *    {  operationNotSupported            (0)
 *    ,  eventInvocIdOutOfSequence        (1)
 *    ,  noSuchEvent                      (2)
 *    }
 * ```
 */
export
type DiagnosticCltuThrowEvent_specific = INTEGER;

/**
 * @summary DiagnosticCltuThrowEvent_specific_operationNotSupported
 * @description
 *
 * This provider does not support CLTU-THROW-EVENT. The operation is optional
 * (Annex C). CCSDS 912.1-B-5, section 3.11.2.9 and Annex C.
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuThrowEvent_specific_operationNotSupported: DiagnosticCltuThrowEvent_specific = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuThrowEvent_specific_operationNotSupported
 * @description
 *
 * CLTU-THROW-EVENT is not supported by this provider (CCSDS 912.1-B-5, section
 * 3.11.2.9).
 * @constant
 * @type {number}
 */
export
const operationNotSupported: DiagnosticCltuThrowEvent_specific = DiagnosticCltuThrowEvent_specific_operationNotSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuThrowEvent_specific_eventInvocIdOutOfSequence
 * @description
 *
 * event-invocation-identification is not the value the provider expects.
 * Section 3.11.2.9 calls this diagnostic out of sequence. CCSDS 912.1-B-5,
 * sections 3.11.2.5 and 3.11.2.9.
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuThrowEvent_specific_eventInvocIdOutOfSequence: DiagnosticCltuThrowEvent_specific = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuThrowEvent_specific_eventInvocIdOutOfSequence
 * @description
 *
 * event-invocation-identification is not the value expected (CCSDS 912.1-B-5,
 * section 3.11.2.9).
 * @constant
 * @type {number}
 */
export
const eventInvocIdOutOfSequence: DiagnosticCltuThrowEvent_specific = DiagnosticCltuThrowEvent_specific_eventInvocIdOutOfSequence; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuThrowEvent_specific_noSuchEvent
 * @description
 *
 * event-identifier is outside the set SLE Complex Management recognizes for
 * this service instance. CCSDS 912.1-B-5, section 3.11.2.9.
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuThrowEvent_specific_noSuchEvent: DiagnosticCltuThrowEvent_specific = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuThrowEvent_specific_noSuchEvent
 * @description
 *
 * event-identifier is not recognized by Complex Management (CCSDS 912.1-B-5,
 * section 3.11.2.9).
 * @constant
 * @type {number}
 */
export
const noSuchEvent: DiagnosticCltuThrowEvent_specific = DiagnosticCltuThrowEvent_specific_noSuchEvent; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagnosticCltuThrowEvent_specific: $.ASN1Decoder<DiagnosticCltuThrowEvent_specific> = $._decodeInteger;
export const _encode_DiagnosticCltuThrowEvent_specific: $.ASN1Encoder<DiagnosticCltuThrowEvent_specific> = $._encodeInteger;


/* eslint-enable */

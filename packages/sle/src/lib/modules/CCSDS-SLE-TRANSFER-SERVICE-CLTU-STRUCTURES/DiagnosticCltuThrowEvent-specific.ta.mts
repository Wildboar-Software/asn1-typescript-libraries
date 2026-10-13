/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticCltuThrowEvent_specific
 * @description
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
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuThrowEvent_specific_operationNotSupported: DiagnosticCltuThrowEvent_specific = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuThrowEvent_specific_operationNotSupported
 * @constant
 * @type {number}
 */
export
const operationNotSupported: DiagnosticCltuThrowEvent_specific = DiagnosticCltuThrowEvent_specific_operationNotSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuThrowEvent_specific_eventInvocIdOutOfSequence
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuThrowEvent_specific_eventInvocIdOutOfSequence: DiagnosticCltuThrowEvent_specific = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuThrowEvent_specific_eventInvocIdOutOfSequence
 * @constant
 * @type {number}
 */
export
const eventInvocIdOutOfSequence: DiagnosticCltuThrowEvent_specific = DiagnosticCltuThrowEvent_specific_eventInvocIdOutOfSequence; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuThrowEvent_specific_noSuchEvent
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuThrowEvent_specific_noSuchEvent: DiagnosticCltuThrowEvent_specific = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuThrowEvent_specific_noSuchEvent
 * @constant
 * @type {number}
 */
export
const noSuchEvent: DiagnosticCltuThrowEvent_specific = DiagnosticCltuThrowEvent_specific_noSuchEvent; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagnosticCltuThrowEvent_specific: $.ASN1Decoder<DiagnosticCltuThrowEvent_specific> = $._decodeInteger;
export const _encode_DiagnosticCltuThrowEvent_specific: $.ASN1Encoder<DiagnosticCltuThrowEvent_specific> = $._encodeInteger;


/* eslint-enable */

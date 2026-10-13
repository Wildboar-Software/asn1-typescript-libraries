/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticFspThrowEvent_specific
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticFspThrowEvent-specific ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagnosticFspThrowEvent_specific = INTEGER;

/**
 * @summary DiagnosticFspThrowEvent_specific_operationNotSupported
 * @constant
 * @type {number}
 */
export
const DiagnosticFspThrowEvent_specific_operationNotSupported: DiagnosticFspThrowEvent_specific = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspThrowEvent_specific_operationNotSupported
 * @constant
 * @type {number}
 */
export
const operationNotSupported: DiagnosticFspThrowEvent_specific = DiagnosticFspThrowEvent_specific_operationNotSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspThrowEvent_specific_eventIdentificationOutOfSequence
 * @constant
 * @type {number}
 */
export
const DiagnosticFspThrowEvent_specific_eventIdentificationOutOfSequence: DiagnosticFspThrowEvent_specific = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspThrowEvent_specific_eventIdentificationOutOfSequence
 * @constant
 * @type {number}
 */
export
const eventIdentificationOutOfSequence: DiagnosticFspThrowEvent_specific = DiagnosticFspThrowEvent_specific_eventIdentificationOutOfSequence; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspThrowEvent_specific_noSuchEvent
 * @constant
 * @type {number}
 */
export
const DiagnosticFspThrowEvent_specific_noSuchEvent: DiagnosticFspThrowEvent_specific = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspThrowEvent_specific_noSuchEvent
 * @constant
 * @type {number}
 */
export
const noSuchEvent: DiagnosticFspThrowEvent_specific = DiagnosticFspThrowEvent_specific_noSuchEvent; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagnosticFspThrowEvent_specific: $.ASN1Decoder<DiagnosticFspThrowEvent_specific> = $._decodeInteger;
export const _encode_DiagnosticFspThrowEvent_specific: $.ASN1Encoder<DiagnosticFspThrowEvent_specific> = $._encodeInteger;


/* eslint-enable */

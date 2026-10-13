/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticCltuTransferData_specific
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticCltuTransferData-specific ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagnosticCltuTransferData_specific = INTEGER;

/**
 * @summary DiagnosticCltuTransferData_specific_unableToProcess
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuTransferData_specific_unableToProcess: DiagnosticCltuTransferData_specific = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_unableToProcess
 * @constant
 * @type {number}
 */
export
const unableToProcess: DiagnosticCltuTransferData_specific = DiagnosticCltuTransferData_specific_unableToProcess; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_unableToStore
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuTransferData_specific_unableToStore: DiagnosticCltuTransferData_specific = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_unableToStore
 * @constant
 * @type {number}
 */
export
const unableToStore: DiagnosticCltuTransferData_specific = DiagnosticCltuTransferData_specific_unableToStore; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_outOfSequence
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuTransferData_specific_outOfSequence: DiagnosticCltuTransferData_specific = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_outOfSequence
 * @constant
 * @type {number}
 */
export
const outOfSequence: DiagnosticCltuTransferData_specific = DiagnosticCltuTransferData_specific_outOfSequence; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_inconsistentTimeRange
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuTransferData_specific_inconsistentTimeRange: DiagnosticCltuTransferData_specific = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_inconsistentTimeRange
 * @constant
 * @type {number}
 */
export
const inconsistentTimeRange: DiagnosticCltuTransferData_specific = DiagnosticCltuTransferData_specific_inconsistentTimeRange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_invalidTime
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuTransferData_specific_invalidTime: DiagnosticCltuTransferData_specific = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_invalidTime
 * @constant
 * @type {number}
 */
export
const invalidTime: DiagnosticCltuTransferData_specific = DiagnosticCltuTransferData_specific_invalidTime; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_lateSldu
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuTransferData_specific_lateSldu: DiagnosticCltuTransferData_specific = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_lateSldu
 * @constant
 * @type {number}
 */
export
const lateSldu: DiagnosticCltuTransferData_specific = DiagnosticCltuTransferData_specific_lateSldu; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_invalidDelayTime
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuTransferData_specific_invalidDelayTime: DiagnosticCltuTransferData_specific = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_invalidDelayTime
 * @constant
 * @type {number}
 */
export
const invalidDelayTime: DiagnosticCltuTransferData_specific = DiagnosticCltuTransferData_specific_invalidDelayTime; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_cltuError
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuTransferData_specific_cltuError: DiagnosticCltuTransferData_specific = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuTransferData_specific_cltuError
 * @constant
 * @type {number}
 */
export
const cltuError: DiagnosticCltuTransferData_specific = DiagnosticCltuTransferData_specific_cltuError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DiagnosticCltuTransferData_specific: $.ASN1Decoder<DiagnosticCltuTransferData_specific> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagnosticCltuTransferData_specific
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagnosticCltuTransferData_specific (el: _Element): DiagnosticCltuTransferData_specific {
    if (!_cached_decoder_for_DiagnosticCltuTransferData_specific) { _cached_decoder_for_DiagnosticCltuTransferData_specific = $._decodeInteger; }
    return _cached_decoder_for_DiagnosticCltuTransferData_specific(el);
}

let _cached_encoder_for_DiagnosticCltuTransferData_specific: $.ASN1Encoder<DiagnosticCltuTransferData_specific> | null = null;

/**
 * @summary Encodes a(n) DiagnosticCltuTransferData_specific into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagnosticCltuTransferData_specific, encoded as an ASN.1 Element.
 */
export
function _encode_DiagnosticCltuTransferData_specific (value: DiagnosticCltuTransferData_specific, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagnosticCltuTransferData_specific) { _cached_encoder_for_DiagnosticCltuTransferData_specific = $._encodeInteger; }
    return _cached_encoder_for_DiagnosticCltuTransferData_specific(value, elGetter);
}


/* eslint-enable */

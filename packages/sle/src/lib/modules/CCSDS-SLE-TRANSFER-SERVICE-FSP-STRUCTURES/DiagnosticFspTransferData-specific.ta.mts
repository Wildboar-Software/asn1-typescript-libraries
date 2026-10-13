/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticFspTransferData_specific
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticFspTransferData-specific ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagnosticFspTransferData_specific = INTEGER;

/**
 * @summary DiagnosticFspTransferData_specific_unableToProcess
 * @constant
 * @type {number}
 */
export
const DiagnosticFspTransferData_specific_unableToProcess: DiagnosticFspTransferData_specific = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_unableToProcess
 * @constant
 * @type {number}
 */
export
const unableToProcess: DiagnosticFspTransferData_specific = DiagnosticFspTransferData_specific_unableToProcess; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_unableToStore
 * @constant
 * @type {number}
 */
export
const DiagnosticFspTransferData_specific_unableToStore: DiagnosticFspTransferData_specific = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_unableToStore
 * @constant
 * @type {number}
 */
export
const unableToStore: DiagnosticFspTransferData_specific = DiagnosticFspTransferData_specific_unableToStore; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_packetIdentificationOutOfSequence
 * @constant
 * @type {number}
 */
export
const DiagnosticFspTransferData_specific_packetIdentificationOutOfSequence: DiagnosticFspTransferData_specific = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_packetIdentificationOutOfSequence
 * @constant
 * @type {number}
 */
export
const packetIdentificationOutOfSequence: DiagnosticFspTransferData_specific = DiagnosticFspTransferData_specific_packetIdentificationOutOfSequence; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_duplicatePacketIdentification
 * @constant
 * @type {number}
 */
export
const DiagnosticFspTransferData_specific_duplicatePacketIdentification: DiagnosticFspTransferData_specific = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_duplicatePacketIdentification
 * @constant
 * @type {number}
 */
export
const duplicatePacketIdentification: DiagnosticFspTransferData_specific = DiagnosticFspTransferData_specific_duplicatePacketIdentification; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_inconsistentTimeRange
 * @constant
 * @type {number}
 */
export
const DiagnosticFspTransferData_specific_inconsistentTimeRange: DiagnosticFspTransferData_specific = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_inconsistentTimeRange
 * @constant
 * @type {number}
 */
export
const inconsistentTimeRange: DiagnosticFspTransferData_specific = DiagnosticFspTransferData_specific_inconsistentTimeRange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_invalidTime
 * @constant
 * @type {number}
 */
export
const DiagnosticFspTransferData_specific_invalidTime: DiagnosticFspTransferData_specific = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_invalidTime
 * @constant
 * @type {number}
 */
export
const invalidTime: DiagnosticFspTransferData_specific = DiagnosticFspTransferData_specific_invalidTime; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_conflictingProductionTimeIntervals
 * @constant
 * @type {number}
 */
export
const DiagnosticFspTransferData_specific_conflictingProductionTimeIntervals: DiagnosticFspTransferData_specific = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_conflictingProductionTimeIntervals
 * @constant
 * @type {number}
 */
export
const conflictingProductionTimeIntervals: DiagnosticFspTransferData_specific = DiagnosticFspTransferData_specific_conflictingProductionTimeIntervals; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_lateSldu
 * @constant
 * @type {number}
 */
export
const DiagnosticFspTransferData_specific_lateSldu: DiagnosticFspTransferData_specific = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_lateSldu
 * @constant
 * @type {number}
 */
export
const lateSldu: DiagnosticFspTransferData_specific = DiagnosticFspTransferData_specific_lateSldu; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_invalidDelayTime
 * @constant
 * @type {number}
 */
export
const DiagnosticFspTransferData_specific_invalidDelayTime: DiagnosticFspTransferData_specific = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_invalidDelayTime
 * @constant
 * @type {number}
 */
export
const invalidDelayTime: DiagnosticFspTransferData_specific = DiagnosticFspTransferData_specific_invalidDelayTime; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_invalidTransmissionMode
 * @constant
 * @type {number}
 */
export
const DiagnosticFspTransferData_specific_invalidTransmissionMode: DiagnosticFspTransferData_specific = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_invalidTransmissionMode
 * @constant
 * @type {number}
 */
export
const invalidTransmissionMode: DiagnosticFspTransferData_specific = DiagnosticFspTransferData_specific_invalidTransmissionMode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_invalidMap
 * @constant
 * @type {number}
 */
export
const DiagnosticFspTransferData_specific_invalidMap: DiagnosticFspTransferData_specific = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_invalidMap
 * @constant
 * @type {number}
 */
export
const invalidMap: DiagnosticFspTransferData_specific = DiagnosticFspTransferData_specific_invalidMap; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_invalidNotificationRequest
 * @constant
 * @type {number}
 */
export
const DiagnosticFspTransferData_specific_invalidNotificationRequest: DiagnosticFspTransferData_specific = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_invalidNotificationRequest
 * @constant
 * @type {number}
 */
export
const invalidNotificationRequest: DiagnosticFspTransferData_specific = DiagnosticFspTransferData_specific_invalidNotificationRequest; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_packetTooLong
 * @constant
 * @type {number}
 */
export
const DiagnosticFspTransferData_specific_packetTooLong: DiagnosticFspTransferData_specific = 12; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_packetTooLong
 * @constant
 * @type {number}
 */
export
const packetTooLong: DiagnosticFspTransferData_specific = DiagnosticFspTransferData_specific_packetTooLong; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_unsupportedPacketVersion
 * @constant
 * @type {number}
 */
export
const DiagnosticFspTransferData_specific_unsupportedPacketVersion: DiagnosticFspTransferData_specific = 13; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_unsupportedPacketVersion
 * @constant
 * @type {number}
 */
export
const unsupportedPacketVersion: DiagnosticFspTransferData_specific = DiagnosticFspTransferData_specific_unsupportedPacketVersion; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_incorrectPacketType
 * @constant
 * @type {number}
 */
export
const DiagnosticFspTransferData_specific_incorrectPacketType: DiagnosticFspTransferData_specific = 14; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_incorrectPacketType
 * @constant
 * @type {number}
 */
export
const incorrectPacketType: DiagnosticFspTransferData_specific = DiagnosticFspTransferData_specific_incorrectPacketType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_invalidPacketApid
 * @constant
 * @type {number}
 */
export
const DiagnosticFspTransferData_specific_invalidPacketApid: DiagnosticFspTransferData_specific = 15; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspTransferData_specific_invalidPacketApid
 * @constant
 * @type {number}
 */
export
const invalidPacketApid: DiagnosticFspTransferData_specific = DiagnosticFspTransferData_specific_invalidPacketApid; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DiagnosticFspTransferData_specific: $.ASN1Decoder<DiagnosticFspTransferData_specific> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagnosticFspTransferData_specific
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagnosticFspTransferData_specific (el: _Element): DiagnosticFspTransferData_specific {
    if (!_cached_decoder_for_DiagnosticFspTransferData_specific) { _cached_decoder_for_DiagnosticFspTransferData_specific = $._decodeInteger; }
    return _cached_decoder_for_DiagnosticFspTransferData_specific(el);
}

let _cached_encoder_for_DiagnosticFspTransferData_specific: $.ASN1Encoder<DiagnosticFspTransferData_specific> | null = null;

/**
 * @summary Encodes a(n) DiagnosticFspTransferData_specific into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagnosticFspTransferData_specific, encoded as an ASN.1 Element.
 */
export
function _encode_DiagnosticFspTransferData_specific (value: DiagnosticFspTransferData_specific, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagnosticFspTransferData_specific) { _cached_encoder_for_DiagnosticFspTransferData_specific = $._encodeInteger; }
    return _cached_encoder_for_DiagnosticFspTransferData_specific(value, elGetter);
}


/* eslint-enable */

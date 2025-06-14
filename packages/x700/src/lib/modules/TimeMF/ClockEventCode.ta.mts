/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION ClockEventCode */
/**
 * @summary ClockEventCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ClockEventCode  ::=  INTEGER {
 *   unspecified(0), restart(1), systemOrHardwareFault(2), newStatusWord(3),
 *   newSynchSourceOrStratum(4), systemClockReset(5), systemInvalidTimeOrDate(6),
 *   systemClockException(7), reserved8(8), reserved9(9), reserved10(10),
 *   reserved11(11), reserved12(12), reserved13(13), reserved14(14),
 *   reserved15(15)}
 * ```
 */
export type ClockEventCode = INTEGER;
/* END_OF_SYMBOL_DEFINITION ClockEventCode */

/* START_OF_SYMBOL_DEFINITION ClockEventCode_unspecified */
/**
 * @summary ClockEventCode_unspecified
 * @constant
 * @type {number}
 */
export const ClockEventCode_unspecified: ClockEventCode = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ClockEventCode_unspecified */

/* START_OF_SYMBOL_DEFINITION unspecified */
/**
 * @summary ClockEventCode_unspecified
 * @constant
 * @type {number}
 */
export const unspecified: ClockEventCode = ClockEventCode_unspecified; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unspecified */

/* START_OF_SYMBOL_DEFINITION ClockEventCode_restart */
/**
 * @summary ClockEventCode_restart
 * @constant
 * @type {number}
 */
export const ClockEventCode_restart: ClockEventCode = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ClockEventCode_restart */

/* START_OF_SYMBOL_DEFINITION restart */
/**
 * @summary ClockEventCode_restart
 * @constant
 * @type {number}
 */
export const restart: ClockEventCode = ClockEventCode_restart; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION restart */

/* START_OF_SYMBOL_DEFINITION ClockEventCode_systemOrHardwareFault */
/**
 * @summary ClockEventCode_systemOrHardwareFault
 * @constant
 * @type {number}
 */
export const ClockEventCode_systemOrHardwareFault: ClockEventCode = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ClockEventCode_systemOrHardwareFault */

/* START_OF_SYMBOL_DEFINITION systemOrHardwareFault */
/**
 * @summary ClockEventCode_systemOrHardwareFault
 * @constant
 * @type {number}
 */
export const systemOrHardwareFault: ClockEventCode = ClockEventCode_systemOrHardwareFault; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION systemOrHardwareFault */

/* START_OF_SYMBOL_DEFINITION ClockEventCode_newStatusWord */
/**
 * @summary ClockEventCode_newStatusWord
 * @constant
 * @type {number}
 */
export const ClockEventCode_newStatusWord: ClockEventCode = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ClockEventCode_newStatusWord */

/* START_OF_SYMBOL_DEFINITION newStatusWord */
/**
 * @summary ClockEventCode_newStatusWord
 * @constant
 * @type {number}
 */
export const newStatusWord: ClockEventCode = ClockEventCode_newStatusWord; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION newStatusWord */

/* START_OF_SYMBOL_DEFINITION ClockEventCode_newSynchSourceOrStratum */
/**
 * @summary ClockEventCode_newSynchSourceOrStratum
 * @constant
 * @type {number}
 */
export const ClockEventCode_newSynchSourceOrStratum: ClockEventCode = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ClockEventCode_newSynchSourceOrStratum */

/* START_OF_SYMBOL_DEFINITION newSynchSourceOrStratum */
/**
 * @summary ClockEventCode_newSynchSourceOrStratum
 * @constant
 * @type {number}
 */
export const newSynchSourceOrStratum: ClockEventCode = ClockEventCode_newSynchSourceOrStratum; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION newSynchSourceOrStratum */

/* START_OF_SYMBOL_DEFINITION ClockEventCode_systemClockReset */
/**
 * @summary ClockEventCode_systemClockReset
 * @constant
 * @type {number}
 */
export const ClockEventCode_systemClockReset: ClockEventCode = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ClockEventCode_systemClockReset */

/* START_OF_SYMBOL_DEFINITION systemClockReset */
/**
 * @summary ClockEventCode_systemClockReset
 * @constant
 * @type {number}
 */
export const systemClockReset: ClockEventCode = ClockEventCode_systemClockReset; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION systemClockReset */

/* START_OF_SYMBOL_DEFINITION ClockEventCode_systemInvalidTimeOrDate */
/**
 * @summary ClockEventCode_systemInvalidTimeOrDate
 * @constant
 * @type {number}
 */
export const ClockEventCode_systemInvalidTimeOrDate: ClockEventCode = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ClockEventCode_systemInvalidTimeOrDate */

/* START_OF_SYMBOL_DEFINITION systemInvalidTimeOrDate */
/**
 * @summary ClockEventCode_systemInvalidTimeOrDate
 * @constant
 * @type {number}
 */
export const systemInvalidTimeOrDate: ClockEventCode = ClockEventCode_systemInvalidTimeOrDate; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION systemInvalidTimeOrDate */

/* START_OF_SYMBOL_DEFINITION ClockEventCode_systemClockException */
/**
 * @summary ClockEventCode_systemClockException
 * @constant
 * @type {number}
 */
export const ClockEventCode_systemClockException: ClockEventCode = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ClockEventCode_systemClockException */

/* START_OF_SYMBOL_DEFINITION systemClockException */
/**
 * @summary ClockEventCode_systemClockException
 * @constant
 * @type {number}
 */
export const systemClockException: ClockEventCode = ClockEventCode_systemClockException; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION systemClockException */

/* START_OF_SYMBOL_DEFINITION ClockEventCode_reserved8 */
/**
 * @summary ClockEventCode_reserved8
 * @constant
 * @type {number}
 */
export const ClockEventCode_reserved8: ClockEventCode = 8; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ClockEventCode_reserved8 */

/* START_OF_SYMBOL_DEFINITION reserved8 */
/**
 * @summary ClockEventCode_reserved8
 * @constant
 * @type {number}
 */
export const reserved8: ClockEventCode = ClockEventCode_reserved8; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION reserved8 */

/* START_OF_SYMBOL_DEFINITION ClockEventCode_reserved9 */
/**
 * @summary ClockEventCode_reserved9
 * @constant
 * @type {number}
 */
export const ClockEventCode_reserved9: ClockEventCode = 9; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ClockEventCode_reserved9 */

/* START_OF_SYMBOL_DEFINITION reserved9 */
/**
 * @summary ClockEventCode_reserved9
 * @constant
 * @type {number}
 */
export const reserved9: ClockEventCode = ClockEventCode_reserved9; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION reserved9 */

/* START_OF_SYMBOL_DEFINITION ClockEventCode_reserved10 */
/**
 * @summary ClockEventCode_reserved10
 * @constant
 * @type {number}
 */
export const ClockEventCode_reserved10: ClockEventCode = 10; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ClockEventCode_reserved10 */

/* START_OF_SYMBOL_DEFINITION reserved10 */
/**
 * @summary ClockEventCode_reserved10
 * @constant
 * @type {number}
 */
export const reserved10: ClockEventCode = ClockEventCode_reserved10; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION reserved10 */

/* START_OF_SYMBOL_DEFINITION ClockEventCode_reserved11 */
/**
 * @summary ClockEventCode_reserved11
 * @constant
 * @type {number}
 */
export const ClockEventCode_reserved11: ClockEventCode = 11; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ClockEventCode_reserved11 */

/* START_OF_SYMBOL_DEFINITION reserved11 */
/**
 * @summary ClockEventCode_reserved11
 * @constant
 * @type {number}
 */
export const reserved11: ClockEventCode = ClockEventCode_reserved11; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION reserved11 */

/* START_OF_SYMBOL_DEFINITION ClockEventCode_reserved12 */
/**
 * @summary ClockEventCode_reserved12
 * @constant
 * @type {number}
 */
export const ClockEventCode_reserved12: ClockEventCode = 12; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ClockEventCode_reserved12 */

/* START_OF_SYMBOL_DEFINITION reserved12 */
/**
 * @summary ClockEventCode_reserved12
 * @constant
 * @type {number}
 */
export const reserved12: ClockEventCode = ClockEventCode_reserved12; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION reserved12 */

/* START_OF_SYMBOL_DEFINITION ClockEventCode_reserved13 */
/**
 * @summary ClockEventCode_reserved13
 * @constant
 * @type {number}
 */
export const ClockEventCode_reserved13: ClockEventCode = 13; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ClockEventCode_reserved13 */

/* START_OF_SYMBOL_DEFINITION reserved13 */
/**
 * @summary ClockEventCode_reserved13
 * @constant
 * @type {number}
 */
export const reserved13: ClockEventCode = ClockEventCode_reserved13; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION reserved13 */

/* START_OF_SYMBOL_DEFINITION ClockEventCode_reserved14 */
/**
 * @summary ClockEventCode_reserved14
 * @constant
 * @type {number}
 */
export const ClockEventCode_reserved14: ClockEventCode = 14; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ClockEventCode_reserved14 */

/* START_OF_SYMBOL_DEFINITION reserved14 */
/**
 * @summary ClockEventCode_reserved14
 * @constant
 * @type {number}
 */
export const reserved14: ClockEventCode = ClockEventCode_reserved14; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION reserved14 */

/* START_OF_SYMBOL_DEFINITION ClockEventCode_reserved15 */
/**
 * @summary ClockEventCode_reserved15
 * @constant
 * @type {number}
 */
export const ClockEventCode_reserved15: ClockEventCode = 15; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ClockEventCode_reserved15 */

/* START_OF_SYMBOL_DEFINITION reserved15 */
/**
 * @summary ClockEventCode_reserved15
 * @constant
 * @type {number}
 */
export const reserved15: ClockEventCode = ClockEventCode_reserved15; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION reserved15 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ClockEventCode */
let _cached_decoder_for_ClockEventCode: $.ASN1Decoder<ClockEventCode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ClockEventCode */

/* START_OF_SYMBOL_DEFINITION _decode_ClockEventCode */
/**
 * @summary Decodes an ASN.1 element into a(n) ClockEventCode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ClockEventCode} The decoded data structure.
 */
export function _decode_ClockEventCode(el: _Element) {
    if (!_cached_decoder_for_ClockEventCode) {
        _cached_decoder_for_ClockEventCode = $._decodeInteger;
    }
    return _cached_decoder_for_ClockEventCode(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ClockEventCode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ClockEventCode */
let _cached_encoder_for_ClockEventCode: $.ASN1Encoder<ClockEventCode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ClockEventCode */

/* START_OF_SYMBOL_DEFINITION _encode_ClockEventCode */
/**
 * @summary Encodes a(n) ClockEventCode into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClockEventCode, encoded as an ASN.1 Element.
 */
export function _encode_ClockEventCode(
    value: ClockEventCode,
    elGetter: $.ASN1Encoder<ClockEventCode>
) {
    if (!_cached_encoder_for_ClockEventCode) {
        _cached_encoder_for_ClockEventCode = $._encodeInteger;
    }
    return _cached_encoder_for_ClockEventCode(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ClockEventCode */

/* eslint-enable */

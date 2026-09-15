/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GenerateDigits
 * @description
 * Capability bitmap for the Generate Digits service (ECMA-269 C.7.4, ECMA-285
 * §9.10). Presence of this entry in `CallAssociatedServList` means the SF
 * supports that service. Each set bit is an optional parameter, enumerated
 * value, initial connection state, or miscellaneous characteristic from Annex
 * C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GenerateDigits  ::=  BIT STRING
 * {     digitModeDTMF                 ( 0),     -- optional parameters
 *     digitModePulse                 ( 1),     -- optional parameters
 *     toneDuration                 ( 2),     -- optional parameters
 *     pulseRate                 ( 3),     -- optional parameters
 *     pauseDuration                 ( 4),     -- optional parameters
 *     privateData                 ( 5),     -- optional parameters
 *     privateDataInAck             ( 6),     -- optional parameters
 *     deviceIDOnly                 ( 7),     -- misc characteristics
 *     supportsDTMFTonesABCD             ( 8),     -- misc characteristics
 *     supportsPauseToneChar             ( 9),     -- misc characteristics
 *     ackModelMultiStep             (10) }
 * ```
 */
export
type GenerateDigits = BIT_STRING;

/**
 * @summary GenerateDigits_digitModeDTMF
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.7.4).
 */
export
const GenerateDigits_digitModeDTMF: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary digitModeDTMF
 * @constant
 * @description
 * Alias of `GenerateDigits_digitModeDTMF`.
 */
export
const digitModeDTMF: number = GenerateDigits_digitModeDTMF; /* SHORT_NAMED_BIT */

/**
 * @summary GenerateDigits_digitModePulse
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.7.4).
 */
export
const GenerateDigits_digitModePulse: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary digitModePulse
 * @constant
 * @description
 * Alias of `GenerateDigits_digitModePulse`.
 */
export
const digitModePulse: number = GenerateDigits_digitModePulse; /* SHORT_NAMED_BIT */

/**
 * @summary GenerateDigits_toneDuration
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.7.4).
 */
export
const GenerateDigits_toneDuration: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary toneDuration
 * @constant
 * @description
 * Alias of `GenerateDigits_toneDuration`.
 */
export
const toneDuration: number = GenerateDigits_toneDuration; /* SHORT_NAMED_BIT */

/**
 * @summary GenerateDigits_pulseRate
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.7.4).
 */
export
const GenerateDigits_pulseRate: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary pulseRate
 * @constant
 * @description
 * Alias of `GenerateDigits_pulseRate`.
 */
export
const pulseRate: number = GenerateDigits_pulseRate; /* SHORT_NAMED_BIT */

/**
 * @summary GenerateDigits_pauseDuration
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.7.4).
 */
export
const GenerateDigits_pauseDuration: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary pauseDuration
 * @constant
 * @description
 * Alias of `GenerateDigits_pauseDuration`.
 */
export
const pauseDuration: number = GenerateDigits_pauseDuration; /* SHORT_NAMED_BIT */

/**
 * @summary GenerateDigits_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.7.4).
 */
export
const GenerateDigits_privateData: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `GenerateDigits_privateData`.
 */
export
const privateData: number = GenerateDigits_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GenerateDigits_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.7.4).
 */
export
const GenerateDigits_privateDataInAck: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `GenerateDigits_privateDataInAck`.
 */
export
const privateDataInAck: number = GenerateDigits_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GenerateDigits_deviceIDOnly
 * @constant
 * @description
 * Bit set means the SF supports DeviceID-only ConnectionIDs for this service
 * (ECMA-269 C.7.4).
 */
export
const GenerateDigits_deviceIDOnly: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 * @description
 * Alias of `GenerateDigits_deviceIDOnly`.
 */
export
const deviceIDOnly: number = GenerateDigits_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary GenerateDigits_supportsDTMFTonesABCD
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.7.4).
 */
export
const GenerateDigits_supportsDTMFTonesABCD: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary supportsDTMFTonesABCD
 * @constant
 * @description
 * Alias of `GenerateDigits_supportsDTMFTonesABCD`.
 */
export
const supportsDTMFTonesABCD: number = GenerateDigits_supportsDTMFTonesABCD; /* SHORT_NAMED_BIT */

/**
 * @summary GenerateDigits_supportsPauseToneChar
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.7.4).
 */
export
const GenerateDigits_supportsPauseToneChar: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary supportsPauseToneChar
 * @constant
 * @description
 * Alias of `GenerateDigits_supportsPauseToneChar`.
 */
export
const supportsPauseToneChar: number = GenerateDigits_supportsPauseToneChar; /* SHORT_NAMED_BIT */

/**
 * @summary GenerateDigits_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 C.7.4).
 */
export
const GenerateDigits_ackModelMultiStep: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `GenerateDigits_ackModelMultiStep`.
 */
export
const ackModelMultiStep: number = GenerateDigits_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GenerateDigits: $.ASN1Decoder<GenerateDigits> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GenerateDigits
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GenerateDigits (el: _Element): GenerateDigits {
    if (!_cached_decoder_for_GenerateDigits) { _cached_decoder_for_GenerateDigits = $._decodeBitString; }
    return _cached_decoder_for_GenerateDigits(el);
}

let _cached_encoder_for_GenerateDigits: $.ASN1Encoder<GenerateDigits> | null = null;

/**
 * @summary Encodes a(n) GenerateDigits into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GenerateDigits, encoded as an ASN.1 Element.
 */
export
function _encode_GenerateDigits (value: GenerateDigits, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GenerateDigits) { _cached_encoder_for_GenerateDigits = $._encodeBitString; }
    return _cached_encoder_for_GenerateDigits(value, elGetter);
}


/* eslint-enable */

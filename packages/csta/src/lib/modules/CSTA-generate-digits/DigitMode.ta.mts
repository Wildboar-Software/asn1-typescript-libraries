/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary DigitMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DigitMode  ::=  ENUMERATED
 * {    rotaryPulse            (0),
 *     dTMF                (1) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_DigitMode {
    rotaryPulse = 0,
    dTMF = 1,
}

/**
 * @summary DigitMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DigitMode  ::=  ENUMERATED
 * {    rotaryPulse            (0),
 *     dTMF                (1) }
 * ```
 * 
 * @enum {number}
 */
export
type DigitMode = _enum_for_DigitMode;

/**
 * @summary DigitMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DigitMode  ::=  ENUMERATED
 * {    rotaryPulse            (0),
 *     dTMF                (1) }
 * ```
 * 
 * @enum {number}
 */
export
const DigitMode = _enum_for_DigitMode;

/**
 * @summary DigitMode_rotaryPulse
 * @constant
 * @type {number}
 */
export
const DigitMode_rotaryPulse: DigitMode = DigitMode.rotaryPulse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rotaryPulse
 * @constant
 * @type {number}
 */
export
const rotaryPulse: DigitMode = DigitMode.rotaryPulse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DigitMode_dTMF
 * @constant
 * @type {number}
 */
export
const DigitMode_dTMF: DigitMode = DigitMode.dTMF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dTMF
 * @constant
 * @type {number}
 */
export
const dTMF: DigitMode = DigitMode.dTMF; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_DigitMode: $.ASN1Decoder<DigitMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DigitMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DigitMode (el: _Element): DigitMode {
    if (!_cached_decoder_for_DigitMode) { _cached_decoder_for_DigitMode = $._decodeEnumerated; }
    return _cached_decoder_for_DigitMode(el);
}

let _cached_encoder_for_DigitMode: $.ASN1Encoder<DigitMode> | null = null;

/**
 * @summary Encodes a(n) DigitMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DigitMode, encoded as an ASN.1 Element.
 */
export
function _encode_DigitMode (value: DigitMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DigitMode) { _cached_encoder_for_DigitMode = $._encodeEnumerated; }
    return _cached_encoder_for_DigitMode(value, elGetter);
}


/* eslint-enable */

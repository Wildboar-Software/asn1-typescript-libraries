/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ASDU_smpMod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ASDU-smpMod ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ASDU_smpMod = INTEGER;

/**
 * @summary ASDU_smpMod_samplesPerNormalPeriod
 * @constant
 * @type {number}
 */
export
const ASDU_smpMod_samplesPerNormalPeriod: ASDU_smpMod = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ASDU_smpMod_samplesPerNormalPeriod
 * @constant
 * @type {number}
 */
export
const samplesPerNormalPeriod: ASDU_smpMod = ASDU_smpMod_samplesPerNormalPeriod; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ASDU_smpMod_samplesPerSecond
 * @constant
 * @type {number}
 */
export
const ASDU_smpMod_samplesPerSecond: ASDU_smpMod = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ASDU_smpMod_samplesPerSecond
 * @constant
 * @type {number}
 */
export
const samplesPerSecond: ASDU_smpMod = ASDU_smpMod_samplesPerSecond; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ASDU_smpMod_secondsPerSample
 * @constant
 * @type {number}
 */
export
const ASDU_smpMod_secondsPerSample: ASDU_smpMod = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ASDU_smpMod_secondsPerSample
 * @constant
 * @type {number}
 */
export
const secondsPerSample: ASDU_smpMod = ASDU_smpMod_secondsPerSample; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ASDU_smpMod: $.ASN1Decoder<ASDU_smpMod> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ASDU_smpMod
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ASDU_smpMod (el: _Element): ASDU_smpMod {
    if (!_cached_decoder_for_ASDU_smpMod) { _cached_decoder_for_ASDU_smpMod = $._decodeInteger; }
    return _cached_decoder_for_ASDU_smpMod(el);
}

let _cached_encoder_for_ASDU_smpMod: $.ASN1Encoder<ASDU_smpMod> | null = null;

/**
 * @summary Encodes a(n) ASDU_smpMod into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ASDU_smpMod, encoded as an ASN.1 Element.
 */
export
function _encode_ASDU_smpMod (value: ASDU_smpMod, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ASDU_smpMod) { _cached_encoder_for_ASDU_smpMod = $._encodeInteger; }
    return _cached_encoder_for_ASDU_smpMod(value, elGetter);
}


/* eslint-enable */

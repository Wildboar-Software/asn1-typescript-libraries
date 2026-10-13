/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RafGetParameter_parReqFrameQuality_parameterValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RafGetParameter-parReqFrameQuality-parameterValue ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type RafGetParameter_parReqFrameQuality_parameterValue = INTEGER;

/**
 * @summary RafGetParameter_parReqFrameQuality_parameterValue_goodFramesOnly
 * @constant
 * @type {number}
 */
export
const RafGetParameter_parReqFrameQuality_parameterValue_goodFramesOnly: RafGetParameter_parReqFrameQuality_parameterValue = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RafGetParameter_parReqFrameQuality_parameterValue_goodFramesOnly
 * @constant
 * @type {number}
 */
export
const goodFramesOnly: RafGetParameter_parReqFrameQuality_parameterValue = RafGetParameter_parReqFrameQuality_parameterValue_goodFramesOnly; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RafGetParameter_parReqFrameQuality_parameterValue_erredFrameOnly
 * @constant
 * @type {number}
 */
export
const RafGetParameter_parReqFrameQuality_parameterValue_erredFrameOnly: RafGetParameter_parReqFrameQuality_parameterValue = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RafGetParameter_parReqFrameQuality_parameterValue_erredFrameOnly
 * @constant
 * @type {number}
 */
export
const erredFrameOnly: RafGetParameter_parReqFrameQuality_parameterValue = RafGetParameter_parReqFrameQuality_parameterValue_erredFrameOnly; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RafGetParameter_parReqFrameQuality_parameterValue_allFrames
 * @constant
 * @type {number}
 */
export
const RafGetParameter_parReqFrameQuality_parameterValue_allFrames: RafGetParameter_parReqFrameQuality_parameterValue = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RafGetParameter_parReqFrameQuality_parameterValue_allFrames
 * @constant
 * @type {number}
 */
export
const allFrames: RafGetParameter_parReqFrameQuality_parameterValue = RafGetParameter_parReqFrameQuality_parameterValue_allFrames; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_RafGetParameter_parReqFrameQuality_parameterValue: $.ASN1Decoder<RafGetParameter_parReqFrameQuality_parameterValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RafGetParameter_parReqFrameQuality_parameterValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RafGetParameter_parReqFrameQuality_parameterValue (el: _Element): RafGetParameter_parReqFrameQuality_parameterValue {
    if (!_cached_decoder_for_RafGetParameter_parReqFrameQuality_parameterValue) { _cached_decoder_for_RafGetParameter_parReqFrameQuality_parameterValue = $._decodeInteger; }
    return _cached_decoder_for_RafGetParameter_parReqFrameQuality_parameterValue(el);
}

let _cached_encoder_for_RafGetParameter_parReqFrameQuality_parameterValue: $.ASN1Encoder<RafGetParameter_parReqFrameQuality_parameterValue> | null = null;

/**
 * @summary Encodes a(n) RafGetParameter_parReqFrameQuality_parameterValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RafGetParameter_parReqFrameQuality_parameterValue, encoded as an ASN.1 Element.
 */
export
function _encode_RafGetParameter_parReqFrameQuality_parameterValue (value: RafGetParameter_parReqFrameQuality_parameterValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RafGetParameter_parReqFrameQuality_parameterValue) { _cached_encoder_for_RafGetParameter_parReqFrameQuality_parameterValue = $._encodeInteger; }
    return _cached_encoder_for_RafGetParameter_parReqFrameQuality_parameterValue(value, elGetter);
}


/* eslint-enable */

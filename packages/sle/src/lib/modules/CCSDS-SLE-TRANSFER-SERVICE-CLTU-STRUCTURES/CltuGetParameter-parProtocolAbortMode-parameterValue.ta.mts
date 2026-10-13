/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CltuGetParameter_parProtocolAbortMode_parameterValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuGetParameter-parProtocolAbortMode-parameterValue ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type CltuGetParameter_parProtocolAbortMode_parameterValue = INTEGER;

/**
 * @summary CltuGetParameter_parProtocolAbortMode_parameterValue_abort
 * @constant
 * @type {number}
 */
export
const CltuGetParameter_parProtocolAbortMode_parameterValue_abort: CltuGetParameter_parProtocolAbortMode_parameterValue = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parProtocolAbortMode_parameterValue_abort
 * @constant
 * @type {number}
 */
export
const abort: CltuGetParameter_parProtocolAbortMode_parameterValue = CltuGetParameter_parProtocolAbortMode_parameterValue_abort; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parProtocolAbortMode_parameterValue_continue_
 * @constant
 * @type {number}
 */
export
const CltuGetParameter_parProtocolAbortMode_parameterValue_continue_: CltuGetParameter_parProtocolAbortMode_parameterValue = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parProtocolAbortMode_parameterValue_continue_
 * @constant
 * @type {number}
 */
export
const continue_: CltuGetParameter_parProtocolAbortMode_parameterValue = CltuGetParameter_parProtocolAbortMode_parameterValue_continue_; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_CltuGetParameter_parProtocolAbortMode_parameterValue: $.ASN1Decoder<CltuGetParameter_parProtocolAbortMode_parameterValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuGetParameter_parProtocolAbortMode_parameterValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuGetParameter_parProtocolAbortMode_parameterValue (el: _Element): CltuGetParameter_parProtocolAbortMode_parameterValue {
    if (!_cached_decoder_for_CltuGetParameter_parProtocolAbortMode_parameterValue) { _cached_decoder_for_CltuGetParameter_parProtocolAbortMode_parameterValue = $._decodeInteger; }
    return _cached_decoder_for_CltuGetParameter_parProtocolAbortMode_parameterValue(el);
}

let _cached_encoder_for_CltuGetParameter_parProtocolAbortMode_parameterValue: $.ASN1Encoder<CltuGetParameter_parProtocolAbortMode_parameterValue> | null = null;

/**
 * @summary Encodes a(n) CltuGetParameter_parProtocolAbortMode_parameterValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuGetParameter_parProtocolAbortMode_parameterValue, encoded as an ASN.1 Element.
 */
export
function _encode_CltuGetParameter_parProtocolAbortMode_parameterValue (value: CltuGetParameter_parProtocolAbortMode_parameterValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuGetParameter_parProtocolAbortMode_parameterValue) { _cached_encoder_for_CltuGetParameter_parProtocolAbortMode_parameterValue = $._encodeInteger; }
    return _cached_encoder_for_CltuGetParameter_parProtocolAbortMode_parameterValue(value, elGetter);
}


/* eslint-enable */

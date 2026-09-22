/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagFormat_extServices_immediate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-extServices-immediate ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagFormat_extServices_immediate = INTEGER;

/**
 * @summary DiagFormat_extServices_immediate_failed
 * @constant
 * @type {number}
 */
export
const DiagFormat_extServices_immediate_failed: DiagFormat_extServices_immediate = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_immediate_failed
 * @constant
 * @type {number}
 */
export
const failed: DiagFormat_extServices_immediate = DiagFormat_extServices_immediate_failed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_immediate_service
 * @constant
 * @type {number}
 */
export
const DiagFormat_extServices_immediate_service: DiagFormat_extServices_immediate = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_immediate_service
 * @constant
 * @type {number}
 */
export
const service: DiagFormat_extServices_immediate = DiagFormat_extServices_immediate_service; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_immediate_parameters
 * @constant
 * @type {number}
 */
export
const DiagFormat_extServices_immediate_parameters: DiagFormat_extServices_immediate = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_immediate_parameters
 * @constant
 * @type {number}
 */
export
const parameters: DiagFormat_extServices_immediate = DiagFormat_extServices_immediate_parameters; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DiagFormat_extServices_immediate: $.ASN1Decoder<DiagFormat_extServices_immediate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagFormat_extServices_immediate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagFormat_extServices_immediate (el: _Element): DiagFormat_extServices_immediate {
    if (!_cached_decoder_for_DiagFormat_extServices_immediate) { _cached_decoder_for_DiagFormat_extServices_immediate = $._decodeInteger; }
    return _cached_decoder_for_DiagFormat_extServices_immediate(el);
}

let _cached_encoder_for_DiagFormat_extServices_immediate: $.ASN1Encoder<DiagFormat_extServices_immediate> | null = null;

/**
 * @summary Encodes a(n) DiagFormat_extServices_immediate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagFormat_extServices_immediate, encoded as an ASN.1 Element.
 */
export
function _encode_DiagFormat_extServices_immediate (value: DiagFormat_extServices_immediate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagFormat_extServices_immediate) { _cached_encoder_for_DiagFormat_extServices_immediate = $._encodeInteger; }
    return _cached_encoder_for_DiagFormat_extServices_immediate(value, elGetter);
}


/* eslint-enable */

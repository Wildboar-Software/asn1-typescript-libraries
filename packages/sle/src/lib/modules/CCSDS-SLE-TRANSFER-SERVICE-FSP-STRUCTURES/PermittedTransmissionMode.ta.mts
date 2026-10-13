/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PermittedTransmissionMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PermittedTransmissionMode   ::=    INTEGER
 * {  sequenceControlled               (0)
 * ,  expedited                        (1)
 * ,  any                              (2)
 * }
 * ```
 */
export
type PermittedTransmissionMode = INTEGER;

/**
 * @summary PermittedTransmissionMode_sequenceControlled
 * @constant
 * @type {number}
 */
export
const PermittedTransmissionMode_sequenceControlled: PermittedTransmissionMode = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PermittedTransmissionMode_sequenceControlled
 * @constant
 * @type {number}
 */
export
const sequenceControlled: PermittedTransmissionMode = PermittedTransmissionMode_sequenceControlled; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PermittedTransmissionMode_expedited
 * @constant
 * @type {number}
 */
export
const PermittedTransmissionMode_expedited: PermittedTransmissionMode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PermittedTransmissionMode_expedited
 * @constant
 * @type {number}
 */
export
const expedited: PermittedTransmissionMode = PermittedTransmissionMode_expedited; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PermittedTransmissionMode_any_
 * @constant
 * @type {number}
 */
export
const PermittedTransmissionMode_any_: PermittedTransmissionMode = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PermittedTransmissionMode_any_
 * @constant
 * @type {number}
 */
export
const any_: PermittedTransmissionMode = PermittedTransmissionMode_any_; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_PermittedTransmissionMode: $.ASN1Decoder<PermittedTransmissionMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PermittedTransmissionMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PermittedTransmissionMode (el: _Element): PermittedTransmissionMode {
    if (!_cached_decoder_for_PermittedTransmissionMode) { _cached_decoder_for_PermittedTransmissionMode = $._decodeInteger; }
    return _cached_decoder_for_PermittedTransmissionMode(el);
}

let _cached_encoder_for_PermittedTransmissionMode: $.ASN1Encoder<PermittedTransmissionMode> | null = null;

/**
 * @summary Encodes a(n) PermittedTransmissionMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PermittedTransmissionMode, encoded as an ASN.1 Element.
 */
export
function _encode_PermittedTransmissionMode (value: PermittedTransmissionMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PermittedTransmissionMode) { _cached_encoder_for_PermittedTransmissionMode = $._encodeInteger; }
    return _cached_encoder_for_PermittedTransmissionMode(value, elGetter);
}


/* eslint-enable */

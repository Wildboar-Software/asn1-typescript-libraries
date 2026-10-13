/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TransmissionMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransmissionMode         ::=    INTEGER
 * {  sequenceControlled         (0)   -- AD mode
 * ,  expedited                  (1)   -- BD mode
 * ,  sequenceControlledUnblock  (2)   -- AD mode with unblocking
 * }
 * ```
 */
export
type TransmissionMode = INTEGER;

/**
 * @summary TransmissionMode_sequenceControlled
 * @constant
 * @type {number}
 */
export
const TransmissionMode_sequenceControlled: TransmissionMode = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransmissionMode_sequenceControlled
 * @constant
 * @type {number}
 */
export
const sequenceControlled: TransmissionMode = TransmissionMode_sequenceControlled; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TransmissionMode_expedited
 * @constant
 * @type {number}
 */
export
const TransmissionMode_expedited: TransmissionMode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransmissionMode_expedited
 * @constant
 * @type {number}
 */
export
const expedited: TransmissionMode = TransmissionMode_expedited; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TransmissionMode_sequenceControlledUnblock
 * @constant
 * @type {number}
 */
export
const TransmissionMode_sequenceControlledUnblock: TransmissionMode = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransmissionMode_sequenceControlledUnblock
 * @constant
 * @type {number}
 */
export
const sequenceControlledUnblock: TransmissionMode = TransmissionMode_sequenceControlledUnblock; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_TransmissionMode: $.ASN1Decoder<TransmissionMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TransmissionMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TransmissionMode (el: _Element): TransmissionMode {
    if (!_cached_decoder_for_TransmissionMode) { _cached_decoder_for_TransmissionMode = $._decodeInteger; }
    return _cached_decoder_for_TransmissionMode(el);
}

let _cached_encoder_for_TransmissionMode: $.ASN1Encoder<TransmissionMode> | null = null;

/**
 * @summary Encodes a(n) TransmissionMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransmissionMode, encoded as an ASN.1 Element.
 */
export
function _encode_TransmissionMode (value: TransmissionMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TransmissionMode) { _cached_encoder_for_TransmissionMode = $._encodeInteger; }
    return _cached_encoder_for_TransmissionMode(value, elGetter);
}


/* eslint-enable */

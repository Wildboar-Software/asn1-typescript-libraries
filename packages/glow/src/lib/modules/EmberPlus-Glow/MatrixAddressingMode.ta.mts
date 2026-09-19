/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MatrixAddressingMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MatrixAddressingMode  ::= 
 *     INTEGER {
 *         linear    (0),  -- default
 *         nonLinear (1)
 *     }
 * ```
 */
export
type MatrixAddressingMode = INTEGER;

/**
 * @summary MatrixAddressingMode_linear
 * @constant
 * @type {number}
 */
export
const MatrixAddressingMode_linear: MatrixAddressingMode = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MatrixAddressingMode_linear
 * @constant
 * @type {number}
 */
export
const linear: MatrixAddressingMode = MatrixAddressingMode_linear; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MatrixAddressingMode_nonLinear
 * @constant
 * @type {number}
 */
export
const MatrixAddressingMode_nonLinear: MatrixAddressingMode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MatrixAddressingMode_nonLinear
 * @constant
 * @type {number}
 */
export
const nonLinear: MatrixAddressingMode = MatrixAddressingMode_nonLinear; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_MatrixAddressingMode: $.ASN1Decoder<MatrixAddressingMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MatrixAddressingMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MatrixAddressingMode (el: _Element): MatrixAddressingMode {
    if (!_cached_decoder_for_MatrixAddressingMode) { _cached_decoder_for_MatrixAddressingMode = $._decodeInteger; }
    return _cached_decoder_for_MatrixAddressingMode(el);
}

let _cached_encoder_for_MatrixAddressingMode: $.ASN1Encoder<MatrixAddressingMode> | null = null;

/**
 * @summary Encodes a(n) MatrixAddressingMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MatrixAddressingMode, encoded as an ASN.1 Element.
 */
export
function _encode_MatrixAddressingMode (value: MatrixAddressingMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MatrixAddressingMode) { _cached_encoder_for_MatrixAddressingMode = $._encodeInteger; }
    return _cached_encoder_for_MatrixAddressingMode(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GeneralProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GeneralProblem  ::=  INTEGER {
 *   unrecognizedComponent(0), mistypedComponent(1), badlyStructuredComponent(2)
 * }
 * ```
 */
export
type GeneralProblem = INTEGER;

/**
 * @summary GeneralProblem_unrecognizedComponent
 * @constant
 * @type {number}
 */
export
const GeneralProblem_unrecognizedComponent: GeneralProblem = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GeneralProblem_unrecognizedComponent
 * @constant
 * @type {number}
 */
export
const unrecognizedComponent: GeneralProblem = GeneralProblem_unrecognizedComponent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GeneralProblem_mistypedComponent
 * @constant
 * @type {number}
 */
export
const GeneralProblem_mistypedComponent: GeneralProblem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GeneralProblem_mistypedComponent
 * @constant
 * @type {number}
 */
export
const mistypedComponent: GeneralProblem = GeneralProblem_mistypedComponent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GeneralProblem_badlyStructuredComponent
 * @constant
 * @type {number}
 */
export
const GeneralProblem_badlyStructuredComponent: GeneralProblem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GeneralProblem_badlyStructuredComponent
 * @constant
 * @type {number}
 */
export
const badlyStructuredComponent: GeneralProblem = GeneralProblem_badlyStructuredComponent; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_GeneralProblem: $.ASN1Decoder<GeneralProblem> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GeneralProblem
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GeneralProblem (el: _Element): GeneralProblem {
    if (!_cached_decoder_for_GeneralProblem) { _cached_decoder_for_GeneralProblem = $._decodeInteger; }
    return _cached_decoder_for_GeneralProblem(el);
}

let _cached_encoder_for_GeneralProblem: $.ASN1Encoder<GeneralProblem> | null = null;

/**
 * @summary Encodes a(n) GeneralProblem into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeneralProblem, encoded as an ASN.1 Element.
 */
export
function _encode_GeneralProblem (value: GeneralProblem, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GeneralProblem) { _cached_encoder_for_GeneralProblem = $._encodeInteger; }
    return _cached_encoder_for_GeneralProblem(value, elGetter);
}


/* eslint-enable */

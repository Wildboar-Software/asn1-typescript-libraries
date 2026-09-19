/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagFormat_term_problem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-term-problem ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagFormat_term_problem = INTEGER;

/**
 * @summary DiagFormat_term_problem_codedValue
 * @constant
 * @type {number}
 */
export
const DiagFormat_term_problem_codedValue: DiagFormat_term_problem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_term_problem_codedValue
 * @constant
 * @type {number}
 */
export
const codedValue: DiagFormat_term_problem = DiagFormat_term_problem_codedValue; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_term_problem_unparsable
 * @constant
 * @type {number}
 */
export
const DiagFormat_term_problem_unparsable: DiagFormat_term_problem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_term_problem_unparsable
 * @constant
 * @type {number}
 */
export
const unparsable: DiagFormat_term_problem = DiagFormat_term_problem_unparsable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_term_problem_tooShort
 * @constant
 * @type {number}
 */
export
const DiagFormat_term_problem_tooShort: DiagFormat_term_problem = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_term_problem_tooShort
 * @constant
 * @type {number}
 */
export
const tooShort: DiagFormat_term_problem = DiagFormat_term_problem_tooShort; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_term_problem_type_
 * @constant
 * @type {number}
 */
export
const DiagFormat_term_problem_type_: DiagFormat_term_problem = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_term_problem_type_
 * @constant
 * @type {number}
 */
export
const type_: DiagFormat_term_problem = DiagFormat_term_problem_type_; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DiagFormat_term_problem: $.ASN1Decoder<DiagFormat_term_problem> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagFormat_term_problem
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagFormat_term_problem (el: _Element): DiagFormat_term_problem {
    if (!_cached_decoder_for_DiagFormat_term_problem) { _cached_decoder_for_DiagFormat_term_problem = $._decodeInteger; }
    return _cached_decoder_for_DiagFormat_term_problem(el);
}

let _cached_encoder_for_DiagFormat_term_problem: $.ASN1Encoder<DiagFormat_term_problem> | null = null;

/**
 * @summary Encodes a(n) DiagFormat_term_problem into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagFormat_term_problem, encoded as an ASN.1 Element.
 */
export
function _encode_DiagFormat_term_problem (value: DiagFormat_term_problem, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagFormat_term_problem) { _cached_encoder_for_DiagFormat_term_problem = $._encodeInteger; }
    return _cached_encoder_for_DiagFormat_term_problem(value, elGetter);
}


/* eslint-enable */

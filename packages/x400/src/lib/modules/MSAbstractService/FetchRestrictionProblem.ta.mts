/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION FetchRestrictionProblem */
/**
 * @summary FetchRestrictionProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FetchRestrictionProblem  ::=  INTEGER {
 *   content-type-problem(1), eit-problem(2), maximum-length-problem(3)
 * }(0..ub-error-reasons)
 * ```
 */
export type FetchRestrictionProblem = INTEGER;
/* END_OF_SYMBOL_DEFINITION FetchRestrictionProblem */

/* START_OF_SYMBOL_DEFINITION FetchRestrictionProblem_content_type_problem */
/**
 * @summary FetchRestrictionProblem_content_type_problem
 * @constant
 * @type {number}
 */
export const FetchRestrictionProblem_content_type_problem: FetchRestrictionProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FetchRestrictionProblem_content_type_problem */

/* START_OF_SYMBOL_DEFINITION content_type_problem */
/**
 * @summary FetchRestrictionProblem_content_type_problem
 * @constant
 * @type {number}
 */
export const content_type_problem: FetchRestrictionProblem = FetchRestrictionProblem_content_type_problem; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION content_type_problem */

/* START_OF_SYMBOL_DEFINITION FetchRestrictionProblem_eit_problem */
/**
 * @summary FetchRestrictionProblem_eit_problem
 * @constant
 * @type {number}
 */
export const FetchRestrictionProblem_eit_problem: FetchRestrictionProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FetchRestrictionProblem_eit_problem */

/* START_OF_SYMBOL_DEFINITION eit_problem */
/**
 * @summary FetchRestrictionProblem_eit_problem
 * @constant
 * @type {number}
 */
export const eit_problem: FetchRestrictionProblem = FetchRestrictionProblem_eit_problem; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION eit_problem */

/* START_OF_SYMBOL_DEFINITION FetchRestrictionProblem_maximum_length_problem */
/**
 * @summary FetchRestrictionProblem_maximum_length_problem
 * @constant
 * @type {number}
 */
export const FetchRestrictionProblem_maximum_length_problem: FetchRestrictionProblem = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FetchRestrictionProblem_maximum_length_problem */

/* START_OF_SYMBOL_DEFINITION maximum_length_problem */
/**
 * @summary FetchRestrictionProblem_maximum_length_problem
 * @constant
 * @type {number}
 */
export const maximum_length_problem: FetchRestrictionProblem = FetchRestrictionProblem_maximum_length_problem; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION maximum_length_problem */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FetchRestrictionProblem */
let _cached_decoder_for_FetchRestrictionProblem: $.ASN1Decoder<FetchRestrictionProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FetchRestrictionProblem */

/* START_OF_SYMBOL_DEFINITION _decode_FetchRestrictionProblem */
/**
 * @summary Decodes an ASN.1 element into a(n) FetchRestrictionProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FetchRestrictionProblem} The decoded data structure.
 */
export function _decode_FetchRestrictionProblem(el: _Element) {
    if (!_cached_decoder_for_FetchRestrictionProblem) {
        _cached_decoder_for_FetchRestrictionProblem = $._decodeInteger;
    }
    return _cached_decoder_for_FetchRestrictionProblem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FetchRestrictionProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FetchRestrictionProblem */
let _cached_encoder_for_FetchRestrictionProblem: $.ASN1Encoder<FetchRestrictionProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FetchRestrictionProblem */

/* START_OF_SYMBOL_DEFINITION _encode_FetchRestrictionProblem */
/**
 * @summary Encodes a(n) FetchRestrictionProblem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FetchRestrictionProblem, encoded as an ASN.1 Element.
 */
export function _encode_FetchRestrictionProblem(
    value: FetchRestrictionProblem,
    elGetter: $.ASN1Encoder<FetchRestrictionProblem>
) {
    if (!_cached_encoder_for_FetchRestrictionProblem) {
        _cached_encoder_for_FetchRestrictionProblem = $._encodeInteger;
    }
    return _cached_encoder_for_FetchRestrictionProblem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FetchRestrictionProblem */

/* eslint-enable */

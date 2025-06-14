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

/* START_OF_SYMBOL_DEFINITION ModifyProblem */
/**
 * @summary ModifyProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyProblem  ::=  INTEGER {
 *   attribute-not-present(0), value-not-present(1),
 *   attribute-or-value-already-exists(2), invalid-position(3),
 *   modify-restriction-problem(4)}(0..ub-error-reasons)
 * ```
 */
export type ModifyProblem = INTEGER;
/* END_OF_SYMBOL_DEFINITION ModifyProblem */

/* START_OF_SYMBOL_DEFINITION ModifyProblem_attribute_not_present */
/**
 * @summary ModifyProblem_attribute_not_present
 * @constant
 * @type {number}
 */
export const ModifyProblem_attribute_not_present: ModifyProblem = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ModifyProblem_attribute_not_present */

/* START_OF_SYMBOL_DEFINITION attribute_not_present */
/**
 * @summary ModifyProblem_attribute_not_present
 * @constant
 * @type {number}
 */
export const attribute_not_present: ModifyProblem = ModifyProblem_attribute_not_present; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION attribute_not_present */

/* START_OF_SYMBOL_DEFINITION ModifyProblem_value_not_present */
/**
 * @summary ModifyProblem_value_not_present
 * @constant
 * @type {number}
 */
export const ModifyProblem_value_not_present: ModifyProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ModifyProblem_value_not_present */

/* START_OF_SYMBOL_DEFINITION value_not_present */
/**
 * @summary ModifyProblem_value_not_present
 * @constant
 * @type {number}
 */
export const value_not_present: ModifyProblem = ModifyProblem_value_not_present; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION value_not_present */

/* START_OF_SYMBOL_DEFINITION ModifyProblem_attribute_or_value_already_exists */
/**
 * @summary ModifyProblem_attribute_or_value_already_exists
 * @constant
 * @type {number}
 */
export const ModifyProblem_attribute_or_value_already_exists: ModifyProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ModifyProblem_attribute_or_value_already_exists */

/* START_OF_SYMBOL_DEFINITION attribute_or_value_already_exists */
/**
 * @summary ModifyProblem_attribute_or_value_already_exists
 * @constant
 * @type {number}
 */
export const attribute_or_value_already_exists: ModifyProblem = ModifyProblem_attribute_or_value_already_exists; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION attribute_or_value_already_exists */

/* START_OF_SYMBOL_DEFINITION ModifyProblem_invalid_position */
/**
 * @summary ModifyProblem_invalid_position
 * @constant
 * @type {number}
 */
export const ModifyProblem_invalid_position: ModifyProblem = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ModifyProblem_invalid_position */

/* START_OF_SYMBOL_DEFINITION invalid_position */
/**
 * @summary ModifyProblem_invalid_position
 * @constant
 * @type {number}
 */
export const invalid_position: ModifyProblem = ModifyProblem_invalid_position; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION invalid_position */

/* START_OF_SYMBOL_DEFINITION ModifyProblem_modify_restriction_problem */
/**
 * @summary ModifyProblem_modify_restriction_problem
 * @constant
 * @type {number}
 */
export const ModifyProblem_modify_restriction_problem: ModifyProblem = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ModifyProblem_modify_restriction_problem */

/* START_OF_SYMBOL_DEFINITION modify_restriction_problem */
/**
 * @summary ModifyProblem_modify_restriction_problem
 * @constant
 * @type {number}
 */
export const modify_restriction_problem: ModifyProblem = ModifyProblem_modify_restriction_problem; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION modify_restriction_problem */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyProblem */
let _cached_decoder_for_ModifyProblem: $.ASN1Decoder<ModifyProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyProblem */

/* START_OF_SYMBOL_DEFINITION _decode_ModifyProblem */
/**
 * @summary Decodes an ASN.1 element into a(n) ModifyProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyProblem} The decoded data structure.
 */
export function _decode_ModifyProblem(el: _Element) {
    if (!_cached_decoder_for_ModifyProblem) {
        _cached_decoder_for_ModifyProblem = $._decodeInteger;
    }
    return _cached_decoder_for_ModifyProblem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ModifyProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyProblem */
let _cached_encoder_for_ModifyProblem: $.ASN1Encoder<ModifyProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyProblem */

/* START_OF_SYMBOL_DEFINITION _encode_ModifyProblem */
/**
 * @summary Encodes a(n) ModifyProblem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyProblem, encoded as an ASN.1 Element.
 */
export function _encode_ModifyProblem(
    value: ModifyProblem,
    elGetter: $.ASN1Encoder<ModifyProblem>
) {
    if (!_cached_encoder_for_ModifyProblem) {
        _cached_encoder_for_ModifyProblem = $._encodeInteger;
    }
    return _cached_encoder_for_ModifyProblem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ModifyProblem */

/* eslint-enable */

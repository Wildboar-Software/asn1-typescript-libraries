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

/* START_OF_SYMBOL_DEFINITION DeleteProblem */
/**
 * @summary DeleteProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteProblem  ::=  INTEGER {
 *   child-entry-specified(0),
 *   delete-restriction-problem(1),
 *   -- 1994 extensions
 *   new-entry-specified(2), entry-class-restriction(3), stored-message-exists(4)
 * }(0..ub-error-reasons)
 * ```
 */
export type DeleteProblem = INTEGER;
/* END_OF_SYMBOL_DEFINITION DeleteProblem */

/* START_OF_SYMBOL_DEFINITION DeleteProblem_child_entry_specified */
/**
 * @summary DeleteProblem_child_entry_specified
 * @constant
 * @type {number}
 */
export const DeleteProblem_child_entry_specified: DeleteProblem = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeleteProblem_child_entry_specified */

/* START_OF_SYMBOL_DEFINITION child_entry_specified */
/**
 * @summary DeleteProblem_child_entry_specified
 * @constant
 * @type {number}
 */
export const child_entry_specified: DeleteProblem = DeleteProblem_child_entry_specified; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION child_entry_specified */

/* START_OF_SYMBOL_DEFINITION DeleteProblem_delete_restriction_problem */
/**
 * @summary DeleteProblem_delete_restriction_problem
 * @constant
 * @type {number}
 */
export const DeleteProblem_delete_restriction_problem: DeleteProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeleteProblem_delete_restriction_problem */

/* START_OF_SYMBOL_DEFINITION delete_restriction_problem */
/**
 * @summary DeleteProblem_delete_restriction_problem
 * @constant
 * @type {number}
 */
export const delete_restriction_problem: DeleteProblem = DeleteProblem_delete_restriction_problem; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION delete_restriction_problem */

/* START_OF_SYMBOL_DEFINITION DeleteProblem_new_entry_specified */
/**
 * @summary DeleteProblem_new_entry_specified
 * @constant
 * @type {number}
 */
export const DeleteProblem_new_entry_specified: DeleteProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeleteProblem_new_entry_specified */

/* START_OF_SYMBOL_DEFINITION new_entry_specified */
/**
 * @summary DeleteProblem_new_entry_specified
 * @constant
 * @type {number}
 */
export const new_entry_specified: DeleteProblem = DeleteProblem_new_entry_specified; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION new_entry_specified */

/* START_OF_SYMBOL_DEFINITION DeleteProblem_entry_class_restriction */
/**
 * @summary DeleteProblem_entry_class_restriction
 * @constant
 * @type {number}
 */
export const DeleteProblem_entry_class_restriction: DeleteProblem = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeleteProblem_entry_class_restriction */

/* START_OF_SYMBOL_DEFINITION entry_class_restriction */
/**
 * @summary DeleteProblem_entry_class_restriction
 * @constant
 * @type {number}
 */
export const entry_class_restriction: DeleteProblem = DeleteProblem_entry_class_restriction; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION entry_class_restriction */

/* START_OF_SYMBOL_DEFINITION DeleteProblem_stored_message_exists */
/**
 * @summary DeleteProblem_stored_message_exists
 * @constant
 * @type {number}
 */
export const DeleteProblem_stored_message_exists: DeleteProblem = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeleteProblem_stored_message_exists */

/* START_OF_SYMBOL_DEFINITION stored_message_exists */
/**
 * @summary DeleteProblem_stored_message_exists
 * @constant
 * @type {number}
 */
export const stored_message_exists: DeleteProblem = DeleteProblem_stored_message_exists; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION stored_message_exists */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeleteProblem */
let _cached_decoder_for_DeleteProblem: $.ASN1Decoder<DeleteProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeleteProblem */

/* START_OF_SYMBOL_DEFINITION _decode_DeleteProblem */
/**
 * @summary Decodes an ASN.1 element into a(n) DeleteProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeleteProblem} The decoded data structure.
 */
export function _decode_DeleteProblem(el: _Element) {
    if (!_cached_decoder_for_DeleteProblem) {
        _cached_decoder_for_DeleteProblem = $._decodeInteger;
    }
    return _cached_decoder_for_DeleteProblem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeleteProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeleteProblem */
let _cached_encoder_for_DeleteProblem: $.ASN1Encoder<DeleteProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeleteProblem */

/* START_OF_SYMBOL_DEFINITION _encode_DeleteProblem */
/**
 * @summary Encodes a(n) DeleteProblem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteProblem, encoded as an ASN.1 Element.
 */
export function _encode_DeleteProblem(
    value: DeleteProblem,
    elGetter: $.ASN1Encoder<DeleteProblem>
) {
    if (!_cached_encoder_for_DeleteProblem) {
        _cached_encoder_for_DeleteProblem = $._encodeInteger;
    }
    return _cached_encoder_for_DeleteProblem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DeleteProblem */

/* eslint-enable */

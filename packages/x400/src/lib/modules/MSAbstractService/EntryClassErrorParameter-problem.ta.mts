/* eslint-disable */
import {
    BIT_STRING,
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

/* START_OF_SYMBOL_DEFINITION EntryClassErrorParameter_problem */
/**
 * @summary EntryClassErrorParameter_problem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EntryClassErrorParameter-problem ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type EntryClassErrorParameter_problem = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION EntryClassErrorParameter_problem */

/* START_OF_SYMBOL_DEFINITION EntryClassErrorParameter_problem_unsupported_entry_class */
/**
 * @summary EntryClassErrorParameter_problem_unsupported_entry_class
 * @constant
 */
export const EntryClassErrorParameter_problem_unsupported_entry_class: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION EntryClassErrorParameter_problem_unsupported_entry_class */

/* START_OF_SYMBOL_DEFINITION unsupported_entry_class */
/**
 * @summary unsupported_entry_class
 * @constant
 */
export const unsupported_entry_class: number = EntryClassErrorParameter_problem_unsupported_entry_class; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION unsupported_entry_class */

/* START_OF_SYMBOL_DEFINITION EntryClassErrorParameter_problem_entry_class_not_subscribed */
/**
 * @summary EntryClassErrorParameter_problem_entry_class_not_subscribed
 * @constant
 */
export const EntryClassErrorParameter_problem_entry_class_not_subscribed: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION EntryClassErrorParameter_problem_entry_class_not_subscribed */

/* START_OF_SYMBOL_DEFINITION entry_class_not_subscribed */
/**
 * @summary entry_class_not_subscribed
 * @constant
 */
export const entry_class_not_subscribed: number = EntryClassErrorParameter_problem_entry_class_not_subscribed; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION entry_class_not_subscribed */

/* START_OF_SYMBOL_DEFINITION EntryClassErrorParameter_problem_inappropriate_entry_class */
/**
 * @summary EntryClassErrorParameter_problem_inappropriate_entry_class
 * @constant
 */
export const EntryClassErrorParameter_problem_inappropriate_entry_class: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION EntryClassErrorParameter_problem_inappropriate_entry_class */

/* START_OF_SYMBOL_DEFINITION inappropriate_entry_class */
/**
 * @summary inappropriate_entry_class
 * @constant
 */
export const inappropriate_entry_class: number = EntryClassErrorParameter_problem_inappropriate_entry_class; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION inappropriate_entry_class */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EntryClassErrorParameter_problem */
let _cached_decoder_for_EntryClassErrorParameter_problem: $.ASN1Decoder<EntryClassErrorParameter_problem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EntryClassErrorParameter_problem */

/* START_OF_SYMBOL_DEFINITION _decode_EntryClassErrorParameter_problem */
/**
 * @summary Decodes an ASN.1 element into a(n) EntryClassErrorParameter_problem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EntryClassErrorParameter_problem} The decoded data structure.
 */
export function _decode_EntryClassErrorParameter_problem(el: _Element) {
    if (!_cached_decoder_for_EntryClassErrorParameter_problem) {
        _cached_decoder_for_EntryClassErrorParameter_problem =
            $._decodeBitString;
    }
    return _cached_decoder_for_EntryClassErrorParameter_problem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EntryClassErrorParameter_problem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EntryClassErrorParameter_problem */
let _cached_encoder_for_EntryClassErrorParameter_problem: $.ASN1Encoder<EntryClassErrorParameter_problem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EntryClassErrorParameter_problem */

/* START_OF_SYMBOL_DEFINITION _encode_EntryClassErrorParameter_problem */
/**
 * @summary Encodes a(n) EntryClassErrorParameter_problem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntryClassErrorParameter_problem, encoded as an ASN.1 Element.
 */
export function _encode_EntryClassErrorParameter_problem(
    value: EntryClassErrorParameter_problem,
    elGetter: $.ASN1Encoder<EntryClassErrorParameter_problem>
) {
    if (!_cached_encoder_for_EntryClassErrorParameter_problem) {
        _cached_encoder_for_EntryClassErrorParameter_problem =
            $._encodeBitString;
    }
    return _cached_encoder_for_EntryClassErrorParameter_problem(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_EntryClassErrorParameter_problem */

/* eslint-enable */

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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

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

/**
 * @summary EntryClassErrorParameter_problem_unsupported_entry_class
 * @constant
 */
export const EntryClassErrorParameter_problem_unsupported_entry_class: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary unsupported_entry_class
 * @constant
 */
export const unsupported_entry_class: number = EntryClassErrorParameter_problem_unsupported_entry_class; /* SHORT_NAMED_BIT */

/**
 * @summary EntryClassErrorParameter_problem_entry_class_not_subscribed
 * @constant
 */
export const EntryClassErrorParameter_problem_entry_class_not_subscribed: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary entry_class_not_subscribed
 * @constant
 */
export const entry_class_not_subscribed: number = EntryClassErrorParameter_problem_entry_class_not_subscribed; /* SHORT_NAMED_BIT */

/**
 * @summary EntryClassErrorParameter_problem_inappropriate_entry_class
 * @constant
 */
export const EntryClassErrorParameter_problem_inappropriate_entry_class: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary inappropriate_entry_class
 * @constant
 */
export const inappropriate_entry_class: number = EntryClassErrorParameter_problem_inappropriate_entry_class; /* SHORT_NAMED_BIT */

let _cached_decoder_for_EntryClassErrorParameter_problem: $.ASN1Decoder<EntryClassErrorParameter_problem> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EntryClassErrorParameter_problem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EntryClassErrorParameter_problem} The decoded data structure.
 */
export function _decode_EntryClassErrorParameter_problem(el: _Element): EntryClassErrorParameter_problem {
    if (!_cached_decoder_for_EntryClassErrorParameter_problem) {
        _cached_decoder_for_EntryClassErrorParameter_problem =
            $._decodeBitString;
    }
    return _cached_decoder_for_EntryClassErrorParameter_problem(el);
}

let _cached_encoder_for_EntryClassErrorParameter_problem: $.ASN1Encoder<EntryClassErrorParameter_problem> | null = null;

/**
 * @summary Encodes a(n) EntryClassErrorParameter_problem into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntryClassErrorParameter_problem, encoded as an ASN.1 Element.
 */
export function _encode_EntryClassErrorParameter_problem(
    value: EntryClassErrorParameter_problem,
    elGetter: $.ASN1Encoder<EntryClassErrorParameter_problem>
): _Element {
    if (!_cached_encoder_for_EntryClassErrorParameter_problem) {
        _cached_encoder_for_EntryClassErrorParameter_problem =
            $._encodeBitString;
    }
    return _cached_encoder_for_EntryClassErrorParameter_problem(
        value,
        elGetter
    );
}


/* eslint-enable */

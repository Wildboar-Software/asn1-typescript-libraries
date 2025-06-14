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

/* START_OF_SYMBOL_DEFINITION AutoActionRequestProblem */
/**
 * @summary AutoActionRequestProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoActionRequestProblem  ::=  INTEGER {
 *   unavailable-auto-action-type(0),
 *   auto-action-type-not-subscribed(1),
 *   -- 1994 extension
 *   not-willing-to-perform(2)}(0..ub-error-reasons)
 * ```
 */
export type AutoActionRequestProblem = INTEGER;
/* END_OF_SYMBOL_DEFINITION AutoActionRequestProblem */

/* START_OF_SYMBOL_DEFINITION AutoActionRequestProblem_unavailable_auto_action_type */
/**
 * @summary AutoActionRequestProblem_unavailable_auto_action_type
 * @constant
 * @type {number}
 */
export const AutoActionRequestProblem_unavailable_auto_action_type: AutoActionRequestProblem = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AutoActionRequestProblem_unavailable_auto_action_type */

/* START_OF_SYMBOL_DEFINITION unavailable_auto_action_type */
/**
 * @summary AutoActionRequestProblem_unavailable_auto_action_type
 * @constant
 * @type {number}
 */
export const unavailable_auto_action_type: AutoActionRequestProblem = AutoActionRequestProblem_unavailable_auto_action_type; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unavailable_auto_action_type */

/* START_OF_SYMBOL_DEFINITION AutoActionRequestProblem_auto_action_type_not_subscribed */
/**
 * @summary AutoActionRequestProblem_auto_action_type_not_subscribed
 * @constant
 * @type {number}
 */
export const AutoActionRequestProblem_auto_action_type_not_subscribed: AutoActionRequestProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AutoActionRequestProblem_auto_action_type_not_subscribed */

/* START_OF_SYMBOL_DEFINITION auto_action_type_not_subscribed */
/**
 * @summary AutoActionRequestProblem_auto_action_type_not_subscribed
 * @constant
 * @type {number}
 */
export const auto_action_type_not_subscribed: AutoActionRequestProblem = AutoActionRequestProblem_auto_action_type_not_subscribed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION auto_action_type_not_subscribed */

/* START_OF_SYMBOL_DEFINITION AutoActionRequestProblem_not_willing_to_perform */
/**
 * @summary AutoActionRequestProblem_not_willing_to_perform
 * @constant
 * @type {number}
 */
export const AutoActionRequestProblem_not_willing_to_perform: AutoActionRequestProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AutoActionRequestProblem_not_willing_to_perform */

/* START_OF_SYMBOL_DEFINITION not_willing_to_perform */
/**
 * @summary AutoActionRequestProblem_not_willing_to_perform
 * @constant
 * @type {number}
 */
export const not_willing_to_perform: AutoActionRequestProblem = AutoActionRequestProblem_not_willing_to_perform; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION not_willing_to_perform */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AutoActionRequestProblem */
let _cached_decoder_for_AutoActionRequestProblem: $.ASN1Decoder<AutoActionRequestProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AutoActionRequestProblem */

/* START_OF_SYMBOL_DEFINITION _decode_AutoActionRequestProblem */
/**
 * @summary Decodes an ASN.1 element into a(n) AutoActionRequestProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AutoActionRequestProblem} The decoded data structure.
 */
export function _decode_AutoActionRequestProblem(el: _Element) {
    if (!_cached_decoder_for_AutoActionRequestProblem) {
        _cached_decoder_for_AutoActionRequestProblem = $._decodeInteger;
    }
    return _cached_decoder_for_AutoActionRequestProblem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AutoActionRequestProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AutoActionRequestProblem */
let _cached_encoder_for_AutoActionRequestProblem: $.ASN1Encoder<AutoActionRequestProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AutoActionRequestProblem */

/* START_OF_SYMBOL_DEFINITION _encode_AutoActionRequestProblem */
/**
 * @summary Encodes a(n) AutoActionRequestProblem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AutoActionRequestProblem, encoded as an ASN.1 Element.
 */
export function _encode_AutoActionRequestProblem(
    value: AutoActionRequestProblem,
    elGetter: $.ASN1Encoder<AutoActionRequestProblem>
) {
    if (!_cached_encoder_for_AutoActionRequestProblem) {
        _cached_encoder_for_AutoActionRequestProblem = $._encodeInteger;
    }
    return _cached_encoder_for_AutoActionRequestProblem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AutoActionRequestProblem */

/* eslint-enable */

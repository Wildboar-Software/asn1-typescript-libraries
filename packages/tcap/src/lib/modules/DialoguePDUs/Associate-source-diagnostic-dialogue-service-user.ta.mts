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

/**
 * @summary Associate_source_diagnostic_dialogue_service_user
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Associate-source-diagnostic-dialogue-service-user ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Associate_source_diagnostic_dialogue_service_user = INTEGER;

/**
 * @summary Associate_source_diagnostic_dialogue_service_user_null_
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_dialogue_service_user_null_: Associate_source_diagnostic_dialogue_service_user = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_dialogue_service_user_null_
 * @constant
 * @type {number}
 */
export const null_: Associate_source_diagnostic_dialogue_service_user = Associate_source_diagnostic_dialogue_service_user_null_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_dialogue_service_user_no_reason_given
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_dialogue_service_user_no_reason_given: Associate_source_diagnostic_dialogue_service_user = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_dialogue_service_user_no_reason_given
 * @constant
 * @type {number}
 */
export const no_reason_given: Associate_source_diagnostic_dialogue_service_user = Associate_source_diagnostic_dialogue_service_user_no_reason_given; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_dialogue_service_user_application_context_name_not_supported
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_dialogue_service_user_application_context_name_not_supported: Associate_source_diagnostic_dialogue_service_user = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_dialogue_service_user_application_context_name_not_supported
 * @constant
 * @type {number}
 */
export const application_context_name_not_supported: Associate_source_diagnostic_dialogue_service_user = Associate_source_diagnostic_dialogue_service_user_application_context_name_not_supported; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_Associate_source_diagnostic_dialogue_service_user: $.ASN1Decoder<Associate_source_diagnostic_dialogue_service_user> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Associate_source_diagnostic_dialogue_service_user
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Associate_source_diagnostic_dialogue_service_user} The decoded data structure.
 */
export function _decode_Associate_source_diagnostic_dialogue_service_user(
    el: _Element
) {
    if (
        !_cached_decoder_for_Associate_source_diagnostic_dialogue_service_user
    ) {
        _cached_decoder_for_Associate_source_diagnostic_dialogue_service_user =
            $._decodeInteger;
    }
    return _cached_decoder_for_Associate_source_diagnostic_dialogue_service_user(
        el
    );
}

let _cached_encoder_for_Associate_source_diagnostic_dialogue_service_user: $.ASN1Encoder<Associate_source_diagnostic_dialogue_service_user> | null = null;

/**
 * @summary Encodes a(n) Associate_source_diagnostic_dialogue_service_user into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Associate_source_diagnostic_dialogue_service_user, encoded as an ASN.1 Element.
 */
export function _encode_Associate_source_diagnostic_dialogue_service_user(
    value: Associate_source_diagnostic_dialogue_service_user,
    elGetter: $.ASN1Encoder<Associate_source_diagnostic_dialogue_service_user>
) {
    if (
        !_cached_encoder_for_Associate_source_diagnostic_dialogue_service_user
    ) {
        _cached_encoder_for_Associate_source_diagnostic_dialogue_service_user =
            $._encodeInteger;
    }
    return _cached_encoder_for_Associate_source_diagnostic_dialogue_service_user(
        value,
        elGetter
    );
}


/* eslint-enable */

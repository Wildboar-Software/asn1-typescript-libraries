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
 * @summary RegistrationTypes_registrations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RegistrationTypes-registrations ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type RegistrationTypes_registrations = BIT_STRING;

/**
 * @summary RegistrationTypes_registrations_auto_action_registrations
 * @constant
 */
export const RegistrationTypes_registrations_auto_action_registrations: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary auto_action_registrations
 * @constant
 */
export const auto_action_registrations: number = RegistrationTypes_registrations_auto_action_registrations; /* SHORT_NAMED_BIT */

/**
 * @summary RegistrationTypes_registrations_list_attribute_defaults
 * @constant
 */
export const RegistrationTypes_registrations_list_attribute_defaults: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary list_attribute_defaults
 * @constant
 */
export const list_attribute_defaults: number = RegistrationTypes_registrations_list_attribute_defaults; /* SHORT_NAMED_BIT */

/**
 * @summary RegistrationTypes_registrations_fetch_attribute_defaults
 * @constant
 */
export const RegistrationTypes_registrations_fetch_attribute_defaults: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary fetch_attribute_defaults
 * @constant
 */
export const fetch_attribute_defaults: number = RegistrationTypes_registrations_fetch_attribute_defaults; /* SHORT_NAMED_BIT */

/**
 * @summary RegistrationTypes_registrations_ua_registrations
 * @constant
 */
export const RegistrationTypes_registrations_ua_registrations: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary ua_registrations
 * @constant
 */
export const ua_registrations: number = RegistrationTypes_registrations_ua_registrations; /* SHORT_NAMED_BIT */

/**
 * @summary RegistrationTypes_registrations_submission_defaults
 * @constant
 */
export const RegistrationTypes_registrations_submission_defaults: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary submission_defaults
 * @constant
 */
export const submission_defaults: number = RegistrationTypes_registrations_submission_defaults; /* SHORT_NAMED_BIT */

/**
 * @summary RegistrationTypes_registrations_message_group_registrations
 * @constant
 */
export const RegistrationTypes_registrations_message_group_registrations: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary message_group_registrations
 * @constant
 */
export const message_group_registrations: number = RegistrationTypes_registrations_message_group_registrations; /* SHORT_NAMED_BIT */

let _cached_decoder_for_RegistrationTypes_registrations: $.ASN1Decoder<RegistrationTypes_registrations> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RegistrationTypes_registrations
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RegistrationTypes_registrations} The decoded data structure.
 */
export function _decode_RegistrationTypes_registrations(el: _Element) {
    if (!_cached_decoder_for_RegistrationTypes_registrations) {
        _cached_decoder_for_RegistrationTypes_registrations =
            $._decodeBitString;
    }
    return _cached_decoder_for_RegistrationTypes_registrations(el);
}

let _cached_encoder_for_RegistrationTypes_registrations: $.ASN1Encoder<RegistrationTypes_registrations> | null = null;

/**
 * @summary Encodes a(n) RegistrationTypes_registrations into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegistrationTypes_registrations, encoded as an ASN.1 Element.
 */
export function _encode_RegistrationTypes_registrations(
    value: RegistrationTypes_registrations,
    elGetter: $.ASN1Encoder<RegistrationTypes_registrations>
) {
    if (!_cached_encoder_for_RegistrationTypes_registrations) {
        _cached_encoder_for_RegistrationTypes_registrations =
            $._encodeBitString;
    }
    return _cached_encoder_for_RegistrationTypes_registrations(value, elGetter);
}


/* eslint-enable */

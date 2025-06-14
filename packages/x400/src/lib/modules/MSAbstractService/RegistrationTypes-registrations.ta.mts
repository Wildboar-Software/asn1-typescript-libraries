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

/* START_OF_SYMBOL_DEFINITION RegistrationTypes_registrations */
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
/* END_OF_SYMBOL_DEFINITION RegistrationTypes_registrations */

/* START_OF_SYMBOL_DEFINITION RegistrationTypes_registrations_auto_action_registrations */
/**
 * @summary RegistrationTypes_registrations_auto_action_registrations
 * @constant
 */
export const RegistrationTypes_registrations_auto_action_registrations: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION RegistrationTypes_registrations_auto_action_registrations */

/* START_OF_SYMBOL_DEFINITION auto_action_registrations */
/**
 * @summary auto_action_registrations
 * @constant
 */
export const auto_action_registrations: number = RegistrationTypes_registrations_auto_action_registrations; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION auto_action_registrations */

/* START_OF_SYMBOL_DEFINITION RegistrationTypes_registrations_list_attribute_defaults */
/**
 * @summary RegistrationTypes_registrations_list_attribute_defaults
 * @constant
 */
export const RegistrationTypes_registrations_list_attribute_defaults: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION RegistrationTypes_registrations_list_attribute_defaults */

/* START_OF_SYMBOL_DEFINITION list_attribute_defaults */
/**
 * @summary list_attribute_defaults
 * @constant
 */
export const list_attribute_defaults: number = RegistrationTypes_registrations_list_attribute_defaults; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION list_attribute_defaults */

/* START_OF_SYMBOL_DEFINITION RegistrationTypes_registrations_fetch_attribute_defaults */
/**
 * @summary RegistrationTypes_registrations_fetch_attribute_defaults
 * @constant
 */
export const RegistrationTypes_registrations_fetch_attribute_defaults: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION RegistrationTypes_registrations_fetch_attribute_defaults */

/* START_OF_SYMBOL_DEFINITION fetch_attribute_defaults */
/**
 * @summary fetch_attribute_defaults
 * @constant
 */
export const fetch_attribute_defaults: number = RegistrationTypes_registrations_fetch_attribute_defaults; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION fetch_attribute_defaults */

/* START_OF_SYMBOL_DEFINITION RegistrationTypes_registrations_ua_registrations */
/**
 * @summary RegistrationTypes_registrations_ua_registrations
 * @constant
 */
export const RegistrationTypes_registrations_ua_registrations: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION RegistrationTypes_registrations_ua_registrations */

/* START_OF_SYMBOL_DEFINITION ua_registrations */
/**
 * @summary ua_registrations
 * @constant
 */
export const ua_registrations: number = RegistrationTypes_registrations_ua_registrations; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ua_registrations */

/* START_OF_SYMBOL_DEFINITION RegistrationTypes_registrations_submission_defaults */
/**
 * @summary RegistrationTypes_registrations_submission_defaults
 * @constant
 */
export const RegistrationTypes_registrations_submission_defaults: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION RegistrationTypes_registrations_submission_defaults */

/* START_OF_SYMBOL_DEFINITION submission_defaults */
/**
 * @summary submission_defaults
 * @constant
 */
export const submission_defaults: number = RegistrationTypes_registrations_submission_defaults; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION submission_defaults */

/* START_OF_SYMBOL_DEFINITION RegistrationTypes_registrations_message_group_registrations */
/**
 * @summary RegistrationTypes_registrations_message_group_registrations
 * @constant
 */
export const RegistrationTypes_registrations_message_group_registrations: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION RegistrationTypes_registrations_message_group_registrations */

/* START_OF_SYMBOL_DEFINITION message_group_registrations */
/**
 * @summary message_group_registrations
 * @constant
 */
export const message_group_registrations: number = RegistrationTypes_registrations_message_group_registrations; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION message_group_registrations */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RegistrationTypes_registrations */
let _cached_decoder_for_RegistrationTypes_registrations: $.ASN1Decoder<RegistrationTypes_registrations> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RegistrationTypes_registrations */

/* START_OF_SYMBOL_DEFINITION _decode_RegistrationTypes_registrations */
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
/* END_OF_SYMBOL_DEFINITION _decode_RegistrationTypes_registrations */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RegistrationTypes_registrations */
let _cached_encoder_for_RegistrationTypes_registrations: $.ASN1Encoder<RegistrationTypes_registrations> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RegistrationTypes_registrations */

/* START_OF_SYMBOL_DEFINITION _encode_RegistrationTypes_registrations */
/**
 * @summary Encodes a(n) RegistrationTypes_registrations into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
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

/* END_OF_SYMBOL_DEFINITION _encode_RegistrationTypes_registrations */

/* eslint-enable */

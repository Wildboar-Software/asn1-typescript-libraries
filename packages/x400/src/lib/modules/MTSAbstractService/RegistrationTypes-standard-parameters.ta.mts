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
 * @summary RegistrationTypes_standard_parameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RegistrationTypes-standard-parameters ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type RegistrationTypes_standard_parameters = BIT_STRING;

/**
 * @summary RegistrationTypes_standard_parameters_user_name
 * @constant
 */
export const RegistrationTypes_standard_parameters_user_name: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary user_name
 * @constant
 */
export const user_name: number = RegistrationTypes_standard_parameters_user_name; /* SHORT_NAMED_BIT */

/**
 * @summary RegistrationTypes_standard_parameters_user_address
 * @constant
 */
export const RegistrationTypes_standard_parameters_user_address: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary user_address
 * @constant
 */
export const user_address: number = RegistrationTypes_standard_parameters_user_address; /* SHORT_NAMED_BIT */

/**
 * @summary RegistrationTypes_standard_parameters_deliverable_class
 * @constant
 */
export const RegistrationTypes_standard_parameters_deliverable_class: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary deliverable_class
 * @constant
 */
export const deliverable_class: number = RegistrationTypes_standard_parameters_deliverable_class; /* SHORT_NAMED_BIT */

/**
 * @summary RegistrationTypes_standard_parameters_default_delivery_controls
 * @constant
 */
export const RegistrationTypes_standard_parameters_default_delivery_controls: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary default_delivery_controls
 * @constant
 */
export const default_delivery_controls: number = RegistrationTypes_standard_parameters_default_delivery_controls; /* SHORT_NAMED_BIT */

/**
 * @summary RegistrationTypes_standard_parameters_redirections
 * @constant
 */
export const RegistrationTypes_standard_parameters_redirections: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary redirections
 * @constant
 */
export const redirections: number = RegistrationTypes_standard_parameters_redirections; /* SHORT_NAMED_BIT */

/**
 * @summary RegistrationTypes_standard_parameters_restricted_delivery
 * @constant
 */
export const RegistrationTypes_standard_parameters_restricted_delivery: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary restricted_delivery
 * @constant
 */
export const restricted_delivery: number = RegistrationTypes_standard_parameters_restricted_delivery; /* SHORT_NAMED_BIT */

let _cached_decoder_for_RegistrationTypes_standard_parameters: $.ASN1Decoder<RegistrationTypes_standard_parameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RegistrationTypes_standard_parameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RegistrationTypes_standard_parameters} The decoded data structure.
 */
export function _decode_RegistrationTypes_standard_parameters(el: _Element): RegistrationTypes_standard_parameters {
    if (!_cached_decoder_for_RegistrationTypes_standard_parameters) {
        _cached_decoder_for_RegistrationTypes_standard_parameters =
            $._decodeBitString;
    }
    return _cached_decoder_for_RegistrationTypes_standard_parameters(el);
}

let _cached_encoder_for_RegistrationTypes_standard_parameters: $.ASN1Encoder<RegistrationTypes_standard_parameters> | null = null;

/**
 * @summary Encodes a(n) RegistrationTypes_standard_parameters into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegistrationTypes_standard_parameters, encoded as an ASN.1 Element.
 */
export function _encode_RegistrationTypes_standard_parameters(
    value: RegistrationTypes_standard_parameters,
    elGetter: $.ASN1Encoder<RegistrationTypes_standard_parameters>
): _Element {
    if (!_cached_encoder_for_RegistrationTypes_standard_parameters) {
        _cached_encoder_for_RegistrationTypes_standard_parameters =
            $._encodeBitString;
    }
    return _cached_encoder_for_RegistrationTypes_standard_parameters(
        value,
        elGetter
    );
}


/* eslint-enable */

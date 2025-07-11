/* eslint-disable */
import {
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
import {
    IPMAutoForwardRegistrationParameter,
    _decode_IPMAutoForwardRegistrationParameter,
    _encode_IPMAutoForwardRegistrationParameter,
} from '../IPMSAutoActionTypes/IPMAutoForwardRegistrationParameter.ta.mjs';
import {
    AutoForwardRegistrationParameter88,
    _decode_AutoForwardRegistrationParameter88,
    _encode_AutoForwardRegistrationParameter88,
} from '../IPMSAutoActionTypes/AutoForwardRegistrationParameter88.ta.mjs';
/**
 * @summary ipm_auto_forward_RegistrationParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ipm-auto-forward-RegistrationParameter ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ipm_auto_forward_RegistrationParameter =
    | {
          ipm_auto_forward_registration_parameter: IPMAutoForwardRegistrationParameter;
      } /* CHOICE_ALT_ROOT */
    | {
          auto_forward_registration_parameter_88: AutoForwardRegistrationParameter88;
      } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ipm_auto_forward_RegistrationParameter: $.ASN1Decoder<ipm_auto_forward_RegistrationParameter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ipm_auto_forward_RegistrationParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ipm_auto_forward_RegistrationParameter} The decoded data structure.
 */
export function _decode_ipm_auto_forward_RegistrationParameter(el: _Element): ipm_auto_forward_RegistrationParameter {
    if (!_cached_decoder_for_ipm_auto_forward_RegistrationParameter) {
        _cached_decoder_for_ipm_auto_forward_RegistrationParameter = $._decode_inextensible_choice<ipm_auto_forward_RegistrationParameter>(
            {
                'UNIVERSAL 16': [
                    'ipm_auto_forward_registration_parameter',
                    _decode_IPMAutoForwardRegistrationParameter,
                ],
                'UNIVERSAL 17': [
                    'auto_forward_registration_parameter_88',
                    _decode_AutoForwardRegistrationParameter88,
                ],
            }
        );
    }
    return _cached_decoder_for_ipm_auto_forward_RegistrationParameter(el);
}

let _cached_encoder_for_ipm_auto_forward_RegistrationParameter: $.ASN1Encoder<ipm_auto_forward_RegistrationParameter> | null = null;

/**
 * @summary Encodes a(n) ipm_auto_forward_RegistrationParameter into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ipm_auto_forward_RegistrationParameter, encoded as an ASN.1 Element.
 */
export function _encode_ipm_auto_forward_RegistrationParameter(
    value: ipm_auto_forward_RegistrationParameter,
    elGetter: $.ASN1Encoder<ipm_auto_forward_RegistrationParameter>
): _Element {
    if (!_cached_encoder_for_ipm_auto_forward_RegistrationParameter) {
        _cached_encoder_for_ipm_auto_forward_RegistrationParameter = $._encode_choice<ipm_auto_forward_RegistrationParameter>(
            {
                ipm_auto_forward_registration_parameter: _encode_IPMAutoForwardRegistrationParameter,
                auto_forward_registration_parameter_88: _encode_AutoForwardRegistrationParameter88,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ipm_auto_forward_RegistrationParameter(
        value,
        elGetter
    );
}


/* eslint-enable */

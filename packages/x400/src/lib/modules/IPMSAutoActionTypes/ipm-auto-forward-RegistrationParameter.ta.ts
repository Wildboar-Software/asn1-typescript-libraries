/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
import {
    IPMAutoForwardRegistrationParameter,
    _decode_IPMAutoForwardRegistrationParameter,
    _encode_IPMAutoForwardRegistrationParameter,
} from '../IPMSAutoActionTypes/IPMAutoForwardRegistrationParameter.ta.js';
export {
    IPMAutoForwardRegistrationParameter,
    _decode_IPMAutoForwardRegistrationParameter,
    _encode_IPMAutoForwardRegistrationParameter,
} from '../IPMSAutoActionTypes/IPMAutoForwardRegistrationParameter.ta.js';
import {
    AutoForwardRegistrationParameter88,
    _decode_AutoForwardRegistrationParameter88,
    _encode_AutoForwardRegistrationParameter88,
} from '../IPMSAutoActionTypes/AutoForwardRegistrationParameter88.ta.js';
export {
    AutoForwardRegistrationParameter88,
    _decode_AutoForwardRegistrationParameter88,
    _encode_AutoForwardRegistrationParameter88,
} from '../IPMSAutoActionTypes/AutoForwardRegistrationParameter88.ta.js';

/* START_OF_SYMBOL_DEFINITION ipm_auto_forward_RegistrationParameter */
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
/* END_OF_SYMBOL_DEFINITION ipm_auto_forward_RegistrationParameter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ipm_auto_forward_RegistrationParameter */
let _cached_decoder_for_ipm_auto_forward_RegistrationParameter: $.ASN1Decoder<ipm_auto_forward_RegistrationParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ipm_auto_forward_RegistrationParameter */

/* START_OF_SYMBOL_DEFINITION _decode_ipm_auto_forward_RegistrationParameter */
/**
 * @summary Decodes an ASN.1 element into a(n) ipm_auto_forward_RegistrationParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ipm_auto_forward_RegistrationParameter} The decoded data structure.
 */
export function _decode_ipm_auto_forward_RegistrationParameter(el: _Element) {
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
/* END_OF_SYMBOL_DEFINITION _decode_ipm_auto_forward_RegistrationParameter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ipm_auto_forward_RegistrationParameter */
let _cached_encoder_for_ipm_auto_forward_RegistrationParameter: $.ASN1Encoder<ipm_auto_forward_RegistrationParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ipm_auto_forward_RegistrationParameter */

/* START_OF_SYMBOL_DEFINITION _encode_ipm_auto_forward_RegistrationParameter */
/**
 * @summary Encodes a(n) ipm_auto_forward_RegistrationParameter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ipm_auto_forward_RegistrationParameter, encoded as an ASN.1 Element.
 */
export function _encode_ipm_auto_forward_RegistrationParameter(
    value: ipm_auto_forward_RegistrationParameter,
    elGetter: $.ASN1Encoder<ipm_auto_forward_RegistrationParameter>
) {
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

/* END_OF_SYMBOL_DEFINITION _encode_ipm_auto_forward_RegistrationParameter */

/* eslint-enable */

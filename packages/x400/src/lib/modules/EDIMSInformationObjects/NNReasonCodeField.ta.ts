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
    NNUAMSReasonCodeField,
    _decode_NNUAMSReasonCodeField,
    _encode_NNUAMSReasonCodeField,
} from '../EDIMSInformationObjects/NNUAMSReasonCodeField.ta.js';
export {
    NNUAMSReasonCodeField,
    _decode_NNUAMSReasonCodeField,
    _encode_NNUAMSReasonCodeField,
} from '../EDIMSInformationObjects/NNUAMSReasonCodeField.ta.js';
import {
    NNUserReasonCodeField,
    _decode_NNUserReasonCodeField,
    _encode_NNUserReasonCodeField,
} from '../EDIMSInformationObjects/NNUserReasonCodeField.ta.js';
export {
    NNUserReasonCodeField,
    _decode_NNUserReasonCodeField,
    _encode_NNUserReasonCodeField,
} from '../EDIMSInformationObjects/NNUserReasonCodeField.ta.js';
import {
    NNPDAUReasonCodeField,
    _decode_NNPDAUReasonCodeField,
    _encode_NNPDAUReasonCodeField,
} from '../EDIMSInformationObjects/NNPDAUReasonCodeField.ta.js';
export {
    NNPDAUReasonCodeField,
    _decode_NNPDAUReasonCodeField,
    _encode_NNPDAUReasonCodeField,
} from '../EDIMSInformationObjects/NNPDAUReasonCodeField.ta.js';

/* START_OF_SYMBOL_DEFINITION NNReasonCodeField */
/**
 * @summary NNReasonCodeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NNReasonCodeField  ::=  CHOICE {
 *   nn-ua-ms-reason-code  [0]  NNUAMSReasonCodeField,
 *   nn-user-reason-code   [1]  NNUserReasonCodeField,
 *   nn-pdau-reason-code   [2]  NNPDAUReasonCodeField
 * }
 * ```
 */
export type NNReasonCodeField =
    | { nn_ua_ms_reason_code: NNUAMSReasonCodeField } /* CHOICE_ALT_ROOT */
    | { nn_user_reason_code: NNUserReasonCodeField } /* CHOICE_ALT_ROOT */
    | { nn_pdau_reason_code: NNPDAUReasonCodeField } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION NNReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NNReasonCodeField */
let _cached_decoder_for_NNReasonCodeField: $.ASN1Decoder<NNReasonCodeField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NNReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _decode_NNReasonCodeField */
/**
 * @summary Decodes an ASN.1 element into a(n) NNReasonCodeField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NNReasonCodeField} The decoded data structure.
 */
export function _decode_NNReasonCodeField(el: _Element) {
    if (!_cached_decoder_for_NNReasonCodeField) {
        _cached_decoder_for_NNReasonCodeField = $._decode_inextensible_choice<NNReasonCodeField>(
            {
                'CONTEXT 0': [
                    'nn_ua_ms_reason_code',
                    $._decode_implicit<NNUAMSReasonCodeField>(
                        () => _decode_NNUAMSReasonCodeField
                    ),
                ],
                'CONTEXT 1': [
                    'nn_user_reason_code',
                    $._decode_implicit<NNUserReasonCodeField>(
                        () => _decode_NNUserReasonCodeField
                    ),
                ],
                'CONTEXT 2': [
                    'nn_pdau_reason_code',
                    $._decode_implicit<NNPDAUReasonCodeField>(
                        () => _decode_NNPDAUReasonCodeField
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_NNReasonCodeField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NNReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NNReasonCodeField */
let _cached_encoder_for_NNReasonCodeField: $.ASN1Encoder<NNReasonCodeField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NNReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _encode_NNReasonCodeField */
/**
 * @summary Encodes a(n) NNReasonCodeField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NNReasonCodeField, encoded as an ASN.1 Element.
 */
export function _encode_NNReasonCodeField(
    value: NNReasonCodeField,
    elGetter: $.ASN1Encoder<NNReasonCodeField>
) {
    if (!_cached_encoder_for_NNReasonCodeField) {
        _cached_encoder_for_NNReasonCodeField = $._encode_choice<NNReasonCodeField>(
            {
                nn_ua_ms_reason_code: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_NNUAMSReasonCodeField,
                    $.BER
                ),
                nn_user_reason_code: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_NNUserReasonCodeField,
                    $.BER
                ),
                nn_pdau_reason_code: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_NNPDAUReasonCodeField,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_NNReasonCodeField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NNReasonCodeField */

/* eslint-enable */

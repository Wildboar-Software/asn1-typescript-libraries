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
    NNUAMSBasicCodeField,
    NNUAMSBasicCodeField_unspecified /* IMPORTED_LONG_NAMED_INTEGER */,
    unspecified /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSBasicCodeField_cannot_deliver_to_user /* IMPORTED_LONG_NAMED_INTEGER */,
    cannot_deliver_to_user /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSBasicCodeField_delivery_timeout /* IMPORTED_LONG_NAMED_INTEGER */,
    delivery_timeout /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSBasicCodeField_message_discarded /* IMPORTED_LONG_NAMED_INTEGER */,
    message_discarded /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSBasicCodeField_subscription_terminated /* IMPORTED_LONG_NAMED_INTEGER */,
    subscription_terminated /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSBasicCodeField_forwarding_error /* IMPORTED_LONG_NAMED_INTEGER */,
    forwarding_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSBasicCodeField_security_error /* IMPORTED_LONG_NAMED_INTEGER */,
    security_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_NNUAMSBasicCodeField,
    _encode_NNUAMSBasicCodeField,
} from '../EDIMSInformationObjects/NNUAMSBasicCodeField.ta.js';
export {
    NNUAMSBasicCodeField,
    NNUAMSBasicCodeField_unspecified /* IMPORTED_LONG_NAMED_INTEGER */,
    unspecified /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSBasicCodeField_cannot_deliver_to_user /* IMPORTED_LONG_NAMED_INTEGER */,
    cannot_deliver_to_user /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSBasicCodeField_delivery_timeout /* IMPORTED_LONG_NAMED_INTEGER */,
    delivery_timeout /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSBasicCodeField_message_discarded /* IMPORTED_LONG_NAMED_INTEGER */,
    message_discarded /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSBasicCodeField_subscription_terminated /* IMPORTED_LONG_NAMED_INTEGER */,
    subscription_terminated /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSBasicCodeField_forwarding_error /* IMPORTED_LONG_NAMED_INTEGER */,
    forwarding_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSBasicCodeField_security_error /* IMPORTED_LONG_NAMED_INTEGER */,
    security_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_NNUAMSBasicCodeField,
    _encode_NNUAMSBasicCodeField,
} from '../EDIMSInformationObjects/NNUAMSBasicCodeField.ta.js';
import {
    NNUAMSDiagnosticField,
    NNUAMSDiagnosticField_protocol_violation /* IMPORTED_LONG_NAMED_INTEGER */,
    protocol_violation /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_edim_originator_unknown /* IMPORTED_LONG_NAMED_INTEGER */,
    edim_originator_unknown /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_edim_recipient_unknown /* IMPORTED_LONG_NAMED_INTEGER */,
    edim_recipient_unknown /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_edim_recipient_ambiguous /* IMPORTED_LONG_NAMED_INTEGER */,
    edim_recipient_ambiguous /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_action_request_not_supported /* IMPORTED_LONG_NAMED_INTEGER */,
    action_request_not_supported /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_edim_expired /* IMPORTED_LONG_NAMED_INTEGER */,
    edim_expired /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_edim_obsoleted /* IMPORTED_LONG_NAMED_INTEGER */,
    edim_obsoleted /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_duplicate_edim /* IMPORTED_LONG_NAMED_INTEGER */,
    duplicate_edim /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_unsupported_extension /* IMPORTED_LONG_NAMED_INTEGER */,
    unsupported_extension /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_incomplete_copy_rejected /* IMPORTED_LONG_NAMED_INTEGER */,
    incomplete_copy_rejected /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_edim_too_large_for_application /* IMPORTED_LONG_NAMED_INTEGER */,
    edim_too_large_for_application /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_forwarded_edim_not_delivered /* IMPORTED_LONG_NAMED_INTEGER */,
    forwarded_edim_not_delivered /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_forwarded_edim_delivery_time_out /* IMPORTED_LONG_NAMED_INTEGER */,
    forwarded_edim_delivery_time_out /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_forwarding_loop_detected /* IMPORTED_LONG_NAMED_INTEGER */,
    forwarding_loop_detected /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_unable_to_accept_responsibility /* IMPORTED_LONG_NAMED_INTEGER */,
    unable_to_accept_responsibility /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_interchange_sender_unknown /* IMPORTED_LONG_NAMED_INTEGER */,
    interchange_sender_unknown /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_interchange_recipient_unknown /* IMPORTED_LONG_NAMED_INTEGER */,
    interchange_recipient_unknown /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_invalid_heading_field /* IMPORTED_LONG_NAMED_INTEGER */,
    invalid_heading_field /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_invalid_bodypart_type /* IMPORTED_LONG_NAMED_INTEGER */,
    invalid_bodypart_type /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_invalid_message_type /* IMPORTED_LONG_NAMED_INTEGER */,
    invalid_message_type /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_invalid_syntax_id /* IMPORTED_LONG_NAMED_INTEGER */,
    invalid_syntax_id /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_message_integrity_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    message_integrity_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_forwarded_message_integrity_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    forwarded_message_integrity_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_unsupported_algorithm /* IMPORTED_LONG_NAMED_INTEGER */,
    unsupported_algorithm /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_decryption_failed /* IMPORTED_LONG_NAMED_INTEGER */,
    decryption_failed /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_token_error /* IMPORTED_LONG_NAMED_INTEGER */,
    token_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_unable_to_sign_notification /* IMPORTED_LONG_NAMED_INTEGER */,
    unable_to_sign_notification /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_unable_to_sign_message_receipt /* IMPORTED_LONG_NAMED_INTEGER */,
    unable_to_sign_message_receipt /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_authentication_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    authentication_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_security_context_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    security_context_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_message_sequence_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    message_sequence_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_message_security_labelling_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    message_security_labelling_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_repudiation_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    repudiation_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_proof_service_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    proof_service_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_compression_unsupported /* IMPORTED_LONG_NAMED_INTEGER */,
    compression_unsupported /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_NNUAMSDiagnosticField,
    _encode_NNUAMSDiagnosticField,
} from '../EDIMSInformationObjects/NNUAMSDiagnosticField.ta.js';
export {
    NNUAMSDiagnosticField,
    NNUAMSDiagnosticField_protocol_violation /* IMPORTED_LONG_NAMED_INTEGER */,
    protocol_violation /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_edim_originator_unknown /* IMPORTED_LONG_NAMED_INTEGER */,
    edim_originator_unknown /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_edim_recipient_unknown /* IMPORTED_LONG_NAMED_INTEGER */,
    edim_recipient_unknown /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_edim_recipient_ambiguous /* IMPORTED_LONG_NAMED_INTEGER */,
    edim_recipient_ambiguous /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_action_request_not_supported /* IMPORTED_LONG_NAMED_INTEGER */,
    action_request_not_supported /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_edim_expired /* IMPORTED_LONG_NAMED_INTEGER */,
    edim_expired /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_edim_obsoleted /* IMPORTED_LONG_NAMED_INTEGER */,
    edim_obsoleted /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_duplicate_edim /* IMPORTED_LONG_NAMED_INTEGER */,
    duplicate_edim /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_unsupported_extension /* IMPORTED_LONG_NAMED_INTEGER */,
    unsupported_extension /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_incomplete_copy_rejected /* IMPORTED_LONG_NAMED_INTEGER */,
    incomplete_copy_rejected /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_edim_too_large_for_application /* IMPORTED_LONG_NAMED_INTEGER */,
    edim_too_large_for_application /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_forwarded_edim_not_delivered /* IMPORTED_LONG_NAMED_INTEGER */,
    forwarded_edim_not_delivered /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_forwarded_edim_delivery_time_out /* IMPORTED_LONG_NAMED_INTEGER */,
    forwarded_edim_delivery_time_out /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_forwarding_loop_detected /* IMPORTED_LONG_NAMED_INTEGER */,
    forwarding_loop_detected /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_unable_to_accept_responsibility /* IMPORTED_LONG_NAMED_INTEGER */,
    unable_to_accept_responsibility /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_interchange_sender_unknown /* IMPORTED_LONG_NAMED_INTEGER */,
    interchange_sender_unknown /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_interchange_recipient_unknown /* IMPORTED_LONG_NAMED_INTEGER */,
    interchange_recipient_unknown /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_invalid_heading_field /* IMPORTED_LONG_NAMED_INTEGER */,
    invalid_heading_field /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_invalid_bodypart_type /* IMPORTED_LONG_NAMED_INTEGER */,
    invalid_bodypart_type /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_invalid_message_type /* IMPORTED_LONG_NAMED_INTEGER */,
    invalid_message_type /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_invalid_syntax_id /* IMPORTED_LONG_NAMED_INTEGER */,
    invalid_syntax_id /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_message_integrity_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    message_integrity_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_forwarded_message_integrity_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    forwarded_message_integrity_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_unsupported_algorithm /* IMPORTED_LONG_NAMED_INTEGER */,
    unsupported_algorithm /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_decryption_failed /* IMPORTED_LONG_NAMED_INTEGER */,
    decryption_failed /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_token_error /* IMPORTED_LONG_NAMED_INTEGER */,
    token_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_unable_to_sign_notification /* IMPORTED_LONG_NAMED_INTEGER */,
    unable_to_sign_notification /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_unable_to_sign_message_receipt /* IMPORTED_LONG_NAMED_INTEGER */,
    unable_to_sign_message_receipt /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_authentication_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    authentication_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_security_context_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    security_context_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_message_sequence_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    message_sequence_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_message_security_labelling_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    message_security_labelling_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_repudiation_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    repudiation_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_proof_service_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    proof_service_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUAMSDiagnosticField_compression_unsupported /* IMPORTED_LONG_NAMED_INTEGER */,
    compression_unsupported /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_NNUAMSDiagnosticField,
    _encode_NNUAMSDiagnosticField,
} from '../EDIMSInformationObjects/NNUAMSDiagnosticField.ta.js';

/* START_OF_SYMBOL_DEFINITION NNUAMSReasonCodeField */
/**
 * @summary NNUAMSReasonCodeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NNUAMSReasonCodeField ::= SEQUENCE {
 *   nn-ua-ms-basic-code  [0]  NNUAMSBasicCodeField,
 *   nn-ua-ms-diagnostic  [1]  NNUAMSDiagnosticField OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class NNUAMSReasonCodeField {
    constructor(
        /**
         * @summary `nn_ua_ms_basic_code`.
         * @public
         * @readonly
         */
        readonly nn_ua_ms_basic_code: NNUAMSBasicCodeField,
        /**
         * @summary `nn_ua_ms_diagnostic`.
         * @public
         * @readonly
         */
        readonly nn_ua_ms_diagnostic: OPTIONAL<NNUAMSDiagnosticField>
    ) {}

    /**
     * @summary Restructures an object into a NNUAMSReasonCodeField
     * @description
     *
     * This takes an `object` and converts it to a `NNUAMSReasonCodeField`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NNUAMSReasonCodeField`.
     * @returns {NNUAMSReasonCodeField}
     */
    public static _from_object(
        _o: { [_K in keyof NNUAMSReasonCodeField]: NNUAMSReasonCodeField[_K] }
    ): NNUAMSReasonCodeField {
        return new NNUAMSReasonCodeField(
            _o.nn_ua_ms_basic_code,
            _o.nn_ua_ms_diagnostic
        );
    }
}
/* END_OF_SYMBOL_DEFINITION NNUAMSReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NNUAMSReasonCodeField */
/**
 * @summary The Leading Root Component Types of NNUAMSReasonCodeField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NNUAMSReasonCodeField: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'nn-ua-ms-basic-code',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'nn-ua-ms-diagnostic',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NNUAMSReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NNUAMSReasonCodeField */
/**
 * @summary The Trailing Root Component Types of NNUAMSReasonCodeField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NNUAMSReasonCodeField: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NNUAMSReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NNUAMSReasonCodeField */
/**
 * @summary The Extension Addition Component Types of NNUAMSReasonCodeField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NNUAMSReasonCodeField: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NNUAMSReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NNUAMSReasonCodeField */
let _cached_decoder_for_NNUAMSReasonCodeField: $.ASN1Decoder<NNUAMSReasonCodeField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NNUAMSReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _decode_NNUAMSReasonCodeField */
/**
 * @summary Decodes an ASN.1 element into a(n) NNUAMSReasonCodeField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NNUAMSReasonCodeField} The decoded data structure.
 */
export function _decode_NNUAMSReasonCodeField(el: _Element) {
    if (!_cached_decoder_for_NNUAMSReasonCodeField) {
        _cached_decoder_for_NNUAMSReasonCodeField = function (
            el: _Element
        ): NNUAMSReasonCodeField {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let nn_ua_ms_basic_code!: NNUAMSBasicCodeField;
            let nn_ua_ms_diagnostic: OPTIONAL<NNUAMSDiagnosticField>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'nn-ua-ms-basic-code': (_el: _Element): void => {
                    nn_ua_ms_basic_code = $._decode_implicit<NNUAMSBasicCodeField>(
                        () => _decode_NNUAMSBasicCodeField
                    )(_el);
                },
                'nn-ua-ms-diagnostic': (_el: _Element): void => {
                    nn_ua_ms_diagnostic = $._decode_implicit<NNUAMSDiagnosticField>(
                        () => _decode_NNUAMSDiagnosticField
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NNUAMSReasonCodeField,
                _extension_additions_list_spec_for_NNUAMSReasonCodeField,
                _root_component_type_list_2_spec_for_NNUAMSReasonCodeField,
                undefined
            );
            return new NNUAMSReasonCodeField /* SEQUENCE_CONSTRUCTOR_CALL */(
                nn_ua_ms_basic_code,
                nn_ua_ms_diagnostic
            );
        };
    }
    return _cached_decoder_for_NNUAMSReasonCodeField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NNUAMSReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NNUAMSReasonCodeField */
let _cached_encoder_for_NNUAMSReasonCodeField: $.ASN1Encoder<NNUAMSReasonCodeField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NNUAMSReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _encode_NNUAMSReasonCodeField */
/**
 * @summary Encodes a(n) NNUAMSReasonCodeField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NNUAMSReasonCodeField, encoded as an ASN.1 Element.
 */
export function _encode_NNUAMSReasonCodeField(
    value: NNUAMSReasonCodeField,
    elGetter: $.ASN1Encoder<NNUAMSReasonCodeField>
) {
    if (!_cached_encoder_for_NNUAMSReasonCodeField) {
        _cached_encoder_for_NNUAMSReasonCodeField = function (
            value: NNUAMSReasonCodeField,
            elGetter: $.ASN1Encoder<NNUAMSReasonCodeField>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_NNUAMSBasicCodeField,
                            $.BER
                        )(value.nn_ua_ms_basic_code, $.BER),
                        /* IF_ABSENT  */ value.nn_ua_ms_diagnostic === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_NNUAMSDiagnosticField,
                                  $.BER
                              )(value.nn_ua_ms_diagnostic, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_NNUAMSReasonCodeField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NNUAMSReasonCodeField */

/* eslint-enable */

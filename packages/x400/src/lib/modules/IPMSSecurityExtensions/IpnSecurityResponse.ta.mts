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
    IpnSecurityResponse_content_or_arguments,
    _decode_IpnSecurityResponse_content_or_arguments,
    _encode_IpnSecurityResponse_content_or_arguments,
} from '../IPMSSecurityExtensions/IpnSecurityResponse-content-or-arguments.ta.mjs';
export {
    IpnSecurityResponse_content_or_arguments,
    _decode_IpnSecurityResponse_content_or_arguments,
    _encode_IpnSecurityResponse_content_or_arguments,
} from '../IPMSSecurityExtensions/IpnSecurityResponse-content-or-arguments.ta.mjs';
import {
    SecurityDiagnosticCode,
    SecurityDiagnosticCode_integrity_failure_on_subject_message /* IMPORTED_LONG_NAMED_INTEGER */,
    integrity_failure_on_subject_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_integrity_failure_on_forwarded_message /* IMPORTED_LONG_NAMED_INTEGER */,
    integrity_failure_on_forwarded_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_moac_failure_on_subject_message /* IMPORTED_LONG_NAMED_INTEGER */,
    moac_failure_on_subject_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_unsupported_security_policy /* IMPORTED_LONG_NAMED_INTEGER */,
    unsupported_security_policy /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_unsupported_algorithm_identifier /* IMPORTED_LONG_NAMED_INTEGER */,
    unsupported_algorithm_identifier /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_decryption_failed /* IMPORTED_LONG_NAMED_INTEGER */,
    decryption_failed /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_token_error /* IMPORTED_LONG_NAMED_INTEGER */,
    token_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_unable_to_sign_notification /* IMPORTED_LONG_NAMED_INTEGER */,
    unable_to_sign_notification /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_unable_to_sign_message_receipt /* IMPORTED_LONG_NAMED_INTEGER */,
    unable_to_sign_message_receipt /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_authentication_failure_on_subject_message /* IMPORTED_LONG_NAMED_INTEGER */,
    authentication_failure_on_subject_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_security_context_failure_message /* IMPORTED_LONG_NAMED_INTEGER */,
    security_context_failure_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_message_sequence_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    message_sequence_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_message_security_labelling_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    message_security_labelling_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_repudiation_failure_of_message /* IMPORTED_LONG_NAMED_INTEGER */,
    repudiation_failure_of_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_failure_of_proof_of_message /* IMPORTED_LONG_NAMED_INTEGER */,
    failure_of_proof_of_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_signature_key_unobtainable /* IMPORTED_LONG_NAMED_INTEGER */,
    signature_key_unobtainable /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_decryption_key_unobtainable /* IMPORTED_LONG_NAMED_INTEGER */,
    decryption_key_unobtainable /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_key_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    key_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_unsupported_request_for_security_service /* IMPORTED_LONG_NAMED_INTEGER */,
    unsupported_request_for_security_service /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_inconsistent_request_for_security_service /* IMPORTED_LONG_NAMED_INTEGER */,
    inconsistent_request_for_security_service /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_ipn_non_repudiation_provided_instead_of_content_proof /* IMPORTED_LONG_NAMED_INTEGER */,
    ipn_non_repudiation_provided_instead_of_content_proof /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_token_decryption_failed /* IMPORTED_LONG_NAMED_INTEGER */,
    token_decryption_failed /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_double_enveloping_message_restoring_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    double_enveloping_message_restoring_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_unauthorised_dl_member /* IMPORTED_LONG_NAMED_INTEGER */,
    unauthorised_dl_member /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_reception_security_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    reception_security_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_unsuitable_alternate_recipient /* IMPORTED_LONG_NAMED_INTEGER */,
    unsuitable_alternate_recipient /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_security_services_refusal /* IMPORTED_LONG_NAMED_INTEGER */,
    security_services_refusal /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_unauthorised_recipient /* IMPORTED_LONG_NAMED_INTEGER */,
    unauthorised_recipient /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_unknown_certification_authority_name /* IMPORTED_LONG_NAMED_INTEGER */,
    unknown_certification_authority_name /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_unknown_dl_name /* IMPORTED_LONG_NAMED_INTEGER */,
    unknown_dl_name /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_unknown_originator_name /* IMPORTED_LONG_NAMED_INTEGER */,
    unknown_originator_name /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_unknown_recipient_name /* IMPORTED_LONG_NAMED_INTEGER */,
    unknown_recipient_name /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_security_policy_violation /* IMPORTED_LONG_NAMED_INTEGER */,
    security_policy_violation /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_SecurityDiagnosticCode,
    _encode_SecurityDiagnosticCode,
} from '../IPMSSecurityExtensions/SecurityDiagnosticCode.ta.mjs';
export {
    SecurityDiagnosticCode,
    SecurityDiagnosticCode_integrity_failure_on_subject_message /* IMPORTED_LONG_NAMED_INTEGER */,
    integrity_failure_on_subject_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_integrity_failure_on_forwarded_message /* IMPORTED_LONG_NAMED_INTEGER */,
    integrity_failure_on_forwarded_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_moac_failure_on_subject_message /* IMPORTED_LONG_NAMED_INTEGER */,
    moac_failure_on_subject_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_unsupported_security_policy /* IMPORTED_LONG_NAMED_INTEGER */,
    unsupported_security_policy /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_unsupported_algorithm_identifier /* IMPORTED_LONG_NAMED_INTEGER */,
    unsupported_algorithm_identifier /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_decryption_failed /* IMPORTED_LONG_NAMED_INTEGER */,
    decryption_failed /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_token_error /* IMPORTED_LONG_NAMED_INTEGER */,
    token_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_unable_to_sign_notification /* IMPORTED_LONG_NAMED_INTEGER */,
    unable_to_sign_notification /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_unable_to_sign_message_receipt /* IMPORTED_LONG_NAMED_INTEGER */,
    unable_to_sign_message_receipt /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_authentication_failure_on_subject_message /* IMPORTED_LONG_NAMED_INTEGER */,
    authentication_failure_on_subject_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_security_context_failure_message /* IMPORTED_LONG_NAMED_INTEGER */,
    security_context_failure_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_message_sequence_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    message_sequence_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_message_security_labelling_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    message_security_labelling_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_repudiation_failure_of_message /* IMPORTED_LONG_NAMED_INTEGER */,
    repudiation_failure_of_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_failure_of_proof_of_message /* IMPORTED_LONG_NAMED_INTEGER */,
    failure_of_proof_of_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_signature_key_unobtainable /* IMPORTED_LONG_NAMED_INTEGER */,
    signature_key_unobtainable /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_decryption_key_unobtainable /* IMPORTED_LONG_NAMED_INTEGER */,
    decryption_key_unobtainable /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_key_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    key_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_unsupported_request_for_security_service /* IMPORTED_LONG_NAMED_INTEGER */,
    unsupported_request_for_security_service /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_inconsistent_request_for_security_service /* IMPORTED_LONG_NAMED_INTEGER */,
    inconsistent_request_for_security_service /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_ipn_non_repudiation_provided_instead_of_content_proof /* IMPORTED_LONG_NAMED_INTEGER */,
    ipn_non_repudiation_provided_instead_of_content_proof /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_token_decryption_failed /* IMPORTED_LONG_NAMED_INTEGER */,
    token_decryption_failed /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_double_enveloping_message_restoring_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    double_enveloping_message_restoring_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_unauthorised_dl_member /* IMPORTED_LONG_NAMED_INTEGER */,
    unauthorised_dl_member /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_reception_security_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    reception_security_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_unsuitable_alternate_recipient /* IMPORTED_LONG_NAMED_INTEGER */,
    unsuitable_alternate_recipient /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_security_services_refusal /* IMPORTED_LONG_NAMED_INTEGER */,
    security_services_refusal /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_unauthorised_recipient /* IMPORTED_LONG_NAMED_INTEGER */,
    unauthorised_recipient /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_unknown_certification_authority_name /* IMPORTED_LONG_NAMED_INTEGER */,
    unknown_certification_authority_name /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_unknown_dl_name /* IMPORTED_LONG_NAMED_INTEGER */,
    unknown_dl_name /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_unknown_originator_name /* IMPORTED_LONG_NAMED_INTEGER */,
    unknown_originator_name /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_unknown_recipient_name /* IMPORTED_LONG_NAMED_INTEGER */,
    unknown_recipient_name /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityDiagnosticCode_security_policy_violation /* IMPORTED_LONG_NAMED_INTEGER */,
    security_policy_violation /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_SecurityDiagnosticCode,
    _encode_SecurityDiagnosticCode,
} from '../IPMSSecurityExtensions/SecurityDiagnosticCode.ta.mjs';

/* START_OF_SYMBOL_DEFINITION IpnSecurityResponse */
/**
 * @summary IpnSecurityResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IpnSecurityResponse ::= SET {
 *   content-or-arguments
 *     CHOICE {original-content             OriginalContent,
 *             original-security-arguments
 *               SET {original-content-integrity-check
 *                      [0]  OriginalContentIntegrityCheck OPTIONAL,
 *                    original-message-origin-authentication-check
 *                      [1]  OriginalMessageOriginAuthenticationCheck OPTIONAL,
 *                    original-message-token
 *                      [2]  OriginalMessageToken OPTIONAL}},
 *   security-diagnostic-code  SecurityDiagnosticCode OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class IpnSecurityResponse {
    constructor(
        /**
         * @summary `content_or_arguments`.
         * @public
         * @readonly
         */
        readonly content_or_arguments: IpnSecurityResponse_content_or_arguments,
        /**
         * @summary `security_diagnostic_code`.
         * @public
         * @readonly
         */
        readonly security_diagnostic_code: OPTIONAL<SecurityDiagnosticCode>
    ) {}

    /**
     * @summary Restructures an object into a IpnSecurityResponse
     * @description
     *
     * This takes an `object` and converts it to a `IpnSecurityResponse`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IpnSecurityResponse`.
     * @returns {IpnSecurityResponse}
     */
    public static _from_object(
        _o: { [_K in keyof IpnSecurityResponse]: IpnSecurityResponse[_K] }
    ): IpnSecurityResponse {
        return new IpnSecurityResponse(
            _o.content_or_arguments,
            _o.security_diagnostic_code
        );
    }
}
/* END_OF_SYMBOL_DEFINITION IpnSecurityResponse */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IpnSecurityResponse */
/**
 * @summary The Leading Root Component Types of IpnSecurityResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IpnSecurityResponse: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'content-or-arguments',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'security-diagnostic-code',
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IpnSecurityResponse */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IpnSecurityResponse */
/**
 * @summary The Trailing Root Component Types of IpnSecurityResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IpnSecurityResponse: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IpnSecurityResponse */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IpnSecurityResponse */
/**
 * @summary The Extension Addition Component Types of IpnSecurityResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IpnSecurityResponse: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IpnSecurityResponse */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IpnSecurityResponse */
let _cached_decoder_for_IpnSecurityResponse: $.ASN1Decoder<IpnSecurityResponse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IpnSecurityResponse */

/* START_OF_SYMBOL_DEFINITION _decode_IpnSecurityResponse */
/**
 * @summary Decodes an ASN.1 element into a(n) IpnSecurityResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IpnSecurityResponse} The decoded data structure.
 */
export function _decode_IpnSecurityResponse(el: _Element) {
    if (!_cached_decoder_for_IpnSecurityResponse) {
        _cached_decoder_for_IpnSecurityResponse = function (
            el: _Element
        ): IpnSecurityResponse {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let content_or_arguments!: IpnSecurityResponse_content_or_arguments;
            let security_diagnostic_code: OPTIONAL<SecurityDiagnosticCode>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'content-or-arguments': (_el: _Element): void => {
                    content_or_arguments = _decode_IpnSecurityResponse_content_or_arguments(
                        _el
                    );
                },
                'security-diagnostic-code': (_el: _Element): void => {
                    security_diagnostic_code = _decode_SecurityDiagnosticCode(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_IpnSecurityResponse,
                _extension_additions_list_spec_for_IpnSecurityResponse,
                _root_component_type_list_2_spec_for_IpnSecurityResponse,
                undefined
            );
            return new IpnSecurityResponse /* SET_CONSTRUCTOR_CALL */(
                content_or_arguments,
                security_diagnostic_code
            );
        };
    }
    return _cached_decoder_for_IpnSecurityResponse(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IpnSecurityResponse */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IpnSecurityResponse */
let _cached_encoder_for_IpnSecurityResponse: $.ASN1Encoder<IpnSecurityResponse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IpnSecurityResponse */

/* START_OF_SYMBOL_DEFINITION _encode_IpnSecurityResponse */
/**
 * @summary Encodes a(n) IpnSecurityResponse into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IpnSecurityResponse, encoded as an ASN.1 Element.
 */
export function _encode_IpnSecurityResponse(
    value: IpnSecurityResponse,
    elGetter: $.ASN1Encoder<IpnSecurityResponse>
) {
    if (!_cached_encoder_for_IpnSecurityResponse) {
        _cached_encoder_for_IpnSecurityResponse = function (
            value: IpnSecurityResponse,
            elGetter: $.ASN1Encoder<IpnSecurityResponse>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_IpnSecurityResponse_content_or_arguments(
                            value.content_or_arguments,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.security_diagnostic_code ===
                        undefined
                            ? undefined
                            : _encode_SecurityDiagnosticCode(
                                  value.security_diagnostic_code,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_IpnSecurityResponse(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IpnSecurityResponse */

/* eslint-enable */

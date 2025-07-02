/* eslint-disable */
import {
    OPTIONAL,
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
    SignatureStatus,
    signature_absent /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_SignatureStatus,
    _encode_SignatureStatus,
} from '../MSGeneralAttributeTypes/SignatureStatus.ta.mjs';
/**
 * @summary SignatureVerificationStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignatureVerificationStatus ::= SET {
 *   content-integrity-check
 *     [0]  SignatureStatus DEFAULT signature-absent,
 *   message-origin-authentication-check
 *     [1]  SignatureStatus DEFAULT signature-absent,
 *   message-token
 *     [2]  SignatureStatus DEFAULT signature-absent,
 *   report-origin-authentication-check
 *     [3]  SignatureStatus DEFAULT signature-absent,
 *   proof-of-delivery
 *     [4]  SignatureStatus DEFAULT signature-absent,
 *   proof-of-submission
 *     [5]  SignatureStatus DEFAULT signature-absent
 * }
 * ```
 *
 */
export class SignatureVerificationStatus {
    constructor(
        /**
         * @summary `content_integrity_check`.
         * @public
         * @readonly
         */
        readonly content_integrity_check: OPTIONAL<SignatureStatus>,
        /**
         * @summary `message_origin_authentication_check`.
         * @public
         * @readonly
         */
        readonly message_origin_authentication_check: OPTIONAL<SignatureStatus>,
        /**
         * @summary `message_token`.
         * @public
         * @readonly
         */
        readonly message_token: OPTIONAL<SignatureStatus>,
        /**
         * @summary `report_origin_authentication_check`.
         * @public
         * @readonly
         */
        readonly report_origin_authentication_check: OPTIONAL<SignatureStatus>,
        /**
         * @summary `proof_of_delivery`.
         * @public
         * @readonly
         */
        readonly proof_of_delivery: OPTIONAL<SignatureStatus>,
        /**
         * @summary `proof_of_submission`.
         * @public
         * @readonly
         */
        readonly proof_of_submission: OPTIONAL<SignatureStatus>
    ) {}

    /**
     * @summary Restructures an object into a SignatureVerificationStatus
     * @description
     *
     * This takes an `object` and converts it to a `SignatureVerificationStatus`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SignatureVerificationStatus`.
     * @returns {SignatureVerificationStatus}
     */
    public static _from_object(
        _o: {
            [_K in keyof SignatureVerificationStatus]: SignatureVerificationStatus[_K];
        }
    ): SignatureVerificationStatus {
        return new SignatureVerificationStatus(
            _o.content_integrity_check,
            _o.message_origin_authentication_check,
            _o.message_token,
            _o.report_origin_authentication_check,
            _o.proof_of_delivery,
            _o.proof_of_submission
        );
    }

    /**
     * @summary Getter that returns the default value for `content_integrity_check`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_content_integrity_check() {
        return signature_absent;
    }
    /**
     * @summary Getter that returns the default value for `message_origin_authentication_check`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_message_origin_authentication_check() {
        return signature_absent;
    }
    /**
     * @summary Getter that returns the default value for `message_token`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_message_token() {
        return signature_absent;
    }
    /**
     * @summary Getter that returns the default value for `report_origin_authentication_check`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_report_origin_authentication_check() {
        return signature_absent;
    }
    /**
     * @summary Getter that returns the default value for `proof_of_delivery`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_proof_of_delivery() {
        return signature_absent;
    }
    /**
     * @summary Getter that returns the default value for `proof_of_submission`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_proof_of_submission() {
        return signature_absent;
    }
}

/**
 * @summary The Leading Root Component Types of SignatureVerificationStatus
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SignatureVerificationStatus: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'content-integrity-check',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'message-origin-authentication-check',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'message-token',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'report-origin-authentication-check',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'proof-of-delivery',
        true,
        $.hasTag(_TagClass.context, 4)
    ),
    new $.ComponentSpec(
        'proof-of-submission',
        true,
        $.hasTag(_TagClass.context, 5)
    ),
];

/**
 * @summary The Trailing Root Component Types of SignatureVerificationStatus
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SignatureVerificationStatus: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of SignatureVerificationStatus
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SignatureVerificationStatus: $.ComponentSpec[] = [];

let _cached_decoder_for_SignatureVerificationStatus: $.ASN1Decoder<SignatureVerificationStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SignatureVerificationStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignatureVerificationStatus} The decoded data structure.
 */
export function _decode_SignatureVerificationStatus(el: _Element): SignatureVerificationStatus {
    if (!_cached_decoder_for_SignatureVerificationStatus) {
        _cached_decoder_for_SignatureVerificationStatus = function (
            el: _Element
        ): SignatureVerificationStatus {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let content_integrity_check: OPTIONAL<SignatureStatus> =
                SignatureVerificationStatus._default_value_for_content_integrity_check;
            let message_origin_authentication_check: OPTIONAL<SignatureStatus> =
                SignatureVerificationStatus._default_value_for_message_origin_authentication_check;
            let message_token: OPTIONAL<SignatureStatus> =
                SignatureVerificationStatus._default_value_for_message_token;
            let report_origin_authentication_check: OPTIONAL<SignatureStatus> =
                SignatureVerificationStatus._default_value_for_report_origin_authentication_check;
            let proof_of_delivery: OPTIONAL<SignatureStatus> =
                SignatureVerificationStatus._default_value_for_proof_of_delivery;
            let proof_of_submission: OPTIONAL<SignatureStatus> =
                SignatureVerificationStatus._default_value_for_proof_of_submission;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                'content-integrity-check': (_el: _Element): void => {
                    content_integrity_check = $._decode_explicit<SignatureStatus>(
                        () => _decode_SignatureStatus
                    )(_el);
                },
                'message-origin-authentication-check': (
                    _el: _Element
                ): void => {
                    message_origin_authentication_check = $._decode_explicit<SignatureStatus>(
                        () => _decode_SignatureStatus
                    )(_el);
                },
                'message-token': (_el: _Element): void => {
                    message_token = $._decode_explicit<SignatureStatus>(
                        () => _decode_SignatureStatus
                    )(_el);
                },
                'report-origin-authentication-check': (_el: _Element): void => {
                    report_origin_authentication_check = $._decode_explicit<SignatureStatus>(
                        () => _decode_SignatureStatus
                    )(_el);
                },
                'proof-of-delivery': (_el: _Element): void => {
                    proof_of_delivery = $._decode_explicit<SignatureStatus>(
                        () => _decode_SignatureStatus
                    )(_el);
                },
                'proof-of-submission': (_el: _Element): void => {
                    proof_of_submission = $._decode_explicit<SignatureStatus>(
                        () => _decode_SignatureStatus
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SignatureVerificationStatus,
                _extension_additions_list_spec_for_SignatureVerificationStatus,
                _root_component_type_list_2_spec_for_SignatureVerificationStatus,
                undefined
            );
            return new SignatureVerificationStatus /* SET_CONSTRUCTOR_CALL */(
                content_integrity_check,
                message_origin_authentication_check,
                message_token,
                report_origin_authentication_check,
                proof_of_delivery,
                proof_of_submission
            );
        };
    }
    return _cached_decoder_for_SignatureVerificationStatus(el);
}

let _cached_encoder_for_SignatureVerificationStatus: $.ASN1Encoder<SignatureVerificationStatus> | null = null;

/**
 * @summary Encodes a(n) SignatureVerificationStatus into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignatureVerificationStatus, encoded as an ASN.1 Element.
 */
export function _encode_SignatureVerificationStatus(
    value: SignatureVerificationStatus,
    elGetter: $.ASN1Encoder<SignatureVerificationStatus>
): _Element {
    if (!_cached_encoder_for_SignatureVerificationStatus) {
        _cached_encoder_for_SignatureVerificationStatus = function (
            value: SignatureVerificationStatus        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.content_integrity_check ===
                            undefined ||
                        $.deepEq(
                            value.content_integrity_check,
                            SignatureVerificationStatus._default_value_for_content_integrity_check
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_SignatureStatus,
                                  $.BER
                              )(value.content_integrity_check, $.BER),
                        /* IF_DEFAULT */ value.message_origin_authentication_check ===
                            undefined ||
                        $.deepEq(
                            value.message_origin_authentication_check,
                            SignatureVerificationStatus._default_value_for_message_origin_authentication_check
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_SignatureStatus,
                                  $.BER
                              )(
                                  value.message_origin_authentication_check,
                                  $.BER
                              ),
                        /* IF_DEFAULT */ value.message_token === undefined ||
                        $.deepEq(
                            value.message_token,
                            SignatureVerificationStatus._default_value_for_message_token
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_SignatureStatus,
                                  $.BER
                              )(value.message_token, $.BER),
                        /* IF_DEFAULT */ value.report_origin_authentication_check ===
                            undefined ||
                        $.deepEq(
                            value.report_origin_authentication_check,
                            SignatureVerificationStatus._default_value_for_report_origin_authentication_check
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_SignatureStatus,
                                  $.BER
                              )(
                                  value.report_origin_authentication_check,
                                  $.BER
                              ),
                        /* IF_DEFAULT */ value.proof_of_delivery ===
                            undefined ||
                        $.deepEq(
                            value.proof_of_delivery,
                            SignatureVerificationStatus._default_value_for_proof_of_delivery
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_SignatureStatus,
                                  $.BER
                              )(value.proof_of_delivery, $.BER),
                        /* IF_DEFAULT */ value.proof_of_submission ===
                            undefined ||
                        $.deepEq(
                            value.proof_of_submission,
                            SignatureVerificationStatus._default_value_for_proof_of_submission
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  5,
                                  () => _encode_SignatureStatus,
                                  $.BER
                              )(value.proof_of_submission, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SignatureVerificationStatus(value, elGetter);
}


/* eslint-enable */

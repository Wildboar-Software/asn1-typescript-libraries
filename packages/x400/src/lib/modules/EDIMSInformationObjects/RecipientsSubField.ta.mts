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
    RecipientField,
    _decode_RecipientField,
    _encode_RecipientField,
} from '../EDIMSInformationObjects/RecipientField.ta.mjs';
import {
    ActionRequestField,
    _decode_ActionRequestField,
    _encode_ActionRequestField,
} from '../EDIMSInformationObjects/ActionRequestField.ta.mjs';
import {
    EDINotificationRequestsField,
    _decode_EDINotificationRequestsField,
    _encode_EDINotificationRequestsField,
} from '../EDIMSInformationObjects/EDINotificationRequestsField.ta.mjs';
import {
    ResponsibilityPassingAllowedField,
    _decode_ResponsibilityPassingAllowedField,
    _encode_ResponsibilityPassingAllowedField,
} from '../EDIMSInformationObjects/ResponsibilityPassingAllowedField.ta.mjs';
import {
    InterchangeRecipientField,
    _decode_InterchangeRecipientField,
    _encode_InterchangeRecipientField,
} from '../EDIMSInformationObjects/InterchangeRecipientField.ta.mjs';
import {
    RecipientReferenceField,
    _decode_RecipientReferenceField,
    _encode_RecipientReferenceField,
} from '../EDIMSInformationObjects/RecipientReferenceField.ta.mjs';
import {
    InterchangeControlReferenceField,
    _decode_InterchangeControlReferenceField,
    _encode_InterchangeControlReferenceField,
} from '../EDIMSInformationObjects/InterchangeControlReferenceField.ta.mjs';
import {
    ProcessingPriorityCodeField,
    _decode_ProcessingPriorityCodeField,
    _encode_ProcessingPriorityCodeField,
} from '../EDIMSInformationObjects/ProcessingPriorityCodeField.ta.mjs';
import {
    AcknowledgementRequestField,
    _decode_AcknowledgementRequestField,
    _encode_AcknowledgementRequestField,
} from '../EDIMSInformationObjects/AcknowledgementRequestField.ta.mjs';
import {
    CommunicationsAgreementIdField,
    _decode_CommunicationsAgreementIdField,
    _encode_CommunicationsAgreementIdField,
} from '../EDIMSInformationObjects/CommunicationsAgreementIdField.ta.mjs';
import {
    TestIndicatorField,
    _decode_TestIndicatorField,
    _encode_TestIndicatorField,
} from '../EDIMSInformationObjects/TestIndicatorField.ta.mjs';
import {
    AuthorizationInformationField,
    _decode_AuthorizationInformationField,
    _encode_AuthorizationInformationField,
} from '../EDIMSInformationObjects/AuthorizationInformationField.ta.mjs';
import {
    RecipientExtensionsField,
    _decode_RecipientExtensionsField,
    _encode_RecipientExtensionsField,
} from '../EDIMSInformationObjects/RecipientExtensionsField.ta.mjs';
import {
    id_for_action,
} from "../EDIMSObjectIdentifiers/id-for-action.va.mjs";

/**
 * @summary RecipientsSubField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientsSubField ::= SEQUENCE {
 *   recipient                        [1]  RecipientField,
 *   action-request
 *     [2]  ActionRequestField DEFAULT {id-for-action},
 *   edi-notification-requests-field  [3]  EDINotificationRequestsField OPTIONAL,
 *   responsibility-passing-allowed
 *     [4]  ResponsibilityPassingAllowedField DEFAULT FALSE,
 *   -- Begin Fields from EDIFACT UNB
 *   interchange-recipient            [5]  InterchangeRecipientField OPTIONAL,
 *   recipient-reference              [6]  RecipientReferenceField OPTIONAL,
 *   interchange-control-reference
 *     [7]  InterchangeControlReferenceField OPTIONAL,
 *   processing-priority-code         [8]  ProcessingPriorityCodeField OPTIONAL,
 *   acknowledgement-request
 *     [9]  AcknowledgementRequestField DEFAULT FALSE,
 *   communications-agreement-id
 *     [10]  CommunicationsAgreementIdField OPTIONAL,
 *   test-indicator                   [11]  TestIndicatorField DEFAULT FALSE,
 *   -- End Fields from EDIFACT UNB
 *   -- Begin Fields from ANSIX12 ISA
 *   authorization-information        [12]  AuthorizationInformationField OPTIONAL,
 *   -- End Fields from ANSIX12 ISA
 *   recipient-extensions             [13]  RecipientExtensionsField OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class RecipientsSubField {
    constructor(
        /**
         * @summary `recipient`.
         * @public
         * @readonly
         */
        readonly recipient: RecipientField,
        /**
         * @summary `action_request`.
         * @public
         * @readonly
         */
        readonly action_request: OPTIONAL<ActionRequestField>,
        /**
         * @summary `edi_notification_requests_field`.
         * @public
         * @readonly
         */
        readonly edi_notification_requests_field: OPTIONAL<EDINotificationRequestsField>,
        /**
         * @summary `responsibility_passing_allowed`.
         * @public
         * @readonly
         */
        readonly responsibility_passing_allowed: OPTIONAL<ResponsibilityPassingAllowedField>,
        /**
         * @summary `interchange_recipient`.
         * @public
         * @readonly
         */
        readonly interchange_recipient: OPTIONAL<InterchangeRecipientField>,
        /**
         * @summary `recipient_reference`.
         * @public
         * @readonly
         */
        readonly recipient_reference: OPTIONAL<RecipientReferenceField>,
        /**
         * @summary `interchange_control_reference`.
         * @public
         * @readonly
         */
        readonly interchange_control_reference: OPTIONAL<InterchangeControlReferenceField>,
        /**
         * @summary `processing_priority_code`.
         * @public
         * @readonly
         */
        readonly processing_priority_code: OPTIONAL<ProcessingPriorityCodeField>,
        /**
         * @summary `acknowledgement_request`.
         * @public
         * @readonly
         */
        readonly acknowledgement_request: OPTIONAL<AcknowledgementRequestField>,
        /**
         * @summary `communications_agreement_id`.
         * @public
         * @readonly
         */
        readonly communications_agreement_id: OPTIONAL<CommunicationsAgreementIdField>,
        /**
         * @summary `test_indicator`.
         * @public
         * @readonly
         */
        readonly test_indicator: OPTIONAL<TestIndicatorField>,
        /**
         * @summary `authorization_information`.
         * @public
         * @readonly
         */
        readonly authorization_information: OPTIONAL<AuthorizationInformationField>,
        /**
         * @summary `recipient_extensions`.
         * @public
         * @readonly
         */
        readonly recipient_extensions: OPTIONAL<RecipientExtensionsField>
    ) {}

    /**
     * @summary Restructures an object into a RecipientsSubField
     * @description
     *
     * This takes an `object` and converts it to a `RecipientsSubField`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RecipientsSubField`.
     * @returns {RecipientsSubField}
     */
    public static _from_object(
        _o: { [_K in keyof RecipientsSubField]: RecipientsSubField[_K] }
    ): RecipientsSubField {
        return new RecipientsSubField(
            _o.recipient,
            _o.action_request,
            _o.edi_notification_requests_field,
            _o.responsibility_passing_allowed,
            _o.interchange_recipient,
            _o.recipient_reference,
            _o.interchange_control_reference,
            _o.processing_priority_code,
            _o.acknowledgement_request,
            _o.communications_agreement_id,
            _o.test_indicator,
            _o.authorization_information,
            _o.recipient_extensions
        );
    }

    /**
     * @summary Getter that returns the default value for `action_request`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_action_request() {
        return id_for_action;
    }
    /**
     * @summary Getter that returns the default value for `responsibility_passing_allowed`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_responsibility_passing_allowed() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `acknowledgement_request`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_acknowledgement_request() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `test_indicator`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_test_indicator() {
        return false;
    }
}

/**
 * @summary The Leading Root Component Types of RecipientsSubField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RecipientsSubField: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'recipient',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'action-request',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'edi-notification-requests-field',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'responsibility-passing-allowed',
        true,
        $.hasTag(_TagClass.context, 4)
    ),
    new $.ComponentSpec(
        'interchange-recipient',
        true,
        $.hasTag(_TagClass.context, 5)
    ),
    new $.ComponentSpec(
        'recipient-reference',
        true,
        $.hasTag(_TagClass.context, 6)
    ),
    new $.ComponentSpec(
        'interchange-control-reference',
        true,
        $.hasTag(_TagClass.context, 7)
    ),
    new $.ComponentSpec(
        'processing-priority-code',
        true,
        $.hasTag(_TagClass.context, 8)
    ),
    new $.ComponentSpec(
        'acknowledgement-request',
        true,
        $.hasTag(_TagClass.context, 9)
    ),
    new $.ComponentSpec(
        'communications-agreement-id',
        true,
        $.hasTag(_TagClass.context, 10)
    ),
    new $.ComponentSpec(
        'test-indicator',
        true,
        $.hasTag(_TagClass.context, 11)
    ),
    new $.ComponentSpec(
        'authorization-information',
        true,
        $.hasTag(_TagClass.context, 12)
    ),
    new $.ComponentSpec(
        'recipient-extensions',
        true,
        $.hasTag(_TagClass.context, 13)
    ),
];

/**
 * @summary The Trailing Root Component Types of RecipientsSubField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RecipientsSubField: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of RecipientsSubField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RecipientsSubField: $.ComponentSpec[] = [];

let _cached_decoder_for_RecipientsSubField: $.ASN1Decoder<RecipientsSubField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RecipientsSubField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientsSubField} The decoded data structure.
 */
export function _decode_RecipientsSubField(el: _Element): RecipientsSubField {
    if (!_cached_decoder_for_RecipientsSubField) {
        _cached_decoder_for_RecipientsSubField = function (
            el: _Element
        ): RecipientsSubField {
            let recipient!: RecipientField;
            let action_request: OPTIONAL<ActionRequestField> =
                RecipientsSubField._default_value_for_action_request;
            let edi_notification_requests_field: OPTIONAL<EDINotificationRequestsField>;
            let responsibility_passing_allowed: OPTIONAL<ResponsibilityPassingAllowedField> =
                RecipientsSubField._default_value_for_responsibility_passing_allowed;
            let interchange_recipient: OPTIONAL<InterchangeRecipientField>;
            let recipient_reference: OPTIONAL<RecipientReferenceField>;
            let interchange_control_reference: OPTIONAL<InterchangeControlReferenceField>;
            let processing_priority_code: OPTIONAL<ProcessingPriorityCodeField>;
            let acknowledgement_request: OPTIONAL<AcknowledgementRequestField> =
                RecipientsSubField._default_value_for_acknowledgement_request;
            let communications_agreement_id: OPTIONAL<CommunicationsAgreementIdField>;
            let test_indicator: OPTIONAL<TestIndicatorField> =
                RecipientsSubField._default_value_for_test_indicator;
            let authorization_information: OPTIONAL<AuthorizationInformationField>;
            let recipient_extensions: OPTIONAL<RecipientExtensionsField>;
            const callbacks: $.DecodingMap = {
                recipient: (_el: _Element): void => {
                    recipient = $._decode_implicit<RecipientField>(
                        () => _decode_RecipientField
                    )(_el);
                },
                'action-request': (_el: _Element): void => {
                    action_request = $._decode_implicit<ActionRequestField>(
                        () => _decode_ActionRequestField
                    )(_el);
                },
                'edi-notification-requests-field': (_el: _Element): void => {
                    edi_notification_requests_field = $._decode_implicit<EDINotificationRequestsField>(
                        () => _decode_EDINotificationRequestsField
                    )(_el);
                },
                'responsibility-passing-allowed': (_el: _Element): void => {
                    responsibility_passing_allowed = $._decode_implicit<ResponsibilityPassingAllowedField>(
                        () => _decode_ResponsibilityPassingAllowedField
                    )(_el);
                },
                'interchange-recipient': (_el: _Element): void => {
                    interchange_recipient = $._decode_implicit<InterchangeRecipientField>(
                        () => _decode_InterchangeRecipientField
                    )(_el);
                },
                'recipient-reference': (_el: _Element): void => {
                    recipient_reference = $._decode_implicit<RecipientReferenceField>(
                        () => _decode_RecipientReferenceField
                    )(_el);
                },
                'interchange-control-reference': (_el: _Element): void => {
                    interchange_control_reference = $._decode_implicit<InterchangeControlReferenceField>(
                        () => _decode_InterchangeControlReferenceField
                    )(_el);
                },
                'processing-priority-code': (_el: _Element): void => {
                    processing_priority_code = $._decode_implicit<ProcessingPriorityCodeField>(
                        () => _decode_ProcessingPriorityCodeField
                    )(_el);
                },
                'acknowledgement-request': (_el: _Element): void => {
                    acknowledgement_request = $._decode_implicit<AcknowledgementRequestField>(
                        () => _decode_AcknowledgementRequestField
                    )(_el);
                },
                'communications-agreement-id': (_el: _Element): void => {
                    communications_agreement_id = $._decode_implicit<CommunicationsAgreementIdField>(
                        () => _decode_CommunicationsAgreementIdField
                    )(_el);
                },
                'test-indicator': (_el: _Element): void => {
                    test_indicator = $._decode_implicit<TestIndicatorField>(
                        () => _decode_TestIndicatorField
                    )(_el);
                },
                'authorization-information': (_el: _Element): void => {
                    authorization_information = $._decode_implicit<AuthorizationInformationField>(
                        () => _decode_AuthorizationInformationField
                    )(_el);
                },
                'recipient-extensions': (_el: _Element): void => {
                    recipient_extensions = $._decode_implicit<RecipientExtensionsField>(
                        () => _decode_RecipientExtensionsField
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RecipientsSubField,
                _extension_additions_list_spec_for_RecipientsSubField,
                _root_component_type_list_2_spec_for_RecipientsSubField,
                undefined
            );
            return new RecipientsSubField (
                recipient,
                action_request,
                edi_notification_requests_field,
                responsibility_passing_allowed,
                interchange_recipient,
                recipient_reference,
                interchange_control_reference,
                processing_priority_code,
                acknowledgement_request,
                communications_agreement_id,
                test_indicator,
                authorization_information,
                recipient_extensions
            );
        };
    }
    return _cached_decoder_for_RecipientsSubField(el);
}

let _cached_encoder_for_RecipientsSubField: $.ASN1Encoder<RecipientsSubField> | null = null;

/**
 * @summary Encodes a(n) RecipientsSubField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientsSubField, encoded as an ASN.1 Element.
 */
export function _encode_RecipientsSubField(
    value: RecipientsSubField,
    elGetter: $.ASN1Encoder<RecipientsSubField>
): _Element {
    if (!_cached_encoder_for_RecipientsSubField) {
        _cached_encoder_for_RecipientsSubField = function (
            value: RecipientsSubField        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_RecipientField,
                            $.BER
                        )(value.recipient, $.BER),
                        /* IF_DEFAULT */ value.action_request === undefined ||
                        $.deepEq(
                            value.action_request,
                            RecipientsSubField._default_value_for_action_request
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_ActionRequestField,
                                  $.BER
                              )(value.action_request, $.BER),
                        /* IF_ABSENT  */ value.edi_notification_requests_field ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_EDINotificationRequestsField,
                                  $.BER
                              )(value.edi_notification_requests_field, $.BER),
                        /* IF_DEFAULT */ value.responsibility_passing_allowed ===
                            undefined ||
                        $.deepEq(
                            value.responsibility_passing_allowed,
                            RecipientsSubField._default_value_for_responsibility_passing_allowed
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () =>
                                      _encode_ResponsibilityPassingAllowedField,
                                  $.BER
                              )(value.responsibility_passing_allowed, $.BER),
                        /* IF_ABSENT  */ value.interchange_recipient ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  5,
                                  () => _encode_InterchangeRecipientField,
                                  $.BER
                              )(value.interchange_recipient, $.BER),
                        /* IF_ABSENT  */ value.recipient_reference === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  6,
                                  () => _encode_RecipientReferenceField,
                                  $.BER
                              )(value.recipient_reference, $.BER),
                        /* IF_ABSENT  */ value.interchange_control_reference ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  7,
                                  () =>
                                      _encode_InterchangeControlReferenceField,
                                  $.BER
                              )(value.interchange_control_reference, $.BER),
                        /* IF_ABSENT  */ value.processing_priority_code ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  8,
                                  () => _encode_ProcessingPriorityCodeField,
                                  $.BER
                              )(value.processing_priority_code, $.BER),
                        /* IF_DEFAULT */ value.acknowledgement_request ===
                            undefined ||
                        $.deepEq(
                            value.acknowledgement_request,
                            RecipientsSubField._default_value_for_acknowledgement_request
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  9,
                                  () => _encode_AcknowledgementRequestField,
                                  $.BER
                              )(value.acknowledgement_request, $.BER),
                        /* IF_ABSENT  */ value.communications_agreement_id ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  10,
                                  () => _encode_CommunicationsAgreementIdField,
                                  $.BER
                              )(value.communications_agreement_id, $.BER),
                        /* IF_DEFAULT */ value.test_indicator === undefined ||
                        $.deepEq(
                            value.test_indicator,
                            RecipientsSubField._default_value_for_test_indicator
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  11,
                                  () => _encode_TestIndicatorField,
                                  $.BER
                              )(value.test_indicator, $.BER),
                        /* IF_ABSENT  */ value.authorization_information ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  12,
                                  () => _encode_AuthorizationInformationField,
                                  $.BER
                              )(value.authorization_information, $.BER),
                        /* IF_ABSENT  */ value.recipient_extensions ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  13,
                                  () => _encode_RecipientExtensionsField,
                                  $.BER
                              )(value.recipient_extensions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RecipientsSubField(value, elGetter);
}


/* eslint-enable */

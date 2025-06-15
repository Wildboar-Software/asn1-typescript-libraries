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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
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
    id_for_action,
} from "../EDIMSObjectIdentifiers/id-for-action.va.mjs";

/**
 * @summary NextRecipientFields
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NextRecipientFields ::= SEQUENCE {
 *   next-recipient                                  [1]  RecipientField,
 *   next-recipient-action-request
 *     [2]  ActionRequestField DEFAULT {id-for-action},
 *   next-recipient-edi-notification-requests-field
 *     [3]  EDINotificationRequestsField OPTIONAL,
 *   next-responsibility-passing-allowed
 *     [4]  ResponsibilityPassingAllowedField DEFAULT FALSE
 * }
 * ```
 *
 * @class
 */
export class NextRecipientFields {
    constructor(
        /**
         * @summary `next_recipient`.
         * @public
         * @readonly
         */
        readonly next_recipient: RecipientField,
        /**
         * @summary `next_recipient_action_request`.
         * @public
         * @readonly
         */
        readonly next_recipient_action_request: OPTIONAL<ActionRequestField>,
        /**
         * @summary `next_recipient_edi_notification_requests_field`.
         * @public
         * @readonly
         */
        readonly next_recipient_edi_notification_requests_field: OPTIONAL<EDINotificationRequestsField>,
        /**
         * @summary `next_responsibility_passing_allowed`.
         * @public
         * @readonly
         */
        readonly next_responsibility_passing_allowed: OPTIONAL<ResponsibilityPassingAllowedField>
    ) {}

    /**
     * @summary Restructures an object into a NextRecipientFields
     * @description
     *
     * This takes an `object` and converts it to a `NextRecipientFields`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NextRecipientFields`.
     * @returns {NextRecipientFields}
     */
    public static _from_object(
        _o: { [_K in keyof NextRecipientFields]: NextRecipientFields[_K] }
    ): NextRecipientFields {
        return new NextRecipientFields(
            _o.next_recipient,
            _o.next_recipient_action_request,
            _o.next_recipient_edi_notification_requests_field,
            _o.next_responsibility_passing_allowed
        );
    }

    /**
     * @summary Getter that returns the default value for `next_recipient_action_request`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_next_recipient_action_request() {
        return id_for_action;
    }
    /**
     * @summary Getter that returns the default value for `next_responsibility_passing_allowed`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_next_responsibility_passing_allowed() {
        return false;
    }
}

/**
 * @summary The Leading Root Component Types of NextRecipientFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NextRecipientFields: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'next-recipient',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'next-recipient-action-request',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'next-recipient-edi-notification-requests-field',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'next-responsibility-passing-allowed',
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
];

/**
 * @summary The Trailing Root Component Types of NextRecipientFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NextRecipientFields: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of NextRecipientFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NextRecipientFields: $.ComponentSpec[] = [];

let _cached_decoder_for_NextRecipientFields: $.ASN1Decoder<NextRecipientFields> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NextRecipientFields
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NextRecipientFields} The decoded data structure.
 */
export function _decode_NextRecipientFields(el: _Element) {
    if (!_cached_decoder_for_NextRecipientFields) {
        _cached_decoder_for_NextRecipientFields = function (
            el: _Element
        ): NextRecipientFields {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let next_recipient!: RecipientField;
            let next_recipient_action_request: OPTIONAL<ActionRequestField> =
                NextRecipientFields._default_value_for_next_recipient_action_request;
            let next_recipient_edi_notification_requests_field: OPTIONAL<EDINotificationRequestsField>;
            let next_responsibility_passing_allowed: OPTIONAL<ResponsibilityPassingAllowedField> =
                NextRecipientFields._default_value_for_next_responsibility_passing_allowed;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'next-recipient': (_el: _Element): void => {
                    next_recipient = $._decode_explicit<RecipientField>(
                        () => _decode_RecipientField
                    )(_el);
                },
                'next-recipient-action-request': (_el: _Element): void => {
                    next_recipient_action_request = $._decode_explicit<ActionRequestField>(
                        () => _decode_ActionRequestField
                    )(_el);
                },
                'next-recipient-edi-notification-requests-field': (
                    _el: _Element
                ): void => {
                    next_recipient_edi_notification_requests_field = $._decode_explicit<EDINotificationRequestsField>(
                        () => _decode_EDINotificationRequestsField
                    )(_el);
                },
                'next-responsibility-passing-allowed': (
                    _el: _Element
                ): void => {
                    next_responsibility_passing_allowed = $._decode_explicit<ResponsibilityPassingAllowedField>(
                        () => _decode_ResponsibilityPassingAllowedField
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NextRecipientFields,
                _extension_additions_list_spec_for_NextRecipientFields,
                _root_component_type_list_2_spec_for_NextRecipientFields,
                undefined
            );
            return new NextRecipientFields /* SEQUENCE_CONSTRUCTOR_CALL */(
                next_recipient,
                next_recipient_action_request,
                next_recipient_edi_notification_requests_field,
                next_responsibility_passing_allowed
            );
        };
    }
    return _cached_decoder_for_NextRecipientFields(el);
}

let _cached_encoder_for_NextRecipientFields: $.ASN1Encoder<NextRecipientFields> | null = null;

/**
 * @summary Encodes a(n) NextRecipientFields into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NextRecipientFields, encoded as an ASN.1 Element.
 */
export function _encode_NextRecipientFields(
    value: NextRecipientFields,
    elGetter: $.ASN1Encoder<NextRecipientFields>
) {
    if (!_cached_encoder_for_NextRecipientFields) {
        _cached_encoder_for_NextRecipientFields = function (
            value: NextRecipientFields        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_RecipientField,
                            $.BER
                        )(value.next_recipient, $.BER),
                        /* IF_DEFAULT */ value.next_recipient_action_request ===
                            undefined ||
                        $.deepEq(
                            value.next_recipient_action_request,
                            NextRecipientFields._default_value_for_next_recipient_action_request
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_ActionRequestField,
                                  $.BER
                              )(value.next_recipient_action_request, $.BER),
                        /* IF_ABSENT  */ value.next_recipient_edi_notification_requests_field ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_EDINotificationRequestsField,
                                  $.BER
                              )(
                                  value.next_recipient_edi_notification_requests_field,
                                  $.BER
                              ),
                        /* IF_DEFAULT */ value.next_responsibility_passing_allowed ===
                            undefined ||
                        $.deepEq(
                            value.next_responsibility_passing_allowed,
                            NextRecipientFields._default_value_for_next_responsibility_passing_allowed
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  4,
                                  () =>
                                      _encode_ResponsibilityPassingAllowedField,
                                  $.BER
                              )(
                                  value.next_responsibility_passing_allowed,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_NextRecipientFields(value, elGetter);
}


/* eslint-enable */

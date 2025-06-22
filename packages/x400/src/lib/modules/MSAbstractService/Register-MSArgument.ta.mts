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
    AutoActionRegistration,
    _decode_AutoActionRegistration,
    _encode_AutoActionRegistration,
} from '../MSAbstractService/AutoActionRegistration.ta.mjs';
import {
    AutoActionDeregistration,
    _decode_AutoActionDeregistration,
    _encode_AutoActionDeregistration,
} from '../MSAbstractService/AutoActionDeregistration.ta.mjs';
import {
    Register_MSArgument_change_credentials,
    _decode_Register_MSArgument_change_credentials,
    _encode_Register_MSArgument_change_credentials,
} from '../MSAbstractService/Register-MSArgument-change-credentials.ta.mjs';
import {
    SecurityLabel,
    _decode_SecurityLabel,
    _encode_SecurityLabel,
} from '../MTSAbstractService/SecurityLabel.ta.mjs';
import {
    UARegistration,
    _decode_UARegistration,
    _encode_UARegistration,
} from '../MSAbstractService/UARegistration.ta.mjs';
import {
    MSSubmissionOptions,
    _decode_MSSubmissionOptions,
    _encode_MSSubmissionOptions,
} from '../MSAbstractService/MSSubmissionOptions.ta.mjs';
import {
    MessageGroupRegistrations,
    _decode_MessageGroupRegistrations,
    _encode_MessageGroupRegistrations,
} from '../MSAbstractService/MessageGroupRegistrations.ta.mjs';
import {
    RegistrationTypes,
    _decode_RegistrationTypes,
    _encode_RegistrationTypes,
} from '../MSAbstractService/RegistrationTypes.ta.mjs';
import {
    MSExtensions,
    _decode_MSExtensions,
    _encode_MSExtensions,
} from '../MSAbstractService/MSExtensions.ta.mjs';
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "./AttributeType.ta.mjs";

/**
 * @summary Register_MSArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Register-MSArgument ::= SET {
 *   auto-action-registrations
 *     [0]  SET SIZE (1..ub-auto-registrations) OF AutoActionRegistration OPTIONAL,
 *   auto-action-deregistrations
 *     [1]  SET SIZE (1..ub-auto-registrations) OF AutoActionDeregistration
 *       OPTIONAL,
 *   list-attribute-defaults
 *     [2]  SET SIZE (0..ub-default-registrations) OF
 *            X413ATTRIBUTE.&id({AttributeTable}) OPTIONAL,
 *   fetch-attribute-defaults
 *     [3]  SET SIZE (0..ub-default-registrations) OF
 *            X413ATTRIBUTE.&id({AttributeTable}) OPTIONAL,
 *   change-credentials
 *     [4]  SEQUENCE {old-credentials
 *                      [0]  Credentials(WITH COMPONENTS {
 *                                         simple
 *                                       }),
 *                    new-credentials
 *                      [1]  Credentials(WITH COMPONENTS {
 *                                         simple
 *                                       })} OPTIONAL,
 *   user-security-labels
 *     [5]  SET SIZE (1..ub-labels-and-redirections) OF SecurityLabel OPTIONAL,
 *   -- 1994 extensions
 *   ua-registrations
 *     [6]  SET SIZE (1..ub-ua-registrations) OF UARegistration OPTIONAL,
 *   submission-defaults          [7]  MSSubmissionOptions OPTIONAL,
 *   message-group-registrations  [8]  MessageGroupRegistrations OPTIONAL,
 *   registration-status-request  [9]  RegistrationTypes OPTIONAL,
 *   register-ms-extensions       [10]  MSExtensions OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class Register_MSArgument {
    constructor(
        /**
         * @summary `auto_action_registrations`.
         * @public
         * @readonly
         */
        readonly auto_action_registrations: OPTIONAL<AutoActionRegistration[]>,
        /**
         * @summary `auto_action_deregistrations`.
         * @public
         * @readonly
         */
        readonly auto_action_deregistrations: OPTIONAL<
            AutoActionDeregistration[]
        >,
        /**
         * @summary `list_attribute_defaults`.
         * @public
         * @readonly
         */
        readonly list_attribute_defaults: OPTIONAL<AttributeType[]>,
        /**
         * @summary `fetch_attribute_defaults`.
         * @public
         * @readonly
         */
        readonly fetch_attribute_defaults: OPTIONAL<AttributeType[]>,
        /**
         * @summary `change_credentials`.
         * @public
         * @readonly
         */
        readonly change_credentials: OPTIONAL<Register_MSArgument_change_credentials>,
        /**
         * @summary `user_security_labels`.
         * @public
         * @readonly
         */
        readonly user_security_labels: OPTIONAL<SecurityLabel[]>,
        /**
         * @summary `ua_registrations`.
         * @public
         * @readonly
         */
        readonly ua_registrations: OPTIONAL<UARegistration[]>,
        /**
         * @summary `submission_defaults`.
         * @public
         * @readonly
         */
        readonly submission_defaults: OPTIONAL<MSSubmissionOptions>,
        /**
         * @summary `message_group_registrations`.
         * @public
         * @readonly
         */
        readonly message_group_registrations: OPTIONAL<MessageGroupRegistrations>,
        /**
         * @summary `registration_status_request`.
         * @public
         * @readonly
         */
        readonly registration_status_request: OPTIONAL<RegistrationTypes>,
        /**
         * @summary `register_ms_extensions`.
         * @public
         * @readonly
         */
        readonly register_ms_extensions: OPTIONAL<MSExtensions>
    ) {}

    /**
     * @summary Restructures an object into a Register_MSArgument
     * @description
     *
     * This takes an `object` and converts it to a `Register_MSArgument`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Register_MSArgument`.
     * @returns {Register_MSArgument}
     */
    public static _from_object(
        _o: { [_K in keyof Register_MSArgument]: Register_MSArgument[_K] }
    ): Register_MSArgument {
        return new Register_MSArgument(
            _o.auto_action_registrations,
            _o.auto_action_deregistrations,
            _o.list_attribute_defaults,
            _o.fetch_attribute_defaults,
            _o.change_credentials,
            _o.user_security_labels,
            _o.ua_registrations,
            _o.submission_defaults,
            _o.message_group_registrations,
            _o.registration_status_request,
            _o.register_ms_extensions
        );
    }
}

/**
 * @summary The Leading Root Component Types of Register_MSArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Register_MSArgument: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'auto-action-registrations',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'auto-action-deregistrations',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'list-attribute-defaults',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'fetch-attribute-defaults',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'change-credentials',
        true,
        $.hasTag(_TagClass.context, 4)
    ),
    new $.ComponentSpec(
        'user-security-labels',
        true,
        $.hasTag(_TagClass.context, 5)
    ),
    new $.ComponentSpec(
        'ua-registrations',
        true,
        $.hasTag(_TagClass.context, 6)
    ),
    new $.ComponentSpec(
        'submission-defaults',
        true,
        $.hasTag(_TagClass.context, 7)
    ),
    new $.ComponentSpec(
        'message-group-registrations',
        true,
        $.hasTag(_TagClass.context, 8)
    ),
    new $.ComponentSpec(
        'registration-status-request',
        true,
        $.hasTag(_TagClass.context, 9)
    ),
    new $.ComponentSpec(
        'register-ms-extensions',
        true,
        $.hasTag(_TagClass.context, 10)
    ),
];

/**
 * @summary The Trailing Root Component Types of Register_MSArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Register_MSArgument: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of Register_MSArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Register_MSArgument: $.ComponentSpec[] = [];

let _cached_decoder_for_Register_MSArgument: $.ASN1Decoder<Register_MSArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Register_MSArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Register_MSArgument} The decoded data structure.
 */
export function _decode_Register_MSArgument(el: _Element) {
    if (!_cached_decoder_for_Register_MSArgument) {
        _cached_decoder_for_Register_MSArgument = function (
            el: _Element
        ): Register_MSArgument {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let auto_action_registrations: OPTIONAL<AutoActionRegistration[]>;
            let auto_action_deregistrations: OPTIONAL<
                AutoActionDeregistration[]
            >;
            let list_attribute_defaults: OPTIONAL<AttributeType[]>;
            let fetch_attribute_defaults: OPTIONAL<AttributeType[]>;
            let change_credentials: OPTIONAL<Register_MSArgument_change_credentials>;
            let user_security_labels: OPTIONAL<SecurityLabel[]>;
            let ua_registrations: OPTIONAL<UARegistration[]>;
            let submission_defaults: OPTIONAL<MSSubmissionOptions>;
            let message_group_registrations: OPTIONAL<MessageGroupRegistrations>;
            let registration_status_request: OPTIONAL<RegistrationTypes>;
            let register_ms_extensions: OPTIONAL<MSExtensions>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'auto-action-registrations': (_el: _Element): void => {
                    auto_action_registrations = $._decode_explicit<
                        AutoActionRegistration[]
                    >(() =>
                        $._decodeSetOf<AutoActionRegistration>(
                            () => _decode_AutoActionRegistration
                        )
                    )(_el);
                },
                'auto-action-deregistrations': (_el: _Element): void => {
                    auto_action_deregistrations = $._decode_explicit<
                        AutoActionDeregistration[]
                    >(() =>
                        $._decodeSetOf<AutoActionDeregistration>(
                            () => _decode_AutoActionDeregistration
                        )
                    )(_el);
                },
                'list-attribute-defaults': (_el: _Element): void => {
                    list_attribute_defaults = $._decode_explicit<
                        AttributeType[]
                    >(() =>
                        $._decodeSetOf<AttributeType>(
                            () => _decode_AttributeType
                        )
                    )(_el);
                },
                'fetch-attribute-defaults': (_el: _Element): void => {
                    fetch_attribute_defaults = $._decode_explicit<
                        AttributeType[]
                    >(() =>
                        $._decodeSetOf<AttributeType>(
                            () => _decode_AttributeType
                        )
                    )(_el);
                },
                'change-credentials': (_el: _Element): void => {
                    change_credentials = $._decode_explicit<Register_MSArgument_change_credentials>(
                        () => _decode_Register_MSArgument_change_credentials
                    )(_el);
                },
                'user-security-labels': (_el: _Element): void => {
                    user_security_labels = $._decode_explicit<SecurityLabel[]>(
                        () =>
                            $._decodeSetOf<SecurityLabel>(
                                () => _decode_SecurityLabel
                            )
                    )(_el);
                },
                'ua-registrations': (_el: _Element): void => {
                    ua_registrations = $._decode_explicit<UARegistration[]>(
                        () =>
                            $._decodeSetOf<UARegistration>(
                                () => _decode_UARegistration
                            )
                    )(_el);
                },
                'submission-defaults': (_el: _Element): void => {
                    submission_defaults = $._decode_explicit<MSSubmissionOptions>(
                        () => _decode_MSSubmissionOptions
                    )(_el);
                },
                'message-group-registrations': (_el: _Element): void => {
                    message_group_registrations = $._decode_explicit<MessageGroupRegistrations>(
                        () => _decode_MessageGroupRegistrations
                    )(_el);
                },
                'registration-status-request': (_el: _Element): void => {
                    registration_status_request = $._decode_explicit<RegistrationTypes>(
                        () => _decode_RegistrationTypes
                    )(_el);
                },
                'register-ms-extensions': (_el: _Element): void => {
                    register_ms_extensions = $._decode_explicit<MSExtensions>(
                        () => _decode_MSExtensions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Register_MSArgument,
                _extension_additions_list_spec_for_Register_MSArgument,
                _root_component_type_list_2_spec_for_Register_MSArgument,
                undefined
            );
            return new Register_MSArgument /* SET_CONSTRUCTOR_CALL */(
                auto_action_registrations,
                auto_action_deregistrations,
                list_attribute_defaults,
                fetch_attribute_defaults,
                change_credentials,
                user_security_labels,
                ua_registrations,
                submission_defaults,
                message_group_registrations,
                registration_status_request,
                register_ms_extensions
            );
        };
    }
    return _cached_decoder_for_Register_MSArgument(el);
}

let _cached_encoder_for_Register_MSArgument: $.ASN1Encoder<Register_MSArgument> | null = null;

/**
 * @summary Encodes a(n) Register_MSArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Register_MSArgument, encoded as an ASN.1 Element.
 */
export function _encode_Register_MSArgument(
    value: Register_MSArgument,
    elGetter: $.ASN1Encoder<Register_MSArgument>
) {
    if (!_cached_encoder_for_Register_MSArgument) {
        _cached_encoder_for_Register_MSArgument = function (
            value: Register_MSArgument        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.auto_action_registrations ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () =>
                                      $._encodeSetOf<AutoActionRegistration>(
                                          () => _encode_AutoActionRegistration,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.auto_action_registrations, $.BER),
                        /* IF_ABSENT  */ value.auto_action_deregistrations ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () =>
                                      $._encodeSetOf<AutoActionDeregistration>(
                                          () =>
                                              _encode_AutoActionDeregistration,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.auto_action_deregistrations, $.BER),
                        /* IF_ABSENT  */ value.list_attribute_defaults ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () =>
                                      $._encodeSetOf<AttributeType>(
                                          () => _encode_AttributeType,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.list_attribute_defaults, $.BER),
                        /* IF_ABSENT  */ value.fetch_attribute_defaults ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () =>
                                      $._encodeSetOf<AttributeType>(
                                          () => _encode_AttributeType,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.fetch_attribute_defaults, $.BER),
                        /* IF_ABSENT  */ value.change_credentials === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  4,
                                  () =>
                                      _encode_Register_MSArgument_change_credentials,
                                  $.BER
                              )(value.change_credentials, $.BER),
                        /* IF_ABSENT  */ value.user_security_labels ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  5,
                                  () =>
                                      $._encodeSetOf<SecurityLabel>(
                                          () => _encode_SecurityLabel,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.user_security_labels, $.BER),
                        /* IF_ABSENT  */ value.ua_registrations === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  6,
                                  () =>
                                      $._encodeSetOf<UARegistration>(
                                          () => _encode_UARegistration,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.ua_registrations, $.BER),
                        /* IF_ABSENT  */ value.submission_defaults === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  7,
                                  () => _encode_MSSubmissionOptions,
                                  $.BER
                              )(value.submission_defaults, $.BER),
                        /* IF_ABSENT  */ value.message_group_registrations ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  8,
                                  () => _encode_MessageGroupRegistrations,
                                  $.BER
                              )(value.message_group_registrations, $.BER),
                        /* IF_ABSENT  */ value.registration_status_request ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  9,
                                  () => _encode_RegistrationTypes,
                                  $.BER
                              )(value.registration_status_request, $.BER),
                        /* IF_ABSENT  */ value.register_ms_extensions ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  10,
                                  () => _encode_MSExtensions,
                                  $.BER
                              )(value.register_ms_extensions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Register_MSArgument(value, elGetter);
}


/* eslint-enable */

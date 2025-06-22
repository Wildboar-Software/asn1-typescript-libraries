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
import * as $ from '@wildboar/asn1/functional';
import {
    AutoActionRegistration,
    _decode_AutoActionRegistration,
    _encode_AutoActionRegistration,
} from '../MSAbstractService/AutoActionRegistration.ta.mjs';
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
    MessageGroupNameAndDescriptor,
    _decode_MessageGroupNameAndDescriptor,
    _encode_MessageGroupNameAndDescriptor,
} from '../MSAbstractService/MessageGroupNameAndDescriptor.ta.mjs';
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
 * @summary Register_MSResult_registered_information
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Register-MSResult-registered-information ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class Register_MSResult_registered_information {
    constructor(
        /**
         * @summary `auto_action_registrations`.
         * @public
         * @readonly
         */
        readonly auto_action_registrations: OPTIONAL<AutoActionRegistration[]>,
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
        readonly message_group_registrations: OPTIONAL<
            MessageGroupNameAndDescriptor[]
        >,
        /**
         * @summary `register_ms_result_extensions`.
         * @public
         * @readonly
         */
        readonly register_ms_result_extensions: OPTIONAL<MSExtensions>
    ) {}

    /**
     * @summary Restructures an object into a Register_MSResult_registered_information
     * @description
     *
     * This takes an `object` and converts it to a `Register_MSResult_registered_information`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Register_MSResult_registered_information`.
     * @returns {Register_MSResult_registered_information}
     */
    public static _from_object(
        _o: {
            [_K in keyof Register_MSResult_registered_information]: Register_MSResult_registered_information[_K];
        }
    ): Register_MSResult_registered_information {
        return new Register_MSResult_registered_information(
            _o.auto_action_registrations,
            _o.list_attribute_defaults,
            _o.fetch_attribute_defaults,
            _o.ua_registrations,
            _o.submission_defaults,
            _o.message_group_registrations,
            _o.register_ms_result_extensions
        );
    }
}

/**
 * @summary The Leading Root Component Types of Register_MSResult_registered_information
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Register_MSResult_registered_information: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'auto-action-registrations',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'list-attribute-defaults',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'fetch-attribute-defaults',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'ua-registrations',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'submission-defaults',
        true,
        $.hasTag(_TagClass.context, 4)
    ),
    new $.ComponentSpec(
        'message-group-registrations',
        true,
        $.hasTag(_TagClass.context, 5)
    ),
    new $.ComponentSpec(
        'register-ms-result-extensions',
        true,
        $.hasTag(_TagClass.context, 6)
    ),
];

/**
 * @summary The Trailing Root Component Types of Register_MSResult_registered_information
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Register_MSResult_registered_information: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of Register_MSResult_registered_information
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Register_MSResult_registered_information: $.ComponentSpec[] = [];

let _cached_decoder_for_Register_MSResult_registered_information: $.ASN1Decoder<Register_MSResult_registered_information> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Register_MSResult_registered_information
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Register_MSResult_registered_information} The decoded data structure.
 */
export function _decode_Register_MSResult_registered_information(el: _Element) {
    if (!_cached_decoder_for_Register_MSResult_registered_information) {
        _cached_decoder_for_Register_MSResult_registered_information = function (
            el: _Element
        ): Register_MSResult_registered_information {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let auto_action_registrations: OPTIONAL<AutoActionRegistration[]>;
            let list_attribute_defaults: OPTIONAL<AttributeType[]>;
            let fetch_attribute_defaults: OPTIONAL<AttributeType[]>;
            let ua_registrations: OPTIONAL<UARegistration[]>;
            let submission_defaults: OPTIONAL<MSSubmissionOptions>;
            let message_group_registrations: OPTIONAL<
                MessageGroupNameAndDescriptor[]
            >;
            let register_ms_result_extensions: OPTIONAL<MSExtensions>;
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
                    message_group_registrations = $._decode_explicit<
                        MessageGroupNameAndDescriptor[]
                    >(() =>
                        $._decodeSetOf<MessageGroupNameAndDescriptor>(
                            () => _decode_MessageGroupNameAndDescriptor
                        )
                    )(_el);
                },
                'register-ms-result-extensions': (_el: _Element): void => {
                    register_ms_result_extensions = $._decode_explicit<MSExtensions>(
                        () => _decode_MSExtensions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Register_MSResult_registered_information,
                _extension_additions_list_spec_for_Register_MSResult_registered_information,
                _root_component_type_list_2_spec_for_Register_MSResult_registered_information,
                undefined
            );
            return new Register_MSResult_registered_information /* SET_CONSTRUCTOR_CALL */(
                auto_action_registrations,
                list_attribute_defaults,
                fetch_attribute_defaults,
                ua_registrations,
                submission_defaults,
                message_group_registrations,
                register_ms_result_extensions
            );
        };
    }
    return _cached_decoder_for_Register_MSResult_registered_information(el);
}

let _cached_encoder_for_Register_MSResult_registered_information: $.ASN1Encoder<Register_MSResult_registered_information> | null = null;

/**
 * @summary Encodes a(n) Register_MSResult_registered_information into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Register_MSResult_registered_information, encoded as an ASN.1 Element.
 */
export function _encode_Register_MSResult_registered_information(
    value: Register_MSResult_registered_information,
    elGetter: $.ASN1Encoder<Register_MSResult_registered_information>
) {
    if (!_cached_encoder_for_Register_MSResult_registered_information) {
        _cached_encoder_for_Register_MSResult_registered_information = function (
            value: Register_MSResult_registered_information        ): _Element {
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
                        /* IF_ABSENT  */ value.list_attribute_defaults ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
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
                                  2,
                                  () =>
                                      $._encodeSetOf<AttributeType>(
                                          () => _encode_AttributeType,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.fetch_attribute_defaults, $.BER),
                        /* IF_ABSENT  */ value.ua_registrations === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
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
                                  4,
                                  () => _encode_MSSubmissionOptions,
                                  $.BER
                              )(value.submission_defaults, $.BER),
                        /* IF_ABSENT  */ value.message_group_registrations ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  5,
                                  () =>
                                      $._encodeSetOf<MessageGroupNameAndDescriptor>(
                                          () =>
                                              _encode_MessageGroupNameAndDescriptor,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.message_group_registrations, $.BER),
                        /* IF_ABSENT  */ value.register_ms_result_extensions ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  6,
                                  () => _encode_MSExtensions,
                                  $.BER
                              )(value.register_ms_result_extensions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Register_MSResult_registered_information(
        value,
        elGetter
    );
}


/* eslint-enable */

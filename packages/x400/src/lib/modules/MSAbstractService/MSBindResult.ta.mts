/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    OBJECT_IDENTIFIER,
    GeneralString,
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
    ResponderCredentials,
    _decode_ResponderCredentials,
    _encode_ResponderCredentials,
} from '../MTSAbstractService/ResponderCredentials.ta.mjs';
import {
    EntryClass,
    _decode_EntryClass,
    _encode_EntryClass,
} from '../MSAbstractService/EntryClass.ta.mjs';
import {
    MSExtensions,
    _decode_MSExtensions,
    _encode_MSExtensions,
} from '../MSAbstractService/MSExtensions.ta.mjs';
import {
    AutoActionErrorIndication,
    _decode_AutoActionErrorIndication,
    _encode_AutoActionErrorIndication,
} from '../MSAbstractService/AutoActionErrorIndication.ta.mjs';
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "./AttributeType.ta.mjs";
import {
    AutoActionType,
    _decode_AutoActionType,
    _encode_AutoActionType,
} from "./AutoActionType.ta.mjs";

/**
 * @summary MSBindResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MSBindResult ::= SET {
 *   responder-credentials         [2]  ResponderCredentials,
 *   available-auto-actions
 *     [3]  SET SIZE (1..ub-auto-actions) OF
 *            AUTO-ACTION.&id({AutoActionTable}) OPTIONAL,
 *   available-attribute-types
 *     [4]  SET SIZE (1..ub-attributes-supported) OF
 *            X413ATTRIBUTE.&id({AttributeTable}) OPTIONAL,
 *   alert-indication              [5]  BOOLEAN DEFAULT FALSE,
 *   content-types-supported
 *     [6]  SET SIZE (1..ub-content-types) OF OBJECT IDENTIFIER OPTIONAL,
 *   -- 1994 extensions
 *   entry-classes-supported
 *     [7]  SET SIZE (1..ub-entry-classes) OF EntryClass OPTIONAL,
 *   matching-rules-supported
 *     [8]  SET SIZE (1..ub-matching-rules) OF OBJECT IDENTIFIER OPTIONAL,
 *   bind-result-extensions        [9]  MSExtensions OPTIONAL,
 *   message-group-depth           [10]  INTEGER(1..ub-group-depth) OPTIONAL,
 *   auto-action-error-indication  [11]  AutoActionErrorIndication OPTIONAL,
 *   unsupported-extensions
 *     [12]  SET SIZE (1..ub-extensions) OF OBJECT IDENTIFIER OPTIONAL,
 *   ua-registration-id-unknown    [13]  BOOLEAN DEFAULT FALSE,
 *   service-information
 *     [14]  GeneralString(SIZE (1..ub-service-information-length)) OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class MSBindResult {
    constructor(
        /**
         * @summary `responder_credentials`.
         * @public
         * @readonly
         */
        readonly responder_credentials: ResponderCredentials,
        /**
         * @summary `available_auto_actions`.
         * @public
         * @readonly
         */
        readonly available_auto_actions: OPTIONAL<AutoActionType[]>,
        /**
         * @summary `available_attribute_types`.
         * @public
         * @readonly
         */
        readonly available_attribute_types: OPTIONAL<AttributeType[]>,
        /**
         * @summary `alert_indication`.
         * @public
         * @readonly
         */
        readonly alert_indication: OPTIONAL<BOOLEAN>,
        /**
         * @summary `content_types_supported`.
         * @public
         * @readonly
         */
        readonly content_types_supported: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary `entry_classes_supported`.
         * @public
         * @readonly
         */
        readonly entry_classes_supported: OPTIONAL<EntryClass[]>,
        /**
         * @summary `matching_rules_supported`.
         * @public
         * @readonly
         */
        readonly matching_rules_supported: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary `bind_result_extensions`.
         * @public
         * @readonly
         */
        readonly bind_result_extensions: OPTIONAL<MSExtensions>,
        /**
         * @summary `message_group_depth`.
         * @public
         * @readonly
         */
        readonly message_group_depth: OPTIONAL<INTEGER>,
        /**
         * @summary `auto_action_error_indication`.
         * @public
         * @readonly
         */
        readonly auto_action_error_indication: OPTIONAL<AutoActionErrorIndication>,
        /**
         * @summary `unsupported_extensions`.
         * @public
         * @readonly
         */
        readonly unsupported_extensions: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary `ua_registration_id_unknown`.
         * @public
         * @readonly
         */
        readonly ua_registration_id_unknown: OPTIONAL<BOOLEAN>,
        /**
         * @summary `service_information`.
         * @public
         * @readonly
         */
        readonly service_information: OPTIONAL<GeneralString>
    ) {}

    /**
     * @summary Restructures an object into a MSBindResult
     * @description
     *
     * This takes an `object` and converts it to a `MSBindResult`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MSBindResult`.
     * @returns {MSBindResult}
     */
    public static _from_object(
        _o: { [_K in keyof MSBindResult]: MSBindResult[_K] }
    ): MSBindResult {
        return new MSBindResult(
            _o.responder_credentials,
            _o.available_auto_actions,
            _o.available_attribute_types,
            _o.alert_indication,
            _o.content_types_supported,
            _o.entry_classes_supported,
            _o.matching_rules_supported,
            _o.bind_result_extensions,
            _o.message_group_depth,
            _o.auto_action_error_indication,
            _o.unsupported_extensions,
            _o.ua_registration_id_unknown,
            _o.service_information
        );
    }

    /**
     * @summary Getter that returns the default value for `alert_indication`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_alert_indication() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `ua_registration_id_unknown`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_ua_registration_id_unknown() {
        return false;
    }
}

/**
 * @summary The Leading Root Component Types of MSBindResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MSBindResult: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'responder-credentials',
        false,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'available-auto-actions',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'available-attribute-types',
        true,
        $.hasTag(_TagClass.context, 4)
    ),
    new $.ComponentSpec(
        'alert-indication',
        true,
        $.hasTag(_TagClass.context, 5)
    ),
    new $.ComponentSpec(
        'content-types-supported',
        true,
        $.hasTag(_TagClass.context, 6)
    ),
    new $.ComponentSpec(
        'entry-classes-supported',
        true,
        $.hasTag(_TagClass.context, 7)
    ),
    new $.ComponentSpec(
        'matching-rules-supported',
        true,
        $.hasTag(_TagClass.context, 8)
    ),
    new $.ComponentSpec(
        'bind-result-extensions',
        true,
        $.hasTag(_TagClass.context, 9)
    ),
    new $.ComponentSpec(
        'message-group-depth',
        true,
        $.hasTag(_TagClass.context, 10)
    ),
    new $.ComponentSpec(
        'auto-action-error-indication',
        true,
        $.hasTag(_TagClass.context, 11)
    ),
    new $.ComponentSpec(
        'unsupported-extensions',
        true,
        $.hasTag(_TagClass.context, 12)
    ),
    new $.ComponentSpec(
        'ua-registration-id-unknown',
        true,
        $.hasTag(_TagClass.context, 13)
    ),
    new $.ComponentSpec(
        'service-information',
        true,
        $.hasTag(_TagClass.context, 14)
    ),
];

/**
 * @summary The Trailing Root Component Types of MSBindResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MSBindResult: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of MSBindResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MSBindResult: $.ComponentSpec[] = [];

let _cached_decoder_for_MSBindResult: $.ASN1Decoder<MSBindResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MSBindResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MSBindResult} The decoded data structure.
 */
export function _decode_MSBindResult(el: _Element) {
    if (!_cached_decoder_for_MSBindResult) {
        _cached_decoder_for_MSBindResult = function (
            el: _Element
        ): MSBindResult {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let responder_credentials!: ResponderCredentials;
            let available_auto_actions: OPTIONAL<AutoActionType[]>;
            let available_attribute_types: OPTIONAL<AttributeType[]>;
            let alert_indication: OPTIONAL<BOOLEAN> =
                MSBindResult._default_value_for_alert_indication;
            let content_types_supported: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let entry_classes_supported: OPTIONAL<EntryClass[]>;
            let matching_rules_supported: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let bind_result_extensions: OPTIONAL<MSExtensions>;
            let message_group_depth: OPTIONAL<INTEGER>;
            let auto_action_error_indication: OPTIONAL<AutoActionErrorIndication>;
            let unsupported_extensions: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let ua_registration_id_unknown: OPTIONAL<BOOLEAN> =
                MSBindResult._default_value_for_ua_registration_id_unknown;
            let service_information: OPTIONAL<GeneralString>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'responder-credentials': (_el: _Element): void => {
                    responder_credentials = $._decode_explicit<ResponderCredentials>(
                        () => _decode_ResponderCredentials
                    )(_el);
                },
                'available-auto-actions': (_el: _Element): void => {
                    available_auto_actions = $._decode_explicit<
                        AutoActionType[]
                    >(() =>
                        $._decodeSetOf<AutoActionType>(
                            () => _decode_AutoActionType
                        )
                    )(_el);
                },
                'available-attribute-types': (_el: _Element): void => {
                    available_attribute_types = $._decode_explicit<
                        AttributeType[]
                    >(() =>
                        $._decodeSetOf<AttributeType>(
                            () => _decode_AttributeType
                        )
                    )(_el);
                },
                'alert-indication': (_el: _Element): void => {
                    alert_indication = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                'content-types-supported': (_el: _Element): void => {
                    content_types_supported = $._decode_explicit<
                        OBJECT_IDENTIFIER[]
                    >(() =>
                        $._decodeSetOf<OBJECT_IDENTIFIER>(
                            () => $._decodeObjectIdentifier
                        )
                    )(_el);
                },
                'entry-classes-supported': (_el: _Element): void => {
                    entry_classes_supported = $._decode_explicit<EntryClass[]>(
                        () =>
                            $._decodeSetOf<EntryClass>(() => _decode_EntryClass)
                    )(_el);
                },
                'matching-rules-supported': (_el: _Element): void => {
                    matching_rules_supported = $._decode_explicit<
                        OBJECT_IDENTIFIER[]
                    >(() =>
                        $._decodeSetOf<OBJECT_IDENTIFIER>(
                            () => $._decodeObjectIdentifier
                        )
                    )(_el);
                },
                'bind-result-extensions': (_el: _Element): void => {
                    bind_result_extensions = $._decode_explicit<MSExtensions>(
                        () => _decode_MSExtensions
                    )(_el);
                },
                'message-group-depth': (_el: _Element): void => {
                    message_group_depth = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                'auto-action-error-indication': (_el: _Element): void => {
                    auto_action_error_indication = $._decode_explicit<AutoActionErrorIndication>(
                        () => _decode_AutoActionErrorIndication
                    )(_el);
                },
                'unsupported-extensions': (_el: _Element): void => {
                    unsupported_extensions = $._decode_explicit<
                        OBJECT_IDENTIFIER[]
                    >(() =>
                        $._decodeSetOf<OBJECT_IDENTIFIER>(
                            () => $._decodeObjectIdentifier
                        )
                    )(_el);
                },
                'ua-registration-id-unknown': (_el: _Element): void => {
                    ua_registration_id_unknown = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                'service-information': (_el: _Element): void => {
                    service_information = $._decode_explicit<GeneralString>(
                        () => $._decodeGeneralString
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MSBindResult,
                _extension_additions_list_spec_for_MSBindResult,
                _root_component_type_list_2_spec_for_MSBindResult,
                undefined
            );
            return new MSBindResult /* SET_CONSTRUCTOR_CALL */(
                responder_credentials,
                available_auto_actions,
                available_attribute_types,
                alert_indication,
                content_types_supported,
                entry_classes_supported,
                matching_rules_supported,
                bind_result_extensions,
                message_group_depth,
                auto_action_error_indication,
                unsupported_extensions,
                ua_registration_id_unknown,
                service_information
            );
        };
    }
    return _cached_decoder_for_MSBindResult(el);
}

let _cached_encoder_for_MSBindResult: $.ASN1Encoder<MSBindResult> | null = null;

/**
 * @summary Encodes a(n) MSBindResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MSBindResult, encoded as an ASN.1 Element.
 */
export function _encode_MSBindResult(
    value: MSBindResult,
    elGetter: $.ASN1Encoder<MSBindResult>
) {
    if (!_cached_encoder_for_MSBindResult) {
        _cached_encoder_for_MSBindResult = function (
            value: MSBindResult        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            2,
                            () => _encode_ResponderCredentials,
                            $.BER
                        )(value.responder_credentials, $.BER),
                        /* IF_ABSENT  */ value.available_auto_actions ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () =>
                                      $._encodeSetOf<AutoActionType>(
                                          () => _encode_AutoActionType,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.available_auto_actions, $.BER),
                        /* IF_ABSENT  */ value.available_attribute_types ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  4,
                                  () =>
                                      $._encodeSetOf<AttributeType>(
                                          () => _encode_AttributeType,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.available_attribute_types, $.BER),
                        /* IF_DEFAULT */ value.alert_indication === undefined ||
                        $.deepEq(
                            value.alert_indication,
                            MSBindResult._default_value_for_alert_indication
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  5,
                                  () => $._encodeBoolean,
                                  $.BER
                              )(value.alert_indication, $.BER),
                        /* IF_ABSENT  */ value.content_types_supported ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  6,
                                  () =>
                                      $._encodeSetOf<OBJECT_IDENTIFIER>(
                                          () => $._encodeObjectIdentifier,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.content_types_supported, $.BER),
                        /* IF_ABSENT  */ value.entry_classes_supported ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  7,
                                  () =>
                                      $._encodeSetOf<EntryClass>(
                                          () => _encode_EntryClass,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.entry_classes_supported, $.BER),
                        /* IF_ABSENT  */ value.matching_rules_supported ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  8,
                                  () =>
                                      $._encodeSetOf<OBJECT_IDENTIFIER>(
                                          () => $._encodeObjectIdentifier,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.matching_rules_supported, $.BER),
                        /* IF_ABSENT  */ value.bind_result_extensions ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  9,
                                  () => _encode_MSExtensions,
                                  $.BER
                              )(value.bind_result_extensions, $.BER),
                        /* IF_ABSENT  */ value.message_group_depth === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  10,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.message_group_depth, $.BER),
                        /* IF_ABSENT  */ value.auto_action_error_indication ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  11,
                                  () => _encode_AutoActionErrorIndication,
                                  $.BER
                              )(value.auto_action_error_indication, $.BER),
                        /* IF_ABSENT  */ value.unsupported_extensions ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  12,
                                  () =>
                                      $._encodeSetOf<OBJECT_IDENTIFIER>(
                                          () => $._encodeObjectIdentifier,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.unsupported_extensions, $.BER),
                        /* IF_DEFAULT */ value.ua_registration_id_unknown ===
                            undefined ||
                        $.deepEq(
                            value.ua_registration_id_unknown,
                            MSBindResult._default_value_for_ua_registration_id_unknown
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  13,
                                  () => $._encodeBoolean,
                                  $.BER
                              )(value.ua_registration_id_unknown, $.BER),
                        /* IF_ABSENT  */ value.service_information === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  14,
                                  () => $._encodeGeneralString,
                                  $.BER
                              )(value.service_information, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MSBindResult(value, elGetter);
}


/* eslint-enable */

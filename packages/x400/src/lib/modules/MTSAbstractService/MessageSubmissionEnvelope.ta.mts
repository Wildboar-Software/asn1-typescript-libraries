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
    PerMessageSubmissionFields,
    _decode_PerMessageSubmissionFields,
    _encode_PerMessageSubmissionFields,
} from '../MTSAbstractService/PerMessageSubmissionFields.ta.mjs';
import {
    PerRecipientMessageSubmissionFields,
    _decode_PerRecipientMessageSubmissionFields,
    _encode_PerRecipientMessageSubmissionFields,
} from '../MTSAbstractService/PerRecipientMessageSubmissionFields.ta.mjs';
import {
    OriginatorName,
    _decode_OriginatorName,
    _encode_OriginatorName,
} from '../MTSAbstractService/OriginatorName.ta.mjs';
import {
    OriginalEncodedInformationTypes,
    _decode_OriginalEncodedInformationTypes,
    _encode_OriginalEncodedInformationTypes,
} from '../MTSAbstractService/OriginalEncodedInformationTypes.ta.mjs';
import {
    ContentType,
    _decode_ContentType,
    _encode_ContentType,
} from '../MTSAbstractService/ContentType.ta.mjs';
import {
    ContentIdentifier,
    _decode_ContentIdentifier,
    _encode_ContentIdentifier,
} from '../MTSAbstractService/ContentIdentifier.ta.mjs';
import {
    Priority,
    Priority_normal,
    _decode_Priority,
    _encode_Priority,
} from '../MTSAbstractService/Priority.ta.mjs';
import {
    PerMessageIndicators,
    _decode_PerMessageIndicators,
    _encode_PerMessageIndicators,
} from '../MTSAbstractService/PerMessageIndicators.ta.mjs';
import {
    DeferredDeliveryTime,
    _decode_DeferredDeliveryTime,
    _encode_DeferredDeliveryTime,
} from '../MTSAbstractService/DeferredDeliveryTime.ta.mjs';
import {
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../MTSAbstractService/ExtensionField.ta.mjs';
import {
    _root_component_type_list_1_spec_for_PerMessageSubmissionFields,
    _root_component_type_list_2_spec_for_PerMessageSubmissionFields,
    _extension_additions_list_spec_for_PerMessageSubmissionFields,
} from '../MTSAbstractService/PerMessageSubmissionFields.ta.mjs';

/**
 * @summary MessageSubmissionEnvelope
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageSubmissionEnvelope ::= SET {
 *   COMPONENTS OF PerMessageSubmissionFields,
 *   per-recipient-fields
 *     [1]  SEQUENCE SIZE (1..ub-recipients) OF
 *            PerRecipientMessageSubmissionFields
 * }
 * ```
 *
 */
export class MessageSubmissionEnvelope implements PerMessageSubmissionFields {
    constructor(
        /**
         * @summary `originator_name`.
         * @public
         * @readonly
         */
        readonly originator_name: OriginatorName /* REPLICATED_COMPONENT */,
        /**
         * @summary `original_encoded_information_types`.
         * @public
         * @readonly
         */
        readonly original_encoded_information_types: OPTIONAL<OriginalEncodedInformationTypes> /* REPLICATED_COMPONENT */,
        /**
         * @summary `content_type`.
         * @public
         * @readonly
         */
        readonly content_type: ContentType /* REPLICATED_COMPONENT */,
        /**
         * @summary `content_identifier`.
         * @public
         * @readonly
         */
        readonly content_identifier: OPTIONAL<ContentIdentifier> /* REPLICATED_COMPONENT */,
        /**
         * @summary `priority`.
         * @public
         * @readonly
         */
        readonly priority: OPTIONAL<Priority> /* REPLICATED_COMPONENT */,
        /**
         * @summary `per_message_indicators`.
         * @public
         * @readonly
         */
        readonly per_message_indicators: OPTIONAL<PerMessageIndicators> /* REPLICATED_COMPONENT */,
        /**
         * @summary `deferred_delivery_time`.
         * @public
         * @readonly
         */
        readonly deferred_delivery_time: OPTIONAL<DeferredDeliveryTime> /* REPLICATED_COMPONENT */,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<
            ExtensionField[]
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `per_recipient_fields`.
         * @public
         * @readonly
         */
        readonly per_recipient_fields: PerRecipientMessageSubmissionFields[]
    ) {}

    /**
     * @summary Restructures an object into a MessageSubmissionEnvelope
     * @description
     *
     * This takes an `object` and converts it to a `MessageSubmissionEnvelope`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MessageSubmissionEnvelope`.
     * @returns {MessageSubmissionEnvelope}
     */
    public static _from_object(
        _o: {
            [_K in keyof MessageSubmissionEnvelope]: MessageSubmissionEnvelope[_K];
        }
    ): MessageSubmissionEnvelope {
        return new MessageSubmissionEnvelope(
            _o.originator_name,
            _o.original_encoded_information_types,
            _o.content_type,
            _o.content_identifier,
            _o.priority,
            _o.per_message_indicators,
            _o.deferred_delivery_time,
            _o.extensions,
            _o.per_recipient_fields
        );
    }

    /**
     * @summary Getter that returns the default value for `priority`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_priority(): Priority {
        return Priority_normal;
    }
    /**
     * @summary Getter that returns the default value for `per_message_indicators`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_per_message_indicators(): PerMessageIndicators {
        return new Uint8ClampedArray([]);
    }
    /**
     * @summary Getter that returns the default value for `extensions`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_extensions(): ExtensionField[] {
        return [];
    }
}

/**
 * @summary The Leading Root Component Types of MessageSubmissionEnvelope
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MessageSubmissionEnvelope: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_PerMessageSubmissionFields,
    new $.ComponentSpec(
        'per-recipient-fields',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of MessageSubmissionEnvelope
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MessageSubmissionEnvelope: $.ComponentSpec[] = [
    ..._root_component_type_list_2_spec_for_PerMessageSubmissionFields,
];

/**
 * @summary The Extension Addition Component Types of MessageSubmissionEnvelope
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MessageSubmissionEnvelope: $.ComponentSpec[] = [
    ..._extension_additions_list_spec_for_PerMessageSubmissionFields,
];

let _cached_decoder_for_MessageSubmissionEnvelope: $.ASN1Decoder<MessageSubmissionEnvelope> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageSubmissionEnvelope
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageSubmissionEnvelope} The decoded data structure.
 */
export function _decode_MessageSubmissionEnvelope(el: _Element): MessageSubmissionEnvelope {
    if (!_cached_decoder_for_MessageSubmissionEnvelope) {
        _cached_decoder_for_MessageSubmissionEnvelope = function (
            el: _Element
        ): MessageSubmissionEnvelope {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let originator_name!: OriginatorName;
            let original_encoded_information_types: OPTIONAL<OriginalEncodedInformationTypes>;
            let content_type!: ContentType;
            let content_identifier: OPTIONAL<ContentIdentifier>;
            let priority: OPTIONAL<Priority> =
                MessageSubmissionEnvelope._default_value_for_priority;
            let per_message_indicators: OPTIONAL<PerMessageIndicators> =
                MessageSubmissionEnvelope._default_value_for_per_message_indicators;
            let deferred_delivery_time: OPTIONAL<DeferredDeliveryTime>;
            let extensions: OPTIONAL<ExtensionField[]> =
                MessageSubmissionEnvelope._default_value_for_extensions;
            let per_recipient_fields!: PerRecipientMessageSubmissionFields[];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                'originator-name': (_el: _Element): void => {
                    originator_name = _decode_OriginatorName(_el);
                },
                'original-encoded-information-types': (_el: _Element): void => {
                    original_encoded_information_types = _decode_OriginalEncodedInformationTypes(
                        _el
                    );
                },
                'content-type': (_el: _Element): void => {
                    content_type = _decode_ContentType(_el);
                },
                'content-identifier': (_el: _Element): void => {
                    content_identifier = _decode_ContentIdentifier(_el);
                },
                priority: (_el: _Element): void => {
                    priority = _decode_Priority(_el);
                },
                'per-message-indicators': (_el: _Element): void => {
                    per_message_indicators = _decode_PerMessageIndicators(_el);
                },
                'deferred-delivery-time': (_el: _Element): void => {
                    deferred_delivery_time = $._decode_implicit<DeferredDeliveryTime>(
                        () => _decode_DeferredDeliveryTime
                    )(_el);
                },
                extensions: (_el: _Element): void => {
                    extensions = $._decode_implicit<ExtensionField[]>(() =>
                        $._decodeSetOf<ExtensionField>(
                            () => _decode_ExtensionField
                        )
                    )(_el);
                },
                'per-recipient-fields': (_el: _Element): void => {
                    per_recipient_fields = $._decode_implicit<
                        PerRecipientMessageSubmissionFields[]
                    >(() =>
                        $._decodeSequenceOf<PerRecipientMessageSubmissionFields>(
                            () => _decode_PerRecipientMessageSubmissionFields
                        )
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MessageSubmissionEnvelope,
                _extension_additions_list_spec_for_MessageSubmissionEnvelope,
                _root_component_type_list_2_spec_for_MessageSubmissionEnvelope,
                undefined
            );
            return new MessageSubmissionEnvelope /* SET_CONSTRUCTOR_CALL */(
                originator_name,
                original_encoded_information_types,
                content_type,
                content_identifier,
                priority,
                per_message_indicators,
                deferred_delivery_time,
                extensions,
                per_recipient_fields
            );
        };
    }
    return _cached_decoder_for_MessageSubmissionEnvelope(el);
}

let _cached_encoder_for_MessageSubmissionEnvelope: $.ASN1Encoder<MessageSubmissionEnvelope> | null = null;

/**
 * @summary Encodes a(n) MessageSubmissionEnvelope into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageSubmissionEnvelope, encoded as an ASN.1 Element.
 */
export function _encode_MessageSubmissionEnvelope(
    value: MessageSubmissionEnvelope,
    elGetter: $.ASN1Encoder<MessageSubmissionEnvelope>
): _Element {
    if (!_cached_encoder_for_MessageSubmissionEnvelope) {
        _cached_encoder_for_MessageSubmissionEnvelope = function (
            value: MessageSubmissionEnvelope        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_OriginatorName(
                            value.originator_name,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.original_encoded_information_types ===
                        undefined
                            ? undefined
                            : _encode_OriginalEncodedInformationTypes(
                                  value.original_encoded_information_types,
                                  $.BER
                              ),
                        /* REQUIRED   */ _encode_ContentType(
                            value.content_type,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.content_identifier === undefined
                            ? undefined
                            : _encode_ContentIdentifier(
                                  value.content_identifier,
                                  $.BER
                              ),
                        /* IF_DEFAULT */ value.priority === undefined ||
                        $.deepEq(
                            value.priority,
                            MessageSubmissionEnvelope._default_value_for_priority
                        )
                            ? undefined
                            : _encode_Priority(value.priority, $.BER),
                        /* IF_DEFAULT */ value.per_message_indicators ===
                            undefined ||
                        $.deepEq(
                            value.per_message_indicators,
                            MessageSubmissionEnvelope._default_value_for_per_message_indicators
                        )
                            ? undefined
                            : _encode_PerMessageIndicators(
                                  value.per_message_indicators,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.deferred_delivery_time ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_DeferredDeliveryTime,
                                  $.BER
                              )(value.deferred_delivery_time, $.BER),
                        /* IF_DEFAULT */ value.extensions === undefined ||
                        $.deepEq(
                            value.extensions,
                            MessageSubmissionEnvelope._default_value_for_extensions
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () =>
                                      $._encodeSetOf<ExtensionField>(
                                          () => _encode_ExtensionField,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.extensions, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () =>
                                $._encodeSequenceOf<PerRecipientMessageSubmissionFields>(
                                    () =>
                                        _encode_PerRecipientMessageSubmissionFields,
                                    $.BER
                                ),
                            $.BER
                        )(value.per_recipient_fields, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MessageSubmissionEnvelope(value, elGetter);
}


/* eslint-enable */

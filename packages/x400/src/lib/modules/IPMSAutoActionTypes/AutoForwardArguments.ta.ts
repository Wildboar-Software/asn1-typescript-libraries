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
    PerMessageAutoForwardFields,
    _decode_PerMessageAutoForwardFields,
    _encode_PerMessageAutoForwardFields,
} from '../IPMSAutoActionTypes/PerMessageAutoForwardFields.ta.js';
export {
    PerMessageAutoForwardFields,
    _decode_PerMessageAutoForwardFields,
    _encode_PerMessageAutoForwardFields,
} from '../IPMSAutoActionTypes/PerMessageAutoForwardFields.ta.js';
import {
    PerRecipientAutoForwardFields,
    _decode_PerRecipientAutoForwardFields,
    _encode_PerRecipientAutoForwardFields,
} from '../IPMSAutoActionTypes/PerRecipientAutoForwardFields.ta.js';
export {
    PerRecipientAutoForwardFields,
    _decode_PerRecipientAutoForwardFields,
    _encode_PerRecipientAutoForwardFields,
} from '../IPMSAutoActionTypes/PerRecipientAutoForwardFields.ta.js';
import {
    OriginatorName,
    _decode_OriginatorName,
    _encode_OriginatorName,
} from '../MTSAbstractService/OriginatorName.ta.js';
export {
    OriginatorName,
    _decode_OriginatorName,
    _encode_OriginatorName,
} from '../MTSAbstractService/OriginatorName.ta.js';
import {
    ContentIdentifier,
    _decode_ContentIdentifier,
    _encode_ContentIdentifier,
} from '../MTSAbstractService/ContentIdentifier.ta.js';
export {
    ContentIdentifier,
    _decode_ContentIdentifier,
    _encode_ContentIdentifier,
} from '../MTSAbstractService/ContentIdentifier.ta.js';
import {
    Priority,
    _decode_Priority,
    _encode_Priority,
} from '../MTSAbstractService/Priority.ta.js';
export {
    Priority,
    _decode_Priority,
    _encode_Priority,
} from '../MTSAbstractService/Priority.ta.js';
import {
    PerMessageIndicators,
    _decode_PerMessageIndicators,
    _encode_PerMessageIndicators,
} from '../MTSAbstractService/PerMessageIndicators.ta.js';
export {
    PerMessageIndicators,
    _decode_PerMessageIndicators,
    _encode_PerMessageIndicators,
} from '../MTSAbstractService/PerMessageIndicators.ta.js';
import {
    DeferredDeliveryTime,
    _decode_DeferredDeliveryTime,
    _encode_DeferredDeliveryTime,
} from '../MTSAbstractService/DeferredDeliveryTime.ta.js';
export {
    DeferredDeliveryTime,
    _decode_DeferredDeliveryTime,
    _encode_DeferredDeliveryTime,
} from '../MTSAbstractService/DeferredDeliveryTime.ta.js';
import {
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../MTSAbstractService/ExtensionField.ta.js';
export {
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../MTSAbstractService/ExtensionField.ta.js';

/* START_OF_SYMBOL_DEFINITION AutoForwardArguments */
/**
 * @summary AutoForwardArguments
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoForwardArguments ::= SET {
 *   COMPONENTS OF PerMessageAutoForwardFields,
 *   per-recipient-fields
 *     [1] IMPLICIT SEQUENCE SIZE (1..ub-recipients) OF
 *                    PerRecipientAutoForwardFields
 * }
 * ```
 *
 * @class
 */
export class AutoForwardArguments {
    constructor(
        /**
         * @summary `originator_name`.
         * @public
         * @readonly
         */
        readonly originator_name: OriginatorName /* REPLICATED_COMPONENT */,
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
        readonly per_recipient_fields: PerRecipientAutoForwardFields[]
    ) {}

    /**
     * @summary Restructures an object into a AutoForwardArguments
     * @description
     *
     * This takes an `object` and converts it to a `AutoForwardArguments`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AutoForwardArguments`.
     * @returns {AutoForwardArguments}
     */
    public static _from_object(
        _o: { [_K in keyof AutoForwardArguments]: AutoForwardArguments[_K] }
    ): AutoForwardArguments {
        return new AutoForwardArguments(
            _o.originator_name,
            _o.content_identifier,
            _o.priority,
            _o.per_message_indicators,
            _o.deferred_delivery_time,
            _o.extensions,
            _o.per_recipient_fields
        );
    }

    /**
     * @summary Getter that returns the default value for `extensions`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_extensions() {
        return [];
    }
}
/* END_OF_SYMBOL_DEFINITION AutoForwardArguments */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AutoForwardArguments */
/**
 * @summary The Leading Root Component Types of AutoForwardArguments
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AutoForwardArguments: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'originator-name',
        false,
        $.hasTag(_TagClass.application, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'content-identifier',
        true,
        $.hasTag(_TagClass.application, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'priority',
        true,
        $.hasTag(_TagClass.application, 7),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'per-message-indicators',
        true,
        $.hasTag(_TagClass.application, 8),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'deferred-delivery-time',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'extensions',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'per-recipient-fields',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AutoForwardArguments */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AutoForwardArguments */
/**
 * @summary The Trailing Root Component Types of AutoForwardArguments
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AutoForwardArguments: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AutoForwardArguments */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AutoForwardArguments */
/**
 * @summary The Extension Addition Component Types of AutoForwardArguments
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AutoForwardArguments: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AutoForwardArguments */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AutoForwardArguments */
let _cached_decoder_for_AutoForwardArguments: $.ASN1Decoder<AutoForwardArguments> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AutoForwardArguments */

/* START_OF_SYMBOL_DEFINITION _decode_AutoForwardArguments */
/**
 * @summary Decodes an ASN.1 element into a(n) AutoForwardArguments
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AutoForwardArguments} The decoded data structure.
 */
export function _decode_AutoForwardArguments(el: _Element) {
    if (!_cached_decoder_for_AutoForwardArguments) {
        _cached_decoder_for_AutoForwardArguments = function (
            el: _Element
        ): AutoForwardArguments {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let originator_name!: OriginatorName;
            let content_identifier: OPTIONAL<ContentIdentifier>;
            let priority: OPTIONAL<Priority>;
            let per_message_indicators: OPTIONAL<PerMessageIndicators>;
            let deferred_delivery_time: OPTIONAL<DeferredDeliveryTime>;
            let extensions: OPTIONAL<ExtensionField[]> =
                AutoForwardArguments._default_value_for_extensions;
            let per_recipient_fields!: PerRecipientAutoForwardFields[];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'originator-name': (_el: _Element): void => {
                    originator_name = _decode_OriginatorName(_el);
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
                        PerRecipientAutoForwardFields[]
                    >(() =>
                        $._decodeSequenceOf<PerRecipientAutoForwardFields>(
                            () => _decode_PerRecipientAutoForwardFields
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AutoForwardArguments,
                _extension_additions_list_spec_for_AutoForwardArguments,
                _root_component_type_list_2_spec_for_AutoForwardArguments,
                undefined
            );
            return new AutoForwardArguments /* SET_CONSTRUCTOR_CALL */(
                originator_name,
                content_identifier,
                priority,
                per_message_indicators,
                deferred_delivery_time,
                extensions,
                per_recipient_fields
            );
        };
    }
    return _cached_decoder_for_AutoForwardArguments(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AutoForwardArguments */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AutoForwardArguments */
let _cached_encoder_for_AutoForwardArguments: $.ASN1Encoder<AutoForwardArguments> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AutoForwardArguments */

/* START_OF_SYMBOL_DEFINITION _encode_AutoForwardArguments */
/**
 * @summary Encodes a(n) AutoForwardArguments into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AutoForwardArguments, encoded as an ASN.1 Element.
 */
export function _encode_AutoForwardArguments(
    value: AutoForwardArguments,
    elGetter: $.ASN1Encoder<AutoForwardArguments>
) {
    if (!_cached_encoder_for_AutoForwardArguments) {
        _cached_encoder_for_AutoForwardArguments = function (
            value: AutoForwardArguments,
            elGetter: $.ASN1Encoder<AutoForwardArguments>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_OriginatorName(
                            value.originator_name,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.content_identifier === undefined
                            ? undefined
                            : _encode_ContentIdentifier(
                                  value.content_identifier,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.priority === undefined
                            ? undefined
                            : _encode_Priority(value.priority, $.BER),
                        /* IF_ABSENT  */ value.per_message_indicators ===
                        undefined
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
                            AutoForwardArguments._default_value_for_extensions
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
                                $._encodeSequenceOf<PerRecipientAutoForwardFields>(
                                    () => _encode_PerRecipientAutoForwardFields,
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
    return _cached_encoder_for_AutoForwardArguments(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AutoForwardArguments */

/* eslint-enable */

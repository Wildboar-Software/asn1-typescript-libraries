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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    OriginatorName,
    _decode_OriginatorName,
    _encode_OriginatorName,
} from '../MTSAbstractService/OriginatorName.ta';
export {
    OriginatorName,
    _decode_OriginatorName,
    _encode_OriginatorName,
} from '../MTSAbstractService/OriginatorName.ta';
import {
    ContentIdentifier,
    _decode_ContentIdentifier,
    _encode_ContentIdentifier,
} from '../MTSAbstractService/ContentIdentifier.ta';
export {
    ContentIdentifier,
    _decode_ContentIdentifier,
    _encode_ContentIdentifier,
} from '../MTSAbstractService/ContentIdentifier.ta';
import {
    Priority,
    _decode_Priority,
    _encode_Priority,
} from '../MTSAbstractService/Priority.ta';
export {
    Priority,
    _decode_Priority,
    _encode_Priority,
} from '../MTSAbstractService/Priority.ta';
import {
    PerMessageIndicators,
    _decode_PerMessageIndicators,
    _encode_PerMessageIndicators,
} from '../MTSAbstractService/PerMessageIndicators.ta';
export {
    PerMessageIndicators,
    _decode_PerMessageIndicators,
    _encode_PerMessageIndicators,
} from '../MTSAbstractService/PerMessageIndicators.ta';
import {
    DeferredDeliveryTime,
    _decode_DeferredDeliveryTime,
    _encode_DeferredDeliveryTime,
} from '../MTSAbstractService/DeferredDeliveryTime.ta';
export {
    DeferredDeliveryTime,
    _decode_DeferredDeliveryTime,
    _encode_DeferredDeliveryTime,
} from '../MTSAbstractService/DeferredDeliveryTime.ta';
import {
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../MTSAbstractService/ExtensionField.ta';
export {
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../MTSAbstractService/ExtensionField.ta';

/* START_OF_SYMBOL_DEFINITION PerMessageAutoForwardFields */
/**
 * @summary PerMessageAutoForwardFields
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerMessageAutoForwardFields ::= SET {
 *   originator-name         OriginatorName,
 *   content-identifier      ContentIdentifier OPTIONAL,
 *   priority                Priority OPTIONAL,
 *   per-message-indicators  PerMessageIndicators OPTIONAL,
 *   deferred-delivery-time  [0] IMPLICIT DeferredDeliveryTime OPTIONAL,
 *   extensions
 *     [2] IMPLICIT SET OF ExtensionField{{PerMessageSubmissionExtensions}}
 *       DEFAULT {}
 * }
 * ```
 *
 * @class
 */
export class PerMessageAutoForwardFields {
    constructor(
        /**
         * @summary `originator_name`.
         * @public
         * @readonly
         */
        readonly originator_name: OriginatorName,
        /**
         * @summary `content_identifier`.
         * @public
         * @readonly
         */
        readonly content_identifier: OPTIONAL<ContentIdentifier>,
        /**
         * @summary `priority`.
         * @public
         * @readonly
         */
        readonly priority: OPTIONAL<Priority>,
        /**
         * @summary `per_message_indicators`.
         * @public
         * @readonly
         */
        readonly per_message_indicators: OPTIONAL<PerMessageIndicators>,
        /**
         * @summary `deferred_delivery_time`.
         * @public
         * @readonly
         */
        readonly deferred_delivery_time: OPTIONAL<DeferredDeliveryTime>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>
    ) {}

    /**
     * @summary Restructures an object into a PerMessageAutoForwardFields
     * @description
     *
     * This takes an `object` and converts it to a `PerMessageAutoForwardFields`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PerMessageAutoForwardFields`.
     * @returns {PerMessageAutoForwardFields}
     */
    public static _from_object(
        _o: {
            [_K in keyof PerMessageAutoForwardFields]: PerMessageAutoForwardFields[_K];
        }
    ): PerMessageAutoForwardFields {
        return new PerMessageAutoForwardFields(
            _o.originator_name,
            _o.content_identifier,
            _o.priority,
            _o.per_message_indicators,
            _o.deferred_delivery_time,
            _o.extensions
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
/* END_OF_SYMBOL_DEFINITION PerMessageAutoForwardFields */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PerMessageAutoForwardFields */
/**
 * @summary The Leading Root Component Types of PerMessageAutoForwardFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PerMessageAutoForwardFields: $.ComponentSpec[] = [
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
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PerMessageAutoForwardFields */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PerMessageAutoForwardFields */
/**
 * @summary The Trailing Root Component Types of PerMessageAutoForwardFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PerMessageAutoForwardFields: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PerMessageAutoForwardFields */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PerMessageAutoForwardFields */
/**
 * @summary The Extension Addition Component Types of PerMessageAutoForwardFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PerMessageAutoForwardFields: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PerMessageAutoForwardFields */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PerMessageAutoForwardFields */
let _cached_decoder_for_PerMessageAutoForwardFields: $.ASN1Decoder<PerMessageAutoForwardFields> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PerMessageAutoForwardFields */

/* START_OF_SYMBOL_DEFINITION _decode_PerMessageAutoForwardFields */
/**
 * @summary Decodes an ASN.1 element into a(n) PerMessageAutoForwardFields
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PerMessageAutoForwardFields} The decoded data structure.
 */
export function _decode_PerMessageAutoForwardFields(el: _Element) {
    if (!_cached_decoder_for_PerMessageAutoForwardFields) {
        _cached_decoder_for_PerMessageAutoForwardFields = function (
            el: _Element
        ): PerMessageAutoForwardFields {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let originator_name!: OriginatorName;
            let content_identifier: OPTIONAL<ContentIdentifier>;
            let priority: OPTIONAL<Priority>;
            let per_message_indicators: OPTIONAL<PerMessageIndicators>;
            let deferred_delivery_time: OPTIONAL<DeferredDeliveryTime>;
            let extensions: OPTIONAL<ExtensionField[]> =
                PerMessageAutoForwardFields._default_value_for_extensions;
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
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PerMessageAutoForwardFields,
                _extension_additions_list_spec_for_PerMessageAutoForwardFields,
                _root_component_type_list_2_spec_for_PerMessageAutoForwardFields,
                undefined
            );
            return new PerMessageAutoForwardFields /* SET_CONSTRUCTOR_CALL */(
                originator_name,
                content_identifier,
                priority,
                per_message_indicators,
                deferred_delivery_time,
                extensions
            );
        };
    }
    return _cached_decoder_for_PerMessageAutoForwardFields(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PerMessageAutoForwardFields */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PerMessageAutoForwardFields */
let _cached_encoder_for_PerMessageAutoForwardFields: $.ASN1Encoder<PerMessageAutoForwardFields> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PerMessageAutoForwardFields */

/* START_OF_SYMBOL_DEFINITION _encode_PerMessageAutoForwardFields */
/**
 * @summary Encodes a(n) PerMessageAutoForwardFields into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PerMessageAutoForwardFields, encoded as an ASN.1 Element.
 */
export function _encode_PerMessageAutoForwardFields(
    value: PerMessageAutoForwardFields,
    elGetter: $.ASN1Encoder<PerMessageAutoForwardFields>
) {
    if (!_cached_encoder_for_PerMessageAutoForwardFields) {
        _cached_encoder_for_PerMessageAutoForwardFields = function (
            value: PerMessageAutoForwardFields,
            elGetter: $.ASN1Encoder<PerMessageAutoForwardFields>
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
                            PerMessageAutoForwardFields._default_value_for_extensions
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
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PerMessageAutoForwardFields(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PerMessageAutoForwardFields */

/* eslint-enable */

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
    MessageIdentifier,
    _decode_MessageIdentifier,
    _encode_MessageIdentifier,
} from '../MTAAbstractService/MessageIdentifier.ta';
export {
    MessageIdentifier,
    _decode_MessageIdentifier,
    _encode_MessageIdentifier,
} from '../MTAAbstractService/MessageIdentifier.ta';
import {
    OriginatorName,
    _decode_OriginatorName,
    _encode_OriginatorName,
} from '../MTAAbstractService/OriginatorName.ta';
export {
    OriginatorName,
    _decode_OriginatorName,
    _encode_OriginatorName,
} from '../MTAAbstractService/OriginatorName.ta';
import {
    OriginalEncodedInformationTypes,
    _decode_OriginalEncodedInformationTypes,
    _encode_OriginalEncodedInformationTypes,
} from '../MTSAbstractService/OriginalEncodedInformationTypes.ta';
export {
    OriginalEncodedInformationTypes,
    _decode_OriginalEncodedInformationTypes,
    _encode_OriginalEncodedInformationTypes,
} from '../MTSAbstractService/OriginalEncodedInformationTypes.ta';
import {
    ContentType,
    _decode_ContentType,
    _encode_ContentType,
} from '../MTSAbstractService/ContentType.ta';
export {
    ContentType,
    _decode_ContentType,
    _encode_ContentType,
} from '../MTSAbstractService/ContentType.ta';
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
    Priority_normal,
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
    PerDomainBilateralInformation,
    _decode_PerDomainBilateralInformation,
    _encode_PerDomainBilateralInformation,
} from '../MTAAbstractService/PerDomainBilateralInformation.ta';
export {
    PerDomainBilateralInformation,
    _decode_PerDomainBilateralInformation,
    _encode_PerDomainBilateralInformation,
} from '../MTAAbstractService/PerDomainBilateralInformation.ta';
import {
    TraceInformation,
    _decode_TraceInformation,
    _encode_TraceInformation,
} from '../MTAAbstractService/TraceInformation.ta';
export {
    TraceInformation,
    _decode_TraceInformation,
    _encode_TraceInformation,
} from '../MTAAbstractService/TraceInformation.ta';
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

/* START_OF_SYMBOL_DEFINITION PerMessageTransferFields */
/**
 * @summary PerMessageTransferFields
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerMessageTransferFields ::= SET {
 *   message-identifier                  MessageIdentifier,
 *   originator-name                     OriginatorName,
 *   original-encoded-information-types  OriginalEncodedInformationTypes OPTIONAL,
 *   content-type                        ContentType,
 *   content-identifier                  ContentIdentifier OPTIONAL,
 *   priority                            Priority DEFAULT normal,
 *   per-message-indicators              PerMessageIndicators DEFAULT {},
 *   deferred-delivery-time              [0]  DeferredDeliveryTime OPTIONAL,
 *   per-domain-bilateral-information
 *     [1]  SEQUENCE SIZE (1..ub-transfers) OF PerDomainBilateralInformation
 *       OPTIONAL,
 *   trace-information                   TraceInformation,
 *   extensions
 *     [3]  SET OF ExtensionField{{MessageTransferExtensions}} DEFAULT {}
 * }
 * ```
 *
 * @class
 */
export class PerMessageTransferFields {
    constructor(
        /**
         * @summary `message_identifier`.
         * @public
         * @readonly
         */
        readonly message_identifier: MessageIdentifier,
        /**
         * @summary `originator_name`.
         * @public
         * @readonly
         */
        readonly originator_name: OriginatorName,
        /**
         * @summary `original_encoded_information_types`.
         * @public
         * @readonly
         */
        readonly original_encoded_information_types: OPTIONAL<OriginalEncodedInformationTypes>,
        /**
         * @summary `content_type`.
         * @public
         * @readonly
         */
        readonly content_type: ContentType,
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
         * @summary `per_domain_bilateral_information`.
         * @public
         * @readonly
         */
        readonly per_domain_bilateral_information: OPTIONAL<
            PerDomainBilateralInformation[]
        >,
        /**
         * @summary `trace_information`.
         * @public
         * @readonly
         */
        readonly trace_information: TraceInformation,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>
    ) {}

    /**
     * @summary Restructures an object into a PerMessageTransferFields
     * @description
     *
     * This takes an `object` and converts it to a `PerMessageTransferFields`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PerMessageTransferFields`.
     * @returns {PerMessageTransferFields}
     */
    public static _from_object(
        _o: {
            [_K in keyof PerMessageTransferFields]: PerMessageTransferFields[_K];
        }
    ): PerMessageTransferFields {
        return new PerMessageTransferFields(
            _o.message_identifier,
            _o.originator_name,
            _o.original_encoded_information_types,
            _o.content_type,
            _o.content_identifier,
            _o.priority,
            _o.per_message_indicators,
            _o.deferred_delivery_time,
            _o.per_domain_bilateral_information,
            _o.trace_information,
            _o.extensions
        );
    }

    /**
     * @summary Getter that returns the default value for `priority`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_priority() {
        return Priority_normal;
    }
    /**
     * @summary Getter that returns the default value for `per_message_indicators`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_per_message_indicators() {
        return new Uint8ClampedArray([]);
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
/* END_OF_SYMBOL_DEFINITION PerMessageTransferFields */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PerMessageTransferFields */
/**
 * @summary The Leading Root Component Types of PerMessageTransferFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PerMessageTransferFields: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'message-identifier',
        false,
        $.hasTag(_TagClass.application, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'originator-name',
        false,
        $.hasTag(_TagClass.application, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'original-encoded-information-types',
        true,
        $.hasTag(_TagClass.application, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'content-type',
        false,
        $.hasAnyTag,
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
        'per-domain-bilateral-information',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'trace-information',
        false,
        $.hasTag(_TagClass.application, 9),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'extensions',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PerMessageTransferFields */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PerMessageTransferFields */
/**
 * @summary The Trailing Root Component Types of PerMessageTransferFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PerMessageTransferFields: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PerMessageTransferFields */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PerMessageTransferFields */
/**
 * @summary The Extension Addition Component Types of PerMessageTransferFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PerMessageTransferFields: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PerMessageTransferFields */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PerMessageTransferFields */
let _cached_decoder_for_PerMessageTransferFields: $.ASN1Decoder<PerMessageTransferFields> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PerMessageTransferFields */

/* START_OF_SYMBOL_DEFINITION _decode_PerMessageTransferFields */
/**
 * @summary Decodes an ASN.1 element into a(n) PerMessageTransferFields
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PerMessageTransferFields} The decoded data structure.
 */
export function _decode_PerMessageTransferFields(el: _Element) {
    if (!_cached_decoder_for_PerMessageTransferFields) {
        _cached_decoder_for_PerMessageTransferFields = function (
            el: _Element
        ): PerMessageTransferFields {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let message_identifier!: MessageIdentifier;
            let originator_name!: OriginatorName;
            let original_encoded_information_types: OPTIONAL<OriginalEncodedInformationTypes>;
            let content_type!: ContentType;
            let content_identifier: OPTIONAL<ContentIdentifier>;
            let priority: OPTIONAL<Priority> =
                PerMessageTransferFields._default_value_for_priority;
            let per_message_indicators: OPTIONAL<PerMessageIndicators> =
                PerMessageTransferFields._default_value_for_per_message_indicators;
            let deferred_delivery_time: OPTIONAL<DeferredDeliveryTime>;
            let per_domain_bilateral_information: OPTIONAL<
                PerDomainBilateralInformation[]
            >;
            let trace_information!: TraceInformation;
            let extensions: OPTIONAL<ExtensionField[]> =
                PerMessageTransferFields._default_value_for_extensions;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'message-identifier': (_el: _Element): void => {
                    message_identifier = _decode_MessageIdentifier(_el);
                },
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
                'per-domain-bilateral-information': (_el: _Element): void => {
                    per_domain_bilateral_information = $._decode_implicit<
                        PerDomainBilateralInformation[]
                    >(() =>
                        $._decodeSequenceOf<PerDomainBilateralInformation>(
                            () => _decode_PerDomainBilateralInformation
                        )
                    )(_el);
                },
                'trace-information': (_el: _Element): void => {
                    trace_information = _decode_TraceInformation(_el);
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
                _root_component_type_list_1_spec_for_PerMessageTransferFields,
                _extension_additions_list_spec_for_PerMessageTransferFields,
                _root_component_type_list_2_spec_for_PerMessageTransferFields,
                undefined
            );
            return new PerMessageTransferFields /* SET_CONSTRUCTOR_CALL */(
                message_identifier,
                originator_name,
                original_encoded_information_types,
                content_type,
                content_identifier,
                priority,
                per_message_indicators,
                deferred_delivery_time,
                per_domain_bilateral_information,
                trace_information,
                extensions
            );
        };
    }
    return _cached_decoder_for_PerMessageTransferFields(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PerMessageTransferFields */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PerMessageTransferFields */
let _cached_encoder_for_PerMessageTransferFields: $.ASN1Encoder<PerMessageTransferFields> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PerMessageTransferFields */

/* START_OF_SYMBOL_DEFINITION _encode_PerMessageTransferFields */
/**
 * @summary Encodes a(n) PerMessageTransferFields into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PerMessageTransferFields, encoded as an ASN.1 Element.
 */
export function _encode_PerMessageTransferFields(
    value: PerMessageTransferFields,
    elGetter: $.ASN1Encoder<PerMessageTransferFields>
) {
    if (!_cached_encoder_for_PerMessageTransferFields) {
        _cached_encoder_for_PerMessageTransferFields = function (
            value: PerMessageTransferFields,
            elGetter: $.ASN1Encoder<PerMessageTransferFields>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_MessageIdentifier(
                            value.message_identifier,
                            $.BER
                        ),
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
                            PerMessageTransferFields._default_value_for_priority
                        )
                            ? undefined
                            : _encode_Priority(value.priority, $.BER),
                        /* IF_DEFAULT */ value.per_message_indicators ===
                            undefined ||
                        $.deepEq(
                            value.per_message_indicators,
                            PerMessageTransferFields._default_value_for_per_message_indicators
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
                        /* IF_ABSENT  */ value.per_domain_bilateral_information ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () =>
                                      $._encodeSequenceOf<PerDomainBilateralInformation>(
                                          () =>
                                              _encode_PerDomainBilateralInformation,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.per_domain_bilateral_information, $.BER),
                        /* REQUIRED   */ _encode_TraceInformation(
                            value.trace_information,
                            $.BER
                        ),
                        /* IF_DEFAULT */ value.extensions === undefined ||
                        $.deepEq(
                            value.extensions,
                            PerMessageTransferFields._default_value_for_extensions
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
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
    return _cached_encoder_for_PerMessageTransferFields(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PerMessageTransferFields */

/* eslint-enable */

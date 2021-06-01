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
    PerProbeTransferFields,
    _decode_PerProbeTransferFields,
    _encode_PerProbeTransferFields,
} from '../MTAAbstractService/PerProbeTransferFields.ta';
export {
    PerProbeTransferFields,
    _decode_PerProbeTransferFields,
    _encode_PerProbeTransferFields,
} from '../MTAAbstractService/PerProbeTransferFields.ta';
import {
    PerRecipientProbeTransferFields,
    _decode_PerRecipientProbeTransferFields,
    _encode_PerRecipientProbeTransferFields,
} from '../MTAAbstractService/PerRecipientProbeTransferFields.ta';
export {
    PerRecipientProbeTransferFields,
    _decode_PerRecipientProbeTransferFields,
    _encode_PerRecipientProbeTransferFields,
} from '../MTAAbstractService/PerRecipientProbeTransferFields.ta';
import {
    ProbeIdentifier,
    _decode_ProbeIdentifier,
    _encode_ProbeIdentifier,
} from '../MTAAbstractService/ProbeIdentifier.ta';
export {
    ProbeIdentifier,
    _decode_ProbeIdentifier,
    _encode_ProbeIdentifier,
} from '../MTAAbstractService/ProbeIdentifier.ta';
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
    ContentLength,
    _decode_ContentLength,
    _encode_ContentLength,
} from '../MTSAbstractService/ContentLength.ta';
export {
    ContentLength,
    _decode_ContentLength,
    _encode_ContentLength,
} from '../MTSAbstractService/ContentLength.ta';
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

/* START_OF_SYMBOL_DEFINITION ProbeTransferEnvelope */
/**
 * @summary ProbeTransferEnvelope
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProbeTransferEnvelope ::= SET {
 *   COMPONENTS OF PerProbeTransferFields,
 *   per-recipient-fields
 *     [2]  SEQUENCE SIZE (1..ub-recipients) OF PerRecipientProbeTransferFields
 * }
 * ```
 *
 * @class
 */
export class ProbeTransferEnvelope {
    constructor(
        /**
         * @summary `probe_identifier`.
         * @public
         * @readonly
         */
        readonly probe_identifier: ProbeIdentifier /* REPLICATED_COMPONENT */,
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
         * @summary `content_length`.
         * @public
         * @readonly
         */
        readonly content_length: OPTIONAL<ContentLength> /* REPLICATED_COMPONENT */,
        /**
         * @summary `per_message_indicators`.
         * @public
         * @readonly
         */
        readonly per_message_indicators: OPTIONAL<PerMessageIndicators> /* REPLICATED_COMPONENT */,
        /**
         * @summary `per_domain_bilateral_information`.
         * @public
         * @readonly
         */
        readonly per_domain_bilateral_information: OPTIONAL<
            PerDomainBilateralInformation[]
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `trace_information`.
         * @public
         * @readonly
         */
        readonly trace_information: TraceInformation /* REPLICATED_COMPONENT */,
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
        readonly per_recipient_fields: PerRecipientProbeTransferFields[]
    ) {}

    /**
     * @summary Restructures an object into a ProbeTransferEnvelope
     * @description
     *
     * This takes an `object` and converts it to a `ProbeTransferEnvelope`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProbeTransferEnvelope`.
     * @returns {ProbeTransferEnvelope}
     */
    public static _from_object(
        _o: { [_K in keyof ProbeTransferEnvelope]: ProbeTransferEnvelope[_K] }
    ): ProbeTransferEnvelope {
        return new ProbeTransferEnvelope(
            _o.probe_identifier,
            _o.originator_name,
            _o.original_encoded_information_types,
            _o.content_type,
            _o.content_identifier,
            _o.content_length,
            _o.per_message_indicators,
            _o.per_domain_bilateral_information,
            _o.trace_information,
            _o.extensions,
            _o.per_recipient_fields
        );
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
/* END_OF_SYMBOL_DEFINITION ProbeTransferEnvelope */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ProbeTransferEnvelope */
/**
 * @summary The Leading Root Component Types of ProbeTransferEnvelope
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ProbeTransferEnvelope: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'probe-identifier',
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
        'content-length',
        true,
        $.hasTag(_TagClass.context, 0),
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
    new $.ComponentSpec(
        'per-recipient-fields',
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ProbeTransferEnvelope */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ProbeTransferEnvelope */
/**
 * @summary The Trailing Root Component Types of ProbeTransferEnvelope
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ProbeTransferEnvelope: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ProbeTransferEnvelope */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ProbeTransferEnvelope */
/**
 * @summary The Extension Addition Component Types of ProbeTransferEnvelope
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ProbeTransferEnvelope: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ProbeTransferEnvelope */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProbeTransferEnvelope */
let _cached_decoder_for_ProbeTransferEnvelope: $.ASN1Decoder<ProbeTransferEnvelope> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProbeTransferEnvelope */

/* START_OF_SYMBOL_DEFINITION _decode_ProbeTransferEnvelope */
/**
 * @summary Decodes an ASN.1 element into a(n) ProbeTransferEnvelope
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProbeTransferEnvelope} The decoded data structure.
 */
export function _decode_ProbeTransferEnvelope(el: _Element) {
    if (!_cached_decoder_for_ProbeTransferEnvelope) {
        _cached_decoder_for_ProbeTransferEnvelope = function (
            el: _Element
        ): ProbeTransferEnvelope {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let probe_identifier!: ProbeIdentifier;
            let originator_name!: OriginatorName;
            let original_encoded_information_types: OPTIONAL<OriginalEncodedInformationTypes>;
            let content_type!: ContentType;
            let content_identifier: OPTIONAL<ContentIdentifier>;
            let content_length: OPTIONAL<ContentLength>;
            let per_message_indicators: OPTIONAL<PerMessageIndicators> =
                ProbeTransferEnvelope._default_value_for_per_message_indicators;
            let per_domain_bilateral_information: OPTIONAL<
                PerDomainBilateralInformation[]
            >;
            let trace_information!: TraceInformation;
            let extensions: OPTIONAL<ExtensionField[]> =
                ProbeTransferEnvelope._default_value_for_extensions;
            let per_recipient_fields!: PerRecipientProbeTransferFields[];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'probe-identifier': (_el: _Element): void => {
                    probe_identifier = _decode_ProbeIdentifier(_el);
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
                'content-length': (_el: _Element): void => {
                    content_length = $._decode_implicit<ContentLength>(
                        () => _decode_ContentLength
                    )(_el);
                },
                'per-message-indicators': (_el: _Element): void => {
                    per_message_indicators = _decode_PerMessageIndicators(_el);
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
                'per-recipient-fields': (_el: _Element): void => {
                    per_recipient_fields = $._decode_implicit<
                        PerRecipientProbeTransferFields[]
                    >(() =>
                        $._decodeSequenceOf<PerRecipientProbeTransferFields>(
                            () => _decode_PerRecipientProbeTransferFields
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ProbeTransferEnvelope,
                _extension_additions_list_spec_for_ProbeTransferEnvelope,
                _root_component_type_list_2_spec_for_ProbeTransferEnvelope,
                undefined
            );
            return new ProbeTransferEnvelope /* SET_CONSTRUCTOR_CALL */(
                probe_identifier,
                originator_name,
                original_encoded_information_types,
                content_type,
                content_identifier,
                content_length,
                per_message_indicators,
                per_domain_bilateral_information,
                trace_information,
                extensions,
                per_recipient_fields
            );
        };
    }
    return _cached_decoder_for_ProbeTransferEnvelope(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProbeTransferEnvelope */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProbeTransferEnvelope */
let _cached_encoder_for_ProbeTransferEnvelope: $.ASN1Encoder<ProbeTransferEnvelope> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProbeTransferEnvelope */

/* START_OF_SYMBOL_DEFINITION _encode_ProbeTransferEnvelope */
/**
 * @summary Encodes a(n) ProbeTransferEnvelope into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProbeTransferEnvelope, encoded as an ASN.1 Element.
 */
export function _encode_ProbeTransferEnvelope(
    value: ProbeTransferEnvelope,
    elGetter: $.ASN1Encoder<ProbeTransferEnvelope>
) {
    if (!_cached_encoder_for_ProbeTransferEnvelope) {
        _cached_encoder_for_ProbeTransferEnvelope = function (
            value: ProbeTransferEnvelope,
            elGetter: $.ASN1Encoder<ProbeTransferEnvelope>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ProbeIdentifier(
                            value.probe_identifier,
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
                        /* IF_ABSENT  */ value.content_length === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_ContentLength,
                                  $.BER
                              )(value.content_length, $.BER),
                        /* IF_DEFAULT */ value.per_message_indicators ===
                            undefined ||
                        $.deepEq(
                            value.per_message_indicators,
                            ProbeTransferEnvelope._default_value_for_per_message_indicators
                        )
                            ? undefined
                            : _encode_PerMessageIndicators(
                                  value.per_message_indicators,
                                  $.BER
                              ),
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
                            ProbeTransferEnvelope._default_value_for_extensions
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
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            2,
                            () =>
                                $._encodeSequenceOf<PerRecipientProbeTransferFields>(
                                    () =>
                                        _encode_PerRecipientProbeTransferFields,
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
    return _cached_encoder_for_ProbeTransferEnvelope(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProbeTransferEnvelope */

/* eslint-enable */

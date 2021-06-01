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
    SubjectIdentifier,
    _decode_SubjectIdentifier,
    _encode_SubjectIdentifier,
} from '../MTAAbstractService/SubjectIdentifier.ta';
export {
    SubjectIdentifier,
    _decode_SubjectIdentifier,
    _encode_SubjectIdentifier,
} from '../MTAAbstractService/SubjectIdentifier.ta';
import {
    SubjectIntermediateTraceInformation,
    _decode_SubjectIntermediateTraceInformation,
    _encode_SubjectIntermediateTraceInformation,
} from '../MTAAbstractService/SubjectIntermediateTraceInformation.ta';
export {
    SubjectIntermediateTraceInformation,
    _decode_SubjectIntermediateTraceInformation,
    _encode_SubjectIntermediateTraceInformation,
} from '../MTAAbstractService/SubjectIntermediateTraceInformation.ta';
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
    Content,
    _decode_Content,
    _encode_Content,
} from '../MTSAbstractService/Content.ta';
export {
    Content,
    _decode_Content,
    _encode_Content,
} from '../MTSAbstractService/Content.ta';
import {
    AdditionalInformation,
    _decode_AdditionalInformation,
    _encode_AdditionalInformation,
} from '../MTAAbstractService/AdditionalInformation.ta';
export {
    AdditionalInformation,
    _decode_AdditionalInformation,
    _encode_AdditionalInformation,
} from '../MTAAbstractService/AdditionalInformation.ta';
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

/* START_OF_SYMBOL_DEFINITION PerReportTransferFields */
/**
 * @summary PerReportTransferFields
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerReportTransferFields ::= SET {
 *   subject-identifier                      SubjectIdentifier,
 *   subject-intermediate-trace-information
 *     SubjectIntermediateTraceInformation OPTIONAL,
 *   original-encoded-information-types
 *     OriginalEncodedInformationTypes OPTIONAL,
 *   content-type                            ContentType OPTIONAL,
 *   content-identifier                      ContentIdentifier OPTIONAL,
 *   returned-content                        [1]  Content OPTIONAL,
 *   additional-information                  [2]  AdditionalInformation OPTIONAL,
 *   extensions
 *     [3]  SET OF ExtensionField{{ReportTransferContentExtensions}} DEFAULT {}
 * }
 * ```
 *
 * @class
 */
export class PerReportTransferFields {
    constructor(
        /**
         * @summary `subject_identifier`.
         * @public
         * @readonly
         */
        readonly subject_identifier: SubjectIdentifier,
        /**
         * @summary `subject_intermediate_trace_information`.
         * @public
         * @readonly
         */
        readonly subject_intermediate_trace_information: OPTIONAL<SubjectIntermediateTraceInformation>,
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
        readonly content_type: OPTIONAL<ContentType>,
        /**
         * @summary `content_identifier`.
         * @public
         * @readonly
         */
        readonly content_identifier: OPTIONAL<ContentIdentifier>,
        /**
         * @summary `returned_content`.
         * @public
         * @readonly
         */
        readonly returned_content: OPTIONAL<Content>,
        /**
         * @summary `additional_information`.
         * @public
         * @readonly
         */
        readonly additional_information: OPTIONAL<AdditionalInformation>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>
    ) {}

    /**
     * @summary Restructures an object into a PerReportTransferFields
     * @description
     *
     * This takes an `object` and converts it to a `PerReportTransferFields`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PerReportTransferFields`.
     * @returns {PerReportTransferFields}
     */
    public static _from_object(
        _o: {
            [_K in keyof PerReportTransferFields]: PerReportTransferFields[_K];
        }
    ): PerReportTransferFields {
        return new PerReportTransferFields(
            _o.subject_identifier,
            _o.subject_intermediate_trace_information,
            _o.original_encoded_information_types,
            _o.content_type,
            _o.content_identifier,
            _o.returned_content,
            _o.additional_information,
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
/* END_OF_SYMBOL_DEFINITION PerReportTransferFields */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PerReportTransferFields */
/**
 * @summary The Leading Root Component Types of PerReportTransferFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PerReportTransferFields: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'subject-identifier',
        false,
        $.hasTag(_TagClass.application, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'subject-intermediate-trace-information',
        true,
        $.hasTag(_TagClass.application, 9),
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
        true,
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
        'returned-content',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'additional-information',
        true,
        $.hasTag(_TagClass.context, 2),
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PerReportTransferFields */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PerReportTransferFields */
/**
 * @summary The Trailing Root Component Types of PerReportTransferFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PerReportTransferFields: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PerReportTransferFields */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PerReportTransferFields */
/**
 * @summary The Extension Addition Component Types of PerReportTransferFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PerReportTransferFields: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PerReportTransferFields */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PerReportTransferFields */
let _cached_decoder_for_PerReportTransferFields: $.ASN1Decoder<PerReportTransferFields> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PerReportTransferFields */

/* START_OF_SYMBOL_DEFINITION _decode_PerReportTransferFields */
/**
 * @summary Decodes an ASN.1 element into a(n) PerReportTransferFields
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PerReportTransferFields} The decoded data structure.
 */
export function _decode_PerReportTransferFields(el: _Element) {
    if (!_cached_decoder_for_PerReportTransferFields) {
        _cached_decoder_for_PerReportTransferFields = function (
            el: _Element
        ): PerReportTransferFields {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let subject_identifier!: SubjectIdentifier;
            let subject_intermediate_trace_information: OPTIONAL<SubjectIntermediateTraceInformation>;
            let original_encoded_information_types: OPTIONAL<OriginalEncodedInformationTypes>;
            let content_type: OPTIONAL<ContentType>;
            let content_identifier: OPTIONAL<ContentIdentifier>;
            let returned_content: OPTIONAL<Content>;
            let additional_information: OPTIONAL<AdditionalInformation>;
            let extensions: OPTIONAL<ExtensionField[]> =
                PerReportTransferFields._default_value_for_extensions;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'subject-identifier': (_el: _Element): void => {
                    subject_identifier = _decode_SubjectIdentifier(_el);
                },
                'subject-intermediate-trace-information': (
                    _el: _Element
                ): void => {
                    subject_intermediate_trace_information = _decode_SubjectIntermediateTraceInformation(
                        _el
                    );
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
                'returned-content': (_el: _Element): void => {
                    returned_content = $._decode_implicit<Content>(
                        () => _decode_Content
                    )(_el);
                },
                'additional-information': (_el: _Element): void => {
                    additional_information = $._decode_implicit<AdditionalInformation>(
                        () => _decode_AdditionalInformation
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
                _root_component_type_list_1_spec_for_PerReportTransferFields,
                _extension_additions_list_spec_for_PerReportTransferFields,
                _root_component_type_list_2_spec_for_PerReportTransferFields,
                undefined
            );
            return new PerReportTransferFields /* SET_CONSTRUCTOR_CALL */(
                subject_identifier,
                subject_intermediate_trace_information,
                original_encoded_information_types,
                content_type,
                content_identifier,
                returned_content,
                additional_information,
                extensions
            );
        };
    }
    return _cached_decoder_for_PerReportTransferFields(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PerReportTransferFields */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PerReportTransferFields */
let _cached_encoder_for_PerReportTransferFields: $.ASN1Encoder<PerReportTransferFields> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PerReportTransferFields */

/* START_OF_SYMBOL_DEFINITION _encode_PerReportTransferFields */
/**
 * @summary Encodes a(n) PerReportTransferFields into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PerReportTransferFields, encoded as an ASN.1 Element.
 */
export function _encode_PerReportTransferFields(
    value: PerReportTransferFields,
    elGetter: $.ASN1Encoder<PerReportTransferFields>
) {
    if (!_cached_encoder_for_PerReportTransferFields) {
        _cached_encoder_for_PerReportTransferFields = function (
            value: PerReportTransferFields,
            elGetter: $.ASN1Encoder<PerReportTransferFields>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_SubjectIdentifier(
                            value.subject_identifier,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.subject_intermediate_trace_information ===
                        undefined
                            ? undefined
                            : _encode_SubjectIntermediateTraceInformation(
                                  value.subject_intermediate_trace_information,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.original_encoded_information_types ===
                        undefined
                            ? undefined
                            : _encode_OriginalEncodedInformationTypes(
                                  value.original_encoded_information_types,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.content_type === undefined
                            ? undefined
                            : _encode_ContentType(value.content_type, $.BER),
                        /* IF_ABSENT  */ value.content_identifier === undefined
                            ? undefined
                            : _encode_ContentIdentifier(
                                  value.content_identifier,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.returned_content === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_Content,
                                  $.BER
                              )(value.returned_content, $.BER),
                        /* IF_ABSENT  */ value.additional_information ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_AdditionalInformation,
                                  $.BER
                              )(value.additional_information, $.BER),
                        /* IF_DEFAULT */ value.extensions === undefined ||
                        $.deepEq(
                            value.extensions,
                            PerReportTransferFields._default_value_for_extensions
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
    return _cached_encoder_for_PerReportTransferFields(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PerReportTransferFields */

/* eslint-enable */

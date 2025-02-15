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
    PerReportTransferFields,
    _decode_PerReportTransferFields,
    _encode_PerReportTransferFields,
} from '../MTAAbstractService/PerReportTransferFields.ta';
export {
    PerReportTransferFields,
    _decode_PerReportTransferFields,
    _encode_PerReportTransferFields,
} from '../MTAAbstractService/PerReportTransferFields.ta';
import {
    PerRecipientReportTransferFields,
    _decode_PerRecipientReportTransferFields,
    _encode_PerRecipientReportTransferFields,
} from '../MTAAbstractService/PerRecipientReportTransferFields.ta';
export {
    PerRecipientReportTransferFields,
    _decode_PerRecipientReportTransferFields,
    _encode_PerRecipientReportTransferFields,
} from '../MTAAbstractService/PerRecipientReportTransferFields.ta';
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

/* START_OF_SYMBOL_DEFINITION ReportTransferContent */
/**
 * @summary ReportTransferContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportTransferContent ::= SET {
 *   COMPONENTS OF PerReportTransferFields,
 *   per-recipient-fields
 *     [0]  SEQUENCE SIZE (1..ub-recipients) OF PerRecipientReportTransferFields
 * }
 * ```
 *
 * @class
 */
export class ReportTransferContent {
    constructor(
        /**
         * @summary `subject_identifier`.
         * @public
         * @readonly
         */
        readonly subject_identifier: SubjectIdentifier /* REPLICATED_COMPONENT */,
        /**
         * @summary `subject_intermediate_trace_information`.
         * @public
         * @readonly
         */
        readonly subject_intermediate_trace_information: OPTIONAL<SubjectIntermediateTraceInformation> /* REPLICATED_COMPONENT */,
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
        readonly content_type: OPTIONAL<ContentType> /* REPLICATED_COMPONENT */,
        /**
         * @summary `content_identifier`.
         * @public
         * @readonly
         */
        readonly content_identifier: OPTIONAL<ContentIdentifier> /* REPLICATED_COMPONENT */,
        /**
         * @summary `returned_content`.
         * @public
         * @readonly
         */
        readonly returned_content: OPTIONAL<Content> /* REPLICATED_COMPONENT */,
        /**
         * @summary `additional_information`.
         * @public
         * @readonly
         */
        readonly additional_information: OPTIONAL<AdditionalInformation> /* REPLICATED_COMPONENT */,
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
        readonly per_recipient_fields: PerRecipientReportTransferFields[]
    ) {}

    /**
     * @summary Restructures an object into a ReportTransferContent
     * @description
     *
     * This takes an `object` and converts it to a `ReportTransferContent`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReportTransferContent`.
     * @returns {ReportTransferContent}
     */
    public static _from_object(
        _o: { [_K in keyof ReportTransferContent]: ReportTransferContent[_K] }
    ): ReportTransferContent {
        return new ReportTransferContent(
            _o.subject_identifier,
            _o.subject_intermediate_trace_information,
            _o.original_encoded_information_types,
            _o.content_type,
            _o.content_identifier,
            _o.returned_content,
            _o.additional_information,
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
/* END_OF_SYMBOL_DEFINITION ReportTransferContent */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ReportTransferContent */
/**
 * @summary The Leading Root Component Types of ReportTransferContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ReportTransferContent: $.ComponentSpec[] = [
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
    new $.ComponentSpec(
        'per-recipient-fields',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ReportTransferContent */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ReportTransferContent */
/**
 * @summary The Trailing Root Component Types of ReportTransferContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ReportTransferContent: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ReportTransferContent */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ReportTransferContent */
/**
 * @summary The Extension Addition Component Types of ReportTransferContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ReportTransferContent: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ReportTransferContent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReportTransferContent */
let _cached_decoder_for_ReportTransferContent: $.ASN1Decoder<ReportTransferContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReportTransferContent */

/* START_OF_SYMBOL_DEFINITION _decode_ReportTransferContent */
/**
 * @summary Decodes an ASN.1 element into a(n) ReportTransferContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReportTransferContent} The decoded data structure.
 */
export function _decode_ReportTransferContent(el: _Element) {
    if (!_cached_decoder_for_ReportTransferContent) {
        _cached_decoder_for_ReportTransferContent = function (
            el: _Element
        ): ReportTransferContent {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let subject_identifier!: SubjectIdentifier;
            let subject_intermediate_trace_information: OPTIONAL<SubjectIntermediateTraceInformation>;
            let original_encoded_information_types: OPTIONAL<OriginalEncodedInformationTypes>;
            let content_type: OPTIONAL<ContentType>;
            let content_identifier: OPTIONAL<ContentIdentifier>;
            let returned_content: OPTIONAL<Content>;
            let additional_information: OPTIONAL<AdditionalInformation>;
            let extensions: OPTIONAL<ExtensionField[]> =
                ReportTransferContent._default_value_for_extensions;
            let per_recipient_fields!: PerRecipientReportTransferFields[];
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
                'per-recipient-fields': (_el: _Element): void => {
                    per_recipient_fields = $._decode_implicit<
                        PerRecipientReportTransferFields[]
                    >(() =>
                        $._decodeSequenceOf<PerRecipientReportTransferFields>(
                            () => _decode_PerRecipientReportTransferFields
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ReportTransferContent,
                _extension_additions_list_spec_for_ReportTransferContent,
                _root_component_type_list_2_spec_for_ReportTransferContent,
                undefined
            );
            return new ReportTransferContent /* SET_CONSTRUCTOR_CALL */(
                subject_identifier,
                subject_intermediate_trace_information,
                original_encoded_information_types,
                content_type,
                content_identifier,
                returned_content,
                additional_information,
                extensions,
                per_recipient_fields
            );
        };
    }
    return _cached_decoder_for_ReportTransferContent(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReportTransferContent */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReportTransferContent */
let _cached_encoder_for_ReportTransferContent: $.ASN1Encoder<ReportTransferContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReportTransferContent */

/* START_OF_SYMBOL_DEFINITION _encode_ReportTransferContent */
/**
 * @summary Encodes a(n) ReportTransferContent into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportTransferContent, encoded as an ASN.1 Element.
 */
export function _encode_ReportTransferContent(
    value: ReportTransferContent,
    elGetter: $.ASN1Encoder<ReportTransferContent>
) {
    if (!_cached_encoder_for_ReportTransferContent) {
        _cached_encoder_for_ReportTransferContent = function (
            value: ReportTransferContent,
            elGetter: $.ASN1Encoder<ReportTransferContent>
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
                            ReportTransferContent._default_value_for_extensions
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
                            0,
                            () =>
                                $._encodeSequenceOf<PerRecipientReportTransferFields>(
                                    () =>
                                        _encode_PerRecipientReportTransferFields,
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
    return _cached_encoder_for_ReportTransferContent(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReportTransferContent */

/* eslint-enable */

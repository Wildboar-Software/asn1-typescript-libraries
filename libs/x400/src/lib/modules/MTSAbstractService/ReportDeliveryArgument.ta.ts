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
    ReportDeliveryEnvelope,
    _decode_ReportDeliveryEnvelope,
    _encode_ReportDeliveryEnvelope,
} from '../MTSAbstractService/ReportDeliveryEnvelope.ta';
export {
    ReportDeliveryEnvelope,
    _decode_ReportDeliveryEnvelope,
    _encode_ReportDeliveryEnvelope,
} from '../MTSAbstractService/ReportDeliveryEnvelope.ta';
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
    SubjectSubmissionIdentifier,
    _decode_SubjectSubmissionIdentifier,
    _encode_SubjectSubmissionIdentifier,
} from '../MTSAbstractService/SubjectSubmissionIdentifier.ta';
export {
    SubjectSubmissionIdentifier,
    _decode_SubjectSubmissionIdentifier,
    _encode_SubjectSubmissionIdentifier,
} from '../MTSAbstractService/SubjectSubmissionIdentifier.ta';
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
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../MTSAbstractService/ExtensionField.ta';
export {
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../MTSAbstractService/ExtensionField.ta';
import {
    PerRecipientReportDeliveryFields,
    _decode_PerRecipientReportDeliveryFields,
    _encode_PerRecipientReportDeliveryFields,
} from '../MTSAbstractService/PerRecipientReportDeliveryFields.ta';
export {
    PerRecipientReportDeliveryFields,
    _decode_PerRecipientReportDeliveryFields,
    _encode_PerRecipientReportDeliveryFields,
} from '../MTSAbstractService/PerRecipientReportDeliveryFields.ta';

/* START_OF_SYMBOL_DEFINITION ReportDeliveryArgument */
/**
 * @summary ReportDeliveryArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportDeliveryArgument ::= SET {
 *   COMPONENTS OF ReportDeliveryEnvelope,
 *   returned-content  [0]  Content OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ReportDeliveryArgument {
    constructor(
        /**
         * @summary `subject_submission_identifier`.
         * @public
         * @readonly
         */
        readonly subject_submission_identifier: SubjectSubmissionIdentifier /* REPLICATED_COMPONENT */,
        /**
         * @summary `content_identifier`.
         * @public
         * @readonly
         */
        readonly content_identifier: OPTIONAL<ContentIdentifier> /* REPLICATED_COMPONENT */,
        /**
         * @summary `content_type`.
         * @public
         * @readonly
         */
        readonly content_type: OPTIONAL<ContentType> /* REPLICATED_COMPONENT */,
        /**
         * @summary `original_encoded_information_types`.
         * @public
         * @readonly
         */
        readonly original_encoded_information_types: OPTIONAL<OriginalEncodedInformationTypes> /* REPLICATED_COMPONENT */,
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
        readonly per_recipient_fields: PerRecipientReportDeliveryFields[] /* REPLICATED_COMPONENT */,
        /**
         * @summary `returned_content`.
         * @public
         * @readonly
         */
        readonly returned_content: OPTIONAL<Content>
    ) {}

    /**
     * @summary Restructures an object into a ReportDeliveryArgument
     * @description
     *
     * This takes an `object` and converts it to a `ReportDeliveryArgument`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReportDeliveryArgument`.
     * @returns {ReportDeliveryArgument}
     */
    public static _from_object(
        _o: { [_K in keyof ReportDeliveryArgument]: ReportDeliveryArgument[_K] }
    ): ReportDeliveryArgument {
        return new ReportDeliveryArgument(
            _o.subject_submission_identifier,
            _o.content_identifier,
            _o.content_type,
            _o.original_encoded_information_types,
            _o.extensions,
            _o.per_recipient_fields,
            _o.returned_content
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
/* END_OF_SYMBOL_DEFINITION ReportDeliveryArgument */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ReportDeliveryArgument */
/**
 * @summary The Leading Root Component Types of ReportDeliveryArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ReportDeliveryArgument: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'subject-submission-identifier',
        false,
        $.hasTag(_TagClass.application, 4),
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
        'content-type',
        true,
        $.hasAnyTag,
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
        'extensions',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'per-recipient-fields',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'returned-content',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ReportDeliveryArgument */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ReportDeliveryArgument */
/**
 * @summary The Trailing Root Component Types of ReportDeliveryArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ReportDeliveryArgument: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ReportDeliveryArgument */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ReportDeliveryArgument */
/**
 * @summary The Extension Addition Component Types of ReportDeliveryArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ReportDeliveryArgument: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ReportDeliveryArgument */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReportDeliveryArgument */
let _cached_decoder_for_ReportDeliveryArgument: $.ASN1Decoder<ReportDeliveryArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReportDeliveryArgument */

/* START_OF_SYMBOL_DEFINITION _decode_ReportDeliveryArgument */
/**
 * @summary Decodes an ASN.1 element into a(n) ReportDeliveryArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReportDeliveryArgument} The decoded data structure.
 */
export function _decode_ReportDeliveryArgument(el: _Element) {
    if (!_cached_decoder_for_ReportDeliveryArgument) {
        _cached_decoder_for_ReportDeliveryArgument = function (
            el: _Element
        ): ReportDeliveryArgument {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let subject_submission_identifier!: SubjectSubmissionIdentifier;
            let content_identifier: OPTIONAL<ContentIdentifier>;
            let content_type: OPTIONAL<ContentType>;
            let original_encoded_information_types: OPTIONAL<OriginalEncodedInformationTypes>;
            let extensions: OPTIONAL<ExtensionField[]> =
                ReportDeliveryArgument._default_value_for_extensions;
            let per_recipient_fields!: PerRecipientReportDeliveryFields[];
            let returned_content: OPTIONAL<Content>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'subject-submission-identifier': (_el: _Element): void => {
                    subject_submission_identifier = _decode_SubjectSubmissionIdentifier(
                        _el
                    );
                },
                'content-identifier': (_el: _Element): void => {
                    content_identifier = _decode_ContentIdentifier(_el);
                },
                'content-type': (_el: _Element): void => {
                    content_type = _decode_ContentType(_el);
                },
                'original-encoded-information-types': (_el: _Element): void => {
                    original_encoded_information_types = _decode_OriginalEncodedInformationTypes(
                        _el
                    );
                },
                extensions: (_el: _Element): void => {
                    extensions = $._decode_implicit<ExtensionField[]>(() =>
                        $._decodeSetOf<ExtensionField>(
                            () => _decode_ExtensionField
                        )
                    )(_el);
                },
                'per-recipient-fields': (_el: _Element): void => {
                    per_recipient_fields = $._decodeSequenceOf<PerRecipientReportDeliveryFields>(
                        () => _decode_PerRecipientReportDeliveryFields
                    )(_el);
                },
                'returned-content': (_el: _Element): void => {
                    returned_content = $._decode_implicit<Content>(
                        () => _decode_Content
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ReportDeliveryArgument,
                _extension_additions_list_spec_for_ReportDeliveryArgument,
                _root_component_type_list_2_spec_for_ReportDeliveryArgument,
                undefined
            );
            return new ReportDeliveryArgument /* SET_CONSTRUCTOR_CALL */(
                subject_submission_identifier,
                content_identifier,
                content_type,
                original_encoded_information_types,
                extensions,
                per_recipient_fields,
                returned_content
            );
        };
    }
    return _cached_decoder_for_ReportDeliveryArgument(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReportDeliveryArgument */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReportDeliveryArgument */
let _cached_encoder_for_ReportDeliveryArgument: $.ASN1Encoder<ReportDeliveryArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReportDeliveryArgument */

/* START_OF_SYMBOL_DEFINITION _encode_ReportDeliveryArgument */
/**
 * @summary Encodes a(n) ReportDeliveryArgument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportDeliveryArgument, encoded as an ASN.1 Element.
 */
export function _encode_ReportDeliveryArgument(
    value: ReportDeliveryArgument,
    elGetter: $.ASN1Encoder<ReportDeliveryArgument>
) {
    if (!_cached_encoder_for_ReportDeliveryArgument) {
        _cached_encoder_for_ReportDeliveryArgument = function (
            value: ReportDeliveryArgument,
            elGetter: $.ASN1Encoder<ReportDeliveryArgument>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_SubjectSubmissionIdentifier(
                            value.subject_submission_identifier,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.content_identifier === undefined
                            ? undefined
                            : _encode_ContentIdentifier(
                                  value.content_identifier,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.content_type === undefined
                            ? undefined
                            : _encode_ContentType(value.content_type, $.BER),
                        /* IF_ABSENT  */ value.original_encoded_information_types ===
                        undefined
                            ? undefined
                            : _encode_OriginalEncodedInformationTypes(
                                  value.original_encoded_information_types,
                                  $.BER
                              ),
                        /* IF_DEFAULT */ value.extensions === undefined ||
                        $.deepEq(
                            value.extensions,
                            ReportDeliveryArgument._default_value_for_extensions
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () =>
                                      $._encodeSetOf<ExtensionField>(
                                          () => _encode_ExtensionField,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.extensions, $.BER),
                        /* REQUIRED   */ $._encodeSequenceOf<PerRecipientReportDeliveryFields>(
                            () => _encode_PerRecipientReportDeliveryFields,
                            $.BER
                        )(value.per_recipient_fields, $.BER),
                        /* IF_ABSENT  */ value.returned_content === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_Content,
                                  $.BER
                              )(value.returned_content, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ReportDeliveryArgument(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReportDeliveryArgument */

/* eslint-enable */

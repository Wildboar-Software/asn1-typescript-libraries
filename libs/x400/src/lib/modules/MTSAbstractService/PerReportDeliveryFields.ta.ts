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

/* START_OF_SYMBOL_DEFINITION PerReportDeliveryFields */
/**
 * @summary PerReportDeliveryFields
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerReportDeliveryFields ::= SET {
 *   subject-submission-identifier       SubjectSubmissionIdentifier,
 *   content-identifier                  ContentIdentifier OPTIONAL,
 *   content-type                        ContentType OPTIONAL,
 *   original-encoded-information-types  OriginalEncodedInformationTypes OPTIONAL,
 *   extensions
 *     [1]  SET OF ExtensionField{{ReportDeliveryExtensions}} DEFAULT {}
 * }
 * ```
 *
 * @class
 */
export class PerReportDeliveryFields {
    constructor(
        /**
         * @summary `subject_submission_identifier`.
         * @public
         * @readonly
         */
        readonly subject_submission_identifier: SubjectSubmissionIdentifier,
        /**
         * @summary `content_identifier`.
         * @public
         * @readonly
         */
        readonly content_identifier: OPTIONAL<ContentIdentifier>,
        /**
         * @summary `content_type`.
         * @public
         * @readonly
         */
        readonly content_type: OPTIONAL<ContentType>,
        /**
         * @summary `original_encoded_information_types`.
         * @public
         * @readonly
         */
        readonly original_encoded_information_types: OPTIONAL<OriginalEncodedInformationTypes>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>
    ) {}

    /**
     * @summary Restructures an object into a PerReportDeliveryFields
     * @description
     *
     * This takes an `object` and converts it to a `PerReportDeliveryFields`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PerReportDeliveryFields`.
     * @returns {PerReportDeliveryFields}
     */
    public static _from_object(
        _o: {
            [_K in keyof PerReportDeliveryFields]: PerReportDeliveryFields[_K];
        }
    ): PerReportDeliveryFields {
        return new PerReportDeliveryFields(
            _o.subject_submission_identifier,
            _o.content_identifier,
            _o.content_type,
            _o.original_encoded_information_types,
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
/* END_OF_SYMBOL_DEFINITION PerReportDeliveryFields */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PerReportDeliveryFields */
/**
 * @summary The Leading Root Component Types of PerReportDeliveryFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PerReportDeliveryFields: $.ComponentSpec[] = [
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
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PerReportDeliveryFields */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PerReportDeliveryFields */
/**
 * @summary The Trailing Root Component Types of PerReportDeliveryFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PerReportDeliveryFields: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PerReportDeliveryFields */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PerReportDeliveryFields */
/**
 * @summary The Extension Addition Component Types of PerReportDeliveryFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PerReportDeliveryFields: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PerReportDeliveryFields */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PerReportDeliveryFields */
let _cached_decoder_for_PerReportDeliveryFields: $.ASN1Decoder<PerReportDeliveryFields> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PerReportDeliveryFields */

/* START_OF_SYMBOL_DEFINITION _decode_PerReportDeliveryFields */
/**
 * @summary Decodes an ASN.1 element into a(n) PerReportDeliveryFields
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PerReportDeliveryFields} The decoded data structure.
 */
export function _decode_PerReportDeliveryFields(el: _Element) {
    if (!_cached_decoder_for_PerReportDeliveryFields) {
        _cached_decoder_for_PerReportDeliveryFields = function (
            el: _Element
        ): PerReportDeliveryFields {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let subject_submission_identifier!: SubjectSubmissionIdentifier;
            let content_identifier: OPTIONAL<ContentIdentifier>;
            let content_type: OPTIONAL<ContentType>;
            let original_encoded_information_types: OPTIONAL<OriginalEncodedInformationTypes>;
            let extensions: OPTIONAL<ExtensionField[]> =
                PerReportDeliveryFields._default_value_for_extensions;
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
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PerReportDeliveryFields,
                _extension_additions_list_spec_for_PerReportDeliveryFields,
                _root_component_type_list_2_spec_for_PerReportDeliveryFields,
                undefined
            );
            return new PerReportDeliveryFields /* SET_CONSTRUCTOR_CALL */(
                subject_submission_identifier,
                content_identifier,
                content_type,
                original_encoded_information_types,
                extensions
            );
        };
    }
    return _cached_decoder_for_PerReportDeliveryFields(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PerReportDeliveryFields */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PerReportDeliveryFields */
let _cached_encoder_for_PerReportDeliveryFields: $.ASN1Encoder<PerReportDeliveryFields> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PerReportDeliveryFields */

/* START_OF_SYMBOL_DEFINITION _encode_PerReportDeliveryFields */
/**
 * @summary Encodes a(n) PerReportDeliveryFields into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PerReportDeliveryFields, encoded as an ASN.1 Element.
 */
export function _encode_PerReportDeliveryFields(
    value: PerReportDeliveryFields,
    elGetter: $.ASN1Encoder<PerReportDeliveryFields>
) {
    if (!_cached_encoder_for_PerReportDeliveryFields) {
        _cached_encoder_for_PerReportDeliveryFields = function (
            value: PerReportDeliveryFields,
            elGetter: $.ASN1Encoder<PerReportDeliveryFields>
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
                            PerReportDeliveryFields._default_value_for_extensions
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
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PerReportDeliveryFields(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PerReportDeliveryFields */

/* eslint-enable */

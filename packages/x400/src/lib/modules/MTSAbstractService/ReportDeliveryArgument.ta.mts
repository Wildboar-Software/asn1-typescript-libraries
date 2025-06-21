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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    ReportDeliveryEnvelope,
    _decode_ReportDeliveryEnvelope,
    _encode_ReportDeliveryEnvelope,
} from '../MTSAbstractService/ReportDeliveryEnvelope.ta.mjs';
import {
    Content,
    _decode_Content,
    _encode_Content,
} from '../MTSAbstractService/Content.ta.mjs';
import {
    SubjectSubmissionIdentifier,
    _decode_SubjectSubmissionIdentifier,
    _encode_SubjectSubmissionIdentifier,
} from '../MTSAbstractService/SubjectSubmissionIdentifier.ta.mjs';
import {
    ContentIdentifier,
    _decode_ContentIdentifier,
    _encode_ContentIdentifier,
} from '../MTSAbstractService/ContentIdentifier.ta.mjs';
import {
    ContentType,
    _decode_ContentType,
    _encode_ContentType,
} from '../MTSAbstractService/ContentType.ta.mjs';
import {
    OriginalEncodedInformationTypes,
    _decode_OriginalEncodedInformationTypes,
    _encode_OriginalEncodedInformationTypes,
} from '../MTSAbstractService/OriginalEncodedInformationTypes.ta.mjs';
import {
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../MTSAbstractService/ExtensionField.ta.mjs';
import {
    PerRecipientReportDeliveryFields,
    _decode_PerRecipientReportDeliveryFields,
    _encode_PerRecipientReportDeliveryFields,
} from '../MTSAbstractService/PerRecipientReportDeliveryFields.ta.mjs';
import {
    _root_component_type_list_1_spec_for_ReportDeliveryEnvelope,
    _root_component_type_list_2_spec_for_ReportDeliveryEnvelope,
    _extension_additions_list_spec_for_ReportDeliveryEnvelope,
} from '../MTSAbstractService/ReportDeliveryEnvelope.ta.mjs';

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
export class ReportDeliveryArgument implements ReportDeliveryEnvelope {
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
    public static get _default_value_for_extensions(): ExtensionField[] {
        return [];
    }
}

/**
 * @summary The Leading Root Component Types of ReportDeliveryArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ReportDeliveryArgument: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_ReportDeliveryEnvelope,
    new $.ComponentSpec(
        'returned-content',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
];

/**
 * @summary The Trailing Root Component Types of ReportDeliveryArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ReportDeliveryArgument: $.ComponentSpec[] = [
    ..._root_component_type_list_2_spec_for_ReportDeliveryEnvelope,
];

/**
 * @summary The Extension Addition Component Types of ReportDeliveryArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ReportDeliveryArgument: $.ComponentSpec[] = [
    ..._extension_additions_list_spec_for_ReportDeliveryEnvelope,
];

let _cached_decoder_for_ReportDeliveryArgument: $.ASN1Decoder<ReportDeliveryArgument> | null = null;

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

let _cached_encoder_for_ReportDeliveryArgument: $.ASN1Encoder<ReportDeliveryArgument> | null = null;

/**
 * @summary Encodes a(n) ReportDeliveryArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportDeliveryArgument, encoded as an ASN.1 Element.
 */
export function _encode_ReportDeliveryArgument(
    value: ReportDeliveryArgument,
    elGetter: $.ASN1Encoder<ReportDeliveryArgument>
) {
    if (!_cached_encoder_for_ReportDeliveryArgument) {
        _cached_encoder_for_ReportDeliveryArgument = function (
            value: ReportDeliveryArgument        ): _Element {
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


/* eslint-enable */

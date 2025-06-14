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
    PerReportDeliveryFields,
    _root_component_type_list_1_spec_for_PerReportDeliveryFields,
    _root_component_type_list_2_spec_for_PerReportDeliveryFields,
    _extension_additions_list_spec_for_PerReportDeliveryFields,
} from '../MTSAbstractService/PerReportDeliveryFields.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ReportDeliveryEnvelope */
/**
 * @summary ReportDeliveryEnvelope
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportDeliveryEnvelope ::= SET {
 *   COMPONENTS OF PerReportDeliveryFields,
 *   per-recipient-fields
 *     SEQUENCE SIZE (1..ub-recipients) OF PerRecipientReportDeliveryFields
 * }
 * ```
 *
 * @class
 */
export class ReportDeliveryEnvelope implements PerReportDeliveryFields {
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
        readonly per_recipient_fields: PerRecipientReportDeliveryFields[]
    ) {}

    /**
     * @summary Restructures an object into a ReportDeliveryEnvelope
     * @description
     *
     * This takes an `object` and converts it to a `ReportDeliveryEnvelope`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReportDeliveryEnvelope`.
     * @returns {ReportDeliveryEnvelope}
     */
    public static _from_object(
        _o: { [_K in keyof ReportDeliveryEnvelope]: ReportDeliveryEnvelope[_K] }
    ): ReportDeliveryEnvelope {
        return new ReportDeliveryEnvelope(
            _o.subject_submission_identifier,
            _o.content_identifier,
            _o.content_type,
            _o.original_encoded_information_types,
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
    public static get _default_value_for_extensions(): ExtensionField[] {
        return [];
    }
}
/* END_OF_SYMBOL_DEFINITION ReportDeliveryEnvelope */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ReportDeliveryEnvelope */
/**
 * @summary The Leading Root Component Types of ReportDeliveryEnvelope
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ReportDeliveryEnvelope: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_PerReportDeliveryFields,
    new $.ComponentSpec(
        'per-recipient-fields',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ReportDeliveryEnvelope */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ReportDeliveryEnvelope */
/**
 * @summary The Trailing Root Component Types of ReportDeliveryEnvelope
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ReportDeliveryEnvelope: $.ComponentSpec[] = [
    ..._root_component_type_list_2_spec_for_PerReportDeliveryFields,
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ReportDeliveryEnvelope */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ReportDeliveryEnvelope */
/**
 * @summary The Extension Addition Component Types of ReportDeliveryEnvelope
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ReportDeliveryEnvelope: $.ComponentSpec[] = [
    ..._extension_additions_list_spec_for_PerReportDeliveryFields,
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ReportDeliveryEnvelope */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReportDeliveryEnvelope */
let _cached_decoder_for_ReportDeliveryEnvelope: $.ASN1Decoder<ReportDeliveryEnvelope> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReportDeliveryEnvelope */

/* START_OF_SYMBOL_DEFINITION _decode_ReportDeliveryEnvelope */
/**
 * @summary Decodes an ASN.1 element into a(n) ReportDeliveryEnvelope
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReportDeliveryEnvelope} The decoded data structure.
 */
export function _decode_ReportDeliveryEnvelope(el: _Element) {
    if (!_cached_decoder_for_ReportDeliveryEnvelope) {
        _cached_decoder_for_ReportDeliveryEnvelope = function (
            el: _Element
        ): ReportDeliveryEnvelope {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let subject_submission_identifier!: SubjectSubmissionIdentifier;
            let content_identifier: OPTIONAL<ContentIdentifier>;
            let content_type: OPTIONAL<ContentType>;
            let original_encoded_information_types: OPTIONAL<OriginalEncodedInformationTypes>;
            let extensions: OPTIONAL<ExtensionField[]> =
                ReportDeliveryEnvelope._default_value_for_extensions;
            let per_recipient_fields!: PerRecipientReportDeliveryFields[];
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
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ReportDeliveryEnvelope,
                _extension_additions_list_spec_for_ReportDeliveryEnvelope,
                _root_component_type_list_2_spec_for_ReportDeliveryEnvelope,
                undefined
            );
            return new ReportDeliveryEnvelope /* SET_CONSTRUCTOR_CALL */(
                subject_submission_identifier,
                content_identifier,
                content_type,
                original_encoded_information_types,
                extensions,
                per_recipient_fields
            );
        };
    }
    return _cached_decoder_for_ReportDeliveryEnvelope(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReportDeliveryEnvelope */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReportDeliveryEnvelope */
let _cached_encoder_for_ReportDeliveryEnvelope: $.ASN1Encoder<ReportDeliveryEnvelope> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReportDeliveryEnvelope */

/* START_OF_SYMBOL_DEFINITION _encode_ReportDeliveryEnvelope */
/**
 * @summary Encodes a(n) ReportDeliveryEnvelope into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportDeliveryEnvelope, encoded as an ASN.1 Element.
 */
export function _encode_ReportDeliveryEnvelope(
    value: ReportDeliveryEnvelope,
    elGetter: $.ASN1Encoder<ReportDeliveryEnvelope>
) {
    if (!_cached_encoder_for_ReportDeliveryEnvelope) {
        _cached_encoder_for_ReportDeliveryEnvelope = function (
            value: ReportDeliveryEnvelope,
            elGetter: $.ASN1Encoder<ReportDeliveryEnvelope>
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
                            ReportDeliveryEnvelope._default_value_for_extensions
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
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ReportDeliveryEnvelope(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReportDeliveryEnvelope */

/* eslint-enable */

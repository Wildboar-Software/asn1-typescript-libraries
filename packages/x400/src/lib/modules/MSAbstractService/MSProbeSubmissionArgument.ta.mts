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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    ProbeSubmissionArgument,
    _decode_ProbeSubmissionArgument,
    _encode_ProbeSubmissionArgument,
} from '../MTSAbstractService/ProbeSubmissionArgument.ta.mjs';
import {
    MSSubmissionOptions,
    _decode_MSSubmissionOptions,
    _encode_MSSubmissionOptions,
} from '../MSAbstractService/MSSubmissionOptions.ta.mjs';
import {
    OriginatorName,
    _decode_OriginatorName,
    _encode_OriginatorName,
} from '../MTSAbstractService/OriginatorName.ta.mjs';
import {
    OriginalEncodedInformationTypes,
    _decode_OriginalEncodedInformationTypes,
    _encode_OriginalEncodedInformationTypes,
} from '../MTSAbstractService/OriginalEncodedInformationTypes.ta.mjs';
import {
    ContentType,
    _decode_ContentType,
    _encode_ContentType,
} from '../MTSAbstractService/ContentType.ta.mjs';
import {
    ContentIdentifier,
    _decode_ContentIdentifier,
    _encode_ContentIdentifier,
} from '../MTSAbstractService/ContentIdentifier.ta.mjs';
import {
    ContentLength,
    _decode_ContentLength,
    _encode_ContentLength,
} from '../MTSAbstractService/ContentLength.ta.mjs';
import {
    PerMessageIndicators,
    _decode_PerMessageIndicators,
    _encode_PerMessageIndicators,
} from '../MTSAbstractService/PerMessageIndicators.ta.mjs';
import {
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../MTSAbstractService/ExtensionField.ta.mjs';
import {
    PerRecipientProbeSubmissionFields,
    _decode_PerRecipientProbeSubmissionFields,
    _encode_PerRecipientProbeSubmissionFields,
} from '../MTSAbstractService/PerRecipientProbeSubmissionFields.ta.mjs';
import {
    _root_component_type_list_1_spec_for_ProbeSubmissionEnvelope,
    _root_component_type_list_2_spec_for_ProbeSubmissionEnvelope,
    _extension_additions_list_spec_for_ProbeSubmissionEnvelope,
} from '../MTSAbstractService/ProbeSubmissionEnvelope.ta.mjs';

/**
 * @summary MSProbeSubmissionArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MSProbeSubmissionArgument ::= SET {
 *   COMPONENTS OF
 *     ProbeSubmissionArgument -- This imported type has IMPLICIT tags --,
 *   -- 1994 extension
 *   submission-options  [4]  MSSubmissionOptions OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class MSProbeSubmissionArgument implements ProbeSubmissionArgument {
    constructor(
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
        readonly per_recipient_fields: PerRecipientProbeSubmissionFields[] /* REPLICATED_COMPONENT */,
        /**
         * @summary `submission_options`.
         * @public
         * @readonly
         */
        readonly submission_options: OPTIONAL<MSSubmissionOptions>
    ) {}

    /**
     * @summary Restructures an object into a MSProbeSubmissionArgument
     * @description
     *
     * This takes an `object` and converts it to a `MSProbeSubmissionArgument`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MSProbeSubmissionArgument`.
     * @returns {MSProbeSubmissionArgument}
     */
    public static _from_object(
        _o: {
            [_K in keyof MSProbeSubmissionArgument]: MSProbeSubmissionArgument[_K];
        }
    ): MSProbeSubmissionArgument {
        return new MSProbeSubmissionArgument(
            _o.originator_name,
            _o.original_encoded_information_types,
            _o.content_type,
            _o.content_identifier,
            _o.content_length,
            _o.per_message_indicators,
            _o.extensions,
            _o.per_recipient_fields,
            _o.submission_options
        );
    }

    /**
     * @summary Getter that returns the default value for `per_message_indicators`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_per_message_indicators(): PerMessageIndicators {
        return new Uint8ClampedArray([]);
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
 * @summary The Leading Root Component Types of MSProbeSubmissionArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MSProbeSubmissionArgument: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_ProbeSubmissionEnvelope,
    new $.ComponentSpec(
        'submission-options',
        true,
        $.hasTag(_TagClass.context, 4)
    ),
];

/**
 * @summary The Trailing Root Component Types of MSProbeSubmissionArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MSProbeSubmissionArgument: $.ComponentSpec[] = [
    ..._root_component_type_list_2_spec_for_ProbeSubmissionEnvelope,
];

/**
 * @summary The Extension Addition Component Types of MSProbeSubmissionArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MSProbeSubmissionArgument: $.ComponentSpec[] = [
    ..._extension_additions_list_spec_for_ProbeSubmissionEnvelope,
];

let _cached_decoder_for_MSProbeSubmissionArgument: $.ASN1Decoder<MSProbeSubmissionArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MSProbeSubmissionArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MSProbeSubmissionArgument} The decoded data structure.
 */
export function _decode_MSProbeSubmissionArgument(el: _Element) {
    if (!_cached_decoder_for_MSProbeSubmissionArgument) {
        _cached_decoder_for_MSProbeSubmissionArgument = function (
            el: _Element
        ): MSProbeSubmissionArgument {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let originator_name!: OriginatorName;
            let original_encoded_information_types: OPTIONAL<OriginalEncodedInformationTypes>;
            let content_type!: ContentType;
            let content_identifier: OPTIONAL<ContentIdentifier>;
            let content_length: OPTIONAL<ContentLength>;
            let per_message_indicators: OPTIONAL<PerMessageIndicators> =
                MSProbeSubmissionArgument._default_value_for_per_message_indicators;
            let extensions: OPTIONAL<ExtensionField[]> =
                MSProbeSubmissionArgument._default_value_for_extensions;
            let per_recipient_fields!: PerRecipientProbeSubmissionFields[];
            let submission_options: OPTIONAL<MSSubmissionOptions>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
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
                extensions: (_el: _Element): void => {
                    extensions = $._decode_implicit<ExtensionField[]>(() =>
                        $._decodeSetOf<ExtensionField>(
                            () => _decode_ExtensionField
                        )
                    )(_el);
                },
                'per-recipient-fields': (_el: _Element): void => {
                    per_recipient_fields = $._decode_implicit<
                        PerRecipientProbeSubmissionFields[]
                    >(() =>
                        $._decodeSequenceOf<PerRecipientProbeSubmissionFields>(
                            () => _decode_PerRecipientProbeSubmissionFields
                        )
                    )(_el);
                },
                'submission-options': (_el: _Element): void => {
                    submission_options = $._decode_explicit<MSSubmissionOptions>(
                        () => _decode_MSSubmissionOptions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MSProbeSubmissionArgument,
                _extension_additions_list_spec_for_MSProbeSubmissionArgument,
                _root_component_type_list_2_spec_for_MSProbeSubmissionArgument,
                undefined
            );
            return new MSProbeSubmissionArgument /* SET_CONSTRUCTOR_CALL */(
                originator_name,
                original_encoded_information_types,
                content_type,
                content_identifier,
                content_length,
                per_message_indicators,
                extensions,
                per_recipient_fields,
                submission_options
            );
        };
    }
    return _cached_decoder_for_MSProbeSubmissionArgument(el);
}

let _cached_encoder_for_MSProbeSubmissionArgument: $.ASN1Encoder<MSProbeSubmissionArgument> | null = null;

/**
 * @summary Encodes a(n) MSProbeSubmissionArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MSProbeSubmissionArgument, encoded as an ASN.1 Element.
 */
export function _encode_MSProbeSubmissionArgument(
    value: MSProbeSubmissionArgument,
    elGetter: $.ASN1Encoder<MSProbeSubmissionArgument>
) {
    if (!_cached_encoder_for_MSProbeSubmissionArgument) {
        _cached_encoder_for_MSProbeSubmissionArgument = function (
            value: MSProbeSubmissionArgument        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
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
                            MSProbeSubmissionArgument._default_value_for_per_message_indicators
                        )
                            ? undefined
                            : _encode_PerMessageIndicators(
                                  value.per_message_indicators,
                                  $.BER
                              ),
                        /* IF_DEFAULT */ value.extensions === undefined ||
                        $.deepEq(
                            value.extensions,
                            MSProbeSubmissionArgument._default_value_for_extensions
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
                            3,
                            () =>
                                $._encodeSequenceOf<PerRecipientProbeSubmissionFields>(
                                    () =>
                                        _encode_PerRecipientProbeSubmissionFields,
                                    $.BER
                                ),
                            $.BER
                        )(value.per_recipient_fields, $.BER),
                        /* IF_ABSENT  */ value.submission_options === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_MSSubmissionOptions,
                                  $.BER
                              )(value.submission_options, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MSProbeSubmissionArgument(value, elGetter);
}


/* eslint-enable */

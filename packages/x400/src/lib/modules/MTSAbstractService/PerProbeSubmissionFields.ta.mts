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
/**
 * @summary PerProbeSubmissionFields
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerProbeSubmissionFields ::= SET {
 *   originator-name                     OriginatorName,
 *   original-encoded-information-types  OriginalEncodedInformationTypes OPTIONAL,
 *   content-type                        ContentType,
 *   content-identifier                  ContentIdentifier OPTIONAL,
 *   content-length                      [0]  ContentLength OPTIONAL,
 *   per-message-indicators              PerMessageIndicators DEFAULT {},
 *   extensions
 *     [2]  SET OF ExtensionField{{PerProbeSubmissionExtensions}} DEFAULT {}
 * }
 * ```
 *
 */
export class PerProbeSubmissionFields {
    constructor(
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
         * @summary `content_length`.
         * @public
         * @readonly
         */
        readonly content_length: OPTIONAL<ContentLength>,
        /**
         * @summary `per_message_indicators`.
         * @public
         * @readonly
         */
        readonly per_message_indicators: OPTIONAL<PerMessageIndicators>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>
    ) {}

    /**
     * @summary Restructures an object into a PerProbeSubmissionFields
     * @description
     *
     * This takes an `object` and converts it to a `PerProbeSubmissionFields`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PerProbeSubmissionFields`.
     * @returns {PerProbeSubmissionFields}
     */
    public static _from_object(
        _o: {
            [_K in keyof PerProbeSubmissionFields]: PerProbeSubmissionFields[_K];
        }
    ): PerProbeSubmissionFields {
        return new PerProbeSubmissionFields(
            _o.originator_name,
            _o.original_encoded_information_types,
            _o.content_type,
            _o.content_identifier,
            _o.content_length,
            _o.per_message_indicators,
            _o.extensions
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
 * @summary The Leading Root Component Types of PerProbeSubmissionFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PerProbeSubmissionFields: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'originator-name',
        false,
        $.hasTag(_TagClass.application, 0)
    ),
    new $.ComponentSpec(
        'original-encoded-information-types',
        true,
        $.hasTag(_TagClass.application, 5)
    ),
    new $.ComponentSpec(
        'content-type',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'content-identifier',
        true,
        $.hasTag(_TagClass.application, 10)
    ),
    new $.ComponentSpec(
        'content-length',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'per-message-indicators',
        true,
        $.hasTag(_TagClass.application, 8)
    ),
    new $.ComponentSpec(
        'extensions',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of PerProbeSubmissionFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PerProbeSubmissionFields: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of PerProbeSubmissionFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PerProbeSubmissionFields: $.ComponentSpec[] = [];

let _cached_decoder_for_PerProbeSubmissionFields: $.ASN1Decoder<PerProbeSubmissionFields> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PerProbeSubmissionFields
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PerProbeSubmissionFields} The decoded data structure.
 */
export function _decode_PerProbeSubmissionFields(el: _Element): PerProbeSubmissionFields {
    if (!_cached_decoder_for_PerProbeSubmissionFields) {
        _cached_decoder_for_PerProbeSubmissionFields = function (
            el: _Element
        ): PerProbeSubmissionFields {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let originator_name!: OriginatorName;
            let original_encoded_information_types: OPTIONAL<OriginalEncodedInformationTypes>;
            let content_type!: ContentType;
            let content_identifier: OPTIONAL<ContentIdentifier>;
            let content_length: OPTIONAL<ContentLength>;
            let per_message_indicators: OPTIONAL<PerMessageIndicators> =
                PerProbeSubmissionFields._default_value_for_per_message_indicators;
            let extensions: OPTIONAL<ExtensionField[]> =
                PerProbeSubmissionFields._default_value_for_extensions;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
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
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PerProbeSubmissionFields,
                _extension_additions_list_spec_for_PerProbeSubmissionFields,
                _root_component_type_list_2_spec_for_PerProbeSubmissionFields,
                undefined
            );
            return new PerProbeSubmissionFields /* SET_CONSTRUCTOR_CALL */(
                originator_name,
                original_encoded_information_types,
                content_type,
                content_identifier,
                content_length,
                per_message_indicators,
                extensions
            );
        };
    }
    return _cached_decoder_for_PerProbeSubmissionFields(el);
}

let _cached_encoder_for_PerProbeSubmissionFields: $.ASN1Encoder<PerProbeSubmissionFields> | null = null;

/**
 * @summary Encodes a(n) PerProbeSubmissionFields into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PerProbeSubmissionFields, encoded as an ASN.1 Element.
 */
export function _encode_PerProbeSubmissionFields(
    value: PerProbeSubmissionFields,
    elGetter: $.ASN1Encoder<PerProbeSubmissionFields>
): _Element {
    if (!_cached_encoder_for_PerProbeSubmissionFields) {
        _cached_encoder_for_PerProbeSubmissionFields = function (
            value: PerProbeSubmissionFields        ): _Element {
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
                            PerProbeSubmissionFields._default_value_for_per_message_indicators
                        )
                            ? undefined
                            : _encode_PerMessageIndicators(
                                  value.per_message_indicators,
                                  $.BER
                              ),
                        /* IF_DEFAULT */ value.extensions === undefined ||
                        $.deepEq(
                            value.extensions,
                            PerProbeSubmissionFields._default_value_for_extensions
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
    return _cached_encoder_for_PerProbeSubmissionFields(value, elGetter);
}


/* eslint-enable */

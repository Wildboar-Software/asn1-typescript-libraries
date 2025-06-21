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
    ActualRecipientName,
    _decode_ActualRecipientName,
    _encode_ActualRecipientName,
} from '../MTAAbstractService/ActualRecipientName.ta.mjs';
import {
    OriginallySpecifiedRecipientNumber,
    _decode_OriginallySpecifiedRecipientNumber,
    _encode_OriginallySpecifiedRecipientNumber,
} from '../MTAAbstractService/OriginallySpecifiedRecipientNumber.ta.mjs';
import {
    PerRecipientIndicators,
    _decode_PerRecipientIndicators,
    _encode_PerRecipientIndicators,
} from '../MTAAbstractService/PerRecipientIndicators.ta.mjs';
import {
    LastTraceInformation,
    _decode_LastTraceInformation,
    _encode_LastTraceInformation,
} from '../MTAAbstractService/LastTraceInformation.ta.mjs';
import {
    OriginallyIntendedRecipientName,
    _decode_OriginallyIntendedRecipientName,
    _encode_OriginallyIntendedRecipientName,
} from '../MTAAbstractService/OriginallyIntendedRecipientName.ta.mjs';
import {
    SupplementaryInformation,
    _decode_SupplementaryInformation,
    _encode_SupplementaryInformation,
} from '../MTSAbstractService/SupplementaryInformation.ta.mjs';
import {
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../MTSAbstractService/ExtensionField.ta.mjs';
/**
 * @summary PerRecipientReportTransferFields
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerRecipientReportTransferFields ::= SET {
 *   actual-recipient-name                  [0]  ActualRecipientName,
 *   originally-specified-recipient-number
 *     [1]  OriginallySpecifiedRecipientNumber,
 *   per-recipient-indicators               [2]  PerRecipientIndicators,
 *   last-trace-information                 [3]  LastTraceInformation,
 *   originally-intended-recipient-name
 *     [4]  OriginallyIntendedRecipientName OPTIONAL,
 *   supplementary-information              [5]  SupplementaryInformation OPTIONAL,
 *   extensions
 *     [6]  SET OF ExtensionField{{PerRecipientReportTransferExtensions}}
 *       DEFAULT {}
 * }
 * ```
 *
 * @class
 */
export class PerRecipientReportTransferFields {
    constructor(
        /**
         * @summary `actual_recipient_name`.
         * @public
         * @readonly
         */
        readonly actual_recipient_name: ActualRecipientName,
        /**
         * @summary `originally_specified_recipient_number`.
         * @public
         * @readonly
         */
        readonly originally_specified_recipient_number: OriginallySpecifiedRecipientNumber,
        /**
         * @summary `per_recipient_indicators`.
         * @public
         * @readonly
         */
        readonly per_recipient_indicators: PerRecipientIndicators,
        /**
         * @summary `last_trace_information`.
         * @public
         * @readonly
         */
        readonly last_trace_information: LastTraceInformation,
        /**
         * @summary `originally_intended_recipient_name`.
         * @public
         * @readonly
         */
        readonly originally_intended_recipient_name: OPTIONAL<OriginallyIntendedRecipientName>,
        /**
         * @summary `supplementary_information`.
         * @public
         * @readonly
         */
        readonly supplementary_information: OPTIONAL<SupplementaryInformation>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>
    ) {}

    /**
     * @summary Restructures an object into a PerRecipientReportTransferFields
     * @description
     *
     * This takes an `object` and converts it to a `PerRecipientReportTransferFields`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PerRecipientReportTransferFields`.
     * @returns {PerRecipientReportTransferFields}
     */
    public static _from_object(
        _o: {
            [_K in keyof PerRecipientReportTransferFields]: PerRecipientReportTransferFields[_K];
        }
    ): PerRecipientReportTransferFields {
        return new PerRecipientReportTransferFields(
            _o.actual_recipient_name,
            _o.originally_specified_recipient_number,
            _o.per_recipient_indicators,
            _o.last_trace_information,
            _o.originally_intended_recipient_name,
            _o.supplementary_information,
            _o.extensions
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
 * @summary The Leading Root Component Types of PerRecipientReportTransferFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PerRecipientReportTransferFields: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'actual-recipient-name',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'originally-specified-recipient-number',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'per-recipient-indicators',
        false,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'last-trace-information',
        false,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'originally-intended-recipient-name',
        true,
        $.hasTag(_TagClass.context, 4)
    ),
    new $.ComponentSpec(
        'supplementary-information',
        true,
        $.hasTag(_TagClass.context, 5)
    ),
    new $.ComponentSpec(
        'extensions',
        true,
        $.hasTag(_TagClass.context, 6)
    ),
];

/**
 * @summary The Trailing Root Component Types of PerRecipientReportTransferFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PerRecipientReportTransferFields: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of PerRecipientReportTransferFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PerRecipientReportTransferFields: $.ComponentSpec[] = [];

let _cached_decoder_for_PerRecipientReportTransferFields: $.ASN1Decoder<PerRecipientReportTransferFields> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PerRecipientReportTransferFields
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PerRecipientReportTransferFields} The decoded data structure.
 */
export function _decode_PerRecipientReportTransferFields(el: _Element) {
    if (!_cached_decoder_for_PerRecipientReportTransferFields) {
        _cached_decoder_for_PerRecipientReportTransferFields = function (
            el: _Element
        ): PerRecipientReportTransferFields {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let actual_recipient_name!: ActualRecipientName;
            let originally_specified_recipient_number!: OriginallySpecifiedRecipientNumber;
            let per_recipient_indicators!: PerRecipientIndicators;
            let last_trace_information!: LastTraceInformation;
            let originally_intended_recipient_name: OPTIONAL<OriginallyIntendedRecipientName>;
            let supplementary_information: OPTIONAL<SupplementaryInformation>;
            let extensions: OPTIONAL<ExtensionField[]> =
                PerRecipientReportTransferFields._default_value_for_extensions;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'actual-recipient-name': (_el: _Element): void => {
                    actual_recipient_name = $._decode_implicit<ActualRecipientName>(
                        () => _decode_ActualRecipientName
                    )(_el);
                },
                'originally-specified-recipient-number': (
                    _el: _Element
                ): void => {
                    originally_specified_recipient_number = $._decode_implicit<OriginallySpecifiedRecipientNumber>(
                        () => _decode_OriginallySpecifiedRecipientNumber
                    )(_el);
                },
                'per-recipient-indicators': (_el: _Element): void => {
                    per_recipient_indicators = $._decode_implicit<PerRecipientIndicators>(
                        () => _decode_PerRecipientIndicators
                    )(_el);
                },
                'last-trace-information': (_el: _Element): void => {
                    last_trace_information = $._decode_implicit<LastTraceInformation>(
                        () => _decode_LastTraceInformation
                    )(_el);
                },
                'originally-intended-recipient-name': (_el: _Element): void => {
                    originally_intended_recipient_name = $._decode_implicit<OriginallyIntendedRecipientName>(
                        () => _decode_OriginallyIntendedRecipientName
                    )(_el);
                },
                'supplementary-information': (_el: _Element): void => {
                    supplementary_information = $._decode_implicit<SupplementaryInformation>(
                        () => _decode_SupplementaryInformation
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
                _root_component_type_list_1_spec_for_PerRecipientReportTransferFields,
                _extension_additions_list_spec_for_PerRecipientReportTransferFields,
                _root_component_type_list_2_spec_for_PerRecipientReportTransferFields,
                undefined
            );
            return new PerRecipientReportTransferFields /* SET_CONSTRUCTOR_CALL */(
                actual_recipient_name,
                originally_specified_recipient_number,
                per_recipient_indicators,
                last_trace_information,
                originally_intended_recipient_name,
                supplementary_information,
                extensions
            );
        };
    }
    return _cached_decoder_for_PerRecipientReportTransferFields(el);
}

let _cached_encoder_for_PerRecipientReportTransferFields: $.ASN1Encoder<PerRecipientReportTransferFields> | null = null;

/**
 * @summary Encodes a(n) PerRecipientReportTransferFields into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PerRecipientReportTransferFields, encoded as an ASN.1 Element.
 */
export function _encode_PerRecipientReportTransferFields(
    value: PerRecipientReportTransferFields,
    elGetter: $.ASN1Encoder<PerRecipientReportTransferFields>
) {
    if (!_cached_encoder_for_PerRecipientReportTransferFields) {
        _cached_encoder_for_PerRecipientReportTransferFields = function (
            value: PerRecipientReportTransferFields        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_ActualRecipientName,
                            $.BER
                        )(value.actual_recipient_name, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_OriginallySpecifiedRecipientNumber,
                            $.BER
                        )(value.originally_specified_recipient_number, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            2,
                            () => _encode_PerRecipientIndicators,
                            $.BER
                        )(value.per_recipient_indicators, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            3,
                            () => _encode_LastTraceInformation,
                            $.BER
                        )(value.last_trace_information, $.BER),
                        /* IF_ABSENT  */ value.originally_intended_recipient_name ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_OriginallyIntendedRecipientName,
                                  $.BER
                              )(
                                  value.originally_intended_recipient_name,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.supplementary_information ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  5,
                                  () => _encode_SupplementaryInformation,
                                  $.BER
                              )(value.supplementary_information, $.BER),
                        /* IF_DEFAULT */ value.extensions === undefined ||
                        $.deepEq(
                            value.extensions,
                            PerRecipientReportTransferFields._default_value_for_extensions
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  6,
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
    return _cached_encoder_for_PerRecipientReportTransferFields(
        value,
        elGetter
    );
}


/* eslint-enable */

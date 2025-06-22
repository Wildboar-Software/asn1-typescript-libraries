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
import * as $ from '@wildboar/asn1/functional';
import {
    ActualRecipientName,
    _decode_ActualRecipientName,
    _encode_ActualRecipientName,
} from '../MTSAbstractService/ActualRecipientName.ta.mjs';
import {
    ReportType,
    _decode_ReportType,
    _encode_ReportType,
} from '../MTSAbstractService/ReportType.ta.mjs';
import {
    ConvertedEncodedInformationTypes,
    _decode_ConvertedEncodedInformationTypes,
    _encode_ConvertedEncodedInformationTypes,
} from '../MTSAbstractService/ConvertedEncodedInformationTypes.ta.mjs';
import {
    OriginallyIntendedRecipientName,
    _decode_OriginallyIntendedRecipientName,
    _encode_OriginallyIntendedRecipientName,
} from '../MTSAbstractService/OriginallyIntendedRecipientName.ta.mjs';
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
 * @summary PerRecipientReportDeliveryFields
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerRecipientReportDeliveryFields ::= SET {
 *   actual-recipient-name                [0]  ActualRecipientName,
 *   report-type                          [1]  ReportType,
 *   converted-encoded-information-types
 *     ConvertedEncodedInformationTypes OPTIONAL,
 *   originally-intended-recipient-name
 *     [2]  OriginallyIntendedRecipientName OPTIONAL,
 *   supplementary-information            [3]  SupplementaryInformation OPTIONAL,
 *   extensions
 *     [4]  SET OF ExtensionField{{PerRecipientReportDeliveryExtensions}}
 *       DEFAULT {}
 * }
 * ```
 *
 * @class
 */
export class PerRecipientReportDeliveryFields {
    constructor(
        /**
         * @summary `actual_recipient_name`.
         * @public
         * @readonly
         */
        readonly actual_recipient_name: ActualRecipientName,
        /**
         * @summary `report_type`.
         * @public
         * @readonly
         */
        readonly report_type: ReportType,
        /**
         * @summary `converted_encoded_information_types`.
         * @public
         * @readonly
         */
        readonly converted_encoded_information_types: OPTIONAL<ConvertedEncodedInformationTypes>,
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
     * @summary Restructures an object into a PerRecipientReportDeliveryFields
     * @description
     *
     * This takes an `object` and converts it to a `PerRecipientReportDeliveryFields`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PerRecipientReportDeliveryFields`.
     * @returns {PerRecipientReportDeliveryFields}
     */
    public static _from_object(
        _o: {
            [_K in keyof PerRecipientReportDeliveryFields]: PerRecipientReportDeliveryFields[_K];
        }
    ): PerRecipientReportDeliveryFields {
        return new PerRecipientReportDeliveryFields(
            _o.actual_recipient_name,
            _o.report_type,
            _o.converted_encoded_information_types,
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
 * @summary The Leading Root Component Types of PerRecipientReportDeliveryFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PerRecipientReportDeliveryFields: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'actual-recipient-name',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'report-type',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'converted-encoded-information-types',
        true,
        $.hasTag(_TagClass.application, 5)
    ),
    new $.ComponentSpec(
        'originally-intended-recipient-name',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'supplementary-information',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'extensions',
        true,
        $.hasTag(_TagClass.context, 4)
    ),
];

/**
 * @summary The Trailing Root Component Types of PerRecipientReportDeliveryFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PerRecipientReportDeliveryFields: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of PerRecipientReportDeliveryFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PerRecipientReportDeliveryFields: $.ComponentSpec[] = [];

let _cached_decoder_for_PerRecipientReportDeliveryFields: $.ASN1Decoder<PerRecipientReportDeliveryFields> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PerRecipientReportDeliveryFields
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PerRecipientReportDeliveryFields} The decoded data structure.
 */
export function _decode_PerRecipientReportDeliveryFields(el: _Element) {
    if (!_cached_decoder_for_PerRecipientReportDeliveryFields) {
        _cached_decoder_for_PerRecipientReportDeliveryFields = function (
            el: _Element
        ): PerRecipientReportDeliveryFields {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let actual_recipient_name!: ActualRecipientName;
            let report_type!: ReportType;
            let converted_encoded_information_types: OPTIONAL<ConvertedEncodedInformationTypes>;
            let originally_intended_recipient_name: OPTIONAL<OriginallyIntendedRecipientName>;
            let supplementary_information: OPTIONAL<SupplementaryInformation>;
            let extensions: OPTIONAL<ExtensionField[]> =
                PerRecipientReportDeliveryFields._default_value_for_extensions;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'actual-recipient-name': (_el: _Element): void => {
                    actual_recipient_name = $._decode_implicit<ActualRecipientName>(
                        () => _decode_ActualRecipientName
                    )(_el);
                },
                'report-type': (_el: _Element): void => {
                    report_type = $._decode_explicit<ReportType>(
                        () => _decode_ReportType
                    )(_el);
                },
                'converted-encoded-information-types': (
                    _el: _Element
                ): void => {
                    converted_encoded_information_types = _decode_ConvertedEncodedInformationTypes(
                        _el
                    );
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
                _root_component_type_list_1_spec_for_PerRecipientReportDeliveryFields,
                _extension_additions_list_spec_for_PerRecipientReportDeliveryFields,
                _root_component_type_list_2_spec_for_PerRecipientReportDeliveryFields,
                undefined
            );
            return new PerRecipientReportDeliveryFields /* SET_CONSTRUCTOR_CALL */(
                actual_recipient_name,
                report_type,
                converted_encoded_information_types,
                originally_intended_recipient_name,
                supplementary_information,
                extensions
            );
        };
    }
    return _cached_decoder_for_PerRecipientReportDeliveryFields(el);
}

let _cached_encoder_for_PerRecipientReportDeliveryFields: $.ASN1Encoder<PerRecipientReportDeliveryFields> | null = null;

/**
 * @summary Encodes a(n) PerRecipientReportDeliveryFields into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PerRecipientReportDeliveryFields, encoded as an ASN.1 Element.
 */
export function _encode_PerRecipientReportDeliveryFields(
    value: PerRecipientReportDeliveryFields,
    elGetter: $.ASN1Encoder<PerRecipientReportDeliveryFields>
) {
    if (!_cached_encoder_for_PerRecipientReportDeliveryFields) {
        _cached_encoder_for_PerRecipientReportDeliveryFields = function (
            value: PerRecipientReportDeliveryFields        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_ActualRecipientName,
                            $.BER
                        )(value.actual_recipient_name, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_ReportType,
                            $.BER
                        )(value.report_type, $.BER),
                        /* IF_ABSENT  */ value.converted_encoded_information_types ===
                        undefined
                            ? undefined
                            : _encode_ConvertedEncodedInformationTypes(
                                  value.converted_encoded_information_types,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.originally_intended_recipient_name ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
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
                                  3,
                                  () => _encode_SupplementaryInformation,
                                  $.BER
                              )(value.supplementary_information, $.BER),
                        /* IF_DEFAULT */ value.extensions === undefined ||
                        $.deepEq(
                            value.extensions,
                            PerRecipientReportDeliveryFields._default_value_for_extensions
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
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
    return _cached_encoder_for_PerRecipientReportDeliveryFields(
        value,
        elGetter
    );
}


/* eslint-enable */

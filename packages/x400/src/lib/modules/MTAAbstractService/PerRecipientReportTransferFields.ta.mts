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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    ActualRecipientName,
    _decode_ActualRecipientName,
    _encode_ActualRecipientName,
} from '../MTAAbstractService/ActualRecipientName.ta.mjs';
export {
    ActualRecipientName,
    _decode_ActualRecipientName,
    _encode_ActualRecipientName,
} from '../MTAAbstractService/ActualRecipientName.ta.mjs';
import {
    OriginallySpecifiedRecipientNumber,
    _decode_OriginallySpecifiedRecipientNumber,
    _encode_OriginallySpecifiedRecipientNumber,
} from '../MTAAbstractService/OriginallySpecifiedRecipientNumber.ta.mjs';
export {
    OriginallySpecifiedRecipientNumber,
    _decode_OriginallySpecifiedRecipientNumber,
    _encode_OriginallySpecifiedRecipientNumber,
} from '../MTAAbstractService/OriginallySpecifiedRecipientNumber.ta.mjs';
import {
    PerRecipientIndicators,
    PerRecipientIndicators_responsibility /* IMPORTED_LONG_NAMED_BIT */,
    responsibility /* IMPORTED_SHORT_NAMED_BIT */,
    PerRecipientIndicators_originating_MTA_report /* IMPORTED_LONG_NAMED_BIT */,
    originating_MTA_report /* IMPORTED_SHORT_NAMED_BIT */,
    PerRecipientIndicators_originating_MTA_non_delivery_report /* IMPORTED_LONG_NAMED_BIT */,
    originating_MTA_non_delivery_report /* IMPORTED_SHORT_NAMED_BIT */,
    PerRecipientIndicators_originator_report /* IMPORTED_LONG_NAMED_BIT */,
    originator_report /* IMPORTED_SHORT_NAMED_BIT */,
    PerRecipientIndicators_originator_non_delivery_report /* IMPORTED_LONG_NAMED_BIT */,
    originator_non_delivery_report /* IMPORTED_SHORT_NAMED_BIT */,
    PerRecipientIndicators_reserved_5 /* IMPORTED_LONG_NAMED_BIT */,
    reserved_5 /* IMPORTED_SHORT_NAMED_BIT */,
    PerRecipientIndicators_reserved_6 /* IMPORTED_LONG_NAMED_BIT */,
    reserved_6 /* IMPORTED_SHORT_NAMED_BIT */,
    PerRecipientIndicators_reserved_7 /* IMPORTED_LONG_NAMED_BIT */,
    reserved_7 /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_PerRecipientIndicators,
    _encode_PerRecipientIndicators,
} from '../MTAAbstractService/PerRecipientIndicators.ta.mjs';
export {
    PerRecipientIndicators,
    PerRecipientIndicators_responsibility /* IMPORTED_LONG_NAMED_BIT */,
    responsibility /* IMPORTED_SHORT_NAMED_BIT */,
    PerRecipientIndicators_originating_MTA_report /* IMPORTED_LONG_NAMED_BIT */,
    originating_MTA_report /* IMPORTED_SHORT_NAMED_BIT */,
    PerRecipientIndicators_originating_MTA_non_delivery_report /* IMPORTED_LONG_NAMED_BIT */,
    originating_MTA_non_delivery_report /* IMPORTED_SHORT_NAMED_BIT */,
    PerRecipientIndicators_originator_report /* IMPORTED_LONG_NAMED_BIT */,
    originator_report /* IMPORTED_SHORT_NAMED_BIT */,
    PerRecipientIndicators_originator_non_delivery_report /* IMPORTED_LONG_NAMED_BIT */,
    originator_non_delivery_report /* IMPORTED_SHORT_NAMED_BIT */,
    PerRecipientIndicators_reserved_5 /* IMPORTED_LONG_NAMED_BIT */,
    reserved_5 /* IMPORTED_SHORT_NAMED_BIT */,
    PerRecipientIndicators_reserved_6 /* IMPORTED_LONG_NAMED_BIT */,
    reserved_6 /* IMPORTED_SHORT_NAMED_BIT */,
    PerRecipientIndicators_reserved_7 /* IMPORTED_LONG_NAMED_BIT */,
    reserved_7 /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_PerRecipientIndicators,
    _encode_PerRecipientIndicators,
} from '../MTAAbstractService/PerRecipientIndicators.ta.mjs';
import {
    LastTraceInformation,
    _decode_LastTraceInformation,
    _encode_LastTraceInformation,
} from '../MTAAbstractService/LastTraceInformation.ta.mjs';
export {
    LastTraceInformation,
    _decode_LastTraceInformation,
    _encode_LastTraceInformation,
} from '../MTAAbstractService/LastTraceInformation.ta.mjs';
import {
    OriginallyIntendedRecipientName,
    _decode_OriginallyIntendedRecipientName,
    _encode_OriginallyIntendedRecipientName,
} from '../MTAAbstractService/OriginallyIntendedRecipientName.ta.mjs';
export {
    OriginallyIntendedRecipientName,
    _decode_OriginallyIntendedRecipientName,
    _encode_OriginallyIntendedRecipientName,
} from '../MTAAbstractService/OriginallyIntendedRecipientName.ta.mjs';
import {
    SupplementaryInformation,
    _decode_SupplementaryInformation,
    _encode_SupplementaryInformation,
} from '../MTSAbstractService/SupplementaryInformation.ta.mjs';
export {
    SupplementaryInformation,
    _decode_SupplementaryInformation,
    _encode_SupplementaryInformation,
} from '../MTSAbstractService/SupplementaryInformation.ta.mjs';
import {
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../MTSAbstractService/ExtensionField.ta.mjs';
export {
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../MTSAbstractService/ExtensionField.ta.mjs';

/* START_OF_SYMBOL_DEFINITION PerRecipientReportTransferFields */
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
    public static get _default_value_for_extensions() {
        return [];
    }
}
/* END_OF_SYMBOL_DEFINITION PerRecipientReportTransferFields */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PerRecipientReportTransferFields */
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
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'originally-specified-recipient-number',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'per-recipient-indicators',
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'last-trace-information',
        false,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'originally-intended-recipient-name',
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'supplementary-information',
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'extensions',
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PerRecipientReportTransferFields */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PerRecipientReportTransferFields */
/**
 * @summary The Trailing Root Component Types of PerRecipientReportTransferFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PerRecipientReportTransferFields: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PerRecipientReportTransferFields */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PerRecipientReportTransferFields */
/**
 * @summary The Extension Addition Component Types of PerRecipientReportTransferFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PerRecipientReportTransferFields: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PerRecipientReportTransferFields */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PerRecipientReportTransferFields */
let _cached_decoder_for_PerRecipientReportTransferFields: $.ASN1Decoder<PerRecipientReportTransferFields> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PerRecipientReportTransferFields */

/* START_OF_SYMBOL_DEFINITION _decode_PerRecipientReportTransferFields */
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
/* END_OF_SYMBOL_DEFINITION _decode_PerRecipientReportTransferFields */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PerRecipientReportTransferFields */
let _cached_encoder_for_PerRecipientReportTransferFields: $.ASN1Encoder<PerRecipientReportTransferFields> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PerRecipientReportTransferFields */

/* START_OF_SYMBOL_DEFINITION _encode_PerRecipientReportTransferFields */
/**
 * @summary Encodes a(n) PerRecipientReportTransferFields into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PerRecipientReportTransferFields, encoded as an ASN.1 Element.
 */
export function _encode_PerRecipientReportTransferFields(
    value: PerRecipientReportTransferFields,
    elGetter: $.ASN1Encoder<PerRecipientReportTransferFields>
) {
    if (!_cached_encoder_for_PerRecipientReportTransferFields) {
        _cached_encoder_for_PerRecipientReportTransferFields = function (
            value: PerRecipientReportTransferFields,
            elGetter: $.ASN1Encoder<PerRecipientReportTransferFields>
        ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_PerRecipientReportTransferFields */

/* eslint-enable */

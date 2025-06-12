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
    RecipientName,
    _decode_RecipientName,
    _encode_RecipientName,
} from '../MTAAbstractService/RecipientName.ta.js';
export {
    RecipientName,
    _decode_RecipientName,
    _encode_RecipientName,
} from '../MTAAbstractService/RecipientName.ta.js';
import {
    OriginallySpecifiedRecipientNumber,
    _decode_OriginallySpecifiedRecipientNumber,
    _encode_OriginallySpecifiedRecipientNumber,
} from '../MTAAbstractService/OriginallySpecifiedRecipientNumber.ta.js';
export {
    OriginallySpecifiedRecipientNumber,
    _decode_OriginallySpecifiedRecipientNumber,
    _encode_OriginallySpecifiedRecipientNumber,
} from '../MTAAbstractService/OriginallySpecifiedRecipientNumber.ta.js';
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
} from '../MTAAbstractService/PerRecipientIndicators.ta.js';
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
} from '../MTAAbstractService/PerRecipientIndicators.ta.js';
import {
    ExplicitConversion,
    ExplicitConversion_ia5_text_to_teletex /* IMPORTED_LONG_NAMED_INTEGER */,
    ia5_text_to_teletex /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitConversion_ia5_text_to_g3_facsimile /* IMPORTED_LONG_NAMED_INTEGER */,
    ia5_text_to_g3_facsimile /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitConversion_ia5_text_to_g4_class_1 /* IMPORTED_LONG_NAMED_INTEGER */,
    ia5_text_to_g4_class_1 /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitConversion_ia5_text_to_videotex /* IMPORTED_LONG_NAMED_INTEGER */,
    ia5_text_to_videotex /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitConversion_teletex_to_ia5_text /* IMPORTED_LONG_NAMED_INTEGER */,
    teletex_to_ia5_text /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitConversion_teletex_to_g3_facsimile /* IMPORTED_LONG_NAMED_INTEGER */,
    teletex_to_g3_facsimile /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitConversion_teletex_to_g4_class_1 /* IMPORTED_LONG_NAMED_INTEGER */,
    teletex_to_g4_class_1 /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitConversion_teletex_to_videotex /* IMPORTED_LONG_NAMED_INTEGER */,
    teletex_to_videotex /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitConversion_videotex_to_ia5_text /* IMPORTED_LONG_NAMED_INTEGER */,
    videotex_to_ia5_text /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitConversion_videotex_to_teletex /* IMPORTED_LONG_NAMED_INTEGER */,
    videotex_to_teletex /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_ExplicitConversion,
    _encode_ExplicitConversion,
} from '../MTSAbstractService/ExplicitConversion.ta.js';
export {
    ExplicitConversion,
    ExplicitConversion_ia5_text_to_teletex /* IMPORTED_LONG_NAMED_INTEGER */,
    ia5_text_to_teletex /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitConversion_ia5_text_to_g3_facsimile /* IMPORTED_LONG_NAMED_INTEGER */,
    ia5_text_to_g3_facsimile /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitConversion_ia5_text_to_g4_class_1 /* IMPORTED_LONG_NAMED_INTEGER */,
    ia5_text_to_g4_class_1 /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitConversion_ia5_text_to_videotex /* IMPORTED_LONG_NAMED_INTEGER */,
    ia5_text_to_videotex /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitConversion_teletex_to_ia5_text /* IMPORTED_LONG_NAMED_INTEGER */,
    teletex_to_ia5_text /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitConversion_teletex_to_g3_facsimile /* IMPORTED_LONG_NAMED_INTEGER */,
    teletex_to_g3_facsimile /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitConversion_teletex_to_g4_class_1 /* IMPORTED_LONG_NAMED_INTEGER */,
    teletex_to_g4_class_1 /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitConversion_teletex_to_videotex /* IMPORTED_LONG_NAMED_INTEGER */,
    teletex_to_videotex /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitConversion_videotex_to_ia5_text /* IMPORTED_LONG_NAMED_INTEGER */,
    videotex_to_ia5_text /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitConversion_videotex_to_teletex /* IMPORTED_LONG_NAMED_INTEGER */,
    videotex_to_teletex /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_ExplicitConversion,
    _encode_ExplicitConversion,
} from '../MTSAbstractService/ExplicitConversion.ta.js';
import {
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../MTSAbstractService/ExtensionField.ta.js';
export {
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../MTSAbstractService/ExtensionField.ta.js';

/* START_OF_SYMBOL_DEFINITION PerRecipientProbeTransferFields */
/**
 * @summary PerRecipientProbeTransferFields
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerRecipientProbeTransferFields ::= SET {
 *   recipient-name                         RecipientName,
 *   originally-specified-recipient-number
 *     [0]  OriginallySpecifiedRecipientNumber,
 *   per-recipient-indicators               [1]  PerRecipientIndicators,
 *   explicit-conversion                    [2]  ExplicitConversion OPTIONAL,
 *   extensions
 *     [3]  SET OF ExtensionField{{PerRecipientProbeTransferExtensions}}
 *       DEFAULT {}
 * }
 * ```
 *
 * @class
 */
export class PerRecipientProbeTransferFields {
    constructor(
        /**
         * @summary `recipient_name`.
         * @public
         * @readonly
         */
        readonly recipient_name: RecipientName,
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
         * @summary `explicit_conversion`.
         * @public
         * @readonly
         */
        readonly explicit_conversion: OPTIONAL<ExplicitConversion>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>
    ) {}

    /**
     * @summary Restructures an object into a PerRecipientProbeTransferFields
     * @description
     *
     * This takes an `object` and converts it to a `PerRecipientProbeTransferFields`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PerRecipientProbeTransferFields`.
     * @returns {PerRecipientProbeTransferFields}
     */
    public static _from_object(
        _o: {
            [_K in keyof PerRecipientProbeTransferFields]: PerRecipientProbeTransferFields[_K];
        }
    ): PerRecipientProbeTransferFields {
        return new PerRecipientProbeTransferFields(
            _o.recipient_name,
            _o.originally_specified_recipient_number,
            _o.per_recipient_indicators,
            _o.explicit_conversion,
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
/* END_OF_SYMBOL_DEFINITION PerRecipientProbeTransferFields */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PerRecipientProbeTransferFields */
/**
 * @summary The Leading Root Component Types of PerRecipientProbeTransferFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PerRecipientProbeTransferFields: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'recipient-name',
        false,
        $.hasTag(_TagClass.application, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'originally-specified-recipient-number',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'per-recipient-indicators',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'explicit-conversion',
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
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PerRecipientProbeTransferFields */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PerRecipientProbeTransferFields */
/**
 * @summary The Trailing Root Component Types of PerRecipientProbeTransferFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PerRecipientProbeTransferFields: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PerRecipientProbeTransferFields */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PerRecipientProbeTransferFields */
/**
 * @summary The Extension Addition Component Types of PerRecipientProbeTransferFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PerRecipientProbeTransferFields: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PerRecipientProbeTransferFields */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PerRecipientProbeTransferFields */
let _cached_decoder_for_PerRecipientProbeTransferFields: $.ASN1Decoder<PerRecipientProbeTransferFields> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PerRecipientProbeTransferFields */

/* START_OF_SYMBOL_DEFINITION _decode_PerRecipientProbeTransferFields */
/**
 * @summary Decodes an ASN.1 element into a(n) PerRecipientProbeTransferFields
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PerRecipientProbeTransferFields} The decoded data structure.
 */
export function _decode_PerRecipientProbeTransferFields(el: _Element) {
    if (!_cached_decoder_for_PerRecipientProbeTransferFields) {
        _cached_decoder_for_PerRecipientProbeTransferFields = function (
            el: _Element
        ): PerRecipientProbeTransferFields {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let recipient_name!: RecipientName;
            let originally_specified_recipient_number!: OriginallySpecifiedRecipientNumber;
            let per_recipient_indicators!: PerRecipientIndicators;
            let explicit_conversion: OPTIONAL<ExplicitConversion>;
            let extensions: OPTIONAL<ExtensionField[]> =
                PerRecipientProbeTransferFields._default_value_for_extensions;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'recipient-name': (_el: _Element): void => {
                    recipient_name = _decode_RecipientName(_el);
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
                'explicit-conversion': (_el: _Element): void => {
                    explicit_conversion = $._decode_implicit<ExplicitConversion>(
                        () => _decode_ExplicitConversion
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
                _root_component_type_list_1_spec_for_PerRecipientProbeTransferFields,
                _extension_additions_list_spec_for_PerRecipientProbeTransferFields,
                _root_component_type_list_2_spec_for_PerRecipientProbeTransferFields,
                undefined
            );
            return new PerRecipientProbeTransferFields /* SET_CONSTRUCTOR_CALL */(
                recipient_name,
                originally_specified_recipient_number,
                per_recipient_indicators,
                explicit_conversion,
                extensions
            );
        };
    }
    return _cached_decoder_for_PerRecipientProbeTransferFields(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PerRecipientProbeTransferFields */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PerRecipientProbeTransferFields */
let _cached_encoder_for_PerRecipientProbeTransferFields: $.ASN1Encoder<PerRecipientProbeTransferFields> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PerRecipientProbeTransferFields */

/* START_OF_SYMBOL_DEFINITION _encode_PerRecipientProbeTransferFields */
/**
 * @summary Encodes a(n) PerRecipientProbeTransferFields into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PerRecipientProbeTransferFields, encoded as an ASN.1 Element.
 */
export function _encode_PerRecipientProbeTransferFields(
    value: PerRecipientProbeTransferFields,
    elGetter: $.ASN1Encoder<PerRecipientProbeTransferFields>
) {
    if (!_cached_encoder_for_PerRecipientProbeTransferFields) {
        _cached_encoder_for_PerRecipientProbeTransferFields = function (
            value: PerRecipientProbeTransferFields,
            elGetter: $.ASN1Encoder<PerRecipientProbeTransferFields>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_RecipientName(
                            value.recipient_name,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_OriginallySpecifiedRecipientNumber,
                            $.BER
                        )(value.originally_specified_recipient_number, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_PerRecipientIndicators,
                            $.BER
                        )(value.per_recipient_indicators, $.BER),
                        /* IF_ABSENT  */ value.explicit_conversion === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_ExplicitConversion,
                                  $.BER
                              )(value.explicit_conversion, $.BER),
                        /* IF_DEFAULT */ value.extensions === undefined ||
                        $.deepEq(
                            value.extensions,
                            PerRecipientProbeTransferFields._default_value_for_extensions
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
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PerRecipientProbeTransferFields(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PerRecipientProbeTransferFields */

/* eslint-enable */

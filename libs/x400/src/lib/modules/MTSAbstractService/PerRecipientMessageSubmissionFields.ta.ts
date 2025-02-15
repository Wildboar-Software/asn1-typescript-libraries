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
    RecipientName,
    _decode_RecipientName,
    _encode_RecipientName,
} from '../MTSAbstractService/RecipientName.ta';
export {
    RecipientName,
    _decode_RecipientName,
    _encode_RecipientName,
} from '../MTSAbstractService/RecipientName.ta';
import {
    OriginatorReportRequest,
    OriginatorReportRequest_report /* IMPORTED_LONG_NAMED_BIT */,
    report /* IMPORTED_SHORT_NAMED_BIT */,
    OriginatorReportRequest_non_delivery_report /* IMPORTED_LONG_NAMED_BIT */,
    non_delivery_report /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_OriginatorReportRequest,
    _encode_OriginatorReportRequest,
} from '../MTSAbstractService/OriginatorReportRequest.ta';
export {
    OriginatorReportRequest,
    OriginatorReportRequest_report /* IMPORTED_LONG_NAMED_BIT */,
    report /* IMPORTED_SHORT_NAMED_BIT */,
    OriginatorReportRequest_non_delivery_report /* IMPORTED_LONG_NAMED_BIT */,
    non_delivery_report /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_OriginatorReportRequest,
    _encode_OriginatorReportRequest,
} from '../MTSAbstractService/OriginatorReportRequest.ta';
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
} from '../MTSAbstractService/ExplicitConversion.ta';
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
} from '../MTSAbstractService/ExplicitConversion.ta';
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

/* START_OF_SYMBOL_DEFINITION PerRecipientMessageSubmissionFields */
/**
 * @summary PerRecipientMessageSubmissionFields
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerRecipientMessageSubmissionFields ::= SET {
 *   recipient-name             RecipientName,
 *   originator-report-request  [0]  OriginatorReportRequest,
 *   explicit-conversion        [1]  ExplicitConversion OPTIONAL,
 *   extensions
 *     [2]  SET OF ExtensionField{{PerRecipientMessageSubmissionExtensions}}
 *       DEFAULT {}
 * }
 * ```
 *
 * @class
 */
export class PerRecipientMessageSubmissionFields {
    constructor(
        /**
         * @summary `recipient_name`.
         * @public
         * @readonly
         */
        readonly recipient_name: RecipientName,
        /**
         * @summary `originator_report_request`.
         * @public
         * @readonly
         */
        readonly originator_report_request: OriginatorReportRequest,
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
     * @summary Restructures an object into a PerRecipientMessageSubmissionFields
     * @description
     *
     * This takes an `object` and converts it to a `PerRecipientMessageSubmissionFields`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PerRecipientMessageSubmissionFields`.
     * @returns {PerRecipientMessageSubmissionFields}
     */
    public static _from_object(
        _o: {
            [_K in keyof PerRecipientMessageSubmissionFields]: PerRecipientMessageSubmissionFields[_K];
        }
    ): PerRecipientMessageSubmissionFields {
        return new PerRecipientMessageSubmissionFields(
            _o.recipient_name,
            _o.originator_report_request,
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
/* END_OF_SYMBOL_DEFINITION PerRecipientMessageSubmissionFields */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PerRecipientMessageSubmissionFields */
/**
 * @summary The Leading Root Component Types of PerRecipientMessageSubmissionFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PerRecipientMessageSubmissionFields: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'recipient-name',
        false,
        $.hasTag(_TagClass.application, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'originator-report-request',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'explicit-conversion',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'extensions',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PerRecipientMessageSubmissionFields */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PerRecipientMessageSubmissionFields */
/**
 * @summary The Trailing Root Component Types of PerRecipientMessageSubmissionFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PerRecipientMessageSubmissionFields: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PerRecipientMessageSubmissionFields */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PerRecipientMessageSubmissionFields */
/**
 * @summary The Extension Addition Component Types of PerRecipientMessageSubmissionFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PerRecipientMessageSubmissionFields: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PerRecipientMessageSubmissionFields */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PerRecipientMessageSubmissionFields */
let _cached_decoder_for_PerRecipientMessageSubmissionFields: $.ASN1Decoder<PerRecipientMessageSubmissionFields> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PerRecipientMessageSubmissionFields */

/* START_OF_SYMBOL_DEFINITION _decode_PerRecipientMessageSubmissionFields */
/**
 * @summary Decodes an ASN.1 element into a(n) PerRecipientMessageSubmissionFields
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PerRecipientMessageSubmissionFields} The decoded data structure.
 */
export function _decode_PerRecipientMessageSubmissionFields(el: _Element) {
    if (!_cached_decoder_for_PerRecipientMessageSubmissionFields) {
        _cached_decoder_for_PerRecipientMessageSubmissionFields = function (
            el: _Element
        ): PerRecipientMessageSubmissionFields {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let recipient_name!: RecipientName;
            let originator_report_request!: OriginatorReportRequest;
            let explicit_conversion: OPTIONAL<ExplicitConversion>;
            let extensions: OPTIONAL<ExtensionField[]> =
                PerRecipientMessageSubmissionFields._default_value_for_extensions;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'recipient-name': (_el: _Element): void => {
                    recipient_name = _decode_RecipientName(_el);
                },
                'originator-report-request': (_el: _Element): void => {
                    originator_report_request = $._decode_implicit<OriginatorReportRequest>(
                        () => _decode_OriginatorReportRequest
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
                _root_component_type_list_1_spec_for_PerRecipientMessageSubmissionFields,
                _extension_additions_list_spec_for_PerRecipientMessageSubmissionFields,
                _root_component_type_list_2_spec_for_PerRecipientMessageSubmissionFields,
                undefined
            );
            return new PerRecipientMessageSubmissionFields /* SET_CONSTRUCTOR_CALL */(
                recipient_name,
                originator_report_request,
                explicit_conversion,
                extensions
            );
        };
    }
    return _cached_decoder_for_PerRecipientMessageSubmissionFields(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PerRecipientMessageSubmissionFields */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PerRecipientMessageSubmissionFields */
let _cached_encoder_for_PerRecipientMessageSubmissionFields: $.ASN1Encoder<PerRecipientMessageSubmissionFields> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PerRecipientMessageSubmissionFields */

/* START_OF_SYMBOL_DEFINITION _encode_PerRecipientMessageSubmissionFields */
/**
 * @summary Encodes a(n) PerRecipientMessageSubmissionFields into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PerRecipientMessageSubmissionFields, encoded as an ASN.1 Element.
 */
export function _encode_PerRecipientMessageSubmissionFields(
    value: PerRecipientMessageSubmissionFields,
    elGetter: $.ASN1Encoder<PerRecipientMessageSubmissionFields>
) {
    if (!_cached_encoder_for_PerRecipientMessageSubmissionFields) {
        _cached_encoder_for_PerRecipientMessageSubmissionFields = function (
            value: PerRecipientMessageSubmissionFields,
            elGetter: $.ASN1Encoder<PerRecipientMessageSubmissionFields>
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
                            () => _encode_OriginatorReportRequest,
                            $.BER
                        )(value.originator_report_request, $.BER),
                        /* IF_ABSENT  */ value.explicit_conversion === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_ExplicitConversion,
                                  $.BER
                              )(value.explicit_conversion, $.BER),
                        /* IF_DEFAULT */ value.extensions === undefined ||
                        $.deepEq(
                            value.extensions,
                            PerRecipientMessageSubmissionFields._default_value_for_extensions
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
    return _cached_encoder_for_PerRecipientMessageSubmissionFields(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_PerRecipientMessageSubmissionFields */

/* eslint-enable */

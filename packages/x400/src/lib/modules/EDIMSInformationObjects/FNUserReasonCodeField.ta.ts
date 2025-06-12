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
    FNUserBasicCodeField,
    FNUserBasicCodeField_unspecified /* IMPORTED_LONG_NAMED_INTEGER */,
    unspecified /* IMPORTED_SHORT_NAMED_INTEGER */,
    FNUserBasicCodeField_forwarded_for_archiving /* IMPORTED_LONG_NAMED_INTEGER */,
    forwarded_for_archiving /* IMPORTED_SHORT_NAMED_INTEGER */,
    FNUserBasicCodeField_forwarded_for_information /* IMPORTED_LONG_NAMED_INTEGER */,
    forwarded_for_information /* IMPORTED_SHORT_NAMED_INTEGER */,
    FNUserBasicCodeField_forwarded_for_additional_action /* IMPORTED_LONG_NAMED_INTEGER */,
    forwarded_for_additional_action /* IMPORTED_SHORT_NAMED_INTEGER */,
    FNUserBasicCodeField_subscription_changed /* IMPORTED_LONG_NAMED_INTEGER */,
    subscription_changed /* IMPORTED_SHORT_NAMED_INTEGER */,
    FNUserBasicCodeField_heading_field_not_supported /* IMPORTED_LONG_NAMED_INTEGER */,
    heading_field_not_supported /* IMPORTED_SHORT_NAMED_INTEGER */,
    FNUserBasicCodeField_bodypart_type_not_supported /* IMPORTED_LONG_NAMED_INTEGER */,
    bodypart_type_not_supported /* IMPORTED_SHORT_NAMED_INTEGER */,
    FNUserBasicCodeField_message_type_not_supported /* IMPORTED_LONG_NAMED_INTEGER */,
    message_type_not_supported /* IMPORTED_SHORT_NAMED_INTEGER */,
    FNUserBasicCodeField_syntax_identifier_not_supported /* IMPORTED_LONG_NAMED_INTEGER */,
    syntax_identifier_not_supported /* IMPORTED_SHORT_NAMED_INTEGER */,
    FNUserBasicCodeField_interchange_sender_unknown /* IMPORTED_LONG_NAMED_INTEGER */,
    interchange_sender_unknown /* IMPORTED_SHORT_NAMED_INTEGER */,
    FNUserBasicCodeField_user_defined_reason /* IMPORTED_LONG_NAMED_INTEGER */,
    user_defined_reason /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_FNUserBasicCodeField,
    _encode_FNUserBasicCodeField,
} from '../EDIMSInformationObjects/FNUserBasicCodeField.ta.js';
export {
    FNUserBasicCodeField,
    FNUserBasicCodeField_unspecified /* IMPORTED_LONG_NAMED_INTEGER */,
    unspecified /* IMPORTED_SHORT_NAMED_INTEGER */,
    FNUserBasicCodeField_forwarded_for_archiving /* IMPORTED_LONG_NAMED_INTEGER */,
    forwarded_for_archiving /* IMPORTED_SHORT_NAMED_INTEGER */,
    FNUserBasicCodeField_forwarded_for_information /* IMPORTED_LONG_NAMED_INTEGER */,
    forwarded_for_information /* IMPORTED_SHORT_NAMED_INTEGER */,
    FNUserBasicCodeField_forwarded_for_additional_action /* IMPORTED_LONG_NAMED_INTEGER */,
    forwarded_for_additional_action /* IMPORTED_SHORT_NAMED_INTEGER */,
    FNUserBasicCodeField_subscription_changed /* IMPORTED_LONG_NAMED_INTEGER */,
    subscription_changed /* IMPORTED_SHORT_NAMED_INTEGER */,
    FNUserBasicCodeField_heading_field_not_supported /* IMPORTED_LONG_NAMED_INTEGER */,
    heading_field_not_supported /* IMPORTED_SHORT_NAMED_INTEGER */,
    FNUserBasicCodeField_bodypart_type_not_supported /* IMPORTED_LONG_NAMED_INTEGER */,
    bodypart_type_not_supported /* IMPORTED_SHORT_NAMED_INTEGER */,
    FNUserBasicCodeField_message_type_not_supported /* IMPORTED_LONG_NAMED_INTEGER */,
    message_type_not_supported /* IMPORTED_SHORT_NAMED_INTEGER */,
    FNUserBasicCodeField_syntax_identifier_not_supported /* IMPORTED_LONG_NAMED_INTEGER */,
    syntax_identifier_not_supported /* IMPORTED_SHORT_NAMED_INTEGER */,
    FNUserBasicCodeField_interchange_sender_unknown /* IMPORTED_LONG_NAMED_INTEGER */,
    interchange_sender_unknown /* IMPORTED_SHORT_NAMED_INTEGER */,
    FNUserBasicCodeField_user_defined_reason /* IMPORTED_LONG_NAMED_INTEGER */,
    user_defined_reason /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_FNUserBasicCodeField,
    _encode_FNUserBasicCodeField,
} from '../EDIMSInformationObjects/FNUserBasicCodeField.ta.js';
import {
    FNUserDiagnosticField,
    _decode_FNUserDiagnosticField,
    _encode_FNUserDiagnosticField,
} from '../EDIMSInformationObjects/FNUserDiagnosticField.ta.js';
export {
    FNUserDiagnosticField,
    _decode_FNUserDiagnosticField,
    _encode_FNUserDiagnosticField,
} from '../EDIMSInformationObjects/FNUserDiagnosticField.ta.js';

/* START_OF_SYMBOL_DEFINITION FNUserReasonCodeField */
/**
 * @summary FNUserReasonCodeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FNUserReasonCodeField ::= SEQUENCE {
 *   fn-user-basic-code  [0]  FNUserBasicCodeField,
 *   fn-user-diagnostic  [1]  FNUserDiagnosticField OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class FNUserReasonCodeField {
    constructor(
        /**
         * @summary `fn_user_basic_code`.
         * @public
         * @readonly
         */
        readonly fn_user_basic_code: FNUserBasicCodeField,
        /**
         * @summary `fn_user_diagnostic`.
         * @public
         * @readonly
         */
        readonly fn_user_diagnostic: OPTIONAL<FNUserDiagnosticField>
    ) {}

    /**
     * @summary Restructures an object into a FNUserReasonCodeField
     * @description
     *
     * This takes an `object` and converts it to a `FNUserReasonCodeField`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FNUserReasonCodeField`.
     * @returns {FNUserReasonCodeField}
     */
    public static _from_object(
        _o: { [_K in keyof FNUserReasonCodeField]: FNUserReasonCodeField[_K] }
    ): FNUserReasonCodeField {
        return new FNUserReasonCodeField(
            _o.fn_user_basic_code,
            _o.fn_user_diagnostic
        );
    }
}
/* END_OF_SYMBOL_DEFINITION FNUserReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_FNUserReasonCodeField */
/**
 * @summary The Leading Root Component Types of FNUserReasonCodeField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_FNUserReasonCodeField: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'fn-user-basic-code',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'fn-user-diagnostic',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_FNUserReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_FNUserReasonCodeField */
/**
 * @summary The Trailing Root Component Types of FNUserReasonCodeField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_FNUserReasonCodeField: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_FNUserReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_FNUserReasonCodeField */
/**
 * @summary The Extension Addition Component Types of FNUserReasonCodeField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_FNUserReasonCodeField: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_FNUserReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FNUserReasonCodeField */
let _cached_decoder_for_FNUserReasonCodeField: $.ASN1Decoder<FNUserReasonCodeField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FNUserReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _decode_FNUserReasonCodeField */
/**
 * @summary Decodes an ASN.1 element into a(n) FNUserReasonCodeField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FNUserReasonCodeField} The decoded data structure.
 */
export function _decode_FNUserReasonCodeField(el: _Element) {
    if (!_cached_decoder_for_FNUserReasonCodeField) {
        _cached_decoder_for_FNUserReasonCodeField = function (
            el: _Element
        ): FNUserReasonCodeField {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let fn_user_basic_code!: FNUserBasicCodeField;
            let fn_user_diagnostic: OPTIONAL<FNUserDiagnosticField>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'fn-user-basic-code': (_el: _Element): void => {
                    fn_user_basic_code = $._decode_implicit<FNUserBasicCodeField>(
                        () => _decode_FNUserBasicCodeField
                    )(_el);
                },
                'fn-user-diagnostic': (_el: _Element): void => {
                    fn_user_diagnostic = $._decode_implicit<FNUserDiagnosticField>(
                        () => _decode_FNUserDiagnosticField
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_FNUserReasonCodeField,
                _extension_additions_list_spec_for_FNUserReasonCodeField,
                _root_component_type_list_2_spec_for_FNUserReasonCodeField,
                undefined
            );
            return new FNUserReasonCodeField /* SEQUENCE_CONSTRUCTOR_CALL */(
                fn_user_basic_code,
                fn_user_diagnostic
            );
        };
    }
    return _cached_decoder_for_FNUserReasonCodeField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FNUserReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FNUserReasonCodeField */
let _cached_encoder_for_FNUserReasonCodeField: $.ASN1Encoder<FNUserReasonCodeField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FNUserReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _encode_FNUserReasonCodeField */
/**
 * @summary Encodes a(n) FNUserReasonCodeField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FNUserReasonCodeField, encoded as an ASN.1 Element.
 */
export function _encode_FNUserReasonCodeField(
    value: FNUserReasonCodeField,
    elGetter: $.ASN1Encoder<FNUserReasonCodeField>
) {
    if (!_cached_encoder_for_FNUserReasonCodeField) {
        _cached_encoder_for_FNUserReasonCodeField = function (
            value: FNUserReasonCodeField,
            elGetter: $.ASN1Encoder<FNUserReasonCodeField>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_FNUserBasicCodeField,
                            $.BER
                        )(value.fn_user_basic_code, $.BER),
                        /* IF_ABSENT  */ value.fn_user_diagnostic === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_FNUserDiagnosticField,
                                  $.BER
                              )(value.fn_user_diagnostic, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_FNUserReasonCodeField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FNUserReasonCodeField */

/* eslint-enable */

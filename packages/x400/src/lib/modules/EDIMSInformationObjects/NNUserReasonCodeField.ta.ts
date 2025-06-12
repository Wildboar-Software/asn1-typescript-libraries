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
    NNUserBasicCodeField,
    NNUserBasicCodeField_unspecified /* IMPORTED_LONG_NAMED_INTEGER */,
    unspecified /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUserBasicCodeField_syntax_error /* IMPORTED_LONG_NAMED_INTEGER */,
    syntax_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUserBasicCodeField_interchange_sender_unknown /* IMPORTED_LONG_NAMED_INTEGER */,
    interchange_sender_unknown /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUserBasicCodeField_interchange_recipient_unknown /* IMPORTED_LONG_NAMED_INTEGER */,
    interchange_recipient_unknown /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUserBasicCodeField_invalid_heading_field /* IMPORTED_LONG_NAMED_INTEGER */,
    invalid_heading_field /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUserBasicCodeField_invalid_bodypart_type /* IMPORTED_LONG_NAMED_INTEGER */,
    invalid_bodypart_type /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUserBasicCodeField_invalid_message_type /* IMPORTED_LONG_NAMED_INTEGER */,
    invalid_message_type /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUserBasicCodeField_functional_group_not_supported /* IMPORTED_LONG_NAMED_INTEGER */,
    functional_group_not_supported /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUserBasicCodeField_subscription_terminated /* IMPORTED_LONG_NAMED_INTEGER */,
    subscription_terminated /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUserBasicCodeField_no_bilateral_agreement /* IMPORTED_LONG_NAMED_INTEGER */,
    no_bilateral_agreement /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUserBasicCodeField_user_defined_reason /* IMPORTED_LONG_NAMED_INTEGER */,
    user_defined_reason /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_NNUserBasicCodeField,
    _encode_NNUserBasicCodeField,
} from '../EDIMSInformationObjects/NNUserBasicCodeField.ta.js';
export {
    NNUserBasicCodeField,
    NNUserBasicCodeField_unspecified /* IMPORTED_LONG_NAMED_INTEGER */,
    unspecified /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUserBasicCodeField_syntax_error /* IMPORTED_LONG_NAMED_INTEGER */,
    syntax_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUserBasicCodeField_interchange_sender_unknown /* IMPORTED_LONG_NAMED_INTEGER */,
    interchange_sender_unknown /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUserBasicCodeField_interchange_recipient_unknown /* IMPORTED_LONG_NAMED_INTEGER */,
    interchange_recipient_unknown /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUserBasicCodeField_invalid_heading_field /* IMPORTED_LONG_NAMED_INTEGER */,
    invalid_heading_field /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUserBasicCodeField_invalid_bodypart_type /* IMPORTED_LONG_NAMED_INTEGER */,
    invalid_bodypart_type /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUserBasicCodeField_invalid_message_type /* IMPORTED_LONG_NAMED_INTEGER */,
    invalid_message_type /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUserBasicCodeField_functional_group_not_supported /* IMPORTED_LONG_NAMED_INTEGER */,
    functional_group_not_supported /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUserBasicCodeField_subscription_terminated /* IMPORTED_LONG_NAMED_INTEGER */,
    subscription_terminated /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUserBasicCodeField_no_bilateral_agreement /* IMPORTED_LONG_NAMED_INTEGER */,
    no_bilateral_agreement /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNUserBasicCodeField_user_defined_reason /* IMPORTED_LONG_NAMED_INTEGER */,
    user_defined_reason /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_NNUserBasicCodeField,
    _encode_NNUserBasicCodeField,
} from '../EDIMSInformationObjects/NNUserBasicCodeField.ta.js';
import {
    NNUserDiagnosticField,
    NNUserDiagnosticField_compression_unsupported /* IMPORTED_LONG_NAMED_INTEGER */,
    compression_unsupported /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_NNUserDiagnosticField,
    _encode_NNUserDiagnosticField,
} from '../EDIMSInformationObjects/NNUserDiagnosticField.ta.js';
export {
    NNUserDiagnosticField,
    NNUserDiagnosticField_compression_unsupported /* IMPORTED_LONG_NAMED_INTEGER */,
    compression_unsupported /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_NNUserDiagnosticField,
    _encode_NNUserDiagnosticField,
} from '../EDIMSInformationObjects/NNUserDiagnosticField.ta.js';

/* START_OF_SYMBOL_DEFINITION NNUserReasonCodeField */
/**
 * @summary NNUserReasonCodeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NNUserReasonCodeField ::= SEQUENCE {
 *   nn-user-basic-code  [0]  NNUserBasicCodeField,
 *   nn-user-diagnostic  [1]  NNUserDiagnosticField OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class NNUserReasonCodeField {
    constructor(
        /**
         * @summary `nn_user_basic_code`.
         * @public
         * @readonly
         */
        readonly nn_user_basic_code: NNUserBasicCodeField,
        /**
         * @summary `nn_user_diagnostic`.
         * @public
         * @readonly
         */
        readonly nn_user_diagnostic: OPTIONAL<NNUserDiagnosticField>
    ) {}

    /**
     * @summary Restructures an object into a NNUserReasonCodeField
     * @description
     *
     * This takes an `object` and converts it to a `NNUserReasonCodeField`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NNUserReasonCodeField`.
     * @returns {NNUserReasonCodeField}
     */
    public static _from_object(
        _o: { [_K in keyof NNUserReasonCodeField]: NNUserReasonCodeField[_K] }
    ): NNUserReasonCodeField {
        return new NNUserReasonCodeField(
            _o.nn_user_basic_code,
            _o.nn_user_diagnostic
        );
    }
}
/* END_OF_SYMBOL_DEFINITION NNUserReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NNUserReasonCodeField */
/**
 * @summary The Leading Root Component Types of NNUserReasonCodeField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NNUserReasonCodeField: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'nn-user-basic-code',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'nn-user-diagnostic',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NNUserReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NNUserReasonCodeField */
/**
 * @summary The Trailing Root Component Types of NNUserReasonCodeField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NNUserReasonCodeField: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NNUserReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NNUserReasonCodeField */
/**
 * @summary The Extension Addition Component Types of NNUserReasonCodeField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NNUserReasonCodeField: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NNUserReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NNUserReasonCodeField */
let _cached_decoder_for_NNUserReasonCodeField: $.ASN1Decoder<NNUserReasonCodeField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NNUserReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _decode_NNUserReasonCodeField */
/**
 * @summary Decodes an ASN.1 element into a(n) NNUserReasonCodeField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NNUserReasonCodeField} The decoded data structure.
 */
export function _decode_NNUserReasonCodeField(el: _Element) {
    if (!_cached_decoder_for_NNUserReasonCodeField) {
        _cached_decoder_for_NNUserReasonCodeField = function (
            el: _Element
        ): NNUserReasonCodeField {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let nn_user_basic_code!: NNUserBasicCodeField;
            let nn_user_diagnostic: OPTIONAL<NNUserDiagnosticField>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'nn-user-basic-code': (_el: _Element): void => {
                    nn_user_basic_code = $._decode_implicit<NNUserBasicCodeField>(
                        () => _decode_NNUserBasicCodeField
                    )(_el);
                },
                'nn-user-diagnostic': (_el: _Element): void => {
                    nn_user_diagnostic = $._decode_implicit<NNUserDiagnosticField>(
                        () => _decode_NNUserDiagnosticField
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NNUserReasonCodeField,
                _extension_additions_list_spec_for_NNUserReasonCodeField,
                _root_component_type_list_2_spec_for_NNUserReasonCodeField,
                undefined
            );
            return new NNUserReasonCodeField /* SEQUENCE_CONSTRUCTOR_CALL */(
                nn_user_basic_code,
                nn_user_diagnostic
            );
        };
    }
    return _cached_decoder_for_NNUserReasonCodeField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NNUserReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NNUserReasonCodeField */
let _cached_encoder_for_NNUserReasonCodeField: $.ASN1Encoder<NNUserReasonCodeField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NNUserReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _encode_NNUserReasonCodeField */
/**
 * @summary Encodes a(n) NNUserReasonCodeField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NNUserReasonCodeField, encoded as an ASN.1 Element.
 */
export function _encode_NNUserReasonCodeField(
    value: NNUserReasonCodeField,
    elGetter: $.ASN1Encoder<NNUserReasonCodeField>
) {
    if (!_cached_encoder_for_NNUserReasonCodeField) {
        _cached_encoder_for_NNUserReasonCodeField = function (
            value: NNUserReasonCodeField,
            elGetter: $.ASN1Encoder<NNUserReasonCodeField>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_NNUserBasicCodeField,
                            $.BER
                        )(value.nn_user_basic_code, $.BER),
                        /* IF_ABSENT  */ value.nn_user_diagnostic === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_NNUserDiagnosticField,
                                  $.BER
                              )(value.nn_user_diagnostic, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_NNUserReasonCodeField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NNUserReasonCodeField */

/* eslint-enable */

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
    NNPDAUBasicCodeField,
    NNPDAUBasicCodeField_unspecified /* IMPORTED_LONG_NAMED_INTEGER */,
    unspecified /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNPDAUBasicCodeField_undeliverable_mail /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNPDAUBasicCodeField_physical_rendition_not_performed /* IMPORTED_LONG_NAMED_INTEGER */,
    physical_rendition_not_performed /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_NNPDAUBasicCodeField,
    _encode_NNPDAUBasicCodeField,
} from '../EDIMSInformationObjects/NNPDAUBasicCodeField.ta';
export {
    NNPDAUBasicCodeField,
    NNPDAUBasicCodeField_unspecified /* IMPORTED_LONG_NAMED_INTEGER */,
    unspecified /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNPDAUBasicCodeField_undeliverable_mail /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNPDAUBasicCodeField_physical_rendition_not_performed /* IMPORTED_LONG_NAMED_INTEGER */,
    physical_rendition_not_performed /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_NNPDAUBasicCodeField,
    _encode_NNPDAUBasicCodeField,
} from '../EDIMSInformationObjects/NNPDAUBasicCodeField.ta';
import {
    NNPDAUDiagnosticField,
    NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_address_incorrect /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_physical_delivery_address_incorrect /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_office_incorrect_or_invalid /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_physical_delivery_office_incorrect_or_invalid /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_address_incomplete /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_physical_delivery_address_incomplete /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNPDAUDiagnosticField_undeliverable_mail_recipient_unknown /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_recipient_unknown /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNPDAUDiagnosticField_undeliverable_mail_recipient_deceased /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_recipient_deceased /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNPDAUDiagnosticField_undeliverable_mail_organization_expired /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_organization_expired /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNPDAUDiagnosticField_undeliverable_mail_recipient_refused_to_accept /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_recipient_refused_to_accept /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNPDAUDiagnosticField_undeliverable_mail_recipient_did_not_claim /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_recipient_did_not_claim /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_address_permanently /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_recipient_changed_address_permanently /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_address_temporarily /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_recipient_changed_address_temporarily /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_temporary_address /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_recipient_changed_temporary_address /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNPDAUDiagnosticField_undeliverable_mail_new_address_unknown /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_new_address_unknown /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNPDAUDiagnosticField_undeliverable_mail_recipient_did_not_want_forwarding /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_recipient_did_not_want_forwarding /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNPDAUDiagnosticField_undeliverable_mail_originator_prohibited_forwarding /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_originator_prohibited_forwarding /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNPDAUDiagnosticField_physical_rendition_attributes_not_supported /* IMPORTED_LONG_NAMED_INTEGER */,
    physical_rendition_attributes_not_supported /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_NNPDAUDiagnosticField,
    _encode_NNPDAUDiagnosticField,
} from '../EDIMSInformationObjects/NNPDAUDiagnosticField.ta';
export {
    NNPDAUDiagnosticField,
    NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_address_incorrect /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_physical_delivery_address_incorrect /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_office_incorrect_or_invalid /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_physical_delivery_office_incorrect_or_invalid /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_address_incomplete /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_physical_delivery_address_incomplete /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNPDAUDiagnosticField_undeliverable_mail_recipient_unknown /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_recipient_unknown /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNPDAUDiagnosticField_undeliverable_mail_recipient_deceased /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_recipient_deceased /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNPDAUDiagnosticField_undeliverable_mail_organization_expired /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_organization_expired /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNPDAUDiagnosticField_undeliverable_mail_recipient_refused_to_accept /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_recipient_refused_to_accept /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNPDAUDiagnosticField_undeliverable_mail_recipient_did_not_claim /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_recipient_did_not_claim /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_address_permanently /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_recipient_changed_address_permanently /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_address_temporarily /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_recipient_changed_address_temporarily /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_temporary_address /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_recipient_changed_temporary_address /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNPDAUDiagnosticField_undeliverable_mail_new_address_unknown /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_new_address_unknown /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNPDAUDiagnosticField_undeliverable_mail_recipient_did_not_want_forwarding /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_recipient_did_not_want_forwarding /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNPDAUDiagnosticField_undeliverable_mail_originator_prohibited_forwarding /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_originator_prohibited_forwarding /* IMPORTED_SHORT_NAMED_INTEGER */,
    NNPDAUDiagnosticField_physical_rendition_attributes_not_supported /* IMPORTED_LONG_NAMED_INTEGER */,
    physical_rendition_attributes_not_supported /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_NNPDAUDiagnosticField,
    _encode_NNPDAUDiagnosticField,
} from '../EDIMSInformationObjects/NNPDAUDiagnosticField.ta';

/* START_OF_SYMBOL_DEFINITION NNPDAUReasonCodeField */
/**
 * @summary NNPDAUReasonCodeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NNPDAUReasonCodeField ::= SEQUENCE {
 *   nn-pdau-basic-code  [0]  NNPDAUBasicCodeField,
 *   nn-pdau-diagnostic  [1]  NNPDAUDiagnosticField OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class NNPDAUReasonCodeField {
    constructor(
        /**
         * @summary `nn_pdau_basic_code`.
         * @public
         * @readonly
         */
        readonly nn_pdau_basic_code: NNPDAUBasicCodeField,
        /**
         * @summary `nn_pdau_diagnostic`.
         * @public
         * @readonly
         */
        readonly nn_pdau_diagnostic: OPTIONAL<NNPDAUDiagnosticField>
    ) {}

    /**
     * @summary Restructures an object into a NNPDAUReasonCodeField
     * @description
     *
     * This takes an `object` and converts it to a `NNPDAUReasonCodeField`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NNPDAUReasonCodeField`.
     * @returns {NNPDAUReasonCodeField}
     */
    public static _from_object(
        _o: { [_K in keyof NNPDAUReasonCodeField]: NNPDAUReasonCodeField[_K] }
    ): NNPDAUReasonCodeField {
        return new NNPDAUReasonCodeField(
            _o.nn_pdau_basic_code,
            _o.nn_pdau_diagnostic
        );
    }
}
/* END_OF_SYMBOL_DEFINITION NNPDAUReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NNPDAUReasonCodeField */
/**
 * @summary The Leading Root Component Types of NNPDAUReasonCodeField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NNPDAUReasonCodeField: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'nn-pdau-basic-code',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'nn-pdau-diagnostic',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NNPDAUReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NNPDAUReasonCodeField */
/**
 * @summary The Trailing Root Component Types of NNPDAUReasonCodeField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NNPDAUReasonCodeField: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NNPDAUReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NNPDAUReasonCodeField */
/**
 * @summary The Extension Addition Component Types of NNPDAUReasonCodeField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NNPDAUReasonCodeField: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NNPDAUReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NNPDAUReasonCodeField */
let _cached_decoder_for_NNPDAUReasonCodeField: $.ASN1Decoder<NNPDAUReasonCodeField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NNPDAUReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _decode_NNPDAUReasonCodeField */
/**
 * @summary Decodes an ASN.1 element into a(n) NNPDAUReasonCodeField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NNPDAUReasonCodeField} The decoded data structure.
 */
export function _decode_NNPDAUReasonCodeField(el: _Element) {
    if (!_cached_decoder_for_NNPDAUReasonCodeField) {
        _cached_decoder_for_NNPDAUReasonCodeField = function (
            el: _Element
        ): NNPDAUReasonCodeField {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let nn_pdau_basic_code!: NNPDAUBasicCodeField;
            let nn_pdau_diagnostic: OPTIONAL<NNPDAUDiagnosticField>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'nn-pdau-basic-code': (_el: _Element): void => {
                    nn_pdau_basic_code = $._decode_implicit<NNPDAUBasicCodeField>(
                        () => _decode_NNPDAUBasicCodeField
                    )(_el);
                },
                'nn-pdau-diagnostic': (_el: _Element): void => {
                    nn_pdau_diagnostic = $._decode_implicit<NNPDAUDiagnosticField>(
                        () => _decode_NNPDAUDiagnosticField
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NNPDAUReasonCodeField,
                _extension_additions_list_spec_for_NNPDAUReasonCodeField,
                _root_component_type_list_2_spec_for_NNPDAUReasonCodeField,
                undefined
            );
            return new NNPDAUReasonCodeField /* SEQUENCE_CONSTRUCTOR_CALL */(
                nn_pdau_basic_code,
                nn_pdau_diagnostic
            );
        };
    }
    return _cached_decoder_for_NNPDAUReasonCodeField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NNPDAUReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NNPDAUReasonCodeField */
let _cached_encoder_for_NNPDAUReasonCodeField: $.ASN1Encoder<NNPDAUReasonCodeField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NNPDAUReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _encode_NNPDAUReasonCodeField */
/**
 * @summary Encodes a(n) NNPDAUReasonCodeField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NNPDAUReasonCodeField, encoded as an ASN.1 Element.
 */
export function _encode_NNPDAUReasonCodeField(
    value: NNPDAUReasonCodeField,
    elGetter: $.ASN1Encoder<NNPDAUReasonCodeField>
) {
    if (!_cached_encoder_for_NNPDAUReasonCodeField) {
        _cached_encoder_for_NNPDAUReasonCodeField = function (
            value: NNPDAUReasonCodeField,
            elGetter: $.ASN1Encoder<NNPDAUReasonCodeField>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_NNPDAUBasicCodeField,
                            $.BER
                        )(value.nn_pdau_basic_code, $.BER),
                        /* IF_ABSENT  */ value.nn_pdau_diagnostic === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_NNPDAUDiagnosticField,
                                  $.BER
                              )(value.nn_pdau_diagnostic, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_NNPDAUReasonCodeField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NNPDAUReasonCodeField */

/* eslint-enable */

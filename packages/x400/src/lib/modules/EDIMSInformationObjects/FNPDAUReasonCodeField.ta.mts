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
    FNPDAUBasicCodeField,
    _decode_FNPDAUBasicCodeField,
    _encode_FNPDAUBasicCodeField,
} from '../EDIMSInformationObjects/FNPDAUBasicCodeField.ta.mjs';
import {
    FNPDAUDiagnosticField,
    _decode_FNPDAUDiagnosticField,
    _encode_FNPDAUDiagnosticField,
} from '../EDIMSInformationObjects/FNPDAUDiagnosticField.ta.mjs';
/**
 * @summary FNPDAUReasonCodeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FNPDAUReasonCodeField ::= SEQUENCE {
 *   fn-pdau-basic-code  [0]  FNPDAUBasicCodeField,
 *   fn-pdau-diagnostic  [1]  FNPDAUDiagnosticField OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class FNPDAUReasonCodeField {
    constructor(
        /**
         * @summary `fn_pdau_basic_code`.
         * @public
         * @readonly
         */
        readonly fn_pdau_basic_code: FNPDAUBasicCodeField,
        /**
         * @summary `fn_pdau_diagnostic`.
         * @public
         * @readonly
         */
        readonly fn_pdau_diagnostic: OPTIONAL<FNPDAUDiagnosticField>
    ) {}

    /**
     * @summary Restructures an object into a FNPDAUReasonCodeField
     * @description
     *
     * This takes an `object` and converts it to a `FNPDAUReasonCodeField`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FNPDAUReasonCodeField`.
     * @returns {FNPDAUReasonCodeField}
     */
    public static _from_object(
        _o: { [_K in keyof FNPDAUReasonCodeField]: FNPDAUReasonCodeField[_K] }
    ): FNPDAUReasonCodeField {
        return new FNPDAUReasonCodeField(
            _o.fn_pdau_basic_code,
            _o.fn_pdau_diagnostic
        );
    }
}

/**
 * @summary The Leading Root Component Types of FNPDAUReasonCodeField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_FNPDAUReasonCodeField: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'fn-pdau-basic-code',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'fn-pdau-diagnostic',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];

/**
 * @summary The Trailing Root Component Types of FNPDAUReasonCodeField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_FNPDAUReasonCodeField: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of FNPDAUReasonCodeField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_FNPDAUReasonCodeField: $.ComponentSpec[] = [];

let _cached_decoder_for_FNPDAUReasonCodeField: $.ASN1Decoder<FNPDAUReasonCodeField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FNPDAUReasonCodeField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FNPDAUReasonCodeField} The decoded data structure.
 */
export function _decode_FNPDAUReasonCodeField(el: _Element) {
    if (!_cached_decoder_for_FNPDAUReasonCodeField) {
        _cached_decoder_for_FNPDAUReasonCodeField = function (
            el: _Element
        ): FNPDAUReasonCodeField {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let fn_pdau_basic_code!: FNPDAUBasicCodeField;
            let fn_pdau_diagnostic: OPTIONAL<FNPDAUDiagnosticField>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'fn-pdau-basic-code': (_el: _Element): void => {
                    fn_pdau_basic_code = $._decode_implicit<FNPDAUBasicCodeField>(
                        () => _decode_FNPDAUBasicCodeField
                    )(_el);
                },
                'fn-pdau-diagnostic': (_el: _Element): void => {
                    fn_pdau_diagnostic = $._decode_implicit<FNPDAUDiagnosticField>(
                        () => _decode_FNPDAUDiagnosticField
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_FNPDAUReasonCodeField,
                _extension_additions_list_spec_for_FNPDAUReasonCodeField,
                _root_component_type_list_2_spec_for_FNPDAUReasonCodeField,
                undefined
            );
            return new FNPDAUReasonCodeField /* SEQUENCE_CONSTRUCTOR_CALL */(
                fn_pdau_basic_code,
                fn_pdau_diagnostic
            );
        };
    }
    return _cached_decoder_for_FNPDAUReasonCodeField(el);
}

let _cached_encoder_for_FNPDAUReasonCodeField: $.ASN1Encoder<FNPDAUReasonCodeField> | null = null;

/**
 * @summary Encodes a(n) FNPDAUReasonCodeField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FNPDAUReasonCodeField, encoded as an ASN.1 Element.
 */
export function _encode_FNPDAUReasonCodeField(
    value: FNPDAUReasonCodeField,
    elGetter: $.ASN1Encoder<FNPDAUReasonCodeField>
) {
    if (!_cached_encoder_for_FNPDAUReasonCodeField) {
        _cached_encoder_for_FNPDAUReasonCodeField = function (
            value: FNPDAUReasonCodeField        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_FNPDAUBasicCodeField,
                            $.BER
                        )(value.fn_pdau_basic_code, $.BER),
                        /* IF_ABSENT  */ value.fn_pdau_diagnostic === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_FNPDAUDiagnosticField,
                                  $.BER
                              )(value.fn_pdau_diagnostic, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_FNPDAUReasonCodeField(value, elGetter);
}


/* eslint-enable */

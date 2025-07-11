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
    NNPDAUBasicCodeField,
    _decode_NNPDAUBasicCodeField,
    _encode_NNPDAUBasicCodeField,
} from '../EDIMSInformationObjects/NNPDAUBasicCodeField.ta.mjs';
import {
    NNPDAUDiagnosticField,
    _decode_NNPDAUDiagnosticField,
    _encode_NNPDAUDiagnosticField,
} from '../EDIMSInformationObjects/NNPDAUDiagnosticField.ta.mjs';
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
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'nn-pdau-diagnostic',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of NNPDAUReasonCodeField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NNPDAUReasonCodeField: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of NNPDAUReasonCodeField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NNPDAUReasonCodeField: $.ComponentSpec[] = [];

let _cached_decoder_for_NNPDAUReasonCodeField: $.ASN1Decoder<NNPDAUReasonCodeField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NNPDAUReasonCodeField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NNPDAUReasonCodeField} The decoded data structure.
 */
export function _decode_NNPDAUReasonCodeField(el: _Element): NNPDAUReasonCodeField {
    if (!_cached_decoder_for_NNPDAUReasonCodeField) {
        _cached_decoder_for_NNPDAUReasonCodeField = function (
            el: _Element
        ): NNPDAUReasonCodeField {
            let nn_pdau_basic_code!: NNPDAUBasicCodeField;
            let nn_pdau_diagnostic: OPTIONAL<NNPDAUDiagnosticField>;
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
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NNPDAUReasonCodeField,
                _extension_additions_list_spec_for_NNPDAUReasonCodeField,
                _root_component_type_list_2_spec_for_NNPDAUReasonCodeField,
                undefined
            );
            return new NNPDAUReasonCodeField (
                nn_pdau_basic_code,
                nn_pdau_diagnostic
            );
        };
    }
    return _cached_decoder_for_NNPDAUReasonCodeField(el);
}

let _cached_encoder_for_NNPDAUReasonCodeField: $.ASN1Encoder<NNPDAUReasonCodeField> | null = null;

/**
 * @summary Encodes a(n) NNPDAUReasonCodeField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NNPDAUReasonCodeField, encoded as an ASN.1 Element.
 */
export function _encode_NNPDAUReasonCodeField(
    value: NNPDAUReasonCodeField,
    elGetter: $.ASN1Encoder<NNPDAUReasonCodeField>
): _Element {
    if (!_cached_encoder_for_NNPDAUReasonCodeField) {
        _cached_encoder_for_NNPDAUReasonCodeField = function (
            value: NNPDAUReasonCodeField        ): _Element {
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


/* eslint-enable */

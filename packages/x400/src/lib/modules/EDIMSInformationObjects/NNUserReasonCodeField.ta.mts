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
    NNUserBasicCodeField,
    _decode_NNUserBasicCodeField,
    _encode_NNUserBasicCodeField,
} from '../EDIMSInformationObjects/NNUserBasicCodeField.ta.mjs';
import {
    NNUserDiagnosticField,
    _decode_NNUserDiagnosticField,
    _encode_NNUserDiagnosticField,
} from '../EDIMSInformationObjects/NNUserDiagnosticField.ta.mjs';
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
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'nn-user-diagnostic',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of NNUserReasonCodeField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NNUserReasonCodeField: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of NNUserReasonCodeField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NNUserReasonCodeField: $.ComponentSpec[] = [];

let _cached_decoder_for_NNUserReasonCodeField: $.ASN1Decoder<NNUserReasonCodeField> | null = null;

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
            let nn_user_basic_code!: NNUserBasicCodeField;
            let nn_user_diagnostic: OPTIONAL<NNUserDiagnosticField>;
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
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NNUserReasonCodeField,
                _extension_additions_list_spec_for_NNUserReasonCodeField,
                _root_component_type_list_2_spec_for_NNUserReasonCodeField,
                undefined
            );
            return new NNUserReasonCodeField (
                nn_user_basic_code,
                nn_user_diagnostic
            );
        };
    }
    return _cached_decoder_for_NNUserReasonCodeField(el);
}

let _cached_encoder_for_NNUserReasonCodeField: $.ASN1Encoder<NNUserReasonCodeField> | null = null;

/**
 * @summary Encodes a(n) NNUserReasonCodeField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NNUserReasonCodeField, encoded as an ASN.1 Element.
 */
export function _encode_NNUserReasonCodeField(
    value: NNUserReasonCodeField,
    elGetter: $.ASN1Encoder<NNUserReasonCodeField>
) {
    if (!_cached_encoder_for_NNUserReasonCodeField) {
        _cached_encoder_for_NNUserReasonCodeField = function (
            value: NNUserReasonCodeField        ): _Element {
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


/* eslint-enable */

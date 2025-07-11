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
    FNUserBasicCodeField,
    _decode_FNUserBasicCodeField,
    _encode_FNUserBasicCodeField,
} from '../EDIMSInformationObjects/FNUserBasicCodeField.ta.mjs';
import {
    FNUserDiagnosticField,
    _decode_FNUserDiagnosticField,
    _encode_FNUserDiagnosticField,
} from '../EDIMSInformationObjects/FNUserDiagnosticField.ta.mjs';
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
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'fn-user-diagnostic',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of FNUserReasonCodeField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_FNUserReasonCodeField: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of FNUserReasonCodeField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_FNUserReasonCodeField: $.ComponentSpec[] = [];

let _cached_decoder_for_FNUserReasonCodeField: $.ASN1Decoder<FNUserReasonCodeField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FNUserReasonCodeField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FNUserReasonCodeField} The decoded data structure.
 */
export function _decode_FNUserReasonCodeField(el: _Element): FNUserReasonCodeField {
    if (!_cached_decoder_for_FNUserReasonCodeField) {
        _cached_decoder_for_FNUserReasonCodeField = function (
            el: _Element
        ): FNUserReasonCodeField {
            let fn_user_basic_code!: FNUserBasicCodeField;
            let fn_user_diagnostic: OPTIONAL<FNUserDiagnosticField>;
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
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_FNUserReasonCodeField,
                _extension_additions_list_spec_for_FNUserReasonCodeField,
                _root_component_type_list_2_spec_for_FNUserReasonCodeField,
                undefined
            );
            return new FNUserReasonCodeField (
                fn_user_basic_code,
                fn_user_diagnostic
            );
        };
    }
    return _cached_decoder_for_FNUserReasonCodeField(el);
}

let _cached_encoder_for_FNUserReasonCodeField: $.ASN1Encoder<FNUserReasonCodeField> | null = null;

/**
 * @summary Encodes a(n) FNUserReasonCodeField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FNUserReasonCodeField, encoded as an ASN.1 Element.
 */
export function _encode_FNUserReasonCodeField(
    value: FNUserReasonCodeField,
    elGetter: $.ASN1Encoder<FNUserReasonCodeField>
): _Element {
    if (!_cached_encoder_for_FNUserReasonCodeField) {
        _cached_encoder_for_FNUserReasonCodeField = function (
            value: FNUserReasonCodeField        ): _Element {
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


/* eslint-enable */

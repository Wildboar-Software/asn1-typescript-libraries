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
    NNUAMSBasicCodeField,
    _decode_NNUAMSBasicCodeField,
    _encode_NNUAMSBasicCodeField,
} from '../EDIMSInformationObjects/NNUAMSBasicCodeField.ta.mjs';
import {
    NNUAMSDiagnosticField,
    _decode_NNUAMSDiagnosticField,
    _encode_NNUAMSDiagnosticField,
} from '../EDIMSInformationObjects/NNUAMSDiagnosticField.ta.mjs';
/**
 * @summary NNUAMSReasonCodeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NNUAMSReasonCodeField ::= SEQUENCE {
 *   nn-ua-ms-basic-code  [0]  NNUAMSBasicCodeField,
 *   nn-ua-ms-diagnostic  [1]  NNUAMSDiagnosticField OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class NNUAMSReasonCodeField {
    constructor(
        /**
         * @summary `nn_ua_ms_basic_code`.
         * @public
         * @readonly
         */
        readonly nn_ua_ms_basic_code: NNUAMSBasicCodeField,
        /**
         * @summary `nn_ua_ms_diagnostic`.
         * @public
         * @readonly
         */
        readonly nn_ua_ms_diagnostic: OPTIONAL<NNUAMSDiagnosticField>
    ) {}

    /**
     * @summary Restructures an object into a NNUAMSReasonCodeField
     * @description
     *
     * This takes an `object` and converts it to a `NNUAMSReasonCodeField`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NNUAMSReasonCodeField`.
     * @returns {NNUAMSReasonCodeField}
     */
    public static _from_object(
        _o: { [_K in keyof NNUAMSReasonCodeField]: NNUAMSReasonCodeField[_K] }
    ): NNUAMSReasonCodeField {
        return new NNUAMSReasonCodeField(
            _o.nn_ua_ms_basic_code,
            _o.nn_ua_ms_diagnostic
        );
    }
}

/**
 * @summary The Leading Root Component Types of NNUAMSReasonCodeField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NNUAMSReasonCodeField: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'nn-ua-ms-basic-code',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'nn-ua-ms-diagnostic',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of NNUAMSReasonCodeField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NNUAMSReasonCodeField: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of NNUAMSReasonCodeField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NNUAMSReasonCodeField: $.ComponentSpec[] = [];

let _cached_decoder_for_NNUAMSReasonCodeField: $.ASN1Decoder<NNUAMSReasonCodeField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NNUAMSReasonCodeField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NNUAMSReasonCodeField} The decoded data structure.
 */
export function _decode_NNUAMSReasonCodeField(el: _Element): NNUAMSReasonCodeField {
    if (!_cached_decoder_for_NNUAMSReasonCodeField) {
        _cached_decoder_for_NNUAMSReasonCodeField = function (
            el: _Element
        ): NNUAMSReasonCodeField {
            let nn_ua_ms_basic_code!: NNUAMSBasicCodeField;
            let nn_ua_ms_diagnostic: OPTIONAL<NNUAMSDiagnosticField>;
            const callbacks: $.DecodingMap = {
                'nn-ua-ms-basic-code': (_el: _Element): void => {
                    nn_ua_ms_basic_code = $._decode_implicit<NNUAMSBasicCodeField>(
                        () => _decode_NNUAMSBasicCodeField
                    )(_el);
                },
                'nn-ua-ms-diagnostic': (_el: _Element): void => {
                    nn_ua_ms_diagnostic = $._decode_implicit<NNUAMSDiagnosticField>(
                        () => _decode_NNUAMSDiagnosticField
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NNUAMSReasonCodeField,
                _extension_additions_list_spec_for_NNUAMSReasonCodeField,
                _root_component_type_list_2_spec_for_NNUAMSReasonCodeField,
                undefined
            );
            return new NNUAMSReasonCodeField (
                nn_ua_ms_basic_code,
                nn_ua_ms_diagnostic
            );
        };
    }
    return _cached_decoder_for_NNUAMSReasonCodeField(el);
}

let _cached_encoder_for_NNUAMSReasonCodeField: $.ASN1Encoder<NNUAMSReasonCodeField> | null = null;

/**
 * @summary Encodes a(n) NNUAMSReasonCodeField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NNUAMSReasonCodeField, encoded as an ASN.1 Element.
 */
export function _encode_NNUAMSReasonCodeField(
    value: NNUAMSReasonCodeField,
    elGetter: $.ASN1Encoder<NNUAMSReasonCodeField>
): _Element {
    if (!_cached_encoder_for_NNUAMSReasonCodeField) {
        _cached_encoder_for_NNUAMSReasonCodeField = function (
            value: NNUAMSReasonCodeField        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_NNUAMSBasicCodeField,
                            $.BER
                        )(value.nn_ua_ms_basic_code, $.BER),
                        /* IF_ABSENT  */ value.nn_ua_ms_diagnostic === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_NNUAMSDiagnosticField,
                                  $.BER
                              )(value.nn_ua_ms_diagnostic, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_NNUAMSReasonCodeField(value, elGetter);
}


/* eslint-enable */

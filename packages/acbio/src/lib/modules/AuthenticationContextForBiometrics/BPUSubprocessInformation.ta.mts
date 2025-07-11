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
    FunctionDefinition,
    _decode_FunctionDefinition,
    _encode_FunctionDefinition,
} from '../AuthenticationContextForBiometrics/FunctionDefinition.ta.mjs';
import {
    QualityEvaluation,
    _decode_QualityEvaluation,
    _encode_QualityEvaluation,
} from '../AuthenticationContextForBiometrics/QualityEvaluation.ta.mjs';

/**
 * @summary BPUSubprocessInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BPUSubprocessInformation ::= SEQUENCE {
 *     functionDefinition  FunctionDefinition,
 *     qualityEvaluation   QualityEvaluation OPTIONAL }
 * ```
 *
 */
export class BPUSubprocessInformation {
    constructor(
        /**
         * @summary `functionDefinition`.
         * @public
         * @readonly
         */
        readonly functionDefinition: FunctionDefinition,
        /**
         * @summary `qualityEvaluation`.
         * @public
         * @readonly
         */
        readonly qualityEvaluation: OPTIONAL<QualityEvaluation>
    ) {}

    /**
     * @summary Restructures an object into a BPUSubprocessInformation
     * @description
     *
     * This takes an `object` and converts it to a `BPUSubprocessInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BPUSubprocessInformation`.
     * @returns {BPUSubprocessInformation}
     */
    public static _from_object(
        _o: {
            [_K in keyof BPUSubprocessInformation]: BPUSubprocessInformation[_K];
        }
    ): BPUSubprocessInformation {
        return new BPUSubprocessInformation(
            _o.functionDefinition,
            _o.qualityEvaluation
        );
    }
}


/**
 * @summary The Leading Root Component Types of BPUSubprocessInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BPUSubprocessInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'functionDefinition',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'qualityEvaluation',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];


/**
 * @summary The Trailing Root Component Types of BPUSubprocessInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BPUSubprocessInformation: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BPUSubprocessInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BPUSubprocessInformation: $.ComponentSpec[] = [];


let _cached_decoder_for_BPUSubprocessInformation: $.ASN1Decoder<BPUSubprocessInformation> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BPUSubprocessInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BPUSubprocessInformation} The decoded data structure.
 */
export function _decode_BPUSubprocessInformation(el: _Element): BPUSubprocessInformation {
    if (!_cached_decoder_for_BPUSubprocessInformation) {
        _cached_decoder_for_BPUSubprocessInformation = function (
            el: _Element
        ): BPUSubprocessInformation {
            let functionDefinition!: FunctionDefinition;
            let qualityEvaluation: OPTIONAL<QualityEvaluation>;
            const callbacks: $.DecodingMap = {
                functionDefinition: (_el: _Element): void => {
                    functionDefinition = _decode_FunctionDefinition(_el);
                },
                qualityEvaluation: (_el: _Element): void => {
                    qualityEvaluation = _decode_QualityEvaluation(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BPUSubprocessInformation,
                _extension_additions_list_spec_for_BPUSubprocessInformation,
                _root_component_type_list_2_spec_for_BPUSubprocessInformation,
                undefined
            );
            return new BPUSubprocessInformation (
                functionDefinition,
                qualityEvaluation
            );
        };
    }
    return _cached_decoder_for_BPUSubprocessInformation(el);
}


let _cached_encoder_for_BPUSubprocessInformation: $.ASN1Encoder<BPUSubprocessInformation> | null = null;


/**
 * @summary Encodes a(n) BPUSubprocessInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BPUSubprocessInformation, encoded as an ASN.1 Element.
 */
export function _encode_BPUSubprocessInformation(
    value: BPUSubprocessInformation,
    elGetter: $.ASN1Encoder<BPUSubprocessInformation>
): _Element {
    if (!_cached_encoder_for_BPUSubprocessInformation) {
        _cached_encoder_for_BPUSubprocessInformation = function (
            value: BPUSubprocessInformation        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_FunctionDefinition(
                            value.functionDefinition,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.qualityEvaluation === undefined
                            ? undefined
                            : _encode_QualityEvaluation(
                                  value.qualityEvaluation,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_BPUSubprocessInformation(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */
import {
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
    TestPatternSequence,
    _decode_TestPatternSequence,
    _encode_TestPatternSequence,
} from '../TestCategories-ASN1Module/TestPatternSequence.ta.mjs';
import {
    LoopbackError,
    _decode_LoopbackError,
    _encode_LoopbackError,
} from '../TestCategories-ASN1Module/LoopbackError.ta.mjs';
/**
 * @summary LoopbackTestResult_passed
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LoopbackTestResult-passed ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class LoopbackTestResult_passed {
    constructor(
        /**
         * @summary `loopbackDataReceived`.
         * @public
         * @readonly
         */
        readonly loopbackDataReceived: TestPatternSequence,
        /**
         * @summary `loopbackErrorReceived`.
         * @public
         * @readonly
         */
        readonly loopbackErrorReceived: LoopbackError
    ) {}

    /**
     * @summary Restructures an object into a LoopbackTestResult_passed
     * @description
     *
     * This takes an `object` and converts it to a `LoopbackTestResult_passed`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LoopbackTestResult_passed`.
     * @returns {LoopbackTestResult_passed}
     */
    public static _from_object(
        _o: {
            [_K in keyof LoopbackTestResult_passed]: LoopbackTestResult_passed[_K];
        }
    ): LoopbackTestResult_passed {
        return new LoopbackTestResult_passed(
            _o.loopbackDataReceived,
            _o.loopbackErrorReceived
        );
    }
}

/**
 * @summary The Leading Root Component Types of LoopbackTestResult_passed
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_LoopbackTestResult_passed: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'loopbackDataReceived',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'loopbackErrorReceived',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];

/**
 * @summary The Trailing Root Component Types of LoopbackTestResult_passed
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_LoopbackTestResult_passed: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of LoopbackTestResult_passed
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_LoopbackTestResult_passed: $.ComponentSpec[] = [];

let _cached_decoder_for_LoopbackTestResult_passed: $.ASN1Decoder<LoopbackTestResult_passed> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LoopbackTestResult_passed
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LoopbackTestResult_passed} The decoded data structure.
 */
export function _decode_LoopbackTestResult_passed(el: _Element) {
    if (!_cached_decoder_for_LoopbackTestResult_passed) {
        _cached_decoder_for_LoopbackTestResult_passed = function (
            el: _Element
        ): LoopbackTestResult_passed {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'LoopbackTestResult-passed contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'loopbackDataReceived';
            sequence[1].name = 'loopbackErrorReceived';
            let loopbackDataReceived!: TestPatternSequence;
            let loopbackErrorReceived!: LoopbackError;
            loopbackDataReceived = _decode_TestPatternSequence(sequence[0]);
            loopbackErrorReceived = _decode_LoopbackError(sequence[1]);
            return new LoopbackTestResult_passed(
                loopbackDataReceived,
                loopbackErrorReceived
            );
        };
    }
    return _cached_decoder_for_LoopbackTestResult_passed(el);
}

let _cached_encoder_for_LoopbackTestResult_passed: $.ASN1Encoder<LoopbackTestResult_passed> | null = null;

/**
 * @summary Encodes a(n) LoopbackTestResult_passed into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LoopbackTestResult_passed, encoded as an ASN.1 Element.
 */
export function _encode_LoopbackTestResult_passed(
    value: LoopbackTestResult_passed,
    elGetter: $.ASN1Encoder<LoopbackTestResult_passed>
) {
    if (!_cached_encoder_for_LoopbackTestResult_passed) {
        _cached_encoder_for_LoopbackTestResult_passed = function (
            value: LoopbackTestResult_passed        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_TestPatternSequence(
                            value.loopbackDataReceived,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_LoopbackError(
                            value.loopbackErrorReceived,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_LoopbackTestResult_passed(value, elGetter);
}


/* eslint-enable */

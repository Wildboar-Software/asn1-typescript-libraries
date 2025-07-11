/* eslint-disable */
import {
    NULL,
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
    LoopbackTestResult_passed,
    _decode_LoopbackTestResult_passed,
    _encode_LoopbackTestResult_passed,
} from '../TestCategories-ASN1Module/LoopbackTestResult-passed.ta.mjs';
import {
    LoopbackFailInfo,
    _decode_LoopbackFailInfo,
    _encode_LoopbackFailInfo,
} from '../TestCategories-ASN1Module/LoopbackFailInfo.ta.mjs';
/**
 * @summary LoopbackTestResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LoopbackTestResult ::= SEQUENCE {
 *   passed
 *     SEQUENCE {loopbackDataReceived   TestPatternSequence,
 *               loopbackErrorReceived  LoopbackError},
 *   fail                  LoopbackFailInfo,
 *   timeout               [1]  NULL, --  test timeout period exceeded
 *   prematureTermination  [2]  NULL,
 *   inconclusive          [3]  NULL
 * }
 * ```
 *
 */
export class LoopbackTestResult {
    constructor(
        /**
         * @summary `passed`.
         * @public
         * @readonly
         */
        readonly passed: LoopbackTestResult_passed,
        /**
         * @summary `fail`.
         * @public
         * @readonly
         */
        readonly fail: LoopbackFailInfo,
        /**
         * @summary `timeout`.
         * @public
         * @readonly
         */
        readonly timeout: NULL,
        /**
         * @summary `prematureTermination`.
         * @public
         * @readonly
         */
        readonly prematureTermination: NULL,
        /**
         * @summary `inconclusive`.
         * @public
         * @readonly
         */
        readonly inconclusive: NULL
    ) {}

    /**
     * @summary Restructures an object into a LoopbackTestResult
     * @description
     *
     * This takes an `object` and converts it to a `LoopbackTestResult`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LoopbackTestResult`.
     * @returns {LoopbackTestResult}
     */
    public static _from_object(
        _o: { [_K in keyof LoopbackTestResult]: LoopbackTestResult[_K] }
    ): LoopbackTestResult {
        return new LoopbackTestResult(
            _o.passed,
            _o.fail,
            _o.timeout,
            _o.prematureTermination,
            _o.inconclusive
        );
    }
}

/**
 * @summary The Leading Root Component Types of LoopbackTestResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_LoopbackTestResult: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'passed',
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        'fail',
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        'timeout',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'prematureTermination',
        false,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'inconclusive',
        false,
        $.hasTag(_TagClass.context, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of LoopbackTestResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_LoopbackTestResult: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of LoopbackTestResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_LoopbackTestResult: $.ComponentSpec[] = [];

let _cached_decoder_for_LoopbackTestResult: $.ASN1Decoder<LoopbackTestResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LoopbackTestResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LoopbackTestResult} The decoded data structure.
 */
export function _decode_LoopbackTestResult(el: _Element): LoopbackTestResult {
    if (!_cached_decoder_for_LoopbackTestResult) {
        _cached_decoder_for_LoopbackTestResult = function (
            el: _Element
        ): LoopbackTestResult {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 5) {
                throw new _ConstructionError(
                    'LoopbackTestResult contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'passed';
            sequence[1].name = 'fail';
            sequence[2].name = 'timeout';
            sequence[3].name = 'prematureTermination';
            sequence[4].name = 'inconclusive';
            let passed!: LoopbackTestResult_passed;
            let fail!: LoopbackFailInfo;
            let timeout!: NULL;
            let prematureTermination!: NULL;
            let inconclusive!: NULL;
            passed = _decode_LoopbackTestResult_passed(sequence[0]);
            fail = _decode_LoopbackFailInfo(sequence[1]);
            timeout = $._decode_implicit<NULL>(() => $._decodeNull)(
                sequence[2]
            );
            prematureTermination = $._decode_implicit<NULL>(
                () => $._decodeNull
            )(sequence[3]);
            inconclusive = $._decode_implicit<NULL>(() => $._decodeNull)(
                sequence[4]
            );
            return new LoopbackTestResult(
                passed,
                fail,
                timeout,
                prematureTermination,
                inconclusive
            );
        };
    }
    return _cached_decoder_for_LoopbackTestResult(el);
}

let _cached_encoder_for_LoopbackTestResult: $.ASN1Encoder<LoopbackTestResult> | null = null;

/**
 * @summary Encodes a(n) LoopbackTestResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LoopbackTestResult, encoded as an ASN.1 Element.
 */
export function _encode_LoopbackTestResult(
    value: LoopbackTestResult,
    elGetter: $.ASN1Encoder<LoopbackTestResult>
): _Element {
    if (!_cached_encoder_for_LoopbackTestResult) {
        _cached_encoder_for_LoopbackTestResult = function (
            value: LoopbackTestResult        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_LoopbackTestResult_passed(
                            value.passed,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_LoopbackFailInfo(
                            value.fail,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => $._encodeNull,
                            $.BER
                        )(value.timeout, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            2,
                            () => $._encodeNull,
                            $.BER
                        )(value.prematureTermination, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            3,
                            () => $._encodeNull,
                            $.BER
                        )(value.inconclusive, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_LoopbackTestResult(value, elGetter);
}


/* eslint-enable */

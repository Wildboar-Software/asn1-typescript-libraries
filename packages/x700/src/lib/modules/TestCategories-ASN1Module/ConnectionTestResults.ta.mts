/* eslint-disable */
import {
    OPTIONAL,
    REAL,
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
    TestPattern,
    _decode_TestPattern,
    _encode_TestPattern,
} from '../TestCategories-ASN1Module/TestPattern.ta.mjs';
import {
    TestDirection,
    _decode_TestDirection,
    _encode_TestDirection,
} from '../TestCategories-ASN1Module/TestDirection.ta.mjs';
import {
    Timespec,
    _decode_Timespec,
    _encode_Timespec,
} from '../Test-ASN1Module/Timespec.ta.mjs';
/**
 * @summary ConnectionTestResults
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConnectionTestResults ::= SEQUENCE {
 *   receivedTestPattern  [0] EXPLICIT TestPattern OPTIONAL,
 *   errorRatio           [1]  REAL OPTIONAL,
 *   testDirection        [2]  TestDirection OPTIONAL,
 *   testDurationMade     [3]  Timespec OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ConnectionTestResults {
    constructor(
        /**
         * @summary `receivedTestPattern`.
         * @public
         * @readonly
         */
        readonly receivedTestPattern: OPTIONAL<TestPattern>,
        /**
         * @summary `errorRatio`.
         * @public
         * @readonly
         */
        readonly errorRatio: OPTIONAL<REAL>,
        /**
         * @summary `testDirection`.
         * @public
         * @readonly
         */
        readonly testDirection: OPTIONAL<TestDirection>,
        /**
         * @summary `testDurationMade`.
         * @public
         * @readonly
         */
        readonly testDurationMade: OPTIONAL<Timespec>
    ) {}

    /**
     * @summary Restructures an object into a ConnectionTestResults
     * @description
     *
     * This takes an `object` and converts it to a `ConnectionTestResults`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConnectionTestResults`.
     * @returns {ConnectionTestResults}
     */
    public static _from_object(
        _o: { [_K in keyof ConnectionTestResults]: ConnectionTestResults[_K] }
    ): ConnectionTestResults {
        return new ConnectionTestResults(
            _o.receivedTestPattern,
            _o.errorRatio,
            _o.testDirection,
            _o.testDurationMade
        );
    }
}

/**
 * @summary The Leading Root Component Types of ConnectionTestResults
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ConnectionTestResults: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'receivedTestPattern',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'errorRatio',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'testDirection',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'testDurationMade',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of ConnectionTestResults
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ConnectionTestResults: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ConnectionTestResults
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ConnectionTestResults: $.ComponentSpec[] = [];

let _cached_decoder_for_ConnectionTestResults: $.ASN1Decoder<ConnectionTestResults> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectionTestResults
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConnectionTestResults} The decoded data structure.
 */
export function _decode_ConnectionTestResults(el: _Element) {
    if (!_cached_decoder_for_ConnectionTestResults) {
        _cached_decoder_for_ConnectionTestResults = function (
            el: _Element
        ): ConnectionTestResults {
            let receivedTestPattern: OPTIONAL<TestPattern>;
            let errorRatio: OPTIONAL<REAL>;
            let testDirection: OPTIONAL<TestDirection>;
            let testDurationMade: OPTIONAL<Timespec>;
            const callbacks: $.DecodingMap = {
                receivedTestPattern: (_el: _Element): void => {
                    receivedTestPattern = $._decode_explicit<TestPattern>(
                        () => _decode_TestPattern
                    )(_el);
                },
                errorRatio: (_el: _Element): void => {
                    errorRatio = $._decode_implicit<REAL>(() => $._decodeReal)(
                        _el
                    );
                },
                testDirection: (_el: _Element): void => {
                    testDirection = $._decode_implicit<TestDirection>(
                        () => _decode_TestDirection
                    )(_el);
                },
                testDurationMade: (_el: _Element): void => {
                    testDurationMade = $._decode_explicit<Timespec>(
                        () => _decode_Timespec
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ConnectionTestResults,
                _extension_additions_list_spec_for_ConnectionTestResults,
                _root_component_type_list_2_spec_for_ConnectionTestResults,
                undefined
            );
            return new ConnectionTestResults (
                receivedTestPattern,
                errorRatio,
                testDirection,
                testDurationMade
            );
        };
    }
    return _cached_decoder_for_ConnectionTestResults(el);
}

let _cached_encoder_for_ConnectionTestResults: $.ASN1Encoder<ConnectionTestResults> | null = null;

/**
 * @summary Encodes a(n) ConnectionTestResults into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectionTestResults, encoded as an ASN.1 Element.
 */
export function _encode_ConnectionTestResults(
    value: ConnectionTestResults,
    elGetter: $.ASN1Encoder<ConnectionTestResults>
) {
    if (!_cached_encoder_for_ConnectionTestResults) {
        _cached_encoder_for_ConnectionTestResults = function (
            value: ConnectionTestResults        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.receivedTestPattern === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_TestPattern,
                                  $.BER
                              )(value.receivedTestPattern, $.BER),
                        /* IF_ABSENT  */ value.errorRatio === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeReal,
                                  $.BER
                              )(value.errorRatio, $.BER),
                        /* IF_ABSENT  */ value.testDirection === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_TestDirection,
                                  $.BER
                              )(value.testDirection, $.BER),
                        /* IF_ABSENT  */ value.testDurationMade === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_Timespec,
                                  $.BER
                              )(value.testDurationMade, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ConnectionTestResults(value, elGetter);
}


/* eslint-enable */

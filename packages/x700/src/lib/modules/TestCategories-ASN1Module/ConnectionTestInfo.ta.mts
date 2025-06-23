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
    TestDuration,
    _decode_TestDuration,
    _encode_TestDuration,
} from '../TestCategories-ASN1Module/TestDuration.ta.mjs';
import {
    Timespec,
    _decode_Timespec,
    _encode_Timespec,
} from '../Test-ASN1Module/Timespec.ta.mjs';
/**
 * @summary ConnectionTestInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConnectionTestInfo ::= SEQUENCE {
 *   testPattern        [0] EXPLICIT TestPattern OPTIONAL, -- test pattern sent
 *   testDirection      [1]  TestDirection OPTIONAL,
 *   testDuration       [2] EXPLICIT TestDuration OPTIONAL,
 *   reportingInterval  [3]  Timespec OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ConnectionTestInfo {
    constructor(
        /**
         * @summary `testPattern`.
         * @public
         * @readonly
         */
        readonly testPattern: OPTIONAL<TestPattern>,
        /**
         * @summary `testDirection`.
         * @public
         * @readonly
         */
        readonly testDirection: OPTIONAL<TestDirection>,
        /**
         * @summary `testDuration`.
         * @public
         * @readonly
         */
        readonly testDuration: OPTIONAL<TestDuration>,
        /**
         * @summary `reportingInterval`.
         * @public
         * @readonly
         */
        readonly reportingInterval: OPTIONAL<Timespec>
    ) {}

    /**
     * @summary Restructures an object into a ConnectionTestInfo
     * @description
     *
     * This takes an `object` and converts it to a `ConnectionTestInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConnectionTestInfo`.
     * @returns {ConnectionTestInfo}
     */
    public static _from_object(
        _o: { [_K in keyof ConnectionTestInfo]: ConnectionTestInfo[_K] }
    ): ConnectionTestInfo {
        return new ConnectionTestInfo(
            _o.testPattern,
            _o.testDirection,
            _o.testDuration,
            _o.reportingInterval
        );
    }
}

/**
 * @summary The Leading Root Component Types of ConnectionTestInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ConnectionTestInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'testPattern',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'testDirection',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'testDuration',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'reportingInterval',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of ConnectionTestInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ConnectionTestInfo: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ConnectionTestInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ConnectionTestInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_ConnectionTestInfo: $.ASN1Decoder<ConnectionTestInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectionTestInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConnectionTestInfo} The decoded data structure.
 */
export function _decode_ConnectionTestInfo(el: _Element) {
    if (!_cached_decoder_for_ConnectionTestInfo) {
        _cached_decoder_for_ConnectionTestInfo = function (
            el: _Element
        ): ConnectionTestInfo {
            let testPattern: OPTIONAL<TestPattern>;
            let testDirection: OPTIONAL<TestDirection>;
            let testDuration: OPTIONAL<TestDuration>;
            let reportingInterval: OPTIONAL<Timespec>;
            const callbacks: $.DecodingMap = {
                testPattern: (_el: _Element): void => {
                    testPattern = $._decode_explicit<TestPattern>(
                        () => _decode_TestPattern
                    )(_el);
                },
                testDirection: (_el: _Element): void => {
                    testDirection = $._decode_implicit<TestDirection>(
                        () => _decode_TestDirection
                    )(_el);
                },
                testDuration: (_el: _Element): void => {
                    testDuration = $._decode_explicit<TestDuration>(
                        () => _decode_TestDuration
                    )(_el);
                },
                reportingInterval: (_el: _Element): void => {
                    reportingInterval = $._decode_explicit<Timespec>(
                        () => _decode_Timespec
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ConnectionTestInfo,
                _extension_additions_list_spec_for_ConnectionTestInfo,
                _root_component_type_list_2_spec_for_ConnectionTestInfo,
                undefined
            );
            return new ConnectionTestInfo (
                testPattern,
                testDirection,
                testDuration,
                reportingInterval
            );
        };
    }
    return _cached_decoder_for_ConnectionTestInfo(el);
}

let _cached_encoder_for_ConnectionTestInfo: $.ASN1Encoder<ConnectionTestInfo> | null = null;

/**
 * @summary Encodes a(n) ConnectionTestInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectionTestInfo, encoded as an ASN.1 Element.
 */
export function _encode_ConnectionTestInfo(
    value: ConnectionTestInfo,
    elGetter: $.ASN1Encoder<ConnectionTestInfo>
) {
    if (!_cached_encoder_for_ConnectionTestInfo) {
        _cached_encoder_for_ConnectionTestInfo = function (
            value: ConnectionTestInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.testPattern === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_TestPattern,
                                  $.BER
                              )(value.testPattern, $.BER),
                        /* IF_ABSENT  */ value.testDirection === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_TestDirection,
                                  $.BER
                              )(value.testDirection, $.BER),
                        /* IF_ABSENT  */ value.testDuration === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_TestDuration,
                                  $.BER
                              )(value.testDuration, $.BER),
                        /* IF_ABSENT  */ value.reportingInterval === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_Timespec,
                                  $.BER
                              )(value.reportingInterval, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ConnectionTestInfo(value, elGetter);
}


/* eslint-enable */

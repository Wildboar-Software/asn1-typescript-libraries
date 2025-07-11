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
    ControlledTestRequestType,
    _enum_for_ControlledTestRequestType,
    _decode_ControlledTestRequestType,
    _encode_ControlledTestRequestType,
} from '../Test-ASN1Module/ControlledTestRequestType.ta.mjs';
import {
    TestCategoryInformation,
    _decode_TestCategoryInformation,
    _encode_TestCategoryInformation,
} from '../Test-ASN1Module/TestCategoryInformation.ta.mjs';
import {
    TestSessionId,
    _decode_TestSessionId,
    _encode_TestSessionId,
} from '../Test-ASN1Module/TestSessionId.ta.mjs';
import {
    ToBeTestedMORTs,
    _decode_ToBeTestedMORTs,
    _encode_ToBeTestedMORTs,
} from '../Test-ASN1Module/ToBeTestedMORTs.ta.mjs';
import {
    AssociatedObjects,
    _decode_AssociatedObjects,
    _encode_AssociatedObjects,
} from '../Test-ASN1Module/AssociatedObjects.ta.mjs';
import {
    TimeoutPeriod,
    _decode_TimeoutPeriod,
    _encode_TimeoutPeriod,
} from '../Test-ASN1Module/TimeoutPeriod.ta.mjs';
import {
    TestObjectList,
    _decode_TestObjectList,
    _encode_TestObjectList,
} from '../Test-ASN1Module/TestObjectList.ta.mjs';
/**
 * @summary TestRequestControlledInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestRequestControlledInfo ::= SEQUENCE {
 *   controlledTestRequestType  [1]  ControlledTestRequestType,
 *   testCategoryInformation    [2]  TestCategoryInformation OPTIONAL,
 *   testSessionId              [3]  TestSessionId OPTIONAL,
 *   toBeTestedMORTs            ToBeTestedMORTs OPTIONAL,
 *   associatedObjects          [5]  AssociatedObjects OPTIONAL,
 *   timeoutPeriod              TimeoutPeriod OPTIONAL,
 *   testObjectList             [7]  TestObjectList
 * }
 * ```
 *
 */
export class TestRequestControlledInfo {
    constructor(
        /**
         * @summary `controlledTestRequestType`.
         * @public
         * @readonly
         */
        readonly controlledTestRequestType: ControlledTestRequestType,
        /**
         * @summary `testCategoryInformation`.
         * @public
         * @readonly
         */
        readonly testCategoryInformation: OPTIONAL<TestCategoryInformation>,
        /**
         * @summary `testSessionId`.
         * @public
         * @readonly
         */
        readonly testSessionId: OPTIONAL<TestSessionId>,
        /**
         * @summary `toBeTestedMORTs`.
         * @public
         * @readonly
         */
        readonly toBeTestedMORTs: OPTIONAL<ToBeTestedMORTs>,
        /**
         * @summary `associatedObjects`.
         * @public
         * @readonly
         */
        readonly associatedObjects: OPTIONAL<AssociatedObjects>,
        /**
         * @summary `timeoutPeriod`.
         * @public
         * @readonly
         */
        readonly timeoutPeriod: OPTIONAL<TimeoutPeriod>,
        /**
         * @summary `testObjectList`.
         * @public
         * @readonly
         */
        readonly testObjectList: TestObjectList
    ) {}

    /**
     * @summary Restructures an object into a TestRequestControlledInfo
     * @description
     *
     * This takes an `object` and converts it to a `TestRequestControlledInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TestRequestControlledInfo`.
     * @returns {TestRequestControlledInfo}
     */
    public static _from_object(
        _o: {
            [_K in keyof TestRequestControlledInfo]: TestRequestControlledInfo[_K];
        }
    ): TestRequestControlledInfo {
        return new TestRequestControlledInfo(
            _o.controlledTestRequestType,
            _o.testCategoryInformation,
            _o.testSessionId,
            _o.toBeTestedMORTs,
            _o.associatedObjects,
            _o.timeoutPeriod,
            _o.testObjectList
        );
    }

    /**
     * @summary The enum used as the type of the component `controlledTestRequestType`
     * @public
     * @static
     */

    public static _enum_for_controlledTestRequestType = _enum_for_ControlledTestRequestType;
}

/**
 * @summary The Leading Root Component Types of TestRequestControlledInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TestRequestControlledInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'controlledTestRequestType',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'testCategoryInformation',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'testSessionId',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'toBeTestedMORTs',
        true,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'associatedObjects',
        true,
        $.hasTag(_TagClass.context, 5)
    ),
    new $.ComponentSpec(
        'timeoutPeriod',
        true,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'testObjectList',
        false,
        $.hasTag(_TagClass.context, 7)
    ),
];

/**
 * @summary The Trailing Root Component Types of TestRequestControlledInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TestRequestControlledInfo: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TestRequestControlledInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TestRequestControlledInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_TestRequestControlledInfo: $.ASN1Decoder<TestRequestControlledInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TestRequestControlledInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestRequestControlledInfo} The decoded data structure.
 */
export function _decode_TestRequestControlledInfo(el: _Element): TestRequestControlledInfo {
    if (!_cached_decoder_for_TestRequestControlledInfo) {
        _cached_decoder_for_TestRequestControlledInfo = function (
            el: _Element
        ): TestRequestControlledInfo {
            let controlledTestRequestType!: ControlledTestRequestType;
            let testCategoryInformation: OPTIONAL<TestCategoryInformation>;
            let testSessionId: OPTIONAL<TestSessionId>;
            let toBeTestedMORTs: OPTIONAL<ToBeTestedMORTs>;
            let associatedObjects: OPTIONAL<AssociatedObjects>;
            let timeoutPeriod: OPTIONAL<TimeoutPeriod>;
            let testObjectList!: TestObjectList;
            const callbacks: $.DecodingMap = {
                controlledTestRequestType: (_el: _Element): void => {
                    controlledTestRequestType = $._decode_implicit<ControlledTestRequestType>(
                        () => _decode_ControlledTestRequestType
                    )(_el);
                },
                testCategoryInformation: (_el: _Element): void => {
                    testCategoryInformation = $._decode_implicit<TestCategoryInformation>(
                        () => _decode_TestCategoryInformation
                    )(_el);
                },
                testSessionId: (_el: _Element): void => {
                    testSessionId = $._decode_implicit<TestSessionId>(
                        () => _decode_TestSessionId
                    )(_el);
                },
                toBeTestedMORTs: (_el: _Element): void => {
                    toBeTestedMORTs = _decode_ToBeTestedMORTs(_el);
                },
                associatedObjects: (_el: _Element): void => {
                    associatedObjects = $._decode_implicit<AssociatedObjects>(
                        () => _decode_AssociatedObjects
                    )(_el);
                },
                timeoutPeriod: (_el: _Element): void => {
                    timeoutPeriod = _decode_TimeoutPeriod(_el);
                },
                testObjectList: (_el: _Element): void => {
                    testObjectList = $._decode_implicit<TestObjectList>(
                        () => _decode_TestObjectList
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TestRequestControlledInfo,
                _extension_additions_list_spec_for_TestRequestControlledInfo,
                _root_component_type_list_2_spec_for_TestRequestControlledInfo,
                undefined
            );
            return new TestRequestControlledInfo (
                controlledTestRequestType,
                testCategoryInformation,
                testSessionId,
                toBeTestedMORTs,
                associatedObjects,
                timeoutPeriod,
                testObjectList
            );
        };
    }
    return _cached_decoder_for_TestRequestControlledInfo(el);
}

let _cached_encoder_for_TestRequestControlledInfo: $.ASN1Encoder<TestRequestControlledInfo> | null = null;

/**
 * @summary Encodes a(n) TestRequestControlledInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestRequestControlledInfo, encoded as an ASN.1 Element.
 */
export function _encode_TestRequestControlledInfo(
    value: TestRequestControlledInfo,
    elGetter: $.ASN1Encoder<TestRequestControlledInfo>
): _Element {
    if (!_cached_encoder_for_TestRequestControlledInfo) {
        _cached_encoder_for_TestRequestControlledInfo = function (
            value: TestRequestControlledInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_ControlledTestRequestType,
                            $.BER
                        )(value.controlledTestRequestType, $.BER),
                        /* IF_ABSENT  */ value.testCategoryInformation ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_TestCategoryInformation,
                                  $.BER
                              )(value.testCategoryInformation, $.BER),
                        /* IF_ABSENT  */ value.testSessionId === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_TestSessionId,
                                  $.BER
                              )(value.testSessionId, $.BER),
                        /* IF_ABSENT  */ value.toBeTestedMORTs === undefined
                            ? undefined
                            : _encode_ToBeTestedMORTs(
                                  value.toBeTestedMORTs,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.associatedObjects === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  5,
                                  () => _encode_AssociatedObjects,
                                  $.BER
                              )(value.associatedObjects, $.BER),
                        /* IF_ABSENT  */ value.timeoutPeriod === undefined
                            ? undefined
                            : _encode_TimeoutPeriod(value.timeoutPeriod, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            7,
                            () => _encode_TestObjectList,
                            $.BER
                        )(value.testObjectList, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TestRequestControlledInfo(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
    TestCategoryInformation,
    _decode_TestCategoryInformation,
    _encode_TestCategoryInformation,
} from '../Test-ASN1Module/TestCategoryInformation.ta.mjs';
export {
    TestCategoryInformation,
    _decode_TestCategoryInformation,
    _encode_TestCategoryInformation,
} from '../Test-ASN1Module/TestCategoryInformation.ta.mjs';
import {
    TestSessionId,
    _decode_TestSessionId,
    _encode_TestSessionId,
} from '../Test-ASN1Module/TestSessionId.ta.mjs';
export {
    TestSessionId,
    _decode_TestSessionId,
    _encode_TestSessionId,
} from '../Test-ASN1Module/TestSessionId.ta.mjs';
import {
    TimeoutPeriod,
    _decode_TimeoutPeriod,
    _encode_TimeoutPeriod,
} from '../Test-ASN1Module/TimeoutPeriod.ta.mjs';
export {
    TimeoutPeriod,
    _decode_TimeoutPeriod,
    _encode_TimeoutPeriod,
} from '../Test-ASN1Module/TimeoutPeriod.ta.mjs';
import {
    AssociatedObjects,
    _decode_AssociatedObjects,
    _encode_AssociatedObjects,
} from '../Test-ASN1Module/AssociatedObjects.ta.mjs';
export {
    AssociatedObjects,
    _decode_AssociatedObjects,
    _encode_AssociatedObjects,
} from '../Test-ASN1Module/AssociatedObjects.ta.mjs';
import {
    ToBeTestedMORTs,
    _decode_ToBeTestedMORTs,
    _encode_ToBeTestedMORTs,
} from '../Test-ASN1Module/ToBeTestedMORTs.ta.mjs';
export {
    ToBeTestedMORTs,
    _decode_ToBeTestedMORTs,
    _encode_ToBeTestedMORTs,
} from '../Test-ASN1Module/ToBeTestedMORTs.ta.mjs';

/* START_OF_SYMBOL_DEFINITION TestRequestUncontrolledInfo */
/**
 * @summary TestRequestUncontrolledInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestRequestUncontrolledInfo ::= SEQUENCE {
 *   testCategoryInformation  [1]  TestCategoryInformation,
 *   testSessionId            [2]  TestSessionId OPTIONAL,
 *   timeoutPeriod            TimeoutPeriod OPTIONAL,
 *   associatedObjects        [4]  AssociatedObjects OPTIONAL,
 *   toBeTestedMORTs          ToBeTestedMORTs OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class TestRequestUncontrolledInfo {
    constructor(
        /**
         * @summary `testCategoryInformation`.
         * @public
         * @readonly
         */
        readonly testCategoryInformation: TestCategoryInformation,
        /**
         * @summary `testSessionId`.
         * @public
         * @readonly
         */
        readonly testSessionId: OPTIONAL<TestSessionId>,
        /**
         * @summary `timeoutPeriod`.
         * @public
         * @readonly
         */
        readonly timeoutPeriod: OPTIONAL<TimeoutPeriod>,
        /**
         * @summary `associatedObjects`.
         * @public
         * @readonly
         */
        readonly associatedObjects: OPTIONAL<AssociatedObjects>,
        /**
         * @summary `toBeTestedMORTs`.
         * @public
         * @readonly
         */
        readonly toBeTestedMORTs: OPTIONAL<ToBeTestedMORTs>
    ) {}

    /**
     * @summary Restructures an object into a TestRequestUncontrolledInfo
     * @description
     *
     * This takes an `object` and converts it to a `TestRequestUncontrolledInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TestRequestUncontrolledInfo`.
     * @returns {TestRequestUncontrolledInfo}
     */
    public static _from_object(
        _o: {
            [_K in keyof TestRequestUncontrolledInfo]: TestRequestUncontrolledInfo[_K];
        }
    ): TestRequestUncontrolledInfo {
        return new TestRequestUncontrolledInfo(
            _o.testCategoryInformation,
            _o.testSessionId,
            _o.timeoutPeriod,
            _o.associatedObjects,
            _o.toBeTestedMORTs
        );
    }
}
/* END_OF_SYMBOL_DEFINITION TestRequestUncontrolledInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TestRequestUncontrolledInfo */
/**
 * @summary The Leading Root Component Types of TestRequestUncontrolledInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TestRequestUncontrolledInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'testCategoryInformation',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'testSessionId',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'timeoutPeriod',
        true,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'associatedObjects',
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'toBeTestedMORTs',
        true,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TestRequestUncontrolledInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TestRequestUncontrolledInfo */
/**
 * @summary The Trailing Root Component Types of TestRequestUncontrolledInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TestRequestUncontrolledInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TestRequestUncontrolledInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TestRequestUncontrolledInfo */
/**
 * @summary The Extension Addition Component Types of TestRequestUncontrolledInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TestRequestUncontrolledInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TestRequestUncontrolledInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TestRequestUncontrolledInfo */
let _cached_decoder_for_TestRequestUncontrolledInfo: $.ASN1Decoder<TestRequestUncontrolledInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TestRequestUncontrolledInfo */

/* START_OF_SYMBOL_DEFINITION _decode_TestRequestUncontrolledInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) TestRequestUncontrolledInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestRequestUncontrolledInfo} The decoded data structure.
 */
export function _decode_TestRequestUncontrolledInfo(el: _Element) {
    if (!_cached_decoder_for_TestRequestUncontrolledInfo) {
        _cached_decoder_for_TestRequestUncontrolledInfo = function (
            el: _Element
        ): TestRequestUncontrolledInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let testCategoryInformation!: TestCategoryInformation;
            let testSessionId: OPTIONAL<TestSessionId>;
            let timeoutPeriod: OPTIONAL<TimeoutPeriod>;
            let associatedObjects: OPTIONAL<AssociatedObjects>;
            let toBeTestedMORTs: OPTIONAL<ToBeTestedMORTs>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
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
                timeoutPeriod: (_el: _Element): void => {
                    timeoutPeriod = _decode_TimeoutPeriod(_el);
                },
                associatedObjects: (_el: _Element): void => {
                    associatedObjects = $._decode_implicit<AssociatedObjects>(
                        () => _decode_AssociatedObjects
                    )(_el);
                },
                toBeTestedMORTs: (_el: _Element): void => {
                    toBeTestedMORTs = _decode_ToBeTestedMORTs(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TestRequestUncontrolledInfo,
                _extension_additions_list_spec_for_TestRequestUncontrolledInfo,
                _root_component_type_list_2_spec_for_TestRequestUncontrolledInfo,
                undefined
            );
            return new TestRequestUncontrolledInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                testCategoryInformation,
                testSessionId,
                timeoutPeriod,
                associatedObjects,
                toBeTestedMORTs
            );
        };
    }
    return _cached_decoder_for_TestRequestUncontrolledInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TestRequestUncontrolledInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TestRequestUncontrolledInfo */
let _cached_encoder_for_TestRequestUncontrolledInfo: $.ASN1Encoder<TestRequestUncontrolledInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TestRequestUncontrolledInfo */

/* START_OF_SYMBOL_DEFINITION _encode_TestRequestUncontrolledInfo */
/**
 * @summary Encodes a(n) TestRequestUncontrolledInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestRequestUncontrolledInfo, encoded as an ASN.1 Element.
 */
export function _encode_TestRequestUncontrolledInfo(
    value: TestRequestUncontrolledInfo,
    elGetter: $.ASN1Encoder<TestRequestUncontrolledInfo>
) {
    if (!_cached_encoder_for_TestRequestUncontrolledInfo) {
        _cached_encoder_for_TestRequestUncontrolledInfo = function (
            value: TestRequestUncontrolledInfo,
            elGetter: $.ASN1Encoder<TestRequestUncontrolledInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_TestCategoryInformation,
                            $.BER
                        )(value.testCategoryInformation, $.BER),
                        /* IF_ABSENT  */ value.testSessionId === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_TestSessionId,
                                  $.BER
                              )(value.testSessionId, $.BER),
                        /* IF_ABSENT  */ value.timeoutPeriod === undefined
                            ? undefined
                            : _encode_TimeoutPeriod(value.timeoutPeriod, $.BER),
                        /* IF_ABSENT  */ value.associatedObjects === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_AssociatedObjects,
                                  $.BER
                              )(value.associatedObjects, $.BER),
                        /* IF_ABSENT  */ value.toBeTestedMORTs === undefined
                            ? undefined
                            : _encode_ToBeTestedMORTs(
                                  value.toBeTestedMORTs,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TestRequestUncontrolledInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TestRequestUncontrolledInfo */

/* eslint-enable */

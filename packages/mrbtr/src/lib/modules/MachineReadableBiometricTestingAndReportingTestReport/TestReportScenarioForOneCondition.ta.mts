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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TestCrewInformation, _decode_TestCrewInformation, _encode_TestCrewInformation } from "../MachineReadableBiometricTestingAndReportingTestReport/TestCrewInformation.ta.mjs";
// export { TestCrewInformation, _decode_TestCrewInformation, _encode_TestCrewInformation } from "../MachineReadableBiometricTestingAndReportingTestReport/TestCrewInformation.ta.mjs";
import { LevelPolicyAssistance, _decode_LevelPolicyAssistance, _encode_LevelPolicyAssistance } from "../MachineReadableBiometricTestingAndReportingTestReport/LevelPolicyAssistance.ta.mjs";
// export { LevelPolicyAssistance, _decode_LevelPolicyAssistance, _encode_LevelPolicyAssistance } from "../MachineReadableBiometricTestingAndReportingTestReport/LevelPolicyAssistance.ta.mjs";
import { EnvironmentalInformation, _decode_EnvironmentalInformation, _encode_EnvironmentalInformation } from "../MachineReadableBiometricTestingAndReportingTestReport/EnvironmentalInformation.ta.mjs";
// export { EnvironmentalInformation, _decode_EnvironmentalInformation, _encode_EnvironmentalInformation } from "../MachineReadableBiometricTestingAndReportingTestReport/EnvironmentalInformation.ta.mjs";
import { Date, _decode_Date, _encode_Date } from "../MachineReadableBiometricTestingAndReportingTestReport/Date.ta.mjs";
// export { Date, _decode_Date, _encode_Date } from "../MachineReadableBiometricTestingAndReportingTestReport/Date.ta.mjs";
import { TestResult, _decode_TestResult, _encode_TestResult } from "../MachineReadableBiometricTestingAndReportingTestReport/TestResult.ta.mjs";
// export { TestResult, _decode_TestResult, _encode_TestResult } from "../MachineReadableBiometricTestingAndReportingTestReport/TestResult.ta.mjs";


/**
 * @summary TestReportScenarioForOneCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TestReportScenarioForOneCondition ::= SEQUENCE {
 *     testCrewInfo            TestCrewInformation,
 *     levelPolicyAssistance   LevelPolicyAssistance,
 *     environInfo             EnvironmentalInformation,
 *     dateStarted             Date OPTIONAL,
 *     dateEnded               Date OPTIONAL,
 *     testResult              SEQUENCE OF TestResult
 * }
 * ```
 * 
 * @class
 */
export
class TestReportScenarioForOneCondition {
    constructor (
        /**
         * @summary `testCrewInfo`.
         * @public
         * @readonly
         */
        readonly testCrewInfo: TestCrewInformation,
        /**
         * @summary `levelPolicyAssistance`.
         * @public
         * @readonly
         */
        readonly levelPolicyAssistance: LevelPolicyAssistance,
        /**
         * @summary `environInfo`.
         * @public
         * @readonly
         */
        readonly environInfo: EnvironmentalInformation,
        /**
         * @summary `dateStarted`.
         * @public
         * @readonly
         */
        readonly dateStarted: OPTIONAL<Date>,
        /**
         * @summary `dateEnded`.
         * @public
         * @readonly
         */
        readonly dateEnded: OPTIONAL<Date>,
        /**
         * @summary `testResult`.
         * @public
         * @readonly
         */
        readonly testResult: TestResult[]
    ) {}

    /**
     * @summary Restructures an object into a TestReportScenarioForOneCondition
     * @description
     * 
     * This takes an `object` and converts it to a `TestReportScenarioForOneCondition`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TestReportScenarioForOneCondition`.
     * @returns {TestReportScenarioForOneCondition}
     */
    public static _from_object (_o: { [_K in keyof (TestReportScenarioForOneCondition)]: (TestReportScenarioForOneCondition)[_K] }): TestReportScenarioForOneCondition {
        return new TestReportScenarioForOneCondition(_o.testCrewInfo, _o.levelPolicyAssistance, _o.environInfo, _o.dateStarted, _o.dateEnded, _o.testResult);
    }


}

/**
 * @summary The Leading Root Component Types of TestReportScenarioForOneCondition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TestReportScenarioForOneCondition: $.ComponentSpec[] = [
    new $.ComponentSpec("testCrewInfo", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("levelPolicyAssistance", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("environInfo", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("dateStarted", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("dateEnded", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("testResult", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of TestReportScenarioForOneCondition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TestReportScenarioForOneCondition: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TestReportScenarioForOneCondition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TestReportScenarioForOneCondition: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TestReportScenarioForOneCondition: $.ASN1Decoder<TestReportScenarioForOneCondition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TestReportScenarioForOneCondition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TestReportScenarioForOneCondition (el: _Element): TestReportScenarioForOneCondition {
    if (!_cached_decoder_for_TestReportScenarioForOneCondition) { _cached_decoder_for_TestReportScenarioForOneCondition = function (el: _Element): TestReportScenarioForOneCondition {
    let testCrewInfo!: TestCrewInformation;
    let levelPolicyAssistance!: LevelPolicyAssistance;
    let environInfo!: EnvironmentalInformation;
    let dateStarted: OPTIONAL<Date>;
    let dateEnded: OPTIONAL<Date>;
    let testResult!: TestResult[];
    const callbacks: $.DecodingMap = {
        "testCrewInfo": (_el: _Element): void => { testCrewInfo = _decode_TestCrewInformation(_el); },
        "levelPolicyAssistance": (_el: _Element): void => { levelPolicyAssistance = _decode_LevelPolicyAssistance(_el); },
        "environInfo": (_el: _Element): void => { environInfo = _decode_EnvironmentalInformation(_el); },
        "dateStarted": (_el: _Element): void => { dateStarted = _decode_Date(_el); },
        "dateEnded": (_el: _Element): void => { dateEnded = _decode_Date(_el); },
        "testResult": (_el: _Element): void => { testResult = $._decodeSequenceOf<TestResult>(() => _decode_TestResult)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TestReportScenarioForOneCondition,
        _extension_additions_list_spec_for_TestReportScenarioForOneCondition,
        _root_component_type_list_2_spec_for_TestReportScenarioForOneCondition,
        undefined,
    );
    return new TestReportScenarioForOneCondition(
        testCrewInfo,
        levelPolicyAssistance,
        environInfo,
        dateStarted,
        dateEnded,
        testResult
    );
}; }
    return _cached_decoder_for_TestReportScenarioForOneCondition(el);
}

let _cached_encoder_for_TestReportScenarioForOneCondition: $.ASN1Encoder<TestReportScenarioForOneCondition> | null = null;

/**
 * @summary Encodes a(n) TestReportScenarioForOneCondition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestReportScenarioForOneCondition, encoded as an ASN.1 Element.
 */
export
function _encode_TestReportScenarioForOneCondition (value: TestReportScenarioForOneCondition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TestReportScenarioForOneCondition) { _cached_encoder_for_TestReportScenarioForOneCondition = function (value: TestReportScenarioForOneCondition, elGetter: $.ASN1Encoder<TestReportScenarioForOneCondition>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 0, () => _encode_TestCrewInformation, $.BER)(value.testCrewInfo, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 1, () => _encode_LevelPolicyAssistance, $.BER)(value.levelPolicyAssistance, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 2, () => _encode_EnvironmentalInformation, $.BER)(value.environInfo, $.BER),
            /* IF_ABSENT */ ((value.dateStarted === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_Date, $.BER)(value.dateStarted, $.BER)),
            /* IF_ABSENT */ ((value.dateEnded === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_Date, $.BER)(value.dateEnded, $.BER)),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<TestResult>(() => _encode_TestResult, $.BER), $.BER)(value.testResult, $.BER),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TestReportScenarioForOneCondition(value, elGetter);
}


/* eslint-enable */

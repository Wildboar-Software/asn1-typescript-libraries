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
import { CorpusInformation, _decode_CorpusInformation, _encode_CorpusInformation } from "../MachineReadableBiometricTestingAndReportingTestReport/CorpusInformation.ta.mjs";
// export { CorpusInformation, _decode_CorpusInformation, _encode_CorpusInformation } from "../MachineReadableBiometricTestingAndReportingTestReport/CorpusInformation.ta.mjs";
import { Date, _decode_Date, _encode_Date } from "../MachineReadableBiometricTestingAndReportingTestReport/Date.ta.mjs";
// export { Date, _decode_Date, _encode_Date } from "../MachineReadableBiometricTestingAndReportingTestReport/Date.ta.mjs";
import { TestResult, _decode_TestResult, _encode_TestResult } from "../MachineReadableBiometricTestingAndReportingTestReport/TestResult.ta.mjs";
// export { TestResult, _decode_TestResult, _encode_TestResult } from "../MachineReadableBiometricTestingAndReportingTestReport/TestResult.ta.mjs";


/**
 * @summary TestReportTechnologyForOneCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TestReportTechnologyForOneCondition ::= SEQUENCE {
 *     corpusInfo  CorpusInformation,
 *     dateStarted Date OPTIONAL,
 *     dateEnded   Date OPTIONAL,
 *     testResult  SEQUENCE OF TestResult
 * }
 * ```
 * 
 * @class
 */
export
class TestReportTechnologyForOneCondition {
    constructor (
        /**
         * @summary `corpusInfo`.
         * @public
         * @readonly
         */
        readonly corpusInfo: CorpusInformation,
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
     * @summary Restructures an object into a TestReportTechnologyForOneCondition
     * @description
     * 
     * This takes an `object` and converts it to a `TestReportTechnologyForOneCondition`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TestReportTechnologyForOneCondition`.
     * @returns {TestReportTechnologyForOneCondition}
     */
    public static _from_object (_o: { [_K in keyof (TestReportTechnologyForOneCondition)]: (TestReportTechnologyForOneCondition)[_K] }): TestReportTechnologyForOneCondition {
        return new TestReportTechnologyForOneCondition(_o.corpusInfo, _o.dateStarted, _o.dateEnded, _o.testResult);
    }


}

/**
 * @summary The Leading Root Component Types of TestReportTechnologyForOneCondition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TestReportTechnologyForOneCondition: $.ComponentSpec[] = [
    new $.ComponentSpec("corpusInfo", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("dateStarted", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("dateEnded", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("testResult", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of TestReportTechnologyForOneCondition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TestReportTechnologyForOneCondition: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TestReportTechnologyForOneCondition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TestReportTechnologyForOneCondition: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TestReportTechnologyForOneCondition: $.ASN1Decoder<TestReportTechnologyForOneCondition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TestReportTechnologyForOneCondition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TestReportTechnologyForOneCondition (el: _Element): TestReportTechnologyForOneCondition {
    if (!_cached_decoder_for_TestReportTechnologyForOneCondition) { _cached_decoder_for_TestReportTechnologyForOneCondition = function (el: _Element): TestReportTechnologyForOneCondition {
    let corpusInfo!: CorpusInformation;
    let dateStarted: OPTIONAL<Date>;
    let dateEnded: OPTIONAL<Date>;
    let testResult!: TestResult[];
    const callbacks: $.DecodingMap = {
        "corpusInfo": (_el: _Element): void => { corpusInfo = _decode_CorpusInformation(_el); },
        "dateStarted": (_el: _Element): void => { dateStarted = _decode_Date(_el); },
        "dateEnded": (_el: _Element): void => { dateEnded = _decode_Date(_el); },
        "testResult": (_el: _Element): void => { testResult = $._decodeSequenceOf<TestResult>(() => _decode_TestResult)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TestReportTechnologyForOneCondition,
        _extension_additions_list_spec_for_TestReportTechnologyForOneCondition,
        _root_component_type_list_2_spec_for_TestReportTechnologyForOneCondition,
        undefined,
    );
    return new TestReportTechnologyForOneCondition(
        corpusInfo,
        dateStarted,
        dateEnded,
        testResult
    );
}; }
    return _cached_decoder_for_TestReportTechnologyForOneCondition(el);
}

let _cached_encoder_for_TestReportTechnologyForOneCondition: $.ASN1Encoder<TestReportTechnologyForOneCondition> | null = null;

/**
 * @summary Encodes a(n) TestReportTechnologyForOneCondition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestReportTechnologyForOneCondition, encoded as an ASN.1 Element.
 */
export
function _encode_TestReportTechnologyForOneCondition (value: TestReportTechnologyForOneCondition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TestReportTechnologyForOneCondition) { _cached_encoder_for_TestReportTechnologyForOneCondition = function (value: TestReportTechnologyForOneCondition, elGetter: $.ASN1Encoder<TestReportTechnologyForOneCondition>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CorpusInformation(value.corpusInfo, $.BER),
            /* IF_ABSENT  */ ((value.dateStarted === undefined) ? undefined : _encode_Date(value.dateStarted, $.BER)),
            /* IF_ABSENT  */ ((value.dateEnded === undefined) ? undefined : _encode_Date(value.dateEnded, $.BER)),
            /* REQUIRED   */ $._encodeSequenceOf<TestResult>(() => _encode_TestResult, $.BER)(value.testResult, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TestReportTechnologyForOneCondition(value, elGetter);
}


/* eslint-enable */

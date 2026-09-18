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
import { MRTDBTRVersion, MRTDBTRVersion_v0 /* IMPORTED_LONG_NAMED_INTEGER */, v0 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_MRTDBTRVersion, _encode_MRTDBTRVersion } from "../MachineReadableBiometricTestingAndReportingTestReport/MRTDBTRVersion.ta.mjs";
// export { MRTDBTRVersion, MRTDBTRVersion_v0 /* IMPORTED_LONG_NAMED_INTEGER */, v0 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_MRTDBTRVersion, _encode_MRTDBTRVersion } from "../MachineReadableBiometricTestingAndReportingTestReport/MRTDBTRVersion.ta.mjs";
import { ProductInformation, _decode_ProductInformation, _encode_ProductInformation } from "../MachineReadableBiometricTestingAndReportingTestReport/ProductInformation.ta.mjs";
// export { ProductInformation, _decode_ProductInformation, _encode_ProductInformation } from "../MachineReadableBiometricTestingAndReportingTestReport/ProductInformation.ta.mjs";
import { TestReportInformation, _decode_TestReportInformation, _encode_TestReportInformation } from "../MachineReadableBiometricTestingAndReportingTestReport/TestReportInformation.ta.mjs";
// export { TestReportInformation, _decode_TestReportInformation, _encode_TestReportInformation } from "../MachineReadableBiometricTestingAndReportingTestReport/TestReportInformation.ta.mjs";
import { TestReportScenarioForOneCondition, _decode_TestReportScenarioForOneCondition, _encode_TestReportScenarioForOneCondition } from "../MachineReadableBiometricTestingAndReportingTestReport/TestReportScenarioForOneCondition.ta.mjs";
// export { TestReportScenarioForOneCondition, _decode_TestReportScenarioForOneCondition, _encode_TestReportScenarioForOneCondition } from "../MachineReadableBiometricTestingAndReportingTestReport/TestReportScenarioForOneCondition.ta.mjs";


/**
 * @summary TestReportScenario
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TestReportScenario ::= SEQUENCE {
 *     version         MRTDBTRVersion DEFAULT v0,
 *     targetInfos     SEQUENCE OF ProductInformation,
 *     testReportInfo  TestReportInformation,
 *     testReports     SEQUENCE OF TestReportScenarioForOneCondition
 * }
 * ```
 * 
 * @class
 */
export
class TestReportScenario {
    constructor (
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<MRTDBTRVersion>,
        /**
         * @summary `targetInfos`.
         * @public
         * @readonly
         */
        readonly targetInfos: ProductInformation[],
        /**
         * @summary `testReportInfo`.
         * @public
         * @readonly
         */
        readonly testReportInfo: TestReportInformation,
        /**
         * @summary `testReports`.
         * @public
         * @readonly
         */
        readonly testReports: TestReportScenarioForOneCondition[]
    ) {}

    /**
     * @summary Restructures an object into a TestReportScenario
     * @description
     * 
     * This takes an `object` and converts it to a `TestReportScenario`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TestReportScenario`.
     * @returns {TestReportScenario}
     */
    public static _from_object (_o: { [_K in keyof (TestReportScenario)]: (TestReportScenario)[_K] }): TestReportScenario {
        return new TestReportScenario(_o.version, _o.targetInfos, _o.testReportInfo, _o.testReports);
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version () { return v0; }
}

/**
 * @summary The Leading Root Component Types of TestReportScenario
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TestReportScenario: $.ComponentSpec[] = [
    new $.ComponentSpec("version", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("targetInfos", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("testReportInfo", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("testReports", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of TestReportScenario
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TestReportScenario: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TestReportScenario
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TestReportScenario: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TestReportScenario: $.ASN1Decoder<TestReportScenario> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TestReportScenario
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TestReportScenario (el: _Element): TestReportScenario {
    if (!_cached_decoder_for_TestReportScenario) { _cached_decoder_for_TestReportScenario = function (el: _Element): TestReportScenario {
    let version: OPTIONAL<MRTDBTRVersion> = TestReportScenario._default_value_for_version;
    let targetInfos!: ProductInformation[];
    let testReportInfo!: TestReportInformation;
    let testReports!: TestReportScenarioForOneCondition[];
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = _decode_MRTDBTRVersion(_el); },
        "targetInfos": (_el: _Element): void => { targetInfos = $._decodeSequenceOf<ProductInformation>(() => _decode_ProductInformation)(_el); },
        "testReportInfo": (_el: _Element): void => { testReportInfo = _decode_TestReportInformation(_el); },
        "testReports": (_el: _Element): void => { testReports = $._decodeSequenceOf<TestReportScenarioForOneCondition>(() => _decode_TestReportScenarioForOneCondition)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TestReportScenario,
        _extension_additions_list_spec_for_TestReportScenario,
        _root_component_type_list_2_spec_for_TestReportScenario,
        undefined,
    );
    return new TestReportScenario(
        version,
        targetInfos,
        testReportInfo,
        testReports
    );
}; }
    return _cached_decoder_for_TestReportScenario(el);
}

let _cached_encoder_for_TestReportScenario: $.ASN1Encoder<TestReportScenario> | null = null;

/**
 * @summary Encodes a(n) TestReportScenario into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestReportScenario, encoded as an ASN.1 Element.
 */
export
function _encode_TestReportScenario (value: TestReportScenario, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TestReportScenario) { _cached_encoder_for_TestReportScenario = function (value: TestReportScenario, elGetter: $.ASN1Encoder<TestReportScenario>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.version === undefined || $.deepEq(value.version, TestReportScenario._default_value_for_version) ? undefined : _encode_MRTDBTRVersion(value.version, $.BER)),
            /* REQUIRED   */ $._encodeSequenceOf<ProductInformation>(() => _encode_ProductInformation, $.BER)(value.targetInfos, $.BER),
            /* REQUIRED   */ _encode_TestReportInformation(value.testReportInfo, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<TestReportScenarioForOneCondition>(() => _encode_TestReportScenarioForOneCondition, $.BER)(value.testReports, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TestReportScenario(value, elGetter);
}


/* eslint-enable */

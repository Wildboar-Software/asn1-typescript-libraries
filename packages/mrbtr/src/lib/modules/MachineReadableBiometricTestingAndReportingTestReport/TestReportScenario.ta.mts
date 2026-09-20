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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MRTDBTRVersion, v0 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_MRTDBTRVersion, _encode_MRTDBTRVersion } from "../MachineReadableBiometricTestingAndReportingTestReport/MRTDBTRVersion.ta.mjs";
import { ProductInformation, _decode_ProductInformation, _encode_ProductInformation } from "../MachineReadableBiometricTestingAndReportingTestReport/ProductInformation.ta.mjs";
import { TestReportInformation, _decode_TestReportInformation, _encode_TestReportInformation } from "../MachineReadableBiometricTestingAndReportingTestReport/TestReportInformation.ta.mjs";
import { TestReportScenarioForOneCondition, _decode_TestReportScenarioForOneCondition, _encode_TestReportScenarioForOneCondition } from "../MachineReadableBiometricTestingAndReportingTestReport/TestReportScenarioForOneCondition.ta.mjs";


/**
 * @summary TestReportScenario
 * @description
 *
 * Results of an ISO/IEC 19795-2 scenario test (Clause 6.5.1).
 * `targetInfos` is the set of tested products (the IUT may be a
 * composite). One `testReports` element per condition. Informative
 * examples: Annex C.3.
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
         * @description
         *
         * Format version; defaults to `v0` (Clause 6.5.1).
         *
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<MRTDBTRVersion>,
        /**
         * @summary `targetInfos`.
         * @description
         *
         * Products under test (Clause 6.5.1).
         *
         * @public
         * @readonly
         */
        readonly targetInfos: ProductInformation[],
        /**
         * @summary `testReportInfo`.
         * @description
         *
         * Laboratory, claimed testing standard, issuance date, and
         * parent written report (Clause 6.5.1, 6.4.3).
         *
         * @public
         * @readonly
         */
        readonly testReportInfo: TestReportInformation,
        /**
         * @summary `testReports`.
         * @description
         *
         * One result set per test condition (Clause 6.5.1).
         *
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
    if (!_cached_encoder_for_TestReportScenario) { _cached_encoder_for_TestReportScenario = function (value: TestReportScenario): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.version === undefined || $.deepEq(value.version, TestReportScenario._default_value_for_version) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_MRTDBTRVersion, $.BER)(value.version, $.BER)),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<ProductInformation>(() => _encode_ProductInformation, $.BER), $.BER)(value.targetInfos, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 2, () => _encode_TestReportInformation, $.BER)(value.testReportInfo, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<TestReportScenarioForOneCondition>(() => _encode_TestReportScenarioForOneCondition, $.BER), $.BER)(value.testReports, $.BER),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TestReportScenario(value, elGetter);
}


/* eslint-enable */

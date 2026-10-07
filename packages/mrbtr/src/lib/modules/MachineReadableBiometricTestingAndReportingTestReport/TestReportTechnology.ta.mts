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
import { TestReportTechnologyForOneCondition, _decode_TestReportTechnologyForOneCondition, _encode_TestReportTechnologyForOneCondition } from "../MachineReadableBiometricTestingAndReportingTestReport/TestReportTechnologyForOneCondition.ta.mjs";


/**
 * @summary TestReportTechnology
 * @description
 *
 * Results of an ISO/IEC 19795-2 technology test (Clause 6.4.1). One
 * `testReports` element per test condition. Informative examples:
 * Annex C.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TestReportTechnology ::= SEQUENCE {
 *     version         MRTDBTRVersion DEFAULT v0,
 *     targetInfo      ProductInformation,
 *     testReportInfo  TestReportInformation,
 *     testReports     SEQUENCE OF TestReportTechnologyForOneCondition
 * }
 * ```
 * 
 * @class
 */
export
class TestReportTechnology {
    constructor (
        /**
         * @summary `version`.
         * @description
         *
         * Format version; defaults to `v0` (Clause 6.4.1).
         *
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<MRTDBTRVersion>,
        /**
         * @summary `targetInfo`.
         * @description
         *
         * Product under test (IUT).
         *
         * @public
         * @readonly
         */
        readonly targetInfo: ProductInformation,
        /**
         * @summary `testReportInfo`.
         * @description
         *
         * Laboratory, claimed testing standard, issuance date, and parent
         * written report.
         *
         * @public
         * @readonly
         */
        readonly testReportInfo: TestReportInformation,
        /**
         * @summary `testReports`.
         * @description
         *
         * One result set per test condition.
         *
         * @public
         * @readonly
         */
        readonly testReports: TestReportTechnologyForOneCondition[]
    ) {}

    /**
     * @summary Restructures an object into a TestReportTechnology
     * @description
     * 
     * This takes an `object` and converts it to a `TestReportTechnology`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TestReportTechnology`.
     * @returns {TestReportTechnology}
     */
    public static _from_object (_o: { [_K in keyof (TestReportTechnology)]: (TestReportTechnology)[_K] }): TestReportTechnology {
        return new TestReportTechnology(_o.version, _o.targetInfo, _o.testReportInfo, _o.testReports);
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
 * @summary The Leading Root Component Types of TestReportTechnology
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TestReportTechnology: $.ComponentSpec[] = [
    new $.ComponentSpec("version", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("targetInfo", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("testReportInfo", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("testReports", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of TestReportTechnology
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TestReportTechnology: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TestReportTechnology
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TestReportTechnology: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TestReportTechnology: $.ASN1Decoder<TestReportTechnology> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TestReportTechnology
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TestReportTechnology (el: _Element): TestReportTechnology {
    if (!_cached_decoder_for_TestReportTechnology) { _cached_decoder_for_TestReportTechnology = function (el: _Element): TestReportTechnology {
    let version: OPTIONAL<MRTDBTRVersion> = TestReportTechnology._default_value_for_version;
    let targetInfo!: ProductInformation;
    let testReportInfo!: TestReportInformation;
    let testReports!: TestReportTechnologyForOneCondition[];
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = _decode_MRTDBTRVersion(_el); },
        "targetInfo": (_el: _Element): void => { targetInfo = _decode_ProductInformation(_el); },
        "testReportInfo": (_el: _Element): void => { testReportInfo = _decode_TestReportInformation(_el); },
        "testReports": (_el: _Element): void => { testReports = $._decodeSequenceOf<TestReportTechnologyForOneCondition>(() => _decode_TestReportTechnologyForOneCondition)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TestReportTechnology,
        _extension_additions_list_spec_for_TestReportTechnology,
        _root_component_type_list_2_spec_for_TestReportTechnology,
        undefined,
    );
    return new TestReportTechnology(
        version,
        targetInfo,
        testReportInfo,
        testReports
    );
}; }
    return _cached_decoder_for_TestReportTechnology(el);
}

let _cached_encoder_for_TestReportTechnology: $.ASN1Encoder<TestReportTechnology> | null = null;

/**
 * @summary Encodes a(n) TestReportTechnology into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestReportTechnology, encoded as an ASN.1 Element.
 */
export
function _encode_TestReportTechnology (value: TestReportTechnology, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TestReportTechnology) { _cached_encoder_for_TestReportTechnology = function (value: TestReportTechnology): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.version === undefined || $.deepEq(value.version, TestReportTechnology._default_value_for_version) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_MRTDBTRVersion, $.BER)(value.version, $.BER)),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 1, () => _encode_ProductInformation, $.BER)(value.targetInfo, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 2, () => _encode_TestReportInformation, $.BER)(value.testReportInfo, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<TestReportTechnologyForOneCondition>(() => _encode_TestReportTechnologyForOneCondition, $.BER), $.BER)(value.testReports, $.BER),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TestReportTechnology(value, elGetter);
}


/* eslint-enable */

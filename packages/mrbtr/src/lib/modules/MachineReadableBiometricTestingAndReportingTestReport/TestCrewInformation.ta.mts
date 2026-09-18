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
import { ExpressionHistogram, _decode_ExpressionHistogram, _encode_ExpressionHistogram } from "../MachineReadableBiometricTestingAndReportingTestReport/ExpressionHistogram.ta.mjs";
// export { ExpressionHistogram, _decode_ExpressionHistogram, _encode_ExpressionHistogram } from "../MachineReadableBiometricTestingAndReportingTestReport/ExpressionHistogram.ta.mjs";
import { CorpusCrewBasicStatistics, _decode_CorpusCrewBasicStatistics, _encode_CorpusCrewBasicStatistics } from "../MachineReadableBiometricTestingAndReportingTestReport/CorpusCrewBasicStatistics.ta.mjs";
// export { CorpusCrewBasicStatistics, _decode_CorpusCrewBasicStatistics, _encode_CorpusCrewBasicStatistics } from "../MachineReadableBiometricTestingAndReportingTestReport/CorpusCrewBasicStatistics.ta.mjs";


/**
 * @summary TestCrewInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TestCrewInformation ::= SEQUENCE {
 *     identifier          OBJECT IDENTIFIER,
 *     location            VisibleString,
 *     habituation         ExpressionHistogram,
 *     testCrewStatistics  CorpusCrewBasicStatistics
 * }
 * ```
 * 
 * @class
 */
export
class TestCrewInformation {
    constructor (
        /**
         * @summary `identifier`.
         * @public
         * @readonly
         */
        readonly identifier: OBJECT_IDENTIFIER,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: VisibleString,
        /**
         * @summary `habituation`.
         * @public
         * @readonly
         */
        readonly habituation: ExpressionHistogram,
        /**
         * @summary `testCrewStatistics`.
         * @public
         * @readonly
         */
        readonly testCrewStatistics: CorpusCrewBasicStatistics
    ) {}

    /**
     * @summary Restructures an object into a TestCrewInformation
     * @description
     * 
     * This takes an `object` and converts it to a `TestCrewInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TestCrewInformation`.
     * @returns {TestCrewInformation}
     */
    public static _from_object (_o: { [_K in keyof (TestCrewInformation)]: (TestCrewInformation)[_K] }): TestCrewInformation {
        return new TestCrewInformation(_o.identifier, _o.location, _o.habituation, _o.testCrewStatistics);
    }


}

/**
 * @summary The Leading Root Component Types of TestCrewInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TestCrewInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("identifier", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("location", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("habituation", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("testCrewStatistics", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of TestCrewInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TestCrewInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TestCrewInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TestCrewInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TestCrewInformation: $.ASN1Decoder<TestCrewInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TestCrewInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TestCrewInformation (el: _Element): TestCrewInformation {
    if (!_cached_decoder_for_TestCrewInformation) { _cached_decoder_for_TestCrewInformation = function (el: _Element): TestCrewInformation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("TestCrewInformation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "identifier";
    sequence[1].name = "location";
    sequence[2].name = "habituation";
    sequence[3].name = "testCrewStatistics";
    let identifier!: OBJECT_IDENTIFIER;
    let location!: VisibleString;
    let habituation!: ExpressionHistogram;
    let testCrewStatistics!: CorpusCrewBasicStatistics;
    identifier = $._decodeObjectIdentifier(sequence[0]);
    location = $._decodeVisibleString(sequence[1]);
    habituation = _decode_ExpressionHistogram(sequence[2]);
    testCrewStatistics = _decode_CorpusCrewBasicStatistics(sequence[3]);
    return new TestCrewInformation(
        identifier,
        location,
        habituation,
        testCrewStatistics,

    );
}; }
    return _cached_decoder_for_TestCrewInformation(el);
}

let _cached_encoder_for_TestCrewInformation: $.ASN1Encoder<TestCrewInformation> | null = null;

/**
 * @summary Encodes a(n) TestCrewInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestCrewInformation, encoded as an ASN.1 Element.
 */
export
function _encode_TestCrewInformation (value: TestCrewInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TestCrewInformation) { _cached_encoder_for_TestCrewInformation = function (value: TestCrewInformation, elGetter: $.ASN1Encoder<TestCrewInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.identifier, $.BER),
            /* REQUIRED   */ $._encodeVisibleString(value.location, $.BER),
            /* REQUIRED   */ _encode_ExpressionHistogram(value.habituation, $.BER),
            /* REQUIRED   */ _encode_CorpusCrewBasicStatistics(value.testCrewStatistics, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TestCrewInformation(value, elGetter);
}


/* eslint-enable */

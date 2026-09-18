/* eslint-disable */
import {
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
import { TestLabInformation, _decode_TestLabInformation, _encode_TestLabInformation } from "../MachineReadableBiometricTestingAndReportingTestReport/TestLabInformation.ta.mjs";
// export { TestLabInformation, _decode_TestLabInformation, _encode_TestLabInformation } from "../MachineReadableBiometricTestingAndReportingTestReport/TestLabInformation.ta.mjs";
import { StandardDescription, _decode_StandardDescription, _encode_StandardDescription } from "../MachineReadableBiometricTestingAndReportingTestReport/StandardDescription.ta.mjs";
// export { StandardDescription, _decode_StandardDescription, _encode_StandardDescription } from "../MachineReadableBiometricTestingAndReportingTestReport/StandardDescription.ta.mjs";
import { Date, _decode_Date, _encode_Date } from "../MachineReadableBiometricTestingAndReportingTestReport/Date.ta.mjs";
// export { Date, _decode_Date, _encode_Date } from "../MachineReadableBiometricTestingAndReportingTestReport/Date.ta.mjs";
import { ExternalDocument, _decode_ExternalDocument, _encode_ExternalDocument } from "../MachineReadableBiometricTestingAndReportingTestReport/ExternalDocument.ta.mjs";
// export { ExternalDocument, _decode_ExternalDocument, _encode_ExternalDocument } from "../MachineReadableBiometricTestingAndReportingTestReport/ExternalDocument.ta.mjs";


/**
 * @summary TestReportInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TestReportInformation ::= SEQUENCE {
 *     testLabInformation      TestLabInformation,
 *     compliantStandard       StandardDescription,
 *     testReportIssuanceDate  Date,
 *     parentTestReport        ExternalDocument
 * }
 * ```
 * 
 * @class
 */
export
class TestReportInformation {
    constructor (
        /**
         * @summary `testLabInformation`.
         * @public
         * @readonly
         */
        readonly testLabInformation: TestLabInformation,
        /**
         * @summary `compliantStandard`.
         * @public
         * @readonly
         */
        readonly compliantStandard: StandardDescription,
        /**
         * @summary `testReportIssuanceDate`.
         * @public
         * @readonly
         */
        readonly testReportIssuanceDate: Date,
        /**
         * @summary `parentTestReport`.
         * @public
         * @readonly
         */
        readonly parentTestReport: ExternalDocument
    ) {}

    /**
     * @summary Restructures an object into a TestReportInformation
     * @description
     * 
     * This takes an `object` and converts it to a `TestReportInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TestReportInformation`.
     * @returns {TestReportInformation}
     */
    public static _from_object (_o: { [_K in keyof (TestReportInformation)]: (TestReportInformation)[_K] }): TestReportInformation {
        return new TestReportInformation(_o.testLabInformation, _o.compliantStandard, _o.testReportIssuanceDate, _o.parentTestReport);
    }


}

/**
 * @summary The Leading Root Component Types of TestReportInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TestReportInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("testLabInformation", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("compliantStandard", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("testReportIssuanceDate", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("parentTestReport", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of TestReportInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TestReportInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TestReportInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TestReportInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TestReportInformation: $.ASN1Decoder<TestReportInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TestReportInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TestReportInformation (el: _Element): TestReportInformation {
    if (!_cached_decoder_for_TestReportInformation) { _cached_decoder_for_TestReportInformation = function (el: _Element): TestReportInformation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("TestReportInformation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "testLabInformation";
    sequence[1].name = "compliantStandard";
    sequence[2].name = "testReportIssuanceDate";
    sequence[3].name = "parentTestReport";
    let testLabInformation!: TestLabInformation;
    let compliantStandard!: StandardDescription;
    let testReportIssuanceDate!: Date;
    let parentTestReport!: ExternalDocument;
    testLabInformation = _decode_TestLabInformation(sequence[0]);
    compliantStandard = _decode_StandardDescription(sequence[1]);
    testReportIssuanceDate = _decode_Date(sequence[2]);
    parentTestReport = _decode_ExternalDocument(sequence[3]);
    return new TestReportInformation(
        testLabInformation,
        compliantStandard,
        testReportIssuanceDate,
        parentTestReport,

    );
}; }
    return _cached_decoder_for_TestReportInformation(el);
}

let _cached_encoder_for_TestReportInformation: $.ASN1Encoder<TestReportInformation> | null = null;

/**
 * @summary Encodes a(n) TestReportInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestReportInformation, encoded as an ASN.1 Element.
 */
export
function _encode_TestReportInformation (value: TestReportInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TestReportInformation) { _cached_encoder_for_TestReportInformation = function (value: TestReportInformation): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 0, () => _encode_TestLabInformation, $.BER)(value.testLabInformation, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 1, () => _encode_StandardDescription, $.BER)(value.compliantStandard, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 2, () => _encode_Date, $.BER)(value.testReportIssuanceDate, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 3, () => _encode_ExternalDocument, $.BER)(value.parentTestReport, $.BER),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TestReportInformation(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */
import {
    OPTIONAL,
    REAL,
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
import { StatisticInformationSet, _decode_StatisticInformationSet, _encode_StatisticInformationSet } from "../MachineReadableBiometricTestingAndReportingTestReport/StatisticInformationSet.ta.mjs";
// export { StatisticInformationSet, _decode_StatisticInformationSet, _encode_StatisticInformationSet } from "../MachineReadableBiometricTestingAndReportingTestReport/StatisticInformationSet.ta.mjs";


/**
 * @summary TestResultEnrol
 * @description
 *
 * Enrolment-phase result (Clause 6.4.4.3.1). Technology tests: FTE is
 * the fraction of enrolment samples not converted into a template
 * (Annex C.2). Scenario tests: FTE is the fraction of enrolment
 * transactions that did not produce an enrolled identity (Annex C.3
 * Table C.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TestResultEnrol ::= SEQUENCE {
 *     failureToEnrolRate  REAL,
 *     durationEnrol       StatisticInformationSet OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TestResultEnrol {
    constructor (
        /**
         * @summary `failureToEnrolRate`.
         * @description
         *
         * Failure-to-enrol rate (FTE) (Clause 6.4.4.3.1).
         *
         * @public
         * @readonly
         */
        readonly failureToEnrolRate: REAL,
        /**
         * @summary `durationEnrol`.
         * @description
         *
         * Enrolment duration statistics; covers successful and failed
         * operations (Clause 6.4.4.3.1, Annex C.2).
         *
         * @public
         * @readonly
         */
        readonly durationEnrol: OPTIONAL<StatisticInformationSet>
    ) {}

    /**
     * @summary Restructures an object into a TestResultEnrol
     * @description
     * 
     * This takes an `object` and converts it to a `TestResultEnrol`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TestResultEnrol`.
     * @returns {TestResultEnrol}
     */
    public static _from_object (_o: { [_K in keyof (TestResultEnrol)]: (TestResultEnrol)[_K] }): TestResultEnrol {
        return new TestResultEnrol(_o.failureToEnrolRate, _o.durationEnrol);
    }


}

/**
 * @summary The Leading Root Component Types of TestResultEnrol
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TestResultEnrol: $.ComponentSpec[] = [
    new $.ComponentSpec("failureToEnrolRate", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("durationEnrol", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of TestResultEnrol
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TestResultEnrol: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TestResultEnrol
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TestResultEnrol: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TestResultEnrol: $.ASN1Decoder<TestResultEnrol> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TestResultEnrol
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TestResultEnrol (el: _Element): TestResultEnrol {
    if (!_cached_decoder_for_TestResultEnrol) { _cached_decoder_for_TestResultEnrol = function (el: _Element): TestResultEnrol {
    let failureToEnrolRate!: REAL;
    let durationEnrol: OPTIONAL<StatisticInformationSet>;
    const callbacks: $.DecodingMap = {
        "failureToEnrolRate": (_el: _Element): void => { failureToEnrolRate = $._decodeReal(_el); },
        "durationEnrol": (_el: _Element): void => { durationEnrol = _decode_StatisticInformationSet(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TestResultEnrol,
        _extension_additions_list_spec_for_TestResultEnrol,
        _root_component_type_list_2_spec_for_TestResultEnrol,
        undefined,
    );
    return new TestResultEnrol(
        failureToEnrolRate,
        durationEnrol
    );
}; }
    return _cached_decoder_for_TestResultEnrol(el);
}

let _cached_encoder_for_TestResultEnrol: $.ASN1Encoder<TestResultEnrol> | null = null;

/**
 * @summary Encodes a(n) TestResultEnrol into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestResultEnrol, encoded as an ASN.1 Element.
 */
export
function _encode_TestResultEnrol (value: TestResultEnrol, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TestResultEnrol) { _cached_encoder_for_TestResultEnrol = function (value: TestResultEnrol): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeReal, $.BER)(value.failureToEnrolRate, $.BER),
            /* IF_ABSENT */ ((value.durationEnrol === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_StatisticInformationSet, $.BER)(value.durationEnrol, $.BER)),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TestResultEnrol(value, elGetter);
}


/* eslint-enable */

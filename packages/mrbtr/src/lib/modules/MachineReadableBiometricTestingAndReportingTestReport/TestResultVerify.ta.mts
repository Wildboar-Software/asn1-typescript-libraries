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
import { ResultMatchVerify, _decode_ResultMatchVerify, _encode_ResultMatchVerify } from "../MachineReadableBiometricTestingAndReportingTestReport/ResultMatchVerify.ta.mjs";
import { StatisticInformationSet, _decode_StatisticInformationSet, _encode_StatisticInformationSet } from "../MachineReadableBiometricTestingAndReportingTestReport/StatisticInformationSet.ta.mjs";


/**
 * @summary TestResultVerify
 * @description
 *
 * Verification matching result (Clause 6.4.4.3.3): DET curves and/or
 * comparison-score distribution, plus optional duration.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TestResultVerify ::= SEQUENCE {
 *     resultMatchVerify   ResultMatchVerify,
 *     durationVerify      StatisticInformationSet OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TestResultVerify {
    constructor (
        /**
         * @summary `resultMatchVerify`.
         * @description
         *
         * FNMR/FMR, FRR/FAR, and/or GFRR/GFAR DETs, plus optional score
         * distribution (Clause 6.4.4.3.3).
         *
         * @public
         * @readonly
         */
        readonly resultMatchVerify: ResultMatchVerify,
        /**
         * @summary `durationVerify`.
         * @description
         *
         * Verification duration statistics (Clause 6.4.4.3.3).
         *
         * @public
         * @readonly
         */
        readonly durationVerify: OPTIONAL<StatisticInformationSet>
    ) {}

    /**
     * @summary Restructures an object into a TestResultVerify
     * @description
     * 
     * This takes an `object` and converts it to a `TestResultVerify`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TestResultVerify`.
     * @returns {TestResultVerify}
     */
    public static _from_object (_o: { [_K in keyof (TestResultVerify)]: (TestResultVerify)[_K] }): TestResultVerify {
        return new TestResultVerify(_o.resultMatchVerify, _o.durationVerify);
    }


}

/**
 * @summary The Leading Root Component Types of TestResultVerify
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TestResultVerify: $.ComponentSpec[] = [
    new $.ComponentSpec("resultMatchVerify", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("durationVerify", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of TestResultVerify
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TestResultVerify: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TestResultVerify
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TestResultVerify: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TestResultVerify: $.ASN1Decoder<TestResultVerify> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TestResultVerify
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TestResultVerify (el: _Element): TestResultVerify {
    if (!_cached_decoder_for_TestResultVerify) { _cached_decoder_for_TestResultVerify = function (el: _Element): TestResultVerify {
    let resultMatchVerify!: ResultMatchVerify;
    let durationVerify: OPTIONAL<StatisticInformationSet>;
    const callbacks: $.DecodingMap = {
        "resultMatchVerify": (_el: _Element): void => { resultMatchVerify = _decode_ResultMatchVerify(_el); },
        "durationVerify": (_el: _Element): void => { durationVerify = _decode_StatisticInformationSet(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TestResultVerify,
        _extension_additions_list_spec_for_TestResultVerify,
        _root_component_type_list_2_spec_for_TestResultVerify,
        undefined,
    );
    return new TestResultVerify(
        resultMatchVerify,
        durationVerify
    );
}; }
    return _cached_decoder_for_TestResultVerify(el);
}

let _cached_encoder_for_TestResultVerify: $.ASN1Encoder<TestResultVerify> | null = null;

/**
 * @summary Encodes a(n) TestResultVerify into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestResultVerify, encoded as an ASN.1 Element.
 */
export
function _encode_TestResultVerify (value: TestResultVerify, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TestResultVerify) { _cached_encoder_for_TestResultVerify = function (value: TestResultVerify): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 0, () => _encode_ResultMatchVerify, $.BER)(value.resultMatchVerify, $.BER),
            /* IF_ABSENT */ ((value.durationVerify === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_StatisticInformationSet, $.BER)(value.durationVerify, $.BER)),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TestResultVerify(value, elGetter);
}


/* eslint-enable */

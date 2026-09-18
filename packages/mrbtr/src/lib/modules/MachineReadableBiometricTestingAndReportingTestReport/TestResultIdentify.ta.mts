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
import { ResultMatchClosedIdentify, _decode_ResultMatchClosedIdentify, _encode_ResultMatchClosedIdentify } from "../MachineReadableBiometricTestingAndReportingTestReport/ResultMatchClosedIdentify.ta.mjs";
// export { ResultMatchClosedIdentify, _decode_ResultMatchClosedIdentify, _encode_ResultMatchClosedIdentify } from "../MachineReadableBiometricTestingAndReportingTestReport/ResultMatchClosedIdentify.ta.mjs";
import { ResultMatchOpenIdentify, _decode_ResultMatchOpenIdentify, _encode_ResultMatchOpenIdentify } from "../MachineReadableBiometricTestingAndReportingTestReport/ResultMatchOpenIdentify.ta.mjs";
// export { ResultMatchOpenIdentify, _decode_ResultMatchOpenIdentify, _encode_ResultMatchOpenIdentify } from "../MachineReadableBiometricTestingAndReportingTestReport/ResultMatchOpenIdentify.ta.mjs";


/**
 * @summary TestResultIdentify
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TestResultIdentify ::= SEQUENCE {
 *     resultMatchClosedIdentify   ResultMatchClosedIdentify,
 *     resultMatchOpenIdentify     ResultMatchOpenIdentify OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TestResultIdentify {
    constructor (
        /**
         * @summary `resultMatchClosedIdentify`.
         * @public
         * @readonly
         */
        readonly resultMatchClosedIdentify: ResultMatchClosedIdentify,
        /**
         * @summary `resultMatchOpenIdentify`.
         * @public
         * @readonly
         */
        readonly resultMatchOpenIdentify: OPTIONAL<ResultMatchOpenIdentify>
    ) {}

    /**
     * @summary Restructures an object into a TestResultIdentify
     * @description
     * 
     * This takes an `object` and converts it to a `TestResultIdentify`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TestResultIdentify`.
     * @returns {TestResultIdentify}
     */
    public static _from_object (_o: { [_K in keyof (TestResultIdentify)]: (TestResultIdentify)[_K] }): TestResultIdentify {
        return new TestResultIdentify(_o.resultMatchClosedIdentify, _o.resultMatchOpenIdentify);
    }


}

/**
 * @summary The Leading Root Component Types of TestResultIdentify
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TestResultIdentify: $.ComponentSpec[] = [
    new $.ComponentSpec("resultMatchClosedIdentify", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("resultMatchOpenIdentify", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of TestResultIdentify
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TestResultIdentify: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TestResultIdentify
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TestResultIdentify: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TestResultIdentify: $.ASN1Decoder<TestResultIdentify> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TestResultIdentify
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TestResultIdentify (el: _Element): TestResultIdentify {
    if (!_cached_decoder_for_TestResultIdentify) { _cached_decoder_for_TestResultIdentify = function (el: _Element): TestResultIdentify {
    let resultMatchClosedIdentify!: ResultMatchClosedIdentify;
    let resultMatchOpenIdentify: OPTIONAL<ResultMatchOpenIdentify>;
    const callbacks: $.DecodingMap = {
        "resultMatchClosedIdentify": (_el: _Element): void => { resultMatchClosedIdentify = _decode_ResultMatchClosedIdentify(_el); },
        "resultMatchOpenIdentify": (_el: _Element): void => { resultMatchOpenIdentify = _decode_ResultMatchOpenIdentify(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TestResultIdentify,
        _extension_additions_list_spec_for_TestResultIdentify,
        _root_component_type_list_2_spec_for_TestResultIdentify,
        undefined,
    );
    return new TestResultIdentify(
        resultMatchClosedIdentify,
        resultMatchOpenIdentify
    );
}; }
    return _cached_decoder_for_TestResultIdentify(el);
}

let _cached_encoder_for_TestResultIdentify: $.ASN1Encoder<TestResultIdentify> | null = null;

/**
 * @summary Encodes a(n) TestResultIdentify into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestResultIdentify, encoded as an ASN.1 Element.
 */
export
function _encode_TestResultIdentify (value: TestResultIdentify, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TestResultIdentify) { _cached_encoder_for_TestResultIdentify = function (value: TestResultIdentify, elGetter: $.ASN1Encoder<TestResultIdentify>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 0, () => _encode_ResultMatchClosedIdentify, $.BER)(value.resultMatchClosedIdentify, $.BER),
            /* IF_ABSENT */ ((value.resultMatchOpenIdentify === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ResultMatchOpenIdentify, $.BER)(value.resultMatchOpenIdentify, $.BER)),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TestResultIdentify(value, elGetter);
}


/* eslint-enable */

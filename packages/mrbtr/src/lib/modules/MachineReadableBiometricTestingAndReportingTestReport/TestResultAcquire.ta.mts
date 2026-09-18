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
import { StatisticInformationSet, _decode_StatisticInformationSet, _encode_StatisticInformationSet } from "../MachineReadableBiometricTestingAndReportingTestReport/StatisticInformationSet.ta.mjs";
// export { StatisticInformationSet, _decode_StatisticInformationSet, _encode_StatisticInformationSet } from "../MachineReadableBiometricTestingAndReportingTestReport/StatisticInformationSet.ta.mjs";


/**
 * @summary TestResultAcquire
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TestResultAcquire ::= SEQUENCE {
 *     failureToAcquireRate    REAL,
 *     durationAcquire         StatisticInformationSet OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TestResultAcquire {
    constructor (
        /**
         * @summary `failureToAcquireRate`.
         * @public
         * @readonly
         */
        readonly failureToAcquireRate: REAL,
        /**
         * @summary `durationAcquire`.
         * @public
         * @readonly
         */
        readonly durationAcquire: OPTIONAL<StatisticInformationSet>
    ) {}

    /**
     * @summary Restructures an object into a TestResultAcquire
     * @description
     * 
     * This takes an `object` and converts it to a `TestResultAcquire`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TestResultAcquire`.
     * @returns {TestResultAcquire}
     */
    public static _from_object (_o: { [_K in keyof (TestResultAcquire)]: (TestResultAcquire)[_K] }): TestResultAcquire {
        return new TestResultAcquire(_o.failureToAcquireRate, _o.durationAcquire);
    }


}

/**
 * @summary The Leading Root Component Types of TestResultAcquire
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TestResultAcquire: $.ComponentSpec[] = [
    new $.ComponentSpec("failureToAcquireRate", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("durationAcquire", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of TestResultAcquire
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TestResultAcquire: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TestResultAcquire
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TestResultAcquire: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TestResultAcquire: $.ASN1Decoder<TestResultAcquire> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TestResultAcquire
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TestResultAcquire (el: _Element): TestResultAcquire {
    if (!_cached_decoder_for_TestResultAcquire) { _cached_decoder_for_TestResultAcquire = function (el: _Element): TestResultAcquire {
    let failureToAcquireRate!: REAL;
    let durationAcquire: OPTIONAL<StatisticInformationSet>;
    const callbacks: $.DecodingMap = {
        "failureToAcquireRate": (_el: _Element): void => { failureToAcquireRate = $._decodeReal(_el); },
        "durationAcquire": (_el: _Element): void => { durationAcquire = _decode_StatisticInformationSet(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TestResultAcquire,
        _extension_additions_list_spec_for_TestResultAcquire,
        _root_component_type_list_2_spec_for_TestResultAcquire,
        undefined,
    );
    return new TestResultAcquire(
        failureToAcquireRate,
        durationAcquire
    );
}; }
    return _cached_decoder_for_TestResultAcquire(el);
}

let _cached_encoder_for_TestResultAcquire: $.ASN1Encoder<TestResultAcquire> | null = null;

/**
 * @summary Encodes a(n) TestResultAcquire into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestResultAcquire, encoded as an ASN.1 Element.
 */
export
function _encode_TestResultAcquire (value: TestResultAcquire, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TestResultAcquire) { _cached_encoder_for_TestResultAcquire = function (value: TestResultAcquire, elGetter: $.ASN1Encoder<TestResultAcquire>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeReal, $.BER)(value.failureToAcquireRate, $.BER),
            /* IF_ABSENT */ ((value.durationAcquire === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_StatisticInformationSet, $.BER)(value.durationAcquire, $.BER)),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TestResultAcquire(value, elGetter);
}


/* eslint-enable */

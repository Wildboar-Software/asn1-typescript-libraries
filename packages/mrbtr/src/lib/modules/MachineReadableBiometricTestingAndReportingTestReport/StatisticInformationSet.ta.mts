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
import { UnitTime, _enum_for_UnitTime, UnitTime_millisecond /* IMPORTED_LONG_ENUMERATION_ITEM */, millisecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnitTime_second /* IMPORTED_LONG_ENUMERATION_ITEM */, second /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_UnitTime, _encode_UnitTime } from "../MachineReadableBiometricTestingAndReportingTestReport/UnitTime.ta.mjs";
// export { UnitTime, _enum_for_UnitTime, UnitTime_millisecond /* IMPORTED_LONG_ENUMERATION_ITEM */, millisecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnitTime_second /* IMPORTED_LONG_ENUMERATION_ITEM */, second /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_UnitTime, _encode_UnitTime } from "../MachineReadableBiometricTestingAndReportingTestReport/UnitTime.ta.mjs";


/**
 * @summary StatisticInformationSet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StatisticInformationSet ::= SEQUENCE {
 *     unitTime                UnitTime,
 *     numberOfMeasurements    INTEGER OPTIONAL,
 *     median                  REAL OPTIONAL,
 *     mean                    REAL OPTIONAL,
 *     minimum                 REAL OPTIONAL,
 *     maximum                 REAL OPTIONAL,
 *     stdDev                  REAL OPTIONAL,
 *     medAbsDev               REAL OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class StatisticInformationSet {
    constructor (
        /**
         * @summary `unitTime`.
         * @public
         * @readonly
         */
        readonly unitTime: UnitTime,
        /**
         * @summary `numberOfMeasurements`.
         * @public
         * @readonly
         */
        readonly numberOfMeasurements: OPTIONAL<INTEGER>,
        /**
         * @summary `median`.
         * @public
         * @readonly
         */
        readonly median: OPTIONAL<REAL>,
        /**
         * @summary `mean`.
         * @public
         * @readonly
         */
        readonly mean: OPTIONAL<REAL>,
        /**
         * @summary `minimum`.
         * @public
         * @readonly
         */
        readonly minimum: OPTIONAL<REAL>,
        /**
         * @summary `maximum`.
         * @public
         * @readonly
         */
        readonly maximum: OPTIONAL<REAL>,
        /**
         * @summary `stdDev`.
         * @public
         * @readonly
         */
        readonly stdDev: OPTIONAL<REAL>,
        /**
         * @summary `medAbsDev`.
         * @public
         * @readonly
         */
        readonly medAbsDev: OPTIONAL<REAL>
    ) {}

    /**
     * @summary Restructures an object into a StatisticInformationSet
     * @description
     * 
     * This takes an `object` and converts it to a `StatisticInformationSet`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StatisticInformationSet`.
     * @returns {StatisticInformationSet}
     */
    public static _from_object (_o: { [_K in keyof (StatisticInformationSet)]: (StatisticInformationSet)[_K] }): StatisticInformationSet {
        return new StatisticInformationSet(_o.unitTime, _o.numberOfMeasurements, _o.median, _o.mean, _o.minimum, _o.maximum, _o.stdDev, _o.medAbsDev);
    }

        /**
         * @summary The enum used as the type of the component `unitTime`
         * @public
         * @static
         */

    public static _enum_for_unitTime = _enum_for_UnitTime;
}

/**
 * @summary The Leading Root Component Types of StatisticInformationSet
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StatisticInformationSet: $.ComponentSpec[] = [
    new $.ComponentSpec("unitTime", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("numberOfMeasurements", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("median", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mean", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("minimum", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("maximum", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("stdDev", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("medAbsDev", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of StatisticInformationSet
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StatisticInformationSet: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StatisticInformationSet
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StatisticInformationSet: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StatisticInformationSet: $.ASN1Decoder<StatisticInformationSet> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StatisticInformationSet
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StatisticInformationSet (el: _Element): StatisticInformationSet {
    if (!_cached_decoder_for_StatisticInformationSet) { _cached_decoder_for_StatisticInformationSet = function (el: _Element): StatisticInformationSet {
    let unitTime!: UnitTime;
    let numberOfMeasurements: OPTIONAL<INTEGER>;
    let median: OPTIONAL<REAL>;
    let mean: OPTIONAL<REAL>;
    let minimum: OPTIONAL<REAL>;
    let maximum: OPTIONAL<REAL>;
    let stdDev: OPTIONAL<REAL>;
    let medAbsDev: OPTIONAL<REAL>;
    const callbacks: $.DecodingMap = {
        "unitTime": (_el: _Element): void => { unitTime = _decode_UnitTime(_el); },
        "numberOfMeasurements": (_el: _Element): void => { numberOfMeasurements = $._decodeInteger(_el); },
        "median": (_el: _Element): void => { median = $._decodeReal(_el); },
        "mean": (_el: _Element): void => { mean = $._decodeReal(_el); },
        "minimum": (_el: _Element): void => { minimum = $._decodeReal(_el); },
        "maximum": (_el: _Element): void => { maximum = $._decodeReal(_el); },
        "stdDev": (_el: _Element): void => { stdDev = $._decodeReal(_el); },
        "medAbsDev": (_el: _Element): void => { medAbsDev = $._decodeReal(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StatisticInformationSet,
        _extension_additions_list_spec_for_StatisticInformationSet,
        _root_component_type_list_2_spec_for_StatisticInformationSet,
        undefined,
    );
    return new StatisticInformationSet(
        unitTime,
        numberOfMeasurements,
        median,
        mean,
        minimum,
        maximum,
        stdDev,
        medAbsDev
    );
}; }
    return _cached_decoder_for_StatisticInformationSet(el);
}

let _cached_encoder_for_StatisticInformationSet: $.ASN1Encoder<StatisticInformationSet> | null = null;

/**
 * @summary Encodes a(n) StatisticInformationSet into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StatisticInformationSet, encoded as an ASN.1 Element.
 */
export
function _encode_StatisticInformationSet (value: StatisticInformationSet, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StatisticInformationSet) { _cached_encoder_for_StatisticInformationSet = function (value: StatisticInformationSet, elGetter: $.ASN1Encoder<StatisticInformationSet>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 0, () => _encode_UnitTime, $.BER)(value.unitTime, $.BER),
            /* IF_ABSENT */ ((value.numberOfMeasurements === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.numberOfMeasurements, $.BER)),
            /* IF_ABSENT */ ((value.median === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeReal, $.BER)(value.median, $.BER)),
            /* IF_ABSENT */ ((value.mean === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeReal, $.BER)(value.mean, $.BER)),
            /* IF_ABSENT */ ((value.minimum === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeReal, $.BER)(value.minimum, $.BER)),
            /* IF_ABSENT */ ((value.maximum === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeReal, $.BER)(value.maximum, $.BER)),
            /* IF_ABSENT */ ((value.stdDev === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeReal, $.BER)(value.stdDev, $.BER)),
            /* IF_ABSENT */ ((value.medAbsDev === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeReal, $.BER)(value.medAbsDev, $.BER)),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StatisticInformationSet(value, elGetter);
}


/* eslint-enable */

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
import { InfoCumulativeDistribution, _decode_InfoCumulativeDistribution, _encode_InfoCumulativeDistribution } from "../MachineReadableBiometricTestingAndReportingTestReport/InfoCumulativeDistribution.ta.mjs";
// export { InfoCumulativeDistribution, _decode_InfoCumulativeDistribution, _encode_InfoCumulativeDistribution } from "../MachineReadableBiometricTestingAndReportingTestReport/InfoCumulativeDistribution.ta.mjs";


/**
 * @summary CorpusCrewBasicStatistics
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CorpusCrewBasicStatistics ::= SEQUENCE {
 *     numIndividuals          INTEGER,
 *     numMales                INTEGER OPTIONAL,
 *     numFemales              INTEGER OPTIONAL,
 *     numOther                INTEGER OPTIONAL,
 *     numUnknown              INTEGER OPTIONAL,
 *     numIndividualsEnrol     INTEGER,
 *     numIndividualsVeriId    INTEGER,
 *     ageDistrMale            InfoCumulativeDistribution OPTIONAL,
 *     ageDistrFemale          InfoCumulativeDistribution OPTIONAL,
 *     elapsDistr              InfoCumulativeDistribution OPTIONAL,
 *     visitsDayDistr          InfoCumulativeDistribution OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CorpusCrewBasicStatistics {
    constructor (
        /**
         * @summary `numIndividuals`.
         * @public
         * @readonly
         */
        readonly numIndividuals: INTEGER,
        /**
         * @summary `numMales`.
         * @public
         * @readonly
         */
        readonly numMales: OPTIONAL<INTEGER>,
        /**
         * @summary `numFemales`.
         * @public
         * @readonly
         */
        readonly numFemales: OPTIONAL<INTEGER>,
        /**
         * @summary `numOther`.
         * @public
         * @readonly
         */
        readonly numOther: OPTIONAL<INTEGER>,
        /**
         * @summary `numUnknown`.
         * @public
         * @readonly
         */
        readonly numUnknown: OPTIONAL<INTEGER>,
        /**
         * @summary `numIndividualsEnrol`.
         * @public
         * @readonly
         */
        readonly numIndividualsEnrol: INTEGER,
        /**
         * @summary `numIndividualsVeriId`.
         * @public
         * @readonly
         */
        readonly numIndividualsVeriId: INTEGER,
        /**
         * @summary `ageDistrMale`.
         * @public
         * @readonly
         */
        readonly ageDistrMale: OPTIONAL<InfoCumulativeDistribution>,
        /**
         * @summary `ageDistrFemale`.
         * @public
         * @readonly
         */
        readonly ageDistrFemale: OPTIONAL<InfoCumulativeDistribution>,
        /**
         * @summary `elapsDistr`.
         * @public
         * @readonly
         */
        readonly elapsDistr: OPTIONAL<InfoCumulativeDistribution>,
        /**
         * @summary `visitsDayDistr`.
         * @public
         * @readonly
         */
        readonly visitsDayDistr: OPTIONAL<InfoCumulativeDistribution>
    ) {}

    /**
     * @summary Restructures an object into a CorpusCrewBasicStatistics
     * @description
     * 
     * This takes an `object` and converts it to a `CorpusCrewBasicStatistics`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CorpusCrewBasicStatistics`.
     * @returns {CorpusCrewBasicStatistics}
     */
    public static _from_object (_o: { [_K in keyof (CorpusCrewBasicStatistics)]: (CorpusCrewBasicStatistics)[_K] }): CorpusCrewBasicStatistics {
        return new CorpusCrewBasicStatistics(_o.numIndividuals, _o.numMales, _o.numFemales, _o.numOther, _o.numUnknown, _o.numIndividualsEnrol, _o.numIndividualsVeriId, _o.ageDistrMale, _o.ageDistrFemale, _o.elapsDistr, _o.visitsDayDistr);
    }


}

/**
 * @summary The Leading Root Component Types of CorpusCrewBasicStatistics
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CorpusCrewBasicStatistics: $.ComponentSpec[] = [
    new $.ComponentSpec("numIndividuals", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("numMales", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("numFemales", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("numOther", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("numUnknown", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("numIndividualsEnrol", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("numIndividualsVeriId", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("ageDistrMale", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("ageDistrFemale", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("elapsDistr", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("visitsDayDistr", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of CorpusCrewBasicStatistics
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CorpusCrewBasicStatistics: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CorpusCrewBasicStatistics
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CorpusCrewBasicStatistics: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CorpusCrewBasicStatistics: $.ASN1Decoder<CorpusCrewBasicStatistics> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CorpusCrewBasicStatistics
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CorpusCrewBasicStatistics (el: _Element): CorpusCrewBasicStatistics {
    if (!_cached_decoder_for_CorpusCrewBasicStatistics) { _cached_decoder_for_CorpusCrewBasicStatistics = function (el: _Element): CorpusCrewBasicStatistics {
    let numIndividuals!: INTEGER;
    let numMales: OPTIONAL<INTEGER>;
    let numFemales: OPTIONAL<INTEGER>;
    let numOther: OPTIONAL<INTEGER>;
    let numUnknown: OPTIONAL<INTEGER>;
    let numIndividualsEnrol!: INTEGER;
    let numIndividualsVeriId!: INTEGER;
    let ageDistrMale: OPTIONAL<InfoCumulativeDistribution>;
    let ageDistrFemale: OPTIONAL<InfoCumulativeDistribution>;
    let elapsDistr: OPTIONAL<InfoCumulativeDistribution>;
    let visitsDayDistr: OPTIONAL<InfoCumulativeDistribution>;
    const callbacks: $.DecodingMap = {
        "numIndividuals": (_el: _Element): void => { numIndividuals = $._decodeInteger(_el); },
        "numMales": (_el: _Element): void => { numMales = $._decodeInteger(_el); },
        "numFemales": (_el: _Element): void => { numFemales = $._decodeInteger(_el); },
        "numOther": (_el: _Element): void => { numOther = $._decodeInteger(_el); },
        "numUnknown": (_el: _Element): void => { numUnknown = $._decodeInteger(_el); },
        "numIndividualsEnrol": (_el: _Element): void => { numIndividualsEnrol = $._decodeInteger(_el); },
        "numIndividualsVeriId": (_el: _Element): void => { numIndividualsVeriId = $._decodeInteger(_el); },
        "ageDistrMale": (_el: _Element): void => { ageDistrMale = _decode_InfoCumulativeDistribution(_el); },
        "ageDistrFemale": (_el: _Element): void => { ageDistrFemale = _decode_InfoCumulativeDistribution(_el); },
        "elapsDistr": (_el: _Element): void => { elapsDistr = _decode_InfoCumulativeDistribution(_el); },
        "visitsDayDistr": (_el: _Element): void => { visitsDayDistr = _decode_InfoCumulativeDistribution(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CorpusCrewBasicStatistics,
        _extension_additions_list_spec_for_CorpusCrewBasicStatistics,
        _root_component_type_list_2_spec_for_CorpusCrewBasicStatistics,
        undefined,
    );
    return new CorpusCrewBasicStatistics(
        numIndividuals,
        numMales,
        numFemales,
        numOther,
        numUnknown,
        numIndividualsEnrol,
        numIndividualsVeriId,
        ageDistrMale,
        ageDistrFemale,
        elapsDistr,
        visitsDayDistr
    );
}; }
    return _cached_decoder_for_CorpusCrewBasicStatistics(el);
}

let _cached_encoder_for_CorpusCrewBasicStatistics: $.ASN1Encoder<CorpusCrewBasicStatistics> | null = null;

/**
 * @summary Encodes a(n) CorpusCrewBasicStatistics into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CorpusCrewBasicStatistics, encoded as an ASN.1 Element.
 */
export
function _encode_CorpusCrewBasicStatistics (value: CorpusCrewBasicStatistics, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CorpusCrewBasicStatistics) { _cached_encoder_for_CorpusCrewBasicStatistics = function (value: CorpusCrewBasicStatistics, elGetter: $.ASN1Encoder<CorpusCrewBasicStatistics>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.numIndividuals, $.BER),
            /* IF_ABSENT  */ ((value.numMales === undefined) ? undefined : $._encodeInteger(value.numMales, $.BER)),
            /* IF_ABSENT  */ ((value.numFemales === undefined) ? undefined : $._encodeInteger(value.numFemales, $.BER)),
            /* IF_ABSENT  */ ((value.numOther === undefined) ? undefined : $._encodeInteger(value.numOther, $.BER)),
            /* IF_ABSENT  */ ((value.numUnknown === undefined) ? undefined : $._encodeInteger(value.numUnknown, $.BER)),
            /* REQUIRED   */ $._encodeInteger(value.numIndividualsEnrol, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.numIndividualsVeriId, $.BER),
            /* IF_ABSENT  */ ((value.ageDistrMale === undefined) ? undefined : _encode_InfoCumulativeDistribution(value.ageDistrMale, $.BER)),
            /* IF_ABSENT  */ ((value.ageDistrFemale === undefined) ? undefined : _encode_InfoCumulativeDistribution(value.ageDistrFemale, $.BER)),
            /* IF_ABSENT  */ ((value.elapsDistr === undefined) ? undefined : _encode_InfoCumulativeDistribution(value.elapsDistr, $.BER)),
            /* IF_ABSENT  */ ((value.visitsDayDistr === undefined) ? undefined : _encode_InfoCumulativeDistribution(value.visitsDayDistr, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CorpusCrewBasicStatistics(value, elGetter);
}


/* eslint-enable */

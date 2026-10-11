/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
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


/**
 * @summary CorpusCrewBasicStatistics
 * @description
 *
 * Counts and optional CDFs shared by a corpus and a scenario test crew
 * (Clause 6.4.4.2). `numIndividuals` shall be ≥ `numIndividualsEnrol`
 * and ≥ `numIndividualsVeriId`. For identification,
 * `numIndividualsVeriId` is the size of the population searched.
 * `numOther` and `numUnknown` appear in Annex A but are not described
 * in Clause 6.4.4.2.
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
         * @description
         *
         * Unique individuals in the corpus or crew (Clause 6.4.4.2).
         *
         * @public
         * @readonly
         */
        readonly numIndividuals: INTEGER,
        /**
         * @summary `numMales`.
         * @description
         *
         * Male subjects (Clause 6.4.4.2).
         *
         * @public
         * @readonly
         */
        readonly numMales: OPTIONAL<INTEGER>,
        /**
         * @summary `numFemales`.
         * @description
         *
         * Female subjects (Clause 6.4.4.2).
         *
         * @public
         * @readonly
         */
        readonly numFemales: OPTIONAL<INTEGER>,
        /**
         * @summary `numOther`.
         * @description
         *
         * Present in Annex A. Clause 6.4.4.2 does not define this
         * count.
         *
         * @public
         * @readonly
         */
        readonly numOther: OPTIONAL<INTEGER>,
        /**
         * @summary `numUnknown`.
         * @description
         *
         * Present in Annex A. Clause 6.4.4.2 does not define this
         * count.
         *
         * @public
         * @readonly
         */
        readonly numUnknown: OPTIONAL<INTEGER>,
        /**
         * @summary `numIndividualsEnrol`.
         * @description
         *
         * Individuals in the enrolment set. Shall be ≤
         * `numIndividuals` (Clause 6.4.4.2).
         *
         * @public
         * @readonly
         */
        readonly numIndividualsEnrol: INTEGER,
        /**
         * @summary `numIndividualsVeriId`.
         * @description
         *
         * Individuals in the verification or identification set. For
         * identification, size of the searched population
         * (Clause 6.4.4.2).
         *
         * @public
         * @readonly
         */
        readonly numIndividualsVeriId: INTEGER,
        /**
         * @summary `ageDistrMale`.
         * @description
         *
         * CDF of male age in years: proportion whose age ≤ X
         * (Clause 6.4.4.2).
         *
         * @public
         * @readonly
         */
        readonly ageDistrMale: OPTIONAL<InfoCumulativeDistribution>,
        /**
         * @summary `ageDistrFemale`.
         * @description
         *
         * CDF of female age in years: proportion whose age ≤ X
         * (Clause 6.4.4.2).
         *
         * @public
         * @readonly
         */
        readonly ageDistrFemale: OPTIONAL<InfoCumulativeDistribution>,
        /**
         * @summary `elapsDistr`.
         * @description
         *
         * CDF of days between visits: proportion for whom elapsed days
         * ≤ T (Clause 6.4.4.2).
         *
         * @public
         * @readonly
         */
        readonly elapsDistr: OPTIONAL<InfoCumulativeDistribution>,
        /**
         * @summary `visitsDayDistr`.
         * @description
         *
         * CDF of samples collected by day: proportion collected on day
         * ≤ n (Clause 6.4.4.2).
         *
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
    if (!_cached_encoder_for_CorpusCrewBasicStatistics) { _cached_encoder_for_CorpusCrewBasicStatistics = function (value: CorpusCrewBasicStatistics): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.numIndividuals, $.BER),
            /* IF_ABSENT */ ((value.numMales === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.numMales, $.BER)),
            /* IF_ABSENT */ ((value.numFemales === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.numFemales, $.BER)),
            /* IF_ABSENT */ ((value.numOther === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.numOther, $.BER)),
            /* IF_ABSENT */ ((value.numUnknown === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.numUnknown, $.BER)),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.numIndividualsEnrol, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.numIndividualsVeriId, $.BER),
            /* IF_ABSENT */ ((value.ageDistrMale === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_InfoCumulativeDistribution, $.BER)(value.ageDistrMale, $.BER)),
            /* IF_ABSENT */ ((value.ageDistrFemale === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_InfoCumulativeDistribution, $.BER)(value.ageDistrFemale, $.BER)),
            /* IF_ABSENT */ ((value.elapsDistr === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_InfoCumulativeDistribution, $.BER)(value.elapsDistr, $.BER)),
            /* IF_ABSENT */ ((value.visitsDayDistr === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_InfoCumulativeDistribution, $.BER)(value.visitsDayDistr, $.BER)),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CorpusCrewBasicStatistics(value, elGetter);
}


/* eslint-enable */

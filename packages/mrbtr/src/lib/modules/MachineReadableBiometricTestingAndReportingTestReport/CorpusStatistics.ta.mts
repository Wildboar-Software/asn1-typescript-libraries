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
import { CorpusCrewBasicStatistics, _decode_CorpusCrewBasicStatistics, _encode_CorpusCrewBasicStatistics } from "../MachineReadableBiometricTestingAndReportingTestReport/CorpusCrewBasicStatistics.ta.mjs";
import { SamplesPerIndividual, _decode_SamplesPerIndividual, _encode_SamplesPerIndividual } from "../MachineReadableBiometricTestingAndReportingTestReport/SamplesPerIndividual.ta.mjs";


/**
 * @summary CorpusStatistics
 * @description
 *
 * Statistical description of the corpus (Clause 6.4.4.2). Mean samples
 * per person is `numSamples` divided by `numIndividuals` in
 * `corpusBasicStatistics`. `numSamples` may be used when computing
 * uncertainties.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CorpusStatistics ::= SEQUENCE {
 *     corpusBasicStatistics       CorpusCrewBasicStatistics,
 *     numSamples                  INTEGER,
 *     samplesPerIndividualEnrol   SamplesPerIndividual OPTIONAL,
 *     samplesPerIndividualProbe   SamplesPerIndividual OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CorpusStatistics {
    constructor (
        /**
         * @summary `corpusBasicStatistics`.
         * @description
         *
         * Counts and CDFs common to corpus and crew (Clause 6.4.4.2).
         *
         * @public
         * @readonly
         */
        readonly corpusBasicStatistics: CorpusCrewBasicStatistics,
        /**
         * @summary `numSamples`.
         * @description
         *
         * Number of biometric samples in the corpus (Clause 6.4.4.2).
         *
         * @public
         * @readonly
         */
        readonly numSamples: INTEGER,
        /**
         * @summary `samplesPerIndividualEnrol`.
         * @description
         *
         * Enrolment samples per individual (Clause 6.4.4.2).
         *
         * @public
         * @readonly
         */
        readonly samplesPerIndividualEnrol: OPTIONAL<SamplesPerIndividual>,
        /**
         * @summary `samplesPerIndividualProbe`.
         * @description
         *
         * Probe samples per individual (Clause 6.4.4.2).
         *
         * @public
         * @readonly
         */
        readonly samplesPerIndividualProbe: OPTIONAL<SamplesPerIndividual>
    ) {}

    /**
     * @summary Restructures an object into a CorpusStatistics
     * @description
     * 
     * This takes an `object` and converts it to a `CorpusStatistics`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CorpusStatistics`.
     * @returns {CorpusStatistics}
     */
    public static _from_object (_o: { [_K in keyof (CorpusStatistics)]: (CorpusStatistics)[_K] }): CorpusStatistics {
        return new CorpusStatistics(_o.corpusBasicStatistics, _o.numSamples, _o.samplesPerIndividualEnrol, _o.samplesPerIndividualProbe);
    }


}

/**
 * @summary The Leading Root Component Types of CorpusStatistics
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CorpusStatistics: $.ComponentSpec[] = [
    new $.ComponentSpec("corpusBasicStatistics", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("numSamples", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("samplesPerIndividualEnrol", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("samplesPerIndividualProbe", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of CorpusStatistics
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CorpusStatistics: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CorpusStatistics
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CorpusStatistics: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CorpusStatistics: $.ASN1Decoder<CorpusStatistics> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CorpusStatistics
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CorpusStatistics (el: _Element): CorpusStatistics {
    if (!_cached_decoder_for_CorpusStatistics) { _cached_decoder_for_CorpusStatistics = function (el: _Element): CorpusStatistics {
    let corpusBasicStatistics!: CorpusCrewBasicStatistics;
    let numSamples!: INTEGER;
    let samplesPerIndividualEnrol: OPTIONAL<SamplesPerIndividual>;
    let samplesPerIndividualProbe: OPTIONAL<SamplesPerIndividual>;
    const callbacks: $.DecodingMap = {
        "corpusBasicStatistics": (_el: _Element): void => { corpusBasicStatistics = _decode_CorpusCrewBasicStatistics(_el); },
        "numSamples": (_el: _Element): void => { numSamples = $._decodeInteger(_el); },
        "samplesPerIndividualEnrol": (_el: _Element): void => { samplesPerIndividualEnrol = _decode_SamplesPerIndividual(_el); },
        "samplesPerIndividualProbe": (_el: _Element): void => { samplesPerIndividualProbe = _decode_SamplesPerIndividual(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CorpusStatistics,
        _extension_additions_list_spec_for_CorpusStatistics,
        _root_component_type_list_2_spec_for_CorpusStatistics,
        undefined,
    );
    return new CorpusStatistics(
        corpusBasicStatistics,
        numSamples,
        samplesPerIndividualEnrol,
        samplesPerIndividualProbe
    );
}; }
    return _cached_decoder_for_CorpusStatistics(el);
}

let _cached_encoder_for_CorpusStatistics: $.ASN1Encoder<CorpusStatistics> | null = null;

/**
 * @summary Encodes a(n) CorpusStatistics into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CorpusStatistics, encoded as an ASN.1 Element.
 */
export
function _encode_CorpusStatistics (value: CorpusStatistics, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CorpusStatistics) { _cached_encoder_for_CorpusStatistics = function (value: CorpusStatistics): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 0, () => _encode_CorpusCrewBasicStatistics, $.BER)(value.corpusBasicStatistics, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.numSamples, $.BER),
            /* IF_ABSENT */ ((value.samplesPerIndividualEnrol === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_SamplesPerIndividual, $.BER)(value.samplesPerIndividualEnrol, $.BER)),
            /* IF_ABSENT */ ((value.samplesPerIndividualProbe === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_SamplesPerIndividual, $.BER)(value.samplesPerIndividualProbe, $.BER)),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CorpusStatistics(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */
import {
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
import { DistributionIntegerInteger, _decode_DistributionIntegerInteger, _encode_DistributionIntegerInteger } from "../MachineReadableBiometricTestingAndReportingTestReport/DistributionIntegerInteger.ta.mjs";
// export { DistributionIntegerInteger, _decode_DistributionIntegerInteger, _encode_DistributionIntegerInteger } from "../MachineReadableBiometricTestingAndReportingTestReport/DistributionIntegerInteger.ta.mjs";


/**
 * @summary SamplesPerIndividual
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SamplesPerIndividual ::= SEQUENCE {
 *     numSubjects     INTEGER,
 *     mean            INTEGER,
 *     median          INTEGER,
 *     distrSubjSample DistributionIntegerInteger
 * }
 * ```
 * 
 * @class
 */
export
class SamplesPerIndividual {
    constructor (
        /**
         * @summary `numSubjects`.
         * @public
         * @readonly
         */
        readonly numSubjects: INTEGER,
        /**
         * @summary `mean`.
         * @public
         * @readonly
         */
        readonly mean: INTEGER,
        /**
         * @summary `median`.
         * @public
         * @readonly
         */
        readonly median: INTEGER,
        /**
         * @summary `distrSubjSample`.
         * @public
         * @readonly
         */
        readonly distrSubjSample: DistributionIntegerInteger
    ) {}

    /**
     * @summary Restructures an object into a SamplesPerIndividual
     * @description
     * 
     * This takes an `object` and converts it to a `SamplesPerIndividual`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SamplesPerIndividual`.
     * @returns {SamplesPerIndividual}
     */
    public static _from_object (_o: { [_K in keyof (SamplesPerIndividual)]: (SamplesPerIndividual)[_K] }): SamplesPerIndividual {
        return new SamplesPerIndividual(_o.numSubjects, _o.mean, _o.median, _o.distrSubjSample);
    }


}

/**
 * @summary The Leading Root Component Types of SamplesPerIndividual
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SamplesPerIndividual: $.ComponentSpec[] = [
    new $.ComponentSpec("numSubjects", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("mean", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("median", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("distrSubjSample", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of SamplesPerIndividual
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SamplesPerIndividual: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SamplesPerIndividual
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SamplesPerIndividual: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SamplesPerIndividual: $.ASN1Decoder<SamplesPerIndividual> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SamplesPerIndividual
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SamplesPerIndividual (el: _Element): SamplesPerIndividual {
    if (!_cached_decoder_for_SamplesPerIndividual) { _cached_decoder_for_SamplesPerIndividual = function (el: _Element): SamplesPerIndividual {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("SamplesPerIndividual contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "numSubjects";
    sequence[1].name = "mean";
    sequence[2].name = "median";
    sequence[3].name = "distrSubjSample";
    let numSubjects!: INTEGER;
    let mean!: INTEGER;
    let median!: INTEGER;
    let distrSubjSample!: DistributionIntegerInteger;
    numSubjects = $._decodeInteger(sequence[0]);
    mean = $._decodeInteger(sequence[1]);
    median = $._decodeInteger(sequence[2]);
    distrSubjSample = _decode_DistributionIntegerInteger(sequence[3]);
    return new SamplesPerIndividual(
        numSubjects,
        mean,
        median,
        distrSubjSample,

    );
}; }
    return _cached_decoder_for_SamplesPerIndividual(el);
}

let _cached_encoder_for_SamplesPerIndividual: $.ASN1Encoder<SamplesPerIndividual> | null = null;

/**
 * @summary Encodes a(n) SamplesPerIndividual into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SamplesPerIndividual, encoded as an ASN.1 Element.
 */
export
function _encode_SamplesPerIndividual (value: SamplesPerIndividual, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SamplesPerIndividual) { _cached_encoder_for_SamplesPerIndividual = function (value: SamplesPerIndividual): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.numSubjects, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.mean, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.median, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 3, () => _encode_DistributionIntegerInteger, $.BER)(value.distrSubjSample, $.BER),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SamplesPerIndividual(value, elGetter);
}


/* eslint-enable */

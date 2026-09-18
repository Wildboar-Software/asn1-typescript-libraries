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
import { DistributionIntegerReal, _decode_DistributionIntegerReal, _encode_DistributionIntegerReal } from "../MachineReadableBiometricTestingAndReportingTestReport/DistributionIntegerReal.ta.mjs";
// export { DistributionIntegerReal, _decode_DistributionIntegerReal, _encode_DistributionIntegerReal } from "../MachineReadableBiometricTestingAndReportingTestReport/DistributionIntegerReal.ta.mjs";


/**
 * @summary InfoCumulativeDistribution
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InfoCumulativeDistribution ::= SEQUENCE {
 *     mean                    INTEGER,
 *     median                  INTEGER,
 *     cumulativeDistribution  DistributionIntegerReal
 * }
 * ```
 * 
 * @class
 */
export
class InfoCumulativeDistribution {
    constructor (
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
         * @summary `cumulativeDistribution`.
         * @public
         * @readonly
         */
        readonly cumulativeDistribution: DistributionIntegerReal
    ) {}

    /**
     * @summary Restructures an object into a InfoCumulativeDistribution
     * @description
     * 
     * This takes an `object` and converts it to a `InfoCumulativeDistribution`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InfoCumulativeDistribution`.
     * @returns {InfoCumulativeDistribution}
     */
    public static _from_object (_o: { [_K in keyof (InfoCumulativeDistribution)]: (InfoCumulativeDistribution)[_K] }): InfoCumulativeDistribution {
        return new InfoCumulativeDistribution(_o.mean, _o.median, _o.cumulativeDistribution);
    }


}

/**
 * @summary The Leading Root Component Types of InfoCumulativeDistribution
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InfoCumulativeDistribution: $.ComponentSpec[] = [
    new $.ComponentSpec("mean", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("median", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cumulativeDistribution", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of InfoCumulativeDistribution
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InfoCumulativeDistribution: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InfoCumulativeDistribution
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InfoCumulativeDistribution: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_InfoCumulativeDistribution: $.ASN1Decoder<InfoCumulativeDistribution> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InfoCumulativeDistribution
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InfoCumulativeDistribution (el: _Element): InfoCumulativeDistribution {
    if (!_cached_decoder_for_InfoCumulativeDistribution) { _cached_decoder_for_InfoCumulativeDistribution = function (el: _Element): InfoCumulativeDistribution {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("InfoCumulativeDistribution contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "mean";
    sequence[1].name = "median";
    sequence[2].name = "cumulativeDistribution";
    let mean!: INTEGER;
    let median!: INTEGER;
    let cumulativeDistribution!: DistributionIntegerReal;
    mean = $._decodeInteger(sequence[0]);
    median = $._decodeInteger(sequence[1]);
    cumulativeDistribution = _decode_DistributionIntegerReal(sequence[2]);
    return new InfoCumulativeDistribution(
        mean,
        median,
        cumulativeDistribution,

    );
}; }
    return _cached_decoder_for_InfoCumulativeDistribution(el);
}

let _cached_encoder_for_InfoCumulativeDistribution: $.ASN1Encoder<InfoCumulativeDistribution> | null = null;

/**
 * @summary Encodes a(n) InfoCumulativeDistribution into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InfoCumulativeDistribution, encoded as an ASN.1 Element.
 */
export
function _encode_InfoCumulativeDistribution (value: InfoCumulativeDistribution, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InfoCumulativeDistribution) { _cached_encoder_for_InfoCumulativeDistribution = function (value: InfoCumulativeDistribution, elGetter: $.ASN1Encoder<InfoCumulativeDistribution>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.mean, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.median, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 2, () => _encode_DistributionIntegerReal, $.BER)(value.cumulativeDistribution, $.BER),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_InfoCumulativeDistribution(value, elGetter);
}


/* eslint-enable */

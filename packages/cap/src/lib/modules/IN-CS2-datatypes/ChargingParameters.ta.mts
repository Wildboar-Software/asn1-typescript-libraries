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



/**
 * @summary ChargingParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingParameters{PARAMETERS-BOUND:bound} ::= SEQUENCE {
 *   unitsPerInterval         [0]  INTEGER(0..bound.&maxUnitsPerInterval),
 *   timePerInterval          [1]  INTEGER(0..bound.&maxTimePerInterval),
 *   scalingFactor            [2]  INTEGER(0..bound.&maxScalingFactor),
 *   initialUnitIncrement
 *     [3]  INTEGER(0..bound.&maxInitialUnitIncrement) OPTIONAL,
 *   unitsPerDataInterval
 *     [4]  INTEGER(0..bound.&maxUnitsPerDataInterval) OPTIONAL,
 *   segmentsPerDataInterval
 *     [5]  INTEGER(0..bound.&maxSegmentsPerDataInterval) OPTIONAL,
 *   initialTimeInterval
 *     [6]  INTEGER(0..bound.&maxInitialTimeInterval) OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ChargingParameters {
    constructor (
        /**
         * @summary `unitsPerInterval`.
         * @public
         * @readonly
         */
        readonly unitsPerInterval: INTEGER,
        /**
         * @summary `timePerInterval`.
         * @public
         * @readonly
         */
        readonly timePerInterval: INTEGER,
        /**
         * @summary `scalingFactor`.
         * @public
         * @readonly
         */
        readonly scalingFactor: INTEGER,
        /**
         * @summary `initialUnitIncrement`.
         * @public
         * @readonly
         */
        readonly initialUnitIncrement: OPTIONAL<INTEGER>,
        /**
         * @summary `unitsPerDataInterval`.
         * @public
         * @readonly
         */
        readonly unitsPerDataInterval: OPTIONAL<INTEGER>,
        /**
         * @summary `segmentsPerDataInterval`.
         * @public
         * @readonly
         */
        readonly segmentsPerDataInterval: OPTIONAL<INTEGER>,
        /**
         * @summary `initialTimeInterval`.
         * @public
         * @readonly
         */
        readonly initialTimeInterval: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a ChargingParameters
     * @description
     * 
     * This takes an `object` and converts it to a `ChargingParameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChargingParameters`.
     * @returns {ChargingParameters}
     */
    public static _from_object (_o: { [_K in keyof (ChargingParameters)]: (ChargingParameters)[_K] }): ChargingParameters {
        return new ChargingParameters(_o.unitsPerInterval, _o.timePerInterval, _o.scalingFactor, _o.initialUnitIncrement, _o.unitsPerDataInterval, _o.segmentsPerDataInterval, _o.initialTimeInterval);
    }


}

/**
 * @summary The Leading Root Component Types of ChargingParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChargingParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("unitsPerInterval", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("timePerInterval", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("scalingFactor", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("initialUnitIncrement", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("unitsPerDataInterval", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("segmentsPerDataInterval", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("initialTimeInterval", true, $.hasTag(_TagClass.context, 6), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ChargingParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChargingParameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChargingParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChargingParameters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChargingParameters: $.ASN1Decoder<ChargingParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChargingParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChargingParameters (el: _Element): ChargingParameters {
    if (!_cached_decoder_for_ChargingParameters) { _cached_decoder_for_ChargingParameters = function (el: _Element): ChargingParameters {
    let unitsPerInterval!: INTEGER;
    let timePerInterval!: INTEGER;
    let scalingFactor!: INTEGER;
    let initialUnitIncrement: OPTIONAL<INTEGER>;
    let unitsPerDataInterval: OPTIONAL<INTEGER>;
    let segmentsPerDataInterval: OPTIONAL<INTEGER>;
    let initialTimeInterval: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "unitsPerInterval": (_el: _Element): void => { unitsPerInterval = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "timePerInterval": (_el: _Element): void => { timePerInterval = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "scalingFactor": (_el: _Element): void => { scalingFactor = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "initialUnitIncrement": (_el: _Element): void => { initialUnitIncrement = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "unitsPerDataInterval": (_el: _Element): void => { unitsPerDataInterval = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "segmentsPerDataInterval": (_el: _Element): void => { segmentsPerDataInterval = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "initialTimeInterval": (_el: _Element): void => { initialTimeInterval = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ChargingParameters,
        _extension_additions_list_spec_for_ChargingParameters,
        _root_component_type_list_2_spec_for_ChargingParameters,
        undefined,
    );
    return new ChargingParameters(
        unitsPerInterval,
        timePerInterval,
        scalingFactor,
        initialUnitIncrement,
        unitsPerDataInterval,
        segmentsPerDataInterval,
        initialTimeInterval
    );
}; }
    return _cached_decoder_for_ChargingParameters(el);
}

let _cached_encoder_for_ChargingParameters: $.ASN1Encoder<ChargingParameters> | null = null;

/**
 * @summary Encodes a(n) ChargingParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChargingParameters, encoded as an ASN.1 Element.
 */
export
function _encode_ChargingParameters (value: ChargingParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChargingParameters) { _cached_encoder_for_ChargingParameters = function (value: ChargingParameters, elGetter: $.ASN1Encoder<ChargingParameters>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.unitsPerInterval, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.timePerInterval, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.scalingFactor, $.BER),
            /* IF_ABSENT  */ ((value.initialUnitIncrement === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.initialUnitIncrement, $.BER)),
            /* IF_ABSENT  */ ((value.unitsPerDataInterval === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.unitsPerDataInterval, $.BER)),
            /* IF_ABSENT  */ ((value.segmentsPerDataInterval === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.segmentsPerDataInterval, $.BER)),
            /* IF_ABSENT  */ ((value.initialTimeInterval === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.initialTimeInterval, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ChargingParameters(value, elGetter);
}


/* eslint-enable */

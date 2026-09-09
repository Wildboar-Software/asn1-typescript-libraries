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
import { Duration, _decode_Duration, _encode_Duration } from "../IN-CS2-datatypes/Duration.ta.mjs";
// export { Duration, _decode_Duration, _encode_Duration } from "../IN-CS2-datatypes/Duration.ta.mjs";
import { Interval, _decode_Interval, _encode_Interval } from "../IN-CS2-datatypes/Interval.ta.mjs";
// export { Interval, _decode_Interval, _encode_Interval } from "../IN-CS2-datatypes/Interval.ta.mjs";


/**
 * @summary GapIndicators
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GapIndicators ::= SEQUENCE {
 *   duration     [0]  Duration,
 *   gapInterval  [1]  Interval
 * }
 * ```
 * 
 * @class
 */
export
class GapIndicators {
    constructor (
        /**
         * @summary `duration`.
         * @public
         * @readonly
         */
        readonly duration: Duration,
        /**
         * @summary `gapInterval`.
         * @public
         * @readonly
         */
        readonly gapInterval: Interval
    ) {}

    /**
     * @summary Restructures an object into a GapIndicators
     * @description
     * 
     * This takes an `object` and converts it to a `GapIndicators`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GapIndicators`.
     * @returns {GapIndicators}
     */
    public static _from_object (_o: { [_K in keyof (GapIndicators)]: (GapIndicators)[_K] }): GapIndicators {
        return new GapIndicators(_o.duration, _o.gapInterval);
    }


}

/**
 * @summary The Leading Root Component Types of GapIndicators
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GapIndicators: $.ComponentSpec[] = [
    new $.ComponentSpec("duration", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("gapInterval", false, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of GapIndicators
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GapIndicators: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GapIndicators
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GapIndicators: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GapIndicators: $.ASN1Decoder<GapIndicators> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GapIndicators
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GapIndicators (el: _Element): GapIndicators {
    if (!_cached_decoder_for_GapIndicators) { _cached_decoder_for_GapIndicators = function (el: _Element): GapIndicators {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("GapIndicators contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "duration";
    sequence[1].name = "gapInterval";
    let duration!: Duration;
    let gapInterval!: Interval;
    duration = $._decode_implicit<Duration>(() => _decode_Duration)(sequence[0]);
    gapInterval = $._decode_implicit<Interval>(() => _decode_Interval)(sequence[1]);
    return new GapIndicators(
        duration,
        gapInterval,

    );
}; }
    return _cached_decoder_for_GapIndicators(el);
}

let _cached_encoder_for_GapIndicators: $.ASN1Encoder<GapIndicators> | null = null;

/**
 * @summary Encodes a(n) GapIndicators into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GapIndicators, encoded as an ASN.1 Element.
 */
export
function _encode_GapIndicators (value: GapIndicators, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GapIndicators) { _cached_encoder_for_GapIndicators = function (value: GapIndicators, elGetter: $.ASN1Encoder<GapIndicators>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Duration, $.BER)(value.duration, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Interval, $.BER)(value.gapInterval, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GapIndicators(value, elGetter);
}


/* eslint-enable */

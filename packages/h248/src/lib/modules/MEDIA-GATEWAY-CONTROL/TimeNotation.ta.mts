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
 * @summary TimeNotation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeNotation ::= SEQUENCE
 *     {
 *         date                        [0] IA5String(SIZE(8)), -- yyyymmdd format
 *         time                        [1] IA5String(SIZE(8)) -- hhmmssss format
 *         -- per ISO 8601:2004
 *     }
 * ```
 * 
 * @class
 */
export
class TimeNotation {
    constructor (
        /**
         * @summary `date`.
         * @public
         * @readonly
         */
        readonly date: IA5String,
        /**
         * @summary `time`.
         * @public
         * @readonly
         */
        readonly time: IA5String
    ) {}

    /**
     * @summary Restructures an object into a TimeNotation
     * @description
     * 
     * This takes an `object` and converts it to a `TimeNotation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TimeNotation`.
     * @returns {TimeNotation}
     */
    public static _from_object (_o: { [_K in keyof (TimeNotation)]: (TimeNotation)[_K] }): TimeNotation {
        return new TimeNotation(_o.date, _o.time);
    }


}

/**
 * @summary The Leading Root Component Types of TimeNotation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TimeNotation: $.ComponentSpec[] = [
    new $.ComponentSpec("date", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("time", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of TimeNotation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TimeNotation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TimeNotation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TimeNotation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TimeNotation: $.ASN1Decoder<TimeNotation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TimeNotation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TimeNotation (el: _Element): TimeNotation {
    if (!_cached_decoder_for_TimeNotation) { _cached_decoder_for_TimeNotation = function (el: _Element): TimeNotation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("TimeNotation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "date";
    sequence[1].name = "time";
    let date!: IA5String;
    let time!: IA5String;
    date = $._decode_implicit<IA5String>(() => $._decodeIA5String)(sequence[0]);
    time = $._decode_implicit<IA5String>(() => $._decodeIA5String)(sequence[1]);
    return new TimeNotation(
        date,
        time,

    );
}; }
    return _cached_decoder_for_TimeNotation(el);
}

let _cached_encoder_for_TimeNotation: $.ASN1Encoder<TimeNotation> | null = null;

/**
 * @summary Encodes a(n) TimeNotation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeNotation, encoded as an ASN.1 Element.
 */
export
function _encode_TimeNotation (value: TimeNotation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TimeNotation) { _cached_encoder_for_TimeNotation = function (value: TimeNotation, elGetter: $.ASN1Encoder<TimeNotation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeIA5String, $.BER)(value.date, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeIA5String, $.BER)(value.time, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TimeNotation(value, elGetter);
}


/* eslint-enable */

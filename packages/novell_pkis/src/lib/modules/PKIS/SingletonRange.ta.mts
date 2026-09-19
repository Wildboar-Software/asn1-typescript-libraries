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
 * @summary SingletonRange
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SingletonRange ::= SEQUENCE {
 *  singletonLowerBound INTEGER (0..9223372036854775807),
 *   -- The default should be 0, but DEFAULT implies OPTIONAL,
 *   -- which is not the intent. So the value has to be coded
 *   -- explicitly.
 *   -- Lower bound of a range of singletons
 *   -- to be set to the singletonValue specified
 * 
 *  singletonUpperBound INTEGER (0..9223372036854775807),
 *   -- The default should be 9223372036854775807,
 *   -- but DEFAULT implies OPTIONAL,
 *   -- which is not the intent. So the value has to be coded
 *   -- explicitly.
 *   -- Upper bound of a range of singletons
 *   -- to be set to the singletonValue specified
 *  singletonValue BOOLEAN
 *   -- An entire range of singletons can be set to
 *   -- either TRUE or FALSE.
 *   -- Note that singletonRanges are allowed to overlap,
 *   -- and in particular that a uniqueSingleton can
 *   -- reset a singleton value already set by a
 *   -- singletonRange, and vice versa.
 *   -- The uniqueSingleton and singletonRanges are applied
 *   -- consecutively, from the lower bound of SEQUENCE (1)
 *   -- to the upper bound.
 * }
 * ```
 * 
 * @class
 */
export
class SingletonRange {
    constructor (
        /**
         * @summary `singletonLowerBound`.
         * @public
         * @readonly
         */
        readonly singletonLowerBound: INTEGER,
        /**
         * @summary `singletonUpperBound`.
         * @public
         * @readonly
         */
        readonly singletonUpperBound: INTEGER,
        /**
         * @summary `singletonValue`.
         * @public
         * @readonly
         */
        readonly singletonValue: BOOLEAN
    ) {}

    /**
     * @summary Restructures an object into a SingletonRange
     * @description
     * 
     * This takes an `object` and converts it to a `SingletonRange`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SingletonRange`.
     * @returns {SingletonRange}
     */
    public static _from_object (_o: { [_K in keyof (SingletonRange)]: (SingletonRange)[_K] }): SingletonRange {
        return new SingletonRange(_o.singletonLowerBound, _o.singletonUpperBound, _o.singletonValue);
    }


}

/**
 * @summary The Leading Root Component Types of SingletonRange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SingletonRange: $.ComponentSpec[] = [
    new $.ComponentSpec("singletonLowerBound", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("singletonUpperBound", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("singletonValue", false, $.hasTag(_TagClass.universal, 1))
];

/**
 * @summary The Trailing Root Component Types of SingletonRange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SingletonRange: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SingletonRange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SingletonRange: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SingletonRange: $.ASN1Decoder<SingletonRange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SingletonRange
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SingletonRange (el: _Element): SingletonRange {
    if (!_cached_decoder_for_SingletonRange) { _cached_decoder_for_SingletonRange = function (el: _Element): SingletonRange {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("SingletonRange contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "singletonLowerBound";
    sequence[1].name = "singletonUpperBound";
    sequence[2].name = "singletonValue";
    let singletonLowerBound!: INTEGER;
    let singletonUpperBound!: INTEGER;
    let singletonValue!: BOOLEAN;
    singletonLowerBound = $._decodeInteger(sequence[0]);
    singletonUpperBound = $._decodeInteger(sequence[1]);
    singletonValue = $._decodeBoolean(sequence[2]);
    return new SingletonRange(
        singletonLowerBound,
        singletonUpperBound,
        singletonValue,

    );
}; }
    return _cached_decoder_for_SingletonRange(el);
}

let _cached_encoder_for_SingletonRange: $.ASN1Encoder<SingletonRange> | null = null;

/**
 * @summary Encodes a(n) SingletonRange into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SingletonRange, encoded as an ASN.1 Element.
 */
export
function _encode_SingletonRange (value: SingletonRange, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SingletonRange) { _cached_encoder_for_SingletonRange = function (value: SingletonRange, elGetter: $.ASN1Encoder<SingletonRange>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.singletonLowerBound, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.singletonUpperBound, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.singletonValue, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SingletonRange(value, elGetter);
}


/* eslint-enable */

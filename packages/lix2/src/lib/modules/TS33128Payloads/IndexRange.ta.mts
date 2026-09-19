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
 * @summary IndexRange
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IndexRange ::= SEQUENCE
 * {
 *     start [1] INTEGER,
 *     end   [2] INTEGER
 * }
 * ```
 * 
 * @class
 */
export
class IndexRange {
    constructor (
        /**
         * @summary `start`.
         * @public
         * @readonly
         */
        readonly start: INTEGER,
        /**
         * @summary `end`.
         * @public
         * @readonly
         */
        readonly end: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a IndexRange
     * @description
     * 
     * This takes an `object` and converts it to a `IndexRange`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IndexRange`.
     * @returns {IndexRange}
     */
    public static _from_object (_o: { [_K in keyof (IndexRange)]: (IndexRange)[_K] }): IndexRange {
        return new IndexRange(_o.start, _o.end);
    }


}

/**
 * @summary The Leading Root Component Types of IndexRange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IndexRange: $.ComponentSpec[] = [
    new $.ComponentSpec("start", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("end", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of IndexRange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IndexRange: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IndexRange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IndexRange: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IndexRange: $.ASN1Decoder<IndexRange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IndexRange
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IndexRange (el: _Element): IndexRange {
    if (!_cached_decoder_for_IndexRange) { _cached_decoder_for_IndexRange = function (el: _Element): IndexRange {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("IndexRange contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "start";
    sequence[1].name = "end";
    let start!: INTEGER;
    let end!: INTEGER;
    start = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    end = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[1]);
    return new IndexRange(
        start,
        end,

    );
}; }
    return _cached_decoder_for_IndexRange(el);
}

let _cached_encoder_for_IndexRange: $.ASN1Encoder<IndexRange> | null = null;

/**
 * @summary Encodes a(n) IndexRange into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IndexRange, encoded as an ASN.1 Element.
 */
export
function _encode_IndexRange (value: IndexRange, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IndexRange) { _cached_encoder_for_IndexRange = function (value: IndexRange, elGetter: $.ASN1Encoder<IndexRange>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.start, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.end, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IndexRange(value, elGetter);
}


/* eslint-enable */

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
 * @summary DataParameters_floating_point
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataParameters-floating-point ::= SEQUENCE {
 *     total [4] IMPLICIT INTEGER,
 *     exponent [5] IMPLICIT INTEGER
 * }
 * ```
 * 
 * @class
 */
export
class DataParameters_floating_point {
    constructor (
        /**
         * @summary `total`.
         * @public
         * @readonly
         */
        readonly total: INTEGER,
        /**
         * @summary `exponent`.
         * @public
         * @readonly
         */
        readonly exponent: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a DataParameters_floating_point
     * @description
     * 
     * This takes an `object` and converts it to a `DataParameters_floating_point`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DataParameters_floating_point`.
     * @returns {DataParameters_floating_point}
     */
    public static _from_object (_o: { [_K in keyof (DataParameters_floating_point)]: (DataParameters_floating_point)[_K] }): DataParameters_floating_point {
        return new DataParameters_floating_point(_o.total, _o.exponent);
    }


}

/**
 * @summary The Leading Root Component Types of DataParameters_floating_point
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DataParameters_floating_point: $.ComponentSpec[] = [
    new $.ComponentSpec("total", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("exponent", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of DataParameters_floating_point
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DataParameters_floating_point: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DataParameters_floating_point
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DataParameters_floating_point: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DataParameters_floating_point: $.ASN1Decoder<DataParameters_floating_point> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DataParameters_floating_point
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DataParameters_floating_point (el: _Element): DataParameters_floating_point {
    if (!_cached_decoder_for_DataParameters_floating_point) { _cached_decoder_for_DataParameters_floating_point = function (el: _Element): DataParameters_floating_point {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("DataParameters-floating-point contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "total";
    sequence[1].name = "exponent";
    let total!: INTEGER;
    let exponent!: INTEGER;
    total = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    exponent = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[1]);
    return new DataParameters_floating_point(
        total,
        exponent,

    );
}; }
    return _cached_decoder_for_DataParameters_floating_point(el);
}

let _cached_encoder_for_DataParameters_floating_point: $.ASN1Encoder<DataParameters_floating_point> | null = null;

/**
 * @summary Encodes a(n) DataParameters_floating_point into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataParameters_floating_point, encoded as an ASN.1 Element.
 */
export
function _encode_DataParameters_floating_point (value: DataParameters_floating_point, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DataParameters_floating_point) { _cached_encoder_for_DataParameters_floating_point = function (value: DataParameters_floating_point, elGetter: $.ASN1Encoder<DataParameters_floating_point>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.total, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.exponent, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DataParameters_floating_point(value, elGetter);
}


/* eslint-enable */

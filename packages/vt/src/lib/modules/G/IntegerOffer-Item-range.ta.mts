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
 * @summary IntegerOffer_Item_range
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IntegerOffer-Item-range ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class IntegerOffer_Item_range {
    constructor (
        /**
         * @summary `minimum`.
         * @public
         * @readonly
         */
        readonly minimum: INTEGER,
        /**
         * @summary `maximum`.
         * @public
         * @readonly
         */
        readonly maximum: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a IntegerOffer_Item_range
     * @description
     * 
     * This takes an `object` and converts it to a `IntegerOffer_Item_range`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IntegerOffer_Item_range`.
     * @returns {IntegerOffer_Item_range}
     */
    public static _from_object (_o: { [_K in keyof (IntegerOffer_Item_range)]: (IntegerOffer_Item_range)[_K] }): IntegerOffer_Item_range {
        return new IntegerOffer_Item_range(_o.minimum, _o.maximum);
    }


}

/**
 * @summary The Leading Root Component Types of IntegerOffer_Item_range
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IntegerOffer_Item_range: $.ComponentSpec[] = [
    new $.ComponentSpec("minimum", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("maximum", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of IntegerOffer_Item_range
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IntegerOffer_Item_range: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IntegerOffer_Item_range
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IntegerOffer_Item_range: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IntegerOffer_Item_range: $.ASN1Decoder<IntegerOffer_Item_range> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IntegerOffer_Item_range
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IntegerOffer_Item_range (el: _Element): IntegerOffer_Item_range {
    if (!_cached_decoder_for_IntegerOffer_Item_range) { _cached_decoder_for_IntegerOffer_Item_range = function (el: _Element): IntegerOffer_Item_range {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("IntegerOffer-Item-range contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "minimum";
    sequence[1].name = "maximum";
    let minimum!: INTEGER;
    let maximum!: INTEGER;
    minimum = $._decodeInteger(sequence[0]);
    maximum = $._decodeInteger(sequence[1]);
    return new IntegerOffer_Item_range(
        minimum,
        maximum,

    );
}; }
    return _cached_decoder_for_IntegerOffer_Item_range(el);
}

let _cached_encoder_for_IntegerOffer_Item_range: $.ASN1Encoder<IntegerOffer_Item_range> | null = null;

/**
 * @summary Encodes a(n) IntegerOffer_Item_range into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntegerOffer_Item_range, encoded as an ASN.1 Element.
 */
export
function _encode_IntegerOffer_Item_range (value: IntegerOffer_Item_range, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IntegerOffer_Item_range) { _cached_encoder_for_IntegerOffer_Item_range = function (value: IntegerOffer_Item_range, elGetter: $.ASN1Encoder<IntegerOffer_Item_range>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.minimum, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.maximum, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IntegerOffer_Item_range(value, elGetter);
}


/* eslint-enable */

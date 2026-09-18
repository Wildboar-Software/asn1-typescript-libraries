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
 * @summary Attribute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Attribute{ ATTRIBUTE:AttrList } ::= SEQUENCE {
 *     attrType           ATTRIBUTE.
 *             &id({AttrList}),
 *     attrValues         SET OF ATTRIBUTE.
 *             &Type({AttrList}{@attrType})  }
 * ```
 * 
 * @class
 */
export
class Attribute {
    constructor (
        /**
         * @summary `attrType`.
         * @public
         * @readonly
         */
        readonly attrType: _Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */,
        /**
         * @summary `attrValues`.
         * @public
         * @readonly
         */
        readonly attrValues: _Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */[]
    ) {}

    /**
     * @summary Restructures an object into a Attribute
     * @description
     * 
     * This takes an `object` and converts it to a `Attribute`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Attribute`.
     * @returns {Attribute}
     */
    public static _from_object (_o: { [_K in keyof (Attribute)]: (Attribute)[_K] }): Attribute {
        return new Attribute(_o.attrType, _o.attrValues);
    }


}

/**
 * @summary The Leading Root Component Types of Attribute
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Attribute: $.ComponentSpec[] = [
    new $.ComponentSpec("attrType", false, $.hasAnyTag),
    new $.ComponentSpec("attrValues", false, $.hasTag(_TagClass.universal, 17))
];

/**
 * @summary The Trailing Root Component Types of Attribute
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Attribute: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Attribute
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Attribute: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Attribute: $.ASN1Decoder<Attribute> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Attribute
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Attribute (el: _Element): Attribute {
    if (!_cached_decoder_for_Attribute) { _cached_decoder_for_Attribute = function (el: _Element): Attribute {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Attribute contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "attrType";
    sequence[1].name = "attrValues";
    let attrType!: _Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */;
    let attrValues!: _Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */[];
    attrType = $._decodeAny /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */(sequence[0]);
    attrValues = $._decodeSetOf<_Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */>(() => $._decodeAny /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */)(sequence[1]);
    return new Attribute(
        attrType,
        attrValues,

    );
}; }
    return _cached_decoder_for_Attribute(el);
}

let _cached_encoder_for_Attribute: $.ASN1Encoder<Attribute> | null = null;

/**
 * @summary Encodes a(n) Attribute into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Attribute, encoded as an ASN.1 Element.
 */
export
function _encode_Attribute (value: Attribute, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Attribute) { _cached_encoder_for_Attribute = function (value: Attribute, elGetter: $.ASN1Encoder<Attribute>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeAny /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */(value.attrType, $.BER),
            /* REQUIRED   */ $._encodeSetOf<_Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */>(() => $._encodeAny /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */, $.BER)(value.attrValues, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Attribute(value, elGetter);
}


/* eslint-enable */

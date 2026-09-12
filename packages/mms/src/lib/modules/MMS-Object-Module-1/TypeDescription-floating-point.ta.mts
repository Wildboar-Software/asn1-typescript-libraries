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
import { Unsigned8, _decode_Unsigned8, _encode_Unsigned8 } from "../ISO-9506-MMS-1/Unsigned8.ta.mjs";
// export { Unsigned8, _decode_Unsigned8, _encode_Unsigned8 } from "../ISO-9506-MMS-1/Unsigned8.ta.mjs";


/**
 * @summary TypeDescription_floating_point
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TypeDescription-floating-point ::= SEQUENCE {
 *     format-width Unsigned8,
 *     -- number of bits of
 *     -- floating point value
 *     -- including sign, exponent,
 *     -- and fraction
 *     exponent-width Unsigned8 -- size of exponent in bits
 * }
 * ```
 * 
 * @class
 */
export
class TypeDescription_floating_point {
    constructor (
        /**
         * @summary `format_width`.
         * @public
         * @readonly
         */
        readonly format_width: Unsigned8,
        /**
         * @summary `exponent_width`.
         * @public
         * @readonly
         */
        readonly exponent_width: Unsigned8
    ) {}

    /**
     * @summary Restructures an object into a TypeDescription_floating_point
     * @description
     * 
     * This takes an `object` and converts it to a `TypeDescription_floating_point`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TypeDescription_floating_point`.
     * @returns {TypeDescription_floating_point}
     */
    public static _from_object (_o: { [_K in keyof (TypeDescription_floating_point)]: (TypeDescription_floating_point)[_K] }): TypeDescription_floating_point {
        return new TypeDescription_floating_point(_o.format_width, _o.exponent_width);
    }


}

/**
 * @summary The Leading Root Component Types of TypeDescription_floating_point
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TypeDescription_floating_point: $.ComponentSpec[] = [
    new $.ComponentSpec("format-width", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("exponent-width", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of TypeDescription_floating_point
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TypeDescription_floating_point: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TypeDescription_floating_point
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TypeDescription_floating_point: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TypeDescription_floating_point: $.ASN1Decoder<TypeDescription_floating_point> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TypeDescription_floating_point
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TypeDescription_floating_point (el: _Element): TypeDescription_floating_point {
    if (!_cached_decoder_for_TypeDescription_floating_point) { _cached_decoder_for_TypeDescription_floating_point = function (el: _Element): TypeDescription_floating_point {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("TypeDescription-floating-point contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "format-width";
    sequence[1].name = "exponent-width";
    let format_width!: Unsigned8;
    let exponent_width!: Unsigned8;
    format_width = _decode_Unsigned8(sequence[0]);
    exponent_width = _decode_Unsigned8(sequence[1]);
    return new TypeDescription_floating_point(
        format_width,
        exponent_width,

    );
}; }
    return _cached_decoder_for_TypeDescription_floating_point(el);
}

let _cached_encoder_for_TypeDescription_floating_point: $.ASN1Encoder<TypeDescription_floating_point> | null = null;

/**
 * @summary Encodes a(n) TypeDescription_floating_point into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TypeDescription_floating_point, encoded as an ASN.1 Element.
 */
export
function _encode_TypeDescription_floating_point (value: TypeDescription_floating_point, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TypeDescription_floating_point) { _cached_encoder_for_TypeDescription_floating_point = function (value: TypeDescription_floating_point, elGetter: $.ASN1Encoder<TypeDescription_floating_point>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Unsigned8(value.format_width, $.BER),
            /* REQUIRED   */ _encode_Unsigned8(value.exponent_width, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TypeDescription_floating_point(value, elGetter);
}


/* eslint-enable */

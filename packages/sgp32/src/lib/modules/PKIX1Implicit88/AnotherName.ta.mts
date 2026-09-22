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
 * @summary AnotherName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AnotherName ::= SEQUENCE {
 *      type-id    OBJECT IDENTIFIER,
 *      value      [0] EXPLICIT ANY DEFINED BY type-id }
 * ```
 * 
 * @class
 */
export
class AnotherName {
    constructor (
        /**
         * @summary `type_id`.
         * @public
         * @readonly
         */
        readonly type_id: OBJECT_IDENTIFIER,
// FIXME: readonly value: PrefixedType
    ) {}

    /**
     * @summary Restructures an object into a AnotherName
     * @description
     * 
     * This takes an `object` and converts it to a `AnotherName`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AnotherName`.
     * @returns {AnotherName}
     */
    public static _from_object (_o: { [_K in keyof (AnotherName)]: (AnotherName)[_K] }): AnotherName {
        return new AnotherName(_o.type_id, _o.);
    }


}

/**
 * @summary The Leading Root Component Types of AnotherName
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AnotherName: $.ComponentSpec[] = [
    new $.ComponentSpec("type-id", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("value", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of AnotherName
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AnotherName: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AnotherName
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AnotherName: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AnotherName: $.ASN1Decoder<AnotherName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AnotherName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AnotherName (el: _Element): AnotherName {
    if (!_cached_decoder_for_AnotherName) { _cached_decoder_for_AnotherName = function (el: _Element): AnotherName {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("AnotherName contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "type-id";
    sequence[1].name = "value";
    let type_id!: OBJECT_IDENTIFIER;
    let value!: /* FIXME: value COULD_NOT_COMPILE_TYPE */;
    type_id = $._decodeObjectIdentifier(sequence[0]);
    
    return new AnotherName(
        type_id,
        value,

    );
}; }
    return _cached_decoder_for_AnotherName(el);
}

let _cached_encoder_for_AnotherName: $.ASN1Encoder<AnotherName> | null = null;

/**
 * @summary Encodes a(n) AnotherName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AnotherName, encoded as an ASN.1 Element.
 */
export
function _encode_AnotherName (value: AnotherName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AnotherName) { _cached_encoder_for_AnotherName = function (value: AnotherName, elGetter: $.ASN1Encoder<AnotherName>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.type_id, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => $._encodeAny, $.BER)(value.value, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AnotherName(value, elGetter);
}


/* eslint-enable */

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
import { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../InformationFramework/AttributeType.ta.mjs";
// export { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../InformationFramework/AttributeType.ta.mjs";
import { TypeAndContextAssertion_contextAssertions, _decode_TypeAndContextAssertion_contextAssertions, _encode_TypeAndContextAssertion_contextAssertions } from "../DirectoryAbstractService/TypeAndContextAssertion-contextAssertions.ta.mjs";
// export { TypeAndContextAssertion_contextAssertions, _decode_TypeAndContextAssertion_contextAssertions, _encode_TypeAndContextAssertion_contextAssertions } from "../DirectoryAbstractService/TypeAndContextAssertion-contextAssertions.ta.mjs";


/**
 * @summary TypeAndContextAssertion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TypeAndContextAssertion ::= SEQUENCE {
 *   type               AttributeType,
 *   contextAssertions  CHOICE {
 *     preference         SEQUENCE OF ContextAssertion,
 *     all                SET OF ContextAssertion,
 *     ...},
 *   ... }
 * ```
 * 
 * @class
 */
export
class TypeAndContextAssertion {
    constructor (
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: AttributeType,
        /**
         * @summary `contextAssertions`.
         * @public
         * @readonly
         */
        readonly contextAssertions: TypeAndContextAssertion_contextAssertions,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TypeAndContextAssertion
     * @description
     * 
     * This takes an `object` and converts it to a `TypeAndContextAssertion`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TypeAndContextAssertion`.
     * @returns {TypeAndContextAssertion}
     */
    public static _from_object (_o: { [_K in keyof (TypeAndContextAssertion)]: (TypeAndContextAssertion)[_K] }): TypeAndContextAssertion {
        return new TypeAndContextAssertion(_o.type_, _o.contextAssertions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of TypeAndContextAssertion
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TypeAndContextAssertion: $.ComponentSpec[] = [
    new $.ComponentSpec("type", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("contextAssertions", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of TypeAndContextAssertion
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TypeAndContextAssertion: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TypeAndContextAssertion
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TypeAndContextAssertion: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TypeAndContextAssertion: $.ASN1Decoder<TypeAndContextAssertion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TypeAndContextAssertion
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TypeAndContextAssertion (el: _Element): TypeAndContextAssertion {
    if (!_cached_decoder_for_TypeAndContextAssertion) { _cached_decoder_for_TypeAndContextAssertion = function (el: _Element): TypeAndContextAssertion {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("TypeAndContextAssertion contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "type";
    sequence[1].name = "contextAssertions";
    let type_!: AttributeType;
    let contextAssertions!: TypeAndContextAssertion_contextAssertions;
    type_ = _decode_AttributeType(sequence[0]);
    contextAssertions = _decode_TypeAndContextAssertion_contextAssertions(sequence[1]);
    return new TypeAndContextAssertion(
        type_,
        contextAssertions,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_TypeAndContextAssertion(el);
}

let _cached_encoder_for_TypeAndContextAssertion: $.ASN1Encoder<TypeAndContextAssertion> | null = null;

/**
 * @summary Encodes a(n) TypeAndContextAssertion into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TypeAndContextAssertion, encoded as an ASN.1 Element.
 */
export
function _encode_TypeAndContextAssertion (value: TypeAndContextAssertion, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TypeAndContextAssertion) { _cached_encoder_for_TypeAndContextAssertion = function (value: TypeAndContextAssertion, elGetter: $.ASN1Encoder<TypeAndContextAssertion>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AttributeType(value.type_, $.BER),
            /* REQUIRED   */ _encode_TypeAndContextAssertion_contextAssertions(value.contextAssertions, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TypeAndContextAssertion(value, elGetter);
}


/* eslint-enable */

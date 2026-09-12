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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { TypeSpecification, _decode_TypeSpecification, _encode_TypeSpecification } from "../ISO-9506-MMS-1/TypeSpecification.ta.mjs";
// export { TypeSpecification, _decode_TypeSpecification, _encode_TypeSpecification } from "../ISO-9506-MMS-1/TypeSpecification.ta.mjs";


/**
 * @summary TypeDescription_structure_components_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TypeDescription-structure-components-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class TypeDescription_structure_components_Item {
    constructor (
        /**
         * @summary `componentName`.
         * @public
         * @readonly
         */
        readonly componentName: OPTIONAL<Identifier>,
        /**
         * @summary `componentType`.
         * @public
         * @readonly
         */
        readonly componentType: TypeSpecification
    ) {}

    /**
     * @summary Restructures an object into a TypeDescription_structure_components_Item
     * @description
     * 
     * This takes an `object` and converts it to a `TypeDescription_structure_components_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TypeDescription_structure_components_Item`.
     * @returns {TypeDescription_structure_components_Item}
     */
    public static _from_object (_o: { [_K in keyof (TypeDescription_structure_components_Item)]: (TypeDescription_structure_components_Item)[_K] }): TypeDescription_structure_components_Item {
        return new TypeDescription_structure_components_Item(_o.componentName, _o.componentType);
    }


}

/**
 * @summary The Leading Root Component Types of TypeDescription_structure_components_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TypeDescription_structure_components_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("componentName", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("componentType", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of TypeDescription_structure_components_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TypeDescription_structure_components_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TypeDescription_structure_components_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TypeDescription_structure_components_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TypeDescription_structure_components_Item: $.ASN1Decoder<TypeDescription_structure_components_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TypeDescription_structure_components_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TypeDescription_structure_components_Item (el: _Element): TypeDescription_structure_components_Item {
    if (!_cached_decoder_for_TypeDescription_structure_components_Item) { _cached_decoder_for_TypeDescription_structure_components_Item = function (el: _Element): TypeDescription_structure_components_Item {
    let componentName: OPTIONAL<Identifier>;
    let componentType!: TypeSpecification;
    const callbacks: $.DecodingMap = {
        "componentName": (_el: _Element): void => { componentName = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); },
        "componentType": (_el: _Element): void => { componentType = $._decode_explicit<TypeSpecification>(() => _decode_TypeSpecification)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TypeDescription_structure_components_Item,
        _extension_additions_list_spec_for_TypeDescription_structure_components_Item,
        _root_component_type_list_2_spec_for_TypeDescription_structure_components_Item,
        undefined,
    );
    return new TypeDescription_structure_components_Item(
        componentName,
        componentType
    );
}; }
    return _cached_decoder_for_TypeDescription_structure_components_Item(el);
}

let _cached_encoder_for_TypeDescription_structure_components_Item: $.ASN1Encoder<TypeDescription_structure_components_Item> | null = null;

/**
 * @summary Encodes a(n) TypeDescription_structure_components_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TypeDescription_structure_components_Item, encoded as an ASN.1 Element.
 */
export
function _encode_TypeDescription_structure_components_Item (value: TypeDescription_structure_components_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TypeDescription_structure_components_Item) { _cached_encoder_for_TypeDescription_structure_components_Item = function (value: TypeDescription_structure_components_Item, elGetter: $.ASN1Encoder<TypeDescription_structure_components_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.componentName === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER)(value.componentName, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_TypeSpecification, $.BER)(value.componentType, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TypeDescription_structure_components_Item(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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


/**
 * @summary TypeAndAttribute
 * @description
 *
 * A document type this server stores, with the extension attributes it
 * supports for that type. ISO/IEC 10166-1:1991 §7.1.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TypeAndAttribute ::= SEQUENCE {
 *     document-types  [0] OBJECT IDENTIFIER,
 *     attributes      [1] SET OF AttributeType
 * }
 * ```
 * 
 * @class
 */
export
class TypeAndAttribute {
    constructor (
        /**
         * @summary `document_types`.
         * @description
         *
         * Document-type object identifier.
         * @public
         * @readonly
         */
        readonly document_types: OBJECT_IDENTIFIER,
        /**
         * @summary `attributes`.
         * @description
         *
         * Extension attribute types supported for that type.
         * @public
         * @readonly
         */
        readonly attributes: AttributeType[]
    ) {}

    /**
     * @summary Restructures an object into a TypeAndAttribute
     * @description
     * 
     * This takes an `object` and converts it to a `TypeAndAttribute`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TypeAndAttribute`.
     * @returns {TypeAndAttribute}
     */
    public static _from_object (_o: { [_K in keyof (TypeAndAttribute)]: (TypeAndAttribute)[_K] }): TypeAndAttribute {
        return new TypeAndAttribute(_o.document_types, _o.attributes);
    }


}

/**
 * @summary The Leading Root Component Types of TypeAndAttribute
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TypeAndAttribute: $.ComponentSpec[] = [
    new $.ComponentSpec("document-types", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("attributes", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of TypeAndAttribute
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TypeAndAttribute: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TypeAndAttribute
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TypeAndAttribute: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TypeAndAttribute: $.ASN1Decoder<TypeAndAttribute> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TypeAndAttribute
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TypeAndAttribute (el: _Element): TypeAndAttribute {
    if (!_cached_decoder_for_TypeAndAttribute) { _cached_decoder_for_TypeAndAttribute = function (el: _Element): TypeAndAttribute {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("TypeAndAttribute contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "document-types";
    sequence[1].name = "attributes";
    let document_types!: OBJECT_IDENTIFIER;
    let attributes!: AttributeType[];
    document_types = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(sequence[0]);
    attributes = $._decode_implicit<AttributeType[]>(() => $._decodeSetOf<AttributeType>(() => _decode_AttributeType))(sequence[1]);
    return new TypeAndAttribute(
        document_types,
        attributes,

    );
}; }
    return _cached_decoder_for_TypeAndAttribute(el);
}

let _cached_encoder_for_TypeAndAttribute: $.ASN1Encoder<TypeAndAttribute> | null = null;

/**
 * @summary Encodes a(n) TypeAndAttribute into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TypeAndAttribute, encoded as an ASN.1 Element.
 */
export
function _encode_TypeAndAttribute (value: TypeAndAttribute, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TypeAndAttribute) { _cached_encoder_for_TypeAndAttribute = function (value: TypeAndAttribute): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.document_types, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSetOf<AttributeType>(() => _encode_AttributeType, $.BER), $.BER)(value.attributes, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TypeAndAttribute(value, elGetter);
}


/* eslint-enable */

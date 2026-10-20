/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { SupportedAttributes } from "../InformationFramework/SupportedAttributes.osa.mjs";
import { Context, _decode_Context, _encode_Context } from "../InformationFramework/Context.ta.mjs";
// export { Context, _decode_Context, _encode_Context } from "../InformationFramework/Context.ta.mjs";


/**
 * @summary AttributeTypeAndDistinguishedValue_valuesWithContext_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeTypeAndDistinguishedValue-valuesWithContext-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class AttributeTypeAndDistinguishedValue_valuesWithContext_Item {
    /**
     * @summary `distingAttrValue`.
     * @public
     * @readonly
     */
    readonly distingAttrValue: OPTIONAL<_Element>;
    /**
     * @summary `contextList`.
     * @public
     * @readonly
     */
    readonly contextList: Context[];

    constructor (
        distingAttrValue: OPTIONAL<_Element>,
        contextList: Context[]
    ) {
        this.distingAttrValue = distingAttrValue;
        this.contextList = contextList;
    }

    /**
     * @summary Restructures an object into a AttributeTypeAndDistinguishedValue_valuesWithContext_Item
     * @description
     * 
     * This takes an `object` and converts it to a `AttributeTypeAndDistinguishedValue_valuesWithContext_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeTypeAndDistinguishedValue_valuesWithContext_Item`.
     * @returns {AttributeTypeAndDistinguishedValue_valuesWithContext_Item}
     */
    public static _from_object (_o: { [_K in keyof (AttributeTypeAndDistinguishedValue_valuesWithContext_Item)]: (AttributeTypeAndDistinguishedValue_valuesWithContext_Item)[_K] }): AttributeTypeAndDistinguishedValue_valuesWithContext_Item {
        return new AttributeTypeAndDistinguishedValue_valuesWithContext_Item(_o.distingAttrValue, _o.contextList);
    }


}

/**
 * @summary The Leading Root Component Types of AttributeTypeAndDistinguishedValue_valuesWithContext_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AttributeTypeAndDistinguishedValue_valuesWithContext_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("distingAttrValue", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("contextList", false, $.hasTag(_TagClass.universal, 17))
];

/**
 * @summary The Trailing Root Component Types of AttributeTypeAndDistinguishedValue_valuesWithContext_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AttributeTypeAndDistinguishedValue_valuesWithContext_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AttributeTypeAndDistinguishedValue_valuesWithContext_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AttributeTypeAndDistinguishedValue_valuesWithContext_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AttributeTypeAndDistinguishedValue_valuesWithContext_Item: $.ASN1Decoder<AttributeTypeAndDistinguishedValue_valuesWithContext_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeTypeAndDistinguishedValue_valuesWithContext_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeTypeAndDistinguishedValue_valuesWithContext_Item (el: _Element): AttributeTypeAndDistinguishedValue_valuesWithContext_Item {
    if (!_cached_decoder_for_AttributeTypeAndDistinguishedValue_valuesWithContext_Item) { _cached_decoder_for_AttributeTypeAndDistinguishedValue_valuesWithContext_Item = function (el: _Element): AttributeTypeAndDistinguishedValue_valuesWithContext_Item {
    let distingAttrValue: OPTIONAL<_Element>;
    let contextList!: Context[];
    const callbacks: $.DecodingMap = {
        "distingAttrValue": (_el: _Element): void => { distingAttrValue = $._decode_explicit<_Element>(() => $._decodeAny)(_el); },
        "contextList": (_el: _Element): void => { contextList = $._decodeSetOf<Context>(() => _decode_Context)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttributeTypeAndDistinguishedValue_valuesWithContext_Item,
        _extension_additions_list_spec_for_AttributeTypeAndDistinguishedValue_valuesWithContext_Item,
        _root_component_type_list_2_spec_for_AttributeTypeAndDistinguishedValue_valuesWithContext_Item,
        undefined,
    );
    return new AttributeTypeAndDistinguishedValue_valuesWithContext_Item(
        distingAttrValue,
        contextList
    );
}; }
    return _cached_decoder_for_AttributeTypeAndDistinguishedValue_valuesWithContext_Item(el);
}

let _cached_encoder_for_AttributeTypeAndDistinguishedValue_valuesWithContext_Item: $.ASN1Encoder<AttributeTypeAndDistinguishedValue_valuesWithContext_Item> | null = null;

/**
 * @summary Encodes a(n) AttributeTypeAndDistinguishedValue_valuesWithContext_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeTypeAndDistinguishedValue_valuesWithContext_Item, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeTypeAndDistinguishedValue_valuesWithContext_Item (value: AttributeTypeAndDistinguishedValue_valuesWithContext_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeTypeAndDistinguishedValue_valuesWithContext_Item) { _cached_encoder_for_AttributeTypeAndDistinguishedValue_valuesWithContext_Item = function (value: AttributeTypeAndDistinguishedValue_valuesWithContext_Item, elGetter: $.ASN1Encoder<AttributeTypeAndDistinguishedValue_valuesWithContext_Item>): _Element {
    const _components: _Element[] = [];
    if (value.distingAttrValue !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => $._encodeAny, $.BER)(value.distingAttrValue, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encodeSetOf<Context>(() => _encode_Context, $.BER)(value.contextList, $.BER));
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AttributeTypeAndDistinguishedValue_valuesWithContext_Item(value, elGetter);
}


/* eslint-enable */

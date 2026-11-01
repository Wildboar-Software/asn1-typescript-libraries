/* eslint-disable */
import {
    ASN1SizeError,
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Context, _decode_Context, _encode_Context } from "../InformationFramework/Context.ta.mjs";

/**
 * @summary Attribute_valuesWithContext_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Attribute-valuesWithContext-Item ::= SEQUENCE {
 *   value        ATTRIBUTE.&Type({SupportedAttributes}{@type}),
 *   contextList  SET SIZE (1..MAX) OF Context,
 *   ... }
 * ```
 * 
 * @class
 */
export
class Attribute_valuesWithContext_Item {
    /**
     * @summary `value`.
     * @public
     * @readonly
     */
    readonly value: _Element;
    /**
     * @summary `contextList`.
     * @public
     * @readonly
     */
    readonly contextList: Context[];
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        value: _Element,
        contextList: Context[],
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.value = value;
        this.contextList = contextList;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
        if (this.contextList.length < 1) {
            throw new ASN1SizeError("Attribute.valuesWithContext.contextList violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a Attribute_valuesWithContext_Item
     * @description
     * 
     * This takes an `object` and converts it to a `Attribute_valuesWithContext_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Attribute_valuesWithContext_Item`.
     * @returns {Attribute_valuesWithContext_Item}
     */
    public static _from_object (_o: { [_K in keyof (Attribute_valuesWithContext_Item)]: (Attribute_valuesWithContext_Item)[_K] }): Attribute_valuesWithContext_Item {
        return new Attribute_valuesWithContext_Item(_o.value, _o.contextList, _o._unrecognizedExtensionsList);
    }

}

/**
 * @summary The Leading Root Component Types of Attribute_valuesWithContext_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Attribute_valuesWithContext_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("value", false, $.hasAnyTag),
    new $.ComponentSpec("contextList", false, $.hasTag(_TagClass.universal, 17))
];

/**
 * @summary The Trailing Root Component Types of Attribute_valuesWithContext_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Attribute_valuesWithContext_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Attribute_valuesWithContext_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Attribute_valuesWithContext_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Attribute_valuesWithContext_Item: $.ASN1Decoder<Attribute_valuesWithContext_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Attribute_valuesWithContext_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Attribute_valuesWithContext_Item (el: _Element): Attribute_valuesWithContext_Item {
    if (!_cached_decoder_for_Attribute_valuesWithContext_Item) { _cached_decoder_for_Attribute_valuesWithContext_Item = function (el: _Element): Attribute_valuesWithContext_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Attribute-valuesWithContext-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "value";
    sequence[1].name = "contextList";
    let value!: _Element;
    let contextList!: Context[];
    value = $._decodeAny(sequence[0]);
    contextList = $._decodeSetOf<Context>(() => _decode_Context)(sequence[1]);
    return new Attribute_valuesWithContext_Item(
        value,
        contextList,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_Attribute_valuesWithContext_Item(el);
}

let _cached_encoder_for_Attribute_valuesWithContext_Item: $.ASN1Encoder<Attribute_valuesWithContext_Item> | null = null;

/**
 * @summary Encodes a(n) Attribute_valuesWithContext_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Attribute_valuesWithContext_Item, encoded as an ASN.1 Element.
 */
export
function _encode_Attribute_valuesWithContext_Item (value: Attribute_valuesWithContext_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Attribute_valuesWithContext_Item) { _cached_encoder_for_Attribute_valuesWithContext_Item = function (value: Attribute_valuesWithContext_Item, elGetter: $.ASN1Encoder<Attribute_valuesWithContext_Item>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encodeAny(value.value, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encodeSetOf<Context>(() => _encode_Context, $.BER)(value.contextList, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Attribute_valuesWithContext_Item(value, elGetter);
}

/* eslint-enable */

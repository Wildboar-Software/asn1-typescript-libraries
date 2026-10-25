/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { METHOD } from "../IN-CS2-SDF-InformationFramework/METHOD.oca.mjs";
// export { SupportedMethods } from "../IN-CS2-SCF-SDF-Operations/SupportedMethods.osa.mjs";
import { ExecuteArgument_Type_input_assertions_Item_valuesWithContext_Item, _decode_ExecuteArgument_Type_input_assertions_Item_valuesWithContext_Item, _encode_ExecuteArgument_Type_input_assertions_Item_valuesWithContext_Item } from "../IN-CS2-SCF-SDF-Operations/ExecuteArgument-Type-input-assertions-Item-valuesWithContext-Item.ta.mjs";
// export { ExecuteArgument_Type_input_assertions_Item_valuesWithContext_Item, _decode_ExecuteArgument_Type_input_assertions_Item_valuesWithContext_Item, _encode_ExecuteArgument_Type_input_assertions_Item_valuesWithContext_Item } from "../IN-CS2-SCF-SDF-Operations/ExecuteArgument-Type-input-assertions-Item-valuesWithContext-Item.ta.mjs";


/**
 * @summary ExecuteArgument_Type_input_assertions_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExecuteArgument-Type-input-assertions-Item ::=
 * SEQUENCE {
 *   type METHOD.&InputAttributes.&id({SupportedMethods}{@method-id}),
 *   values SET OF METHOD.&InputAttributes.&Type({SupportedMethods}{@method-id}) OPTIONAL,
 *   valuesWithContext [0] SET OF
 *     SEQUENCE {
 *       value [0] METHOD.&InputAttributes.&Type({SupportedMethods}{@method-id}) OPTIONAL,
 *       contextList [1] SET OF Context
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ExecuteArgument_Type_input_assertions_Item {
    /**
     * @summary `type_`.
     * @public
     * @readonly
     */
    readonly type_: _Element;
    /**
     * @summary `values`.
     * @public
     * @readonly
     */
    readonly values: OPTIONAL<_Element[]>;
    /**
     * @summary `valuesWithContext`.
     * @public
     * @readonly
     */
    readonly valuesWithContext: OPTIONAL<ExecuteArgument_Type_input_assertions_Item_valuesWithContext_Item[]>;

    constructor (
        type_: _Element,
        values?: OPTIONAL<_Element[]>,
        valuesWithContext?: OPTIONAL<ExecuteArgument_Type_input_assertions_Item_valuesWithContext_Item[]>
    ) {
        this.type_ = type_;
        this.values = values;
        this.valuesWithContext = valuesWithContext;
    }

    /**
     * @summary Restructures an object into a ExecuteArgument_Type_input_assertions_Item
     * @description
     * 
     * This takes an `object` and converts it to a `ExecuteArgument_Type_input_assertions_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExecuteArgument_Type_input_assertions_Item`.
     * @returns {ExecuteArgument_Type_input_assertions_Item}
     */
    public static _from_object (_o: { [_K in keyof (ExecuteArgument_Type_input_assertions_Item)]: (ExecuteArgument_Type_input_assertions_Item)[_K] }): ExecuteArgument_Type_input_assertions_Item {
        return new ExecuteArgument_Type_input_assertions_Item(_o.type_, _o.values, _o.valuesWithContext);
    }


}

/**
 * @summary The Leading Root Component Types of ExecuteArgument_Type_input_assertions_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ExecuteArgument_Type_input_assertions_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("type", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("values", true, $.hasTag(_TagClass.universal, 17)),
    new $.ComponentSpec("valuesWithContext", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of ExecuteArgument_Type_input_assertions_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ExecuteArgument_Type_input_assertions_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ExecuteArgument_Type_input_assertions_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ExecuteArgument_Type_input_assertions_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ExecuteArgument_Type_input_assertions_Item: $.ASN1Decoder<ExecuteArgument_Type_input_assertions_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExecuteArgument_Type_input_assertions_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExecuteArgument_Type_input_assertions_Item (el: _Element): ExecuteArgument_Type_input_assertions_Item {
    if (!_cached_decoder_for_ExecuteArgument_Type_input_assertions_Item) { _cached_decoder_for_ExecuteArgument_Type_input_assertions_Item = function (el: _Element): ExecuteArgument_Type_input_assertions_Item {
    let type_!: _Element;
    let values: OPTIONAL<_Element[]>;
    let valuesWithContext: OPTIONAL<ExecuteArgument_Type_input_assertions_Item_valuesWithContext_Item[]>;
    const callbacks: $.DecodingMap = {
        "type": (_el: _Element): void => { type_ = $._decodeAny(_el); },
        "values": (_el: _Element): void => { values = $._decodeSetOf<_Element>(() => $._decodeAny)(_el); },
        "valuesWithContext": (_el: _Element): void => { valuesWithContext = $._decode_explicit<ExecuteArgument_Type_input_assertions_Item_valuesWithContext_Item[]>(() => $._decodeSetOf<ExecuteArgument_Type_input_assertions_Item_valuesWithContext_Item>(() => _decode_ExecuteArgument_Type_input_assertions_Item_valuesWithContext_Item))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ExecuteArgument_Type_input_assertions_Item,
        _extension_additions_list_spec_for_ExecuteArgument_Type_input_assertions_Item,
        _root_component_type_list_2_spec_for_ExecuteArgument_Type_input_assertions_Item,
        undefined,
    );
    return new ExecuteArgument_Type_input_assertions_Item(
        type_,
        values,
        valuesWithContext
    );
}; }
    return _cached_decoder_for_ExecuteArgument_Type_input_assertions_Item(el);
}

let _cached_encoder_for_ExecuteArgument_Type_input_assertions_Item: $.ASN1Encoder<ExecuteArgument_Type_input_assertions_Item> | null = null;

/**
 * @summary Encodes a(n) ExecuteArgument_Type_input_assertions_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExecuteArgument_Type_input_assertions_Item, encoded as an ASN.1 Element.
 */
export
function _encode_ExecuteArgument_Type_input_assertions_Item (value: ExecuteArgument_Type_input_assertions_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExecuteArgument_Type_input_assertions_Item) { _cached_encoder_for_ExecuteArgument_Type_input_assertions_Item = function (value: ExecuteArgument_Type_input_assertions_Item, elGetter: $.ASN1Encoder<ExecuteArgument_Type_input_assertions_Item>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encodeAny(value.type_, $.BER));
    if (value.values !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encodeSetOf<_Element>(() => $._encodeAny, $.BER)(value.values, $.BER));
    }
    if (value.valuesWithContext !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => $._encodeSetOf<ExecuteArgument_Type_input_assertions_Item_valuesWithContext_Item>(() => _encode_ExecuteArgument_Type_input_assertions_Item_valuesWithContext_Item, $.BER), $.BER)(value.valuesWithContext, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ExecuteArgument_Type_input_assertions_Item(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { METHOD } from "../IN-CS2-SDF-InformationFramework/METHOD.oca.mjs";
// export { SupportedMethods } from "../IN-CS2-SCF-SDF-Operations/SupportedMethods.osa.mjs";
import { Context, _decode_Context, _encode_Context } from "../InformationFramework/Context.ta.mjs";
// export { Context, _decode_Context, _encode_Context } from "../InformationFramework/Context.ta.mjs";


/**
 * @summary ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExecuteResult-Type-output-assertions-Item-valuesWithContext-Item ::=
 * SEQUENCE {
 *   value [0] METHOD.&OutputAttributes.&Type({SupportedMethods}{@method-id}) OPTIONAL,
 *   contextList [1] SET OF Context
 * }
 * ```
 * 
 * @class
 */
export
class ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item {
    /**
     * @summary `value`.
     * @public
     * @readonly
     */
    readonly value: OPTIONAL<_Element>;
    /**
     * @summary `contextList`.
     * @public
     * @readonly
     */
    readonly contextList: Context[];

    constructor (
        value: OPTIONAL<_Element>,
        contextList: Context[]
    ) {
        this.value = value;
        this.contextList = contextList;
    }

    /**
     * @summary Restructures an object into a ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item
     * @description
     * 
     * This takes an `object` and converts it to a `ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item`.
     * @returns {ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item}
     */
    public static _from_object (_o: { [_K in keyof (ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item)]: (ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item)[_K] }): ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item {
        return new ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item(_o.value, _o.contextList);
    }


}

/**
 * @summary The Leading Root Component Types of ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("value", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("contextList", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item: $.ASN1Decoder<ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item (el: _Element): ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item {
    if (!_cached_decoder_for_ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item) { _cached_decoder_for_ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item = function (el: _Element): ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item {
    let value: OPTIONAL<_Element>;
    let contextList!: Context[];
    const callbacks: $.DecodingMap = {
        "value": (_el: _Element): void => { value = $._decode_explicit<_Element>(() => $._decodeAny)(_el); },
        "contextList": (_el: _Element): void => { contextList = $._decode_explicit<Context[]>(() => $._decodeSetOf<Context>(() => _decode_Context))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item,
        _extension_additions_list_spec_for_ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item,
        _root_component_type_list_2_spec_for_ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item,
        undefined,
    );
    return new ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item(
        value,
        contextList
    );
}; }
    return _cached_decoder_for_ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item(el);
}

let _cached_encoder_for_ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item: $.ASN1Encoder<ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item> | null = null;

/**
 * @summary Encodes a(n) ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item, encoded as an ASN.1 Element.
 */
export
function _encode_ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item (value: ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item) { _cached_encoder_for_ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item = function (value: ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item, elGetter: $.ASN1Encoder<ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item>): _Element {
    const _components: _Element[] = [];
    if (value.value !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => $._encodeAny, $.BER)(value.value, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => $._encodeSetOf<Context>(() => _encode_Context, $.BER), $.BER)(value.contextList, $.BER));
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ExecuteResult_Type_output_assertions_Item_valuesWithContext_Item(value, elGetter);
}


/* eslint-enable */

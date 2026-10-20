/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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
 * @summary AttributeTypeValueContexts
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeTypeValueContexts ::= SEQUENCE {
 *   type         ATTRIBUTE.&id({SupportedAttributes}),
 *   value        ATTRIBUTE.&Type({SupportedAttributes}{@type}),
 *   contextList  SET SIZE (1..MAX) OF Context OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AttributeTypeValueContexts {
    /**
     * @summary `type_`.
     * @public
     * @readonly
     */
    readonly type_: OBJECT_IDENTIFIER;
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
    readonly contextList: OPTIONAL<Context[]>;

    constructor (
        type_: OBJECT_IDENTIFIER,
        value: _Element,
        contextList: OPTIONAL<Context[]>
    ) {
        this.type_ = type_;
        this.value = value;
        this.contextList = contextList;
    }

    /**
     * @summary Restructures an object into a AttributeTypeValueContexts
     * @description
     * 
     * This takes an `object` and converts it to a `AttributeTypeValueContexts`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeTypeValueContexts`.
     * @returns {AttributeTypeValueContexts}
     */
    public static _from_object (_o: { [_K in keyof (AttributeTypeValueContexts)]: (AttributeTypeValueContexts)[_K] }): AttributeTypeValueContexts {
        return new AttributeTypeValueContexts(_o.type_, _o.value, _o.contextList);
    }


}

/**
 * @summary The Leading Root Component Types of AttributeTypeValueContexts
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AttributeTypeValueContexts: $.ComponentSpec[] = [
    new $.ComponentSpec("type", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("value", false, $.hasAnyTag),
    new $.ComponentSpec("contextList", true, $.hasTag(_TagClass.universal, 17))
];

/**
 * @summary The Trailing Root Component Types of AttributeTypeValueContexts
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AttributeTypeValueContexts: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AttributeTypeValueContexts
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AttributeTypeValueContexts: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AttributeTypeValueContexts: $.ASN1Decoder<AttributeTypeValueContexts> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeTypeValueContexts
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeTypeValueContexts (el: _Element): AttributeTypeValueContexts {
    if (!_cached_decoder_for_AttributeTypeValueContexts) { _cached_decoder_for_AttributeTypeValueContexts = function (el: _Element): AttributeTypeValueContexts {
    let type_!: OBJECT_IDENTIFIER;
    let value!: _Element;
    let contextList: OPTIONAL<Context[]>;
    const callbacks: $.DecodingMap = {
        "type": (_el: _Element): void => { type_ = $._decodeObjectIdentifier(_el); },
        "value": (_el: _Element): void => { value = $._decodeAny(_el); },
        "contextList": (_el: _Element): void => { contextList = $._decodeSetOf<Context>(() => _decode_Context)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttributeTypeValueContexts,
        _extension_additions_list_spec_for_AttributeTypeValueContexts,
        _root_component_type_list_2_spec_for_AttributeTypeValueContexts,
        undefined,
    );
    return new AttributeTypeValueContexts(
        type_,
        value,
        contextList
    );
}; }
    return _cached_decoder_for_AttributeTypeValueContexts(el);
}

let _cached_encoder_for_AttributeTypeValueContexts: $.ASN1Encoder<AttributeTypeValueContexts> | null = null;

/**
 * @summary Encodes a(n) AttributeTypeValueContexts into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeTypeValueContexts, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeTypeValueContexts (value: AttributeTypeValueContexts, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeTypeValueContexts) { _cached_encoder_for_AttributeTypeValueContexts = function (value: AttributeTypeValueContexts, elGetter: $.ASN1Encoder<AttributeTypeValueContexts>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encodeObjectIdentifier(value.type_, $.BER));
    _components.push(/* REQUIRED   */ $._encodeAny(value.value, $.BER));
    if (value.contextList !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encodeSetOf<Context>(() => _encode_Context, $.BER)(value.contextList, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AttributeTypeValueContexts(value, elGetter);
}


/* eslint-enable */

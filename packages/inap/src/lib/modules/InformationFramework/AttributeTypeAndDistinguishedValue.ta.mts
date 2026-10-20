/* eslint-disable */
import {
    BOOLEAN,
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { SupportedAttributes } from "../InformationFramework/SupportedAttributes.osa.mjs";
import { AttributeTypeAndDistinguishedValue_valuesWithContext_Item, _decode_AttributeTypeAndDistinguishedValue_valuesWithContext_Item, _encode_AttributeTypeAndDistinguishedValue_valuesWithContext_Item } from "../InformationFramework/AttributeTypeAndDistinguishedValue-valuesWithContext-Item.ta.mjs";
// export { AttributeTypeAndDistinguishedValue_valuesWithContext_Item, _decode_AttributeTypeAndDistinguishedValue_valuesWithContext_Item, _encode_AttributeTypeAndDistinguishedValue_valuesWithContext_Item } from "../InformationFramework/AttributeTypeAndDistinguishedValue-valuesWithContext-Item.ta.mjs";


/**
 * @summary AttributeTypeAndDistinguishedValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeTypeAndDistinguishedValue ::= SEQUENCE {
 *   type                  ATTRIBUTE.&id({SupportedAttributes}),
 *   value                 ATTRIBUTE.&Type({SupportedAttributes}{@type}),
 *   primaryDistinguished  BOOLEAN DEFAULT TRUE,
 *   valuesWithContext
 *     SET SIZE (1..MAX) OF
 *       SEQUENCE {distingAttrValue
 *                   [0]  ATTRIBUTE.&Type({SupportedAttributes}{@type})
 *                     OPTIONAL,
 *                 contextList       SET SIZE (1..MAX) OF Context} OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AttributeTypeAndDistinguishedValue {
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
     * @summary `primaryDistinguished`.
     * @public
     * @readonly
     */
    readonly primaryDistinguished: OPTIONAL<BOOLEAN>;
    /**
     * @summary `valuesWithContext`.
     * @public
     * @readonly
     */
    readonly valuesWithContext: OPTIONAL<AttributeTypeAndDistinguishedValue_valuesWithContext_Item[]>;

    constructor (
        type_: OBJECT_IDENTIFIER,
        value: _Element,
        primaryDistinguished: OPTIONAL<BOOLEAN>,
        valuesWithContext: OPTIONAL<AttributeTypeAndDistinguishedValue_valuesWithContext_Item[]>
    ) {
        this.type_ = type_;
        this.value = value;
        this.primaryDistinguished = primaryDistinguished;
        this.valuesWithContext = valuesWithContext;
    }

    /**
     * @summary Restructures an object into a AttributeTypeAndDistinguishedValue
     * @description
     * 
     * This takes an `object` and converts it to a `AttributeTypeAndDistinguishedValue`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeTypeAndDistinguishedValue`.
     * @returns {AttributeTypeAndDistinguishedValue}
     */
    public static _from_object (_o: { [_K in keyof (AttributeTypeAndDistinguishedValue)]: (AttributeTypeAndDistinguishedValue)[_K] }): AttributeTypeAndDistinguishedValue {
        return new AttributeTypeAndDistinguishedValue(_o.type_, _o.value, _o.primaryDistinguished, _o.valuesWithContext);
    }

    /**
     * @summary Getter that returns the default value for `primaryDistinguished`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_primaryDistinguished () { return true; }
}

/**
 * @summary The Leading Root Component Types of AttributeTypeAndDistinguishedValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AttributeTypeAndDistinguishedValue: $.ComponentSpec[] = [
    new $.ComponentSpec("type", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("value", false, $.hasAnyTag),
    new $.ComponentSpec("primaryDistinguished", true, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("valuesWithContext", true, $.hasTag(_TagClass.universal, 17))
];

/**
 * @summary The Trailing Root Component Types of AttributeTypeAndDistinguishedValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AttributeTypeAndDistinguishedValue: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AttributeTypeAndDistinguishedValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AttributeTypeAndDistinguishedValue: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AttributeTypeAndDistinguishedValue: $.ASN1Decoder<AttributeTypeAndDistinguishedValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeTypeAndDistinguishedValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeTypeAndDistinguishedValue (el: _Element): AttributeTypeAndDistinguishedValue {
    if (!_cached_decoder_for_AttributeTypeAndDistinguishedValue) { _cached_decoder_for_AttributeTypeAndDistinguishedValue = function (el: _Element): AttributeTypeAndDistinguishedValue {
    let type_!: OBJECT_IDENTIFIER;
    let value!: _Element;
    let primaryDistinguished: OPTIONAL<BOOLEAN> = AttributeTypeAndDistinguishedValue._default_value_for_primaryDistinguished;
    let valuesWithContext: OPTIONAL<AttributeTypeAndDistinguishedValue_valuesWithContext_Item[]>;
    const callbacks: $.DecodingMap = {
        "type": (_el: _Element): void => { type_ = $._decodeObjectIdentifier(_el); },
        "value": (_el: _Element): void => { value = $._decodeAny(_el); },
        "primaryDistinguished": (_el: _Element): void => { primaryDistinguished = $._decodeBoolean(_el); },
        "valuesWithContext": (_el: _Element): void => { valuesWithContext = $._decodeSetOf<AttributeTypeAndDistinguishedValue_valuesWithContext_Item>(() => _decode_AttributeTypeAndDistinguishedValue_valuesWithContext_Item)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttributeTypeAndDistinguishedValue,
        _extension_additions_list_spec_for_AttributeTypeAndDistinguishedValue,
        _root_component_type_list_2_spec_for_AttributeTypeAndDistinguishedValue,
        undefined,
    );
    return new AttributeTypeAndDistinguishedValue(
        type_,
        value,
        primaryDistinguished,
        valuesWithContext
    );
}; }
    return _cached_decoder_for_AttributeTypeAndDistinguishedValue(el);
}

let _cached_encoder_for_AttributeTypeAndDistinguishedValue: $.ASN1Encoder<AttributeTypeAndDistinguishedValue> | null = null;

/**
 * @summary Encodes a(n) AttributeTypeAndDistinguishedValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeTypeAndDistinguishedValue, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeTypeAndDistinguishedValue (value: AttributeTypeAndDistinguishedValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeTypeAndDistinguishedValue) { _cached_encoder_for_AttributeTypeAndDistinguishedValue = function (value: AttributeTypeAndDistinguishedValue, elGetter: $.ASN1Encoder<AttributeTypeAndDistinguishedValue>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encodeObjectIdentifier(value.type_, $.BER));
    _components.push(/* REQUIRED   */ $._encodeAny(value.value, $.BER));
    if (value.primaryDistinguished !== undefined && !$.deepEq(value.primaryDistinguished, AttributeTypeAndDistinguishedValue._default_value_for_primaryDistinguished)) {
        _components.push(/* IF_DEFAULT */ $._encodeBoolean(value.primaryDistinguished, $.BER));
    }
    if (value.valuesWithContext !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encodeSetOf<AttributeTypeAndDistinguishedValue_valuesWithContext_Item>(() => _encode_AttributeTypeAndDistinguishedValue_valuesWithContext_Item, $.BER)(value.valuesWithContext, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AttributeTypeAndDistinguishedValue(value, elGetter);
}


/* eslint-enable */

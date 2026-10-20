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
import { AttributeValueAssertion_assertedContexts, _decode_AttributeValueAssertion_assertedContexts, _encode_AttributeValueAssertion_assertedContexts } from "../InformationFramework/AttributeValueAssertion-assertedContexts.ta.mjs";
// export { AttributeValueAssertion_assertedContexts, _decode_AttributeValueAssertion_assertedContexts, _encode_AttributeValueAssertion_assertedContexts } from "../InformationFramework/AttributeValueAssertion-assertedContexts.ta.mjs";


/**
 * @summary AttributeValueAssertion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeValueAssertion ::= SEQUENCE {
 *   type              ATTRIBUTE.&id({SupportedAttributes}),
 *   assertion
 *     ATTRIBUTE.&equality-match.&AssertionType
 *       ({SupportedAttributes}{@type}),
 *   assertedContexts
 *     CHOICE {allContexts       [0]  NULL,
 *             selectedContexts  [1]  SET SIZE (1..MAX) OF ContextAssertion
 *   } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AttributeValueAssertion {
    /**
     * @summary `type_`.
     * @public
     * @readonly
     */
    readonly type_: OBJECT_IDENTIFIER;
    /**
     * @summary `assertion`.
     * @public
     * @readonly
     */
    readonly assertion: _Element;
    /**
     * @summary `assertedContexts`.
     * @public
     * @readonly
     */
    readonly assertedContexts: OPTIONAL<AttributeValueAssertion_assertedContexts>;

    constructor (
        type_: OBJECT_IDENTIFIER,
        assertion: _Element,
        assertedContexts: OPTIONAL<AttributeValueAssertion_assertedContexts>
    ) {
        this.type_ = type_;
        this.assertion = assertion;
        this.assertedContexts = assertedContexts;
    }

    /**
     * @summary Restructures an object into a AttributeValueAssertion
     * @description
     * 
     * This takes an `object` and converts it to a `AttributeValueAssertion`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeValueAssertion`.
     * @returns {AttributeValueAssertion}
     */
    public static _from_object (_o: { [_K in keyof (AttributeValueAssertion)]: (AttributeValueAssertion)[_K] }): AttributeValueAssertion {
        return new AttributeValueAssertion(_o.type_, _o.assertion, _o.assertedContexts);
    }


}

/**
 * @summary The Leading Root Component Types of AttributeValueAssertion
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AttributeValueAssertion: $.ComponentSpec[] = [
    new $.ComponentSpec("type", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("assertion", false, $.hasAnyTag),
    new $.ComponentSpec("assertedContexts", true, $.or($.hasTag(_TagClass.context, 0), $.hasTag(_TagClass.context, 1)))
];

/**
 * @summary The Trailing Root Component Types of AttributeValueAssertion
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AttributeValueAssertion: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AttributeValueAssertion
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AttributeValueAssertion: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AttributeValueAssertion: $.ASN1Decoder<AttributeValueAssertion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeValueAssertion
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeValueAssertion (el: _Element): AttributeValueAssertion {
    if (!_cached_decoder_for_AttributeValueAssertion) { _cached_decoder_for_AttributeValueAssertion = function (el: _Element): AttributeValueAssertion {
    let type_!: OBJECT_IDENTIFIER;
    let assertion!: _Element;
    let assertedContexts: OPTIONAL<AttributeValueAssertion_assertedContexts>;
    const callbacks: $.DecodingMap = {
        "type": (_el: _Element): void => { type_ = $._decodeObjectIdentifier(_el); },
        "assertion": (_el: _Element): void => { assertion = $._decodeAny(_el); },
        "assertedContexts": (_el: _Element): void => { assertedContexts = _decode_AttributeValueAssertion_assertedContexts(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttributeValueAssertion,
        _extension_additions_list_spec_for_AttributeValueAssertion,
        _root_component_type_list_2_spec_for_AttributeValueAssertion,
        undefined,
    );
    return new AttributeValueAssertion(
        type_,
        assertion,
        assertedContexts
    );
}; }
    return _cached_decoder_for_AttributeValueAssertion(el);
}

let _cached_encoder_for_AttributeValueAssertion: $.ASN1Encoder<AttributeValueAssertion> | null = null;

/**
 * @summary Encodes a(n) AttributeValueAssertion into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeValueAssertion, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeValueAssertion (value: AttributeValueAssertion, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeValueAssertion) { _cached_encoder_for_AttributeValueAssertion = function (value: AttributeValueAssertion, elGetter: $.ASN1Encoder<AttributeValueAssertion>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encodeObjectIdentifier(value.type_, $.BER));
    _components.push(/* REQUIRED   */ $._encodeAny(value.assertion, $.BER));
    if (value.assertedContexts !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_AttributeValueAssertion_assertedContexts(value.assertedContexts, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AttributeValueAssertion(value, elGetter);
}


/* eslint-enable */

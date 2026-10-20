/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { AttributeValueAssertion, _decode_AttributeValueAssertion, _encode_AttributeValueAssertion } from "../InformationFramework/AttributeValueAssertion.ta.mjs";
// export { AttributeValueAssertion, _decode_AttributeValueAssertion, _encode_AttributeValueAssertion } from "../InformationFramework/AttributeValueAssertion.ta.mjs";


/**
 * @summary MultipleMatchingLocalities
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MultipleMatchingLocalities ::= SEQUENCE {
 *   matchingRuleUsed  MATCHING-RULE.&id OPTIONAL,
 *   attributeList     SEQUENCE OF AttributeValueAssertion
 * }
 * ```
 * 
 * @class
 */
export
class MultipleMatchingLocalities {
    /**
     * @summary `matchingRuleUsed`.
     * @public
     * @readonly
     */
    readonly matchingRuleUsed: OPTIONAL<OBJECT_IDENTIFIER>;
    /**
     * @summary `attributeList`.
     * @public
     * @readonly
     */
    readonly attributeList: AttributeValueAssertion[];

    constructor (
        matchingRuleUsed: OPTIONAL<OBJECT_IDENTIFIER>,
        attributeList: AttributeValueAssertion[]
    ) {
        this.matchingRuleUsed = matchingRuleUsed;
        this.attributeList = attributeList;
    }

    /**
     * @summary Restructures an object into a MultipleMatchingLocalities
     * @description
     * 
     * This takes an `object` and converts it to a `MultipleMatchingLocalities`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MultipleMatchingLocalities`.
     * @returns {MultipleMatchingLocalities}
     */
    public static _from_object (_o: { [_K in keyof (MultipleMatchingLocalities)]: (MultipleMatchingLocalities)[_K] }): MultipleMatchingLocalities {
        return new MultipleMatchingLocalities(_o.matchingRuleUsed, _o.attributeList);
    }


}

/**
 * @summary The Leading Root Component Types of MultipleMatchingLocalities
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MultipleMatchingLocalities: $.ComponentSpec[] = [
    new $.ComponentSpec("matchingRuleUsed", true, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("attributeList", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of MultipleMatchingLocalities
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MultipleMatchingLocalities: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MultipleMatchingLocalities
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MultipleMatchingLocalities: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MultipleMatchingLocalities: $.ASN1Decoder<MultipleMatchingLocalities> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MultipleMatchingLocalities
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MultipleMatchingLocalities (el: _Element): MultipleMatchingLocalities {
    if (!_cached_decoder_for_MultipleMatchingLocalities) { _cached_decoder_for_MultipleMatchingLocalities = function (el: _Element): MultipleMatchingLocalities {
    let matchingRuleUsed: OPTIONAL<OBJECT_IDENTIFIER>;
    let attributeList!: AttributeValueAssertion[];
    const callbacks: $.DecodingMap = {
        "matchingRuleUsed": (_el: _Element): void => { matchingRuleUsed = $._decodeObjectIdentifier(_el); },
        "attributeList": (_el: _Element): void => { attributeList = $._decodeSequenceOf<AttributeValueAssertion>(() => _decode_AttributeValueAssertion)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MultipleMatchingLocalities,
        _extension_additions_list_spec_for_MultipleMatchingLocalities,
        _root_component_type_list_2_spec_for_MultipleMatchingLocalities,
        undefined,
    );
    return new MultipleMatchingLocalities(
        matchingRuleUsed,
        attributeList
    );
}; }
    return _cached_decoder_for_MultipleMatchingLocalities(el);
}

let _cached_encoder_for_MultipleMatchingLocalities: $.ASN1Encoder<MultipleMatchingLocalities> | null = null;

/**
 * @summary Encodes a(n) MultipleMatchingLocalities into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MultipleMatchingLocalities, encoded as an ASN.1 Element.
 */
export
function _encode_MultipleMatchingLocalities (value: MultipleMatchingLocalities, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MultipleMatchingLocalities) { _cached_encoder_for_MultipleMatchingLocalities = function (value: MultipleMatchingLocalities, elGetter: $.ASN1Encoder<MultipleMatchingLocalities>): _Element {
    const _components: _Element[] = [];
    if (value.matchingRuleUsed !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encodeObjectIdentifier(value.matchingRuleUsed, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encodeSequenceOf<AttributeValueAssertion>(() => _encode_AttributeValueAssertion, $.BER)(value.attributeList, $.BER));
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MultipleMatchingLocalities(value, elGetter);
}


/* eslint-enable */

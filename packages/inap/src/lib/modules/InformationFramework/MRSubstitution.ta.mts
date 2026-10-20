/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../InformationFramework/AttributeType.ta.mjs";
// export { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../InformationFramework/AttributeType.ta.mjs";
// export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";


/**
 * @summary MRSubstitution
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MRSubstitution ::= SEQUENCE {
 *   attribute        AttributeType,
 *   oldMatchingRule  [0]  MATCHING-RULE.&id OPTIONAL,
 *   newMatchingRule  [1]  MATCHING-RULE.&id OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MRSubstitution {
    /**
     * @summary `attribute`.
     * @public
     * @readonly
     */
    readonly attribute: AttributeType;
    /**
     * @summary `oldMatchingRule`.
     * @public
     * @readonly
     */
    readonly oldMatchingRule: OPTIONAL<OBJECT_IDENTIFIER>;
    /**
     * @summary `newMatchingRule`.
     * @public
     * @readonly
     */
    readonly newMatchingRule: OPTIONAL<OBJECT_IDENTIFIER>;

    constructor (
        attribute: AttributeType,
        oldMatchingRule: OPTIONAL<OBJECT_IDENTIFIER>,
        newMatchingRule: OPTIONAL<OBJECT_IDENTIFIER>
    ) {
        this.attribute = attribute;
        this.oldMatchingRule = oldMatchingRule;
        this.newMatchingRule = newMatchingRule;
    }

    /**
     * @summary Restructures an object into a MRSubstitution
     * @description
     * 
     * This takes an `object` and converts it to a `MRSubstitution`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MRSubstitution`.
     * @returns {MRSubstitution}
     */
    public static _from_object (_o: { [_K in keyof (MRSubstitution)]: (MRSubstitution)[_K] }): MRSubstitution {
        return new MRSubstitution(_o.attribute, _o.oldMatchingRule, _o.newMatchingRule);
    }


}

/**
 * @summary The Leading Root Component Types of MRSubstitution
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MRSubstitution: $.ComponentSpec[] = [
    new $.ComponentSpec("attribute", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("oldMatchingRule", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("newMatchingRule", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of MRSubstitution
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MRSubstitution: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MRSubstitution
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MRSubstitution: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MRSubstitution: $.ASN1Decoder<MRSubstitution> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MRSubstitution
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MRSubstitution (el: _Element): MRSubstitution {
    if (!_cached_decoder_for_MRSubstitution) { _cached_decoder_for_MRSubstitution = function (el: _Element): MRSubstitution {
    let attribute!: AttributeType;
    let oldMatchingRule: OPTIONAL<OBJECT_IDENTIFIER>;
    let newMatchingRule: OPTIONAL<OBJECT_IDENTIFIER>;
    const callbacks: $.DecodingMap = {
        "attribute": (_el: _Element): void => { attribute = _decode_AttributeType(_el); },
        "oldMatchingRule": (_el: _Element): void => { oldMatchingRule = $._decode_explicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "newMatchingRule": (_el: _Element): void => { newMatchingRule = $._decode_explicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MRSubstitution,
        _extension_additions_list_spec_for_MRSubstitution,
        _root_component_type_list_2_spec_for_MRSubstitution,
        undefined,
    );
    return new MRSubstitution(
        attribute,
        oldMatchingRule,
        newMatchingRule
    );
}; }
    return _cached_decoder_for_MRSubstitution(el);
}

let _cached_encoder_for_MRSubstitution: $.ASN1Encoder<MRSubstitution> | null = null;

/**
 * @summary Encodes a(n) MRSubstitution into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MRSubstitution, encoded as an ASN.1 Element.
 */
export
function _encode_MRSubstitution (value: MRSubstitution, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MRSubstitution) { _cached_encoder_for_MRSubstitution = function (value: MRSubstitution, elGetter: $.ASN1Encoder<MRSubstitution>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_AttributeType(value.attribute, $.BER));
    if (value.oldMatchingRule !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.oldMatchingRule, $.BER));
    }
    if (value.newMatchingRule !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER)(value.newMatchingRule, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MRSubstitution(value, elGetter);
}


/* eslint-enable */

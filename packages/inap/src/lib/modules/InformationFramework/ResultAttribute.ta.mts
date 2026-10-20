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
import { ResultAttribute_outputValues, _decode_ResultAttribute_outputValues, _encode_ResultAttribute_outputValues } from "../InformationFramework/ResultAttribute-outputValues.ta.mjs";
// export { ResultAttribute_outputValues, _decode_ResultAttribute_outputValues, _encode_ResultAttribute_outputValues } from "../InformationFramework/ResultAttribute-outputValues.ta.mjs";
import { ContextProfile, _decode_ContextProfile, _encode_ContextProfile } from "../InformationFramework/ContextProfile.ta.mjs";
// export { ContextProfile, _decode_ContextProfile, _encode_ContextProfile } from "../InformationFramework/ContextProfile.ta.mjs";


/**
 * @summary ResultAttribute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResultAttribute ::= SEQUENCE {
 *   attributeType  ATTRIBUTE.&id({SupportedAttributes}),
 *   outputValues
 *     CHOICE {selectedValues
 *               SEQUENCE SIZE (1..MAX) OF
 *                 ATTRIBUTE.&Type({SupportedAttributes}{@attributeType}),
 *             matchedValuesOnly  NULL} OPTIONAL,
 *   contexts       [0]  SEQUENCE SIZE (1..MAX) OF ContextProfile OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ResultAttribute {
    /**
     * @summary `attributeType`.
     * @public
     * @readonly
     */
    readonly attributeType: OBJECT_IDENTIFIER;
    /**
     * @summary `outputValues`.
     * @public
     * @readonly
     */
    readonly outputValues: OPTIONAL<ResultAttribute_outputValues>;
    /**
     * @summary `contexts`.
     * @public
     * @readonly
     */
    readonly contexts: OPTIONAL<ContextProfile[]>;

    constructor (
        attributeType: OBJECT_IDENTIFIER,
        outputValues: OPTIONAL<ResultAttribute_outputValues>,
        contexts: OPTIONAL<ContextProfile[]>
    ) {
        this.attributeType = attributeType;
        this.outputValues = outputValues;
        this.contexts = contexts;
    }

    /**
     * @summary Restructures an object into a ResultAttribute
     * @description
     * 
     * This takes an `object` and converts it to a `ResultAttribute`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ResultAttribute`.
     * @returns {ResultAttribute}
     */
    public static _from_object (_o: { [_K in keyof (ResultAttribute)]: (ResultAttribute)[_K] }): ResultAttribute {
        return new ResultAttribute(_o.attributeType, _o.outputValues, _o.contexts);
    }


}

/**
 * @summary The Leading Root Component Types of ResultAttribute
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ResultAttribute: $.ComponentSpec[] = [
    new $.ComponentSpec("attributeType", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("outputValues", true, $.or($.hasTag(_TagClass.universal, 16), $.hasTag(_TagClass.universal, 5))),
    new $.ComponentSpec("contexts", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of ResultAttribute
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ResultAttribute: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ResultAttribute
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ResultAttribute: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ResultAttribute: $.ASN1Decoder<ResultAttribute> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResultAttribute
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResultAttribute (el: _Element): ResultAttribute {
    if (!_cached_decoder_for_ResultAttribute) { _cached_decoder_for_ResultAttribute = function (el: _Element): ResultAttribute {
    let attributeType!: OBJECT_IDENTIFIER;
    let outputValues: OPTIONAL<ResultAttribute_outputValues>;
    let contexts: OPTIONAL<ContextProfile[]>;
    const callbacks: $.DecodingMap = {
        "attributeType": (_el: _Element): void => { attributeType = $._decodeObjectIdentifier(_el); },
        "outputValues": (_el: _Element): void => { outputValues = _decode_ResultAttribute_outputValues(_el); },
        "contexts": (_el: _Element): void => { contexts = $._decode_explicit<ContextProfile[]>(() => $._decodeSequenceOf<ContextProfile>(() => _decode_ContextProfile))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ResultAttribute,
        _extension_additions_list_spec_for_ResultAttribute,
        _root_component_type_list_2_spec_for_ResultAttribute,
        undefined,
    );
    return new ResultAttribute(
        attributeType,
        outputValues,
        contexts
    );
}; }
    return _cached_decoder_for_ResultAttribute(el);
}

let _cached_encoder_for_ResultAttribute: $.ASN1Encoder<ResultAttribute> | null = null;

/**
 * @summary Encodes a(n) ResultAttribute into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResultAttribute, encoded as an ASN.1 Element.
 */
export
function _encode_ResultAttribute (value: ResultAttribute, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResultAttribute) { _cached_encoder_for_ResultAttribute = function (value: ResultAttribute, elGetter: $.ASN1Encoder<ResultAttribute>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encodeObjectIdentifier(value.attributeType, $.BER));
    if (value.outputValues !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_ResultAttribute_outputValues(value.outputValues, $.BER));
    }
    if (value.contexts !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => $._encodeSequenceOf<ContextProfile>(() => _encode_ContextProfile, $.BER), $.BER)(value.contexts, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ResultAttribute(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ElementRequest_compositeElement_elementList, _decode_ElementRequest_compositeElement_elementList, _encode_ElementRequest_compositeElement_elementList } from "../ElementSpecification-eSpec-2/ElementRequest-compositeElement-elementList.ta.mjs";
// export { ElementRequest_compositeElement_elementList, _decode_ElementRequest_compositeElement_elementList, _encode_ElementRequest_compositeElement_elementList } from "../ElementSpecification-eSpec-2/ElementRequest-compositeElement-elementList.ta.mjs";
import { TagPath, _decode_TagPath, _encode_TagPath } from "../ElementSpecification-eSpec-2/TagPath.ta.mjs";
// export { TagPath, _decode_TagPath, _encode_TagPath } from "../ElementSpecification-eSpec-2/TagPath.ta.mjs";
import { Variant, _decode_Variant, _encode_Variant } from "../RecordSyntax-generic/Variant.ta.mjs";
// export { Variant, _decode_Variant, _encode_Variant } from "../RecordSyntax-generic/Variant.ta.mjs";


/**
 * @summary ElementRequest_compositeElement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ElementRequest-compositeElement ::= SEQUENCE {
 *     elementList [1] CHOICE {
 *         primitives [1] IMPLICIT SEQUENCE OF InternationalString,
 *         -- Client may specify one or more element set names,
 *         -- each identifying a set of elements, and the composite element is the union
 *         specs [2] IMPLICIT SEQUENCE OF SimpleElement
 *     },
 *     deliveryTag [2] IMPLICIT TagPath,
 *     -- DeliveryTag tagPath for compositeElement
 *     -- may not include wildThing or wildPath
 *     variantRequest [3] IMPLICIT Variant OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ElementRequest_compositeElement {
    /**
     * @summary `elementList`.
     * @public
     * @readonly
     */
    readonly elementList: ElementRequest_compositeElement_elementList;
    /**
     * @summary `deliveryTag`.
     * @public
     * @readonly
     */
    readonly deliveryTag: TagPath;
    /**
     * @summary `variantRequest`.
     * @public
     * @readonly
     */
    readonly variantRequest: OPTIONAL<Variant>;

    constructor (
        elementList: ElementRequest_compositeElement_elementList,
        deliveryTag: TagPath,
        variantRequest: OPTIONAL<Variant>
    ) {
        this.elementList = elementList;
        this.deliveryTag = deliveryTag;
        this.variantRequest = variantRequest;
    }

    /**
     * @summary Restructures an object into a ElementRequest_compositeElement
     * @description
     * 
     * This takes an `object` and converts it to a `ElementRequest_compositeElement`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ElementRequest_compositeElement`.
     * @returns {ElementRequest_compositeElement}
     */
    public static _from_object (_o: { [_K in keyof (ElementRequest_compositeElement)]: (ElementRequest_compositeElement)[_K] }): ElementRequest_compositeElement {
        return new ElementRequest_compositeElement(_o.elementList, _o.deliveryTag, _o.variantRequest);
    }


}

/**
 * @summary The Leading Root Component Types of ElementRequest_compositeElement
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ElementRequest_compositeElement: $.ComponentSpec[] = [
    new $.ComponentSpec("elementList", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("deliveryTag", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("variantRequest", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ElementRequest_compositeElement
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ElementRequest_compositeElement: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ElementRequest_compositeElement
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ElementRequest_compositeElement: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ElementRequest_compositeElement: $.ASN1Decoder<ElementRequest_compositeElement> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ElementRequest_compositeElement
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ElementRequest_compositeElement (el: _Element): ElementRequest_compositeElement {
    if (!_cached_decoder_for_ElementRequest_compositeElement) { _cached_decoder_for_ElementRequest_compositeElement = function (el: _Element): ElementRequest_compositeElement {
    let elementList!: ElementRequest_compositeElement_elementList;
    let deliveryTag!: TagPath;
    let variantRequest: OPTIONAL<Variant>;
    const callbacks: $.DecodingMap = {
        "elementList": (_el: _Element): void => { elementList = $._decode_explicit<ElementRequest_compositeElement_elementList>(() => _decode_ElementRequest_compositeElement_elementList)(_el); },
        "deliveryTag": (_el: _Element): void => { deliveryTag = $._decode_implicit<TagPath>(() => _decode_TagPath)(_el); },
        "variantRequest": (_el: _Element): void => { variantRequest = $._decode_implicit<Variant>(() => _decode_Variant)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ElementRequest_compositeElement,
        _extension_additions_list_spec_for_ElementRequest_compositeElement,
        _root_component_type_list_2_spec_for_ElementRequest_compositeElement,
        undefined,
    );
    return new ElementRequest_compositeElement(
        elementList,
        deliveryTag,
        variantRequest
    );
}; }
    return _cached_decoder_for_ElementRequest_compositeElement(el);
}

let _cached_encoder_for_ElementRequest_compositeElement: $.ASN1Encoder<ElementRequest_compositeElement> | null = null;

/**
 * @summary Encodes a(n) ElementRequest_compositeElement into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ElementRequest_compositeElement, encoded as an ASN.1 Element.
 */
export
function _encode_ElementRequest_compositeElement (value: ElementRequest_compositeElement, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ElementRequest_compositeElement) { _cached_encoder_for_ElementRequest_compositeElement = function (value: ElementRequest_compositeElement, elGetter: $.ASN1Encoder<ElementRequest_compositeElement>): _Element {
    const _components: _Element[] = new Array(3);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_ElementRequest_compositeElement_elementList, $.BER)(value.elementList, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_TagPath, $.BER)(value.deliveryTag, $.BER);
    if (value.variantRequest !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Variant, $.BER)(value.variantRequest, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ElementRequest_compositeElement(value, elGetter);
}


/* eslint-enable */

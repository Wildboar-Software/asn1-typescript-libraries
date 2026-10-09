/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AttributeSetId, _decode_AttributeSetId, _encode_AttributeSetId } from "../Z39-50-APDU-2001/AttributeSetId.ta.mjs";
import { AttributeElement_attributeValue, _decode_AttributeElement_attributeValue, _encode_AttributeElement_attributeValue } from "../Z39-50-APDU-2001/AttributeElement-attributeValue.ta.mjs";


/**
 * @summary AttributeElement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeElement ::= SEQUENCE {
 *     attributeSet    [1] IMPLICIT AttributeSetId OPTIONAL,
 *     --Must be omitted if version 2 is in force.
 *     --If included, overrides value of attributeSet in RPNQuery above, but only for this attribute.
 *     attributeType   [120] IMPLICIT INTEGER,
 *     attributeValue  CHOICE {
 *         numeric         [121] IMPLICIT INTEGER,
 *         -- If version 2 is in force, must select 'numeric' for attributeValue
 *         complex         [224] IMPLICIT SEQUENCE {
 *             list            [1] IMPLICIT SEQUENCE OF StringOrNumeric,
 *             semanticAction  [2] IMPLICIT SEQUENCE OF INTEGER OPTIONAL
 *         }
 *         -- See comment 10.
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class AttributeElement {
    /**
     * @summary `attributeSet`.
     * @public
     * @readonly
     */
    readonly attributeSet: OPTIONAL<AttributeSetId>;
    /**
     * @summary `attributeType`.
     * @public
     * @readonly
     */
    readonly attributeType: INTEGER;
    /**
     * @summary `attributeValue`.
     * @public
     * @readonly
     */
    readonly attributeValue: AttributeElement_attributeValue;

    constructor (
        attributeSet: OPTIONAL<AttributeSetId>,
        attributeType: INTEGER,
        attributeValue: AttributeElement_attributeValue
    ) {
        this.attributeSet = attributeSet;
        this.attributeType = attributeType;
        this.attributeValue = attributeValue;
    }

    /**
     * @summary Restructures an object into a AttributeElement
     * @description
     * 
     * This takes an `object` and converts it to a `AttributeElement`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeElement`.
     * @returns {AttributeElement}
     */
    public static _from_object (_o: { [_K in keyof (AttributeElement)]: (AttributeElement)[_K] }): AttributeElement {
        return new AttributeElement(_o.attributeSet, _o.attributeType, _o.attributeValue);
    }


}

/**
 * @summary The Leading Root Component Types of AttributeElement
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AttributeElement: $.ComponentSpec[] = [
    new $.ComponentSpec("attributeSet", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("attributeType", false, $.hasTag(_TagClass.context, 120)),
    new $.ComponentSpec("attributeValue", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of AttributeElement
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AttributeElement: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AttributeElement
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AttributeElement: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AttributeElement: $.ASN1Decoder<AttributeElement> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeElement
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeElement (el: _Element): AttributeElement {
    if (!_cached_decoder_for_AttributeElement) { _cached_decoder_for_AttributeElement = function (el: _Element): AttributeElement {
    let attributeSet: OPTIONAL<AttributeSetId>;
    let attributeType!: INTEGER;
    let attributeValue!: AttributeElement_attributeValue;
    const callbacks: $.DecodingMap = {
        "attributeSet": (_el: _Element): void => { attributeSet = $._decode_implicit<AttributeSetId>(() => _decode_AttributeSetId)(_el); },
        "attributeType": (_el: _Element): void => { attributeType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "attributeValue": (_el: _Element): void => { attributeValue = _decode_AttributeElement_attributeValue(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttributeElement,
        _extension_additions_list_spec_for_AttributeElement,
        _root_component_type_list_2_spec_for_AttributeElement,
        undefined,
    );
    return new AttributeElement(
        attributeSet,
        attributeType,
        attributeValue
    );
}; }
    return _cached_decoder_for_AttributeElement(el);
}

let _cached_encoder_for_AttributeElement: $.ASN1Encoder<AttributeElement> | null = null;

/**
 * @summary Encodes a(n) AttributeElement into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeElement, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeElement (value: AttributeElement, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeElement) { _cached_encoder_for_AttributeElement = function (value: AttributeElement, elGetter: $.ASN1Encoder<AttributeElement>): _Element {
    const _components: _Element[] = new Array(3);
    let _components_i = 0;
    if (value.attributeSet !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_AttributeSetId, $.BER)(value.attributeSet, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 120, () => $._encodeInteger, $.BER)(value.attributeType, $.BER);
    _components[_components_i++] = /* REQUIRED   */ _encode_AttributeElement_attributeValue(value.attributeValue, $.BER);
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AttributeElement(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { StringOrNumeric, _decode_StringOrNumeric, _encode_StringOrNumeric } from "../Z39-50-APDU-2001/StringOrNumeric.ta.mjs";
// export { StringOrNumeric, _decode_StringOrNumeric, _encode_StringOrNumeric } from "../Z39-50-APDU-2001/StringOrNumeric.ta.mjs";


/**
 * @summary AttributeElement_attributeValue_complex
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeElement-attributeValue-complex ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class AttributeElement_attributeValue_complex {
    /**
     * @summary `list`.
     * @public
     * @readonly
     */
    readonly list: StringOrNumeric[];
    /**
     * @summary `semanticAction`.
     * @public
     * @readonly
     */
    readonly semanticAction: OPTIONAL<INTEGER[]>;

    constructor (
        list: StringOrNumeric[],
        semanticAction: OPTIONAL<INTEGER[]>
    ) {
        this.list = list;
        this.semanticAction = semanticAction;
    }

    /**
     * @summary Restructures an object into a AttributeElement_attributeValue_complex
     * @description
     * 
     * This takes an `object` and converts it to a `AttributeElement_attributeValue_complex`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeElement_attributeValue_complex`.
     * @returns {AttributeElement_attributeValue_complex}
     */
    public static _from_object (_o: { [_K in keyof (AttributeElement_attributeValue_complex)]: (AttributeElement_attributeValue_complex)[_K] }): AttributeElement_attributeValue_complex {
        return new AttributeElement_attributeValue_complex(_o.list, _o.semanticAction);
    }


}

/**
 * @summary The Leading Root Component Types of AttributeElement_attributeValue_complex
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AttributeElement_attributeValue_complex: $.ComponentSpec[] = [
    new $.ComponentSpec("list", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("semanticAction", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of AttributeElement_attributeValue_complex
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AttributeElement_attributeValue_complex: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AttributeElement_attributeValue_complex
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AttributeElement_attributeValue_complex: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AttributeElement_attributeValue_complex: $.ASN1Decoder<AttributeElement_attributeValue_complex> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeElement_attributeValue_complex
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeElement_attributeValue_complex (el: _Element): AttributeElement_attributeValue_complex {
    if (!_cached_decoder_for_AttributeElement_attributeValue_complex) { _cached_decoder_for_AttributeElement_attributeValue_complex = function (el: _Element): AttributeElement_attributeValue_complex {
    let list!: StringOrNumeric[];
    let semanticAction: OPTIONAL<INTEGER[]>;
    const callbacks: $.DecodingMap = {
        "list": (_el: _Element): void => { list = $._decode_implicit<StringOrNumeric[]>(() => $._decodeSequenceOf<StringOrNumeric>(() => _decode_StringOrNumeric))(_el); },
        "semanticAction": (_el: _Element): void => { semanticAction = $._decode_implicit<INTEGER[]>(() => $._decodeSequenceOf<INTEGER>(() => $._decodeInteger))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttributeElement_attributeValue_complex,
        _extension_additions_list_spec_for_AttributeElement_attributeValue_complex,
        _root_component_type_list_2_spec_for_AttributeElement_attributeValue_complex,
        undefined,
    );
    return new AttributeElement_attributeValue_complex(
        list,
        semanticAction
    );
}; }
    return _cached_decoder_for_AttributeElement_attributeValue_complex(el);
}

let _cached_encoder_for_AttributeElement_attributeValue_complex: $.ASN1Encoder<AttributeElement_attributeValue_complex> | null = null;

/**
 * @summary Encodes a(n) AttributeElement_attributeValue_complex into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeElement_attributeValue_complex, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeElement_attributeValue_complex (value: AttributeElement_attributeValue_complex, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeElement_attributeValue_complex) { _cached_encoder_for_AttributeElement_attributeValue_complex = function (value: AttributeElement_attributeValue_complex, elGetter: $.ASN1Encoder<AttributeElement_attributeValue_complex>): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<StringOrNumeric>(() => _encode_StringOrNumeric, $.BER), $.BER)(value.list, $.BER);
    if (value.semanticAction !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<INTEGER>(() => $._encodeInteger, $.BER), $.BER)(value.semanticAction, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AttributeElement_attributeValue_complex(value, elGetter);
}


/* eslint-enable */

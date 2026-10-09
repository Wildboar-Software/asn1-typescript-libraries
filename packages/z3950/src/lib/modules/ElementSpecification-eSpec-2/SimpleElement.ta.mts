/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TagPath, _decode_TagPath, _encode_TagPath } from "../ElementSpecification-eSpec-2/TagPath.ta.mjs";
// export { TagPath, _decode_TagPath, _encode_TagPath } from "../ElementSpecification-eSpec-2/TagPath.ta.mjs";
import { Variant, _decode_Variant, _encode_Variant } from "../RecordSyntax-generic/Variant.ta.mjs";
// export { Variant, _decode_Variant, _encode_Variant } from "../RecordSyntax-generic/Variant.ta.mjs";


/**
 * @summary SimpleElement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SimpleElement ::= SEQUENCE {
 *     path            [1] IMPLICIT TagPath,
 *     variantRequest  [2] IMPLICIT Variant OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SimpleElement {
    /**
     * @summary `path`.
     * @public
     * @readonly
     */
    readonly path: TagPath;
    /**
     * @summary `variantRequest`.
     * @public
     * @readonly
     */
    readonly variantRequest: OPTIONAL<Variant>;

    constructor (
        path: TagPath,
        variantRequest: OPTIONAL<Variant>
    ) {
        this.path = path;
        this.variantRequest = variantRequest;
    }

    /**
     * @summary Restructures an object into a SimpleElement
     * @description
     * 
     * This takes an `object` and converts it to a `SimpleElement`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SimpleElement`.
     * @returns {SimpleElement}
     */
    public static _from_object (_o: { [_K in keyof (SimpleElement)]: (SimpleElement)[_K] }): SimpleElement {
        return new SimpleElement(_o.path, _o.variantRequest);
    }


}

/**
 * @summary The Leading Root Component Types of SimpleElement
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SimpleElement: $.ComponentSpec[] = [
    new $.ComponentSpec("path", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("variantRequest", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SimpleElement
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SimpleElement: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SimpleElement
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SimpleElement: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SimpleElement: $.ASN1Decoder<SimpleElement> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SimpleElement
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SimpleElement (el: _Element): SimpleElement {
    if (!_cached_decoder_for_SimpleElement) { _cached_decoder_for_SimpleElement = function (el: _Element): SimpleElement {
    let path!: TagPath;
    let variantRequest: OPTIONAL<Variant>;
    const callbacks: $.DecodingMap = {
        "path": (_el: _Element): void => { path = $._decode_implicit<TagPath>(() => _decode_TagPath)(_el); },
        "variantRequest": (_el: _Element): void => { variantRequest = $._decode_implicit<Variant>(() => _decode_Variant)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SimpleElement,
        _extension_additions_list_spec_for_SimpleElement,
        _root_component_type_list_2_spec_for_SimpleElement,
        undefined,
    );
    return new SimpleElement(
        path,
        variantRequest
    );
}; }
    return _cached_decoder_for_SimpleElement(el);
}

let _cached_encoder_for_SimpleElement: $.ASN1Encoder<SimpleElement> | null = null;

/**
 * @summary Encodes a(n) SimpleElement into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SimpleElement, encoded as an ASN.1 Element.
 */
export
function _encode_SimpleElement (value: SimpleElement, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SimpleElement) { _cached_encoder_for_SimpleElement = function (value: SimpleElement, elGetter: $.ASN1Encoder<SimpleElement>): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_TagPath, $.BER)(value.path, $.BER);
    if (value.variantRequest !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_Variant, $.BER)(value.variantRequest, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SimpleElement(value, elGetter);
}


/* eslint-enable */

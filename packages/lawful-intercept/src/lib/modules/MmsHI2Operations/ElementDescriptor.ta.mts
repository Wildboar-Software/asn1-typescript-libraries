/* eslint-disable */
import {
    UTF8String,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName } from "../MmsHI2Operations/ParameterName.ta.mjs";
// export { ParameterName, _decode_ParameterName, _encode_ParameterName } from "../MmsHI2Operations/ParameterName.ta.mjs";
import { ParameterValue, _decode_ParameterValue, _encode_ParameterValue } from "../MmsHI2Operations/ParameterValue.ta.mjs";
// export { ParameterValue, _decode_ParameterValue, _encode_ParameterValue } from "../MmsHI2Operations/ParameterValue.ta.mjs";


/**
 * @summary ElementDescriptor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ElementDescriptor ::= SEQUENCE
 * {
 *     contentReferenceValue [1] UTF8String,
 *     parameterName          [2] ParameterName,
 *     parameterValue          [3] ParameterValue,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class ElementDescriptor {
    /**
     * @summary `contentReferenceValue`.
     * @public
     * @readonly
     */
    readonly contentReferenceValue: UTF8String;
    /**
     * @summary `parameterName`.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @public
     * @readonly
     */
    readonly parameterValue: ParameterValue;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        contentReferenceValue: UTF8String,
        parameterName: ParameterName,
        parameterValue: ParameterValue,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.contentReferenceValue = contentReferenceValue;
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ElementDescriptor
     * @description
     * 
     * This takes an `object` and converts it to a `ElementDescriptor`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ElementDescriptor`.
     * @returns {ElementDescriptor}
     */
    public static _from_object (_o: { [_K in keyof (ElementDescriptor)]: (ElementDescriptor)[_K] }): ElementDescriptor {
        return new ElementDescriptor(_o.contentReferenceValue, _o.parameterName, _o.parameterValue, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ElementDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ElementDescriptor: $.ComponentSpec[] = [
    new $.ComponentSpec("contentReferenceValue", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ElementDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ElementDescriptor: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ElementDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ElementDescriptor: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ElementDescriptor: $.ASN1Decoder<ElementDescriptor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ElementDescriptor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ElementDescriptor (el: _Element): ElementDescriptor {
    if (!_cached_decoder_for_ElementDescriptor) { _cached_decoder_for_ElementDescriptor = function (el: _Element): ElementDescriptor {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("ElementDescriptor contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "contentReferenceValue";
    sequence[1].name = "parameterName";
    sequence[2].name = "parameterValue";
    let contentReferenceValue!: UTF8String;
    let parameterName!: ParameterName;
    let parameterValue!: ParameterValue;
    contentReferenceValue = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(sequence[0]);
    parameterName = $._decode_explicit<ParameterName>(() => _decode_ParameterName)(sequence[1]);
    parameterValue = $._decode_explicit<ParameterValue>(() => _decode_ParameterValue)(sequence[2]);
    return new ElementDescriptor(
        contentReferenceValue,
        parameterName,
        parameterValue,
        sequence.slice(3),
    );
}; }
    return _cached_decoder_for_ElementDescriptor(el);
}

let _cached_encoder_for_ElementDescriptor: $.ASN1Encoder<ElementDescriptor> | null = null;

/**
 * @summary Encodes a(n) ElementDescriptor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ElementDescriptor, encoded as an ASN.1 Element.
 */
export
function _encode_ElementDescriptor (value: ElementDescriptor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ElementDescriptor) { _cached_encoder_for_ElementDescriptor = function (value: ElementDescriptor, elGetter: $.ASN1Encoder<ElementDescriptor>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.contentReferenceValue, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_ParameterName, $.BER)(value.parameterName, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_ParameterValue, $.BER)(value.parameterValue, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ElementDescriptor(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type AttributeType, _decode_AttributeType, _encode_AttributeType } from "../InformationFramework/AttributeType.ta.mjs";
import { AttributeQuality, _decode_AttributeQuality, _encode_AttributeQuality } from "../Thorn/AttributeQuality.ta.mjs";


/**
 * @summary DataQualitySyntax_attributeQuality_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataQualitySyntax-attributeQuality-Item ::= SEQUENCE {
 *     type        AttributeType,
 *     quality     AttributeQuality,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class DataQualitySyntax_attributeQuality_Item {
    /**
     * @summary `type_`.
     * @public
     * @readonly
     */
    readonly type_: AttributeType;
    /**
     * @summary `quality`.
     * @public
     * @readonly
     */
    readonly quality: AttributeQuality;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        type_: AttributeType,
        quality: AttributeQuality,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.type_ = type_;
        this.quality = quality;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a DataQualitySyntax_attributeQuality_Item
     * @description
     * 
     * This takes an `object` and converts it to a `DataQualitySyntax_attributeQuality_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DataQualitySyntax_attributeQuality_Item`.
     * @returns {DataQualitySyntax_attributeQuality_Item}
     */
    public static _from_object (_o: { [_K in keyof (DataQualitySyntax_attributeQuality_Item)]: (DataQualitySyntax_attributeQuality_Item)[_K] }): DataQualitySyntax_attributeQuality_Item {
        return new DataQualitySyntax_attributeQuality_Item(_o.type_, _o.quality, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of DataQualitySyntax_attributeQuality_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DataQualitySyntax_attributeQuality_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("type", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("quality", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of DataQualitySyntax_attributeQuality_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DataQualitySyntax_attributeQuality_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DataQualitySyntax_attributeQuality_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DataQualitySyntax_attributeQuality_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DataQualitySyntax_attributeQuality_Item: $.ASN1Decoder<DataQualitySyntax_attributeQuality_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DataQualitySyntax_attributeQuality_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DataQualitySyntax_attributeQuality_Item (el: _Element): DataQualitySyntax_attributeQuality_Item {
    if (!_cached_decoder_for_DataQualitySyntax_attributeQuality_Item) { _cached_decoder_for_DataQualitySyntax_attributeQuality_Item = function (el: _Element): DataQualitySyntax_attributeQuality_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("DataQualitySyntax-attributeQuality-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "type";
    sequence[1].name = "quality";
    const type_: AttributeType = _decode_AttributeType(sequence[0]);
    const quality: AttributeQuality = _decode_AttributeQuality(sequence[1]);
    return new DataQualitySyntax_attributeQuality_Item(
        type_,
        quality,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_DataQualitySyntax_attributeQuality_Item(el);
}

let _cached_encoder_for_DataQualitySyntax_attributeQuality_Item: $.ASN1Encoder<DataQualitySyntax_attributeQuality_Item> | null = null;

/**
 * @summary Encodes a(n) DataQualitySyntax_attributeQuality_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataQualitySyntax_attributeQuality_Item, encoded as an ASN.1 Element.
 */
export
function _encode_DataQualitySyntax_attributeQuality_Item (value: DataQualitySyntax_attributeQuality_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DataQualitySyntax_attributeQuality_Item) { _cached_encoder_for_DataQualitySyntax_attributeQuality_Item = function (value: DataQualitySyntax_attributeQuality_Item, elGetter: $.ASN1Encoder<DataQualitySyntax_attributeQuality_Item>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ _encode_AttributeType(value.type_, $.BER);
    _components[_components_i++] = /* REQUIRED   */ _encode_AttributeQuality(value.quality, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DataQualitySyntax_attributeQuality_Item(value, elGetter);
}


/* eslint-enable */


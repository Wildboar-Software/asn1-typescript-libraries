/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    VisibleString,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary ServiceInstanceAttribute_Item
 * @description
 * 
 * One attribute name and its value. `identifier` is the object
 * identifier. The module comments state the printable name for that
 * identifier.
 * 
 * CCSDS 911.1-B-5, section A2.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceInstanceAttribute-Item ::= SEQUENCE
 * {  identifier                       ATTRIBUTE.&id
 *                                     ({ServiceInstanceAttributes})
 * ,  siAttributeValue                 VisibleString (SIZE (1 .. 256))
 * }
 * ```
 * 
 * @class
 */
export
class ServiceInstanceAttribute_Item {
    /**
     * @summary `identifier`.
     * @description
     * Object identifier of this attribute, constrained to an `&id` in
     * `ServiceInstanceAttributes`. Printable names are `sagr`,
     * `spack`, `fsl-fg`, `rsl-fg`, and the service names.
     * CCSDS 911.1-B-5, section A2.4.
     * @public
     * @readonly
     */
    readonly identifier: OBJECT_IDENTIFIER;
    /**
     * @summary `siAttributeValue`.
     * @description
     * Visible string of 1 to 256 characters. For `sagr`, `spack`,
     * `fsl-fg`, and `rsl-fg`, the user and the provider agree the
     * value. Each service-name attribute states the prefix its value
     * starts with, followed by an instance number.
     * CCSDS 911.1-B-5, section A2.4.
     * @public
     * @readonly
     */
    readonly siAttributeValue: VisibleString;

    constructor (
        identifier: OBJECT_IDENTIFIER,
        siAttributeValue: VisibleString
    ) {
        if (siAttributeValue.length < 1 || siAttributeValue.length > 256) {
            throw new ASN1SizeError("ServiceInstanceAttribute_Item.siAttributeValue violates SIZE (1..256)");
        }
        this.identifier = identifier;
        this.siAttributeValue = siAttributeValue;
    }

    /**
     * @summary Restructures an object into a ServiceInstanceAttribute_Item
     * @description
     * 
     * This takes an `object` and converts it to a `ServiceInstanceAttribute_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServiceInstanceAttribute_Item`.
     * @returns {ServiceInstanceAttribute_Item}
     */
    public static _from_object (_o: { [_K in keyof (ServiceInstanceAttribute_Item)]: (ServiceInstanceAttribute_Item)[_K] }): ServiceInstanceAttribute_Item {
        return new ServiceInstanceAttribute_Item(_o.identifier, _o.siAttributeValue);
    }


}

/**
 * @summary The Leading Root Component Types of ServiceInstanceAttribute_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServiceInstanceAttribute_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("identifier", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("siAttributeValue", false, $.hasTag(_TagClass.universal, 26))
];

/**
 * @summary The Trailing Root Component Types of ServiceInstanceAttribute_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServiceInstanceAttribute_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServiceInstanceAttribute_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServiceInstanceAttribute_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServiceInstanceAttribute_Item: $.ASN1Decoder<ServiceInstanceAttribute_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceInstanceAttribute_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceInstanceAttribute_Item (el: _Element): ServiceInstanceAttribute_Item {
    if (!_cached_decoder_for_ServiceInstanceAttribute_Item) { _cached_decoder_for_ServiceInstanceAttribute_Item = function (el: _Element): ServiceInstanceAttribute_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ServiceInstanceAttribute-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "identifier";
    sequence[1].name = "siAttributeValue";
    let identifier!: OBJECT_IDENTIFIER;
    let siAttributeValue!: VisibleString;
    identifier = $._decodeObjectIdentifier(sequence[0]);
    siAttributeValue = $._decodeVisibleString(sequence[1]);
    return new ServiceInstanceAttribute_Item(
        identifier,
        siAttributeValue,

    );
}; }
    return _cached_decoder_for_ServiceInstanceAttribute_Item(el);
}

let _cached_encoder_for_ServiceInstanceAttribute_Item: $.ASN1Encoder<ServiceInstanceAttribute_Item> | null = null;

/**
 * @summary Encodes a(n) ServiceInstanceAttribute_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceInstanceAttribute_Item, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceInstanceAttribute_Item (value: ServiceInstanceAttribute_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceInstanceAttribute_Item) { _cached_encoder_for_ServiceInstanceAttribute_Item = function (value: ServiceInstanceAttribute_Item, _elGetter: $.ASN1Encoder<ServiceInstanceAttribute_Item>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encodeObjectIdentifier(value.identifier, $.BER),
        /* REQUIRED   */ $._encodeVisibleString(value.siAttributeValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_ServiceInstanceAttribute_Item(value, elGetter);
}


/* eslint-enable */

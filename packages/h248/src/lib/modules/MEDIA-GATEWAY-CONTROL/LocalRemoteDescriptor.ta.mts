/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PropertyGroup, _decode_PropertyGroup, _encode_PropertyGroup } from "../MEDIA-GATEWAY-CONTROL/PropertyGroup.ta.mjs";
// export { PropertyGroup, _decode_PropertyGroup, _encode_PropertyGroup } from "../MEDIA-GATEWAY-CONTROL/PropertyGroup.ta.mjs";


/**
 * @summary LocalRemoteDescriptor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocalRemoteDescriptor ::= SEQUENCE
 *     {
 *         propGrps                [0] SEQUENCE OF PropertyGroup,
 *         ...
 *     }
 * ```
 * 
 * @class
 */
export
class LocalRemoteDescriptor {
    constructor (
        /**
         * @summary `propGrps`.
         * @public
         * @readonly
         */
        readonly propGrps: PropertyGroup[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a LocalRemoteDescriptor
     * @description
     * 
     * This takes an `object` and converts it to a `LocalRemoteDescriptor`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LocalRemoteDescriptor`.
     * @returns {LocalRemoteDescriptor}
     */
    public static _from_object (_o: { [_K in keyof (LocalRemoteDescriptor)]: (LocalRemoteDescriptor)[_K] }): LocalRemoteDescriptor {
        return new LocalRemoteDescriptor(_o.propGrps, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of LocalRemoteDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LocalRemoteDescriptor: $.ComponentSpec[] = [
    new $.ComponentSpec("propGrps", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of LocalRemoteDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LocalRemoteDescriptor: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LocalRemoteDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LocalRemoteDescriptor: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LocalRemoteDescriptor: $.ASN1Decoder<LocalRemoteDescriptor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocalRemoteDescriptor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocalRemoteDescriptor (el: _Element): LocalRemoteDescriptor {
    if (!_cached_decoder_for_LocalRemoteDescriptor) { _cached_decoder_for_LocalRemoteDescriptor = function (el: _Element): LocalRemoteDescriptor {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("LocalRemoteDescriptor contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "propGrps";
    let propGrps!: PropertyGroup[];
    propGrps = $._decode_implicit<PropertyGroup[]>(() => $._decodeSequenceOf<PropertyGroup>(() => _decode_PropertyGroup))(sequence[0]);
    return new LocalRemoteDescriptor(
        propGrps,
        sequence.slice(1),
    );
}; }
    return _cached_decoder_for_LocalRemoteDescriptor(el);
}

let _cached_encoder_for_LocalRemoteDescriptor: $.ASN1Encoder<LocalRemoteDescriptor> | null = null;

/**
 * @summary Encodes a(n) LocalRemoteDescriptor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocalRemoteDescriptor, encoded as an ASN.1 Element.
 */
export
function _encode_LocalRemoteDescriptor (value: LocalRemoteDescriptor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocalRemoteDescriptor) { _cached_encoder_for_LocalRemoteDescriptor = function (value: LocalRemoteDescriptor, elGetter: $.ASN1Encoder<LocalRemoteDescriptor>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<PropertyGroup>(() => _encode_PropertyGroup, $.BER), $.BER)(value.propGrps, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LocalRemoteDescriptor(value, elGetter);
}


/* eslint-enable */

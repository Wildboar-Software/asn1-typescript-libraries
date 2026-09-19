/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { OPENTYPE } from "../RSPDefinitions/OPENTYPE.oca.mjs";


/**
 * @summary VendorSpecificExtension_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VendorSpecificExtension-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class VendorSpecificExtension_Item {
    constructor (
        /**
         * @summary `vendorOid`.
         * @public
         * @readonly
         */
        readonly vendorOid: OBJECT_IDENTIFIER,
        /**
         * @summary `vendorSpecificData`.
         * @public
         * @readonly
         */
        readonly vendorSpecificData: _Element
    ) {}

    /**
     * @summary Restructures an object into a VendorSpecificExtension_Item
     * @description
     * 
     * This takes an `object` and converts it to a `VendorSpecificExtension_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `VendorSpecificExtension_Item`.
     * @returns {VendorSpecificExtension_Item}
     */
    public static _from_object (_o: { [_K in keyof (VendorSpecificExtension_Item)]: (VendorSpecificExtension_Item)[_K] }): VendorSpecificExtension_Item {
        return new VendorSpecificExtension_Item(_o.vendorOid, _o.vendorSpecificData);
    }


}

/**
 * @summary The Leading Root Component Types of VendorSpecificExtension_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_VendorSpecificExtension_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("vendorOid", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("vendorSpecificData", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of VendorSpecificExtension_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_VendorSpecificExtension_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of VendorSpecificExtension_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_VendorSpecificExtension_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_VendorSpecificExtension_Item: $.ASN1Decoder<VendorSpecificExtension_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VendorSpecificExtension_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VendorSpecificExtension_Item (el: _Element): VendorSpecificExtension_Item {
    if (!_cached_decoder_for_VendorSpecificExtension_Item) { _cached_decoder_for_VendorSpecificExtension_Item = function (el: _Element): VendorSpecificExtension_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("VendorSpecificExtension-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "vendorOid";
    sequence[1].name = "vendorSpecificData";
    let vendorOid!: OBJECT_IDENTIFIER;
    let vendorSpecificData!: _Element;
    vendorOid = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(sequence[0]);
    vendorSpecificData = $._decode_implicit<_Element>(() => $._decodeAny)(sequence[1]);
    return new VendorSpecificExtension_Item(
        vendorOid,
        vendorSpecificData,

    );
}; }
    return _cached_decoder_for_VendorSpecificExtension_Item(el);
}

let _cached_encoder_for_VendorSpecificExtension_Item: $.ASN1Encoder<VendorSpecificExtension_Item> | null = null;

/**
 * @summary Encodes a(n) VendorSpecificExtension_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VendorSpecificExtension_Item, encoded as an ASN.1 Element.
 */
export
function _encode_VendorSpecificExtension_Item (value: VendorSpecificExtension_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VendorSpecificExtension_Item) { _cached_encoder_for_VendorSpecificExtension_Item = function (value: VendorSpecificExtension_Item, elGetter: $.ASN1Encoder<VendorSpecificExtension_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.vendorOid, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeAny, $.BER)(value.vendorSpecificData, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_VendorSpecificExtension_Item(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MBMSSerSubscriberList_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSSerSubscriberList-Item ::= SEQUENCE
 * {
 *     mBMSSERSUBSCRIBERLIST    [1]    UTF8String,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class MBMSSerSubscriberList_Item {
    /**
     * @summary `mBMSSERSUBSCRIBERLIST`.
     * @public
     * @readonly
     */
    readonly mBMSSERSUBSCRIBERLIST: UTF8String;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        mBMSSERSUBSCRIBERLIST: UTF8String,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.mBMSSERSUBSCRIBERLIST = mBMSSERSUBSCRIBERLIST;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MBMSSerSubscriberList_Item
     * @description
     * 
     * This takes an `object` and converts it to a `MBMSSerSubscriberList_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MBMSSerSubscriberList_Item`.
     * @returns {MBMSSerSubscriberList_Item}
     */
    public static _from_object (_o: { [_K in keyof (MBMSSerSubscriberList_Item)]: (MBMSSerSubscriberList_Item)[_K] }): MBMSSerSubscriberList_Item {
        return new MBMSSerSubscriberList_Item(_o.mBMSSERSUBSCRIBERLIST, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MBMSSerSubscriberList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MBMSSerSubscriberList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("mBMSSERSUBSCRIBERLIST", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of MBMSSerSubscriberList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MBMSSerSubscriberList_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MBMSSerSubscriberList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MBMSSerSubscriberList_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MBMSSerSubscriberList_Item: $.ASN1Decoder<MBMSSerSubscriberList_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MBMSSerSubscriberList_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MBMSSerSubscriberList_Item (el: _Element): MBMSSerSubscriberList_Item {
    if (!_cached_decoder_for_MBMSSerSubscriberList_Item) { _cached_decoder_for_MBMSSerSubscriberList_Item = function (el: _Element): MBMSSerSubscriberList_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("MBMSSerSubscriberList-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "mBMSSERSUBSCRIBERLIST";
    let mBMSSERSUBSCRIBERLIST!: UTF8String;
    mBMSSERSUBSCRIBERLIST = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(sequence[0]);
    return new MBMSSerSubscriberList_Item(
        mBMSSERSUBSCRIBERLIST,
        sequence.slice(1),
    );
}; }
    return _cached_decoder_for_MBMSSerSubscriberList_Item(el);
}

let _cached_encoder_for_MBMSSerSubscriberList_Item: $.ASN1Encoder<MBMSSerSubscriberList_Item> | null = null;

/**
 * @summary Encodes a(n) MBMSSerSubscriberList_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MBMSSerSubscriberList_Item, encoded as an ASN.1 Element.
 */
export
function _encode_MBMSSerSubscriberList_Item (value: MBMSSerSubscriberList_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MBMSSerSubscriberList_Item) { _cached_encoder_for_MBMSSerSubscriberList_Item = function (value: MBMSSerSubscriberList_Item, elGetter: $.ASN1Encoder<MBMSSerSubscriberList_Item>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(1 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.mBMSSERSUBSCRIBERLIST, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MBMSSerSubscriberList_Item(value, elGetter);
}


/* eslint-enable */

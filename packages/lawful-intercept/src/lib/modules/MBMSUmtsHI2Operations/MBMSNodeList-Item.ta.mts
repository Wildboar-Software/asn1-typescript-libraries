/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MBMSNodeList_Item_mBMSNODELIST, _decode_MBMSNodeList_Item_mBMSNODELIST, _encode_MBMSNodeList_Item_mBMSNODELIST } from "../MBMSUmtsHI2Operations/MBMSNodeList-Item-mBMSNODELIST.ta.mjs";
// export { MBMSNodeList_Item_mBMSNODELIST, _decode_MBMSNodeList_Item_mBMSNODELIST, _encode_MBMSNodeList_Item_mBMSNODELIST } from "../MBMSUmtsHI2Operations/MBMSNodeList-Item-mBMSNODELIST.ta.mjs";


/**
 * @summary MBMSNodeList_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSNodeList-Item ::= SEQUENCE {
 *     mBMSNODELIST    [1]    SEQUENCE
 *     {
 *         mbmsnodeIPAdress    [1]      IPAddress     OPTIONAL,
 *         mbmsnodeName        [2]        UTF8String    OPTIONAL,
 *         ...
 *     }
 *     ,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class MBMSNodeList_Item {
    /**
     * @summary `mBMSNODELIST`.
     * @public
     * @readonly
     */
    readonly mBMSNODELIST: MBMSNodeList_Item_mBMSNODELIST;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        mBMSNODELIST: MBMSNodeList_Item_mBMSNODELIST,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.mBMSNODELIST = mBMSNODELIST;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MBMSNodeList_Item
     * @description
     * 
     * This takes an `object` and converts it to a `MBMSNodeList_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MBMSNodeList_Item`.
     * @returns {MBMSNodeList_Item}
     */
    public static _from_object (_o: { [_K in keyof (MBMSNodeList_Item)]: (MBMSNodeList_Item)[_K] }): MBMSNodeList_Item {
        return new MBMSNodeList_Item(_o.mBMSNODELIST, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MBMSNodeList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MBMSNodeList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("mBMSNODELIST", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of MBMSNodeList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MBMSNodeList_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MBMSNodeList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MBMSNodeList_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MBMSNodeList_Item: $.ASN1Decoder<MBMSNodeList_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MBMSNodeList_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MBMSNodeList_Item (el: _Element): MBMSNodeList_Item {
    if (!_cached_decoder_for_MBMSNodeList_Item) { _cached_decoder_for_MBMSNodeList_Item = function (el: _Element): MBMSNodeList_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("MBMSNodeList-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "mBMSNODELIST";
    let mBMSNODELIST!: MBMSNodeList_Item_mBMSNODELIST;
    mBMSNODELIST = $._decode_implicit<MBMSNodeList_Item_mBMSNODELIST>(() => _decode_MBMSNodeList_Item_mBMSNODELIST)(sequence[0]);
    return new MBMSNodeList_Item(
        mBMSNODELIST,
        sequence.slice(1),
    );
}; }
    return _cached_decoder_for_MBMSNodeList_Item(el);
}

let _cached_encoder_for_MBMSNodeList_Item: $.ASN1Encoder<MBMSNodeList_Item> | null = null;

/**
 * @summary Encodes a(n) MBMSNodeList_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MBMSNodeList_Item, encoded as an ASN.1 Element.
 */
export
function _encode_MBMSNodeList_Item (value: MBMSNodeList_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MBMSNodeList_Item) { _cached_encoder_for_MBMSNodeList_Item = function (value: MBMSNodeList_Item, elGetter: $.ASN1Encoder<MBMSNodeList_Item>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(1 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MBMSNodeList_Item_mBMSNODELIST, $.BER)(value.mBMSNODELIST, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MBMSNodeList_Item(value, elGetter);
}


/* eslint-enable */

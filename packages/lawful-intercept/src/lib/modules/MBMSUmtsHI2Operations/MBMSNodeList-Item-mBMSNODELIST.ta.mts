/* eslint-disable */
import {
    type OPTIONAL,
    type UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../HI2Operations/IPAddress.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../HI2Operations/IPAddress.ta.mjs";


/**
 * @summary MBMSNodeList_Item_mBMSNODELIST
 * @description
 * 
 * Address and name of one entry in the downstream-node list. Table 9.2 also
 * maps the BM-SC identifier onto this structure. Clause 9 does not say which
 * component carries that identifier.
 * 
 * 3GPP TS 33.108, table 9.2 and annex B.8.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSNodeList-Item-mBMSNODELIST ::= SEQUENCE {
 *     mbmsnodeIPAdress    [1]      IPAddress     type OPTIONAL,
 *     mbmsnodeName        [2]        UTF8String    type OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class MBMSNodeList_Item_mBMSNODELIST {
    /**
     * @summary `mbmsnodeIPAdress`.
     * @description
     * 
     * IP address of one node in the list. Clause 9 does not further define this
     * component, including whether it is the BM-SC address. Annex B.8 spells
     * the name mbmsnodeIPAdress.
     * 
     * 3GPP TS 33.108, annex B.8.
     * @public
     * @readonly
     */
    readonly mbmsnodeIPAdress: OPTIONAL<IPAddress>;
    /**
     * @summary `mbmsnodeName`.
     * @description
     * 
     * Name of one node in the list. Table 9.2 describes the BM-SC identifier as
     * a name or identifier of the BM-SC and maps it to mBMSNODELIST. Clause 9
     * does not say that this component is that identifier.
     * 
     * 3GPP TS 33.108, table 9.2 and annex B.8.
     * @public
     * @readonly
     */
    readonly mbmsnodeName: OPTIONAL<UTF8String>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     * 
     * Extension additions that this version of TS 33.108 does not define.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        mbmsnodeIPAdress?: OPTIONAL<IPAddress>,
        mbmsnodeName?: OPTIONAL<UTF8String>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.mbmsnodeIPAdress = mbmsnodeIPAdress;
        this.mbmsnodeName = mbmsnodeName;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MBMSNodeList_Item_mBMSNODELIST
     * @description
     * 
     * This takes an `object` and converts it to a `MBMSNodeList_Item_mBMSNODELIST`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MBMSNodeList_Item_mBMSNODELIST`.
     * @returns {MBMSNodeList_Item_mBMSNODELIST}
     */
    public static _from_object (_o: { [_K in keyof (MBMSNodeList_Item_mBMSNODELIST)]: (MBMSNodeList_Item_mBMSNODELIST)[_K] }): MBMSNodeList_Item_mBMSNODELIST {
        return new MBMSNodeList_Item_mBMSNODELIST(_o.mbmsnodeIPAdress, _o.mbmsnodeName, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MBMSNodeList_Item_mBMSNODELIST
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MBMSNodeList_Item_mBMSNODELIST: $.ComponentSpec[] = [
    new $.ComponentSpec("mbmsnodeIPAdress", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mbmsnodeName", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of MBMSNodeList_Item_mBMSNODELIST
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MBMSNodeList_Item_mBMSNODELIST: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MBMSNodeList_Item_mBMSNODELIST
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MBMSNodeList_Item_mBMSNODELIST: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MBMSNodeList_Item_mBMSNODELIST: $.ASN1Decoder<MBMSNodeList_Item_mBMSNODELIST> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MBMSNodeList_Item_mBMSNODELIST
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MBMSNodeList_Item_mBMSNODELIST (el: _Element): MBMSNodeList_Item_mBMSNODELIST {
    if (!_cached_decoder_for_MBMSNodeList_Item_mBMSNODELIST) { _cached_decoder_for_MBMSNodeList_Item_mBMSNODELIST = function (el: _Element): MBMSNodeList_Item_mBMSNODELIST {
    let mbmsnodeIPAdress: OPTIONAL<IPAddress>;
    let mbmsnodeName: OPTIONAL<UTF8String>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "mbmsnodeIPAdress": (_el: _Element): void => { mbmsnodeIPAdress = $._decode_implicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "mbmsnodeName": (_el: _Element): void => { mbmsnodeName = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MBMSNodeList_Item_mBMSNODELIST,
        _extension_additions_list_spec_for_MBMSNodeList_Item_mBMSNODELIST,
        _root_component_type_list_2_spec_for_MBMSNodeList_Item_mBMSNODELIST,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MBMSNodeList_Item_mBMSNODELIST(
        mbmsnodeIPAdress,
        mbmsnodeName,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MBMSNodeList_Item_mBMSNODELIST(el);
}

let _cached_encoder_for_MBMSNodeList_Item_mBMSNODELIST: $.ASN1Encoder<MBMSNodeList_Item_mBMSNODELIST> | null = null;

/**
 * @summary Encodes a(n) MBMSNodeList_Item_mBMSNODELIST into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MBMSNodeList_Item_mBMSNODELIST, encoded as an ASN.1 Element.
 */
export
function _encode_MBMSNodeList_Item_mBMSNODELIST (value: MBMSNodeList_Item_mBMSNODELIST, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MBMSNodeList_Item_mBMSNODELIST) { _cached_encoder_for_MBMSNodeList_Item_mBMSNODELIST = function (value: MBMSNodeList_Item_mBMSNODELIST, elGetter: $.ASN1Encoder<MBMSNodeList_Item_mBMSNODELIST>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.mbmsnodeIPAdress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_IPAddress, $.BER)(value.mbmsnodeIPAdress, $.BER);
    }
    if (value.mbmsnodeName !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.mbmsnodeName, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MBMSNodeList_Item_mBMSNODELIST(value, elGetter);
}


/* eslint-enable */

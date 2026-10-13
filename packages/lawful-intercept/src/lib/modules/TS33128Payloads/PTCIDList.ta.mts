/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PTCTargetInformation, _decode_PTCTargetInformation, _encode_PTCTargetInformation } from "../TS33128Payloads/PTCTargetInformation.ta.mjs";
// export { PTCTargetInformation, _decode_PTCTargetInformation, _encode_PTCTargetInformation } from "../TS33128Payloads/PTCTargetInformation.ta.mjs";
import { PTCChatGroupID, _decode_PTCChatGroupID, _encode_PTCChatGroupID } from "../TS33128Payloads/PTCChatGroupID.ta.mjs";
// export { PTCChatGroupID, _decode_PTCChatGroupID, _encode_PTCChatGroupID } from "../TS33128Payloads/PTCChatGroupID.ta.mjs";


/**
 * @summary PTCIDList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCIDList ::= SEQUENCE
 * {
 *     pTCPartyID                 [1] PTCTargetInformation,
 *     pTCChatGroupID             [2] PTCChatGroupID
 * }
 * ```
 * 
 * @class
 */
export
class PTCIDList {
    /**
     * @summary `pTCPartyID`.
     * @public
     * @readonly
     */
    readonly pTCPartyID: PTCTargetInformation;
    /**
     * @summary `pTCChatGroupID`.
     * @public
     * @readonly
     */
    readonly pTCChatGroupID: PTCChatGroupID;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        pTCPartyID: PTCTargetInformation,
        pTCChatGroupID: PTCChatGroupID,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.pTCPartyID = pTCPartyID;
        this.pTCChatGroupID = pTCChatGroupID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PTCIDList
     * @description
     * 
     * This takes an `object` and converts it to a `PTCIDList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PTCIDList`.
     * @returns {PTCIDList}
     */
    public static _from_object (_o: { [_K in keyof (PTCIDList)]: (PTCIDList)[_K] }): PTCIDList {
        return new PTCIDList(_o.pTCPartyID, _o.pTCChatGroupID, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PTCIDList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PTCIDList: $.ComponentSpec[] = [
    new $.ComponentSpec("pTCPartyID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pTCChatGroupID", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of PTCIDList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PTCIDList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PTCIDList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PTCIDList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PTCIDList: $.ASN1Decoder<PTCIDList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCIDList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCIDList (el: _Element): PTCIDList {
    if (!_cached_decoder_for_PTCIDList) { _cached_decoder_for_PTCIDList = function (el: _Element): PTCIDList {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PTCIDList contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "pTCPartyID";
    sequence[1].name = "pTCChatGroupID";
    let pTCPartyID!: PTCTargetInformation;
    let pTCChatGroupID!: PTCChatGroupID;
    pTCPartyID = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(sequence[0]);
    pTCChatGroupID = $._decode_implicit<PTCChatGroupID>(() => _decode_PTCChatGroupID)(sequence[1]);
    return new PTCIDList(
        pTCPartyID,
        pTCChatGroupID,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_PTCIDList(el);
}

let _cached_encoder_for_PTCIDList: $.ASN1Encoder<PTCIDList> | null = null;

/**
 * @summary Encodes a(n) PTCIDList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCIDList, encoded as an ASN.1 Element.
 */
export
function _encode_PTCIDList (value: PTCIDList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCIDList) { _cached_encoder_for_PTCIDList = function (value: PTCIDList, elGetter: $.ASN1Encoder<PTCIDList>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PTCTargetInformation, $.BER)(value.pTCPartyID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_PTCChatGroupID, $.BER)(value.pTCChatGroupID, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PTCIDList(value, elGetter);
}


/* eslint-enable */

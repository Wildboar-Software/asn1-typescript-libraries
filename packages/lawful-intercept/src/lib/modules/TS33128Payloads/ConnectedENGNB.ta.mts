/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GNbID, _decode_GNbID, _encode_GNbID } from "../TS33128Payloads/GNbID.ta.mjs";
// export { GNbID, _decode_GNbID, _encode_GNbID } from "../TS33128Payloads/GNbID.ta.mjs";
import { TACList, _decode_TACList, _encode_TACList } from "../TS33128Payloads/TACList.ta.mjs";
// export { TACList, _decode_TACList, _encode_TACList } from "../TS33128Payloads/TACList.ta.mjs";
import { PLMNList, _decode_PLMNList, _encode_PLMNList } from "../TS33128Payloads/PLMNList.ta.mjs";
// export { PLMNList, _decode_PLMNList, _encode_PLMNList } from "../TS33128Payloads/PLMNList.ta.mjs";


/**
 * @summary ConnectedENGNB
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectedENGNB ::= SEQUENCE
 * {
 *     eNGNBID         [1] GNbID,
 *     supportedTAList [2] TACList,
 *     broadcastPLMN   [3] PLMNList
 * }
 * ```
 * 
 * @class
 */
export
class ConnectedENGNB {
    /**
     * @summary `eNGNBID`.
     * @description
     *
     * The gNBID of the connected en-gNB.
     *
     * 3GPP TS 33.128, clause 8.4.9.
     *
     * @public
     * @readonly
     */
    readonly eNGNBID: GNbID;
    /**
     * @summary `supportedTAList`.
     * @description
     *
     * A list of TACs supported by the connected en-gNB.
     *
     * 3GPP TS 33.128, clause 8.4.9.
     *
     * @public
     * @readonly
     */
    readonly supportedTAList: TACList;
    /**
     * @summary `broadcastPLMN`.
     * @description
     *
     * A list of the PLMNs broadcast by the connected en-gNB.
     *
     * 3GPP TS 33.128, clause 8.4.9.
     *
     * @public
     * @readonly
     */
    readonly broadcastPLMN: PLMNList;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        eNGNBID: GNbID,
        supportedTAList: TACList,
        broadcastPLMN: PLMNList,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.eNGNBID = eNGNBID;
        this.supportedTAList = supportedTAList;
        this.broadcastPLMN = broadcastPLMN;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ConnectedENGNB
     * @description
     * 
     * This takes an `object` and converts it to a `ConnectedENGNB`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConnectedENGNB`.
     * @returns {ConnectedENGNB}
     */
    public static _from_object (_o: { [_K in keyof (ConnectedENGNB)]: (ConnectedENGNB)[_K] }): ConnectedENGNB {
        return new ConnectedENGNB(_o.eNGNBID, _o.supportedTAList, _o.broadcastPLMN, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ConnectedENGNB
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConnectedENGNB: $.ComponentSpec[] = [
    new $.ComponentSpec("eNGNBID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("supportedTAList", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("broadcastPLMN", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ConnectedENGNB
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConnectedENGNB: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConnectedENGNB
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConnectedENGNB: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConnectedENGNB: $.ASN1Decoder<ConnectedENGNB> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectedENGNB
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectedENGNB (el: _Element): ConnectedENGNB {
    if (!_cached_decoder_for_ConnectedENGNB) { _cached_decoder_for_ConnectedENGNB = function (el: _Element): ConnectedENGNB {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("ConnectedENGNB contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "eNGNBID";
    sequence[1].name = "supportedTAList";
    sequence[2].name = "broadcastPLMN";
    let eNGNBID!: GNbID;
    let supportedTAList!: TACList;
    let broadcastPLMN!: PLMNList;
    eNGNBID = $._decode_implicit<GNbID>(() => _decode_GNbID)(sequence[0]);
    supportedTAList = $._decode_implicit<TACList>(() => _decode_TACList)(sequence[1]);
    broadcastPLMN = $._decode_implicit<PLMNList>(() => _decode_PLMNList)(sequence[2]);
    return new ConnectedENGNB(
        eNGNBID,
        supportedTAList,
        broadcastPLMN,
        sequence.slice(3),
    );
}; }
    return _cached_decoder_for_ConnectedENGNB(el);
}

let _cached_encoder_for_ConnectedENGNB: $.ASN1Encoder<ConnectedENGNB> | null = null;

/**
 * @summary Encodes a(n) ConnectedENGNB into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectedENGNB, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectedENGNB (value: ConnectedENGNB, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectedENGNB) { _cached_encoder_for_ConnectedENGNB = function (value: ConnectedENGNB, elGetter: $.ASN1Encoder<ConnectedENGNB>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_GNbID, $.BER)(value.eNGNBID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_TACList, $.BER)(value.supportedTAList, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_PLMNList, $.BER)(value.broadcastPLMN, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ConnectedENGNB(value, elGetter);
}


/* eslint-enable */

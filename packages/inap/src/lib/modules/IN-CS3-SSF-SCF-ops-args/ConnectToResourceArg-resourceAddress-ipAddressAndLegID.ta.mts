/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPRoutingAddress, _decode_IPRoutingAddress, _encode_IPRoutingAddress } from "../IN-CS3-SSF-SCF-datatypes/IPRoutingAddress.ta.mjs";
// export { IPRoutingAddress, _decode_IPRoutingAddress, _encode_IPRoutingAddress } from "../IN-CS3-SSF-SCF-datatypes/IPRoutingAddress.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../IN-CS3-SSF-SCF-datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-CS3-SSF-SCF-datatypes/LegID.ta.mjs";


/**
 * @summary ConnectToResourceArg_resourceAddress_ipAddressAndLegID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectToResourceArg-resourceAddress-ipAddressAndLegID ::=
 * SEQUENCE {
 *   ipRoutingAddress [0] IPRoutingAddress,
 *   legID [1] LegID,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class ConnectToResourceArg_resourceAddress_ipAddressAndLegID {
    /**
     * @summary `ipRoutingAddress`.
     * @public
     * @readonly
     */
    readonly ipRoutingAddress: IPRoutingAddress;
    /**
     * @summary `legID`.
     * @public
     * @readonly
     */
    readonly legID: LegID;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        ipRoutingAddress: IPRoutingAddress,
        legID: LegID,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.ipRoutingAddress = ipRoutingAddress;
        this.legID = legID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ConnectToResourceArg_resourceAddress_ipAddressAndLegID
     * @description
     * 
     * This takes an `object` and converts it to a `ConnectToResourceArg_resourceAddress_ipAddressAndLegID`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConnectToResourceArg_resourceAddress_ipAddressAndLegID`.
     * @returns {ConnectToResourceArg_resourceAddress_ipAddressAndLegID}
     */
    public static _from_object (_o: { [_K in keyof (ConnectToResourceArg_resourceAddress_ipAddressAndLegID)]: (ConnectToResourceArg_resourceAddress_ipAddressAndLegID)[_K] }): ConnectToResourceArg_resourceAddress_ipAddressAndLegID {
        return new ConnectToResourceArg_resourceAddress_ipAddressAndLegID(_o.ipRoutingAddress, _o.legID, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ConnectToResourceArg_resourceAddress_ipAddressAndLegID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConnectToResourceArg_resourceAddress_ipAddressAndLegID: $.ComponentSpec[] = [
    new $.ComponentSpec("ipRoutingAddress", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("legID", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ConnectToResourceArg_resourceAddress_ipAddressAndLegID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConnectToResourceArg_resourceAddress_ipAddressAndLegID: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConnectToResourceArg_resourceAddress_ipAddressAndLegID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConnectToResourceArg_resourceAddress_ipAddressAndLegID: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConnectToResourceArg_resourceAddress_ipAddressAndLegID: $.ASN1Decoder<ConnectToResourceArg_resourceAddress_ipAddressAndLegID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectToResourceArg_resourceAddress_ipAddressAndLegID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectToResourceArg_resourceAddress_ipAddressAndLegID (el: _Element): ConnectToResourceArg_resourceAddress_ipAddressAndLegID {
    if (!_cached_decoder_for_ConnectToResourceArg_resourceAddress_ipAddressAndLegID) { _cached_decoder_for_ConnectToResourceArg_resourceAddress_ipAddressAndLegID = function (el: _Element): ConnectToResourceArg_resourceAddress_ipAddressAndLegID {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ConnectToResourceArg-resourceAddress-ipAddressAndLegID contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "ipRoutingAddress";
    sequence[1].name = "legID";
    const ipRoutingAddress: IPRoutingAddress = $._decode_implicit<IPRoutingAddress>(() => _decode_IPRoutingAddress)(sequence[0]);
    const legID: LegID = $._decode_explicit<LegID>(() => _decode_LegID)(sequence[1]);
    return new ConnectToResourceArg_resourceAddress_ipAddressAndLegID(
        ipRoutingAddress,
        legID,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_ConnectToResourceArg_resourceAddress_ipAddressAndLegID(el);
}

let _cached_encoder_for_ConnectToResourceArg_resourceAddress_ipAddressAndLegID: $.ASN1Encoder<ConnectToResourceArg_resourceAddress_ipAddressAndLegID> | null = null;

/**
 * @summary Encodes a(n) ConnectToResourceArg_resourceAddress_ipAddressAndLegID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectToResourceArg_resourceAddress_ipAddressAndLegID, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectToResourceArg_resourceAddress_ipAddressAndLegID (value: ConnectToResourceArg_resourceAddress_ipAddressAndLegID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectToResourceArg_resourceAddress_ipAddressAndLegID) { _cached_encoder_for_ConnectToResourceArg_resourceAddress_ipAddressAndLegID = function (value: ConnectToResourceArg_resourceAddress_ipAddressAndLegID, elGetter: $.ASN1Encoder<ConnectToResourceArg_resourceAddress_ipAddressAndLegID>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_IPRoutingAddress, $.BER)(value.ipRoutingAddress, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_LegID, $.BER)(value.legID, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ConnectToResourceArg_resourceAddress_ipAddressAndLegID(value, elGetter);
}


/* eslint-enable */

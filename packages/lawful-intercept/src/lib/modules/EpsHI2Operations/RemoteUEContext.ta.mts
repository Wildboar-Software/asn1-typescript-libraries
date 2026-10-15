/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RemoteUserID, _decode_RemoteUserID, _encode_RemoteUserID } from "../EpsHI2Operations/RemoteUserID.ta.mjs";
// export { RemoteUserID, _decode_RemoteUserID, _encode_RemoteUserID } from "../EpsHI2Operations/RemoteUserID.ta.mjs";
import { RemoteUEIPInformation, _decode_RemoteUEIPInformation, _encode_RemoteUEIPInformation } from "../EpsHI2Operations/RemoteUEIPInformation.ta.mjs";
// export { RemoteUEIPInformation, _decode_RemoteUEIPInformation, _encode_RemoteUEIPInformation } from "../EpsHI2Operations/RemoteUEIPInformation.ta.mjs";


/**
 * @summary RemoteUEContext
 * @description
 * 
 * One ProSe remote UE that is connected to a ProSe UE-to-network relay: its
 * identity and its IP address. Clause 13.3.2.2-1 provides the connected
 * identities and IP addresses when the relay is the target. Clause 10.5.2 also
 * sends them when that relay performs a tracking area or EPS location update.
 * Neither clause states the octet layout.
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RemoteUEContext ::= SEQUENCE
 * 
 * {
 *     remoteUserID                          [1]    RemoteUserID,
 *     remoteUEIPInformation                 [2]    RemoteUEIPInformation,
 * ...
 * 
 * }
 * ```
 * 
 * @class
 */
export
class RemoteUEContext {
    /**
     * @summary `remoteUserID`.
     * @description
     * 
     * Identity of this connected ProSe remote UE. Clause 13.3 and clause 10.5.2
     * require the connected identities when the relay is the target. Neither
     * clause states the octet layout.
     * @public
     * @readonly
     */
    readonly remoteUserID: RemoteUserID;
    /**
     * @summary `remoteUEIPInformation`.
     * @description
     * 
     * IP address of this connected ProSe remote UE, provided by the relay
     * (clause 13.3.1 and clause 10.5.2). The handover text does not state the
     * octet layout.
     * @public
     * @readonly
     */
    readonly remoteUEIPInformation: RemoteUEIPInformation;
    /**
     * @summary Extensions that are not recognized.
     * @description
     * 
     * The specification does not define these components.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        remoteUserID: RemoteUserID,
        remoteUEIPInformation: RemoteUEIPInformation,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.remoteUserID = remoteUserID;
        this.remoteUEIPInformation = remoteUEIPInformation;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a RemoteUEContext
     * @description
     * 
     * This takes an `object` and converts it to a `RemoteUEContext`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RemoteUEContext`.
     * @returns {RemoteUEContext}
     */
    public static _from_object (_o: { [_K in keyof (RemoteUEContext)]: (RemoteUEContext)[_K] }): RemoteUEContext {
        return new RemoteUEContext(_o.remoteUserID, _o.remoteUEIPInformation, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of RemoteUEContext
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RemoteUEContext: $.ComponentSpec[] = [
    new $.ComponentSpec("remoteUserID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("remoteUEIPInformation", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of RemoteUEContext
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RemoteUEContext: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RemoteUEContext
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RemoteUEContext: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RemoteUEContext: $.ASN1Decoder<RemoteUEContext> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RemoteUEContext
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RemoteUEContext (el: _Element): RemoteUEContext {
    if (!_cached_decoder_for_RemoteUEContext) { _cached_decoder_for_RemoteUEContext = function (el: _Element): RemoteUEContext {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RemoteUEContext contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "remoteUserID";
    sequence[1].name = "remoteUEIPInformation";
    let remoteUserID!: RemoteUserID;
    let remoteUEIPInformation!: RemoteUEIPInformation;
    remoteUserID = $._decode_implicit<RemoteUserID>(() => _decode_RemoteUserID)(sequence[0]);
    remoteUEIPInformation = $._decode_implicit<RemoteUEIPInformation>(() => _decode_RemoteUEIPInformation)(sequence[1]);
    return new RemoteUEContext(
        remoteUserID,
        remoteUEIPInformation,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_RemoteUEContext(el);
}

let _cached_encoder_for_RemoteUEContext: $.ASN1Encoder<RemoteUEContext> | null = null;

/**
 * @summary Encodes a(n) RemoteUEContext into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoteUEContext, encoded as an ASN.1 Element.
 */
export
function _encode_RemoteUEContext (value: RemoteUEContext, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RemoteUEContext) { _cached_encoder_for_RemoteUEContext = function (value: RemoteUEContext, elGetter: $.ASN1Encoder<RemoteUEContext>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_RemoteUserID, $.BER)(value.remoteUserID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_RemoteUEIPInformation, $.BER)(value.remoteUEIPInformation, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_RemoteUEContext(value, elGetter);
}


/* eslint-enable */

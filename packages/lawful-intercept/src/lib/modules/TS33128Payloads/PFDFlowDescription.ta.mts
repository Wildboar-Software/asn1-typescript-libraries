/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type NextLayerProtocol, _decode_NextLayerProtocol, _encode_NextLayerProtocol } from "../TS33128Payloads/NextLayerProtocol.ta.mjs";
// export { NextLayerProtocol, _decode_NextLayerProtocol, _encode_NextLayerProtocol } from "../TS33128Payloads/NextLayerProtocol.ta.mjs";
import { type IPAddress, _decode_IPAddress, _encode_IPAddress } from "../TS33128Payloads/IPAddress.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../TS33128Payloads/IPAddress.ta.mjs";
import { type PortNumber, _decode_PortNumber, _encode_PortNumber } from "../TS33128Payloads/PortNumber.ta.mjs";
// export { PortNumber, _decode_PortNumber, _encode_PortNumber } from "../TS33128Payloads/PortNumber.ta.mjs";


/**
 * @summary PFDFlowDescription
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PFDFlowDescription ::= SEQUENCE
 * {
 *     nextLayerProtocol [1] NextLayerProtocol,
 *     serverIPAddress   [2] IPAddress,
 *     serverPortNumber  [3] PortNumber
 * }
 * ```
 * 
 * @class
 */
export
class PFDFlowDescription {
    /**
     * @summary `nextLayerProtocol`.
     * @public
     * @readonly
     */
    readonly nextLayerProtocol: NextLayerProtocol;
    /**
     * @summary `serverIPAddress`.
     * @public
     * @readonly
     */
    readonly serverIPAddress: IPAddress;
    /**
     * @summary `serverPortNumber`.
     * @public
     * @readonly
     */
    readonly serverPortNumber: PortNumber;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        nextLayerProtocol: NextLayerProtocol,
        serverIPAddress: IPAddress,
        serverPortNumber: PortNumber,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.nextLayerProtocol = nextLayerProtocol;
        this.serverIPAddress = serverIPAddress;
        this.serverPortNumber = serverPortNumber;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PFDFlowDescription
     * @description
     * 
     * This takes an `object` and converts it to a `PFDFlowDescription`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PFDFlowDescription`.
     * @returns {PFDFlowDescription}
     */
    public static _from_object (_o: { [_K in keyof (PFDFlowDescription)]: (PFDFlowDescription)[_K] }): PFDFlowDescription {
        return new PFDFlowDescription(_o.nextLayerProtocol, _o.serverIPAddress, _o.serverPortNumber, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PFDFlowDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PFDFlowDescription: $.ComponentSpec[] = [
    new $.ComponentSpec("nextLayerProtocol", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serverIPAddress", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("serverPortNumber", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of PFDFlowDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PFDFlowDescription: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PFDFlowDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PFDFlowDescription: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PFDFlowDescription: $.ASN1Decoder<PFDFlowDescription> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PFDFlowDescription
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PFDFlowDescription (el: _Element): PFDFlowDescription {
    if (!_cached_decoder_for_PFDFlowDescription) { _cached_decoder_for_PFDFlowDescription = function (el: _Element): PFDFlowDescription {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("PFDFlowDescription contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "nextLayerProtocol";
    sequence[1].name = "serverIPAddress";
    sequence[2].name = "serverPortNumber";
    let nextLayerProtocol!: NextLayerProtocol;
    let serverIPAddress!: IPAddress;
    let serverPortNumber!: PortNumber;
    nextLayerProtocol = $._decode_implicit<NextLayerProtocol>(() => _decode_NextLayerProtocol)(sequence[0]);
    serverIPAddress = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(sequence[1]);
    serverPortNumber = $._decode_implicit<PortNumber>(() => _decode_PortNumber)(sequence[2]);
    return new PFDFlowDescription(
        nextLayerProtocol,
        serverIPAddress,
        serverPortNumber,
        sequence.slice(3),
    );
}; }
    return _cached_decoder_for_PFDFlowDescription(el);
}

let _cached_encoder_for_PFDFlowDescription: $.ASN1Encoder<PFDFlowDescription> | null = null;

/**
 * @summary Encodes a(n) PFDFlowDescription into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PFDFlowDescription, encoded as an ASN.1 Element.
 */
export
function _encode_PFDFlowDescription (value: PFDFlowDescription, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PFDFlowDescription) { _cached_encoder_for_PFDFlowDescription = function (value: PFDFlowDescription, elGetter: $.ASN1Encoder<PFDFlowDescription>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_NextLayerProtocol, $.BER)(value.nextLayerProtocol, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_IPAddress, $.BER)(value.serverIPAddress, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_PortNumber, $.BER)(value.serverPortNumber, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PFDFlowDescription(value, elGetter);
}


/* eslint-enable */

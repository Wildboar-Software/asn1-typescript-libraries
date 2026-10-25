/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type IPAddress, _decode_IPAddress, _encode_IPAddress } from "../TS33128Payloads/IPAddress.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../TS33128Payloads/IPAddress.ta.mjs";
import { type PortNumber, _decode_PortNumber, _encode_PortNumber } from "../TS33128Payloads/PortNumber.ta.mjs";
// export { PortNumber, _decode_PortNumber, _encode_PortNumber } from "../TS33128Payloads/PortNumber.ta.mjs";


/**
 * @summary EASServerAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EASServerAddress ::= SEQUENCE
 * {
 *     iPAddress        [1]  IPAddress,
 *     port             [2]  PortNumber
 * }
 * ```
 * 
 * @class
 */
export
class EASServerAddress {
    /**
     * @summary `iPAddress`.
     * @public
     * @readonly
     */
    readonly iPAddress: IPAddress;
    /**
     * @summary `port`.
     * @public
     * @readonly
     */
    readonly port: PortNumber;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        iPAddress: IPAddress,
        port: PortNumber,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.iPAddress = iPAddress;
        this.port = port;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EASServerAddress
     * @description
     * 
     * This takes an `object` and converts it to a `EASServerAddress`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EASServerAddress`.
     * @returns {EASServerAddress}
     */
    public static _from_object (_o: { [_K in keyof (EASServerAddress)]: (EASServerAddress)[_K] }): EASServerAddress {
        return new EASServerAddress(_o.iPAddress, _o.port, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EASServerAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EASServerAddress: $.ComponentSpec[] = [
    new $.ComponentSpec("iPAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("port", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of EASServerAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EASServerAddress: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EASServerAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EASServerAddress: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EASServerAddress: $.ASN1Decoder<EASServerAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EASServerAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EASServerAddress (el: _Element): EASServerAddress {
    if (!_cached_decoder_for_EASServerAddress) { _cached_decoder_for_EASServerAddress = function (el: _Element): EASServerAddress {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("EASServerAddress contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "iPAddress";
    sequence[1].name = "port";
    let iPAddress!: IPAddress;
    let port!: PortNumber;
    iPAddress = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(sequence[0]);
    port = $._decode_implicit<PortNumber>(() => _decode_PortNumber)(sequence[1]);
    return new EASServerAddress(
        iPAddress,
        port,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_EASServerAddress(el);
}

let _cached_encoder_for_EASServerAddress: $.ASN1Encoder<EASServerAddress> | null = null;

/**
 * @summary Encodes a(n) EASServerAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EASServerAddress, encoded as an ASN.1 Element.
 */
export
function _encode_EASServerAddress (value: EASServerAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EASServerAddress) { _cached_encoder_for_EASServerAddress = function (value: EASServerAddress, elGetter: $.ASN1Encoder<EASServerAddress>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_IPAddress, $.BER)(value.iPAddress, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_PortNumber, $.BER)(value.port, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EASServerAddress(value, elGetter);
}


/* eslint-enable */

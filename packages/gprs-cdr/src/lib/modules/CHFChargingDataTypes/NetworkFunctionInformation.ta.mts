/* eslint-disable */
import {
    IA5String,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NetworkFunctionality, _decode_NetworkFunctionality, _encode_NetworkFunctionality, _enum_for_NetworkFunctionality } from "../CHFChargingDataTypes/NetworkFunctionality.ta.mjs";
// export { NetworkFunctionality, _enum_for_NetworkFunctionality, NetworkFunctionality_cHF /* IMPORTED_LONG_ENUMERATION_ITEM */, cHF /* IMPORTED_SHORT_ENUMERATION_ITEM */, NetworkFunctionality_sMF /* IMPORTED_LONG_ENUMERATION_ITEM */, sMF /* IMPORTED_SHORT_ENUMERATION_ITEM */, NetworkFunctionality_aMF /* IMPORTED_LONG_ENUMERATION_ITEM */, aMF /* IMPORTED_SHORT_ENUMERATION_ITEM */, NetworkFunctionality_sMSF /* IMPORTED_LONG_ENUMERATION_ITEM */, sMSF /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NetworkFunctionality, _encode_NetworkFunctionality } from "../CHFChargingDataTypes/NetworkFunctionality.ta.mjs";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../CHFChargingDataTypes/IPAddress.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../CHFChargingDataTypes/IPAddress.ta.mjs";
import { NodeAddress, _decode_NodeAddress, _encode_NodeAddress } from "../CHFChargingDataTypes/NodeAddress.ta.mjs";
// export { NodeAddress, _decode_NodeAddress, _encode_NodeAddress } from "../CHFChargingDataTypes/NodeAddress.ta.mjs";


/**
 * @summary NetworkFunctionInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkFunctionInformation ::= SEQUENCE {
 *    networkFunctionality            [0] IMPLICIT NetworkFunctionality,
 *    networkFunctionName             [1] IMPLICIT IA5String  ( SIZE( 1 .. 36 ) ) OPTIONAL,
 *    networkFunctionIPv4Address      [2] IPAddress OPTIONAL,
 *    networkFunctionPLMNIdentifier   [3] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    networkFunctionIPv6Address      [4] IPAddress,
 *    networkFunctionFQDN             [5] NodeAddress}
 * ```
 * 
 * @class
 */
export
class NetworkFunctionInformation {
    /**
     * @summary `networkFunctionality`.
     * @public
     * @readonly
     */
    readonly networkFunctionality: NetworkFunctionality;
    /**
     * @summary `networkFunctionName`.
     * @public
     * @readonly
     */
    readonly networkFunctionName: OPTIONAL<IA5String>;
    /**
     * @summary `networkFunctionIPv4Address`.
     * @public
     * @readonly
     */
    readonly networkFunctionIPv4Address: OPTIONAL<IPAddress>;
    /**
     * @summary `networkFunctionPLMNIdentifier`.
     * @public
     * @readonly
     */
    readonly networkFunctionPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `networkFunctionIPv6Address`.
     * @public
     * @readonly
     */
    readonly networkFunctionIPv6Address: IPAddress;
    /**
     * @summary `networkFunctionFQDN`.
     * @public
     * @readonly
     */
    readonly networkFunctionFQDN: NodeAddress;

    constructor (
        networkFunctionality: NetworkFunctionality,
        networkFunctionName: OPTIONAL<IA5String>,
        networkFunctionIPv4Address: OPTIONAL<IPAddress>,
        networkFunctionPLMNIdentifier: OPTIONAL<OCTET_STRING>,
        networkFunctionIPv6Address: IPAddress,
        networkFunctionFQDN: NodeAddress
    ) {
        this.networkFunctionality = networkFunctionality;
        this.networkFunctionName = networkFunctionName;
        this.networkFunctionIPv4Address = networkFunctionIPv4Address;
        this.networkFunctionPLMNIdentifier = networkFunctionPLMNIdentifier;
        this.networkFunctionIPv6Address = networkFunctionIPv6Address;
        this.networkFunctionFQDN = networkFunctionFQDN;
    }

    /**
     * @summary Restructures an object into a NetworkFunctionInformation
     * @description
     * 
     * This takes an `object` and converts it to a `NetworkFunctionInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NetworkFunctionInformation`.
     * @returns {NetworkFunctionInformation}
     */
    public static _from_object (_o: { [_K in keyof (NetworkFunctionInformation)]: (NetworkFunctionInformation)[_K] }): NetworkFunctionInformation {
        return new NetworkFunctionInformation(_o.networkFunctionality, _o.networkFunctionName, _o.networkFunctionIPv4Address, _o.networkFunctionPLMNIdentifier, _o.networkFunctionIPv6Address, _o.networkFunctionFQDN);
    }

        /**
         * @summary The enum used as the type of the component `networkFunctionality`
         * @public
         * @static
         */

    public static _enum_for_networkFunctionality = _enum_for_NetworkFunctionality;
}

/**
 * @summary The Leading Root Component Types of NetworkFunctionInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NetworkFunctionInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("networkFunctionality", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("networkFunctionName", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("networkFunctionIPv4Address", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("networkFunctionPLMNIdentifier", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("networkFunctionIPv6Address", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("networkFunctionFQDN", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of NetworkFunctionInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NetworkFunctionInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NetworkFunctionInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NetworkFunctionInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NetworkFunctionInformation: $.ASN1Decoder<NetworkFunctionInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NetworkFunctionInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NetworkFunctionInformation (el: _Element): NetworkFunctionInformation {
    if (!_cached_decoder_for_NetworkFunctionInformation) { _cached_decoder_for_NetworkFunctionInformation = function (el: _Element): NetworkFunctionInformation {
    let networkFunctionality!: NetworkFunctionality;
    let networkFunctionName: OPTIONAL<IA5String>;
    let networkFunctionIPv4Address: OPTIONAL<IPAddress>;
    let networkFunctionPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let networkFunctionIPv6Address!: IPAddress;
    let networkFunctionFQDN!: NodeAddress;
    const callbacks: $.DecodingMap = {
        "networkFunctionality": (_el: _Element): void => { networkFunctionality = $._decode_implicit<NetworkFunctionality>(() => _decode_NetworkFunctionality)(_el); },
        "networkFunctionName": (_el: _Element): void => { networkFunctionName = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "networkFunctionIPv4Address": (_el: _Element): void => { networkFunctionIPv4Address = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "networkFunctionPLMNIdentifier": (_el: _Element): void => { networkFunctionPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "networkFunctionIPv6Address": (_el: _Element): void => { networkFunctionIPv6Address = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "networkFunctionFQDN": (_el: _Element): void => { networkFunctionFQDN = $._decode_explicit<NodeAddress>(() => _decode_NodeAddress)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NetworkFunctionInformation,
        _extension_additions_list_spec_for_NetworkFunctionInformation,
        _root_component_type_list_2_spec_for_NetworkFunctionInformation,
        undefined,
    );
    return new NetworkFunctionInformation(
        networkFunctionality,
        networkFunctionName,
        networkFunctionIPv4Address,
        networkFunctionPLMNIdentifier,
        networkFunctionIPv6Address,
        networkFunctionFQDN
    );
}; }
    return _cached_decoder_for_NetworkFunctionInformation(el);
}

let _cached_encoder_for_NetworkFunctionInformation: $.ASN1Encoder<NetworkFunctionInformation> | null = null;

/**
 * @summary Encodes a(n) NetworkFunctionInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NetworkFunctionInformation, encoded as an ASN.1 Element.
 */
export
function _encode_NetworkFunctionInformation (value: NetworkFunctionInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NetworkFunctionInformation) { _cached_encoder_for_NetworkFunctionInformation = function (value: NetworkFunctionInformation, elGetter: $.ASN1Encoder<NetworkFunctionInformation>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_NetworkFunctionality, $.BER)(value.networkFunctionality, $.BER));
    if (value.networkFunctionName !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeIA5String, $.BER)(value.networkFunctionName, $.BER));
    }
    if (value.networkFunctionIPv4Address !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_IPAddress, $.BER)(value.networkFunctionIPv4Address, $.BER));
    }
    if (value.networkFunctionPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.networkFunctionPLMNIdentifier, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 4, () => _encode_IPAddress, $.BER)(value.networkFunctionIPv6Address, $.BER));
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 5, () => _encode_NodeAddress, $.BER)(value.networkFunctionFQDN, $.BER));
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_NetworkFunctionInformation(value, elGetter);
}


/* eslint-enable */

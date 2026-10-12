/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DataNodeAddress, _decode_DataNodeAddress, _encode_DataNodeAddress } from "../HI2Operations/DataNodeAddress.ta.mjs";
// export { DataNodeAddress, _decode_DataNodeAddress, _encode_DataNodeAddress } from "../HI2Operations/DataNodeAddress.ta.mjs";


/**
 * @summary I_WLAN_parameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * I-WLAN-parameters ::= SEQUENCE
 * {
 *     wlan-local-IP-address-of-the-target     [1] DataNodeAddress OPTIONAL,
 *     w-APN                                     [2] OCTET STRING (SIZE(1..100))    OPTIONAL,
 *     -- The Access Point Name (APN) is coded in accordance with
 *         -- 3GPP TS 24.008 [9] without the APN IEI (only the last 100 octets are used).
 *         -- Octets are coded according to 3GPP TS 23.003 [25].
 *     wlan-remote-IP-address-of-the-target     [3] DataNodeAddress     OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class I_WLAN_parameters {
    /**
     * @summary `wlan_local_IP_address_of_the_target`.
     * @public
     * @readonly
     */
    readonly wlan_local_IP_address_of_the_target: OPTIONAL<DataNodeAddress>;
    /**
     * @summary `w_APN`.
     * @public
     * @readonly
     */
    readonly w_APN: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `wlan_remote_IP_address_of_the_target`.
     * @public
     * @readonly
     */
    readonly wlan_remote_IP_address_of_the_target: OPTIONAL<DataNodeAddress>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        wlan_local_IP_address_of_the_target: OPTIONAL<DataNodeAddress>,
        w_APN: OPTIONAL<OCTET_STRING>,
        wlan_remote_IP_address_of_the_target: OPTIONAL<DataNodeAddress>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.wlan_local_IP_address_of_the_target = wlan_local_IP_address_of_the_target;
        this.w_APN = w_APN;
        this.wlan_remote_IP_address_of_the_target = wlan_remote_IP_address_of_the_target;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a I_WLAN_parameters
     * @description
     * 
     * This takes an `object` and converts it to a `I_WLAN_parameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `I_WLAN_parameters`.
     * @returns {I_WLAN_parameters}
     */
    public static _from_object (_o: { [_K in keyof (I_WLAN_parameters)]: (I_WLAN_parameters)[_K] }): I_WLAN_parameters {
        return new I_WLAN_parameters(_o.wlan_local_IP_address_of_the_target, _o.w_APN, _o.wlan_remote_IP_address_of_the_target, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of I_WLAN_parameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_I_WLAN_parameters: $.ComponentSpec[] = [
    new $.ComponentSpec("wlan-local-IP-address-of-the-target", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("w-APN", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("wlan-remote-IP-address-of-the-target", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of I_WLAN_parameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_I_WLAN_parameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of I_WLAN_parameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_I_WLAN_parameters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_I_WLAN_parameters: $.ASN1Decoder<I_WLAN_parameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) I_WLAN_parameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_I_WLAN_parameters (el: _Element): I_WLAN_parameters {
    if (!_cached_decoder_for_I_WLAN_parameters) { _cached_decoder_for_I_WLAN_parameters = function (el: _Element): I_WLAN_parameters {
    let wlan_local_IP_address_of_the_target: OPTIONAL<DataNodeAddress>;
    let w_APN: OPTIONAL<OCTET_STRING>;
    let wlan_remote_IP_address_of_the_target: OPTIONAL<DataNodeAddress>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "wlan-local-IP-address-of-the-target": (_el: _Element): void => { wlan_local_IP_address_of_the_target = $._decode_explicit<DataNodeAddress>(() => _decode_DataNodeAddress)(_el); },
        "w-APN": (_el: _Element): void => {
            w_APN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (w_APN.length < 1 || w_APN.length > 100) {
                throw new ASN1SizeError("I_WLAN_parameters.w_APN violates SIZE constraint");
            }
        },
        "wlan-remote-IP-address-of-the-target": (_el: _Element): void => { wlan_remote_IP_address_of_the_target = $._decode_explicit<DataNodeAddress>(() => _decode_DataNodeAddress)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_I_WLAN_parameters,
        _extension_additions_list_spec_for_I_WLAN_parameters,
        _root_component_type_list_2_spec_for_I_WLAN_parameters,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new I_WLAN_parameters(
        wlan_local_IP_address_of_the_target,
        w_APN,
        wlan_remote_IP_address_of_the_target,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_I_WLAN_parameters(el);
}

let _cached_encoder_for_I_WLAN_parameters: $.ASN1Encoder<I_WLAN_parameters> | null = null;

/**
 * @summary Encodes a(n) I_WLAN_parameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The I_WLAN_parameters, encoded as an ASN.1 Element.
 */
export
function _encode_I_WLAN_parameters (value: I_WLAN_parameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_I_WLAN_parameters) { _cached_encoder_for_I_WLAN_parameters = function (value: I_WLAN_parameters, elGetter: $.ASN1Encoder<I_WLAN_parameters>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.wlan_local_IP_address_of_the_target !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_DataNodeAddress, $.BER)(value.wlan_local_IP_address_of_the_target, $.BER);
    }
    if (value.w_APN !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.w_APN, $.BER);
    }
    if (value.wlan_remote_IP_address_of_the_target !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_DataNodeAddress, $.BER)(value.wlan_remote_IP_address_of_the_target, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_I_WLAN_parameters(value, elGetter);
}


/* eslint-enable */

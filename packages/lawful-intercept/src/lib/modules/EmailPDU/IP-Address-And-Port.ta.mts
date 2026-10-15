/* eslint-disable */
import {
    INTEGER,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import * as LI_PS_PDU from "../LI-PS-PDU/index.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../LI-PS-PDU/IPAddress.ta.mjs";


/**
 * @summary IP_Address_And_Port
 * @description
 *
 * IP address and port of a unified-messaging party.
 *
 * Table 7 recommends reporting both when the party may be behind NAPT. The
 * client address and port are the important parts. The server address and port
 * are useful when the service is several interconnected UM servers exchanging
 * voice or multimedia through NAPT. Port numbers are those of IETF RFC 6335.
 * The address is IETF RFC 791 or IETF RFC 8200.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IP-Address-And-Port ::= SEQUENCE
 * {
 *     ip-address              [0] LI-PS-PDU.IPAddress,
 *         -- IPAddress is defined by IETF RFC 791 [31] and RFC 8200 [34]
 *     port-number             [1] INTEGER,
 *         -- port-number is defined by IETF RFC 6335 [35]
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class IP_Address_And_Port {
    /**
     * @summary `ip_address`.
     * @description
     *
     * IPv4 (IETF RFC 791) or IPv6 (IETF RFC 8200) address of the party.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6, table 7.
     *
     * @public
     * @readonly
     */
    readonly ip_address: LI_PS_PDU.IPAddress;
    /**
     * @summary `port_number`.
     * @description
     *
     * Transport port, as assigned in IETF RFC 6335. Together with `ip_address`,
     * this identifies a party that shares an address through NAPT.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6, table 7.
     *
     * @public
     * @readonly
     */
    readonly port_number: INTEGER;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        ip_address: LI_PS_PDU.IPAddress,
        port_number: INTEGER,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.ip_address = ip_address;
        this.port_number = port_number;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a IP_Address_And_Port
     * @description
     * 
     * This takes an `object` and converts it to a `IP_Address_And_Port`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IP_Address_And_Port`.
     * @returns {IP_Address_And_Port}
     */
    public static _from_object (_o: { [_K in keyof (IP_Address_And_Port)]: (IP_Address_And_Port)[_K] }): IP_Address_And_Port {
        return new IP_Address_And_Port(_o.ip_address, _o.port_number, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IP_Address_And_Port
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IP_Address_And_Port: $.ComponentSpec[] = [
    new $.ComponentSpec("ip-address", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("port-number", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of IP_Address_And_Port
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IP_Address_And_Port: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IP_Address_And_Port
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IP_Address_And_Port: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IP_Address_And_Port: $.ASN1Decoder<IP_Address_And_Port> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IP_Address_And_Port
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IP_Address_And_Port (el: _Element): IP_Address_And_Port {
    if (!_cached_decoder_for_IP_Address_And_Port) { _cached_decoder_for_IP_Address_And_Port = function (el: _Element): IP_Address_And_Port {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("IP-Address-And-Port contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "ip-address";
    sequence[1].name = "port-number";
    let ip_address!: LI_PS_PDU.IPAddress;
    let port_number!: INTEGER;
    ip_address = $._decode_implicit<LI_PS_PDU.IPAddress>(() => LI_PS_PDU._decode_IPAddress)(sequence[0]);
    port_number = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[1]);
    return new IP_Address_And_Port(
        ip_address,
        port_number,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_IP_Address_And_Port(el);
}

let _cached_encoder_for_IP_Address_And_Port: $.ASN1Encoder<IP_Address_And_Port> | null = null;

/**
 * @summary Encodes a(n) IP_Address_And_Port into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IP_Address_And_Port, encoded as an ASN.1 Element.
 */
export
function _encode_IP_Address_And_Port (value: IP_Address_And_Port, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IP_Address_And_Port) { _cached_encoder_for_IP_Address_And_Port = function (value: IP_Address_And_Port, elGetter: $.ASN1Encoder<IP_Address_And_Port>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => LI_PS_PDU._encode_IPAddress, $.BER)(value.ip_address, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.port_number, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IP_Address_And_Port(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../HI2Operations/IPAddress.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../HI2Operations/IPAddress.ta.mjs";
import { Port_Number, _decode_Port_Number, _encode_Port_Number } from "../UmtsHI2Operations/Port-Number.ta.mjs";
// export { Port_Number, _decode_Port_Number, _encode_Port_Number } from "../UmtsHI2Operations/Port-Number.ta.mjs";


/**
 * @summary RTPSetting
 * @description
 * 
 * IP address and port at the PTC server for the RTP session. Mandatory on the
 * pre-established session record. Table 17.2.20 describes the same pair as the
 * IP address and port number of the target at the PTC server.
 * 
 * 3GPP TS 33.108, clause 17.2.20 and annex B.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RTPSetting ::= SEQUENCE
 * {
 *     ip-address  [0] IPAddress,
 *     port-number [1] Port-Number,
 *     -- the IP address and port number at the PTC Server for the RTP Session
 * ...
 * }
 * ```
 * 
 * @class
 */
export
class RTPSetting {
    /**
     * @summary `ip_address`.
     * @description
     * 
     * IP address at the PTC server for the RTP session. Together with the port,
     * mandatory on a pre-established session record. Table 17.2.20 describes
     * the pair as the address and port of the target at the PTC server.
     * 
     * 3GPP TS 33.108, clause 17.1.5, table 17.2.20, and annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly ip_address: IPAddress;
    /**
     * @summary `port_number`.
     * @description
     * 
     * Port at the PTC server for the RTP session, in the range 0..65535. See
     * the IP address for the pre-established session condition.
     * 
     * 3GPP TS 33.108, clause 17.2.20 and annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly port_number: Port_Number;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        ip_address: IPAddress,
        port_number: Port_Number,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.ip_address = ip_address;
        this.port_number = port_number;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a RTPSetting
     * @description
     * 
     * This takes an `object` and converts it to a `RTPSetting`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RTPSetting`.
     * @returns {RTPSetting}
     */
    public static _from_object (_o: { [_K in keyof (RTPSetting)]: (RTPSetting)[_K] }): RTPSetting {
        return new RTPSetting(_o.ip_address, _o.port_number, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of RTPSetting
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RTPSetting: $.ComponentSpec[] = [
    new $.ComponentSpec("ip-address", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("port-number", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of RTPSetting
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RTPSetting: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RTPSetting
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RTPSetting: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RTPSetting: $.ASN1Decoder<RTPSetting> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RTPSetting
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RTPSetting (el: _Element): RTPSetting {
    if (!_cached_decoder_for_RTPSetting) { _cached_decoder_for_RTPSetting = function (el: _Element): RTPSetting {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RTPSetting contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "ip-address";
    sequence[1].name = "port-number";
    let ip_address!: IPAddress;
    let port_number!: Port_Number;
    ip_address = $._decode_implicit<IPAddress>(() => _decode_IPAddress)(sequence[0]);
    port_number = $._decode_implicit<Port_Number>(() => _decode_Port_Number)(sequence[1]);
    return new RTPSetting(
        ip_address,
        port_number,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_RTPSetting(el);
}

let _cached_encoder_for_RTPSetting: $.ASN1Encoder<RTPSetting> | null = null;

/**
 * @summary Encodes a(n) RTPSetting into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RTPSetting, encoded as an ASN.1 Element.
 */
export
function _encode_RTPSetting (value: RTPSetting, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RTPSetting) { _cached_encoder_for_RTPSetting = function (value: RTPSetting, elGetter: $.ASN1Encoder<RTPSetting>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_IPAddress, $.BER)(value.ip_address, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Port_Number, $.BER)(value.port_number, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_RTPSetting(value, elGetter);
}


/* eslint-enable */

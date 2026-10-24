/* eslint-disable */
import {
    type OCTET_STRING,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type DataNodeAddress, _decode_DataNodeAddress, _encode_DataNodeAddress } from "../HI2Operations/DataNodeAddress.ta.mjs";
// export { DataNodeAddress, _decode_DataNodeAddress, _encode_DataNodeAddress } from "../HI2Operations/DataNodeAddress.ta.mjs";


/**
 * @summary GPRS_parameters
 * @description
 * 
 * PDP context seen for the target: the allocated address, APN, PDP type, NSAPI,
 * and, for IPv4v6, the second IP address.
 * 
 * Table 6.2 maps the observed PDP address, access point name, and PDP type
 * here. The address and APN conditions of the PDP-context records are in tables
 * 6.5, 6.10, 6.12, and 6.14.
 * 
 * 3GPP TS 33.108, clause 6.5 and annex B.3.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GPRS-parameters ::= SEQUENCE
 * {
 *     pDP-address-allocated-to-the-target     [1] DataNodeAddress OPTIONAL,
 *     aPN                     [2] OCTET STRING (SIZE(1..100)) OPTIONAL,
 *     -- The Access Point Name (APN) is coded in accordance with
 *         -- 3GPP TS 24.008 [9] without the APN IEI (only the last 100 octets are used).
 *         -- Octets are coded according to 3GPP TS 23.003 [25].
 *     pDP-type                 [3] OCTET STRING (SIZE(2)) OPTIONAL,
 *     -- Include either Octets 3 and 4 of the Packet Data Protocol Address information element of
 *     -- 3GPP TS 24.008 [9]or Octets 4 and 5 of the End User Address IE of 3GPP TS 29.060 [17].
 * 
 *     -- when PDP-type is IPv4 or IPv6, the IP address is carried by parameter
 *     -- pDP-address-allocated-to-the-target
 *     -- when PDP-type is IPv4v6, the additional IP address is carried by parameter
 *     -- additionalIPaddress
 *     ...,
 *     nSAPI                    [4] OCTET STRING (SIZE (1)) OPTIONAL,
 *     -- Include either Octet 2 of the NSAPI IE of 3GPP TS 24.008 [9] or Octet 2 of the NSAPI IE of
 *     -- 3GPP TS 29.060 [17].
 *     additionalIPaddress        [5] DataNodeAddress OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class GPRS_parameters {
    /**
     * @summary `pDP_address_allocated_to_the_target`.
     * @description
     * 
     * PDP address allocated to the target. For IPv4 or IPv6 this is that
     * address. For IPv4v6 the other address is carried separately.
     * 
     * Mandatory on a successful activation: the static address the network
     * allocated, the dynamic address in the Activate PDP Context Accept, or the
     * address offered on a network-initiated activation that the MS accepted
     * (table 6.10). On failure, report the address the MS requested or the
     * network offered in the cases table 6.5 lists. On deactivation, include it
     * when available (table 6.14). On modification, include the address after
     * the change when it changed; otherwise it is optional (table 6.12).
     * 
     * 3GPP TS 33.108, clause 6.5 and annex B.3.
     * @public
     * @readonly
     */
    readonly pDP_address_allocated_to_the_target: OPTIONAL<DataNodeAddress>;
    /**
     * @summary `aPN`.
     * @description
     * 
     * Access point name: the logical name of the packet data network (3GPP TS
     * 23.060). Coded as in TS 24.008 without the APN information-element
     * identifier, using at most the last 100 octets, with the octet coding of
     * TS 23.003.
     * 
     * Mandatory on successful activation, modification, and deactivation. On a
     * failed activation, include it when the UE supplied it (table 6.5).
     * 
     * 3GPP TS 33.108, table 6.2 and annex B.3.
     * @public
     * @readonly
     */
    readonly aPN: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `pDP_type`.
     * @description
     * 
     * PDP type: the end-user protocol between the external packet data network
     * and the MS. Octets 3 and 4 of the Packet Data Protocol Address
     * information element in TS 24.008, or octets 4 and 5 of the End User
     * Address information element in TS 29.060.
     * 
     * Mandatory when a PDP address is reported for a successful activation.
     * Conditional in that same case on failure, modification, and deactivation.
     * 
     * 3GPP TS 33.108, table 6.10 and annex B.3.
     * @public
     * @readonly
     */
    readonly pDP_type: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `nSAPI`.
     * @description
     * 
     * Network-layer service access point identifier of this PDP context, in the
     * mobility-management context identified by the tunnel-endpoint identifier
     * control plane. Octet 2 of the NSAPI information element in TS 24.008 or
     * TS 29.060.
     * 
     * Optional. Table 6.2 also uses it to tell mobile access networks apart
     * when the GGSN is the PDG (TS 23.234).
     * 
     * 3GPP TS 33.108, table 6.2 and annex B.3.
     * @public
     * @readonly
     */
    readonly nSAPI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `additionalIPaddress`.
     * @description
     * 
     * The other IP address when the PDP type is IPv4v6. Annex B.3 does not give
     * this parameter a separate stage-2 condition.
     * 
     * 3GPP TS 33.108, annex B.3.
     * @public
     * @readonly
     */
    readonly additionalIPaddress: OPTIONAL<DataNodeAddress>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     * 
     * Extension additions that this version of annex B.3 does not define. They
     * are retained so a later addition on HI2 is not dropped.
     * 
     * 3GPP TS 33.108, annex B.3.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        pDP_address_allocated_to_the_target?: OPTIONAL<DataNodeAddress>,
        aPN?: OPTIONAL<OCTET_STRING>,
        pDP_type?: OPTIONAL<OCTET_STRING>,
        nSAPI?: OPTIONAL<OCTET_STRING>,
        additionalIPaddress?: OPTIONAL<DataNodeAddress>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.pDP_address_allocated_to_the_target = pDP_address_allocated_to_the_target;
        this.aPN = aPN;
        this.pDP_type = pDP_type;
        this.nSAPI = nSAPI;
        this.additionalIPaddress = additionalIPaddress;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a GPRS_parameters
     * @description
     * 
     * This takes an `object` and converts it to a `GPRS_parameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GPRS_parameters`.
     * @returns {GPRS_parameters}
     */
    public static _from_object (_o: { [_K in keyof (GPRS_parameters)]: (GPRS_parameters)[_K] }): GPRS_parameters {
        return new GPRS_parameters(_o.pDP_address_allocated_to_the_target, _o.aPN, _o.pDP_type, _o.nSAPI, _o.additionalIPaddress, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of GPRS_parameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GPRS_parameters: $.ComponentSpec[] = [
    new $.ComponentSpec("pDP-address-allocated-to-the-target", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("aPN", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pDP-type", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of GPRS_parameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GPRS_parameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GPRS_parameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GPRS_parameters: $.ComponentSpec[] = [
    new $.ComponentSpec("nSAPI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("additionalIPaddress", true, $.hasTag(_TagClass.context, 5))
];

let _cached_decoder_for_GPRS_parameters: $.ASN1Decoder<GPRS_parameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GPRS_parameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GPRS_parameters (el: _Element): GPRS_parameters {
    if (!_cached_decoder_for_GPRS_parameters) { _cached_decoder_for_GPRS_parameters = function (el: _Element): GPRS_parameters {
    let pDP_address_allocated_to_the_target: OPTIONAL<DataNodeAddress>;
    let aPN: OPTIONAL<OCTET_STRING>;
    let pDP_type: OPTIONAL<OCTET_STRING>;
    let nSAPI: OPTIONAL<OCTET_STRING>;
    let additionalIPaddress: OPTIONAL<DataNodeAddress>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "pDP-address-allocated-to-the-target": (_el: _Element): void => { pDP_address_allocated_to_the_target = $._decode_explicit<DataNodeAddress>(() => _decode_DataNodeAddress)(_el); },
        "aPN": (_el: _Element): void => {
            aPN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (aPN.length < 1 || aPN.length > 100) {
                throw new ASN1SizeError("GPRS_parameters.aPN violates SIZE constraint");
            }
        },
        "pDP-type": (_el: _Element): void => {
            pDP_type = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (pDP_type.length < 2 || pDP_type.length > 2) {
                throw new ASN1SizeError("GPRS_parameters.pDP_type violates SIZE constraint");
            }
        },
        "nSAPI": (_el: _Element): void => {
            nSAPI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (nSAPI.length < 1 || nSAPI.length > 1) {
                throw new ASN1SizeError("GPRS_parameters.nSAPI violates SIZE constraint");
            }
        },
        "additionalIPaddress": (_el: _Element): void => { additionalIPaddress = $._decode_explicit<DataNodeAddress>(() => _decode_DataNodeAddress)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GPRS_parameters,
        _extension_additions_list_spec_for_GPRS_parameters,
        _root_component_type_list_2_spec_for_GPRS_parameters,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new GPRS_parameters(
        pDP_address_allocated_to_the_target,
        aPN,
        pDP_type,
        nSAPI,
        additionalIPaddress,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_GPRS_parameters(el);
}

let _cached_encoder_for_GPRS_parameters: $.ASN1Encoder<GPRS_parameters> | null = null;

/**
 * @summary Encodes a(n) GPRS_parameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GPRS_parameters, encoded as an ASN.1 Element.
 */
export
function _encode_GPRS_parameters (value: GPRS_parameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GPRS_parameters) { _cached_encoder_for_GPRS_parameters = function (value: GPRS_parameters, elGetter: $.ASN1Encoder<GPRS_parameters>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.pDP_address_allocated_to_the_target !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_DataNodeAddress, $.BER)(value.pDP_address_allocated_to_the_target, $.BER);
    }
    if (value.aPN !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.aPN, $.BER);
    }
    if (value.pDP_type !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.pDP_type, $.BER);
    }
    if (value.nSAPI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.nSAPI, $.BER);
    }
    if (value.additionalIPaddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => _encode_DataNodeAddress, $.BER)(value.additionalIPaddress, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_GPRS_parameters(value, elGetter);
}


/* eslint-enable */

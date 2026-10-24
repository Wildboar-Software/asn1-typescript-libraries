/* eslint-disable */
import {
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EPSLocation, _decode_EPSLocation, _encode_EPSLocation } from "../EpsHI2Operations/EPSLocation.ta.mjs";
// export { EPSLocation, _decode_EPSLocation, _encode_EPSLocation } from "../EpsHI2Operations/EPSLocation.ta.mjs";


/**
 * @summary EPS_PMIP_SpecificParameters
 * @description
 * 
 * PMIP parameters of the intercepted procedure. Coded according to 3GPP TS
 * 29.275 and the RFCs it cites (module comment). Carried for PMIP attach,
 * detach, session modification, resource-allocation deactivation,
 * PDN-GW-initiated disconnection, and start of interception with an active PMIP
 * tunnel (clause 10.5.1). 3GPP TS 33.108
 * (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPS-PMIP-SpecificParameters ::= SEQUENCE
 * {
 *     lifetime                              [1]  INTEGER (0..65535)                 type OPTIONAL,
 *     accessTechnologyType                  [2]  OCTET STRING (SIZE (4))            type OPTIONAL,
 *     aPN                                   [3]  OCTET STRING (SIZE (1..100))       type OPTIONAL,
 *     iPv6HomeNetworkPrefix                 [4]  OCTET STRING (SIZE (20))           type OPTIONAL,
 *     protConfigurationOption               [5]  OCTET STRING                       type OPTIONAL,
 *     handoverIndication                    [6]  OCTET STRING (SIZE (4))            type OPTIONAL,
 *     status                                [7]  INTEGER (0..255)                   type OPTIONAL,
 *     revocationTrigger                     [8]  INTEGER (0..255)                   type OPTIONAL,
 *     iPv4HomeAddress                       [9]  OCTET STRING (SIZE (4))            type OPTIONAL,
 *     iPv6careOfAddress                     [10] OCTET STRING                       type OPTIONAL,
 *     iPv4careOfAddress                     [11] OCTET STRING                       type OPTIONAL,
 *     ...,
 *     servingNetwork                        [12] OCTET STRING (SIZE (3))            type OPTIONAL,
 *     dHCPv4AddressAllocationInd            [13] OCTET STRING (SIZE (1))            type OPTIONAL,
 *     ePSlocationOfTheTarget                [14] EPSLocation                        OPTIONAL
 * 
 *     -- parameters coded according to 3GPP TS 29.275 [48] and RFCs specifically
 *     -- referenced in it.
 * }
 * ```
 * 
 * @class
 */
export
class EPS_PMIP_SpecificParameters {
    /**
     * @summary `lifetime`.
     * @description
     * 
     * Lifetime of the tunnel. Nonzero for registration or a lifetime extension;
     * zero for deregistration (table 10.5.2).
     * 
     * @public
     * @readonly
     */
    readonly lifetime: OPTIONAL<INTEGER>;
    /**
     * @summary `accessTechnologyType`.
     * @description
     * 
     * Radio access type (table 10.5.2).
     * 
     * @public
     * @readonly
     */
    readonly accessTechnologyType: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `aPN`.
     * @description
     * 
     * APN of the PDN connection (table 10.5.2).
     * 
     * @public
     * @readonly
     */
    readonly aPN: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `iPv6HomeNetworkPrefix`.
     * @description
     * 
     * IPv6 home network prefix allocated to the UE. One of the UE address-info
     * fields in table 10.5.2.
     * 
     * @public
     * @readonly
     */
    readonly iPv6HomeNetworkPrefix: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `protConfigurationOption`.
     * @description
     * 
     * Extra information from the UE, such as protocol configuration options
     * (table 10.5.2).
     * 
     * @public
     * @readonly
     */
    readonly protConfigurationOption: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `handoverIndication`.
     * @description
     * 
     * The procedure is part of a handover (table 10.5.2).
     * 
     * @public
     * @readonly
     */
    readonly handoverIndication: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `status`.
     * @description
     * 
     * Failure cause of a PMIP session modification, and, depending on the
     * protocol, of a failed attach (table 10.5.2).
     * 
     * @public
     * @readonly
     */
    readonly status: OPTIONAL<INTEGER>;
    /**
     * @summary `revocationTrigger`.
     * @description
     * 
     * Why the PDN-GW started a PDN disconnection, the revocation (table
     * 10.5.2).
     * 
     * @public
     * @readonly
     */
    readonly revocationTrigger: OPTIONAL<INTEGER>;
    /**
     * @summary `iPv4HomeAddress`.
     * @description
     * 
     * IPv4 home address allocated to the UE (table 10.5.2).
     * 
     * @public
     * @readonly
     */
    readonly iPv4HomeAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `iPv6careOfAddress`.
     * @description
     * 
     * IPv6 care-of address of the UE (table 10.5.2).
     * 
     * @public
     * @readonly
     */
    readonly iPv6careOfAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `iPv4careOfAddress`.
     * @description
     * 
     * IPv4 care-of address of the UE (table 10.5.2).
     * 
     * @public
     * @readonly
     */
    readonly iPv4careOfAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servingNetwork`.
     * @description
     * 
     * For E-UTRAN, the serving network the UE is attached to (table 10.5.2).
     * 
     * @public
     * @readonly
     */
    readonly servingNetwork: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `dHCPv4AddressAllocationInd`.
     * @description
     * 
     * DHCPv4 is to be used to allocate the UE IPv4 address (table 10.5.2).
     * 
     * @public
     * @readonly
     */
    readonly dHCPv4AddressAllocationInd: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `ePSlocationOfTheTarget`.
     * @description
     * 
     * Location of the target when the record was produced, if authorized (table
     * 10.5.2).
     * 
     * @public
     * @readonly
     */
    readonly ePSlocationOfTheTarget: OPTIONAL<EPSLocation>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     * 
     * Extension additions that this version of the specification does not
     * define. Annex D requires the LEMF to ignore an unrecognized parameter and
     * continue with the record.
     * 
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        lifetime?: OPTIONAL<INTEGER>,
        accessTechnologyType?: OPTIONAL<OCTET_STRING>,
        aPN?: OPTIONAL<OCTET_STRING>,
        iPv6HomeNetworkPrefix?: OPTIONAL<OCTET_STRING>,
        protConfigurationOption?: OPTIONAL<OCTET_STRING>,
        handoverIndication?: OPTIONAL<OCTET_STRING>,
        status?: OPTIONAL<INTEGER>,
        revocationTrigger?: OPTIONAL<INTEGER>,
        iPv4HomeAddress?: OPTIONAL<OCTET_STRING>,
        iPv6careOfAddress?: OPTIONAL<OCTET_STRING>,
        iPv4careOfAddress?: OPTIONAL<OCTET_STRING>,
        servingNetwork?: OPTIONAL<OCTET_STRING>,
        dHCPv4AddressAllocationInd?: OPTIONAL<OCTET_STRING>,
        ePSlocationOfTheTarget?: OPTIONAL<EPSLocation>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.lifetime = lifetime;
        this.accessTechnologyType = accessTechnologyType;
        this.aPN = aPN;
        this.iPv6HomeNetworkPrefix = iPv6HomeNetworkPrefix;
        this.protConfigurationOption = protConfigurationOption;
        this.handoverIndication = handoverIndication;
        this.status = status;
        this.revocationTrigger = revocationTrigger;
        this.iPv4HomeAddress = iPv4HomeAddress;
        this.iPv6careOfAddress = iPv6careOfAddress;
        this.iPv4careOfAddress = iPv4careOfAddress;
        this.servingNetwork = servingNetwork;
        this.dHCPv4AddressAllocationInd = dHCPv4AddressAllocationInd;
        this.ePSlocationOfTheTarget = ePSlocationOfTheTarget;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EPS_PMIP_SpecificParameters
     * @description
     * 
     * This takes an `object` and converts it to a `EPS_PMIP_SpecificParameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPS_PMIP_SpecificParameters`.
     * @returns {EPS_PMIP_SpecificParameters}
     */
    public static _from_object (_o: { [_K in keyof (EPS_PMIP_SpecificParameters)]: (EPS_PMIP_SpecificParameters)[_K] }): EPS_PMIP_SpecificParameters {
        return new EPS_PMIP_SpecificParameters(_o.lifetime, _o.accessTechnologyType, _o.aPN, _o.iPv6HomeNetworkPrefix, _o.protConfigurationOption, _o.handoverIndication, _o.status, _o.revocationTrigger, _o.iPv4HomeAddress, _o.iPv6careOfAddress, _o.iPv4careOfAddress, _o.servingNetwork, _o.dHCPv4AddressAllocationInd, _o.ePSlocationOfTheTarget, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EPS_PMIP_SpecificParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPS_PMIP_SpecificParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("lifetime", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("accessTechnologyType", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("aPN", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("iPv6HomeNetworkPrefix", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("protConfigurationOption", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("handoverIndication", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("status", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("revocationTrigger", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("iPv4HomeAddress", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("iPv6careOfAddress", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("iPv4careOfAddress", true, $.hasTag(_TagClass.context, 11))
];

/**
 * @summary The Trailing Root Component Types of EPS_PMIP_SpecificParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPS_PMIP_SpecificParameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPS_PMIP_SpecificParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPS_PMIP_SpecificParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("servingNetwork", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("dHCPv4AddressAllocationInd", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("ePSlocationOfTheTarget", true, $.hasTag(_TagClass.context, 14))
];

let _cached_decoder_for_EPS_PMIP_SpecificParameters: $.ASN1Decoder<EPS_PMIP_SpecificParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPS_PMIP_SpecificParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPS_PMIP_SpecificParameters (el: _Element): EPS_PMIP_SpecificParameters {
    if (!_cached_decoder_for_EPS_PMIP_SpecificParameters) { _cached_decoder_for_EPS_PMIP_SpecificParameters = function (el: _Element): EPS_PMIP_SpecificParameters {
    let lifetime: OPTIONAL<INTEGER>;
    let accessTechnologyType: OPTIONAL<OCTET_STRING>;
    let aPN: OPTIONAL<OCTET_STRING>;
    let iPv6HomeNetworkPrefix: OPTIONAL<OCTET_STRING>;
    let protConfigurationOption: OPTIONAL<OCTET_STRING>;
    let handoverIndication: OPTIONAL<OCTET_STRING>;
    let status: OPTIONAL<INTEGER>;
    let revocationTrigger: OPTIONAL<INTEGER>;
    let iPv4HomeAddress: OPTIONAL<OCTET_STRING>;
    let iPv6careOfAddress: OPTIONAL<OCTET_STRING>;
    let iPv4careOfAddress: OPTIONAL<OCTET_STRING>;
    let servingNetwork: OPTIONAL<OCTET_STRING>;
    let dHCPv4AddressAllocationInd: OPTIONAL<OCTET_STRING>;
    let ePSlocationOfTheTarget: OPTIONAL<EPSLocation>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "lifetime": (_el: _Element): void => {
            lifetime = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof lifetime === "bigint" ? lifetime : BigInt(lifetime);
            if (_n < 0n || _n > 65535n) {
                throw new ASN1OverflowError("EPS_PMIP_SpecificParameters.lifetime violates INTEGER range");
            }
        },
        "accessTechnologyType": (_el: _Element): void => {
            accessTechnologyType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (accessTechnologyType.length < 4 || accessTechnologyType.length > 4) {
                throw new ASN1SizeError("EPS_PMIP_SpecificParameters.accessTechnologyType violates SIZE constraint");
            }
        },
        "aPN": (_el: _Element): void => {
            aPN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (aPN.length < 1 || aPN.length > 100) {
                throw new ASN1SizeError("EPS_PMIP_SpecificParameters.aPN violates SIZE constraint");
            }
        },
        "iPv6HomeNetworkPrefix": (_el: _Element): void => {
            iPv6HomeNetworkPrefix = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (iPv6HomeNetworkPrefix.length < 20 || iPv6HomeNetworkPrefix.length > 20) {
                throw new ASN1SizeError("EPS_PMIP_SpecificParameters.iPv6HomeNetworkPrefix violates SIZE constraint");
            }
        },
        "protConfigurationOption": (_el: _Element): void => { protConfigurationOption = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "handoverIndication": (_el: _Element): void => {
            handoverIndication = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (handoverIndication.length < 4 || handoverIndication.length > 4) {
                throw new ASN1SizeError("EPS_PMIP_SpecificParameters.handoverIndication violates SIZE constraint");
            }
        },
        "status": (_el: _Element): void => {
            status = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof status === "bigint" ? status : BigInt(status);
            if (_n < 0n || _n > 255n) {
                throw new ASN1OverflowError("EPS_PMIP_SpecificParameters.status violates INTEGER range");
            }
        },
        "revocationTrigger": (_el: _Element): void => {
            revocationTrigger = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof revocationTrigger === "bigint" ? revocationTrigger : BigInt(revocationTrigger);
            if (_n < 0n || _n > 255n) {
                throw new ASN1OverflowError("EPS_PMIP_SpecificParameters.revocationTrigger violates INTEGER range");
            }
        },
        "iPv4HomeAddress": (_el: _Element): void => {
            iPv4HomeAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (iPv4HomeAddress.length < 4 || iPv4HomeAddress.length > 4) {
                throw new ASN1SizeError("EPS_PMIP_SpecificParameters.iPv4HomeAddress violates SIZE constraint");
            }
        },
        "iPv6careOfAddress": (_el: _Element): void => { iPv6careOfAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "iPv4careOfAddress": (_el: _Element): void => { iPv4careOfAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servingNetwork": (_el: _Element): void => {
            servingNetwork = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (servingNetwork.length < 3 || servingNetwork.length > 3) {
                throw new ASN1SizeError("EPS_PMIP_SpecificParameters.servingNetwork violates SIZE constraint");
            }
        },
        "dHCPv4AddressAllocationInd": (_el: _Element): void => {
            dHCPv4AddressAllocationInd = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (dHCPv4AddressAllocationInd.length < 1 || dHCPv4AddressAllocationInd.length > 1) {
                throw new ASN1SizeError("EPS_PMIP_SpecificParameters.dHCPv4AddressAllocationInd violates SIZE constraint");
            }
        },
        "ePSlocationOfTheTarget": (_el: _Element): void => { ePSlocationOfTheTarget = $._decode_implicit<EPSLocation>(() => _decode_EPSLocation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EPS_PMIP_SpecificParameters,
        _extension_additions_list_spec_for_EPS_PMIP_SpecificParameters,
        _root_component_type_list_2_spec_for_EPS_PMIP_SpecificParameters,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EPS_PMIP_SpecificParameters(
        lifetime,
        accessTechnologyType,
        aPN,
        iPv6HomeNetworkPrefix,
        protConfigurationOption,
        handoverIndication,
        status,
        revocationTrigger,
        iPv4HomeAddress,
        iPv6careOfAddress,
        iPv4careOfAddress,
        servingNetwork,
        dHCPv4AddressAllocationInd,
        ePSlocationOfTheTarget,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EPS_PMIP_SpecificParameters(el);
}

let _cached_encoder_for_EPS_PMIP_SpecificParameters: $.ASN1Encoder<EPS_PMIP_SpecificParameters> | null = null;

/**
 * @summary Encodes a(n) EPS_PMIP_SpecificParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPS_PMIP_SpecificParameters, encoded as an ASN.1 Element.
 */
export
function _encode_EPS_PMIP_SpecificParameters (value: EPS_PMIP_SpecificParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPS_PMIP_SpecificParameters) { _cached_encoder_for_EPS_PMIP_SpecificParameters = function (value: EPS_PMIP_SpecificParameters, elGetter: $.ASN1Encoder<EPS_PMIP_SpecificParameters>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(14 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.lifetime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.lifetime, $.BER);
    }
    if (value.accessTechnologyType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.accessTechnologyType, $.BER);
    }
    if (value.aPN !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.aPN, $.BER);
    }
    if (value.iPv6HomeNetworkPrefix !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.iPv6HomeNetworkPrefix, $.BER);
    }
    if (value.protConfigurationOption !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.protConfigurationOption, $.BER);
    }
    if (value.handoverIndication !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.handoverIndication, $.BER);
    }
    if (value.status !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.status, $.BER);
    }
    if (value.revocationTrigger !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER)(value.revocationTrigger, $.BER);
    }
    if (value.iPv4HomeAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.iPv4HomeAddress, $.BER);
    }
    if (value.iPv6careOfAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.iPv6careOfAddress, $.BER);
    }
    if (value.iPv4careOfAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeOctetString, $.BER)(value.iPv4careOfAddress, $.BER);
    }
    if (value.servingNetwork !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeOctetString, $.BER)(value.servingNetwork, $.BER);
    }
    if (value.dHCPv4AddressAllocationInd !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeOctetString, $.BER)(value.dHCPv4AddressAllocationInd, $.BER);
    }
    if (value.ePSlocationOfTheTarget !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_EPSLocation, $.BER)(value.ePSlocationOfTheTarget, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EPS_PMIP_SpecificParameters(value, elGetter);
}


/* eslint-enable */

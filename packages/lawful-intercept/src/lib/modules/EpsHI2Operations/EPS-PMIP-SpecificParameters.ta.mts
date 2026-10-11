/* eslint-disable */
import {
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
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
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPS-PMIP-SpecificParameters ::= SEQUENCE
 * {
 *     lifetime                              [1]  INTEGER (0..65535)                 OPTIONAL,
 *     accessTechnologyType                  [2]  OCTET STRING (SIZE (4))            OPTIONAL,
 *     aPN                                   [3]  OCTET STRING (SIZE (1..100))       OPTIONAL,
 *     iPv6HomeNetworkPrefix                 [4]  OCTET STRING (SIZE (20))           OPTIONAL,
 *     protConfigurationOption               [5]  OCTET STRING                       OPTIONAL,
 *     handoverIndication                    [6]  OCTET STRING (SIZE (4))            OPTIONAL,
 *     status                                [7]  INTEGER (0..255)                   OPTIONAL,
 *     revocationTrigger                     [8]  INTEGER (0..255)                   OPTIONAL,
 *     iPv4HomeAddress                       [9]  OCTET STRING (SIZE (4))            OPTIONAL,
 *     iPv6careOfAddress                     [10] OCTET STRING                       OPTIONAL,
 *     iPv4careOfAddress                     [11] OCTET STRING                       OPTIONAL,
 *     ...,
 *     servingNetwork                        [12] OCTET STRING (SIZE (3))            OPTIONAL,
 *     dHCPv4AddressAllocationInd            [13] OCTET STRING (SIZE (1))            OPTIONAL,
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
     * @public
     * @readonly
     */
    readonly lifetime: OPTIONAL<INTEGER>;
    /**
     * @summary `accessTechnologyType`.
     * @public
     * @readonly
     */
    readonly accessTechnologyType: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `aPN`.
     * @public
     * @readonly
     */
    readonly aPN: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `iPv6HomeNetworkPrefix`.
     * @public
     * @readonly
     */
    readonly iPv6HomeNetworkPrefix: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `protConfigurationOption`.
     * @public
     * @readonly
     */
    readonly protConfigurationOption: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `handoverIndication`.
     * @public
     * @readonly
     */
    readonly handoverIndication: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `status`.
     * @public
     * @readonly
     */
    readonly status: OPTIONAL<INTEGER>;
    /**
     * @summary `revocationTrigger`.
     * @public
     * @readonly
     */
    readonly revocationTrigger: OPTIONAL<INTEGER>;
    /**
     * @summary `iPv4HomeAddress`.
     * @public
     * @readonly
     */
    readonly iPv4HomeAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `iPv6careOfAddress`.
     * @public
     * @readonly
     */
    readonly iPv6careOfAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `iPv4careOfAddress`.
     * @public
     * @readonly
     */
    readonly iPv4careOfAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servingNetwork`.
     * @public
     * @readonly
     */
    readonly servingNetwork: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `dHCPv4AddressAllocationInd`.
     * @public
     * @readonly
     */
    readonly dHCPv4AddressAllocationInd: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `ePSlocationOfTheTarget`.
     * @public
     * @readonly
     */
    readonly ePSlocationOfTheTarget: OPTIONAL<EPSLocation>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        lifetime: OPTIONAL<INTEGER>,
        accessTechnologyType: OPTIONAL<OCTET_STRING>,
        aPN: OPTIONAL<OCTET_STRING>,
        iPv6HomeNetworkPrefix: OPTIONAL<OCTET_STRING>,
        protConfigurationOption: OPTIONAL<OCTET_STRING>,
        handoverIndication: OPTIONAL<OCTET_STRING>,
        status: OPTIONAL<INTEGER>,
        revocationTrigger: OPTIONAL<INTEGER>,
        iPv4HomeAddress: OPTIONAL<OCTET_STRING>,
        iPv6careOfAddress: OPTIONAL<OCTET_STRING>,
        iPv4careOfAddress: OPTIONAL<OCTET_STRING>,
        servingNetwork: OPTIONAL<OCTET_STRING>,
        dHCPv4AddressAllocationInd: OPTIONAL<OCTET_STRING>,
        ePSlocationOfTheTarget: OPTIONAL<EPSLocation>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.lifetime = lifetime;
        if (this.lifetime !== undefined && ((typeof this.lifetime === "bigint" ? this.lifetime : BigInt(this.lifetime)) < 0n || (typeof this.lifetime === "bigint" ? this.lifetime : BigInt(this.lifetime)) > 65535n)) {
            throw new ASN1OverflowError("lifetime violates the INTEGER range constraint");
        }
        this.accessTechnologyType = accessTechnologyType;
        if (this.accessTechnologyType !== undefined && (this.accessTechnologyType.length < 4 || this.accessTechnologyType.length > 4)) {
            throw new ASN1SizeError("accessTechnologyType violates the SIZE constraint");
        }
        this.aPN = aPN;
        if (this.aPN !== undefined && (this.aPN.length < 1 || this.aPN.length > 100)) {
            throw new ASN1SizeError("aPN violates the SIZE constraint");
        }
        this.iPv6HomeNetworkPrefix = iPv6HomeNetworkPrefix;
        if (this.iPv6HomeNetworkPrefix !== undefined && (this.iPv6HomeNetworkPrefix.length < 20 || this.iPv6HomeNetworkPrefix.length > 20)) {
            throw new ASN1SizeError("iPv6HomeNetworkPrefix violates the SIZE constraint");
        }
        this.protConfigurationOption = protConfigurationOption;
        this.handoverIndication = handoverIndication;
        if (this.handoverIndication !== undefined && (this.handoverIndication.length < 4 || this.handoverIndication.length > 4)) {
            throw new ASN1SizeError("handoverIndication violates the SIZE constraint");
        }
        this.status = status;
        if (this.status !== undefined && ((typeof this.status === "bigint" ? this.status : BigInt(this.status)) < 0n || (typeof this.status === "bigint" ? this.status : BigInt(this.status)) > 255n)) {
            throw new ASN1OverflowError("status violates the INTEGER range constraint");
        }
        this.revocationTrigger = revocationTrigger;
        if (this.revocationTrigger !== undefined && ((typeof this.revocationTrigger === "bigint" ? this.revocationTrigger : BigInt(this.revocationTrigger)) < 0n || (typeof this.revocationTrigger === "bigint" ? this.revocationTrigger : BigInt(this.revocationTrigger)) > 255n)) {
            throw new ASN1OverflowError("revocationTrigger violates the INTEGER range constraint");
        }
        this.iPv4HomeAddress = iPv4HomeAddress;
        if (this.iPv4HomeAddress !== undefined && (this.iPv4HomeAddress.length < 4 || this.iPv4HomeAddress.length > 4)) {
            throw new ASN1SizeError("iPv4HomeAddress violates the SIZE constraint");
        }
        this.iPv6careOfAddress = iPv6careOfAddress;
        this.iPv4careOfAddress = iPv4careOfAddress;
        this.servingNetwork = servingNetwork;
        if (this.servingNetwork !== undefined && (this.servingNetwork.length < 3 || this.servingNetwork.length > 3)) {
            throw new ASN1SizeError("servingNetwork violates the SIZE constraint");
        }
        this.dHCPv4AddressAllocationInd = dHCPv4AddressAllocationInd;
        if (this.dHCPv4AddressAllocationInd !== undefined && (this.dHCPv4AddressAllocationInd.length < 1 || this.dHCPv4AddressAllocationInd.length > 1)) {
            throw new ASN1SizeError("dHCPv4AddressAllocationInd violates the SIZE constraint");
        }
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
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "lifetime": (_el: _Element): void => { lifetime = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "accessTechnologyType": (_el: _Element): void => { accessTechnologyType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "aPN": (_el: _Element): void => { aPN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "iPv6HomeNetworkPrefix": (_el: _Element): void => { iPv6HomeNetworkPrefix = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "protConfigurationOption": (_el: _Element): void => { protConfigurationOption = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "handoverIndication": (_el: _Element): void => { handoverIndication = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "status": (_el: _Element): void => { status = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "revocationTrigger": (_el: _Element): void => { revocationTrigger = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "iPv4HomeAddress": (_el: _Element): void => { iPv4HomeAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "iPv6careOfAddress": (_el: _Element): void => { iPv6careOfAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "iPv4careOfAddress": (_el: _Element): void => { iPv4careOfAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servingNetwork": (_el: _Element): void => { servingNetwork = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "dHCPv4AddressAllocationInd": (_el: _Element): void => { dHCPv4AddressAllocationInd = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
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
    if (!_cached_encoder_for_EPS_PMIP_SpecificParameters) { _cached_encoder_for_EPS_PMIP_SpecificParameters = function (value: EPS_PMIP_SpecificParameters, _elGetter: $.ASN1Encoder<EPS_PMIP_SpecificParameters>): _Element {
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

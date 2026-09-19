/* eslint-disable */
import {
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { APN, _decode_APN, _encode_APN } from "../EpsHI2Operations/APN.ta.mjs";
// export { APN, _decode_APN, _encode_APN } from "../EpsHI2Operations/APN.ta.mjs";
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
 *  lifetime [1] INTEGER (0..65535) OPTIONAL,
 *  accessTechnologyType [2] OCTET STRING (SIZE (4)) OPTIONAL,
 *  aPN [3] APN OPTIONAL,
 *  iPv6HomeNetworkPrefix [4] OCTET STRING (SIZE (20)) OPTIONAL,
 *  protConfigurationOption [5] OCTET STRING OPTIONAL,
 *  handoverIndication [6] OCTET STRING (SIZE (4)) OPTIONAL,
 *  status [7] INTEGER (0..255) OPTIONAL,
 *  revocationTrigger [8] INTEGER (0..255) OPTIONAL,
 *  iPv4HomeAddress [9] OCTET STRING (SIZE (4)) OPTIONAL,
 *  iPv6careOfAddress [10] OCTET STRING OPTIONAL,
 *  iPv4careOfAddress [11] OCTET STRING OPTIONAL,
 *  ...,
 *  servingNetwork [12] OCTET STRING (SIZE (3)) OPTIONAL,
 *  dHCPv4AddressAllocationInd [13] OCTET STRING (SIZE (1)) OPTIONAL,
 *  ePSlocationOfTheTarget [14] EPSLocation OPTIONAL
 *  -- parameters coded according to 3GPP TS 29.275 [48] and RFCs specifically
 *  -- referenced in it.
 * }
 * ```
 * 
 * @class
 */
export
class EPS_PMIP_SpecificParameters {
    constructor (
        /**
         * @summary `lifetime`.
         * @public
         * @readonly
         */
        readonly lifetime: OPTIONAL<INTEGER>,
        /**
         * @summary `accessTechnologyType`.
         * @public
         * @readonly
         */
        readonly accessTechnologyType: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `aPN`.
         * @public
         * @readonly
         */
        readonly aPN: OPTIONAL<APN>,
        /**
         * @summary `iPv6HomeNetworkPrefix`.
         * @public
         * @readonly
         */
        readonly iPv6HomeNetworkPrefix: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `protConfigurationOption`.
         * @public
         * @readonly
         */
        readonly protConfigurationOption: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `handoverIndication`.
         * @public
         * @readonly
         */
        readonly handoverIndication: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `status`.
         * @public
         * @readonly
         */
        readonly status: OPTIONAL<INTEGER>,
        /**
         * @summary `revocationTrigger`.
         * @public
         * @readonly
         */
        readonly revocationTrigger: OPTIONAL<INTEGER>,
        /**
         * @summary `iPv4HomeAddress`.
         * @public
         * @readonly
         */
        readonly iPv4HomeAddress: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `iPv6careOfAddress`.
         * @public
         * @readonly
         */
        readonly iPv6careOfAddress: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `iPv4careOfAddress`.
         * @public
         * @readonly
         */
        readonly iPv4careOfAddress: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `servingNetwork`.
         * @public
         * @readonly
         */
        readonly servingNetwork: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `dHCPv4AddressAllocationInd`.
         * @public
         * @readonly
         */
        readonly dHCPv4AddressAllocationInd: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `ePSlocationOfTheTarget`.
         * @public
         * @readonly
         */
        readonly ePSlocationOfTheTarget: OPTIONAL<EPSLocation>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

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
    let aPN: OPTIONAL<APN>;
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
        "aPN": (_el: _Element): void => { aPN = $._decode_implicit<APN>(() => _decode_APN)(_el); },
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
    if (!_cached_encoder_for_EPS_PMIP_SpecificParameters) { _cached_encoder_for_EPS_PMIP_SpecificParameters = function (value: EPS_PMIP_SpecificParameters, elGetter: $.ASN1Encoder<EPS_PMIP_SpecificParameters>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.lifetime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.lifetime, $.BER)),
            /* IF_ABSENT  */ ((value.accessTechnologyType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.accessTechnologyType, $.BER)),
            /* IF_ABSENT  */ ((value.aPN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_APN, $.BER)(value.aPN, $.BER)),
            /* IF_ABSENT  */ ((value.iPv6HomeNetworkPrefix === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.iPv6HomeNetworkPrefix, $.BER)),
            /* IF_ABSENT  */ ((value.protConfigurationOption === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.protConfigurationOption, $.BER)),
            /* IF_ABSENT  */ ((value.handoverIndication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.handoverIndication, $.BER)),
            /* IF_ABSENT  */ ((value.status === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.status, $.BER)),
            /* IF_ABSENT  */ ((value.revocationTrigger === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER)(value.revocationTrigger, $.BER)),
            /* IF_ABSENT  */ ((value.iPv4HomeAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.iPv4HomeAddress, $.BER)),
            /* IF_ABSENT  */ ((value.iPv6careOfAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.iPv6careOfAddress, $.BER)),
            /* IF_ABSENT  */ ((value.iPv4careOfAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => $._encodeOctetString, $.BER)(value.iPv4careOfAddress, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.servingNetwork === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => $._encodeOctetString, $.BER)(value.servingNetwork, $.BER)),
            /* IF_ABSENT  */ ((value.dHCPv4AddressAllocationInd === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => $._encodeOctetString, $.BER)(value.dHCPv4AddressAllocationInd, $.BER)),
            /* IF_ABSENT  */ ((value.ePSlocationOfTheTarget === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_EPSLocation, $.BER)(value.ePSlocationOfTheTarget, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EPS_PMIP_SpecificParameters(value, elGetter);
}


/* eslint-enable */

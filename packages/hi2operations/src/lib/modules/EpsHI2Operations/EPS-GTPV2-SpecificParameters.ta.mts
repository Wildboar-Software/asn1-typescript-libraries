/* eslint-disable */
import {
    NULL,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ProtConfigOptions, _decode_ProtConfigOptions, _encode_ProtConfigOptions } from "../EpsHI2Operations/ProtConfigOptions.ta.mjs";
// export { ProtConfigOptions, _decode_ProtConfigOptions, _encode_ProtConfigOptions } from "../EpsHI2Operations/ProtConfigOptions.ta.mjs";
import { TypeOfBearer, _decode_TypeOfBearer, _encode_TypeOfBearer, _enum_for_TypeOfBearer } from "../EpsHI2Operations/TypeOfBearer.ta.mjs";
// export { TypeOfBearer, _enum_for_TypeOfBearer, TypeOfBearer_defaultBearer /* IMPORTED_LONG_ENUMERATION_ITEM */, defaultBearer /* IMPORTED_SHORT_ENUMERATION_ITEM */, TypeOfBearer_dedicatedBearer /* IMPORTED_LONG_ENUMERATION_ITEM */, dedicatedBearer /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TypeOfBearer, _encode_TypeOfBearer } from "../EpsHI2Operations/TypeOfBearer.ta.mjs";
import { EPSLocation, _decode_EPSLocation, _encode_EPSLocation } from "../EpsHI2Operations/EPSLocation.ta.mjs";
// export { EPSLocation, _decode_EPSLocation, _encode_EPSLocation } from "../EpsHI2Operations/EPSLocation.ta.mjs";
import { RemoteUeContextConnected, _decode_RemoteUeContextConnected, _encode_RemoteUeContextConnected } from "../EpsHI2Operations/RemoteUeContextConnected.ta.mjs";
// export { RemoteUeContextConnected, _decode_RemoteUeContextConnected, _encode_RemoteUeContextConnected } from "../EpsHI2Operations/RemoteUeContextConnected.ta.mjs";
import { RemoteUeContextDisconnected, _decode_RemoteUeContextDisconnected, _encode_RemoteUeContextDisconnected } from "../EpsHI2Operations/RemoteUeContextDisconnected.ta.mjs";
// export { RemoteUeContextDisconnected, _decode_RemoteUeContextDisconnected, _encode_RemoteUeContextDisconnected } from "../EpsHI2Operations/RemoteUeContextDisconnected.ta.mjs";


/**
 * @summary EPS_GTPV2_SpecificParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPS-GTPV2-SpecificParameters ::= SEQUENCE
 * {
 *  pDNAddressAllocation [1] OCTET STRING OPTIONAL,
 *  aPN [2] OCTET STRING (SIZE (1..100)) OPTIONAL,
 *  protConfigOptions [3] ProtConfigOptions OPTIONAL,
 *  attachType [4] OCTET STRING (SIZE (1)) OPTIONAL,
 *  -- coded according to TS 24.301 [47]
 *  ePSBearerIdentity [5] OCTET STRING OPTIONAL,
 *  detachType [6] OCTET STRING (SIZE (1)) OPTIONAL,
 *  -- coded according to TS 24.301 [47], includes switch off indicator
 *  rATType [7] OCTET STRING (SIZE (1)) OPTIONAL,
 *  failedBearerActivationReason [8] OCTET STRING (SIZE (1)) OPTIONAL,
 *  ePSBearerQoS [9] OCTET STRING OPTIONAL,
 *  bearerActivationType [10] TypeOfBearer OPTIONAL,
 *  aPN-AMBR [11] OCTET STRING OPTIONAL,
 *  -- see 3GPP TS 29.274 [46] parameters coding rules defined for EPS-GTPV2-SpecificParameters.
 *  procedureTransactionId [12] OCTET STRING OPTIONAL,
 *  linkedEPSBearerId [13] OCTET STRING OPTIONAL,
 *  --The Linked EPS Bearer Identity shall be included and coded according to 3GPP TS 29.274 [46].
 *  tFT [14] OCTET STRING OPTIONAL,
 *  -- Only octets 3 onwards of TFT IE from 3GPP TS 24.008 [9] shall be included.
 *  handoverIndication [15] NULL OPTIONAL,
 *  failedBearerModReason [16] OCTET STRING (SIZE (1)) OPTIONAL,
 *  trafficAggregateDescription [17] OCTET STRING OPTIONAL,
 *  failedTAUReason [18] OCTET STRING (SIZE (1)) OPTIONAL,
 *  -- coded according to TS 24.301 [47]
 *  failedEUTRANAttachReason [19] OCTET STRING (SIZE (1)) OPTIONAL,
 *  -- coded according to TS 24.301 [47]
 *  servingMMEaddress [20] OCTET STRING OPTIONAL,
 *  -- Contains the data fields from the Diameter Origin-Host and Origin-Realm AVPs
 *  -- as received in the HSS from the MME according to the TS 29.272 [59].
 *  -- Only the data fields from the Diameter AVPs are provided concatenated
 *  -- with a semicolon to populate this field.
 *  bearerDeactivationType [21] TypeOfBearer OPTIONAL,
 *  bearerDeactivationCause [22] OCTET STRING (SIZE (1)) OPTIONAL,
 *  ePSlocationOfTheTarget [23] EPSLocation OPTIONAL,
 *  -- the use of ePSLocationOfTheTarget is mutually exclusive with the use of locationOfTheTarget
 *  -- ePSlocationOfTheTarget allows using the coding of the parameter according to SAE stage 3.
 *  -- location of the target
 *  -- or cell site location
 *  ...,
 *  pDNType [24] OCTET STRING (SIZE (1)) OPTIONAL,
 *  -- coded according to TS 24.301 [47]
 *  requestType [25] OCTET STRING (SIZE (1)) OPTIONAL,
 *  -- coded according to TS 24.301 [47]
 *  uEReqPDNConnFailReason [26] OCTET STRING (SIZE (1)) OPTIONAL,
 *  -- coded according to TS 24.301 [47]
 *  extendedHandoverIndication [27] OCTET STRING (SIZE (1)) OPTIONAL,
 *  -- This parameter with value 1 indicates handover based on the flags in the TS 29.274 [46].
 *  -- Otherwise set to the value 0.
 *  -- The use of extendedHandoverIndication and handoverIndication parameters is
 *  -- mutually exclusive and depends on the actual ASN.1 encoding method.
 *  uLITimestamp [28] OCTET STRING (SIZE (8)) OPTIONAL,
 *  -- The upper 4 octets shall carry the ULI Timestamp value; The lower 4 octets are undefined
 *  -- and shall be ignored by the receiver
 *  uELocalIPAddress [29] OCTET STRING OPTIONAL,
 *  uEUdpPort [30] OCTET STRING (SIZE (2)) OPTIONAL,
 *  tWANIdentifier [31] OCTET STRING OPTIONAL,
 *  tWANIdentifierTimestamp [32] OCTET STRING (SIZE (4)) OPTIONAL,
 *  proSeRemoteUeContextConnected [33] RemoteUeContextConnected OPTIONAL,
 *  proSeRemoteUeContextDisconnected [34] RemoteUeContextDisconnected OPTIONAL,
 *  secondaryRATUsageIndication [35] NULL OPTIONAL
 *  }
 * ```
 * 
 * @class
 */
export
class EPS_GTPV2_SpecificParameters {
    constructor (
        /**
         * @summary `pDNAddressAllocation`.
         * @public
         * @readonly
         */
        readonly pDNAddressAllocation: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `aPN`.
         * @public
         * @readonly
         */
        readonly aPN: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `protConfigOptions`.
         * @public
         * @readonly
         */
        readonly protConfigOptions: OPTIONAL<ProtConfigOptions>,
        /**
         * @summary `attachType`.
         * @public
         * @readonly
         */
        readonly attachType: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `ePSBearerIdentity`.
         * @public
         * @readonly
         */
        readonly ePSBearerIdentity: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `detachType`.
         * @public
         * @readonly
         */
        readonly detachType: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `rATType`.
         * @public
         * @readonly
         */
        readonly rATType: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `failedBearerActivationReason`.
         * @public
         * @readonly
         */
        readonly failedBearerActivationReason: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `ePSBearerQoS`.
         * @public
         * @readonly
         */
        readonly ePSBearerQoS: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `bearerActivationType`.
         * @public
         * @readonly
         */
        readonly bearerActivationType: OPTIONAL<TypeOfBearer>,
        /**
         * @summary `aPN_AMBR`.
         * @public
         * @readonly
         */
        readonly aPN_AMBR: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `procedureTransactionId`.
         * @public
         * @readonly
         */
        readonly procedureTransactionId: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `linkedEPSBearerId`.
         * @public
         * @readonly
         */
        readonly linkedEPSBearerId: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `tFT`.
         * @public
         * @readonly
         */
        readonly tFT: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `handoverIndication`.
         * @public
         * @readonly
         */
        readonly handoverIndication: OPTIONAL<NULL>,
        /**
         * @summary `failedBearerModReason`.
         * @public
         * @readonly
         */
        readonly failedBearerModReason: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `trafficAggregateDescription`.
         * @public
         * @readonly
         */
        readonly trafficAggregateDescription: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `failedTAUReason`.
         * @public
         * @readonly
         */
        readonly failedTAUReason: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `failedEUTRANAttachReason`.
         * @public
         * @readonly
         */
        readonly failedEUTRANAttachReason: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `servingMMEaddress`.
         * @public
         * @readonly
         */
        readonly servingMMEaddress: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `bearerDeactivationType`.
         * @public
         * @readonly
         */
        readonly bearerDeactivationType: OPTIONAL<TypeOfBearer>,
        /**
         * @summary `bearerDeactivationCause`.
         * @public
         * @readonly
         */
        readonly bearerDeactivationCause: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `ePSlocationOfTheTarget`.
         * @public
         * @readonly
         */
        readonly ePSlocationOfTheTarget: OPTIONAL<EPSLocation>,
        /**
         * @summary `pDNType`.
         * @public
         * @readonly
         */
        readonly pDNType: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `requestType`.
         * @public
         * @readonly
         */
        readonly requestType: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `uEReqPDNConnFailReason`.
         * @public
         * @readonly
         */
        readonly uEReqPDNConnFailReason: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `extendedHandoverIndication`.
         * @public
         * @readonly
         */
        readonly extendedHandoverIndication: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `uLITimestamp`.
         * @public
         * @readonly
         */
        readonly uLITimestamp: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `uELocalIPAddress`.
         * @public
         * @readonly
         */
        readonly uELocalIPAddress: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `uEUdpPort`.
         * @public
         * @readonly
         */
        readonly uEUdpPort: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `tWANIdentifier`.
         * @public
         * @readonly
         */
        readonly tWANIdentifier: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `tWANIdentifierTimestamp`.
         * @public
         * @readonly
         */
        readonly tWANIdentifierTimestamp: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `proSeRemoteUeContextConnected`.
         * @public
         * @readonly
         */
        readonly proSeRemoteUeContextConnected: OPTIONAL<RemoteUeContextConnected>,
        /**
         * @summary `proSeRemoteUeContextDisconnected`.
         * @public
         * @readonly
         */
        readonly proSeRemoteUeContextDisconnected: OPTIONAL<RemoteUeContextDisconnected>,
        /**
         * @summary `secondaryRATUsageIndication`.
         * @public
         * @readonly
         */
        readonly secondaryRATUsageIndication: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EPS_GTPV2_SpecificParameters
     * @description
     * 
     * This takes an `object` and converts it to a `EPS_GTPV2_SpecificParameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPS_GTPV2_SpecificParameters`.
     * @returns {EPS_GTPV2_SpecificParameters}
     */
    public static _from_object (_o: { [_K in keyof (EPS_GTPV2_SpecificParameters)]: (EPS_GTPV2_SpecificParameters)[_K] }): EPS_GTPV2_SpecificParameters {
        return new EPS_GTPV2_SpecificParameters(_o.pDNAddressAllocation, _o.aPN, _o.protConfigOptions, _o.attachType, _o.ePSBearerIdentity, _o.detachType, _o.rATType, _o.failedBearerActivationReason, _o.ePSBearerQoS, _o.bearerActivationType, _o.aPN_AMBR, _o.procedureTransactionId, _o.linkedEPSBearerId, _o.tFT, _o.handoverIndication, _o.failedBearerModReason, _o.trafficAggregateDescription, _o.failedTAUReason, _o.failedEUTRANAttachReason, _o.servingMMEaddress, _o.bearerDeactivationType, _o.bearerDeactivationCause, _o.ePSlocationOfTheTarget, _o.pDNType, _o.requestType, _o.uEReqPDNConnFailReason, _o.extendedHandoverIndication, _o.uLITimestamp, _o.uELocalIPAddress, _o.uEUdpPort, _o.tWANIdentifier, _o.tWANIdentifierTimestamp, _o.proSeRemoteUeContextConnected, _o.proSeRemoteUeContextDisconnected, _o.secondaryRATUsageIndication, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `bearerActivationType`
         * @public
         * @static
         */

    public static _enum_for_bearerActivationType = _enum_for_TypeOfBearer;        /**
         * @summary The enum used as the type of the component `bearerDeactivationType`
         * @public
         * @static
         */

    public static _enum_for_bearerDeactivationType = _enum_for_TypeOfBearer;
}

/**
 * @summary The Leading Root Component Types of EPS_GTPV2_SpecificParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPS_GTPV2_SpecificParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("pDNAddressAllocation", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("aPN", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("protConfigOptions", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("attachType", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("ePSBearerIdentity", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("detachType", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("failedBearerActivationReason", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("ePSBearerQoS", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("bearerActivationType", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("aPN-AMBR", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("procedureTransactionId", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("linkedEPSBearerId", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("tFT", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("handoverIndication", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("failedBearerModReason", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("trafficAggregateDescription", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("failedTAUReason", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("failedEUTRANAttachReason", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("servingMMEaddress", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("bearerDeactivationType", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("bearerDeactivationCause", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("ePSlocationOfTheTarget", true, $.hasTag(_TagClass.context, 23))
];

/**
 * @summary The Trailing Root Component Types of EPS_GTPV2_SpecificParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPS_GTPV2_SpecificParameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPS_GTPV2_SpecificParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPS_GTPV2_SpecificParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("pDNType", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("requestType", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("uEReqPDNConnFailReason", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("extendedHandoverIndication", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("uLITimestamp", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("uELocalIPAddress", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("uEUdpPort", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("tWANIdentifier", true, $.hasTag(_TagClass.context, 31)),
    new $.ComponentSpec("tWANIdentifierTimestamp", true, $.hasTag(_TagClass.context, 32)),
    new $.ComponentSpec("proSeRemoteUeContextConnected", true, $.hasTag(_TagClass.context, 33)),
    new $.ComponentSpec("proSeRemoteUeContextDisconnected", true, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("secondaryRATUsageIndication", true, $.hasTag(_TagClass.context, 35))
];

let _cached_decoder_for_EPS_GTPV2_SpecificParameters: $.ASN1Decoder<EPS_GTPV2_SpecificParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPS_GTPV2_SpecificParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPS_GTPV2_SpecificParameters (el: _Element): EPS_GTPV2_SpecificParameters {
    if (!_cached_decoder_for_EPS_GTPV2_SpecificParameters) { _cached_decoder_for_EPS_GTPV2_SpecificParameters = function (el: _Element): EPS_GTPV2_SpecificParameters {
    let pDNAddressAllocation: OPTIONAL<OCTET_STRING>;
    let aPN: OPTIONAL<OCTET_STRING>;
    let protConfigOptions: OPTIONAL<ProtConfigOptions>;
    let attachType: OPTIONAL<OCTET_STRING>;
    let ePSBearerIdentity: OPTIONAL<OCTET_STRING>;
    let detachType: OPTIONAL<OCTET_STRING>;
    let rATType: OPTIONAL<OCTET_STRING>;
    let failedBearerActivationReason: OPTIONAL<OCTET_STRING>;
    let ePSBearerQoS: OPTIONAL<OCTET_STRING>;
    let bearerActivationType: OPTIONAL<TypeOfBearer>;
    let aPN_AMBR: OPTIONAL<OCTET_STRING>;
    let procedureTransactionId: OPTIONAL<OCTET_STRING>;
    let linkedEPSBearerId: OPTIONAL<OCTET_STRING>;
    let tFT: OPTIONAL<OCTET_STRING>;
    let handoverIndication: OPTIONAL<NULL>;
    let failedBearerModReason: OPTIONAL<OCTET_STRING>;
    let trafficAggregateDescription: OPTIONAL<OCTET_STRING>;
    let failedTAUReason: OPTIONAL<OCTET_STRING>;
    let failedEUTRANAttachReason: OPTIONAL<OCTET_STRING>;
    let servingMMEaddress: OPTIONAL<OCTET_STRING>;
    let bearerDeactivationType: OPTIONAL<TypeOfBearer>;
    let bearerDeactivationCause: OPTIONAL<OCTET_STRING>;
    let ePSlocationOfTheTarget: OPTIONAL<EPSLocation>;
    let pDNType: OPTIONAL<OCTET_STRING>;
    let requestType: OPTIONAL<OCTET_STRING>;
    let uEReqPDNConnFailReason: OPTIONAL<OCTET_STRING>;
    let extendedHandoverIndication: OPTIONAL<OCTET_STRING>;
    let uLITimestamp: OPTIONAL<OCTET_STRING>;
    let uELocalIPAddress: OPTIONAL<OCTET_STRING>;
    let uEUdpPort: OPTIONAL<OCTET_STRING>;
    let tWANIdentifier: OPTIONAL<OCTET_STRING>;
    let tWANIdentifierTimestamp: OPTIONAL<OCTET_STRING>;
    let proSeRemoteUeContextConnected: OPTIONAL<RemoteUeContextConnected>;
    let proSeRemoteUeContextDisconnected: OPTIONAL<RemoteUeContextDisconnected>;
    let secondaryRATUsageIndication: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "pDNAddressAllocation": (_el: _Element): void => { pDNAddressAllocation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "aPN": (_el: _Element): void => { aPN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "protConfigOptions": (_el: _Element): void => { protConfigOptions = $._decode_implicit<ProtConfigOptions>(() => _decode_ProtConfigOptions)(_el); },
        "attachType": (_el: _Element): void => { attachType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "ePSBearerIdentity": (_el: _Element): void => { ePSBearerIdentity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "detachType": (_el: _Element): void => { detachType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "failedBearerActivationReason": (_el: _Element): void => { failedBearerActivationReason = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "ePSBearerQoS": (_el: _Element): void => { ePSBearerQoS = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "bearerActivationType": (_el: _Element): void => { bearerActivationType = $._decode_implicit<TypeOfBearer>(() => _decode_TypeOfBearer)(_el); },
        "aPN-AMBR": (_el: _Element): void => { aPN_AMBR = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "procedureTransactionId": (_el: _Element): void => { procedureTransactionId = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "linkedEPSBearerId": (_el: _Element): void => { linkedEPSBearerId = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "tFT": (_el: _Element): void => { tFT = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "handoverIndication": (_el: _Element): void => { handoverIndication = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "failedBearerModReason": (_el: _Element): void => { failedBearerModReason = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "trafficAggregateDescription": (_el: _Element): void => { trafficAggregateDescription = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "failedTAUReason": (_el: _Element): void => { failedTAUReason = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "failedEUTRANAttachReason": (_el: _Element): void => { failedEUTRANAttachReason = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servingMMEaddress": (_el: _Element): void => { servingMMEaddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "bearerDeactivationType": (_el: _Element): void => { bearerDeactivationType = $._decode_implicit<TypeOfBearer>(() => _decode_TypeOfBearer)(_el); },
        "bearerDeactivationCause": (_el: _Element): void => { bearerDeactivationCause = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "ePSlocationOfTheTarget": (_el: _Element): void => { ePSlocationOfTheTarget = $._decode_implicit<EPSLocation>(() => _decode_EPSLocation)(_el); },
        "pDNType": (_el: _Element): void => { pDNType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "requestType": (_el: _Element): void => { requestType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "uEReqPDNConnFailReason": (_el: _Element): void => { uEReqPDNConnFailReason = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "extendedHandoverIndication": (_el: _Element): void => { extendedHandoverIndication = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "uLITimestamp": (_el: _Element): void => { uLITimestamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "uELocalIPAddress": (_el: _Element): void => { uELocalIPAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "uEUdpPort": (_el: _Element): void => { uEUdpPort = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "tWANIdentifier": (_el: _Element): void => { tWANIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "tWANIdentifierTimestamp": (_el: _Element): void => { tWANIdentifierTimestamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "proSeRemoteUeContextConnected": (_el: _Element): void => { proSeRemoteUeContextConnected = $._decode_implicit<RemoteUeContextConnected>(() => _decode_RemoteUeContextConnected)(_el); },
        "proSeRemoteUeContextDisconnected": (_el: _Element): void => { proSeRemoteUeContextDisconnected = $._decode_implicit<RemoteUeContextDisconnected>(() => _decode_RemoteUeContextDisconnected)(_el); },
        "secondaryRATUsageIndication": (_el: _Element): void => { secondaryRATUsageIndication = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EPS_GTPV2_SpecificParameters,
        _extension_additions_list_spec_for_EPS_GTPV2_SpecificParameters,
        _root_component_type_list_2_spec_for_EPS_GTPV2_SpecificParameters,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EPS_GTPV2_SpecificParameters(
        pDNAddressAllocation,
        aPN,
        protConfigOptions,
        attachType,
        ePSBearerIdentity,
        detachType,
        rATType,
        failedBearerActivationReason,
        ePSBearerQoS,
        bearerActivationType,
        aPN_AMBR,
        procedureTransactionId,
        linkedEPSBearerId,
        tFT,
        handoverIndication,
        failedBearerModReason,
        trafficAggregateDescription,
        failedTAUReason,
        failedEUTRANAttachReason,
        servingMMEaddress,
        bearerDeactivationType,
        bearerDeactivationCause,
        ePSlocationOfTheTarget,
        pDNType,
        requestType,
        uEReqPDNConnFailReason,
        extendedHandoverIndication,
        uLITimestamp,
        uELocalIPAddress,
        uEUdpPort,
        tWANIdentifier,
        tWANIdentifierTimestamp,
        proSeRemoteUeContextConnected,
        proSeRemoteUeContextDisconnected,
        secondaryRATUsageIndication,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EPS_GTPV2_SpecificParameters(el);
}

let _cached_encoder_for_EPS_GTPV2_SpecificParameters: $.ASN1Encoder<EPS_GTPV2_SpecificParameters> | null = null;

/**
 * @summary Encodes a(n) EPS_GTPV2_SpecificParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPS_GTPV2_SpecificParameters, encoded as an ASN.1 Element.
 */
export
function _encode_EPS_GTPV2_SpecificParameters (value: EPS_GTPV2_SpecificParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPS_GTPV2_SpecificParameters) { _cached_encoder_for_EPS_GTPV2_SpecificParameters = function (value: EPS_GTPV2_SpecificParameters, elGetter: $.ASN1Encoder<EPS_GTPV2_SpecificParameters>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.pDNAddressAllocation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.pDNAddressAllocation, $.BER)),
            /* IF_ABSENT  */ ((value.aPN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.aPN, $.BER)),
            /* IF_ABSENT  */ ((value.protConfigOptions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ProtConfigOptions, $.BER)(value.protConfigOptions, $.BER)),
            /* IF_ABSENT  */ ((value.attachType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.attachType, $.BER)),
            /* IF_ABSENT  */ ((value.ePSBearerIdentity === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.ePSBearerIdentity, $.BER)),
            /* IF_ABSENT  */ ((value.detachType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.detachType, $.BER)),
            /* IF_ABSENT  */ ((value.rATType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.rATType, $.BER)),
            /* IF_ABSENT  */ ((value.failedBearerActivationReason === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.failedBearerActivationReason, $.BER)),
            /* IF_ABSENT  */ ((value.ePSBearerQoS === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.ePSBearerQoS, $.BER)),
            /* IF_ABSENT  */ ((value.bearerActivationType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_TypeOfBearer, $.BER)(value.bearerActivationType, $.BER)),
            /* IF_ABSENT  */ ((value.aPN_AMBR === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => $._encodeOctetString, $.BER)(value.aPN_AMBR, $.BER)),
            /* IF_ABSENT  */ ((value.procedureTransactionId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => $._encodeOctetString, $.BER)(value.procedureTransactionId, $.BER)),
            /* IF_ABSENT  */ ((value.linkedEPSBearerId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => $._encodeOctetString, $.BER)(value.linkedEPSBearerId, $.BER)),
            /* IF_ABSENT  */ ((value.tFT === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => $._encodeOctetString, $.BER)(value.tFT, $.BER)),
            /* IF_ABSENT  */ ((value.handoverIndication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => $._encodeNull, $.BER)(value.handoverIndication, $.BER)),
            /* IF_ABSENT  */ ((value.failedBearerModReason === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => $._encodeOctetString, $.BER)(value.failedBearerModReason, $.BER)),
            /* IF_ABSENT  */ ((value.trafficAggregateDescription === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => $._encodeOctetString, $.BER)(value.trafficAggregateDescription, $.BER)),
            /* IF_ABSENT  */ ((value.failedTAUReason === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => $._encodeOctetString, $.BER)(value.failedTAUReason, $.BER)),
            /* IF_ABSENT  */ ((value.failedEUTRANAttachReason === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => $._encodeOctetString, $.BER)(value.failedEUTRANAttachReason, $.BER)),
            /* IF_ABSENT  */ ((value.servingMMEaddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => $._encodeOctetString, $.BER)(value.servingMMEaddress, $.BER)),
            /* IF_ABSENT  */ ((value.bearerDeactivationType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => _encode_TypeOfBearer, $.BER)(value.bearerDeactivationType, $.BER)),
            /* IF_ABSENT  */ ((value.bearerDeactivationCause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 22, () => $._encodeOctetString, $.BER)(value.bearerDeactivationCause, $.BER)),
            /* IF_ABSENT  */ ((value.ePSlocationOfTheTarget === undefined) ? undefined : $._encode_implicit(_TagClass.context, 23, () => _encode_EPSLocation, $.BER)(value.ePSlocationOfTheTarget, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.pDNType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 24, () => $._encodeOctetString, $.BER)(value.pDNType, $.BER)),
            /* IF_ABSENT  */ ((value.requestType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 25, () => $._encodeOctetString, $.BER)(value.requestType, $.BER)),
            /* IF_ABSENT  */ ((value.uEReqPDNConnFailReason === undefined) ? undefined : $._encode_implicit(_TagClass.context, 26, () => $._encodeOctetString, $.BER)(value.uEReqPDNConnFailReason, $.BER)),
            /* IF_ABSENT  */ ((value.extendedHandoverIndication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 27, () => $._encodeOctetString, $.BER)(value.extendedHandoverIndication, $.BER)),
            /* IF_ABSENT  */ ((value.uLITimestamp === undefined) ? undefined : $._encode_implicit(_TagClass.context, 28, () => $._encodeOctetString, $.BER)(value.uLITimestamp, $.BER)),
            /* IF_ABSENT  */ ((value.uELocalIPAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 29, () => $._encodeOctetString, $.BER)(value.uELocalIPAddress, $.BER)),
            /* IF_ABSENT  */ ((value.uEUdpPort === undefined) ? undefined : $._encode_implicit(_TagClass.context, 30, () => $._encodeOctetString, $.BER)(value.uEUdpPort, $.BER)),
            /* IF_ABSENT  */ ((value.tWANIdentifier === undefined) ? undefined : $._encode_implicit(_TagClass.context, 31, () => $._encodeOctetString, $.BER)(value.tWANIdentifier, $.BER)),
            /* IF_ABSENT  */ ((value.tWANIdentifierTimestamp === undefined) ? undefined : $._encode_implicit(_TagClass.context, 32, () => $._encodeOctetString, $.BER)(value.tWANIdentifierTimestamp, $.BER)),
            /* IF_ABSENT  */ ((value.proSeRemoteUeContextConnected === undefined) ? undefined : $._encode_implicit(_TagClass.context, 33, () => _encode_RemoteUeContextConnected, $.BER)(value.proSeRemoteUeContextConnected, $.BER)),
            /* IF_ABSENT  */ ((value.proSeRemoteUeContextDisconnected === undefined) ? undefined : $._encode_implicit(_TagClass.context, 34, () => _encode_RemoteUeContextDisconnected, $.BER)(value.proSeRemoteUeContextDisconnected, $.BER)),
            /* IF_ABSENT  */ ((value.secondaryRATUsageIndication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 35, () => $._encodeNull, $.BER)(value.secondaryRATUsageIndication, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EPS_GTPV2_SpecificParameters(value, elGetter);
}


/* eslint-enable */

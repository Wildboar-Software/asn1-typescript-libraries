/**
 * Layer 2 lawful interception for an access provider that has layer 2
 * session information and is not required to have layer 3 information.
 * Handover uses ETSI TS 102 232-1. Layer 3 interception is ETSI
 * TS 102 232-3. This part does not apply to the packet-switched domain of
 * GSM/UMTS networks (3GPP TS 23.060).
 *
 * `L2IRI` is HI2. `L2CC` is HI3. `L2IRIOnly` is the IRI-only PDU. The prose
 * of V3.8.1 describes the first two. It does not describe `L2IRIOnly`.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 1, clause 6, clause 7.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * Short named bits, integers, and enumeration items omitted because the
 * same short name is declared more than once in this module:
 * `undefined`, `unknown`
 */
export {
    type AccessEventType,
    AccessEventType_accessAccept,
    AccessEventType_accessAttempt,
    AccessEventType_accessEnd,
    AccessEventType_accessFailed,
    AccessEventType_accessReject,
    AccessEventType_endOfInterceptionWithSessionActive,
    AccessEventType_endOfInterceptionWithoutNetworkSession,
    AccessEventType_interimUpdate,
    AccessEventType_sessionEnd,
    AccessEventType_sessionExpired,
    AccessEventType_sessionStart,
    AccessEventType_startOfInterceptionWithSessionActive,
    AccessEventType_startOfInterceptionWithoutNetworkSession,
    AccessEventType_unknown,
    _decode_AccessEventType,
    _encode_AccessEventType,
    _enum_for_AccessEventType,
    accessAccept,
    accessAttempt,
    accessEnd,
    accessFailed,
    accessReject,
    endOfInterceptionWithSessionActive,
    endOfInterceptionWithoutNetworkSession,
    interimUpdate,
    sessionEnd,
    sessionExpired,
    sessionStart,
    startOfInterceptionWithSessionActive,
    startOfInterceptionWithoutNetworkSession,
} from "./AccessEventType.ta.mjs";

export {
    type AuthenticationType,
    AuthenticationType_dhcpAAA,
    AuthenticationType_diameterAAA,
    AuthenticationType_radiusAAA,
    AuthenticationType_static,
    AuthenticationType_unknown,
    _decode_AuthenticationType,
    _encode_AuthenticationType,
    _enum_for_AuthenticationType,
    dhcpAAA,
    diameterAAA,
    radiusAAA,
} from "./AuthenticationType.ta.mjs";

export {
    type EndReason,
    EndReason_connectionLoss,
    EndReason_connectionTimeout,
    EndReason_leaseExpired,
    EndReason_regularLogoff,
    EndReason_undefined,
    _decode_EndReason,
    _encode_EndReason,
    _enum_for_EndReason,
    connectionLoss,
    connectionTimeout,
    leaseExpired,
    regularLogoff,
} from "./EndReason.ta.mjs";

export {
    type InternetAccessType,
    InternetAccessType_cableModem,
    InternetAccessType_dialUp,
    InternetAccessType_fTTx,
    InternetAccessType_lAN,
    InternetAccessType_satellite,
    InternetAccessType_undefined,
    InternetAccessType_wIMAX_HIPERMAN,
    InternetAccessType_wirelessLAN,
    InternetAccessType_xDSL,
    _decode_InternetAccessType,
    _encode_InternetAccessType,
    _enum_for_InternetAccessType,
    cableModem,
    dialUp,
    fTTx,
    lAN,
    satellite,
    wIMAX_HIPERMAN,
    wirelessLAN,
    xDSL,
} from "./InternetAccessType.ta.mjs";

export {
    type L2CC_l2CCContents,
    _decode_L2CC_l2CCContents,
    _encode_L2CC_l2CCContents,
} from "./L2CC-l2CCContents.ta.mjs";

export {
    L2CC,
    _decode_L2CC,
    _encode_L2CC,
    _extension_additions_list_spec_for_L2CC,
    _root_component_type_list_1_spec_for_L2CC,
    _root_component_type_list_2_spec_for_L2CC,
} from "./L2CC.ta.mjs";

export {
    L2IRI,
    _decode_L2IRI,
    _encode_L2IRI,
    _extension_additions_list_spec_for_L2IRI,
    _root_component_type_list_1_spec_for_L2IRI,
    _root_component_type_list_2_spec_for_L2IRI,
} from "./L2IRI.ta.mjs";

export {
    L2IRIContents,
    _decode_L2IRIContents,
    _encode_L2IRIContents,
    _extension_additions_list_spec_for_L2IRIContents,
    _root_component_type_list_1_spec_for_L2IRIContents,
    _root_component_type_list_2_spec_for_L2IRIContents,
} from "./L2IRIContents.ta.mjs";

export {
    L2IRIOnly,
    _decode_L2IRIOnly,
    _encode_L2IRIOnly,
    _extension_additions_list_spec_for_L2IRIOnly,
    _root_component_type_list_1_spec_for_L2IRIOnly,
    _root_component_type_list_2_spec_for_L2IRIOnly,
} from "./L2IRIOnly.ta.mjs";

export {
    type L2ProtocolInformation,
    L2ProtocolInformation_ethernetProtocol,
    L2ProtocolInformation_l2ProtocolATM2684,
    L2ProtocolInformation_l2ProtocolFR2427,
    L2ProtocolInformation_l2ProtocolL2f,
    L2ProtocolInformation_l2ProtocolL2tp,
    L2ProtocolInformation_l2ProtocolPpp,
    L2ProtocolInformation_l2ProtocolPptp,
    L2ProtocolInformation_undefined,
    _decode_L2ProtocolInformation,
    _encode_L2ProtocolInformation,
    _enum_for_L2ProtocolInformation,
    ethernetProtocol,
    l2ProtocolATM2684,
    l2ProtocolFR2427,
    l2ProtocolL2f,
    l2ProtocolL2tp,
    l2ProtocolPpp,
    l2ProtocolPptp,
} from "./L2ProtocolInformation.ta.mjs";

export {
    L2TruncatedDatagram,
    _decode_L2TruncatedDatagram,
    _encode_L2TruncatedDatagram,
    _extension_additions_list_spec_for_L2TruncatedDatagram,
    _root_component_type_list_1_spec_for_L2TruncatedDatagram,
    _root_component_type_list_2_spec_for_L2TruncatedDatagram,
} from "./L2TruncatedDatagram.ta.mjs";

export {
    l2AccessPDUObjId,
} from "./l2AccessPDUObjId.va.mjs";

export {
    l2CCObjId,
} from "./l2CCObjId.va.mjs";

export {
    l2IRIObjId,
} from "./l2IRIObjId.va.mjs";

export {
    l2IRIOnlyObjId,
} from "./l2IRIOnlyObjId.va.mjs";

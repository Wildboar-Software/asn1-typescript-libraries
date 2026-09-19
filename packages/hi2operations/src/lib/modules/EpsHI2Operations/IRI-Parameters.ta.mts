/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    OCTET_STRING,
    OPTIONAL,
    PrintableString,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
// export { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
import { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
// export { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
import { IRI_Parameters_initiator, _decode_IRI_Parameters_initiator, _encode_IRI_Parameters_initiator, _enum_for_IRI_Parameters_initiator } from "../EpsHI2Operations/IRI-Parameters-initiator.ta.mjs";
// export { IRI_Parameters_initiator, _enum_for_IRI_Parameters_initiator, IRI_Parameters_initiator_not_Available /* IMPORTED_LONG_ENUMERATION_ITEM */, not_Available /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_initiator_originating_Target /* IMPORTED_LONG_ENUMERATION_ITEM */, originating_Target /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_initiator_terminating_Target /* IMPORTED_LONG_ENUMERATION_ITEM */, terminating_Target /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_IRI_Parameters_initiator, _encode_IRI_Parameters_initiator } from "../EpsHI2Operations/IRI-Parameters-initiator.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../EpsHI2Operations/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../EpsHI2Operations/Location.ta.mjs";
import { PartyInformation, _decode_PartyInformation, _encode_PartyInformation } from "../HI2Operations/PartyInformation.ta.mjs";
// export { PartyInformation, _decode_PartyInformation, _encode_PartyInformation } from "../HI2Operations/PartyInformation.ta.mjs";
import { SMS_report, _decode_SMS_report, _encode_SMS_report } from "../HI2Operations/SMS-report.ta.mjs";
// export { SMS_report, _decode_SMS_report, _encode_SMS_report } from "../HI2Operations/SMS-report.ta.mjs";
import { National_Parameters, _decode_National_Parameters, _encode_National_Parameters } from "../HI2Operations/National-Parameters.ta.mjs";
// export { National_Parameters, _decode_National_Parameters, _encode_National_Parameters } from "../HI2Operations/National-Parameters.ta.mjs";
import { EPSCorrelationNumber, _decode_EPSCorrelationNumber, _encode_EPSCorrelationNumber } from "../EpsHI2Operations/EPSCorrelationNumber.ta.mjs";
// export { EPSCorrelationNumber, _decode_EPSCorrelationNumber, _encode_EPSCorrelationNumber } from "../EpsHI2Operations/EPSCorrelationNumber.ta.mjs";
import { EPSEvent, _decode_EPSEvent, _encode_EPSEvent, _enum_for_EPSEvent } from "../EpsHI2Operations/EPSEvent.ta.mjs";
// export { EPSEvent, _enum_for_EPSEvent, EPSEvent_pDPContextActivation /* IMPORTED_LONG_ENUMERATION_ITEM */, pDPContextActivation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_startOfInterceptionWithPDPContextActive /* IMPORTED_LONG_ENUMERATION_ITEM */, startOfInterceptionWithPDPContextActive /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_pDPContextDeactivation /* IMPORTED_LONG_ENUMERATION_ITEM */, pDPContextDeactivation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_gPRSAttach /* IMPORTED_LONG_ENUMERATION_ITEM */, gPRSAttach /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_gPRSDetach /* IMPORTED_LONG_ENUMERATION_ITEM */, gPRSDetach /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_locationInfoUpdate /* IMPORTED_LONG_ENUMERATION_ITEM */, locationInfoUpdate /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_sMS /* IMPORTED_LONG_ENUMERATION_ITEM */, sMS /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_pDPContextModification /* IMPORTED_LONG_ENUMERATION_ITEM */, pDPContextModification /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_servingSystem /* IMPORTED_LONG_ENUMERATION_ITEM */, EPSEvent_startOfInterceptionWithMSAttached /* IMPORTED_LONG_ENUMERATION_ITEM */, startOfInterceptionWithMSAttached /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_e_UTRANAttach /* IMPORTED_LONG_ENUMERATION_ITEM */, e_UTRANAttach /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_e_UTRANDetach /* IMPORTED_LONG_ENUMERATION_ITEM */, e_UTRANDetach /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_bearerActivation /* IMPORTED_LONG_ENUMERATION_ITEM */, bearerActivation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_startOfInterceptionWithActiveBearer /* IMPORTED_LONG_ENUMERATION_ITEM */, startOfInterceptionWithActiveBearer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_bearerModification /* IMPORTED_LONG_ENUMERATION_ITEM */, bearerModification /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_bearerDeactivation /* IMPORTED_LONG_ENUMERATION_ITEM */, bearerDeactivation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_uERequestedBearerResourceModification /* IMPORTED_LONG_ENUMERATION_ITEM */, uERequestedBearerResourceModification /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_uERequestedPDNConnectivity /* IMPORTED_LONG_ENUMERATION_ITEM */, uERequestedPDNConnectivity /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_uERequestedPDNDisconnection /* IMPORTED_LONG_ENUMERATION_ITEM */, uERequestedPDNDisconnection /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_trackingAreaEpsLocationUpdate /* IMPORTED_LONG_ENUMERATION_ITEM */, trackingAreaEpsLocationUpdate /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_servingEvolvedPacketSystem /* IMPORTED_LONG_ENUMERATION_ITEM */, servingEvolvedPacketSystem /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_pMIPAttachTunnelActivation /* IMPORTED_LONG_ENUMERATION_ITEM */, pMIPAttachTunnelActivation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_pMIPDetachTunnelDeactivation /* IMPORTED_LONG_ENUMERATION_ITEM */, pMIPDetachTunnelDeactivation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_startOfInterceptWithActivePMIPTunnel /* IMPORTED_LONG_ENUMERATION_ITEM */, startOfInterceptWithActivePMIPTunnel /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_pMIPPdnGwInitiatedPdnDisconnection /* IMPORTED_LONG_ENUMERATION_ITEM */, pMIPPdnGwInitiatedPdnDisconnection /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_mIPRegistrationTunnelActivation /* IMPORTED_LONG_ENUMERATION_ITEM */, mIPRegistrationTunnelActivation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_mIPDeregistrationTunnelDeactivation /* IMPORTED_LONG_ENUMERATION_ITEM */, mIPDeregistrationTunnelDeactivation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_startOfInterceptWithActiveMIPTunnel /* IMPORTED_LONG_ENUMERATION_ITEM */, startOfInterceptWithActiveMIPTunnel /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_dSMIPRegistrationTunnelActivation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSMIPRegistrationTunnelActivation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_dSMIPDeregistrationTunnelDeactivation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSMIPDeregistrationTunnelDeactivation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_startOfInterceptWithActiveDsmipTunnel /* IMPORTED_LONG_ENUMERATION_ITEM */, startOfInterceptWithActiveDsmipTunnel /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_dSMipHaSwitch /* IMPORTED_LONG_ENUMERATION_ITEM */, dSMipHaSwitch /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_pMIPResourceAllocationDeactivation /* IMPORTED_LONG_ENUMERATION_ITEM */, pMIPResourceAllocationDeactivation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_mIPResourceAllocationDeactivation /* IMPORTED_LONG_ENUMERATION_ITEM */, mIPResourceAllocationDeactivation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_pMIPsessionModification /* IMPORTED_LONG_ENUMERATION_ITEM */, pMIPsessionModification /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_startOfInterceptWithEUTRANAttachedUE /* IMPORTED_LONG_ENUMERATION_ITEM */, startOfInterceptWithEUTRANAttachedUE /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_dSMIPSessionModification /* IMPORTED_LONG_ENUMERATION_ITEM */, dSMIPSessionModification /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_packetDataHeaderInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, packetDataHeaderInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_hSS_Subscriber_Record_Change /* IMPORTED_LONG_ENUMERATION_ITEM */, hSS_Subscriber_Record_Change /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_registration_Termination /* IMPORTED_LONG_ENUMERATION_ITEM */, registration_Termination /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_location_Up_Date /* IMPORTED_LONG_ENUMERATION_ITEM */, location_Up_Date /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_cancel_Location /* IMPORTED_LONG_ENUMERATION_ITEM */, cancel_Location /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_register_Location /* IMPORTED_LONG_ENUMERATION_ITEM */, register_Location /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_location_Information_Request /* IMPORTED_LONG_ENUMERATION_ITEM */, location_Information_Request /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_proSeRemoteUEReport /* IMPORTED_LONG_ENUMERATION_ITEM */, proSeRemoteUEReport /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_proSeRemoteUEStartOfCommunication /* IMPORTED_LONG_ENUMERATION_ITEM */, proSeRemoteUEStartOfCommunication /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_proSeRemoteUEEndOfCommunication /* IMPORTED_LONG_ENUMERATION_ITEM */, proSeRemoteUEEndOfCommunication /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_startOfLIwithProSeRemoteUEOngoingComm /* IMPORTED_LONG_ENUMERATION_ITEM */, startOfLIwithProSeRemoteUEOngoingComm /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_startOfLIforProSeUEtoNWRelay /* IMPORTED_LONG_ENUMERATION_ITEM */, startOfLIforProSeUEtoNWRelay /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSEvent_scefRequestednonIPPDNDisconnection /* IMPORTED_LONG_ENUMERATION_ITEM */, scefRequestednonIPPDNDisconnection /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EPSEvent, _encode_EPSEvent } from "../EpsHI2Operations/EPSEvent.ta.mjs";
import { DataNodeAddress, _decode_DataNodeAddress, _encode_DataNodeAddress } from "../HI2Operations/DataNodeAddress.ta.mjs";
// export { DataNodeAddress, _decode_DataNodeAddress, _encode_DataNodeAddress } from "../HI2Operations/DataNodeAddress.ta.mjs";
import { GPRSOperationErrorCode, _decode_GPRSOperationErrorCode, _encode_GPRSOperationErrorCode } from "../EpsHI2Operations/GPRSOperationErrorCode.ta.mjs";
// export { GPRSOperationErrorCode, _decode_GPRSOperationErrorCode, _encode_GPRSOperationErrorCode } from "../EpsHI2Operations/GPRSOperationErrorCode.ta.mjs";
import { UmtsQos, _decode_UmtsQos, _encode_UmtsQos } from "../EpsHI2Operations/UmtsQos.ta.mjs";
// export { UmtsQos, _decode_UmtsQos, _encode_UmtsQos } from "../EpsHI2Operations/UmtsQos.ta.mjs";
import { Network_Identifier, _decode_Network_Identifier, _encode_Network_Identifier } from "../HI2Operations/Network-Identifier.ta.mjs";
// export { Network_Identifier, _decode_Network_Identifier, _encode_Network_Identifier } from "../HI2Operations/Network-Identifier.ta.mjs";
import { IMSevent, _decode_IMSevent, _encode_IMSevent, _enum_for_IMSevent } from "../EpsHI2Operations/IMSevent.ta.mjs";
// export { IMSevent, _enum_for_IMSevent, IMSevent_unfilteredSIPmessage /* IMPORTED_LONG_ENUMERATION_ITEM */, unfilteredSIPmessage /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMSevent_sIPheaderOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, sIPheaderOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMSevent_decryptionKeysAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, decryptionKeysAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMSevent_startOfInterceptionForIMSEstablishedSession /* IMPORTED_LONG_ENUMERATION_ITEM */, startOfInterceptionForIMSEstablishedSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMSevent_xCAPRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, xCAPRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMSevent_xCAPResponse /* IMPORTED_LONG_ENUMERATION_ITEM */, xCAPResponse /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMSevent_ccUnavailable /* IMPORTED_LONG_ENUMERATION_ITEM */, ccUnavailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMSevent_sMSOverIMS /* IMPORTED_LONG_ENUMERATION_ITEM */, sMSOverIMS /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMSevent_servingSystem /* IMPORTED_LONG_ENUMERATION_ITEM */, IMSevent_subscriberRecordChange /* IMPORTED_LONG_ENUMERATION_ITEM */, subscriberRecordChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMSevent_registrationTermination /* IMPORTED_LONG_ENUMERATION_ITEM */, registrationTermination /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMSevent_locationInformationRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, locationInformationRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_IMSevent, _encode_IMSevent } from "../EpsHI2Operations/IMSevent.ta.mjs";
import { LDIevent, _decode_LDIevent, _encode_LDIevent, _enum_for_LDIevent } from "../EpsHI2Operations/LDIevent.ta.mjs";
// export { LDIevent, _enum_for_LDIevent, LDIevent_targetEntersIA /* IMPORTED_LONG_ENUMERATION_ITEM */, targetEntersIA /* IMPORTED_SHORT_ENUMERATION_ITEM */, LDIevent_targetLeavesIA /* IMPORTED_LONG_ENUMERATION_ITEM */, targetLeavesIA /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LDIevent, _encode_LDIevent } from "../EpsHI2Operations/LDIevent.ta.mjs";
import { CorrelationValues, _decode_CorrelationValues, _encode_CorrelationValues } from "../EpsHI2Operations/CorrelationValues.ta.mjs";
// export { CorrelationValues, _decode_CorrelationValues, _encode_CorrelationValues } from "../EpsHI2Operations/CorrelationValues.ta.mjs";
import { EPS_GTPV2_SpecificParameters, _decode_EPS_GTPV2_SpecificParameters, _encode_EPS_GTPV2_SpecificParameters } from "../EpsHI2Operations/EPS-GTPV2-SpecificParameters.ta.mjs";
// export { EPS_GTPV2_SpecificParameters, _decode_EPS_GTPV2_SpecificParameters, _encode_EPS_GTPV2_SpecificParameters } from "../EpsHI2Operations/EPS-GTPV2-SpecificParameters.ta.mjs";
import { EPS_PMIP_SpecificParameters, _decode_EPS_PMIP_SpecificParameters, _encode_EPS_PMIP_SpecificParameters } from "../EpsHI2Operations/EPS-PMIP-SpecificParameters.ta.mjs";
// export { EPS_PMIP_SpecificParameters, _decode_EPS_PMIP_SpecificParameters, _encode_EPS_PMIP_SpecificParameters } from "../EpsHI2Operations/EPS-PMIP-SpecificParameters.ta.mjs";
import { EPS_DSMIP_SpecificParameters, _decode_EPS_DSMIP_SpecificParameters, _encode_EPS_DSMIP_SpecificParameters } from "../EpsHI2Operations/EPS-DSMIP-SpecificParameters.ta.mjs";
// export { EPS_DSMIP_SpecificParameters, _decode_EPS_DSMIP_SpecificParameters, _encode_EPS_DSMIP_SpecificParameters } from "../EpsHI2Operations/EPS-DSMIP-SpecificParameters.ta.mjs";
import { EPS_MIP_SpecificParameters, _decode_EPS_MIP_SpecificParameters, _encode_EPS_MIP_SpecificParameters } from "../EpsHI2Operations/EPS-MIP-SpecificParameters.ta.mjs";
// export { EPS_MIP_SpecificParameters, _decode_EPS_MIP_SpecificParameters, _encode_EPS_MIP_SpecificParameters } from "../EpsHI2Operations/EPS-MIP-SpecificParameters.ta.mjs";
import { MediaDecryption_info, _decode_MediaDecryption_info, _encode_MediaDecryption_info } from "../EpsHI2Operations/MediaDecryption-info.ta.mjs";
// export { MediaDecryption_info, _decode_MediaDecryption_info, _encode_MediaDecryption_info } from "../EpsHI2Operations/MediaDecryption-info.ta.mjs";
import { PacketDataHeaderInformation, _decode_PacketDataHeaderInformation, _encode_PacketDataHeaderInformation } from "../EpsHI2Operations/PacketDataHeaderInformation.ta.mjs";
// export { PacketDataHeaderInformation, _decode_PacketDataHeaderInformation, _encode_PacketDataHeaderInformation } from "../EpsHI2Operations/PacketDataHeaderInformation.ta.mjs";
import { MediaSecFailureIndication, _decode_MediaSecFailureIndication, _encode_MediaSecFailureIndication, _enum_for_MediaSecFailureIndication } from "../EpsHI2Operations/MediaSecFailureIndication.ta.mjs";
// export { MediaSecFailureIndication, _enum_for_MediaSecFailureIndication, MediaSecFailureIndication_genericFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, genericFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MediaSecFailureIndication, _encode_MediaSecFailureIndication } from "../EpsHI2Operations/MediaSecFailureIndication.ta.mjs";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../HI2Operations/IPAddress.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../HI2Operations/IPAddress.ta.mjs";
import { HeNBLocation, _decode_HeNBLocation, _encode_HeNBLocation } from "../EpsHI2Operations/HeNBLocation.ta.mjs";
// export { HeNBLocation, _decode_HeNBLocation, _encode_HeNBLocation } from "../EpsHI2Operations/HeNBLocation.ta.mjs";
import { TunnelProtocol, _decode_TunnelProtocol, _encode_TunnelProtocol } from "../EpsHI2Operations/TunnelProtocol.ta.mjs";
// export { TunnelProtocol, _decode_TunnelProtocol, _encode_TunnelProtocol } from "../EpsHI2Operations/TunnelProtocol.ta.mjs";
import { PANI_Header_Info, _decode_PANI_Header_Info, _encode_PANI_Header_Info } from "../EpsHI2Operations/PANI-Header-Info.ta.mjs";
// export { PANI_Header_Info, _decode_PANI_Header_Info, _encode_PANI_Header_Info } from "../EpsHI2Operations/PANI-Header-Info.ta.mjs";
import { IMS_VoIP_Correlation, _decode_IMS_VoIP_Correlation, _encode_IMS_VoIP_Correlation } from "../EpsHI2Operations/IMS-VoIP-Correlation.ta.mjs";
// export { IMS_VoIP_Correlation, _decode_IMS_VoIP_Correlation, _encode_IMS_VoIP_Correlation } from "../EpsHI2Operations/IMS-VoIP-Correlation.ta.mjs";
import { DataNodeIdentifier, _decode_DataNodeIdentifier, _encode_DataNodeIdentifier } from "../EpsHI2Operations/DataNodeIdentifier.ta.mjs";
// export { DataNodeIdentifier, _decode_DataNodeIdentifier, _encode_DataNodeIdentifier } from "../EpsHI2Operations/DataNodeIdentifier.ta.mjs";
import { Current_Previous_Systems, _decode_Current_Previous_Systems, _encode_Current_Previous_Systems } from "../EpsHI2Operations/Current-Previous-Systems.ta.mjs";
// export { Current_Previous_Systems, _decode_Current_Previous_Systems, _encode_Current_Previous_Systems } from "../EpsHI2Operations/Current-Previous-Systems.ta.mjs";
import { Change_Of_Target_Identity, _decode_Change_Of_Target_Identity, _encode_Change_Of_Target_Identity } from "../EpsHI2Operations/Change-Of-Target-Identity.ta.mjs";
// export { Change_Of_Target_Identity, _decode_Change_Of_Target_Identity, _encode_Change_Of_Target_Identity } from "../EpsHI2Operations/Change-Of-Target-Identity.ta.mjs";
import { Requesting_Node_Type, _decode_Requesting_Node_Type, _encode_Requesting_Node_Type, _enum_for_Requesting_Node_Type } from "../EpsHI2Operations/Requesting-Node-Type.ta.mjs";
// export { Requesting_Node_Type, _enum_for_Requesting_Node_Type, Requesting_Node_Type_mSC /* IMPORTED_LONG_ENUMERATION_ITEM */, mSC /* IMPORTED_SHORT_ENUMERATION_ITEM */, Requesting_Node_Type_sMS_Centre /* IMPORTED_LONG_ENUMERATION_ITEM */, sMS_Centre /* IMPORTED_SHORT_ENUMERATION_ITEM */, Requesting_Node_Type_gMLC /* IMPORTED_LONG_ENUMERATION_ITEM */, gMLC /* IMPORTED_SHORT_ENUMERATION_ITEM */, Requesting_Node_Type_mME /* IMPORTED_LONG_ENUMERATION_ITEM */, mME /* IMPORTED_SHORT_ENUMERATION_ITEM */, Requesting_Node_Type_sGSN /* IMPORTED_LONG_ENUMERATION_ITEM */, sGSN /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Requesting_Node_Type, _encode_Requesting_Node_Type } from "../EpsHI2Operations/Requesting-Node-Type.ta.mjs";
import { ProSeTargetType, _decode_ProSeTargetType, _encode_ProSeTargetType, _enum_for_ProSeTargetType } from "../EpsHI2Operations/ProSeTargetType.ta.mjs";
// export { ProSeTargetType, _enum_for_ProSeTargetType, ProSeTargetType_pRoSeRemoteUE /* IMPORTED_LONG_ENUMERATION_ITEM */, pRoSeRemoteUE /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProSeTargetType_pRoSeUEtoNwRelay /* IMPORTED_LONG_ENUMERATION_ITEM */, pRoSeUEtoNwRelay /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ProSeTargetType, _encode_ProSeTargetType } from "../EpsHI2Operations/ProSeTargetType.ta.mjs";
import { ExtendedLocParameters, _decode_ExtendedLocParameters, _encode_ExtendedLocParameters } from "../UmtsHI2Operations/ExtendedLocParameters.ta.mjs";
// export { ExtendedLocParameters, _decode_ExtendedLocParameters, _encode_ExtendedLocParameters } from "../UmtsHI2Operations/ExtendedLocParameters.ta.mjs";
import { LocationErrorCode, _decode_LocationErrorCode, _encode_LocationErrorCode } from "../UmtsHI2Operations/LocationErrorCode.ta.mjs";
// export { LocationErrorCode, _decode_LocationErrorCode, _encode_LocationErrorCode } from "../UmtsHI2Operations/LocationErrorCode.ta.mjs";
import { DeregistrationReason, _decode_DeregistrationReason, _encode_DeregistrationReason } from "../EpsHI2Operations/DeregistrationReason.ta.mjs";
// export { DeregistrationReason, _decode_DeregistrationReason, _encode_DeregistrationReason } from "../EpsHI2Operations/DeregistrationReason.ta.mjs";
import { VoIPRoamingIndication, _decode_VoIPRoamingIndication, _encode_VoIPRoamingIndication, _enum_for_VoIPRoamingIndication } from "../EpsHI2Operations/VoIPRoamingIndication.ta.mjs";
// export { VoIPRoamingIndication, _enum_for_VoIPRoamingIndication, VoIPRoamingIndication_roamingLBO /* IMPORTED_LONG_ENUMERATION_ITEM */, roamingLBO /* IMPORTED_SHORT_ENUMERATION_ITEM */, VoIPRoamingIndication_roamingS8HR /* IMPORTED_LONG_ENUMERATION_ITEM */, roamingS8HR /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_VoIPRoamingIndication, _encode_VoIPRoamingIndication } from "../EpsHI2Operations/VoIPRoamingIndication.ta.mjs";
import { CSREvent, _decode_CSREvent, _encode_CSREvent, _enum_for_CSREvent } from "../EpsHI2Operations/CSREvent.ta.mjs";
// export { CSREvent, _enum_for_CSREvent, CSREvent_cSREventMessage /* IMPORTED_LONG_ENUMERATION_ITEM */, cSREventMessage /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CSREvent, _encode_CSREvent } from "../EpsHI2Operations/CSREvent.ta.mjs";
import { PTC, _decode_PTC, _encode_PTC } from "../EpsHI2Operations/PTC.ta.mjs";
// export { PTC, _decode_PTC, _encode_PTC } from "../EpsHI2Operations/PTC.ta.mjs";
import { PTCEncryptionInfo, _decode_PTCEncryptionInfo, _encode_PTCEncryptionInfo } from "../EpsHI2Operations/PTCEncryptionInfo.ta.mjs";
// export { PTCEncryptionInfo, _decode_PTCEncryptionInfo, _encode_PTCEncryptionInfo } from "../EpsHI2Operations/PTCEncryptionInfo.ta.mjs";
import { AdditionalCellID, _decode_AdditionalCellID, _encode_AdditionalCellID } from "../EpsHI2Operations/AdditionalCellID.ta.mjs";
// export { AdditionalCellID, _decode_AdditionalCellID, _encode_AdditionalCellID } from "../EpsHI2Operations/AdditionalCellID.ta.mjs";
import { National_HI2_ASN1parameters, _decode_National_HI2_ASN1parameters, _encode_National_HI2_ASN1parameters } from "../HI2Operations/National-HI2-ASN1parameters.ta.mjs";
// export { National_HI2_ASN1parameters, _decode_National_HI2_ASN1parameters, _encode_National_HI2_ASN1parameters } from "../HI2Operations/National-HI2-ASN1parameters.ta.mjs";


/**
 * @summary IRI_Parameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRI-Parameters ::= SEQUENCE
 * {
 *  hi2epsDomainId [0] OBJECT IDENTIFIER, -- 3GPP HI2 EPS domain
 *  lawfulInterceptionIdentifier [1] LawfulInterceptionIdentifier,
 *  -- This identifier is associated to the target.
 *  timeStamp [3] TimeStamp,
 *  -- date and time of the event triggering the report.)
 *  initiator [4] ENUMERATED
 *  {
 *  not-Available (0),
 *  originating-Target (1),
 *  -- in case of GPRS, this indicates that the PDP context activation, modification
 *  -- or deactivation is MS requested
 *  -- in case of EPS, this indicated that the EPS detach, bearer activation, modification
 *  -- or deactivation is UE requested
 *  terminating-Target (2),
 *  -- in case of GPRS, this indicates that the PDP context activation, modification or
 *  -- deactivation is network initiated
 *  -- in case of EPS, this indicated that the EPS detach, bearer activation, modification
 *  -- or deactivation is network initiated
 *  ...
 *  } OPTIONAL,
 *  locationOfTheTarget [8] Location OPTIONAL,
 *  -- location of the target
 *  -- or cell site location
 *  partyInformation [9] SET SIZE (1..10) OF PartyInformation OPTIONAL,
 *  -- This parameter provides the concerned party, the identiy(ies) of the party
 *  --)and all the information provided by the party.
 *  serviceCenterAddress [13] PartyInformation OPTIONAL,
 *  -- e.g. in case of SMS message this parameter provides the address of the relevant
 *  -- server
 *  sMS [14] SMS-report OPTIONAL,
 *  -- this parameter provides the SMS content and associated information
 *  national-Parameters [16] National-Parameters OPTIONAL,
 *  ePSCorrelationNumber [18] EPSCorrelationNumber OPTIONAL,
 *  -- this parameter provides GPRS Correlation number when the event corresponds to UMTS/GPRS.
 *  ePSevent [20] EPSEvent OPTIONAL,
 *  -- This information is used to provide particular action of the target
 *  -- such as attach/detach
 *  sgsnAddress [21] DataNodeAddress OPTIONAL,
 *  gPRSOperationErrorCode [22] GPRSOperationErrorCode OPTIONAL,
 *  ggsnAddress [24] DataNodeAddress OPTIONAL,
 *  qOS [25] UmtsQos OPTIONAL,
 *  networkIdentifier [26] Network-Identifier OPTIONAL,
 *  sMSOriginatingAddress [27] DataNodeAddress OPTIONAL,
 *  sMSTerminatingAddress [28] DataNodeAddress OPTIONAL,
 *  iMSevent [29] IMSevent OPTIONAL,
 *  sIPMessage [30] OCTET STRING OPTIONAL,
 *  servingSGSN-number [31] OCTET STRING (SIZE (1..20)) OPTIONAL,
 *  servingSGSN-address [32] OCTET STRING (SIZE (5..17)) OPTIONAL,
 *  -- Octets are coded according to 3GPP TS 23.003 [25]
 *  ...,
 *  -- Tag [33] was taken into use by ETSI module in TS 101 671v2.13.1
 *  ldiEvent [34] LDIevent OPTIONAL,
 *  correlation [35] CorrelationValues OPTIONAL,
 *  ePS-GTPV2-specificParameters [36] EPS-GTPV2-SpecificParameters OPTIONAL,
 *  -- contains parameters to be used in case of GTPV2 based intercepted messages
 *  ePS-PMIP-specificParameters [37] EPS-PMIP-SpecificParameters OPTIONAL,
 *  -- contains parameters to be used in case of PMIP based intercepted messages
 *  ePS-DSMIP-SpecificParameters [38] EPS-DSMIP-SpecificParameters OPTIONAL,
 *  -- contains parameters to be used in case of DSMIP based intercepted messages
 *  ePS-MIP-SpecificParameters [39] EPS-MIP-SpecificParameters OPTIONAL,
 *  -- contains parameters to be used in case of MIP based intercepted messages
 *  servingNodeAddress [40] OCTET STRING OPTIONAL,
 *  -- this parameter is kept for backward compatibility only and should not be used
 *  -- as it has been superseeded by parameter visitedNetworkId
 *  visitedNetworkId [41] UTF8String OPTIONAL,
 *  -- contains the visited network identifier inside the Serving System Update for
 *  -- non 3GPP access and IMS, coded according to [53] and 3GPP TS 29.229 [96]
 *  mediaDecryption-info [42] MediaDecryption-info OPTIONAL,
 *  servingS4-SGSN-address [43] OCTET STRING OPTIONAL,
 *  -- Diameter Origin-Host and Origin-Realm of the S4-SGSN based on the TS 29.272 [59].
 *  -- Only the data fields from the Diameter AVPs are provided concatenated
 *  -- with a semicolon to populate this field.
 *  sipMessageHeaderOffer [44] OCTET STRING OPTIONAL,
 *  sipMessageHeaderAnswer [45] OCTET STRING OPTIONAL,
 *  sdpOffer [46] OCTET STRING OPTIONAL,
 *  sdpAnswer [47] OCTET STRING OPTIONAL,
 *  uLITimestamp [48] OCTET STRING (SIZE (8)) OPTIONAL,
 *  -- Coded according to 3GPP TS 29.060 [17]; The upper 4 octets shall carry the ULI Timestamp
 *  -- value; The lower 4 octets are undefined and shall be ignored by the receiver
 *  packetDataHeaderInformation [49] PacketDataHeaderInformation OPTIONAL,
 *  mediaSecFailureIndication [50] MediaSecFailureIndication OPTIONAL,
 *  csgIdentity [51] OCTET STRING (SIZE (4)) OPTIONAL, -- Octets are coded
 *  -- according to 3GPP TS 23.003 [25]. The 27 bits specified in TS 23.003 shall be encoded as.
 *  -- follows The most significant bit of the CSG Identity shall be encoded in the most
 *  -- significant bit of the first octet of the octet string and the least significant bit coded
 *  -- in bit 6 of octet 4.
 *  heNBIdentity [52] OCTET STRING OPTIONAL,
 *  -- 4 or 6 octets are coded with the HNBUnique Identity
 *  -- as specified in 3GPP TS 23.003 [25], Clause 4.10.
 *  heNBiPAddress [53] IPAddress OPTIONAL,
 *  heNBLocation [54] HeNBLocation OPTIONAL,
 *  tunnelProtocol [55] TunnelProtocol OPTIONAL,
 *  pANI-Header-Info [56] SEQUENCE OF PANI-Header-Info OPTIONAL,
 *  -- information extracted from P-Access-Network-Info headers of SIP message;
 *  -- described in TS 24.229 §7.2A.4 [76]
 *  imsVoIP [57] IMS-VoIP-Correlation OPTIONAL,
 *  xCAPmessage [58] OCTET STRING OPTIONAL,
 *  -- The HTTP message (HTPP header and any XCAP body) of any of the target's IMS supplementary
 *  -- service setting management or manipulation XCAP messages occuring through the Ut interface
 *  -- defined in the 3GPP TS 24 623 [77].
 *  logicalFunctionInformation [59] DataNodeIdentifier OPTIONAL,
 *  ccUnavailableReason [60] PrintableString OPTIONAL,
 *  carrierSpecificData [61] OCTET STRING OPTIONAL,
 *  -- Copy of raw data specified by the CSP or his vendor related to HSS.
 *  current-previous-systems [62] Current-Previous-Systems OPTIONAL,
 *  change-Of-Target-Identity [63] Change-Of-Target-Identity OPTIONAL,
 *  requesting-Network-Identifier [64] OCTET STRING OPTIONAL,
 *  -- the requesting network identifier PLMN id (Mobile Country Code and Mobile Network Country,
 *  -- defined in E212 [87]).
 *  requesting-Node-Type [65] Requesting-Node-Type OPTIONAL,
 *  serving-System-Identifier [66] OCTET STRING OPTIONAL,
 *  -- the serving network identifier PLMN id (MNC, Mobile Country Code and MNC,Mobile Network
 *  -- Country, defined in E212 [87]) and 3GPP TR 21.905 [38], that may be included in the Diameter
 *  -- AVP to and from the HSS.
 *  proSeTargetType [67] ProSeTargetType OPTIONAL,
 *  proSeRelayMSISDN [68] OCTET STRING (SIZE (1..9)) OPTIONAL,
 *  -- coded according to 3GPP TS 29.274 [46]
 *  proSeRelayIMSI [69] OCTET STRING (SIZE (3..8)) OPTIONAL,
 *  -- coded according to 3GPP TS 29.274 [46]
 *  proSeRelayIMEI [70] OCTET STRING (SIZE (8)) OPTIONAL,
 *  -- coded according to 3GPP TS 29.274 [46]
 *  extendedLocParameters [71] ExtendedLocParameters OPTIONAL, -- LALS extended parameters
 *  locationErrorCode [72] LocationErrorCode OPTIONAL, -- LALS error code
 *  otherIdentities [73] SEQUENCE OF PartyInformation OPTIONAL,
 *  deregistrationReason [74] DeregistrationReason OPTIONAL,
 *  requesting-Node-Identifier [75] OCTET STRING OPTIONAL,
 *  roamingIndication [76] VoIPRoamingIndication OPTIONAL,
 *  -- used for IMS events in the VPLMN.
 *  cSREvent [77] CSREvent OPTIONAL,
 *  ptc [78] PTC OPTIONAL, -- PTC Events
 *  ptcEncryption [79] PTCEncryptionInfo OPTIONAL,
 *  -- PTC Encryption Information
 *  additionalCellIDs [80] SEQUENCE OF AdditionalCellID OPTIONAL,
 *  scefID [81] UTF8String OPTIONAL,
 *  -- SCEF-ID FQDN as defined by TS 29.336 [101], clause 8.4.5 and RFC 3588 [102] section 4.3
 *  national-HI2-ASN1parameters [255] National-HI2-ASN1parameters OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class IRI_Parameters {
    constructor (
        /**
         * @summary `hi2epsDomainId`.
         * @public
         * @readonly
         */
        readonly hi2epsDomainId: OBJECT_IDENTIFIER,
        /**
         * @summary `lawfulInterceptionIdentifier`.
         * @public
         * @readonly
         */
        readonly lawfulInterceptionIdentifier: LawfulInterceptionIdentifier,
        /**
         * @summary `timeStamp`.
         * @public
         * @readonly
         */
        readonly timeStamp: TimeStamp,
        /**
         * @summary `initiator`.
         * @public
         * @readonly
         */
        readonly initiator: OPTIONAL<IRI_Parameters_initiator>,
        /**
         * @summary `locationOfTheTarget`.
         * @public
         * @readonly
         */
        readonly locationOfTheTarget: OPTIONAL<Location>,
        /**
         * @summary `partyInformation`.
         * @public
         * @readonly
         */
        readonly partyInformation: OPTIONAL<PartyInformation[]>,
        /**
         * @summary `serviceCenterAddress`.
         * @public
         * @readonly
         */
        readonly serviceCenterAddress: OPTIONAL<PartyInformation>,
        /**
         * @summary `sMS`.
         * @public
         * @readonly
         */
        readonly sMS: OPTIONAL<SMS_report>,
        /**
         * @summary `national_Parameters`.
         * @public
         * @readonly
         */
        readonly national_Parameters: OPTIONAL<National_Parameters>,
        /**
         * @summary `ePSCorrelationNumber`.
         * @public
         * @readonly
         */
        readonly ePSCorrelationNumber: OPTIONAL<EPSCorrelationNumber>,
        /**
         * @summary `ePSevent`.
         * @public
         * @readonly
         */
        readonly ePSevent: OPTIONAL<EPSEvent>,
        /**
         * @summary `sgsnAddress`.
         * @public
         * @readonly
         */
        readonly sgsnAddress: OPTIONAL<DataNodeAddress>,
        /**
         * @summary `gPRSOperationErrorCode`.
         * @public
         * @readonly
         */
        readonly gPRSOperationErrorCode: OPTIONAL<GPRSOperationErrorCode>,
        /**
         * @summary `ggsnAddress`.
         * @public
         * @readonly
         */
        readonly ggsnAddress: OPTIONAL<DataNodeAddress>,
        /**
         * @summary `qOS`.
         * @public
         * @readonly
         */
        readonly qOS: OPTIONAL<UmtsQos>,
        /**
         * @summary `networkIdentifier`.
         * @public
         * @readonly
         */
        readonly networkIdentifier: OPTIONAL<Network_Identifier>,
        /**
         * @summary `sMSOriginatingAddress`.
         * @public
         * @readonly
         */
        readonly sMSOriginatingAddress: OPTIONAL<DataNodeAddress>,
        /**
         * @summary `sMSTerminatingAddress`.
         * @public
         * @readonly
         */
        readonly sMSTerminatingAddress: OPTIONAL<DataNodeAddress>,
        /**
         * @summary `iMSevent`.
         * @public
         * @readonly
         */
        readonly iMSevent: OPTIONAL<IMSevent>,
        /**
         * @summary `sIPMessage`.
         * @public
         * @readonly
         */
        readonly sIPMessage: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `servingSGSN_number`.
         * @public
         * @readonly
         */
        readonly servingSGSN_number: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `servingSGSN_address`.
         * @public
         * @readonly
         */
        readonly servingSGSN_address: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `ldiEvent`.
         * @public
         * @readonly
         */
        readonly ldiEvent: OPTIONAL<LDIevent>,
        /**
         * @summary `correlation`.
         * @public
         * @readonly
         */
        readonly correlation: OPTIONAL<CorrelationValues>,
        /**
         * @summary `ePS_GTPV2_specificParameters`.
         * @public
         * @readonly
         */
        readonly ePS_GTPV2_specificParameters: OPTIONAL<EPS_GTPV2_SpecificParameters>,
        /**
         * @summary `ePS_PMIP_specificParameters`.
         * @public
         * @readonly
         */
        readonly ePS_PMIP_specificParameters: OPTIONAL<EPS_PMIP_SpecificParameters>,
        /**
         * @summary `ePS_DSMIP_SpecificParameters`.
         * @public
         * @readonly
         */
        readonly ePS_DSMIP_SpecificParameters: OPTIONAL<EPS_DSMIP_SpecificParameters>,
        /**
         * @summary `ePS_MIP_SpecificParameters`.
         * @public
         * @readonly
         */
        readonly ePS_MIP_SpecificParameters: OPTIONAL<EPS_MIP_SpecificParameters>,
        /**
         * @summary `servingNodeAddress`.
         * @public
         * @readonly
         */
        readonly servingNodeAddress: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `visitedNetworkId`.
         * @public
         * @readonly
         */
        readonly visitedNetworkId: OPTIONAL<UTF8String>,
        /**
         * @summary `mediaDecryption_info`.
         * @public
         * @readonly
         */
        readonly mediaDecryption_info: OPTIONAL<MediaDecryption_info>,
        /**
         * @summary `servingS4_SGSN_address`.
         * @public
         * @readonly
         */
        readonly servingS4_SGSN_address: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `sipMessageHeaderOffer`.
         * @public
         * @readonly
         */
        readonly sipMessageHeaderOffer: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `sipMessageHeaderAnswer`.
         * @public
         * @readonly
         */
        readonly sipMessageHeaderAnswer: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `sdpOffer`.
         * @public
         * @readonly
         */
        readonly sdpOffer: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `sdpAnswer`.
         * @public
         * @readonly
         */
        readonly sdpAnswer: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `uLITimestamp`.
         * @public
         * @readonly
         */
        readonly uLITimestamp: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `packetDataHeaderInformation`.
         * @public
         * @readonly
         */
        readonly packetDataHeaderInformation: OPTIONAL<PacketDataHeaderInformation>,
        /**
         * @summary `mediaSecFailureIndication`.
         * @public
         * @readonly
         */
        readonly mediaSecFailureIndication: OPTIONAL<MediaSecFailureIndication>,
        /**
         * @summary `csgIdentity`.
         * @public
         * @readonly
         */
        readonly csgIdentity: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `heNBIdentity`.
         * @public
         * @readonly
         */
        readonly heNBIdentity: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `heNBiPAddress`.
         * @public
         * @readonly
         */
        readonly heNBiPAddress: OPTIONAL<IPAddress>,
        /**
         * @summary `heNBLocation`.
         * @public
         * @readonly
         */
        readonly heNBLocation: OPTIONAL<HeNBLocation>,
        /**
         * @summary `tunnelProtocol`.
         * @public
         * @readonly
         */
        readonly tunnelProtocol: OPTIONAL<TunnelProtocol>,
        /**
         * @summary `pANI_Header_Info`.
         * @public
         * @readonly
         */
        readonly pANI_Header_Info: OPTIONAL<PANI_Header_Info[]>,
        /**
         * @summary `imsVoIP`.
         * @public
         * @readonly
         */
        readonly imsVoIP: OPTIONAL<IMS_VoIP_Correlation>,
        /**
         * @summary `xCAPmessage`.
         * @public
         * @readonly
         */
        readonly xCAPmessage: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `logicalFunctionInformation`.
         * @public
         * @readonly
         */
        readonly logicalFunctionInformation: OPTIONAL<DataNodeIdentifier>,
        /**
         * @summary `ccUnavailableReason`.
         * @public
         * @readonly
         */
        readonly ccUnavailableReason: OPTIONAL<PrintableString>,
        /**
         * @summary `carrierSpecificData`.
         * @public
         * @readonly
         */
        readonly carrierSpecificData: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `current_previous_systems`.
         * @public
         * @readonly
         */
        readonly current_previous_systems: OPTIONAL<Current_Previous_Systems>,
        /**
         * @summary `change_Of_Target_Identity`.
         * @public
         * @readonly
         */
        readonly change_Of_Target_Identity: OPTIONAL<Change_Of_Target_Identity>,
        /**
         * @summary `requesting_Network_Identifier`.
         * @public
         * @readonly
         */
        readonly requesting_Network_Identifier: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `requesting_Node_Type`.
         * @public
         * @readonly
         */
        readonly requesting_Node_Type: OPTIONAL<Requesting_Node_Type>,
        /**
         * @summary `serving_System_Identifier`.
         * @public
         * @readonly
         */
        readonly serving_System_Identifier: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `proSeTargetType`.
         * @public
         * @readonly
         */
        readonly proSeTargetType: OPTIONAL<ProSeTargetType>,
        /**
         * @summary `proSeRelayMSISDN`.
         * @public
         * @readonly
         */
        readonly proSeRelayMSISDN: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `proSeRelayIMSI`.
         * @public
         * @readonly
         */
        readonly proSeRelayIMSI: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `proSeRelayIMEI`.
         * @public
         * @readonly
         */
        readonly proSeRelayIMEI: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `extendedLocParameters`.
         * @public
         * @readonly
         */
        readonly extendedLocParameters: OPTIONAL<ExtendedLocParameters>,
        /**
         * @summary `locationErrorCode`.
         * @public
         * @readonly
         */
        readonly locationErrorCode: OPTIONAL<LocationErrorCode>,
        /**
         * @summary `otherIdentities`.
         * @public
         * @readonly
         */
        readonly otherIdentities: OPTIONAL<PartyInformation[]>,
        /**
         * @summary `deregistrationReason`.
         * @public
         * @readonly
         */
        readonly deregistrationReason: OPTIONAL<DeregistrationReason>,
        /**
         * @summary `requesting_Node_Identifier`.
         * @public
         * @readonly
         */
        readonly requesting_Node_Identifier: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `roamingIndication`.
         * @public
         * @readonly
         */
        readonly roamingIndication: OPTIONAL<VoIPRoamingIndication>,
        /**
         * @summary `cSREvent`.
         * @public
         * @readonly
         */
        readonly cSREvent: OPTIONAL<CSREvent>,
        /**
         * @summary `ptc`.
         * @public
         * @readonly
         */
        readonly ptc: OPTIONAL<PTC>,
        /**
         * @summary `ptcEncryption`.
         * @public
         * @readonly
         */
        readonly ptcEncryption: OPTIONAL<PTCEncryptionInfo>,
        /**
         * @summary `additionalCellIDs`.
         * @public
         * @readonly
         */
        readonly additionalCellIDs: OPTIONAL<AdditionalCellID[]>,
        /**
         * @summary `scefID`.
         * @public
         * @readonly
         */
        readonly scefID: OPTIONAL<UTF8String>,
        /**
         * @summary `national_HI2_ASN1parameters`.
         * @public
         * @readonly
         */
        readonly national_HI2_ASN1parameters: OPTIONAL<National_HI2_ASN1parameters>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IRI_Parameters
     * @description
     * 
     * This takes an `object` and converts it to a `IRI_Parameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IRI_Parameters`.
     * @returns {IRI_Parameters}
     */
    public static _from_object (_o: { [_K in keyof (IRI_Parameters)]: (IRI_Parameters)[_K] }): IRI_Parameters {
        return new IRI_Parameters(_o.hi2epsDomainId, _o.lawfulInterceptionIdentifier, _o.timeStamp, _o.initiator, _o.locationOfTheTarget, _o.partyInformation, _o.serviceCenterAddress, _o.sMS, _o.national_Parameters, _o.ePSCorrelationNumber, _o.ePSevent, _o.sgsnAddress, _o.gPRSOperationErrorCode, _o.ggsnAddress, _o.qOS, _o.networkIdentifier, _o.sMSOriginatingAddress, _o.sMSTerminatingAddress, _o.iMSevent, _o.sIPMessage, _o.servingSGSN_number, _o.servingSGSN_address, _o.ldiEvent, _o.correlation, _o.ePS_GTPV2_specificParameters, _o.ePS_PMIP_specificParameters, _o.ePS_DSMIP_SpecificParameters, _o.ePS_MIP_SpecificParameters, _o.servingNodeAddress, _o.visitedNetworkId, _o.mediaDecryption_info, _o.servingS4_SGSN_address, _o.sipMessageHeaderOffer, _o.sipMessageHeaderAnswer, _o.sdpOffer, _o.sdpAnswer, _o.uLITimestamp, _o.packetDataHeaderInformation, _o.mediaSecFailureIndication, _o.csgIdentity, _o.heNBIdentity, _o.heNBiPAddress, _o.heNBLocation, _o.tunnelProtocol, _o.pANI_Header_Info, _o.imsVoIP, _o.xCAPmessage, _o.logicalFunctionInformation, _o.ccUnavailableReason, _o.carrierSpecificData, _o.current_previous_systems, _o.change_Of_Target_Identity, _o.requesting_Network_Identifier, _o.requesting_Node_Type, _o.serving_System_Identifier, _o.proSeTargetType, _o.proSeRelayMSISDN, _o.proSeRelayIMSI, _o.proSeRelayIMEI, _o.extendedLocParameters, _o.locationErrorCode, _o.otherIdentities, _o.deregistrationReason, _o.requesting_Node_Identifier, _o.roamingIndication, _o.cSREvent, _o.ptc, _o.ptcEncryption, _o.additionalCellIDs, _o.scefID, _o.national_HI2_ASN1parameters, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `initiator`
         * @public
         * @static
         */

    public static _enum_for_initiator = _enum_for_IRI_Parameters_initiator;        /**
         * @summary The enum used as the type of the component `ePSevent`
         * @public
         * @static
         */

    public static _enum_for_ePSevent = _enum_for_EPSEvent;        /**
         * @summary The enum used as the type of the component `iMSevent`
         * @public
         * @static
         */

    public static _enum_for_iMSevent = _enum_for_IMSevent;        /**
         * @summary The enum used as the type of the component `ldiEvent`
         * @public
         * @static
         */

    public static _enum_for_ldiEvent = _enum_for_LDIevent;        /**
         * @summary The enum used as the type of the component `mediaSecFailureIndication`
         * @public
         * @static
         */

    public static _enum_for_mediaSecFailureIndication = _enum_for_MediaSecFailureIndication;        /**
         * @summary The enum used as the type of the component `requesting_Node_Type`
         * @public
         * @static
         */

    public static _enum_for_requesting_Node_Type = _enum_for_Requesting_Node_Type;        /**
         * @summary The enum used as the type of the component `proSeTargetType`
         * @public
         * @static
         */

    public static _enum_for_proSeTargetType = _enum_for_ProSeTargetType;        /**
         * @summary The enum used as the type of the component `roamingIndication`
         * @public
         * @static
         */

    public static _enum_for_roamingIndication = _enum_for_VoIPRoamingIndication;        /**
         * @summary The enum used as the type of the component `cSREvent`
         * @public
         * @static
         */

    public static _enum_for_cSREvent = _enum_for_CSREvent;
}

/**
 * @summary The Leading Root Component Types of IRI_Parameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IRI_Parameters: $.ComponentSpec[] = [
    new $.ComponentSpec("hi2epsDomainId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("lawfulInterceptionIdentifier", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("timeStamp", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("initiator", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("locationOfTheTarget", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("partyInformation", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("serviceCenterAddress", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("sMS", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("national-Parameters", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("ePSCorrelationNumber", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("ePSevent", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("sgsnAddress", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("gPRSOperationErrorCode", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("ggsnAddress", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("qOS", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("networkIdentifier", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("sMSOriginatingAddress", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("sMSTerminatingAddress", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("iMSevent", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("sIPMessage", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("servingSGSN-number", true, $.hasTag(_TagClass.context, 31)),
    new $.ComponentSpec("servingSGSN-address", true, $.hasTag(_TagClass.context, 32))
];

/**
 * @summary The Trailing Root Component Types of IRI_Parameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IRI_Parameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IRI_Parameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IRI_Parameters: $.ComponentSpec[] = [
    new $.ComponentSpec("ldiEvent", true, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("correlation", true, $.hasTag(_TagClass.context, 35)),
    new $.ComponentSpec("ePS-GTPV2-specificParameters", true, $.hasTag(_TagClass.context, 36)),
    new $.ComponentSpec("ePS-PMIP-specificParameters", true, $.hasTag(_TagClass.context, 37)),
    new $.ComponentSpec("ePS-DSMIP-SpecificParameters", true, $.hasTag(_TagClass.context, 38)),
    new $.ComponentSpec("ePS-MIP-SpecificParameters", true, $.hasTag(_TagClass.context, 39)),
    new $.ComponentSpec("servingNodeAddress", true, $.hasTag(_TagClass.context, 40)),
    new $.ComponentSpec("visitedNetworkId", true, $.hasTag(_TagClass.context, 41)),
    new $.ComponentSpec("mediaDecryption-info", true, $.hasTag(_TagClass.context, 42)),
    new $.ComponentSpec("servingS4-SGSN-address", true, $.hasTag(_TagClass.context, 43)),
    new $.ComponentSpec("sipMessageHeaderOffer", true, $.hasTag(_TagClass.context, 44)),
    new $.ComponentSpec("sipMessageHeaderAnswer", true, $.hasTag(_TagClass.context, 45)),
    new $.ComponentSpec("sdpOffer", true, $.hasTag(_TagClass.context, 46)),
    new $.ComponentSpec("sdpAnswer", true, $.hasTag(_TagClass.context, 47)),
    new $.ComponentSpec("uLITimestamp", true, $.hasTag(_TagClass.context, 48)),
    new $.ComponentSpec("packetDataHeaderInformation", true, $.hasTag(_TagClass.context, 49)),
    new $.ComponentSpec("mediaSecFailureIndication", true, $.hasTag(_TagClass.context, 50)),
    new $.ComponentSpec("csgIdentity", true, $.hasTag(_TagClass.context, 51)),
    new $.ComponentSpec("heNBIdentity", true, $.hasTag(_TagClass.context, 52)),
    new $.ComponentSpec("heNBiPAddress", true, $.hasTag(_TagClass.context, 53)),
    new $.ComponentSpec("heNBLocation", true, $.hasTag(_TagClass.context, 54)),
    new $.ComponentSpec("tunnelProtocol", true, $.hasTag(_TagClass.context, 55)),
    new $.ComponentSpec("pANI-Header-Info", true, $.hasTag(_TagClass.context, 56)),
    new $.ComponentSpec("imsVoIP", true, $.hasTag(_TagClass.context, 57)),
    new $.ComponentSpec("xCAPmessage", true, $.hasTag(_TagClass.context, 58)),
    new $.ComponentSpec("logicalFunctionInformation", true, $.hasTag(_TagClass.context, 59)),
    new $.ComponentSpec("ccUnavailableReason", true, $.hasTag(_TagClass.context, 60)),
    new $.ComponentSpec("carrierSpecificData", true, $.hasTag(_TagClass.context, 61)),
    new $.ComponentSpec("current-previous-systems", true, $.hasTag(_TagClass.context, 62)),
    new $.ComponentSpec("change-Of-Target-Identity", true, $.hasTag(_TagClass.context, 63)),
    new $.ComponentSpec("requesting-Network-Identifier", true, $.hasTag(_TagClass.context, 64)),
    new $.ComponentSpec("requesting-Node-Type", true, $.hasTag(_TagClass.context, 65)),
    new $.ComponentSpec("serving-System-Identifier", true, $.hasTag(_TagClass.context, 66)),
    new $.ComponentSpec("proSeTargetType", true, $.hasTag(_TagClass.context, 67)),
    new $.ComponentSpec("proSeRelayMSISDN", true, $.hasTag(_TagClass.context, 68)),
    new $.ComponentSpec("proSeRelayIMSI", true, $.hasTag(_TagClass.context, 69)),
    new $.ComponentSpec("proSeRelayIMEI", true, $.hasTag(_TagClass.context, 70)),
    new $.ComponentSpec("extendedLocParameters", true, $.hasTag(_TagClass.context, 71)),
    new $.ComponentSpec("locationErrorCode", true, $.hasTag(_TagClass.context, 72)),
    new $.ComponentSpec("otherIdentities", true, $.hasTag(_TagClass.context, 73)),
    new $.ComponentSpec("deregistrationReason", true, $.hasTag(_TagClass.context, 74)),
    new $.ComponentSpec("requesting-Node-Identifier", true, $.hasTag(_TagClass.context, 75)),
    new $.ComponentSpec("roamingIndication", true, $.hasTag(_TagClass.context, 76)),
    new $.ComponentSpec("cSREvent", true, $.hasTag(_TagClass.context, 77)),
    new $.ComponentSpec("ptc", true, $.hasTag(_TagClass.context, 78)),
    new $.ComponentSpec("ptcEncryption", true, $.hasTag(_TagClass.context, 79)),
    new $.ComponentSpec("additionalCellIDs", true, $.hasTag(_TagClass.context, 80)),
    new $.ComponentSpec("scefID", true, $.hasTag(_TagClass.context, 81)),
    new $.ComponentSpec("national-HI2-ASN1parameters", true, $.hasTag(_TagClass.context, 255))
];

let _cached_decoder_for_IRI_Parameters: $.ASN1Decoder<IRI_Parameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IRI_Parameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IRI_Parameters (el: _Element): IRI_Parameters {
    if (!_cached_decoder_for_IRI_Parameters) { _cached_decoder_for_IRI_Parameters = function (el: _Element): IRI_Parameters {
    let hi2epsDomainId!: OBJECT_IDENTIFIER;
    let lawfulInterceptionIdentifier!: LawfulInterceptionIdentifier;
    let timeStamp!: TimeStamp;
    let initiator: OPTIONAL<IRI_Parameters_initiator>;
    let locationOfTheTarget: OPTIONAL<Location>;
    let partyInformation: OPTIONAL<PartyInformation[]>;
    let serviceCenterAddress: OPTIONAL<PartyInformation>;
    let sMS: OPTIONAL<SMS_report>;
    let national_Parameters: OPTIONAL<National_Parameters>;
    let ePSCorrelationNumber: OPTIONAL<EPSCorrelationNumber>;
    let ePSevent: OPTIONAL<EPSEvent>;
    let sgsnAddress: OPTIONAL<DataNodeAddress>;
    let gPRSOperationErrorCode: OPTIONAL<GPRSOperationErrorCode>;
    let ggsnAddress: OPTIONAL<DataNodeAddress>;
    let qOS: OPTIONAL<UmtsQos>;
    let networkIdentifier: OPTIONAL<Network_Identifier>;
    let sMSOriginatingAddress: OPTIONAL<DataNodeAddress>;
    let sMSTerminatingAddress: OPTIONAL<DataNodeAddress>;
    let iMSevent: OPTIONAL<IMSevent>;
    let sIPMessage: OPTIONAL<OCTET_STRING>;
    let servingSGSN_number: OPTIONAL<OCTET_STRING>;
    let servingSGSN_address: OPTIONAL<OCTET_STRING>;
    let ldiEvent: OPTIONAL<LDIevent>;
    let correlation: OPTIONAL<CorrelationValues>;
    let ePS_GTPV2_specificParameters: OPTIONAL<EPS_GTPV2_SpecificParameters>;
    let ePS_PMIP_specificParameters: OPTIONAL<EPS_PMIP_SpecificParameters>;
    let ePS_DSMIP_SpecificParameters: OPTIONAL<EPS_DSMIP_SpecificParameters>;
    let ePS_MIP_SpecificParameters: OPTIONAL<EPS_MIP_SpecificParameters>;
    let servingNodeAddress: OPTIONAL<OCTET_STRING>;
    let visitedNetworkId: OPTIONAL<UTF8String>;
    let mediaDecryption_info: OPTIONAL<MediaDecryption_info>;
    let servingS4_SGSN_address: OPTIONAL<OCTET_STRING>;
    let sipMessageHeaderOffer: OPTIONAL<OCTET_STRING>;
    let sipMessageHeaderAnswer: OPTIONAL<OCTET_STRING>;
    let sdpOffer: OPTIONAL<OCTET_STRING>;
    let sdpAnswer: OPTIONAL<OCTET_STRING>;
    let uLITimestamp: OPTIONAL<OCTET_STRING>;
    let packetDataHeaderInformation: OPTIONAL<PacketDataHeaderInformation>;
    let mediaSecFailureIndication: OPTIONAL<MediaSecFailureIndication>;
    let csgIdentity: OPTIONAL<OCTET_STRING>;
    let heNBIdentity: OPTIONAL<OCTET_STRING>;
    let heNBiPAddress: OPTIONAL<IPAddress>;
    let heNBLocation: OPTIONAL<HeNBLocation>;
    let tunnelProtocol: OPTIONAL<TunnelProtocol>;
    let pANI_Header_Info: OPTIONAL<PANI_Header_Info[]>;
    let imsVoIP: OPTIONAL<IMS_VoIP_Correlation>;
    let xCAPmessage: OPTIONAL<OCTET_STRING>;
    let logicalFunctionInformation: OPTIONAL<DataNodeIdentifier>;
    let ccUnavailableReason: OPTIONAL<PrintableString>;
    let carrierSpecificData: OPTIONAL<OCTET_STRING>;
    let current_previous_systems: OPTIONAL<Current_Previous_Systems>;
    let change_Of_Target_Identity: OPTIONAL<Change_Of_Target_Identity>;
    let requesting_Network_Identifier: OPTIONAL<OCTET_STRING>;
    let requesting_Node_Type: OPTIONAL<Requesting_Node_Type>;
    let serving_System_Identifier: OPTIONAL<OCTET_STRING>;
    let proSeTargetType: OPTIONAL<ProSeTargetType>;
    let proSeRelayMSISDN: OPTIONAL<OCTET_STRING>;
    let proSeRelayIMSI: OPTIONAL<OCTET_STRING>;
    let proSeRelayIMEI: OPTIONAL<OCTET_STRING>;
    let extendedLocParameters: OPTIONAL<ExtendedLocParameters>;
    let locationErrorCode: OPTIONAL<LocationErrorCode>;
    let otherIdentities: OPTIONAL<PartyInformation[]>;
    let deregistrationReason: OPTIONAL<DeregistrationReason>;
    let requesting_Node_Identifier: OPTIONAL<OCTET_STRING>;
    let roamingIndication: OPTIONAL<VoIPRoamingIndication>;
    let cSREvent: OPTIONAL<CSREvent>;
    let ptc: OPTIONAL<PTC>;
    let ptcEncryption: OPTIONAL<PTCEncryptionInfo>;
    let additionalCellIDs: OPTIONAL<AdditionalCellID[]>;
    let scefID: OPTIONAL<UTF8String>;
    let national_HI2_ASN1parameters: OPTIONAL<National_HI2_ASN1parameters>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "hi2epsDomainId": (_el: _Element): void => { hi2epsDomainId = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "lawfulInterceptionIdentifier": (_el: _Element): void => { lawfulInterceptionIdentifier = $._decode_implicit<LawfulInterceptionIdentifier>(() => _decode_LawfulInterceptionIdentifier)(_el); },
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_explicit<TimeStamp>(() => _decode_TimeStamp)(_el); },
        "initiator": (_el: _Element): void => { initiator = $._decode_implicit<IRI_Parameters_initiator>(() => _decode_IRI_Parameters_initiator)(_el); },
        "locationOfTheTarget": (_el: _Element): void => { locationOfTheTarget = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "partyInformation": (_el: _Element): void => { partyInformation = $._decode_implicit<PartyInformation[]>(() => $._decodeSetOf<PartyInformation>(() => _decode_PartyInformation))(_el); },
        "serviceCenterAddress": (_el: _Element): void => { serviceCenterAddress = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); },
        "sMS": (_el: _Element): void => { sMS = $._decode_implicit<SMS_report>(() => _decode_SMS_report)(_el); },
        "national-Parameters": (_el: _Element): void => { national_Parameters = $._decode_implicit<National_Parameters>(() => _decode_National_Parameters)(_el); },
        "ePSCorrelationNumber": (_el: _Element): void => { ePSCorrelationNumber = $._decode_implicit<EPSCorrelationNumber>(() => _decode_EPSCorrelationNumber)(_el); },
        "ePSevent": (_el: _Element): void => { ePSevent = $._decode_implicit<EPSEvent>(() => _decode_EPSEvent)(_el); },
        "sgsnAddress": (_el: _Element): void => { sgsnAddress = $._decode_explicit<DataNodeAddress>(() => _decode_DataNodeAddress)(_el); },
        "gPRSOperationErrorCode": (_el: _Element): void => { gPRSOperationErrorCode = $._decode_implicit<GPRSOperationErrorCode>(() => _decode_GPRSOperationErrorCode)(_el); },
        "ggsnAddress": (_el: _Element): void => { ggsnAddress = $._decode_explicit<DataNodeAddress>(() => _decode_DataNodeAddress)(_el); },
        "qOS": (_el: _Element): void => { qOS = $._decode_explicit<UmtsQos>(() => _decode_UmtsQos)(_el); },
        "networkIdentifier": (_el: _Element): void => { networkIdentifier = $._decode_implicit<Network_Identifier>(() => _decode_Network_Identifier)(_el); },
        "sMSOriginatingAddress": (_el: _Element): void => { sMSOriginatingAddress = $._decode_explicit<DataNodeAddress>(() => _decode_DataNodeAddress)(_el); },
        "sMSTerminatingAddress": (_el: _Element): void => { sMSTerminatingAddress = $._decode_explicit<DataNodeAddress>(() => _decode_DataNodeAddress)(_el); },
        "iMSevent": (_el: _Element): void => { iMSevent = $._decode_implicit<IMSevent>(() => _decode_IMSevent)(_el); },
        "sIPMessage": (_el: _Element): void => { sIPMessage = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servingSGSN-number": (_el: _Element): void => { servingSGSN_number = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servingSGSN-address": (_el: _Element): void => { servingSGSN_address = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "ldiEvent": (_el: _Element): void => { ldiEvent = $._decode_implicit<LDIevent>(() => _decode_LDIevent)(_el); },
        "correlation": (_el: _Element): void => { correlation = $._decode_explicit<CorrelationValues>(() => _decode_CorrelationValues)(_el); },
        "ePS-GTPV2-specificParameters": (_el: _Element): void => { ePS_GTPV2_specificParameters = $._decode_implicit<EPS_GTPV2_SpecificParameters>(() => _decode_EPS_GTPV2_SpecificParameters)(_el); },
        "ePS-PMIP-specificParameters": (_el: _Element): void => { ePS_PMIP_specificParameters = $._decode_implicit<EPS_PMIP_SpecificParameters>(() => _decode_EPS_PMIP_SpecificParameters)(_el); },
        "ePS-DSMIP-SpecificParameters": (_el: _Element): void => { ePS_DSMIP_SpecificParameters = $._decode_implicit<EPS_DSMIP_SpecificParameters>(() => _decode_EPS_DSMIP_SpecificParameters)(_el); },
        "ePS-MIP-SpecificParameters": (_el: _Element): void => { ePS_MIP_SpecificParameters = $._decode_implicit<EPS_MIP_SpecificParameters>(() => _decode_EPS_MIP_SpecificParameters)(_el); },
        "servingNodeAddress": (_el: _Element): void => { servingNodeAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "visitedNetworkId": (_el: _Element): void => { visitedNetworkId = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "mediaDecryption-info": (_el: _Element): void => { mediaDecryption_info = $._decode_implicit<MediaDecryption_info>(() => _decode_MediaDecryption_info)(_el); },
        "servingS4-SGSN-address": (_el: _Element): void => { servingS4_SGSN_address = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sipMessageHeaderOffer": (_el: _Element): void => { sipMessageHeaderOffer = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sipMessageHeaderAnswer": (_el: _Element): void => { sipMessageHeaderAnswer = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sdpOffer": (_el: _Element): void => { sdpOffer = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sdpAnswer": (_el: _Element): void => { sdpAnswer = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "uLITimestamp": (_el: _Element): void => { uLITimestamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "packetDataHeaderInformation": (_el: _Element): void => { packetDataHeaderInformation = $._decode_explicit<PacketDataHeaderInformation>(() => _decode_PacketDataHeaderInformation)(_el); },
        "mediaSecFailureIndication": (_el: _Element): void => { mediaSecFailureIndication = $._decode_implicit<MediaSecFailureIndication>(() => _decode_MediaSecFailureIndication)(_el); },
        "csgIdentity": (_el: _Element): void => { csgIdentity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "heNBIdentity": (_el: _Element): void => { heNBIdentity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "heNBiPAddress": (_el: _Element): void => { heNBiPAddress = $._decode_implicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "heNBLocation": (_el: _Element): void => { heNBLocation = $._decode_implicit<HeNBLocation>(() => _decode_HeNBLocation)(_el); },
        "tunnelProtocol": (_el: _Element): void => { tunnelProtocol = $._decode_explicit<TunnelProtocol>(() => _decode_TunnelProtocol)(_el); },
        "pANI-Header-Info": (_el: _Element): void => { pANI_Header_Info = $._decode_implicit<PANI_Header_Info[]>(() => $._decodeSequenceOf<PANI_Header_Info>(() => _decode_PANI_Header_Info))(_el); },
        "imsVoIP": (_el: _Element): void => { imsVoIP = $._decode_implicit<IMS_VoIP_Correlation>(() => _decode_IMS_VoIP_Correlation)(_el); },
        "xCAPmessage": (_el: _Element): void => { xCAPmessage = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "logicalFunctionInformation": (_el: _Element): void => { logicalFunctionInformation = $._decode_implicit<DataNodeIdentifier>(() => _decode_DataNodeIdentifier)(_el); },
        "ccUnavailableReason": (_el: _Element): void => { ccUnavailableReason = $._decode_implicit<PrintableString>(() => $._decodePrintableString)(_el); },
        "carrierSpecificData": (_el: _Element): void => { carrierSpecificData = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "current-previous-systems": (_el: _Element): void => { current_previous_systems = $._decode_implicit<Current_Previous_Systems>(() => _decode_Current_Previous_Systems)(_el); },
        "change-Of-Target-Identity": (_el: _Element): void => { change_Of_Target_Identity = $._decode_implicit<Change_Of_Target_Identity>(() => _decode_Change_Of_Target_Identity)(_el); },
        "requesting-Network-Identifier": (_el: _Element): void => { requesting_Network_Identifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "requesting-Node-Type": (_el: _Element): void => { requesting_Node_Type = $._decode_implicit<Requesting_Node_Type>(() => _decode_Requesting_Node_Type)(_el); },
        "serving-System-Identifier": (_el: _Element): void => { serving_System_Identifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "proSeTargetType": (_el: _Element): void => { proSeTargetType = $._decode_implicit<ProSeTargetType>(() => _decode_ProSeTargetType)(_el); },
        "proSeRelayMSISDN": (_el: _Element): void => { proSeRelayMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "proSeRelayIMSI": (_el: _Element): void => { proSeRelayIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "proSeRelayIMEI": (_el: _Element): void => { proSeRelayIMEI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "extendedLocParameters": (_el: _Element): void => { extendedLocParameters = $._decode_implicit<ExtendedLocParameters>(() => _decode_ExtendedLocParameters)(_el); },
        "locationErrorCode": (_el: _Element): void => { locationErrorCode = $._decode_implicit<LocationErrorCode>(() => _decode_LocationErrorCode)(_el); },
        "otherIdentities": (_el: _Element): void => { otherIdentities = $._decode_implicit<PartyInformation[]>(() => $._decodeSequenceOf<PartyInformation>(() => _decode_PartyInformation))(_el); },
        "deregistrationReason": (_el: _Element): void => { deregistrationReason = $._decode_explicit<DeregistrationReason>(() => _decode_DeregistrationReason)(_el); },
        "requesting-Node-Identifier": (_el: _Element): void => { requesting_Node_Identifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "roamingIndication": (_el: _Element): void => { roamingIndication = $._decode_implicit<VoIPRoamingIndication>(() => _decode_VoIPRoamingIndication)(_el); },
        "cSREvent": (_el: _Element): void => { cSREvent = $._decode_implicit<CSREvent>(() => _decode_CSREvent)(_el); },
        "ptc": (_el: _Element): void => { ptc = $._decode_implicit<PTC>(() => _decode_PTC)(_el); },
        "ptcEncryption": (_el: _Element): void => { ptcEncryption = $._decode_implicit<PTCEncryptionInfo>(() => _decode_PTCEncryptionInfo)(_el); },
        "additionalCellIDs": (_el: _Element): void => { additionalCellIDs = $._decode_implicit<AdditionalCellID[]>(() => $._decodeSequenceOf<AdditionalCellID>(() => _decode_AdditionalCellID))(_el); },
        "scefID": (_el: _Element): void => { scefID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "national-HI2-ASN1parameters": (_el: _Element): void => { national_HI2_ASN1parameters = $._decode_implicit<National_HI2_ASN1parameters>(() => _decode_National_HI2_ASN1parameters)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IRI_Parameters,
        _extension_additions_list_spec_for_IRI_Parameters,
        _root_component_type_list_2_spec_for_IRI_Parameters,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IRI_Parameters(
        hi2epsDomainId,
        lawfulInterceptionIdentifier,
        timeStamp,
        initiator,
        locationOfTheTarget,
        partyInformation,
        serviceCenterAddress,
        sMS,
        national_Parameters,
        ePSCorrelationNumber,
        ePSevent,
        sgsnAddress,
        gPRSOperationErrorCode,
        ggsnAddress,
        qOS,
        networkIdentifier,
        sMSOriginatingAddress,
        sMSTerminatingAddress,
        iMSevent,
        sIPMessage,
        servingSGSN_number,
        servingSGSN_address,
        ldiEvent,
        correlation,
        ePS_GTPV2_specificParameters,
        ePS_PMIP_specificParameters,
        ePS_DSMIP_SpecificParameters,
        ePS_MIP_SpecificParameters,
        servingNodeAddress,
        visitedNetworkId,
        mediaDecryption_info,
        servingS4_SGSN_address,
        sipMessageHeaderOffer,
        sipMessageHeaderAnswer,
        sdpOffer,
        sdpAnswer,
        uLITimestamp,
        packetDataHeaderInformation,
        mediaSecFailureIndication,
        csgIdentity,
        heNBIdentity,
        heNBiPAddress,
        heNBLocation,
        tunnelProtocol,
        pANI_Header_Info,
        imsVoIP,
        xCAPmessage,
        logicalFunctionInformation,
        ccUnavailableReason,
        carrierSpecificData,
        current_previous_systems,
        change_Of_Target_Identity,
        requesting_Network_Identifier,
        requesting_Node_Type,
        serving_System_Identifier,
        proSeTargetType,
        proSeRelayMSISDN,
        proSeRelayIMSI,
        proSeRelayIMEI,
        extendedLocParameters,
        locationErrorCode,
        otherIdentities,
        deregistrationReason,
        requesting_Node_Identifier,
        roamingIndication,
        cSREvent,
        ptc,
        ptcEncryption,
        additionalCellIDs,
        scefID,
        national_HI2_ASN1parameters,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IRI_Parameters(el);
}

let _cached_encoder_for_IRI_Parameters: $.ASN1Encoder<IRI_Parameters> | null = null;

/**
 * @summary Encodes a(n) IRI_Parameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IRI_Parameters, encoded as an ASN.1 Element.
 */
export
function _encode_IRI_Parameters (value: IRI_Parameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IRI_Parameters) { _cached_encoder_for_IRI_Parameters = function (value: IRI_Parameters, elGetter: $.ASN1Encoder<IRI_Parameters>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.hi2epsDomainId, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_LawfulInterceptionIdentifier, $.BER)(value.lawfulInterceptionIdentifier, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_TimeStamp, $.BER)(value.timeStamp, $.BER),
            /* IF_ABSENT  */ ((value.initiator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_IRI_Parameters_initiator, $.BER)(value.initiator, $.BER)),
            /* IF_ABSENT  */ ((value.locationOfTheTarget === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_Location, $.BER)(value.locationOfTheTarget, $.BER)),
            /* IF_ABSENT  */ ((value.partyInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeSetOf<PartyInformation>(() => _encode_PartyInformation, $.BER), $.BER)(value.partyInformation, $.BER)),
            /* IF_ABSENT  */ ((value.serviceCenterAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_PartyInformation, $.BER)(value.serviceCenterAddress, $.BER)),
            /* IF_ABSENT  */ ((value.sMS === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_SMS_report, $.BER)(value.sMS, $.BER)),
            /* IF_ABSENT  */ ((value.national_Parameters === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_National_Parameters, $.BER)(value.national_Parameters, $.BER)),
            /* IF_ABSENT  */ ((value.ePSCorrelationNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => _encode_EPSCorrelationNumber, $.BER)(value.ePSCorrelationNumber, $.BER)),
            /* IF_ABSENT  */ ((value.ePSevent === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => _encode_EPSEvent, $.BER)(value.ePSevent, $.BER)),
            /* IF_ABSENT  */ ((value.sgsnAddress === undefined) ? undefined : $._encode_explicit(_TagClass.context, 21, () => _encode_DataNodeAddress, $.BER)(value.sgsnAddress, $.BER)),
            /* IF_ABSENT  */ ((value.gPRSOperationErrorCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 22, () => _encode_GPRSOperationErrorCode, $.BER)(value.gPRSOperationErrorCode, $.BER)),
            /* IF_ABSENT  */ ((value.ggsnAddress === undefined) ? undefined : $._encode_explicit(_TagClass.context, 24, () => _encode_DataNodeAddress, $.BER)(value.ggsnAddress, $.BER)),
            /* IF_ABSENT  */ ((value.qOS === undefined) ? undefined : $._encode_explicit(_TagClass.context, 25, () => _encode_UmtsQos, $.BER)(value.qOS, $.BER)),
            /* IF_ABSENT  */ ((value.networkIdentifier === undefined) ? undefined : $._encode_implicit(_TagClass.context, 26, () => _encode_Network_Identifier, $.BER)(value.networkIdentifier, $.BER)),
            /* IF_ABSENT  */ ((value.sMSOriginatingAddress === undefined) ? undefined : $._encode_explicit(_TagClass.context, 27, () => _encode_DataNodeAddress, $.BER)(value.sMSOriginatingAddress, $.BER)),
            /* IF_ABSENT  */ ((value.sMSTerminatingAddress === undefined) ? undefined : $._encode_explicit(_TagClass.context, 28, () => _encode_DataNodeAddress, $.BER)(value.sMSTerminatingAddress, $.BER)),
            /* IF_ABSENT  */ ((value.iMSevent === undefined) ? undefined : $._encode_implicit(_TagClass.context, 29, () => _encode_IMSevent, $.BER)(value.iMSevent, $.BER)),
            /* IF_ABSENT  */ ((value.sIPMessage === undefined) ? undefined : $._encode_implicit(_TagClass.context, 30, () => $._encodeOctetString, $.BER)(value.sIPMessage, $.BER)),
            /* IF_ABSENT  */ ((value.servingSGSN_number === undefined) ? undefined : $._encode_implicit(_TagClass.context, 31, () => $._encodeOctetString, $.BER)(value.servingSGSN_number, $.BER)),
            /* IF_ABSENT  */ ((value.servingSGSN_address === undefined) ? undefined : $._encode_implicit(_TagClass.context, 32, () => $._encodeOctetString, $.BER)(value.servingSGSN_address, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.ldiEvent === undefined) ? undefined : $._encode_implicit(_TagClass.context, 34, () => _encode_LDIevent, $.BER)(value.ldiEvent, $.BER)),
            /* IF_ABSENT  */ ((value.correlation === undefined) ? undefined : $._encode_explicit(_TagClass.context, 35, () => _encode_CorrelationValues, $.BER)(value.correlation, $.BER)),
            /* IF_ABSENT  */ ((value.ePS_GTPV2_specificParameters === undefined) ? undefined : $._encode_implicit(_TagClass.context, 36, () => _encode_EPS_GTPV2_SpecificParameters, $.BER)(value.ePS_GTPV2_specificParameters, $.BER)),
            /* IF_ABSENT  */ ((value.ePS_PMIP_specificParameters === undefined) ? undefined : $._encode_implicit(_TagClass.context, 37, () => _encode_EPS_PMIP_SpecificParameters, $.BER)(value.ePS_PMIP_specificParameters, $.BER)),
            /* IF_ABSENT  */ ((value.ePS_DSMIP_SpecificParameters === undefined) ? undefined : $._encode_implicit(_TagClass.context, 38, () => _encode_EPS_DSMIP_SpecificParameters, $.BER)(value.ePS_DSMIP_SpecificParameters, $.BER)),
            /* IF_ABSENT  */ ((value.ePS_MIP_SpecificParameters === undefined) ? undefined : $._encode_implicit(_TagClass.context, 39, () => _encode_EPS_MIP_SpecificParameters, $.BER)(value.ePS_MIP_SpecificParameters, $.BER)),
            /* IF_ABSENT  */ ((value.servingNodeAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 40, () => $._encodeOctetString, $.BER)(value.servingNodeAddress, $.BER)),
            /* IF_ABSENT  */ ((value.visitedNetworkId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 41, () => $._encodeUTF8String, $.BER)(value.visitedNetworkId, $.BER)),
            /* IF_ABSENT  */ ((value.mediaDecryption_info === undefined) ? undefined : $._encode_implicit(_TagClass.context, 42, () => _encode_MediaDecryption_info, $.BER)(value.mediaDecryption_info, $.BER)),
            /* IF_ABSENT  */ ((value.servingS4_SGSN_address === undefined) ? undefined : $._encode_implicit(_TagClass.context, 43, () => $._encodeOctetString, $.BER)(value.servingS4_SGSN_address, $.BER)),
            /* IF_ABSENT  */ ((value.sipMessageHeaderOffer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 44, () => $._encodeOctetString, $.BER)(value.sipMessageHeaderOffer, $.BER)),
            /* IF_ABSENT  */ ((value.sipMessageHeaderAnswer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 45, () => $._encodeOctetString, $.BER)(value.sipMessageHeaderAnswer, $.BER)),
            /* IF_ABSENT  */ ((value.sdpOffer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 46, () => $._encodeOctetString, $.BER)(value.sdpOffer, $.BER)),
            /* IF_ABSENT  */ ((value.sdpAnswer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 47, () => $._encodeOctetString, $.BER)(value.sdpAnswer, $.BER)),
            /* IF_ABSENT  */ ((value.uLITimestamp === undefined) ? undefined : $._encode_implicit(_TagClass.context, 48, () => $._encodeOctetString, $.BER)(value.uLITimestamp, $.BER)),
            /* IF_ABSENT  */ ((value.packetDataHeaderInformation === undefined) ? undefined : $._encode_explicit(_TagClass.context, 49, () => _encode_PacketDataHeaderInformation, $.BER)(value.packetDataHeaderInformation, $.BER)),
            /* IF_ABSENT  */ ((value.mediaSecFailureIndication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 50, () => _encode_MediaSecFailureIndication, $.BER)(value.mediaSecFailureIndication, $.BER)),
            /* IF_ABSENT  */ ((value.csgIdentity === undefined) ? undefined : $._encode_implicit(_TagClass.context, 51, () => $._encodeOctetString, $.BER)(value.csgIdentity, $.BER)),
            /* IF_ABSENT  */ ((value.heNBIdentity === undefined) ? undefined : $._encode_implicit(_TagClass.context, 52, () => $._encodeOctetString, $.BER)(value.heNBIdentity, $.BER)),
            /* IF_ABSENT  */ ((value.heNBiPAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 53, () => _encode_IPAddress, $.BER)(value.heNBiPAddress, $.BER)),
            /* IF_ABSENT  */ ((value.heNBLocation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 54, () => _encode_HeNBLocation, $.BER)(value.heNBLocation, $.BER)),
            /* IF_ABSENT  */ ((value.tunnelProtocol === undefined) ? undefined : $._encode_explicit(_TagClass.context, 55, () => _encode_TunnelProtocol, $.BER)(value.tunnelProtocol, $.BER)),
            /* IF_ABSENT  */ ((value.pANI_Header_Info === undefined) ? undefined : $._encode_implicit(_TagClass.context, 56, () => $._encodeSequenceOf<PANI_Header_Info>(() => _encode_PANI_Header_Info, $.BER), $.BER)(value.pANI_Header_Info, $.BER)),
            /* IF_ABSENT  */ ((value.imsVoIP === undefined) ? undefined : $._encode_implicit(_TagClass.context, 57, () => _encode_IMS_VoIP_Correlation, $.BER)(value.imsVoIP, $.BER)),
            /* IF_ABSENT  */ ((value.xCAPmessage === undefined) ? undefined : $._encode_implicit(_TagClass.context, 58, () => $._encodeOctetString, $.BER)(value.xCAPmessage, $.BER)),
            /* IF_ABSENT  */ ((value.logicalFunctionInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 59, () => _encode_DataNodeIdentifier, $.BER)(value.logicalFunctionInformation, $.BER)),
            /* IF_ABSENT  */ ((value.ccUnavailableReason === undefined) ? undefined : $._encode_implicit(_TagClass.context, 60, () => $._encodePrintableString, $.BER)(value.ccUnavailableReason, $.BER)),
            /* IF_ABSENT  */ ((value.carrierSpecificData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 61, () => $._encodeOctetString, $.BER)(value.carrierSpecificData, $.BER)),
            /* IF_ABSENT  */ ((value.current_previous_systems === undefined) ? undefined : $._encode_implicit(_TagClass.context, 62, () => _encode_Current_Previous_Systems, $.BER)(value.current_previous_systems, $.BER)),
            /* IF_ABSENT  */ ((value.change_Of_Target_Identity === undefined) ? undefined : $._encode_implicit(_TagClass.context, 63, () => _encode_Change_Of_Target_Identity, $.BER)(value.change_Of_Target_Identity, $.BER)),
            /* IF_ABSENT  */ ((value.requesting_Network_Identifier === undefined) ? undefined : $._encode_implicit(_TagClass.context, 64, () => $._encodeOctetString, $.BER)(value.requesting_Network_Identifier, $.BER)),
            /* IF_ABSENT  */ ((value.requesting_Node_Type === undefined) ? undefined : $._encode_implicit(_TagClass.context, 65, () => _encode_Requesting_Node_Type, $.BER)(value.requesting_Node_Type, $.BER)),
            /* IF_ABSENT  */ ((value.serving_System_Identifier === undefined) ? undefined : $._encode_implicit(_TagClass.context, 66, () => $._encodeOctetString, $.BER)(value.serving_System_Identifier, $.BER)),
            /* IF_ABSENT  */ ((value.proSeTargetType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 67, () => _encode_ProSeTargetType, $.BER)(value.proSeTargetType, $.BER)),
            /* IF_ABSENT  */ ((value.proSeRelayMSISDN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 68, () => $._encodeOctetString, $.BER)(value.proSeRelayMSISDN, $.BER)),
            /* IF_ABSENT  */ ((value.proSeRelayIMSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 69, () => $._encodeOctetString, $.BER)(value.proSeRelayIMSI, $.BER)),
            /* IF_ABSENT  */ ((value.proSeRelayIMEI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 70, () => $._encodeOctetString, $.BER)(value.proSeRelayIMEI, $.BER)),
            /* IF_ABSENT  */ ((value.extendedLocParameters === undefined) ? undefined : $._encode_implicit(_TagClass.context, 71, () => _encode_ExtendedLocParameters, $.BER)(value.extendedLocParameters, $.BER)),
            /* IF_ABSENT  */ ((value.locationErrorCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 72, () => _encode_LocationErrorCode, $.BER)(value.locationErrorCode, $.BER)),
            /* IF_ABSENT  */ ((value.otherIdentities === undefined) ? undefined : $._encode_implicit(_TagClass.context, 73, () => $._encodeSequenceOf<PartyInformation>(() => _encode_PartyInformation, $.BER), $.BER)(value.otherIdentities, $.BER)),
            /* IF_ABSENT  */ ((value.deregistrationReason === undefined) ? undefined : $._encode_explicit(_TagClass.context, 74, () => _encode_DeregistrationReason, $.BER)(value.deregistrationReason, $.BER)),
            /* IF_ABSENT  */ ((value.requesting_Node_Identifier === undefined) ? undefined : $._encode_implicit(_TagClass.context, 75, () => $._encodeOctetString, $.BER)(value.requesting_Node_Identifier, $.BER)),
            /* IF_ABSENT  */ ((value.roamingIndication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 76, () => _encode_VoIPRoamingIndication, $.BER)(value.roamingIndication, $.BER)),
            /* IF_ABSENT  */ ((value.cSREvent === undefined) ? undefined : $._encode_implicit(_TagClass.context, 77, () => _encode_CSREvent, $.BER)(value.cSREvent, $.BER)),
            /* IF_ABSENT  */ ((value.ptc === undefined) ? undefined : $._encode_implicit(_TagClass.context, 78, () => _encode_PTC, $.BER)(value.ptc, $.BER)),
            /* IF_ABSENT  */ ((value.ptcEncryption === undefined) ? undefined : $._encode_implicit(_TagClass.context, 79, () => _encode_PTCEncryptionInfo, $.BER)(value.ptcEncryption, $.BER)),
            /* IF_ABSENT  */ ((value.additionalCellIDs === undefined) ? undefined : $._encode_implicit(_TagClass.context, 80, () => $._encodeSequenceOf<AdditionalCellID>(() => _encode_AdditionalCellID, $.BER), $.BER)(value.additionalCellIDs, $.BER)),
            /* IF_ABSENT  */ ((value.scefID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 81, () => $._encodeUTF8String, $.BER)(value.scefID, $.BER)),
            /* IF_ABSENT  */ ((value.national_HI2_ASN1parameters === undefined) ? undefined : $._encode_implicit(_TagClass.context, 255, () => _encode_National_HI2_ASN1parameters, $.BER)(value.national_HI2_ASN1parameters, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IRI_Parameters(value, elGetter);
}


/* eslint-enable */

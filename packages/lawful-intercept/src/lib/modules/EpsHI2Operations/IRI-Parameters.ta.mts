/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    OCTET_STRING,
    OPTIONAL,
    PrintableString,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
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
import { PartyInformation, _decode_PartyInformation, _encode_PartyInformation } from "../EpsHI2Operations/PartyInformation.ta.mjs";
// export { PartyInformation, _decode_PartyInformation, _encode_PartyInformation } from "../EpsHI2Operations/PartyInformation.ta.mjs";
import { SMS_report, _decode_SMS_report, _encode_SMS_report } from "../EpsHI2Operations/SMS-report.ta.mjs";
// export { SMS_report, _decode_SMS_report, _encode_SMS_report } from "../EpsHI2Operations/SMS-report.ta.mjs";
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
 * Parameters of one HI2 record for EPS, and for the other services this module
 * also carries (annex B.9).
 * 
 * Clause 10.5.1 states, per EPS event, which parameters are mandatory,
 * conditional, or optional. Stage 2 inclusion overrides a syntactic omission
 * (clause 10.5.1.0). The LIID is in every record sent to the LEMF (table 10.5.2
 * note 2). A timestamp from the intercepting node's clock is mandatory on the
 * EPS event records (clause 10.2.1).
 * 
 * The same record carries IMS IRI (clause 7.5), PTC IRI (clause 17), ProSe
 * remote-UE IRI (clause 13.3, which requires annex B.9), a cell-site report
 * (clause 16.4), and packet-domain IRI when clause 6.5.1 uses this HI2 or
 * clause 10.0 applies Gn/Gp behaviour to the PDN-GW.
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRI-Parameters ::= SEQUENCE
 * {
 *     hi2epsDomainId                [0]    OBJECT IDENTIFIER,  -- 3GPP HI2 EPS domain
 *     lawfulInterceptionIdentifier    [1] LawfulInterceptionIdentifier,
 *         -- This identifier is associated to the target.
 *     timeStamp                [3] TimeStamp,
 *         -- date and time of the event triggering the report.)
 *     initiator                 [4] ENUMERATED
 *     {
 *         not-Available        (0),
 *         originating-Target    (1),
 *             -- in case of GPRS, this indicates that the PDP context activation, modification
 *             -- or deactivation is MS requested
 *             -- in case of EPS, this indicated that the EPS detach, bearer activation, modification
 *             -- or deactivation is UE requested
 *         terminating-Target    (2),
 *             -- in case of GPRS, this indicates that the PDP context activation, modification or
 *             -- deactivation is network initiated
 *             -- in case of EPS, this indicated that the EPS detach, bearer activation, modification
 *             -- or deactivation is network initiated
 *     ...
 *     } OPTIONAL,
 * 
 *     locationOfTheTarget        [8] Location OPTIONAL,
 *         -- location of the target
 *         -- or cell site location
 *     partyInformation         [9] SET SIZE (1..10) OF PartyInformation OPTIONAL,
 *         -- This parameter provides the concerned party, the identiy(ies) of the party
 *         --)and all the information provided by the party.
 * 
 *     serviceCenterAddress    [13] PartyInformation OPTIONAL,
 *         -- e.g. in case of SMS message this parameter provides the address of  the relevant
 *         -- server
 *     sMS                        [14] SMS-report OPTIONAL,
 *         -- this parameter provides the SMS content and associated information
 * 
 *     national-Parameters        [16] National-Parameters OPTIONAL,
 *     ePSCorrelationNumber    [18] EPSCorrelationNumber OPTIONAL,
 *         -- this parameter provides GPRS Correlation number when the event corresponds to UMTS/GPRS.
 *     ePSevent                 [20] EPSEvent OPTIONAL,
 *         -- This information is used to provide particular action of the target
 *         -- such as attach/detach
 *     sgsnAddress             [21] DataNodeAddress OPTIONAL,
 *     gPRSOperationErrorCode     [22] GPRSOperationErrorCode OPTIONAL,
 *     ggsnAddress             [24] DataNodeAddress OPTIONAL,
 *     qOS                        [25] UmtsQos OPTIONAL,
 *     networkIdentifier        [26] Network-Identifier OPTIONAL,
 *     sMSOriginatingAddress     [27] DataNodeAddress OPTIONAL,
 *     sMSTerminatingAddress     [28] DataNodeAddress OPTIONAL,
 *     iMSevent                [29] IMSevent OPTIONAL,
 *     sIPMessage                [30] OCTET STRING  OPTIONAL,
 *     servingSGSN-number        [31] OCTET STRING (SIZE (1..20))    OPTIONAL,
 *     servingSGSN-address        [32] OCTET STRING (SIZE (5..17))     OPTIONAL,
 *                                 -- Octets are coded according to 3GPP TS 23.003 [25]
 *     ...,
 *              -- Tag            [33] was taken into use by ETSI module in TS 101 671v2.13.1
 *     ldiEvent                 [34] LDIevent OPTIONAL,
 *     correlation             [35] CorrelationValues OPTIONAL,
 *     ePS-GTPV2-specificParameters   [36] EPS-GTPV2-SpecificParameters OPTIONAL,
 *          -- contains parameters to be used in case of GTPV2 based intercepted messages
 *     ePS-PMIP-specificParameters    [37] EPS-PMIP-SpecificParameters OPTIONAL,
 *          -- contains parameters to be used in case of PMIP based intercepted messages
 *     ePS-DSMIP-SpecificParameters   [38] EPS-DSMIP-SpecificParameters OPTIONAL,
 *          -- contains parameters to be used in case of DSMIP based intercepted messages
 *     ePS-MIP-SpecificParameters     [39] EPS-MIP-SpecificParameters OPTIONAL,
 *          -- contains parameters to be used in case of MIP based intercepted messages
 *     servingNodeAddress             [40] OCTET STRING               OPTIONAL,
 *          -- this parameter is kept for backward compatibility only and should not be used
 *          -- as it has been superseeded by parameter visitedNetworkId
 *     visitedNetworkId               [41] UTF8String                 OPTIONAL,
 *          -- contains the visited network identifier inside the Serving System Update for
 *          -- non 3GPP access and IMS, coded according to [53] and 3GPP TS 29.229 [96]
 * 
 *     mediaDecryption-info           [42] MediaDecryption-info OPTIONAL,
 *     servingS4-SGSN-address           [43] OCTET STRING OPTIONAL,
 *     -- Diameter Origin-Host and Origin-Realm of the S4-SGSN based on the TS 29.272 [59].
 *     -- Only the data fields from the Diameter AVPs are provided concatenated
 *     -- with a semicolon to populate this field.
 * 
 *     sipMessageHeaderOffer   [44] OCTET STRING OPTIONAL,
 *     sipMessageHeaderAnswer  [45] OCTET STRING OPTIONAL,
 *     sdpOffer                [46] OCTET STRING OPTIONAL,
 *     sdpAnswer               [47] OCTET STRING OPTIONAL,
 *     uLITimestamp            [48] OCTET STRING (SIZE (8)) OPTIONAL,
 *     -- Coded according to 3GPP TS 29.060 [17]; The upper 4 octets shall carry the ULI Timestamp
 *     -- value; The lower 4 octets are undefined and shall be ignored by the receiver
 * 
 *     packetDataHeaderInformation           [49] PacketDataHeaderInformation    OPTIONAL,
 *     mediaSecFailureIndication          [50] MediaSecFailureIndication OPTIONAL,
 *     csgIdentity            [51] OCTET STRING (SIZE (4)) OPTIONAL,  -- Octets are coded
 *       -- according to 3GPP TS 23.003 [25].  The 27 bits specified in TS 23.003 shall be encoded as.
 *       -- follows The most significant bit of the CSG Identity shall be encoded in the most
 *       -- significant bit of the first octet of the octet string and the least significant bit coded
 *       -- in bit 6 of octet 4.
 *     heNBIdentity            [52] OCTET STRING OPTIONAL,
 *       -- 4 or 6 octets are coded with the HNBUnique Identity
 *       -- as specified in 3GPP TS 23.003            [25], Clause 4.10.
 *     heNBiPAddress        [53] IPAddress  OPTIONAL,
 *     heNBLocation            [54] HeNBLocation  OPTIONAL,
 *     tunnelProtocol        [55] TunnelProtocol  OPTIONAL,
 *     pANI-Header-Info        [56] SEQUENCE OF PANI-Header-Info        OPTIONAL,
 *     -- information extracted from P-Access-Network-Info headers of SIP message;
 *     -- described in TS 24.229 7.2A.4 [76]
 *     imsVoIP                 [57] IMS-VoIP-Correlation                    OPTIONAL,
 *     xCAPmessage            [58] OCTET STRING OPTIONAL,
 *     -- The HTTP message (HTPP header and any XCAP body) of any of the target's IMS supplementary
 *     -- service setting management or manipulation XCAP messages occuring through the Ut interface
 *     -- defined in the 3GPP TS 24 623 [77].
 *     logicalFunctionInformation    [59] DataNodeIdentifier OPTIONAL,
 *     ccUnavailableReason        [60] PrintableString    OPTIONAL,
 *     carrierSpecificData                    [61] OCTET STRING OPTIONAL,
 *     -- Copy of raw data specified by the CSP or his vendor related to HSS.
 *     current-previous-systems            [62] Current-Previous-Systems OPTIONAL,
 *     change-Of-Target-Identity            [63] Change-Of-Target-Identity OPTIONAL,
 *     requesting-Network-Identifier        [64] OCTET STRING OPTIONAL,
 *     -- the requesting network identifier PLMN id (Mobile Country Code and Mobile Network Country,
 *     -- defined in E212 [87]).
 *     requesting-Node-Type                [65] Requesting-Node-Type OPTIONAL,
 *     serving-System-Identifier            [66] OCTET STRING OPTIONAL,
 *     -- the serving network identifier PLMN id (MNC, Mobile Country Code and MNC,Mobile Network
 *     -- Country, defined in E212 [87]) and 3GPP TR 21.905 [38], that may be included in the Diameter
 *     -- AVP to and from the HSS.
 * 
 *     proSeTargetType                    [67] ProSeTargetType OPTIONAL,
 *     proSeRelayMSISDN                   [68] OCTET STRING (SIZE (1..9)) OPTIONAL,
 *     -- coded according to 3GPP TS 29.274 [46]
 * 
 *     proSeRelayIMSI                     [69] OCTET STRING (SIZE (3..8)) OPTIONAL,
 *     -- coded according to 3GPP TS 29.274 [46]
 * 
 *     proSeRelayIMEI                     [70] OCTET STRING (SIZE (8)) OPTIONAL,
 *     -- coded according to 3GPP TS 29.274 [46]
 * 
 *     extendedLocParameters     [71]     ExtendedLocParameters OPTIONAL, -- LALS extended parameters
 *     locationErrorCode        [72]    LocationErrorCode OPTIONAL,    -- LALS error code
 * 
 *     otherIdentities                    [73] SEQUENCE OF PartyInformation OPTIONAL,
 *     deregistrationReason               [74] DeregistrationReason OPTIONAL,
 *     requesting-Node-Identifier         [75] OCTET STRING OPTIONAL,
 *     roamingIndication                  [76] VoIPRoamingIndication     OPTIONAL,
 *     -- used for IMS events in the VPLMN.
 *     cSREvent                        [77]    CSREvent OPTIONAL,
 *     ptc                                [78]    PTC OPTIONAL,  -- PTC Events
 *     ptcEncryption                    [79]    PTCEncryptionInfo OPTIONAL,
 *     -- PTC Encryption Information
 *     additionalCellIDs                [80] SEQUENCE OF AdditionalCellID OPTIONAL,
 *     scefID                            [81] UTF8String OPTIONAL,
 *     -- SCEF-ID FQDN as defined by TS 29.336 [101], clause 8.4.5 and RFC 3588 [102] section 4.3
 *     national-HI2-ASN1parameters    [255]    National-HI2-ASN1parameters    OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class IRI_Parameters {
    /**
     * @summary `hi2epsDomainId`.
     * @description
     * 
     * Identifies the record as 3GPP HI2 for the EPS domain (module comment,
     * annex B.9). Present on every record.
     * 
     * @public
     * @readonly
     */
    readonly hi2epsDomainId: OBJECT_IDENTIFIER;
    /**
     * @summary `lawfulInterceptionIdentifier`.
     * @description
     * 
     * LIID agreed between the LEA and the operator. Alphanumeric; it may
     * contain an authorization reference and the date of issue. One LIID may
     * cover several identities of one target, and each LEA has its own LIID
     * (clause 10.1.1). Required in every record. The LEMF uses it to associate
     * IRI and content with the warrant.
     * 
     * @public
     * @readonly
     */
    readonly lawfulInterceptionIdentifier: LawfulInterceptionIdentifier;
    /**
     * @summary `timeStamp`.
     * @description
     * 
     * Date and time the intercepting node detected the event, from that node's
     * clock (module comment, clause 10.2.1). Precision should be at least one
     * second; national requirements may set it. Table 10.5.2 maps both event
     * date and event time here. Mandatory on the EPS event records.
     * 
     * @public
     * @readonly
     */
    readonly timeStamp: TimeStamp;
    /**
     * @summary `initiator`.
     * @description
     * 
     * Whether the procedure was started by the target or by the network (table
     * 10.5.2). Conditional on EPS bearer activation, modification, and
     * deactivation. For GPRS on this HI2, whether the PDP-context procedure was
     * MS-requested or network-initiated (table 6.2).
     * 
     * @public
     * @readonly
     */
    readonly initiator: OPTIONAL<IRI_Parameters_initiator>;
    /**
     * @summary `locationOfTheTarget`.
     * @description
     * 
     * Location of the target, or the cell site (module comment). Table 10.5.2
     * uses the EPS location parameter for EPS events and uses this parameter
     * for LALS. Clause 16.4 uses it for 2G/3G cell-site information. Clause
     * 6.5.1 uses it for PS location when that IRI is sent on this HI2.
     * 
     * @public
     * @readonly
     */
    readonly locationOfTheTarget: OPTIONAL<Location>;
    /**
     * @summary `partyInformation`.
     * @description
     * 
     * The parties concerned, their identities, and the information they
     * provided (module comment). Observed MSISDN, A-MSISDN, IMSI, IMEI, ME
     * identity, NAI, and external identifier are placed here (table 10.5.2,
     * table 6.2, table 7.2). EPS event records require at least one observed
     * identity and the others when available. At most ten parties.
     * 
     * @public
     * @readonly
     */
    readonly partyInformation: OPTIONAL<PartyInformation[]>;
    /**
     * @summary `serviceCenterAddress`.
     * @description
     * 
     * Address of the relevant server. For SMS, the SMS centre (module comment,
     * table 6.2). Clause 15.2.2 points SMS over GPRS or UMTS at clause 6.
     * Clause 10 defines no separate EPS SMS event.
     * 
     * @public
     * @readonly
     */
    readonly serviceCenterAddress: OPTIONAL<PartyInformation>;
    /**
     * @summary `sMS`.
     * @description
     * 
     * SMS content and the information that goes with it (module comment, table
     * 6.2). Used for the packet-domain SMS report (clause 15.2.2).
     * 
     * @public
     * @readonly
     */
    readonly sMS: OPTIONAL<SMS_report>;
    /**
     * @summary `national_Parameters`.
     * @description
     * 
     * National parameters. The specification text does not define their
     * contents.
     * 
     * @public
     * @readonly
     */
    readonly national_Parameters: OPTIONAL<National_Parameters>;
    /**
     * @summary `ePSCorrelationNumber`.
     * @description
     * 
     * Correlation number. For an EPS bearer or tunnel, unique per bearer or
     * tunnel, to tie CC to IRI, IRI to IRI, and a LALS report to the triggering
     * IRI (clause 10.1.3). The same number is kept across a Gn/Gp handover in
     * one IRI transaction (clause 10.0). When the event is UMTS or GPRS, the
     * module comment says this carries the GPRS correlation number (clause
     * 6.1.3). A CSCF may place a correlation number here; it does not apply to
     * HSS interception (clause 7.1.3). Mandatory on the bearer-deactivation END
     * record (table 10.5.1.4.1).
     * 
     * @public
     * @readonly
     */
    readonly ePSCorrelationNumber: OPTIONAL<EPSCorrelationNumber>;
    /**
     * @summary `ePSevent`.
     * @description
     * 
     * Which EPS, ProSe, or packet-domain event this record reports (table
     * 10.5.2, table 13.3.1-2, clause 6.5.1). Omitted on a LALS report that is
     * not tied to an event (clause 10.5.0).
     * 
     * @public
     * @readonly
     */
    readonly ePSevent: OPTIONAL<EPSEvent>;
    /**
     * @summary `sgsnAddress`.
     * @description
     * 
     * Clause 6 and clause 10 do not define this component. The serving SGSN
     * address in table 6.2 is the serving-SGSN address parameter.
     * 
     * @public
     * @readonly
     */
    readonly sgsnAddress: OPTIONAL<DataNodeAddress>;
    /**
     * @summary `gPRSOperationErrorCode`.
     * @description
     * 
     * Cause of a failed GPRS attach, a failed PDP-context activation, or a
     * PDP-context deactivation (table 6.2, clause 6.5.0). Used when that PS
     * event is reported on this HI2 (clause 6.5.1, clause 10.0). EPS failures
     * use the GTPv2 cause fields (table 10.5.2). The octet layout is not
     * defined.
     * 
     * @public
     * @readonly
     */
    readonly gPRSOperationErrorCode: OPTIONAL<GPRSOperationErrorCode>;
    /**
     * @summary `ggsnAddress`.
     * @description
     * 
     * Clause 6 and clause 10 do not define this component. Clause 6.1.3
     * mentions a GGSN address only as one example of how a correlation number
     * may be built.
     * 
     * @public
     * @readonly
     */
    readonly ggsnAddress: OPTIONAL<DataNodeAddress>;
    /**
     * @summary `qOS`.
     * @description
     * 
     * QoS of the PDP-context procedure (table 6.2). Conditional on an
     * unsuccessful PDP-context activation (table 6.5). EPS bearer QoS is the
     * bearer-QoS field of the GTPv2 parameters, not this (table 10.5.2).
     * 
     * @public
     * @readonly
     */
    readonly qOS: OPTIONAL<UmtsQos>;
    /**
     * @summary `networkIdentifier`.
     * @description
     * 
     * Operator identifier, plus an optional network-element identifier (clause
     * 10.1.2). The operator identifier should be internationally unique.
     * Mandatory on EPS IRI ("shall be provided"). For PS IRI, operator identity
     * plus the SGSN, GGSN, or HLR address (table 6.2). National regulations may
     * require the element identifier.
     * 
     * @public
     * @readonly
     */
    readonly networkIdentifier: OPTIONAL<Network_Identifier>;
    /**
     * @summary `sMSOriginatingAddress`.
     * @description
     * 
     * Originator of the SMS (table 6.2).
     * 
     * @public
     * @readonly
     */
    readonly sMSOriginatingAddress: OPTIONAL<DataNodeAddress>;
    /**
     * @summary `sMSTerminatingAddress`.
     * @description
     * 
     * Intended recipient of the SMS (table 6.2).
     * 
     * @public
     * @readonly
     */
    readonly sMSTerminatingAddress: OPTIONAL<DataNodeAddress>;
    /**
     * @summary `iMSevent`.
     * @description
     * 
     * Which IMS event this record reports (table 7.2, clause 7.5). Mandatory on
     * the IMS records in clause 7.5.1.
     * 
     * @public
     * @readonly
     */
    readonly iMSevent: OPTIONAL<IMSevent>;
    /**
     * @summary `sIPMessage`.
     * @description
     * 
     * The SIP message, or the header plus any SDP, when the warrant is
     * IRI-only. Unknown headers are kept. Location in the message is removed
     * when location is not authorized. SMS content may be removed as in annex P
     * while SMS headers stay (table 7.2). Mandatory on the SIP-message report
     * (table 7.3).
     * 
     * @public
     * @readonly
     */
    readonly sIPMessage: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servingSGSN_number`.
     * @description
     * 
     * E.164 number of the serving SGSN (table 6.2). Octets are coded according
     * to 3GPP TS 23.003 (module comment).
     * 
     * @public
     * @readonly
     */
    readonly servingSGSN_number: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servingSGSN_address`.
     * @description
     * 
     * IP address of the serving SGSN. For an S4-SGSN this may be the Diameter
     * identity and realm on S6d toward the HSS (table 6.2). Octets are coded
     * according to 3GPP TS 23.003 (module comment).
     * 
     * @public
     * @readonly
     */
    readonly servingSGSN_address: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `ldiEvent`.
     * @description
     * 
     * Target entered or left an interception area. Optional, and only for
     * location-dependent interception, on a GPRS location update (table 6.6).
     * The EPS triggers are marked for further study (clause 10.5.1).
     * 
     * @public
     * @readonly
     */
    readonly ldiEvent: OPTIONAL<LDIevent>;
    /**
     * @summary `correlation`.
     * @description
     * 
     * Correlation other than the single EPS or GPRS correlation number (clause
     * 7.1.3, table 7.2). PTC uses it to tie a session's IRI together and to its
     * content (table 17.1.5).
     * 
     * @public
     * @readonly
     */
    readonly correlation: OPTIONAL<CorrelationValues>;
    /**
     * @summary `ePS_GTPV2_specificParameters`.
     * @description
     * 
     * GTPv2 parameters of the intercepted procedure (module comment, clause
     * 10.5).
     * 
     * @public
     * @readonly
     */
    readonly ePS_GTPV2_specificParameters: OPTIONAL<EPS_GTPV2_SpecificParameters>;
    /**
     * @summary `ePS_PMIP_specificParameters`.
     * @description
     * 
     * PMIP parameters of the intercepted procedure (module comment, clause
     * 10.5).
     * 
     * @public
     * @readonly
     */
    readonly ePS_PMIP_specificParameters: OPTIONAL<EPS_PMIP_SpecificParameters>;
    /**
     * @summary `ePS_DSMIP_SpecificParameters`.
     * @description
     * 
     * DSMIP parameters of the intercepted procedure (module comment, clause
     * 10.5).
     * 
     * @public
     * @readonly
     */
    readonly ePS_DSMIP_SpecificParameters: OPTIONAL<EPS_DSMIP_SpecificParameters>;
    /**
     * @summary `ePS_MIP_SpecificParameters`.
     * @description
     * 
     * MIP parameters of the intercepted procedure (module comment, clause
     * 10.5).
     * 
     * @public
     * @readonly
     */
    readonly ePS_MIP_SpecificParameters: OPTIONAL<EPS_MIP_SpecificParameters>;
    /**
     * @summary `servingNodeAddress`.
     * @description
     * 
     * Kept only for backward compatibility. The module comment says not to use
     * it; visited-network identity replaces it.
     * 
     * @public
     * @readonly
     */
    readonly servingNodeAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `visitedNetworkId`.
     * @description
     * 
     * Visited network in the serving-system update for non-3GPP access, coded
     * according to 3GPP TS 29.273 (table 10.5.2). The module comment also
     * covers IMS and 3GPP TS 29.229. Table 7.2 uses the same parameter for the
     * previous and the current visited network on HSS deregistration.
     * 
     * @public
     * @readonly
     */
    readonly visitedNetworkId: OPTIONAL<UTF8String>;
    /**
     * @summary `mediaDecryption_info`.
     * @description
     * 
     * Session keys and the extra information the LEMF needs to decrypt IMS
     * content when media security applies (table 7.2, 3GPP TS 33.328). Included
     * when the delivery function has it. Protection of the keys on HI2 is for
     * further study (clause 7.5.0).
     * 
     * @public
     * @readonly
     */
    readonly mediaDecryption_info: OPTIONAL<MediaDecryption_info>;
    /**
     * @summary `servingS4_SGSN_address`.
     * @description
     * 
     * Diameter Origin-Host and Origin-Realm of the S4-SGSN (3GPP TS 29.272).
     * Only the AVP data fields, joined by a semicolon (module comment, table
     * 6.2).
     * 
     * @public
     * @readonly
     */
    readonly servingS4_SGSN_address: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sipMessageHeaderOffer`.
     * @description
     * 
     * Header of the SIP message that carried the SDP offer. Only for start of
     * interception on an already established IMS session, and only if available
     * (table 7.2 note 10, table 7.5).
     * 
     * @public
     * @readonly
     */
    readonly sipMessageHeaderOffer: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sipMessageHeaderAnswer`.
     * @description
     * 
     * Header of the SIP message that carried the SDP answer. Same condition as
     * the offer header (table 7.5).
     * 
     * @public
     * @readonly
     */
    readonly sipMessageHeaderAnswer: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sdpOffer`.
     * @description
     * 
     * SDP offer of the IMS session. Only for start of interception on an
     * already established session, if available (table 7.5).
     * 
     * @public
     * @readonly
     */
    readonly sdpOffer: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sdpAnswer`.
     * @description
     * 
     * SDP answer of the IMS session. Same condition as the offer (table 7.5).
     * 
     * @public
     * @readonly
     */
    readonly sdpAnswer: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `uLITimestamp`.
     * @description
     * 
     * Time the user location information was acquired (table 10.5.2, table
     * 6.2). Coded according to 3GPP TS 29.060. The upper four octets carry the
     * timestamp; the lower four are undefined and the receiver ignores them
     * (module comment).
     * 
     * @public
     * @readonly
     */
    readonly uLITimestamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `packetDataHeaderInformation`.
     * @description
     * 
     * Copy or summary of intercepted packet headers, without content, for an
     * active EPS bearer or session (clause 10.5.1.1) or, on this HI2, a PDP
     * context (clause 6.5.1.1). A report. For IP fragments the flow identity
     * may exist only on the first packet (note in clause 10.5.1.1).
     * 
     * @public
     * @readonly
     */
    readonly packetDataHeaderInformation: OPTIONAL<PacketDataHeaderInformation>;
    /**
     * @summary `mediaSecFailureIndication`.
     * @description
     * 
     * The procedure that retrieves encryption keys from the KMS failed (table
     * 7.2). Optional on the media-decryption report (table 7.4).
     * 
     * @public
     * @readonly
     */
    readonly mediaSecFailureIndication: OPTIONAL<MediaSecFailureIndication>;
    /**
     * @summary `csgIdentity`.
     * @description
     * 
     * Identity of a closed subscriber group inside one PLMN (table 10.5.2).
     * Conditional when a closed or hybrid HeNB is used for the attach (table
     * 10.5.1.1.1). The 27 bits of 3GPP TS 23.003 are placed with the most
     * significant bit in the most significant bit of the first octet and the
     * least significant bit in bit 6 of octet 4 (module comment).
     * 
     * @public
     * @readonly
     */
    readonly csgIdentity: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `heNBIdentity`.
     * @description
     * 
     * Home eNB serving the target (table 10.5.2). Conditional on attach via a
     * HeNB (table 10.5.1.1.1). Four or six octets of the HNB unique identity,
     * 3GPP TS 23.003 clause 4.10 (module comment).
     * 
     * @public
     * @readonly
     */
    readonly heNBIdentity: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `heNBiPAddress`.
     * @description
     * 
     * IP address of the HeNB serving the target, used during location
     * verification (table 10.5.1.1.1).
     * 
     * @public
     * @readonly
     */
    readonly heNBiPAddress: OPTIONAL<IPAddress>;
    /**
     * @summary `heNBLocation`.
     * @description
     * 
     * Location of the HeNB serving the target, when authorized (table 10.5.2,
     * table 10.5.1.1.1).
     * 
     * @public
     * @readonly
     */
    readonly heNBLocation: OPTIONAL<HeNBLocation>;
    /**
     * @summary `tunnelProtocol`.
     * @description
     * 
     * Tunnel protocol between the HeNB and the EPC (table 10.5.2). Conditional
     * on attach via a HeNB.
     * 
     * @public
     * @readonly
     */
    readonly tunnelProtocol: OPTIONAL<TunnelProtocol>;
    /**
     * @summary `pANI_Header_Info`.
     * @description
     * 
     * Access type or class, and location if the warrant allows it, copied from
     * P-Access-Network-Info headers of SIP the CSCF handled (clause 7.5, 3GPP
     * TS 24.229 clause 7.2A.4). Optional on a SIP report when available (table
     * 7.3).
     * 
     * @public
     * @readonly
     */
    readonly pANI_Header_Info: OPTIONAL<PANI_Header_Info[]>;
    /**
     * @summary `imsVoIP`.
     * @description
     * 
     * IRI and content correlation numbers of one IMS VoIP session. The LEMF
     * treats IRI and content that carry them as one session (clause 12.1.4).
     * May replace the correlation number or the correlation parameter for
     * separated IMS VoIP (table 7.2 note 11).
     * 
     * @public
     * @readonly
     */
    readonly imsVoIP: OPTIONAL<IMS_VoIP_Correlation>;
    /**
     * @summary `xCAPmessage`.
     * @description
     * 
     * HTTP message, header and any XCAP body, of the target's IMS
     * supplementary-service setting management on the Ut interface (module
     * comment, 3GPP TS 24.623, table 7.2). Request and response are separate
     * reports.
     * 
     * @public
     * @readonly
     */
    readonly xCAPmessage: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `logicalFunctionInformation`.
     * @description
     * 
     * Which logical function in a physical element produced the event (table
     * 10.5.2). Optional on the EPS records.
     * 
     * @public
     * @readonly
     */
    readonly logicalFunctionInformation: OPTIONAL<DataNodeIdentifier>;
    /**
     * @summary `ccUnavailableReason`.
     * @description
     * 
     * Why content cannot be intercepted when the warrant requires media but the
     * media does not enter the CSP network (clause 12.5). Sent with the IMS
     * event for that case.
     * 
     * @public
     * @readonly
     */
    readonly ccUnavailableReason: OPTIONAL<PrintableString>;
    /**
     * @summary `carrierSpecificData`.
     * @description
     * 
     * CSP-specific raw data about the HSS update. The CSP tells the LEMF how to
     * read it (table 10.5.2). Conditional on the HSS subscriber-record change
     * (table 10.5.1.1.17). Table 6.2 uses the same parameter for HLR-specific
     * data when PS IRI is on this HI2.
     * 
     * @public
     * @readonly
     */
    readonly carrierSpecificData: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `current_previous_systems`.
     * @description
     * 
     * Current and previous serving system and MME (table 10.5.2). Used on HSS
     * cancel-location and register-location reports.
     * 
     * @public
     * @readonly
     */
    readonly current_previous_systems: OPTIONAL<Current_Previous_Systems>;
    /**
     * @summary `change_Of_Target_Identity`.
     * @description
     * 
     * Old and new target identities after a subscriber-record change (table
     * 10.5.2). Mandatory on the HSS subscriber-record-change report (table
     * 10.5.1.1.17). IMS may also include IMPI, SIP URI, and TEL URI (table
     * 7.2).
     * 
     * @public
     * @readonly
     */
    readonly change_Of_Target_Identity: OPTIONAL<Change_Of_Target_Identity>;
    /**
     * @summary `requesting_Network_Identifier`.
     * @description
     * 
     * PLMN identity of the requesting network, MCC and MNC, ITU-T E.212 (table
     * 10.5.2, table 6.2, table 7.2).
     * 
     * @public
     * @readonly
     */
    readonly requesting_Network_Identifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `requesting_Node_Type`.
     * @description
     * 
     * Kind of node that made the request, such as MSC, SMS centre, GMLC, MME,
     * or SGSN (table 10.5.2, table 7.2).
     * 
     * @public
     * @readonly
     */
    readonly requesting_Node_Type: OPTIONAL<Requesting_Node_Type>;
    /**
     * @summary `serving_System_Identifier`.
     * @description
     * 
     * VPLMN identity of the serving system, or of a third-party network
     * interworking with the HSS, from the Diameter exchange (table 10.5.2). The
     * module comment cites ITU-T E.212 and 3GPP TR 21.905.
     * 
     * @public
     * @readonly
     */
    readonly serving_System_Identifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `proSeTargetType`.
     * @description
     * 
     * Whether the target is a ProSe remote UE or a ProSe UE-to-network relay
     * (table 13.3.1-2). Clause 10.0 adds clause 13 for those targets.
     * 
     * @public
     * @readonly
     */
    readonly proSeTargetType: OPTIONAL<ProSeTargetType>;
    /**
     * @summary `proSeRelayMSISDN`.
     * @description
     * 
     * MSISDN of the ProSe UE-to-network relay, and only when the target is the
     * remote UE (table 13.3.1-2). Coded according to 3GPP TS 29.274 (module
     * comment).
     * 
     * @public
     * @readonly
     */
    readonly proSeRelayMSISDN: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `proSeRelayIMSI`.
     * @description
     * 
     * IMSI of the ProSe UE-to-network relay, only when the target is the remote
     * UE (table 13.3.1-2). Coded according to 3GPP TS 29.274.
     * 
     * @public
     * @readonly
     */
    readonly proSeRelayIMSI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `proSeRelayIMEI`.
     * @description
     * 
     * IMEI of the ProSe UE-to-network relay, only when the target is the remote
     * UE (table 13.3.1-2). Coded according to 3GPP TS 29.274.
     * 
     * @public
     * @readonly
     */
    readonly proSeRelayIMEI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `extendedLocParameters`.
     * @description
     * 
     * Extra location and QoS from LALS (table 10.5.2, table 6.2).
     * 
     * @public
     * @readonly
     */
    readonly extendedLocParameters: OPTIONAL<ExtendedLocParameters>;
    /**
     * @summary `locationErrorCode`.
     * @description
     * 
     * LALS positioning error (table 10.5.2, table 6.2).
     * 
     * @public
     * @readonly
     */
    readonly locationErrorCode: OPTIONAL<LocationErrorCode>;
    /**
     * @summary `otherIdentities`.
     * @description
     * 
     * Other IMPU or IMPI allocated to the target being deregistered in the HSS
     * (table 7.2).
     * 
     * @public
     * @readonly
     */
    readonly otherIdentities: OPTIONAL<PartyInformation[]>;
    /**
     * @summary `deregistrationReason`.
     * @description
     * 
     * Why the HSS deregistered the target. Reason-Code AVP when the HSS
     * initiates it; Server-Assignment-Type AVP when the S-CSCF indicates it;
     * both from 3GPP TS 29.229 (table 7.2).
     * 
     * @public
     * @readonly
     */
    readonly deregistrationReason: OPTIONAL<DeregistrationReason>;
    /**
     * @summary `requesting_Node_Identifier`.
     * @description
     * 
     * Identifier of the node that made the request (table 7.2). Clause 10.5.2
     * names the requesting node type and the requesting network, and does not
     * define this identifier.
     * 
     * @public
     * @readonly
     */
    readonly requesting_Node_Identifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `roamingIndication`.
     * @description
     * 
     * For an IMS event in the VPLMN, whether VoLTE roaming is local breakout or
     * S8 home routing (table 7.2, module comment). Conditional when the VPLMN
     * sends the SIP (table 7.3).
     * 
     * @public
     * @readonly
     */
    readonly roamingIndication: OPTIONAL<VoIPRoamingIndication>;
    /**
     * @summary `cSREvent`.
     * @description
     * 
     * This report is a cell-site report. Sent when the MF could not enrich the
     * original IRI in time (clause 16.4).
     * 
     * @public
     * @readonly
     */
    readonly cSREvent: OPTIONAL<CSREvent>;
    /**
     * @summary `ptc`.
     * @description
     * 
     * PTC event information (module comment). Clause 17 defines the PTC
     * records. PoC and MCPTT are both in scope and are delivered separately
     * from other services (clause 17.1.0).
     * 
     * @public
     * @readonly
     */
    readonly ptc: OPTIONAL<PTC>;
    /**
     * @summary `ptcEncryption`.
     * @description
     * 
     * Information the LEMF needs to decrypt PTC media when the CSP provides or
     * manages the encryption (clause 18, module comment).
     * 
     * @public
     * @readonly
     */
    readonly ptcEncryption: OPTIONAL<PTCEncryptionInfo>;
    /**
     * @summary `additionalCellIDs`.
     * @description
     * 
     * Primary cell of a secondary cell group, when available (table 10.5.2).
     * The location parameter carries the primary cell of the primary cell
     * group. Include both when the event's location condition is met and the
     * secondary cell is known.
     * 
     * @public
     * @readonly
     */
    readonly additionalCellIDs: OPTIONAL<AdditionalCellID[]>;
    /**
     * @summary `scefID`.
     * @description
     * 
     * SCEF to which the UE has connected, as an FQDN (table 10.5.2, 3GPP TS
     * 29.336 clause 8.4.5, RFC 3588 section 4.3). Several EPS events also apply
     * to IoT NIDD via the SCEF (table 10.5.1 note 2).
     * 
     * @public
     * @readonly
     */
    readonly scefID: OPTIONAL<UTF8String>;
    /**
     * @summary `national_HI2_ASN1parameters`.
     * @description
     * 
     * National HI2 parameters. The specification text does not define their
     * contents.
     * 
     * @public
     * @readonly
     */
    readonly national_HI2_ASN1parameters: OPTIONAL<National_HI2_ASN1parameters>;
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
        hi2epsDomainId: OBJECT_IDENTIFIER,
        lawfulInterceptionIdentifier: LawfulInterceptionIdentifier,
        timeStamp: TimeStamp,
        initiator?: OPTIONAL<IRI_Parameters_initiator>,
        locationOfTheTarget?: OPTIONAL<Location>,
        partyInformation?: OPTIONAL<PartyInformation[]>,
        serviceCenterAddress?: OPTIONAL<PartyInformation>,
        sMS?: OPTIONAL<SMS_report>,
        national_Parameters?: OPTIONAL<National_Parameters>,
        ePSCorrelationNumber?: OPTIONAL<EPSCorrelationNumber>,
        ePSevent?: OPTIONAL<EPSEvent>,
        sgsnAddress?: OPTIONAL<DataNodeAddress>,
        gPRSOperationErrorCode?: OPTIONAL<GPRSOperationErrorCode>,
        ggsnAddress?: OPTIONAL<DataNodeAddress>,
        qOS?: OPTIONAL<UmtsQos>,
        networkIdentifier?: OPTIONAL<Network_Identifier>,
        sMSOriginatingAddress?: OPTIONAL<DataNodeAddress>,
        sMSTerminatingAddress?: OPTIONAL<DataNodeAddress>,
        iMSevent?: OPTIONAL<IMSevent>,
        sIPMessage?: OPTIONAL<OCTET_STRING>,
        servingSGSN_number?: OPTIONAL<OCTET_STRING>,
        servingSGSN_address?: OPTIONAL<OCTET_STRING>,
        ldiEvent?: OPTIONAL<LDIevent>,
        correlation?: OPTIONAL<CorrelationValues>,
        ePS_GTPV2_specificParameters?: OPTIONAL<EPS_GTPV2_SpecificParameters>,
        ePS_PMIP_specificParameters?: OPTIONAL<EPS_PMIP_SpecificParameters>,
        ePS_DSMIP_SpecificParameters?: OPTIONAL<EPS_DSMIP_SpecificParameters>,
        ePS_MIP_SpecificParameters?: OPTIONAL<EPS_MIP_SpecificParameters>,
        servingNodeAddress?: OPTIONAL<OCTET_STRING>,
        visitedNetworkId?: OPTIONAL<UTF8String>,
        mediaDecryption_info?: OPTIONAL<MediaDecryption_info>,
        servingS4_SGSN_address?: OPTIONAL<OCTET_STRING>,
        sipMessageHeaderOffer?: OPTIONAL<OCTET_STRING>,
        sipMessageHeaderAnswer?: OPTIONAL<OCTET_STRING>,
        sdpOffer?: OPTIONAL<OCTET_STRING>,
        sdpAnswer?: OPTIONAL<OCTET_STRING>,
        uLITimestamp?: OPTIONAL<OCTET_STRING>,
        packetDataHeaderInformation?: OPTIONAL<PacketDataHeaderInformation>,
        mediaSecFailureIndication?: OPTIONAL<MediaSecFailureIndication>,
        csgIdentity?: OPTIONAL<OCTET_STRING>,
        heNBIdentity?: OPTIONAL<OCTET_STRING>,
        heNBiPAddress?: OPTIONAL<IPAddress>,
        heNBLocation?: OPTIONAL<HeNBLocation>,
        tunnelProtocol?: OPTIONAL<TunnelProtocol>,
        pANI_Header_Info?: OPTIONAL<PANI_Header_Info[]>,
        imsVoIP?: OPTIONAL<IMS_VoIP_Correlation>,
        xCAPmessage?: OPTIONAL<OCTET_STRING>,
        logicalFunctionInformation?: OPTIONAL<DataNodeIdentifier>,
        ccUnavailableReason?: OPTIONAL<PrintableString>,
        carrierSpecificData?: OPTIONAL<OCTET_STRING>,
        current_previous_systems?: OPTIONAL<Current_Previous_Systems>,
        change_Of_Target_Identity?: OPTIONAL<Change_Of_Target_Identity>,
        requesting_Network_Identifier?: OPTIONAL<OCTET_STRING>,
        requesting_Node_Type?: OPTIONAL<Requesting_Node_Type>,
        serving_System_Identifier?: OPTIONAL<OCTET_STRING>,
        proSeTargetType?: OPTIONAL<ProSeTargetType>,
        proSeRelayMSISDN?: OPTIONAL<OCTET_STRING>,
        proSeRelayIMSI?: OPTIONAL<OCTET_STRING>,
        proSeRelayIMEI?: OPTIONAL<OCTET_STRING>,
        extendedLocParameters?: OPTIONAL<ExtendedLocParameters>,
        locationErrorCode?: OPTIONAL<LocationErrorCode>,
        otherIdentities?: OPTIONAL<PartyInformation[]>,
        deregistrationReason?: OPTIONAL<DeregistrationReason>,
        requesting_Node_Identifier?: OPTIONAL<OCTET_STRING>,
        roamingIndication?: OPTIONAL<VoIPRoamingIndication>,
        cSREvent?: OPTIONAL<CSREvent>,
        ptc?: OPTIONAL<PTC>,
        ptcEncryption?: OPTIONAL<PTCEncryptionInfo>,
        additionalCellIDs?: OPTIONAL<AdditionalCellID[]>,
        scefID?: OPTIONAL<UTF8String>,
        national_HI2_ASN1parameters?: OPTIONAL<National_HI2_ASN1parameters>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.hi2epsDomainId = hi2epsDomainId;
        this.lawfulInterceptionIdentifier = lawfulInterceptionIdentifier;
        this.timeStamp = timeStamp;
        this.initiator = initiator;
        this.locationOfTheTarget = locationOfTheTarget;
        this.partyInformation = partyInformation;
        this.serviceCenterAddress = serviceCenterAddress;
        this.sMS = sMS;
        this.national_Parameters = national_Parameters;
        this.ePSCorrelationNumber = ePSCorrelationNumber;
        this.ePSevent = ePSevent;
        this.sgsnAddress = sgsnAddress;
        this.gPRSOperationErrorCode = gPRSOperationErrorCode;
        this.ggsnAddress = ggsnAddress;
        this.qOS = qOS;
        this.networkIdentifier = networkIdentifier;
        this.sMSOriginatingAddress = sMSOriginatingAddress;
        this.sMSTerminatingAddress = sMSTerminatingAddress;
        this.iMSevent = iMSevent;
        this.sIPMessage = sIPMessage;
        this.servingSGSN_number = servingSGSN_number;
        this.servingSGSN_address = servingSGSN_address;
        this.ldiEvent = ldiEvent;
        this.correlation = correlation;
        this.ePS_GTPV2_specificParameters = ePS_GTPV2_specificParameters;
        this.ePS_PMIP_specificParameters = ePS_PMIP_specificParameters;
        this.ePS_DSMIP_SpecificParameters = ePS_DSMIP_SpecificParameters;
        this.ePS_MIP_SpecificParameters = ePS_MIP_SpecificParameters;
        this.servingNodeAddress = servingNodeAddress;
        this.visitedNetworkId = visitedNetworkId;
        this.mediaDecryption_info = mediaDecryption_info;
        this.servingS4_SGSN_address = servingS4_SGSN_address;
        this.sipMessageHeaderOffer = sipMessageHeaderOffer;
        this.sipMessageHeaderAnswer = sipMessageHeaderAnswer;
        this.sdpOffer = sdpOffer;
        this.sdpAnswer = sdpAnswer;
        this.uLITimestamp = uLITimestamp;
        this.packetDataHeaderInformation = packetDataHeaderInformation;
        this.mediaSecFailureIndication = mediaSecFailureIndication;
        this.csgIdentity = csgIdentity;
        this.heNBIdentity = heNBIdentity;
        this.heNBiPAddress = heNBiPAddress;
        this.heNBLocation = heNBLocation;
        this.tunnelProtocol = tunnelProtocol;
        this.pANI_Header_Info = pANI_Header_Info;
        this.imsVoIP = imsVoIP;
        this.xCAPmessage = xCAPmessage;
        this.logicalFunctionInformation = logicalFunctionInformation;
        this.ccUnavailableReason = ccUnavailableReason;
        this.carrierSpecificData = carrierSpecificData;
        this.current_previous_systems = current_previous_systems;
        this.change_Of_Target_Identity = change_Of_Target_Identity;
        this.requesting_Network_Identifier = requesting_Network_Identifier;
        this.requesting_Node_Type = requesting_Node_Type;
        this.serving_System_Identifier = serving_System_Identifier;
        this.proSeTargetType = proSeTargetType;
        this.proSeRelayMSISDN = proSeRelayMSISDN;
        this.proSeRelayIMSI = proSeRelayIMSI;
        this.proSeRelayIMEI = proSeRelayIMEI;
        this.extendedLocParameters = extendedLocParameters;
        this.locationErrorCode = locationErrorCode;
        this.otherIdentities = otherIdentities;
        this.deregistrationReason = deregistrationReason;
        this.requesting_Node_Identifier = requesting_Node_Identifier;
        this.roamingIndication = roamingIndication;
        this.cSREvent = cSREvent;
        this.ptc = ptc;
        this.ptcEncryption = ptcEncryption;
        this.additionalCellIDs = additionalCellIDs;
        this.scefID = scefID;
        this.national_HI2_ASN1parameters = national_HI2_ASN1parameters;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

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
         * @description
         * 
         * Whether the procedure was started by the target or by the network
         * (table 10.5.2). Conditional on EPS bearer activation, modification,
         * and deactivation. For GPRS on this HI2, whether the PDP-context
         * procedure was MS-requested or network-initiated (table 6.2).
         * 
         * @public
         * @static
         */

    public static _enum_for_initiator = _enum_for_IRI_Parameters_initiator;        /**
         * @summary The enum used as the type of the component `ePSevent`
         * @description
         * 
         * Which EPS, ProSe, or packet-domain event this record reports (table
         * 10.5.2, table 13.3.1-2, clause 6.5.1). Omitted on a LALS report that
         * is not tied to an event (clause 10.5.0).
         * 
         * @public
         * @static
         */

    public static _enum_for_ePSevent = _enum_for_EPSEvent;        /**
         * @summary The enum used as the type of the component `iMSevent`
         * @description
         * 
         * Which IMS event this record reports (table 7.2, clause 7.5).
         * Mandatory on the IMS records in clause 7.5.1.
         * 
         * @public
         * @static
         */

    public static _enum_for_iMSevent = _enum_for_IMSevent;        /**
         * @summary The enum used as the type of the component `ldiEvent`
         * @description
         * 
         * Target entered or left an interception area. Optional, and only for
         * location-dependent interception, on a GPRS location update (table
         * 6.6). The EPS triggers are marked for further study (clause 10.5.1).
         * 
         * @public
         * @static
         */

    public static _enum_for_ldiEvent = _enum_for_LDIevent;        /**
         * @summary The enum used as the type of the component `mediaSecFailureIndication`
         * @description
         * 
         * The procedure that retrieves encryption keys from the KMS failed
         * (table 7.2). Optional on the media-decryption report (table 7.4).
         * 
         * @public
         * @static
         */

    public static _enum_for_mediaSecFailureIndication = _enum_for_MediaSecFailureIndication;        /**
         * @summary The enum used as the type of the component `requesting_Node_Type`
         * @description
         * 
         * Kind of node that made the request, such as MSC, SMS centre, GMLC,
         * MME, or SGSN (table 10.5.2, table 7.2).
         * 
         * @public
         * @static
         */

    public static _enum_for_requesting_Node_Type = _enum_for_Requesting_Node_Type;        /**
         * @summary The enum used as the type of the component `proSeTargetType`
         * @description
         * 
         * Whether the target is a ProSe remote UE or a ProSe UE-to-network
         * relay (table 13.3.1-2). Clause 10.0 adds clause 13 for those targets.
         * 
         * @public
         * @static
         */

    public static _enum_for_proSeTargetType = _enum_for_ProSeTargetType;        /**
         * @summary The enum used as the type of the component `roamingIndication`
         * @description
         * 
         * For an IMS event in the VPLMN, whether VoLTE roaming is local
         * breakout or S8 home routing (table 7.2, module comment). Conditional
         * when the VPLMN sends the SIP (table 7.3).
         * 
         * @public
         * @static
         */

    public static _enum_for_roamingIndication = _enum_for_VoIPRoamingIndication;        /**
         * @summary The enum used as the type of the component `cSREvent`
         * @description
         * 
         * This report is a cell-site report. Sent when the MF could not enrich
         * the original IRI in time (clause 16.4).
         * 
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
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "hi2epsDomainId": (_el: _Element): void => { hi2epsDomainId = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "lawfulInterceptionIdentifier": (_el: _Element): void => { lawfulInterceptionIdentifier = $._decode_implicit<LawfulInterceptionIdentifier>(() => _decode_LawfulInterceptionIdentifier)(_el); },
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_explicit<TimeStamp>(() => _decode_TimeStamp)(_el); },
        "initiator": (_el: _Element): void => { initiator = $._decode_implicit<IRI_Parameters_initiator>(() => _decode_IRI_Parameters_initiator)(_el); },
        "locationOfTheTarget": (_el: _Element): void => { locationOfTheTarget = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "partyInformation": (_el: _Element): void => {
            partyInformation = $._decode_implicit<PartyInformation[]>(() => $._decodeSetOf<PartyInformation>(() => _decode_PartyInformation))(_el);
            if (partyInformation.length < 1 || partyInformation.length > 10) {
                throw new ASN1SizeError("IRI_Parameters.partyInformation violates SIZE constraint");
            }
        },
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
        "servingSGSN-number": (_el: _Element): void => {
            servingSGSN_number = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (servingSGSN_number.length < 1 || servingSGSN_number.length > 20) {
                throw new ASN1SizeError("IRI_Parameters.servingSGSN_number violates SIZE constraint");
            }
        },
        "servingSGSN-address": (_el: _Element): void => {
            servingSGSN_address = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (servingSGSN_address.length < 5 || servingSGSN_address.length > 17) {
                throw new ASN1SizeError("IRI_Parameters.servingSGSN_address violates SIZE constraint");
            }
        },
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
        "uLITimestamp": (_el: _Element): void => {
            uLITimestamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (uLITimestamp.length < 8 || uLITimestamp.length > 8) {
                throw new ASN1SizeError("IRI_Parameters.uLITimestamp violates SIZE constraint");
            }
        },
        "packetDataHeaderInformation": (_el: _Element): void => { packetDataHeaderInformation = $._decode_explicit<PacketDataHeaderInformation>(() => _decode_PacketDataHeaderInformation)(_el); },
        "mediaSecFailureIndication": (_el: _Element): void => { mediaSecFailureIndication = $._decode_implicit<MediaSecFailureIndication>(() => _decode_MediaSecFailureIndication)(_el); },
        "csgIdentity": (_el: _Element): void => {
            csgIdentity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (csgIdentity.length < 4 || csgIdentity.length > 4) {
                throw new ASN1SizeError("IRI_Parameters.csgIdentity violates SIZE constraint");
            }
        },
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
        "proSeRelayMSISDN": (_el: _Element): void => {
            proSeRelayMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (proSeRelayMSISDN.length < 1 || proSeRelayMSISDN.length > 9) {
                throw new ASN1SizeError("IRI_Parameters.proSeRelayMSISDN violates SIZE constraint");
            }
        },
        "proSeRelayIMSI": (_el: _Element): void => {
            proSeRelayIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (proSeRelayIMSI.length < 3 || proSeRelayIMSI.length > 8) {
                throw new ASN1SizeError("IRI_Parameters.proSeRelayIMSI violates SIZE constraint");
            }
        },
        "proSeRelayIMEI": (_el: _Element): void => {
            proSeRelayIMEI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (proSeRelayIMEI.length < 8 || proSeRelayIMEI.length > 8) {
                throw new ASN1SizeError("IRI_Parameters.proSeRelayIMEI violates SIZE constraint");
            }
        },
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
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(71 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.hi2epsDomainId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_LawfulInterceptionIdentifier, $.BER)(value.lawfulInterceptionIdentifier, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_TimeStamp, $.BER)(value.timeStamp, $.BER);
    if (value.initiator !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_IRI_Parameters_initiator, $.BER)(value.initiator, $.BER);
    }
    if (value.locationOfTheTarget !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_Location, $.BER)(value.locationOfTheTarget, $.BER);
    }
    if (value.partyInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeSetOf<PartyInformation>(() => _encode_PartyInformation, $.BER), $.BER)(value.partyInformation, $.BER);
    }
    if (value.serviceCenterAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_PartyInformation, $.BER)(value.serviceCenterAddress, $.BER);
    }
    if (value.sMS !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_SMS_report, $.BER)(value.sMS, $.BER);
    }
    if (value.national_Parameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => _encode_National_Parameters, $.BER)(value.national_Parameters, $.BER);
    }
    if (value.ePSCorrelationNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_EPSCorrelationNumber, $.BER)(value.ePSCorrelationNumber, $.BER);
    }
    if (value.ePSevent !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => _encode_EPSEvent, $.BER)(value.ePSevent, $.BER);
    }
    if (value.sgsnAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 21, () => _encode_DataNodeAddress, $.BER)(value.sgsnAddress, $.BER);
    }
    if (value.gPRSOperationErrorCode !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => _encode_GPRSOperationErrorCode, $.BER)(value.gPRSOperationErrorCode, $.BER);
    }
    if (value.ggsnAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 24, () => _encode_DataNodeAddress, $.BER)(value.ggsnAddress, $.BER);
    }
    if (value.qOS !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 25, () => _encode_UmtsQos, $.BER)(value.qOS, $.BER);
    }
    if (value.networkIdentifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => _encode_Network_Identifier, $.BER)(value.networkIdentifier, $.BER);
    }
    if (value.sMSOriginatingAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 27, () => _encode_DataNodeAddress, $.BER)(value.sMSOriginatingAddress, $.BER);
    }
    if (value.sMSTerminatingAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 28, () => _encode_DataNodeAddress, $.BER)(value.sMSTerminatingAddress, $.BER);
    }
    if (value.iMSevent !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => _encode_IMSevent, $.BER)(value.iMSevent, $.BER);
    }
    if (value.sIPMessage !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => $._encodeOctetString, $.BER)(value.sIPMessage, $.BER);
    }
    if (value.servingSGSN_number !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 31, () => $._encodeOctetString, $.BER)(value.servingSGSN_number, $.BER);
    }
    if (value.servingSGSN_address !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 32, () => $._encodeOctetString, $.BER)(value.servingSGSN_address, $.BER);
    }
    if (value.ldiEvent !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 34, () => _encode_LDIevent, $.BER)(value.ldiEvent, $.BER);
    }
    if (value.correlation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 35, () => _encode_CorrelationValues, $.BER)(value.correlation, $.BER);
    }
    if (value.ePS_GTPV2_specificParameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 36, () => _encode_EPS_GTPV2_SpecificParameters, $.BER)(value.ePS_GTPV2_specificParameters, $.BER);
    }
    if (value.ePS_PMIP_specificParameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 37, () => _encode_EPS_PMIP_SpecificParameters, $.BER)(value.ePS_PMIP_specificParameters, $.BER);
    }
    if (value.ePS_DSMIP_SpecificParameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 38, () => _encode_EPS_DSMIP_SpecificParameters, $.BER)(value.ePS_DSMIP_SpecificParameters, $.BER);
    }
    if (value.ePS_MIP_SpecificParameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 39, () => _encode_EPS_MIP_SpecificParameters, $.BER)(value.ePS_MIP_SpecificParameters, $.BER);
    }
    if (value.servingNodeAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 40, () => $._encodeOctetString, $.BER)(value.servingNodeAddress, $.BER);
    }
    if (value.visitedNetworkId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 41, () => $._encodeUTF8String, $.BER)(value.visitedNetworkId, $.BER);
    }
    if (value.mediaDecryption_info !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 42, () => _encode_MediaDecryption_info, $.BER)(value.mediaDecryption_info, $.BER);
    }
    if (value.servingS4_SGSN_address !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 43, () => $._encodeOctetString, $.BER)(value.servingS4_SGSN_address, $.BER);
    }
    if (value.sipMessageHeaderOffer !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 44, () => $._encodeOctetString, $.BER)(value.sipMessageHeaderOffer, $.BER);
    }
    if (value.sipMessageHeaderAnswer !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 45, () => $._encodeOctetString, $.BER)(value.sipMessageHeaderAnswer, $.BER);
    }
    if (value.sdpOffer !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 46, () => $._encodeOctetString, $.BER)(value.sdpOffer, $.BER);
    }
    if (value.sdpAnswer !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 47, () => $._encodeOctetString, $.BER)(value.sdpAnswer, $.BER);
    }
    if (value.uLITimestamp !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 48, () => $._encodeOctetString, $.BER)(value.uLITimestamp, $.BER);
    }
    if (value.packetDataHeaderInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 49, () => _encode_PacketDataHeaderInformation, $.BER)(value.packetDataHeaderInformation, $.BER);
    }
    if (value.mediaSecFailureIndication !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 50, () => _encode_MediaSecFailureIndication, $.BER)(value.mediaSecFailureIndication, $.BER);
    }
    if (value.csgIdentity !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 51, () => $._encodeOctetString, $.BER)(value.csgIdentity, $.BER);
    }
    if (value.heNBIdentity !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 52, () => $._encodeOctetString, $.BER)(value.heNBIdentity, $.BER);
    }
    if (value.heNBiPAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 53, () => _encode_IPAddress, $.BER)(value.heNBiPAddress, $.BER);
    }
    if (value.heNBLocation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 54, () => _encode_HeNBLocation, $.BER)(value.heNBLocation, $.BER);
    }
    if (value.tunnelProtocol !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 55, () => _encode_TunnelProtocol, $.BER)(value.tunnelProtocol, $.BER);
    }
    if (value.pANI_Header_Info !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 56, () => $._encodeSequenceOf<PANI_Header_Info>(() => _encode_PANI_Header_Info, $.BER), $.BER)(value.pANI_Header_Info, $.BER);
    }
    if (value.imsVoIP !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 57, () => _encode_IMS_VoIP_Correlation, $.BER)(value.imsVoIP, $.BER);
    }
    if (value.xCAPmessage !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 58, () => $._encodeOctetString, $.BER)(value.xCAPmessage, $.BER);
    }
    if (value.logicalFunctionInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 59, () => _encode_DataNodeIdentifier, $.BER)(value.logicalFunctionInformation, $.BER);
    }
    if (value.ccUnavailableReason !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 60, () => $._encodePrintableString, $.BER)(value.ccUnavailableReason, $.BER);
    }
    if (value.carrierSpecificData !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 61, () => $._encodeOctetString, $.BER)(value.carrierSpecificData, $.BER);
    }
    if (value.current_previous_systems !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 62, () => _encode_Current_Previous_Systems, $.BER)(value.current_previous_systems, $.BER);
    }
    if (value.change_Of_Target_Identity !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 63, () => _encode_Change_Of_Target_Identity, $.BER)(value.change_Of_Target_Identity, $.BER);
    }
    if (value.requesting_Network_Identifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 64, () => $._encodeOctetString, $.BER)(value.requesting_Network_Identifier, $.BER);
    }
    if (value.requesting_Node_Type !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 65, () => _encode_Requesting_Node_Type, $.BER)(value.requesting_Node_Type, $.BER);
    }
    if (value.serving_System_Identifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 66, () => $._encodeOctetString, $.BER)(value.serving_System_Identifier, $.BER);
    }
    if (value.proSeTargetType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 67, () => _encode_ProSeTargetType, $.BER)(value.proSeTargetType, $.BER);
    }
    if (value.proSeRelayMSISDN !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 68, () => $._encodeOctetString, $.BER)(value.proSeRelayMSISDN, $.BER);
    }
    if (value.proSeRelayIMSI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 69, () => $._encodeOctetString, $.BER)(value.proSeRelayIMSI, $.BER);
    }
    if (value.proSeRelayIMEI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 70, () => $._encodeOctetString, $.BER)(value.proSeRelayIMEI, $.BER);
    }
    if (value.extendedLocParameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 71, () => _encode_ExtendedLocParameters, $.BER)(value.extendedLocParameters, $.BER);
    }
    if (value.locationErrorCode !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 72, () => _encode_LocationErrorCode, $.BER)(value.locationErrorCode, $.BER);
    }
    if (value.otherIdentities !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 73, () => $._encodeSequenceOf<PartyInformation>(() => _encode_PartyInformation, $.BER), $.BER)(value.otherIdentities, $.BER);
    }
    if (value.deregistrationReason !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 74, () => _encode_DeregistrationReason, $.BER)(value.deregistrationReason, $.BER);
    }
    if (value.requesting_Node_Identifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 75, () => $._encodeOctetString, $.BER)(value.requesting_Node_Identifier, $.BER);
    }
    if (value.roamingIndication !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 76, () => _encode_VoIPRoamingIndication, $.BER)(value.roamingIndication, $.BER);
    }
    if (value.cSREvent !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 77, () => _encode_CSREvent, $.BER)(value.cSREvent, $.BER);
    }
    if (value.ptc !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 78, () => _encode_PTC, $.BER)(value.ptc, $.BER);
    }
    if (value.ptcEncryption !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 79, () => _encode_PTCEncryptionInfo, $.BER)(value.ptcEncryption, $.BER);
    }
    if (value.additionalCellIDs !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 80, () => $._encodeSequenceOf<AdditionalCellID>(() => _encode_AdditionalCellID, $.BER), $.BER)(value.additionalCellIDs, $.BER);
    }
    if (value.scefID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 81, () => $._encodeUTF8String, $.BER)(value.scefID, $.BER);
    }
    if (value.national_HI2_ASN1parameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 255, () => _encode_National_HI2_ASN1parameters, $.BER)(value.national_HI2_ASN1parameters, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IRI_Parameters(value, elGetter);
}


/* eslint-enable */
